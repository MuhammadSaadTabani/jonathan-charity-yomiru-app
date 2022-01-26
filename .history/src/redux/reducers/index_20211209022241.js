import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BuildingReducer from './BuildingReducer';
import MaintenanceReducer from './MaintenanceReducer';
import MyProfileReducer from './MyProfileReducer';
import PoliciesReducer from './PoliciesReducer';
import ResidentsReducer from './ResidentsReducer';
import StaffReducer from './StaffReducer';

export default combineReducers({
    authReducer: AuthReducer,
    residentsReducer: ResidentsReducer,
    staffReducer: StaffReducer,
    myProfileReducer: MyProfileReducer,
    policiesReducer: PoliciesReducer,
    maintenanceReducer: MaintenanceReducer,
    buildingReducer: BuildingReducer,
});