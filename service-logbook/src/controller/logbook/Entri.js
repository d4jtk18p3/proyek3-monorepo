import mongoose from 'mongoose'
import { validationResult } from 'express-validator'
import entriSchema from '../../dao/logbook/Entri'
import logbookSchema from '../../dao/logbook/Logbook'
import * as StudiDAO from '../../dao/Studi'
import * as PerkuliahanDAO from '../../dao/Perkuliahan'
import axios from 'axios'

export const createEntri = (req, res, next) => {
  try {
    const stringDate = req.body.tanggal.split('/')
    const year = parseInt(stringDate[0], 10)
    const month = parseInt(stringDate[1], 10) - 1 // urutan bulan dimulai dari 0
    const day = parseInt(stringDate[2], 10)
    const date = new Date(year, month, day, 7)
    const entri = {
      tanggal: date,
      kegiatan: req.body.kegiatan,
      hasil: req.body.hasil,
      kesan: req.body.kesan
    }

    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      error.message = error.errors[0].msg
      throw error
    }
    entri._id = mongoose.Types.ObjectId()
    entriSchema.postEntri(entri)
      .then((result) => {
        res.status(200).json({
          message: 'Entri created successfully',
          entri: result
        })
      })
      .catch((err) => {
        console.error(err)

        const error = {
          status: 400,
          message: 'Failed to create entri'
        }

        next(error)
      })
    const nim = req.params.nim
    const resultStudi = []
    StudiDAO.getStudiByIdMahasiswa(nim)
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          resultStudi.push(result[i])
        }
        const resultIdPerkuliahan = []
        for (let i = 0; i < resultStudi.length; i++) {
          const result = resultStudi[i].id_perkuliahan
          if (result != null) {
            resultIdPerkuliahan.push(result)
          }
        }
        if (resultIdPerkuliahan instanceof Error) {
          throw resultIdPerkuliahan
        }
        const resultMatkul = []
        for (let i = 0; i < resultIdPerkuliahan.length; i++) {
          PerkuliahanDAO.getPerkuliahanById(resultIdPerkuliahan[i])
            .then((result) => {
              if (result != null) {
                resultMatkul.push(result)
              }
              if (i === resultIdPerkuliahan.length - 1) {
                const condition = { nim: req.params.nim, kelas_proyek: resultMatkul[resultMatkul.length - 1].id_mata_kuliah }
                let logbook = {}
                logbookSchema.getLogbook(condition)
                  .then((result) => {
                    logbook = {
                      data: result.data
                    }
                    // Update entri list
                    const newLogbook = logbook.data[0]
                    const len = logbook.data[0].entri.length
                    newLogbook.entri[len] = entri._id.toString()
                    logbookSchema.updateEntriLogbook(condition, newLogbook)
                      .then((result) => {
                        console.log('Success update entri list: ', result)
                        const link = 'http://logbook.7f000001.nip.io/logbook/viewlogbook/' + newLogbook.entri[len]
                        console.log(link)
                        emailBody = emailBody.replace('<tanggal>', req.body.tanggal)
                        emailBody = emailBody.replace('<nama>', result.data.nama)
                        emailBody = emailBody.replace('<link>', 'http://logbook.7f000001.nip.io/logbook/viewlogbook/' + newLogbook.entri[len])
                        console.log(emailBody)
                        sendEmail(req.params.nim, 'Entri berhasil buat', emailBody)
                          .then((result) => {
                            console.log('Success send email')
                          })
                          .catch(() => {
                            const error = {
                              status: 404,
                              message: 'error sending entri'
                            }
                            next(error)
                          })
                      })
                      .catch(() => {
                        const error = {
                          status: 404,
                          message: 'Failed to update logbook'
                        }
                        console.error(error)
                      })
                  })
                  .catch(() => {
                    const error = {
                      status: 404,
                      message: 'Logbook not found'
                    }
                    console.error(error)
                  })
              }
            })
            .catch(() => {
              const error = {
                status: 404,
                message: 'Perkuliahan not found'
              }
              console.error(error)
            })
        }
        if (resultMatkul instanceof Error) {
          throw resultMatkul
        }
      })
      .catch(() => {
        const error = {
          status: 404,
          message: 'Studi not found'
        }
        console.error(error)
      })
  } catch (error) {
    next(error)
  }
}

