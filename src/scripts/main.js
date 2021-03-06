import { getFlowers } from "./Flowers/FlowerDataProvider.js"
import { FlowerList } from "./Flowers/FlowerList.js"
import { getRetailers } from "./Retailers/RetailersProvider.js"
import { retailerList } from "./Retailers/RetailersList.js"
import { getDistributors } from "./Distributors/DistributorProvider.js"
import { getNurseryDistributors } from "./NurseryDistributor/NurseryDistributorProvider.js"
import { getNurserys } from "./Nurseries/NurseryProvider.js"
import { getNurseryFlowers } from "./NurseryFlower/NurseryFlowersProvider.js"
import { getColors } from "./Colors/ColorsDataProvider.js"

getRetailers()
    .then(getDistributors)
    .then(getFlowers)
    .then(getNurserys)
    .then(getNurseryFlowers)
    .then(getNurseryDistributors)
    .then(getColors)
    .then(retailerList)
    .then(FlowerList);