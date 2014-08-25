/*
 * ngAuthToken
 * (c) 2014 kukulili labs - Sebastian Mueller <smueller@kukulili-labs.com>
 * License: MIT
 */

'use strict';

describe('ngAuthTokenService', function() {
//  var elmSpy;

  beforeEach(module('ngAuthToken'));

  //Provider
  function setStoragePrefix(storagePrefix) {
    return function(ngAuthToken) {
      ngAuthToken.setStoragePrefix(storagePrefix);
    };
  }

  it('should support to set custom storage prefix', function() {
    module(setStoragePrefix('myApp'));
  });
});