export const getEntri = (req, res, next) => {
  entriSchema.getEntri({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        entri: result.data
      })
    })
    .catch((err) => {
      console.error(err)
      const error = {
        status: 404,
        message: 'Entri not found'
      }
      next(error)
    })
}

export const updateEntri = (req, res, next) => {
  try {
    const stringDate = req.body.tanggal.split('/')
    const year = parseInt(stringDate[0], 10)
    const month = parseInt(stringDate[1], 10) - 1 // urutan bulan dimulai dari 0
    const day = parseInt(stringDate[2], 10)
    const date = new Date(year, month, day, 7)

    const entri = {
      tanggal: date,
      kegiatan: req.body.kegiatan,
      hasil: req.body.hasil,
      kesan: req.body.kesan
    }

    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      error.message = error.errors[0].msg
      throw error
    }

    entriSchema.updateEntri({ _id: req.query.id }, entri)
      .then((result) => {
        res.status(200).json({
          message: 'Entri updated successfully',
          data: result.data
        })
      })
      .catch((err) => {
        console.error(err)

        const error = {
          status: 400,
          message: 'Failed to update entri'
        }

        next(error)
      })
  } catch (error) {
    next(error)
  }
}

export function updateEntriByDate (req, res, next) {
  const entri = {
    tanggal: req.body.tanggal,
    kegiatan: req.body.kegiatan,
    hasil: req.body.hasil,
    kesan: req.body.kesan
  }
  entriSchema.updateEntri({ tanggal: req.query.tanggal }, entri, function (err, entri) {
    if (err) {
      res.json({
        error: err
      })
    }
    res.json({
      message: 'Entri updated successfully'
    })
  })
}

