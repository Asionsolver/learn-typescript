type Amount = {
  value: number;
  currency: string;
};

type Currency = {
  code: string;
  symbol: string;
};
type PriceInfo = {
  amount: Amount;
  currency: Currency;
};

type FeatureInfo = {
  name: string;
  description: string;
  isAvailable: boolean;
};

type ReleaseInfo = {
  year: number;
  month: number;
  day: number;
  country: string;
};

type SocialLinkInfo = {
  twitter: string | null; // e.g., "https://twitter.com/username" or null
  facebook: string | null; // e.g., "https://facebook.com/username" or null
  instagram: string | null; // e.g., "https://instagram.com/username" or null
  linkedin: string | null; // e.g., "https://linkedin.com/in/username" or null
};

type UserProfileInfo = {
  username: string;
  userId: number;
  profilePicture: string;
  joinDate: string;
  location: string;
  bio: string;
  socialLinks: SocialLinkInfo;
};

type Overall = {
  score: number; // e.g., 4.5
  count: number; // e.g., 1500
  breakdown: overallRatingBreakdown;
};
type overallRatingBreakdown = {
  fiveStars: number; // e.g., 1000
  fourStars: number; // e.g., 300
  threeStars: number; // e.g., 100
  twoStars: number; // e.g., 50
  oneStar: number; // e.g., 50
};

type CriticRatingInfo = {
  score: number;
  source: string; // e.g., "TechRadar"
  reviewLink: string; // e.g., "https://techradar.com/review/mobile-phone"
  reviewDate: string; // e.g., "2023-10-01"
  summary: string; // e.g., "An in-depth review of the latest mobile phone."
  pros: string[]; // e.g., ["Great camera", "Fast performance"]
  cons: string[]; // e.g., ["Expensive", "Limited availability"]
};

type ReviewInfo = {
  user: string; // e.g., "John Doe"
  rating: number; // e.g., 4.5
  comment: string; // e.g., "Great phone with excellent features!"
  date: string; // e.g., "2023-10-01"
  helpfulVotes: number; // e.g., 10
  totalVotes: number; // e.g., 15
  verifiedPurchase: boolean; // e.g., true
  response: string | null; // e.g., "Thank you for your feedback!" or null if no response
  responseDate: string | null; // e.g., "2023-10-02" or null if no response
  userProfile: UserProfileInfo; // User profile information
  responseUser: UserProfileInfo;
  criticRating: CriticRatingInfo | null; // Critic rating information or null if not available
};

type CustomerSupportInfo = {
  supportChannels: string[]; // e.g., ["Phone", "Email", "Chat"]
  warrantyDetails: string; // e.g., "2 years limited warranty"
  repairOptions: string; // e.g., "Authorized Service Centers"
  returnPolicy: string; // e.g., "30-day return policy"
  userManual: string; // e.g., "Online PDF available"
  communitySupport: boolean; // e.g., true
  feedbackMechanism: string; // e.g., "Customer feedback portal"
  serviceCenterLocations: string[]; // e.g., ["New York", "San Francisco"]
  serviceCenterHours: string; // e.g., "Mon-Fri 9 AM - 6 PM"
  serviceCenterContact: string; // e.g., "1-800-555-0199"
  serviceCenterEmail: string; // e.g., "support@example.com"
};

// /////////////////////////////////////////////////////////////////////

