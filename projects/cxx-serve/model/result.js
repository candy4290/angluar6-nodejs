exports.createResult = function(success, data) {
    var result = {};
    result.success = success;
    result.rtnData = data;
    return result;
}