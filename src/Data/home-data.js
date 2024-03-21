var dataForTvHome = {
  patient: {
    id: "0000772772",
    familyName: "LAIR",
    givenName: "FRANCES",
    dateOfBirth: "1990-01-16 17:04:00.0000000",
    mrn: "0000772772",
    roomNo: "2052",
    roomPhoneNo: "(508) 310-8912",
    profilePic: null,
    admitDate: "2024-01-31 19:00:00.7280000 +00:00",
    readyForDischarge: true,
  },
  facility: {
    facilityId: "spring_h_f",
    orgId: 0,
    organizations: null,
    facilityProviderId: "",
    facilityName: "smc-sunrise-test",
    facilityType: "",
    facilityLogoUrl: "smc-logo-white (1) 1.png",
    addressLine1: "addressLine1",
    addressLine2: "addressLine2",
    city: null,
    state: null,
    status: "ACTIVE",
    zip: null,
    country: null,
    contact_Email: null,
    contactPerson: null,
    tvappThemeURL: "",
    timeZone: null,
    createdOn: "0001-01-01T00:00:00+00:00",
    createdBy: "",
    modifiedOn: "0001-01-01T00:00:00+00:00",
    modifiedBy: "",
    patientInformation: null,
    facilityEhrMappings: null,
    userFacilityMapping: null,
    videoFacilityMapping: null,
    deviceFacilityMapping: null,
    userUserRoleFacilityMapping: null,
    userFacilityQueueMapping: null,
    teleCallQueues: null,
    systemAudits: null,
    facilitySpecialityCodeMapping: null,
    appFacilityMappings: null,
    unitMasters: null,
  },
  unit: { unitId: 16, unitName: "Cardiology" },
  qrCode: {
    qr: "c3ByaW5nX2hfZixzcHJpbmdfaF9mX3AsNURQRFFQTjVBWFkzSCxESUs0clp6TDdFcWIzTlBoNHI3b3hnTWc3R3JRSzAyLDAwMDA3NzI3NzIsUE5H",
    message: "Successfully generated the QR String",
  },
};

