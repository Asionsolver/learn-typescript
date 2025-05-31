type Config = {
  apiURL: string;
  token: string;
};

class ConfigureManager {
  private static instance: ConfigureManager;
  private config: Config;

  private constructor() {
    this.config = {
      apiURL: "www.asionsolver.com",
      token: "udiI45045sf90423as",
    };
  }

  public static getInstance(): ConfigureManager {
    if (!ConfigureManager.instance) {
      ConfigureManager.instance = new ConfigureManager();
    }
    return ConfigureManager.instance;
  }

  public getConfig(): Config {
    return this.config;
  }

  public updateConfig(newConfig: Partial<Config>) {
    this.config = { ...this.config, ...newConfig };
  }
}

// ✅ Usage
const config1 = ConfigureManager.getInstance();
const config2 = ConfigureManager.getInstance();

console.log(config1.getConfig().apiURL); //www.asionsolver.com
config2.updateConfig({ apiURL: "https://new-api.com" });

console.log(config1.getConfig().apiURL); // https://new-api.com
console.log(config1 === config2); // true
