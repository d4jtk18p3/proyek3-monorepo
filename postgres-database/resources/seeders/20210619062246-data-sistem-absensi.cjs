'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.sequelize.query(
      `INSERT INTO "Jadwal" (ja,jb,waktu_mulai,waktu_selesai,batas_terakhir_absen,hari,jenis,nip,id_perkuliahan) VALUES 
      (3,4,'08:40:00','10:40:00','09:10:00',1,'TE','196610181995121000',1),
      (5,6,'10:40:00','12:20:00','11:10:00',1,'TE','196012261992031000',2),
      (7,9,'13:00:00','15:30:00','13:30:00',1,'PR','198405122019031000',2),
      (3,4,'08:40:00','10:40:00','09:10:00',2,'TE','198104072006041000',3),
      (8,10,'13:50:00','16:40:00','14:20:00',2,'PR','197407182001121000',3),
      (1,2,'07:00:00','08:40:00','07:30:00',3,'TE','196111091993032000',3),
      (7,12,'13:00:00','18:20:00','13:30:00',3,'PR','199312282019031000',4),
      (1,6,'07:00:00','12:20:00','07:30:00',4,'PR','199301062019031000',4),
      (7,9,'13:00:00','15:30:00','13:30:00',4,'TE','196101141992021000',5),
      (1,3,'07:00:00','09:30:00','07:30:00',5,'TE','196312131992012000',6),
      (1,3,'07:00:00','09:30:00','07:30:00',1,'PR','199003022019032000',7);
      `
    )

    const jumlahData = parseInt((await queryInterface.sequelize.query(`
      SELECT COUNT(*) FROM "Jadwal"
    `))[0][0].count);
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Jadwal_id_jadwal_seq" RESTART WITH ${jumlahData + 1}`)


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
