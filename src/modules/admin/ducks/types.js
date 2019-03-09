/* ACTION TYPE CONSTANTS
You can use any convention you wish here,
but the name should remain UPPER_SNAKE_CASE for consistency.
*/
const createActionName = name => `admin/duck/${name}`;

// Permissions
const FETCH_GET_PARAMS_SUCCESS = createActionName('FETCH_GET_PARAMS_SUCCESS');
const FETCH_GET_PERMISSIONS_SUCCESS = createActionName('FETCH_GET_PERMISSIONS_SUCCESS');
const FETCH_SAVE_PERMISSIONS_SUCCESS = createActionName('FETCH_SAVE_PERMISSIONS_SUCCESS');

// SAH
const FETCH_GET_SAH_PARAMS_SUCCESS = createActionName('FETCH_GET_SAH_PARAMS_SUCCESS');
const FETCH_GET_SAH_BY_YEAR_SUCCESS = createActionName('FETCH_GET_SAH_BY_YEAR_SUCCESS');
const FETCH_SAVE_SAH_BY_YEAR_SUCCESS = createActionName('FETCH_SAVE_SAH_BY_YEAR_SUCCESS');


export {
  FETCH_GET_PARAMS_SUCCESS,
  FETCH_GET_PERMISSIONS_SUCCESS,
  FETCH_SAVE_PERMISSIONS_SUCCESS,
  FETCH_GET_SAH_PARAMS_SUCCESS,
  FETCH_GET_SAH_BY_YEAR_SUCCESS,
  FETCH_SAVE_SAH_BY_YEAR_SUCCESS,
};