var videosForTvHome = [
  {
    videos: {
      diagnosisCode: "1",
      diagnosisDescription: "Cardiac Testing",
      status: "active",
      videos: [
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "Cardiac Stress Test",
          caption:
            "https://api.viewmedica.com/videos/captions/rootcanal/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/cardiacstresstest?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/cardiacstresstest_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "Cardiovascular ",
          caption:
            "https://api.viewmedica.com/videos/captions/quizhearing_009/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/cardioscreen?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/cardioscreen_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "episiotomy",
          caption:
            "https://api.viewmedica.com/videos/captions/episiotomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/episiotomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/episiotomy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "glucosemonitoring",
          caption:
            "https://api.viewmedica.com/videos/captions/glucosemonitoring/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/glucosemonitoring?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/glucosemonitoring_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "Have a Healthy Heart",
          caption:
            "https://api.viewmedica.com/videos/captions/lapbandlaparo/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/keepheart?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/keepheart_s_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "helpchildsleep",
          caption:
            "https://api.viewmedica.com/videos/captions/helpchildsleep/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/helpchildsleep?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/helpchildsleep_s_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hyperglycemia",
          caption:
            "https://api.viewmedica.com/videos/captions/hyperglycemia/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hyperglycemia?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hyperglycemia_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hypoglycemia",
          caption:
            "https://api.viewmedica.com/videos/captions/hypoglycemia/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hypoglycemia?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hypoglycemia_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "icdoverview",
          caption:
            "https://api.viewmedica.com/videos/captions/icdoverview/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/icdoverview?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/icdoverview_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "kawasakidisease",
          caption:
            "https://api.viewmedica.com/videos/captions/kawasakidisease/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/kawasakidisease?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/kawasakidisease_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "lactoseintolerance",
          caption:
            "https://api.viewmedica.com/videos/captions/lactoseintolerance/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/lactoseintolerance?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/lactoseintolerance_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "rectocele",
          caption:
            "https://api.viewmedica.com/videos/captions/rectocele/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/rectocele?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/rectocele_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "spondylolysis",
          caption:
            "https://api.viewmedica.com/videos/captions/spondylolysis/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/spondylolysis?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/spondylolysis_1280.jpg",
          isWelcomeVideo: true,
        },
      ],
    },
    facility: {
      facilityId: "spring_h_f",
      orgId: 16,
      organizations: null,
      facilityProviderId: "spring_h_f_p",
      facilityName: "smc-sunrise-test",
      facilityType: "sph",
      facilityLogoUrl: "smc-logo-white (1) 1.png",
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      city: "city",
      state: "state",
      status: "active",
      zip: 1114,
      country: "country",
      contact_Email: "springhill@gmail.com",
      contactPerson: "springhill",
      tvappThemeURL: "",
      timeZone: "",
      createdOn: "2023-10-25T00:00:00+00:00",
      createdBy: "1",
      modifiedOn: "2023-10-25T00:00:00+00:00",
      modifiedBy: "1",
      patientInformation: null,
      facilityEhrMappings: null,
      userFacilityMapping: null,
      videoFacilityMapping: null,
      deviceFacilityMapping: null,
      userUserRoleFacilityMapping: null,
      userFacilityQueueMapping: null,
      teleCallQueues: null,
      systemAudits: null,
      facilitySpecialityCodeMapping: null,
      appFacilityMappings: null,
      unitMasters: null,
    },
  },
  {
    videos: {
      diagnosisCode: "2",
      diagnosisDescription: "HyperTension",
      status: "active",
      videos: [
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "adenomyosis",
          caption:
            "https://api.viewmedica.com/videos/captions/adenomyosis/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/adenomyosis?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/adenomyosis_s_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "gynolaparoscopy",
          caption:
            "https://api.viewmedica.com/videos/captions/gynolaparoscopy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/gynolaparoscopy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/gynolaparoscopy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "lapband",
          caption:
            "https://api.viewmedica.com/videos/captions/lapband/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/lapband?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/lapband_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "mi",
          caption:
            "https://api.viewmedica.com/videos/captions/mi/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/mi?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/mi_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "needleapodupuytrens",
          caption:
            "https://api.viewmedica.com/videos/captions/needleapodupuytrens/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/needleapodupuytrens?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/needleapodupuytrens_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "ovariancancer",
          caption:
            "https://api.viewmedica.com/videos/captions/ovariancancer/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/ovariancancer?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/ovariancancer_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "pepticulcer",
          caption:
            "https://api.viewmedica.com/videos/captions/pepticulcer/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/pepticulcer?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/pepticulcer_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "sacrovaginalprolapse",
          caption:
            "https://api.viewmedica.com/videos/captions/sacrovaginalprolapse/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/sacrovaginalprolapse?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/sacrovaginalprolapse_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "tfcctears",
          caption:
            "https://api.viewmedica.com/videos/captions/tfcctears/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/tfcctears?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/tfcctears_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "warfarin",
          caption:
            "https://api.viewmedica.com/videos/captions/warfarin/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/warfarin?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/warfarin_1280.jpg",
          isWelcomeVideo: true,
        },
      ],
    },
    facility: {
      facilityId: "spring_h_f",
      orgId: 16,
      organizations: null,
      facilityProviderId: "spring_h_f_p",
      facilityName: "smc-sunrise-test",
      facilityType: "sph",
      facilityLogoUrl: "smc-logo-white (1) 1.png",
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      city: "city",
      state: "state",
      status: "active",
      zip: 1114,
      country: "country",
      contact_Email: "springhill@gmail.com",
      contactPerson: "springhill",
      tvappThemeURL: "",
      timeZone: "",
      createdOn: "2023-10-25T00:00:00+00:00",
      createdBy: "1",
      modifiedOn: "2023-10-25T00:00:00+00:00",
      modifiedBy: "1",
      patientInformation: null,
      facilityEhrMappings: null,
      userFacilityMapping: null,
      videoFacilityMapping: null,
      deviceFacilityMapping: null,
      userUserRoleFacilityMapping: null,
      userFacilityQueueMapping: null,
      teleCallQueues: null,
      systemAudits: null,
      facilitySpecialityCodeMapping: null,
      appFacilityMappings: null,
      unitMasters: null,
    },
  },
  {
    videos: {
      diagnosisCode: "3",
      diagnosisDescription: "Diabetes",
      status: "active",
      videos: [
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 1,
          videoTitle: "Post Treatment",
          caption: "caption1",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/diabetesdiagnosis?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/diabetesdiagnosis_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "Choose Right Foods",
          caption:
            "https://api.viewmedica.com/videos/captions/tapeworm/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/diabetesfood?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/diabetesfood_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "cystectomy",
          caption:
            "https://api.viewmedica.com/videos/captions/cystectomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/cystectomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/cystectomy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "dementiahearing",
          caption:
            "https://api.viewmedica.com/videos/captions/dementiahearing/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/dementiahearing?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/dementiahearing_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "dupuytrens",
          caption:
            "https://api.viewmedica.com/videos/captions/dupuytrens/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/dupuytrens?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/dupuytrens_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "healthyeating",
          caption:
            "https://api.viewmedica.com/videos/captions/healthyeating/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/healthyeating?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/healthyeating_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hysterectomy",
          caption:
            "https://api.viewmedica.com/videos/captions/hysterectomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hysterectomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hysterectomy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "leep",
          caption:
            "https://api.viewmedica.com/videos/captions/leep/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/leep?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/leep_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "myomectomyfibroid",
          caption:
            "https://api.viewmedica.com/videos/captions/myomectomyfibroid/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/myomectomyfibroid?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/myomectomyfibroid_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "nephrectomy",
          caption:
            "https://api.viewmedica.com/videos/captions/nephrectomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/nephrectomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/nephrectomy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "palmarfasciectomy",
          caption:
            "https://api.viewmedica.com/videos/captions/palmarfasciectomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/palmarfasciectomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/palmarfasciectomy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "partialnephrectomy",
          caption:
            "https://api.viewmedica.com/videos/captions/partialnephrectomy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/partialnephrectomy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/partialnephrectomy_1280.jpg",
          isWelcomeVideo: true,
        },
      ],
    },
    facility: {
      facilityId: "spring_h_f",
      orgId: 16,
      organizations: null,
      facilityProviderId: "spring_h_f_p",
      facilityName: "smc-sunrise-test",
      facilityType: "sph",
      facilityLogoUrl: "smc-logo-white (1) 1.png",
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      city: "city",
      state: "state",
      status: "active",
      zip: 1114,
      country: "country",
      contact_Email: "springhill@gmail.com",
      contactPerson: "springhill",
      tvappThemeURL: "",
      timeZone: "",
      createdOn: "2023-10-25T00:00:00+00:00",
      createdBy: "1",
      modifiedOn: "2023-10-25T00:00:00+00:00",
      modifiedBy: "1",
      patientInformation: null,
      facilityEhrMappings: null,
      userFacilityMapping: null,
      videoFacilityMapping: null,
      deviceFacilityMapping: null,
      userUserRoleFacilityMapping: null,
      userFacilityQueueMapping: null,
      teleCallQueues: null,
      systemAudits: null,
      facilitySpecialityCodeMapping: null,
      appFacilityMappings: null,
      unitMasters: null,
    },
  },
  {
    videos: {
      diagnosisCode: "324252006",
      diagnosisDescription: "Elbow",
      status: "active",
      videos: [
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "babybreastmilk",
          caption:
            "https://api.viewmedica.com/videos/captions/babybreastmilk/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/babybreastmilk?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/babybreastmilk_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "botoxoabfemale",
          caption:
            "https://api.viewmedica.com/videos/captions/botoxoabfemale/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/botoxoabfemale?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/botoxoabfemale_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "cervixcryosurgery",
          caption:
            "https://api.viewmedica.com/videos/captions/cervixcryosurgery/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/cervixcryosurgery?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/cervixcryosurgery_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "cochlearimplant",
          caption:
            "https://api.viewmedica.com/videos/captions/cochlearimplant/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/cochlearimplant?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/cochlearimplant_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "electrolytes",
          caption:
            "https://api.viewmedica.com/videos/captions/electrolytes/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/electrolytes?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/electrolytes_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hysterosalpingogram",
          caption:
            "https://api.viewmedica.com/videos/captions/hysterosalpingogram/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hysterosalpingogram?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hysterosalpingogram_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "sclerotherapy",
          caption:
            "https://api.viewmedica.com/videos/captions/sclerotherapy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/sclerotherapy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/sclerotherapy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "sijointpain",
          caption:
            "https://api.viewmedica.com/videos/captions/sijointpain/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/sijointpain?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/sijointpain_120.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "stressbusy",
          caption:
            "https://api.viewmedica.com/videos/captions/stressbusy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/stressbusy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/stressbusy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "whlactcon",
          caption:
            "https://api.viewmedica.com/videos/captions/whlactcon/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/whlactcon?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/whlactcon_1280.jpg",
          isWelcomeVideo: true,
        },
      ],
    },
    facility: {
      facilityId: "spring_h_f",
      orgId: 16,
      organizations: null,
      facilityProviderId: "spring_h_f_p",
      facilityName: "smc-sunrise-test",
      facilityType: "sph",
      facilityLogoUrl: "smc-logo-white (1) 1.png",
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      city: "city",
      state: "state",
      status: "active",
      zip: 1114,
      country: "country",
      contact_Email: "springhill@gmail.com",
      contactPerson: "springhill",
      tvappThemeURL: "",
      timeZone: "",
      createdOn: "2023-10-25T00:00:00+00:00",
      createdBy: "1",
      modifiedOn: "2023-10-25T00:00:00+00:00",
      modifiedBy: "1",
      patientInformation: null,
      facilityEhrMappings: null,
      userFacilityMapping: null,
      videoFacilityMapping: null,
      deviceFacilityMapping: null,
      userUserRoleFacilityMapping: null,
      userFacilityQueueMapping: null,
      teleCallQueues: null,
      systemAudits: null,
      facilitySpecialityCodeMapping: null,
      appFacilityMappings: null,
      unitMasters: null,
    },
  },
  {
    videos: {
      diagnosisCode: "439401001",
      diagnosisDescription: "Hypertension",
      status: "active",
      videos: [
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "Blood Pressure",
          caption:
            "https://api.viewmedica.com/videos/captions/wrinkles/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/normalbloodpressure?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/normalbloodpressure_500w.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "enclangdev",
          caption:
            "https://api.viewmedica.com/videos/captions/enclangdev/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/enclangdev?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/enclangdev_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "erwait",
          caption:
            "https://api.viewmedica.com/videos/captions/erwait/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/erwait?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/erwait_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "explandel",
          caption:
            "https://api.viewmedica.com/videos/captions/explandel/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/explandel?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/explandel_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "expressive",
          caption:
            "https://api.viewmedica.com/videos/captions/expressive/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/expressive?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/expressive_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hyperhidrosis",
          caption:
            "https://api.viewmedica.com/videos/captions/hyperhidrosis/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hyperhidrosis?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hyperhidrosis_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "hysteroscopy",
          caption:
            "https://api.viewmedica.com/videos/captions/hysteroscopy/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/hysteroscopy?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/hysteroscopy_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "lasernailfungus",
          caption:
            "https://api.viewmedica.com/videos/captions/lasernailfungus/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/lasernailfungus?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/lasernailfungus_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "mri",
          caption:
            "https://api.viewmedica.com/videos/captions/mri/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/mri?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl: "https://api.viewmedica.com/thumbs/mri_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "occipitalnerveblock",
          caption:
            "https://api.viewmedica.com/videos/captions/occipitalnerveblock/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/occipitalnerveblock?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/occipitalnerveblock_1280.jpg",
          isWelcomeVideo: true,
        },
        {
          videoCategoryId: 2,
          mimeTypeId: 1,
          videoSourceId: 9,
          videoTitle: "prostatecancer",
          caption:
            "https://api.viewmedica.com/videos/captions/prostatecancer/?textLanguage=en&voiceLanguage=en&format=srt",
          videoUrl:
            "https://api.viewmedica.com/videos/stream/9475/prostatecancer?apikey=37nGqOcZid07rhMMvfaO7Dcq99cyaojk8TQCMjTV",
          thumbnailUrl:
            "https://api.viewmedica.com/thumbs/prostatecancer_1280.jpg",
          isWelcomeVideo: true,
        },
      ],
    },
    facility: {
      facilityId: "spring_h_f",
      orgId: 16,
      organizations: null,
      facilityProviderId: "spring_h_f_p",
      facilityName: "smc-sunrise-test",
      facilityType: "sph",
      facilityLogoUrl: "smc-logo-white (1) 1.png",
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      city: "city",
      state: "state",
      status: "active",
      zip: 1114,
      country: "country",
      contact_Email: "springhill@gmail.com",
      contactPerson: "springhill",
      tvappThemeURL: "",
      timeZone: "",
      createdOn: "2023-10-25T00:00:00+00:00",
      createdBy: "1",
      modifiedOn: "2023-10-25T00:00:00+00:00",
      modifiedBy: "1",
      patientInformation: null,
      facilityEhrMappings: null,
      userFacilityMapping: null,
      videoFacilityMapping: null,
      deviceFacilityMapping: null,
      userUserRoleFacilityMapping: null,
      userFacilityQueueMapping: null,
      teleCallQueues: null,
      systemAudits: null,
      facilitySpecialityCodeMapping: null,
      appFacilityMappings: null,
      unitMasters: null,
    },
  },
];
