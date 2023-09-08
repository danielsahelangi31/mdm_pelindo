import Route from '@ioc:Adonis/Core/Route';

  // data select  
Route.group(() => {
    Route.get("/postalcode", "Select2sController.postalcode").as("postalcode");
    Route.get("/city", "Select2sController.city").as("city");
    Route.get("/province", "Select2sController.province").as("province");
    Route.get("/portcode", "Select2sController.portcode").as("portcode");
    Route.get("/cityCode", "Select2sController.cityCode").as("cityCode");
    Route.get("/entityLocation", "Select2sController.entityLocation").as("entityLocation");
    Route.get("/companyByGroup", "Select2sController.companyByGroup").as("companyByGroup");
    Route.get("/headerBranch", "Select2sController.headerBranch").as("headerBranch");
    Route.get("/duplicateNpwp", "Select2sController.checkDuplicateNpwp").as("duplicateNpwp");
    Route.get("/parentCompany", "Select2sController.parentCompany").as("parentCompany");
    Route.get("/parentNpwp", "Select2sController.parentNpwp").as("parentNpwp");
    Route.get("/bentukUsaha", "Select2sController.bentukUsahaCategory").as("bentukUsaha");
    Route.get("/tipeKapal", "Select2sController.tipeKapal").as("tipeKapal");
    Route.get("/namaPelabuhan", "Select2sController.namaPelabuhan").as("namaPelabuhan");
    Route.get("/namaTerminal", "Select2sController.namaTerminal").as("namaTerminal");
    Route.get("/tipeLayananUtama", "Select2sController.tipeLayananUtama").as("tipeLayananUtama");
    Route.get("/spesifikKapal", "Select2sController.spesifikKapal").as("spesifikKapal");
    Route.get("/entityPeralatan", "Select2sController.entityPeralatan").as("entityPeralatan");
    Route.get("/kepemilikanAsetPeralatan", "Select2sController.kepemilikanAsetPeralatan").as("kepemilikanAsetPeralatan");
    Route.get("/lokasiKepemilikanPeralatan", "Select2sController.lokasiKepemilikanPeralatan").as("lokasiKepemilikanPeralatan");
    Route.get("/lokasiFisikPeralatan", "Select2sController.lokasiFisikPeralatan").as("lokasiFisikPeralatan");
    Route.get("/classDescriptionPeralatan", "Select2sController.classDescriptionPeralatan").as("classDescriptionPeralatan");
    Route.get("/satuanKapasitasBm", "Select2sController.satuanKapasitasBm").as("satuanKapasitasBm");
    Route.get("/powerSourceBm", "Select2sController.powerSourceBm").as("powerSourceBm");
    Route.get("/tierTypeBm", "Select2sController.tierTypeBm").as("tierTypeBm");
    Route.get("/satuanCapacityBm", "Select2sController.satuanCapacityBm").as("satuanCapacityBm");
    Route.get("/jenisKapalAp", "Select2sController.jenisKapalAp").as("jenisKapalAp");
    Route.get("/klasifikasiAp", "Select2sController.klasifikasiAp").as("klasifikasiAp");
    Route.get("/jenisPropulsiAp", "Select2sController.jenisPropulsiAp").as("jenisPropulsiAp");
    Route.get("/jenisPerairanDm", "Select2sController.jenisPerairanDm").as("jenisPerairanDm");
    Route.get("/jenisDermagaDm", "Select2sController.jenisDermagaDm").as("jenisDermagaDm");
    Route.get("/jenisKonstruksiDm", "Select2sController.jenisKonstruksiDm").as("jenisKonstruksiDm");
    Route.get("/statusMilikDm", "Select2sController.statusMilikDm").as("statusMilikDm");
    Route.get("/country", "Select2sController.country").as("country");
    Route.get("/bank", "Select2sController.bank").as("bank");
}).prefix("/select2").as("select2");