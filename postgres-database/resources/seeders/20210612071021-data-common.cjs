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
      `insert into "Jabatan" (id, nama_jabatan)
      values (1, 'Wali Dosen'), (2, 'Pengampu'), (3, 'Ketua Jurusan'), (4, 'Ketua Program Studi')`
    )
    await queryInterface.sequelize.query(
      `insert into "Dosen" (nama_dosen, nip)
      values ('Ade Chandra Nugraha', '197312271999031000'),
      ('Ani Rahmani', '196810141993032000'),
      ('Bambang Wisnuadhi', '197201061999031000'),
      ('Didik Suwito Pribadi', '196012261992031000'),
      ('Irawan Thamrin', '196208151990031000'),
      ('Joe Lian Min', '196610181995121000'),
      ('Nurjannah Syakrani', '196312131992012000'),
      ('Santi Sundari', '197109031999032000'),
      ('Tati Susilawati', '196404121993032000'),
      ('Urip Teguh Setijohatmo', '196009281994031000'),
      ('Yudi Widhiyasana', '197407182001121000'),
      ('Eddy Bambang Soewono', '196101141992021000'),
      ('Ferry Feirizal', '195905211994031000'),
      ('Jonner Hutahaean', '196210211993031000'),
      ('Transmissia Semiawan', '196111091993032000'),
      ('Setiadi Rachmat', '196904041998031000'),
      ('Suprihanto', '196303161995121000'),
      ('Iwan Awaludin', '197604182001121000'),
      ('Irwan Setiawan', '198004192005011000'),
      ('Priyanto Hidayatullah', '198104072006041000'),
      ('Yadhi Adhitia Permana', '197912242008121000'),
      ('Ida Suhartini', '198012122008122000'),
      ('Fitri Diani', '198009162009122000'),
      ('Ghifari Munawar', '198604122014041000'),
      ('Ade Hodijah', '198502102015042000'),
      ('Zulkifli Arsyad', '198801292015041000'),
      ('Rahil Jumiyani', '199003022019032000'),
      ('Maisevli Harika', '198604212018031000'),
      ('Akhmad Bakhrun', '198705172019031000'),
      ('Aprianti Nanda Sari', '199304262019032000'),
      ('Ardhian Ekawijana', '198405122019031000'),
      ('Asri Maspupah', '198906102019032000'),
      ('Beri Noviansyah', '198911032019031000'),
      ('Cholid Fauzi', '198409012019031000'),
      ('Djoko Cahyo Utomo Lieharyani', '199312282019031000'),
      ('Hashri Hayati', '199210222019032000'),
      ('Lukmannul Hakim Firdaus', '199301062019031000'),
      ('Muhammad Riza Alifi', '199209092019031000'),
      ('Muhammad Rizqi Sholahuddin', '199105302019031000'),
      ('Siti Dwi Setiarini', '199112182019032000'),
      ('Sri Ratna Wulan', '198903252019032000'),
      ('Sofy Fitriani', '199106142019032000'),
      ('Trisna Gelar Abdillah', '198608202019031000'),
      ('Wendi Wirasta', '198706302019031000')
      `
    )

    await queryInterface.sequelize.query(
      `insert into "Menjabat" (nip, id_jabatan)
      values ('197312271999031000', 2),
      ('196810141993032000', 2),
      ('197201061999031000', 3),
      ('197201061999031000', 2),
      ('196012261992031000', 2),
      ('196012261992031000', 1),
      ('196208151990031000', 2),
      ('196610181995121000', 2),
      ('196312131992012000', 2),
      ('197109031999032000', 4),
      ('197109031999032000', 2),
      ('196404121993032000', 2),
      ('196009281994031000', 1),
      ('196009281994031000', 2),
      ('197407182001121000', 2),
      ('197407182001121000', 1),
      ('196101141992021000', 2),
      ('195905211994031000', 2),
      ('196210211993031000', 2),
      ('196210211993031000', 1),
      ('196111091993032000', 2),
      ('196904041998031000', 2),
      ('196303161995121000', 2),
      ('196303161995121000', 1),
      ('197604182001121000', 2),
      ('197604182001121000', 1),
      ('198004192005011000', 2),
      ('198104072006041000', 2),
      ('197912242008121000', 2),
      ('197912242008121000', 1),
      ('198012122008122000', 2),
      ('198009162009122000', 2),
      ('198604122014041000', 4),
      ('198604122014041000', 2),
      ('198502102015042000', 2),
      ('198801292015041000', 2),
      ('199003022019032000', 2),
      ('198604212018031000', 2),
      ('198705172019031000', 2),
      ('199304262019032000', 2),
      ('198405122019031000', 2),
      ('198405122019031000', 1),
      ('198906102019032000', 2),
      ('198911032019031000', 2),
      ('198409012019031000', 2),
      ('199312282019031000', 2),
      ('199312282019031000', 1),
      ('199210222019032000', 2),
      ('199301062019031000', 2),
      ('199209092019031000', 2),
      ('199209092019031000', 1),
      ('199105302019031000', 2),
      ('199112182019032000', 2),
      ('199112182019032000', 1),
      ('198903252019032000', 2),
      ('199106142019032000', 2),
      ('198608202019031000', 2),
      ('198706302019031000', 2),
      ('198706302019031000', 1)
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Jurusan" (kode_jurusan, nip)
      values ('15', '197201061999031000')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Program_Studi" (kode_program_studi, kode_jurusan, nip)
      values ('24', '15', '197109031999032000'), ('11', '15', '198604122014041000')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Kelas" (kode_kelas, kode_program_studi, tahun, nip)
      values (1703, '24', 2017, '197912242008121000'),
      (1803, '24', 2018, '196009281994031000'),
      (1903, '24', 2019, '196303161995121000'),
      (1904, '24', 2019, '196210211993031000'),
      (2003, '24', 2020, '198405122019031000'),
      (2004, '24', 2020, '197407182001121000'),
      (1801, '11', 2018, '196012261992031000'),
      (1802, '11', 2018, '199312282019031000'),
      (1901, '11', 2019, '199112182019032000'),
      (1902, '11', 2019, '198706302019031000'),
      (2001, '11', 2020, '199209092019031000'),
      (2002, '11', 2020, '197604182001121000');
      `
    )
    await queryInterface.sequelize.query(
      `INSERT INTO "Mata_Kuliah" (id,semester,nama_mata_kuliah,sks_teori,sks_praktek,kode_program_studi) VALUES
      ('16TIN1034',1,'Dasar-Dasar Pemrograman',3,1,'24'),
      ('16TIN1043',1,'Matematika Terapan 1',3,0,'24'),
      ('16TIN1052',1,'Komputasi Kognitif',2,0,'24'),
      ('16TIN1073',1,'Matematika Diskrit 1',3,0,'24'),
      ('16TIN1064',1,'Konsep Teknologi Informasi Dan Komunikasi',1,1,'24'),
      ('16TIN2013',2,'Aljabar Linear',3,0,'24'),
      ('16TIN2043',2,'Proyek 1',0,3,'24'),
      ('16TIN2054',2,'Teknik Pemrograman',3,1,'24'),
      ('16TIN2032',2,'Komunikasi Teknis Dan Bisnis',2,0,'24'),
      ('16TIN2074',2,'Struktur Data dan Algoritma',2,2,'24'),
      ('16TIN3043',3,'Matematika Terapan 2',1,1,'24'),
      ('16TIN3053',3,'Sistem Basis Data',3,1,'24'),
      ('16TIN3013',3,'Arsitektur Dan Organisasi Komputer',3,0,'24'),
      ('16TIN3023',3,'Matematika Diskrit 2',3,0,'24'),
      ('16TIN3073',3,'Komunikasi Data Dan Jaringan',2,1,'24'),
      ('16TIN3063',3,'Prinsip Bahasa Pemrograman',1,1,'24'),
      ('16TIN4014',4,'Analisis dan Perancangan Perangkat Lunak 1',3,1,'24'),
      ('16TIN4024',4,'Pemodelan Data',2,2,'24'),
      ('16TIN4033',4,'Sistem Operasi',2,1,'24'),
      ('16TIN4053',4,'Proyek 2',1,2,'24'),
      ('16TIN4043',4,'Perancangan Antarmuka',2,1,'24'),
      ('16TIN4063',4,'Komputer Grafik',2,1,'24'),
      ('16TIN5024',5,'Sistem Informasi',2,2,'24'),
      ('16TIN5033',5,'Pengolahan Citra Digital',2,1,'24'),
      ('16TIN5043',5,'Statistika Dan Probabilitas',3,0,'24'),
      ('16TIN5013',5,'Komputasi Numerik',1,1,'24'),
      ('16TIN5054',5,'Pengembangan Web',1,1,'24'),
      ('16TIN5063',5,'Manajemen Proyek Perangkat Lunak',1,1,'24'),
      ('16TIN6013',6,'Analisis dan Perancangan Perangkat Lunak 2',2,1,'24'),
      ('16TIN6023',6,'Sistem Terdistribusi',2,1,'24'),
      ('16TIN6043',6,'Pengujian Perangkat Lunak',2,1,'24'),
      ('16TIN6053',6,'Pemrograman Perangkat Lunak Berorientasi Objek',1,1,'24'),
      ('16TIN6063',6,'Proyek 3',1,2,'24'),
      ('16TIN6073',6,'Metodologi Penelitian',1,1,'24'),
      ('16TIN7022',7,'Praktek Kerja Lapangan 2',1,0,'24'),
      ('16TIN7034',7,'Proyek 4',0,3,'24'),
      ('16TIN8012',8,'Etika dan Aspek Legal Teknologi Informasi',2,0,'24'),
      ('16TIN8032',8,'Manajemen Kualitas Terpadu',0,4,'24'),
      ('16TIN8044',8,'Proyek 5',0,4,'24'),
      ('16TKO1012',1,'Pengantar Ilmu Lingkungan',2,0,'11'),
      ('16TKO1054',1,'Dasar-Dasar Pemrograman',0,3,'11'),
      ('16TKO1083',1,'Proyek Perangkat Lunak 1',1,1,'11'),
      ('16TKO1022',1,'Dasar Komunikasi',3,0,'11'),
      ('16TKO1073',1,'Matematika Diskrit I',2,1,'11'),
      ('16TKO1062',1,'Ilmu Komputer',1,1,'11'),
      ('16TKO2032',2,'Matematika Terapan 2',3,1,'11'),
      ('16TKO2053',2,'Matematika Diskrit 2',3,0,'11'),
      ('16TKO2062',2,'Komputasi Kognitif',0,3,'11'),
      ('16TKO2073',2,'Proyek Perangkat Lunak 2',2,2,'11'),
      ('16TKO2044',2,'Struktur Data dan Algoritma',2,2,'11'),
      ('16TKO3024',3,'Pengantar Rekayasa Perangkat Lunak',1,1,'11'),
      ('16TKO3043',3,'Pemrograman Berbasis Objek',3,1,'11'),
      ('16TKO3073',3,'Proyek Perangkat Lunak 3',1,1,'11'),
      ('16TKO3014',3,'Basis Data',2,2,'11'),
      ('16TKO3033',3,'Aljabar Linear',3,0,'11'),
      ('16TKO4014',4,'Analisa Perancangan Sistem Informasi',2,1,'11'),
      ('16TKO4024',4,'Pengembangan Perangkat Lunak I',3,1,'11'),
      ('16TKO4043',4,'Pemrograman Perangkat Bergerak (Mobile)',1,2,'11'),
      ('16TKO4033',4,'Statistika Dan Probabilitas',2,2,'11'),
      ('16TKO4063',4,'Proyek Perangkat Lunak 4',1,2,'11'),
      ('16TKO5043',5,'Komputer Grafik',1,1,'11'),
      ('16TKO5063',5,'Komunikasi Data dan Jaringan',1,1,'11'),
      ('16TKO5073',5,'Proyek Perangkat Lunak 5',1,1,'11'),
      ('16TKO5024',5,'Pengembangan Perangkat Lunak II',2,2,'11'),
      ('16TKO5052',5,'Kerja Praktek',0,2,'11'),
      ('16TKO5033',5,'Komputasi Numerik',3,0,'11'),
      ('16TKO6022',6,'Pengolahan Citra Digital',2,1,'11'),
      ('16TKO6032',6,'Etika Profesi',2,1,'11'),
      ('16TKO6054',6,'Tugas Akhir',0,4,'11'),
      ('16TKO6043',6,'Manajemen Proyek',2,1,'11');
      `
    )
    await queryInterface.sequelize.query(
      `INSERT INTO "Mahasiswa" (nim,nama,email,nomor_ponsel,url_foto,kode_kelas) VALUES 
      (181524001,'si b','si.b.tif417@polban.ac.id','08212212121','https://id.pinterest.com/pin/280700989263813088/',1803),
      (191524033,'Alex Sinaga','alex.sinaga.tif419@polban.ac.id','08124125163','https://akademik.polban.ac.id/fotomhsrekap/191524033.jpg',1904),
      (191524034,'Andika Yudha Riyanto','andika.yudha.tif419@polban.ac.id','08214124151','https://akademik.polban.ac.id/fotomhsrekap/191524034.jpg',1904),
      (191524035,'Aulia Rahmi','aulia.rahmi.tif419@polban.ac.id','08521846712','https://akademik.polban.ac.id/fotomhsrekap/191524035.jpg',1904),
      (191524036,'Azhar Subhan Fauzi','azhar.subhan.tif419@polban.ac.id','08521812312','https://akademik.polban.ac.id/fotomhsrekap/191524036.jpg',1904),
      (191524037,'Azzam Badruz Zaman','azzam.badruz.tif419@polban.ac.id','08312312311','https://akademik.polban.ac.id/fotomhsrekap/191524037.jpg',1904),
      (191524038,'Bima Putra S','bima.putra.tif419@polban.ac.id','08521832121','https://akademik.polban.ac.id/fotomhsrekap/191524038.jpg',1904),
      (191524040,'Dzakira Fabillah','dzakira.fabillah.tif419@polban.ac.id','08521832321','https://akademik.polban.ac.id/fotomhsrekap/191524040.jpg',1904),
      (191524041,'Fachri Dhia Fauzan','fachri.dhia.tif419@polban.ac.id','08141525244','https://akademik.polban.ac.id/fotomhsrekap/191524041.jpg',1904),
      (191524042,'Fachri Muhammad B.','fachri.muhammad.tif419@polban.ac.id','08155555555','https://akademik.polban.ac.id/fotomhsrekap/191524042.jpg',1904),
      (191524043,'Friska Intan Muta''alliy','friska.intan.tif419@polban.ac.id','08166666666','https://akademik.polban.ac.id/fotomhsrekap/191524043.jpg',1904),
      (191524044,'Giusty Fadh Wiranapoera','giusty.fadh.tif419@polban.ac.id','08177777777','https://akademik.polban.ac.id/fotomhsrekap/191524044.jpg',1904),
      (191524045,'Herlana','herlana.tif419@polban.ac.id','08188888888','https://akademik.polban.ac.id/fotomhsrekap/191524045.jpg',1904),
      (191524046,'Johan Hansel Salusu','johan.hansel.tif419@polban.ac.id','08141414141','https://akademik.polban.ac.id/fotomhsrekap/191524046.jpg',1904),
      (191524047,'Kayis Shalahuddin','kayis.shalahuddin.tif419@polban.ac.id','08121222222','https://akademik.polban.ac.id/fotomhsrekap/191524047.jpg',1904),
      (191524048,'Meta Arda Nabila','meta.arda.tif419@polban.ac.id','08129341803','https://akademik.polban.ac.id/fotomhsrekap/191524048.jpg',1904),
      (191524049,'Mohammad Rizky Maulidhan','mohammad.rizky.tif419@polban.ac.id','08128844444','https://akademik.polban.ac.id/fotomhsrekap/191524049.jpg',1904),
      (191524050,'Muhammad Faza I. R.','muhammad.faza.tif419@polban.ac.id','08109876577','https://akademik.polban.ac.id/fotomhsrekap/191524050.jpg',1904),
      (191524051,'Muhammad Syahid A.','muhammad.syahid.tif419@polban.ac.id','08900000000','https://akademik.polban.ac.id/fotomhsrekap/191524051.jpg',1904),
      (191524052,'Nabil Putra Hadiyani','nabil.putra.tif419@polban.ac.id','08974717277','https://akademik.polban.ac.id/fotomhsrekap/191524052.jpg',1904),
      (191524053,'Nisa Shadrina','nisa.shadrina.tif419@polban.ac.id','08598768766','https://akademik.polban.ac.id/fotomhsrekap/191524053.jpg',1904),
      (191524054,'Putri Syalwa Abdullah','putri.syalwa.tif419@polban.ac.id','08511223340','https://akademik.polban.ac.id/fotomhsrekap/191524054.jpg',1904),
      (191524057,'Rizka Auliarahmi','rizka.auliarahmi.tif419@polban.ac.id','08112341411','https://akademik.polban.ac.id/fotomhsrekap/191524057.jpg',1904),
      (191524058,'Sabar Muhamad Itikap','sabar.muhamad.tif419@polban.ac.id','08313134255','https://akademik.polban.ac.id/fotomhsrekap/191524058.jpg',1904),
      (191524059,'Salman Shalahuddin','salman.shalahuddin.tif419@polban.ac.id','08522314151','https://akademik.polban.ac.id/fotomhsrekap/191524059.jpg',1904),
      (191524061,'Shinta Nurkaafi','shinta.nurkaafi.tif419@polban.ac.id','08184847488','https://akademik.polban.ac.id/fotomhsrekap/191524061.jpg',1904),
      (191524062,'Titis Sampurno','titis.sampurno.tif419@polban.ac.id','08212212121','https://akademik.polban.ac.id/fotomhsrekap/191524062.jpg',1904),
      (191524063,'Tubagus M Akbar K','tubagus.muchamad.tif419@polban.ac.id','08212212121','https://akademik.polban.ac.id/fotomhsrekap/191524063.jpg',1904),
      (191524064,'Wafi Khoerun Nashirin','wafi.khoerun.tif419@polban.ac.id','08212212121','https://akademik.polban.ac.id/fotomhsrekap/191524064.jpg',1904),
      (191511001,'si c','si.c.tif417@polban.ac.id','08212212121','https://id.pinterest.com/pin/280700989263813088/',1901),
      (191511002,'si f','si.f.tif417@polban.ac.id','08212212121','https://id.pinterest.com/pin/280700989263813088/',1901),
      (191511003,'si n','si.n.tif417@polban.ac.id','08212212121','https://id.pinterest.com/pin/280700989263813088/',1901);
      `
    )
    await queryInterface.sequelize.query(
      `INSERT INTO "Perkuliahan" (id,tahun_akademik,id_mata_kuliah,kode_kelas) VALUES
      (1,2021,'16TIN5054',1904),
      (2,2021,'16TIN5063',1904),
      (3,2021,'16TIN5033',1904),
      (4,2021,'16TIN5024',1904),
      (5,2021,'16TIN5013',1904),
      (6,2021,'16TIN5043',1904),
      (7,2021,'16TKO5024',1901);
      `
    )
    await queryInterface.sequelize.query(
      `INSERT INTO "Studi" (id,id_perkuliahan,id_mahasiswa) VALUES 
      (1,1,191524033),
      (2,1,191524034),
      (3,1,191524035),
      (4,1,191524036),
      (5,1,191524037),
      (6,1,191524038),
      (7,1,191524040),
      (8,1,191524041),
      (9,1,191524042),
      (10,1,191524043),
      (11,1,191524044),
      (12,1,191524045),
      (13,1,191524046),
      (14,1,191524047),
      (15,1,191524048),
      (16,1,191524049),
      (17,1,191524050),
      (18,1,191524051),
      (19,1,191524052),
      (20,1,191524053),
      (21,1,191524054),
      (22,1,191524057),
      (23,1,191524058),
      (24,1,191524059),
      (25,1,191524061),
      (26,1,191524062),
      (27,1,191524063),
      (28,1,191524064),
      (29,2,191524033),
      (30,2,191524034),
      (31,2,191524035),
      (32,2,191524036),
      (33,2,191524037),
      (34,2,191524038),
      (35,2,191524040),
      (36,2,191524041),
      (37,2,191524042),
      (38,2,191524043),
      (39,2,191524044),
      (40,2,191524045),
      (41,2,191524046),
      (42,2,191524047),
      (43,2,191524048),
      (44,2,191524049),
      (45,2,191524050),
      (46,2,191524051),
      (47,2,191524052),
      (48,2,191524053),
      (49,2,191524054),
      (50,2,191524057),
      (51,2,191524058),
      (52,2,191524059),
      (53,2,191524061),
      (54,2,191524062),
      (55,2,191524063),
      (56,2,191524064),
      (57,3,191524033),
      (58,3,191524034),
      (59,3,191524035),
      (60,3,191524036),
      (61,3,191524037),
      (62,3,191524038),
      (63,3,191524040),
      (64,3,191524041),
      (65,3,191524042),
      (66,3,191524043),
      (67,3,191524044),
      (68,3,191524045),
      (69,3,191524046),
      (70,3,191524047),
      (71,3,191524048),
      (72,3,191524049),
      (73,3,191524050),
      (74,3,191524051),
      (75,3,191524052),
      (76,3,191524053),
      (77,3,191524054),
      (78,3,191524057),
      (79,3,191524058),
      (80,3,191524059),
      (81,3,191524061),
      (82,3,191524062),
      (83,3,191524063),
      (84,3,191524064),
      (85,4,191524033),
      (86,4,191524034),
      (87,4,191524035),
      (88,4,191524036),
      (89,4,191524037),
      (90,4,191524038),
      (91,4,191524040),
      (92,4,191524041),
      (93,4,191524042),
      (94,4,191524043),
      (95,4,191524044),
      (96,4,191524045),
      (97,4,191524046),
      (98,4,191524047),
      (99,4,191524048),
      (100,4,191524049),
      (101,4,191524050),
      (102,4,191524051),
      (103,4,191524052),
      (104,4,191524053),
      (105,4,191524054),
      (106,4,191524057),
      (107,4,191524058),
      (108,4,191524059),
      (109,4,191524061),
      (110,4,191524062),
      (111,4,191524063),
      (112,4,191524064),
      (113,5,191524033),
      (114,5,191524034),
      (115,5,191524035),
      (116,5,191524036),
      (117,5,191524037),
      (118,5,191524038),
      (119,5,191524040),
      (120,5,191524041),
      (121,5,191524042),
      (122,5,191524043),
      (123,5,191524044),
      (124,5,191524045),
      (125,5,191524046),
      (126,5,191524047),
      (127,5,191524048),
      (128,5,191524049),
      (129,5,191524050),
      (130,5,191524051),
      (131,5,191524052),
      (132,5,191524053),
      (133,5,191524054),
      (134,5,191524057),
      (135,5,191524058),
      (136,5,191524059),
      (137,5,191524061),
      (138,5,191524062),
      (139,5,191524063),
      (140,5,191524064),
      (141,6,191524033),
      (142,6,191524034),
      (143,6,191524035),
      (144,6,191524036),
      (145,6,191524037),
      (146,6,191524038),
      (147,6,191524040),
      (148,6,191524041),
      (149,6,191524042),
      (150,6,191524043),
      (151,6,191524044),
      (152,6,191524045),
      (153,6,191524046),
      (154,6,191524047),
      (155,6,191524048),
      (156,6,191524049),
      (157,6,191524050),
      (158,6,191524051),
      (159,6,191524052),
      (160,6,191524053),
      (161,6,191524054),
      (162,6,191524057),
      (163,6,191524058),
      (164,6,191524059),
      (165,6,191524061),
      (166,6,191524062),
      (167,6,191524063),
      (168,6,191524064),
      (169,7,191511001),
      (170,7,191511002),
      (171,7,191511003);    
      `
    )
    await queryInterface.sequelize.query(
      `INSERT INTO "Pengajar" (nip,id_perkuliahan) VALUES 
      (196610181995121000,1),
      (196012261992031000,2),
      (196012261992031000,2),
      (198405122019031000,2),
      (198104072006041000,3),
      (197407182001121000,3),
      (196111091993032000,4),
      (199312282019031000,4),
      (199210222019032000,4),
      (199301062019031000,1),
      (198903252019032000,1),
      (196101141992021000,5),
      (196312131992012000,6),
      (199003022019032000,7);
      `
    )
    const dataStudi = parseInt((await queryInterface.sequelize.query(`SELECT COUNT(*) FROM "Studi"`))[0][0].count)
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Studi_id_seq" RESTART WITH ${dataStudi + 1}`)
    const dataPerkuliahan = parseInt((await queryInterface.sequelize.query(`SELECT COUNT(*) FROM "Perkuliahan"`))[0][0].count)
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Perkuliahan_id_seq" RESTART WITH ${dataPerkuliahan + 1}`)
    const dataJabatan = parseInt((await queryInterface.sequelize.query(`SELECT COUNT(*) FROM "Jabatan"`))[0][0].count)
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Jabatan_id_seq" RESTART WITH ${dataJabatan + 1}`)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.sequelize.query(`
      DELETE FROM "Pengajar";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Studi";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Perkuliahan";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Mahasiswa";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Mata_Kuliah";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Kelas";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Program_Studi";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Jurusan";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Menjabat";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Dosen";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Jabatan";
    `)
  }
};