type MobileInformation = {
  brand: string;
  model: string;
  price: PriceInfo;
  features: FeatureInfo[];
  release: ReleaseInfo;
  isAvailable: boolean;
  rating: {
    average: number; // e.g., 4.5
    reviews: ReviewInfo[];
    overall: Overall; // Overall rating information
    reviewsCount: number; // e.g., 1500
  };
  warrantyPeriod: {
    duration: string; // e.g., "2 years"
    coverage: string; // e.g., "Manufacturer defects only"
    terms: string; // e.g., "Limited warranty covering manufacturing defects"
    exclusions: string[]; // e.g., ["Accidental damage", "Water damage"]
    claimProcess: string; // e.g., "Contact customer support with proof of purchase"
    claimContact: {
      phone: string; // e.g., "1-800-555-0199"
      email: string; // e.g., "support@example.com"
      website: string; // e.g., "https://example.com/support"
    };
  };
  colorOptions: string[]; // e.g., ["Black", "White", "Blue"]
  dimensions: {
    width: number; // in mm
    height: number; // in mm
    depth: number; // in mm
  };
  weight: number; // in grams
  batteryCapacity: {
    capacity: number; // in mAh, e.g., 4500
    type: {
      chemistry: string; // e.g., "Lithium-ion"
      removable: boolean; // e.g., false
      cycleCount: number; // e.g., 500
      lifeSpan: string; // e.g., "2 years"
      chargingCycles: number; // e.g., 1000
      batteryHealth: number; // e.g., 85 (percentage)
    }; // e.g., "Li-ion"
    fastCharging: {
      supported: boolean; // e.g., true
      wattage: number; // e.g., 25
      wirelessCharging: boolean; // e.g., true
    };
  };
  processor: {
    name: string; // e.g., "Snapdragon 888"
    cores: {
      count: number; // e.g., 8
      architecture: string; // e.g., "ARM Cortex-X1"
      clockSpeed: string; // e.g., "2.84 GHz"
    };
    clockSpeed: {
      base: string; // e.g., "2.84 GHz"
      boost: string; // e.g., "3.0 GHz"
      architecture: string; // e.g., "64-bit"
      turboBoost: boolean; // e.g., true
      turboBoostSpeed: string; // e.g., "3.2 GHz"
      turboBoostCores: number; // e.g., 4
      turboBoostEnabled: boolean; // e.g., true
      turboBoostClockSpeed: string; // e.g., "3.2 GHz"
    };
  };
  camera: {
    front: {
      megapixels: {
        count: number; // e.g., 32
        aperture: string; // e.g., "f/2.2"
        pixelSize: string; // e.g., "0.8 µm"
        autofocus: boolean; // e.g., true
        flash: boolean; // e.g., false
        videoRecording: string; // e.g., "1080p at 30fps"
        hdr: boolean; // e.g., true
        portraitMode: boolean; // e.g., true
        beautyMode: boolean; // e.g., true
        lowLightPerformance: string; // e.g., "Good"
        lowLightPerformanceRating: number; // e.g., 4.5
        lowLightPerformanceDescription: string; // e.g., "Performs well in low light conditions"
        lowLightPerformanceFeatures: string[]; // e.g., ["Night Mode", "AI Enhancement"]
        megapixels: number; // e.g., 32
      }; // e.g., 32
      features: {
        hdr: boolean; // e.g., true
        portraitMode: boolean; // e.g., true
        beautyMode: boolean; // e.g., true
        lowLightPerformance: string; // e.g., "Good"
        lowLightPerformanceRating: number; // e.g., 4.5
        lowLightPerformanceDescription: string; // e.g., "Performs well in low light conditions"
        lowLightPerformanceFeatures: string[]; // e.g., ["Night Mode", "AI Enhancement"]
      };
    };
    rear: {
      megapixels: {
        count: number; // e.g., 108
        aperture: string; // e.g., "f/1.8"
        pixelSize: string; // e.g., "0.8 µm"
        autofocus: boolean; // e.g., true
        flash: boolean; // e.g., true
        videoRecording: string; // e.g., "4K at 60fps"
        hdr: boolean; // e.g., true
        portraitMode: boolean; // e.g., true
        lowLightPerformance: string; // e.g., "Excellent"
        lowLightPerformanceRating: number; // e.g., 5.0
        lowLightPerformanceDescription: string; // e.g., "Exceptional performance in low light conditions"
        lowLightPerformanceFeatures: string[]; // e.g., ["Night Mode", "AI Enhancement"]
      };
    }; // e.g., 108
    features: {
      hdr: boolean; // e.g., true
      portraitMode: boolean; // e.g., true
      beautyMode: boolean; // e.g., true
      lowLightPerformance: string; // e.g., "Excellent"
      lowLightPerformanceRating: number; // e.g., 5.0
      lowLightPerformanceDescription: string; // e.g., "Exceptional performance in low light conditions"
      lowLightPerformanceFeatures: string[]; // e.g., ["Night Mode", "AI Enhancement"]
    };
  };
  display: {
    type: string; // e.g., "AMOLED"
    size: string; // e.g., "6.5 inches"
    resolution: string; // e.g., "2400 x 1080 pixels"
    refreshRate: number; // e.g., 120
  }; // e.g., ["Night Mode", "4K Video"]

  videoRecording: {
    resolution: string; // e.g., "4K"
    frameRate: number; // e.g., 60
    bitRate: number; // e.g., 5000
  };
  storage: {
    internal: {
      capacity: string; // e.g., "128 GB"
      type: string; // e.g., "UFS 3.1"
      expandable: boolean; // e.g., true
      maxExpandableCapacity: string; // e.g., "1 TB"
    };
    ram: {
      capacity: string; // e.g., "8 GB"
      type: string; // e.g., "LPDDR5"
    };
  };

  connectivity: {
    wifi: string; // e.g., "Wi-Fi 6"
    bluetooth: string; // e.g., "5.2"
    nfc: boolean; // e.g., true
    gps: boolean; // e.g., true
    usb: string; // e.g., "USB Type-C"
    cellular: {
      supportedBands: string[]; // e.g., ["5G", "4G LTE"]
      simType: string; // e.g., "Nano SIM"
      dualSim: boolean; // e.g., true
    };
    audio: {
      headphoneJack: boolean; // e.g., false
      speakers: string; // e.g., "Stereo"
      microphone: string; // e.g., "Noise Cancelling"
    };
    sensors: string[]; // e.g., ["Fingerprint", "Accelerometer", "Gyroscope"]
  };
  software: {
    os: string; // e.g., "Android 12"
    ui: string; // e.g., "One UI 4.0"
    updatePolicy: string; // e.g., "3 years of major updates"
    preInstalledApps: string[]; // e.g., ["Google Maps", "YouTube"]
    appStore: string; // e.g., "Google Play Store"
  };
  security: {
    biometricAuthentication: string[]; // e.g., ["Fingerprint", "Face Unlock"]
    encryption: {
      type: string; // e.g., "AES-256"
      enabled: boolean; // e.g., true
      hardwareBacked: boolean; // e.g., true
      keyManagement: string; // e.g., "On-device Secure Enclave"
      certifications: string[]; // e.g., ["FIPS 140-2", "ISO/IEC 19790"]
      description: string; // e.g., "Full device encryption with hardware-backed key storage"
    }; // e.g., true
    secureElement: {
      type: string; // e.g., "TPM", "eSE"
      enabled: boolean; // e.g., true
      manufacturer: string; // e.g., "Samsung"
      certifications: string[]; // e.g., ["CC EAL6+", "FIPS 140-2"]
      description: string; // e.g., "Embedded Secure Element for hardware-based security"
    }; // e.g., true
    privacyFeatures: string[]; // e.g., ["App Permissions", "Data Encryption"]
  };
  environmentalImpact: {
    materials: string[]; // e.g., ["Recycled Aluminum", "Glass"]
    energyEfficiency: {
      certifications: string[]; // e.g., ["Energy Star", "EPEAT Gold"]
      powerConsumption: {
        standby: number; // e.g., 0.5 (in watts)
        typical: number; // e.g., 5 (in watts)
        max: number; // e.g., 15 (in watts)
      };
      energySavingFeatures: string[]; // e.g., ["Adaptive Brightness", "Low Power Mode"]
      rating: string; // e.g., "A++"
      description: string; // e.g., "Highly energy efficient with advanced power management."
    }; // e.g., "Energy Star Certified"
    packaging: string; // e.g., "Minimal Plastic"
    recyclingProgram: boolean; // e.g., true
    carbonFootprint: number; // e.g., 50 (in kg CO2 equivalent)
    endOfLifePolicy: string; // e.g., "Take-back program available"
  };
  customerSupport: CustomerSupportInfo;
};