export function removeEntri (req, res, next) {
  try {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      error.message = error.errors[0].msg
      throw error
    }

    // Update entris list
    const condition = { _id: req.params.id_logbook }
    let logbook = {}
    logbookSchema.getLogbook(condition)
      .then((result) => {
        logbook = {
          data: result.data
        }

        const delEntri = req.query.id
        const len = logbook.data[0].entri.length
        const newLogbook = logbook.data[0]
        for (let i = 0; i < len; i++) {
          if (JSON.stringify(newLogbook.entri[i]) === JSON.stringify(delEntri)) {
            newLogbook.entri.splice(i, 1)
            i--
          }
        }

        logbookSchema.updateEntriLogbook(condition, newLogbook)
          .then((result) => {
            console.log('Success update', result)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch(() => {
        console.error('Logbook not found')
      })

    entriSchema.deleteEntri({ _id: req.query.id })
      .then((result) => {
        res.status(200).json({
          message: 'Entri deleted successfully',
          entri: result.data
        })
      })
      .catch((err) => {
        console.error(err)

        const error = {
          status: 400,
          message: 'Failed to delete entri'
        }

        next(error)
      })
  } catch (error) {
    next(error)
  }
}

export function removeEntriByDate (req, res, next) {
  try {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      error.message = error.errors[0].msg
      throw error
    }

    // Update entris list
    const condition = { _id: req.params.id_logbook }
    let logbook = {}
    logbookSchema.getLogbook(condition)
      .then((result) => {
        logbook = {
          data: result.data
        }

        const queryDate = req.query.tanggal.split('-')
        const year = parseInt(queryDate[0], 10)
        const month = parseInt(queryDate[1], 10) - 1 // urutan bulan dimulai dari 0
        const day = parseInt(queryDate[2], 10)
        const date = new Date(year, month, day, 24)
        let len = logbook.data[0].entri.length
        const newLogbook = logbook.data[0]
        let i = 0
        while (i < len) {
          console.log('INI I TAU', i)
          entriSchema.getEntri({ _id: newLogbook.entri[i]._id })
            .then((result) => {
              if (result.data[0].tanggal.getDate() === date.getDate()) {
                newLogbook.entri.splice(i, 1)
                i--
                len--
                console.log('YANG BARU', newLogbook)
                logbookSchema.updateEntriLogbook(condition, newLogbook)
                  .then((result) => {
                    console.log('Success update logbook', result)
                  })
                  .catch((err) => {
                    console.error(err)
                  })

                entriSchema.deleteEntri({ _id: newLogbook.entri[i]._id })
                  .then((result) => {
                    res.status(200).json({
                      message: 'Entri deleted successfully',
                      entri: result.data
                    })
                  })
                  .catch((err) => {
                    console.error(err)

                    const error = {
                      status: 400,
                      message: 'Failed to delete entri'
                    }

                    next(error)
                  })
              }
            })
            .catch((err) => {
              console.error(err)
            })

          i++
        }
      })
      .catch((err) => {
        console.error(err)
      })
  } catch (error) {
    next(error)
  }
}

const sendEmail = async (nim, subject, body) => {
  try {
    await axios.post(process.env.URL_NOTIF, {
      idUser: nim,
      subject: subject,
      bodyEmail: body
    })
    return true
  } catch (e) {
    return false
  }
}

let emailBody = '<!DOCTYPE html>\n' +
'<html>\n' +
'  <head>\n' +
'    <meta charset="utf-8">\n' +
'    <title>Politeknik Negeri Bandung</title>\n' +
'  </head>\n' +
'  <body style="background-color: #eeeeee; margin: 0;">\n' +
'    <table width="100%" height="100%" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
'      <!-- <tbody style="background-color: #000000;"> -->\n' +
'      <!-- START HEADER -->\n' +
'      <table id="header" width="100%" height="60" align="center" cellpadding="0" cellspacing="0" style="border: 1px #C9C9C9 solid;background-color: #FFFFFF;">\n' +
'        <tr>\n' +
'          <td align="center" width="50" style="padding: 5px 10px 0px;">\n' +
'            <img alt="Logo Politeknik Negeri Bandung" src="https://i.ibb.co/Nyb735s/logo-polban.png" width="20">\n' +
'          </td>\n' +
'          <td style="font-family: Arial, sans-serif; font-size:11px; color:#242424; line-height:24px; font-weight: 600;"> Politeknik Negeri Bandung </td>\n' +
'        </tr>\n' +
'      </table>\n' +
'      <!-- END HEADER -->\n' +
'      <table id="content" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width: 800px;background-color: #FFFFFF;">\n' +
'        <tr>\n' +
'          <td height="50"></td>\n' +
'        </tr>\n' +
'        <tr>\n' +
'          <td align="center" valign="top">\n' +
'            <table bgcolor="#FFFFFF" class="col-652" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
'              <tbody>\n' +
'                <tr>\n' +
'                  <td align="center" valign="top" style="background-size:cover; background-position:top;">\n' +
'                    <table class="col-652" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">\n' +
'                      <tbody>\n' +
'                        <tr id="content">\n' +
'                          <table class="col-652" order="0" cellpadding="0" cellspacing="0" style="padding: 10px 80px;background-color: #FFFFFF;">\n' +
'                            <tr>\n' +
'                              <td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:20px; color:#242424; line-height:24px; font-weight: bold;"> Logbook Berhasil ditambahkan </td>\n' +
'                            </tr>\n' +
'                            <tr>\n' +
'                              <td height="50"></td>\n' +
'                            </tr>\n' +
'                            <tr>\n' +
'                              <td id="paragraph" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#242424; line-height:24px; font-weight: 300; padding: 10px 40px;"> Hai, <nama>!<br>\n' +
'                                <br> Logbook pada <tanggal> telah ditambahkan.<br>\n' +
'                                <br> Logbook yang telah dibuat bisa dilihat pada <link>. <br>\n' +
'                                <br>\n' +
'                              </td>\n' +
'                            </tr>\n' +
'                          </table>\n' +
'                        </tr>\n' +
'                      </tbody>\n' +
'                    </table>\n' +
'                  </td>\n' +
'                </tr>\n' +
'              </tbody>\n' +
'            </table>\n' +
'          </td>\n' +
'        </tr>\n' +
'      </table>\n' +
'      <table id="footer" width="100%" height="100" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width: 800px;background-color: #FFFFFF;">\n' +
'        <tr align="center">\n' +
'          <td>\n' +
'            <p>\n' +
'              <hr>\n' +
'            <div style="font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#272343; line-height:24px; font-weight: 600;"> Copyright Politeknik Negeri Bandung. All right reserved. </div>\n' +
'            <div style="font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#242424; line-height:24px; font-weight: 400;"> Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, <br> Kabupaten Bandung Barat, Jawa Barat 40559 </div>\n' +
'            </p>\n' +
'          </td>\n' +
'        </tr>\n' +
'      </table>\n' +
'      <!-- </tbody> -->\n' +
'    </table>\n' +
'  </body>\n' +
'</html>'
