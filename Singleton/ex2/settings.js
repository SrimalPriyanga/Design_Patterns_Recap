class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }

    this.settingsObject = {
      background: "#ff0502",
      key: Math.floor(Math.random() * 100),
    };

    Object.freeze(this.settingsObject);
    Object.freeze(this);
    Settings.instance = this;
  }

  getSettingKey(key) {
    return this.settingsObject[key];
  }
}

// Create first instant
const classInstance1 = new Settings();
console.log(classInstance1);

// Create second instant
const classInstance2 = new Settings();
console.log(classInstance2);

// Instance Comparison
console.log(classInstance1 === classInstance2);
