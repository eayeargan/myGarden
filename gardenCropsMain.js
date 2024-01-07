//An object oriented attempt at modeling a garden with crops

//import { createCrop } from "/gardenCropsUtility.js"

const cropFactory = (name, soilHumidityPref = 80, sunExposurePref = 8, days = 800) => {
    return {
        name: name,
        _preferredSoilHumidityLevelPercentage: soilHumidityPref,
        _preferredSunExposureInHours: sunExposurePref,
        _daysToGrow: days,
        get preferredSoilHumidityLevelPercentage(){
            return this._preferredSoilHumidityLevelPercentage;
        },
        set preferredSoilHumidityLevelPercentage(newHumidityPref){
            this._preferredSoilHumidityLevelPercentage = newHumidityPref;
        },
        get daysToGrow(){
            return this._daysToGrow;
        },
        set daysToGrow(newDaysToGrow){
            this.daysToGrow = newDaysToGrow;
        },
        get preferredSunExposureInHours(){
            return this._preferredSunExposureInHours;
        },
        set preferredSunExposureInHours(newSunPref){
            this._preferredSunExposureInHours = newSunPref;
        }
    };
    
}
const garden = {
    type: 'Vegetable',
    sizeInSquareFeet: 8,
    crops: [],
    checkHumidityInput (nameInput, humidityInput_) {
        let foundCrop = false;
        for (let i = 0; i < this.crops.length; i++){
            if (this.crops[i].name !== nameInput){
                continue;
            } else {
                foundCrop = true;
                if (this.crops[i]._preferredSoilHumidityLevelPercentage > humidityInput_){
                    return `${this.crops[i].name} humidity level is too low by ${this.crops[i]._preferredSoilHumidityLevelPercentage - humidityInput_}. Add ${this.crops[i]._preferredSoilHumidityLevelPercentage - humidityInput_} to make the crop healthy!`
                } else if (this.crops[i]._preferredSoilHumidityLevelPercentage < humidityInput_){
                    return `${this.crops[i].name} humidity level is too high by ${humidityInput_ - this.crops[i]._preferredSoilHumidityLevelPercentage}. Remove ${humidityInput_ - this.crops[i]._preferredSoilHumidityLevelPercentage} to make the crop healthy!`
                } else {
                    return `${this.crops[i].name} humidity is optimal. Maintain ${this.crops[i]._preferredSoilHumidityLevelPercentage} to keep the crop healthy.`
                };
            }
        };
        if (!foundCrop){
            return `We haven't got any ${nameInput} to check humidity for...`
        }
    },
    checkSunExposure (nameInput, sunExposureInput){
        let foundCrop = false;
        for (let i = 0; i < this.crops.length; i++){
            if (this.crops[i].name !== nameInput){
                continue;
            } else {
                foundCrop = true;
                if (this.crops[i]._preferredSunExposureInHours > sunExposureInput){
                    return `${this.crops[i].name} humidity level is too low by ${this.crops[i]._preferredSunExposureInHours - sunExposureInput}. Add ${this.crops[i]._preferredSunExposureInHours - sunExposureInput} to make the crop healthy!`
                } else if (this.crops[i]._preferredSunExposureInHours < sunExposureInput){
                    return `${this.crops[i].name} humidity level is too high by ${sunExposureInput - this.crops[i]._preferredSunExposureInHours}. Remove ${sunExposureInput - this.crops[i]._preferredSunExposureInHours} to make the crop healthy!`
                } else {
                    return `${this.crops[i].name} humidity is optimal. Maintain ${this.crops[i]._preferredSunExposureInHours} to keep the crop healthy.`
                };
            }
        };
        if (!foundCrop){
            return `We haven't got any ${nameInput} to check sun exposure for...`
        }

    },
    checkDaysToHarvest (nameInput, daysSoFar){
        let foundCrop = false;
        for (let i = 0; i < this.crops.length; i++){
            if (this.crops[i].name !== nameInput){
                continue;
            } else {
                if (this.crops[i]._daysToGrow > daysSoFar){
                    return `${this.crops[i].name} is not ready to be harvested. Wait another ${this.crops[i]._daysToGrow - daysSoFar} before harvesting the healthy crop!`
                } else if (this.crops[i]._daysToGrow < daysSoFar){
                    return `${this.crops[i].name} needs to be harvested! The crop is ${daysSoFar - this.crops[i]._daysToGrow} days past due!`
                } else {
                    return `${this.crops[i].name} is ready to be harvested today!`
                }
            }
        };
        if (!foundCrop) {
            return `We haven't got any ${nameInput} to check sun exposure for...`
        }
        
    },
    listGardenCrops () {
        if (this.crops.length > 0) {
            this.crops.forEach(crop => {
                console.log(crop.name);
            });
        } else {
            console.log(`This garden has no crops in it. Time to start gardening!`)
        }
        
    },
    addCrop (newCropName, humidityPercentage, sunExposure, daysToGrow) {
        const newCrop = cropFactory(newCropName, humidityPercentage, sunExposure, daysToGrow);
        this.crops.push(newCrop);
        return newCrop.name;
        
    },
    removeCrop (cropNameToRemove) {
        for (let i = 0; i<this.crops.length; i++){
            if (this.crops[i].name === cropNameToRemove){
                this.crops.splice(i,1);
                
            } else {
                return `We haven't got any ${cropNameToRemove}...`
            }
        }
    }
}

garden.listGardenCrops();

garden.addCrop('Kale');

garden.addCrop('Rosemary', 69, 100,);

garden.addCrop('Cabbage');

garden.addCrop('Broccoli');

garden.listGardenCrops();

console.log(garden.checkHumidityInput('Carrot', 255));

console.log(garden.checkSunExposure('Carrot', 80));

console.log(garden. checkSunExposure('Carrot', 25));

console.log(garden.checkDaysToHarvest('Kale', 80));


