var Templates = {}; 

Templates["./views/partials/property2/room.ejs"] = function anonymous(locals, filters, escape) {
    escape = escape || function(html) {
        return String(html).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<%\nvar thumbSize = (typeof thumbSize != \'undefined\') ? thumbSize : [150,105];\n\nvar bookCta = (typeof bookCta != \'undefined\') ? bookCta : \'Book Now\';\n\n%>\n<tr class="rate tenor" data-room-type-id="<%= room.roomType.id %>" data-rate-plan-id="<%= rate.ratePlan.id %>">\n    <!-- room image -->\n    <td class="room-image">\n        <div class="inner">\n            <img data-path="<%= room.roomType.image.path %>" width="<%=thumbSize[0]%>" height="<%=thumbSize[1]%>" />\n        </div>\n    </td>\n\n    <!-- room information -->\n    <td class="room-desc">\n        <div class="inner">\n            <div class="title"><%= room.roomType.name %></div>\n\n            <% if (promos && promos.length && promos.length > 0) { %>\n                <% _.each(promos, function(promo) { %>\n                    <div class="rate-plan-desc"><%= promo %></div>\n                <% }) %>\n            <% } %>\n\n            <%\n            var description = room.roomType.description ? room.roomType.description.replace(/(<([^>]+)>)/ig,"") : \'\';\n            var shortenedRoomDescription = description.substr(0,85);\n            %>\n\n            <div class="description" data-full-description="<%= description %>">\n\n            <% if (description == \'\') { %>\n\n            <% } else if (shortenedRoomDescription != room.roomType.description) { %>\n                <% shortenedRoomDescription = shortenedRoomDescription.substr(0, shortenedRoomDescription.lastIndexOf(" ")); %>\n                <%= shortenedRoomDescription %>&hellip; <a href="#" class="more-description">See more</span>\n            <% } else { %>\n                <%= description %>\n            <% } %>\n            </div>\n        </div>\n    </td>\n\n    <!-- avg price/night -->\n    <td class="room-avg-price">\n        <div class="inner">\n            <% if (isStandby) { %>\n                <span class="standby-rate">Standby</span>\n            <% } else { %>\n                <% if (avgMarketNightlyRate) { %>\n                    <span class="market"><%=currencySymbol%><%=avgMarketNightlyRate%></span>\n                <% } %>\n                <span class="amt"><%=currencySymbol%><%=avgNightlyRate%></span>/night\n            <% } %>\n        </div>\n    </td>\n\n    <!-- total -->\n    <td class="room-total-price">\n        <div class="inner">\n            <div class="inner"><span class="amt"><%= currencySymbol %><%= total %></span></div>\n        </div>\n    </td>\n\n    <!-- buttons -->\n    <td class="cta-container">\n        <div class="inner">\n            <% if (isStandby) { %>\n                <button class="tenor book standby flat cta-button">Go on Standby</button>\n            <% } else { %>\n                <button class="tenor book flat cta-button"><%= bookCta %></button>\n            <% } %>\n\n            <% if (!isStandby && rate.holdable) { %>\n                <button class="tenor book hold cta-button">Hold Room <span class="arr">&#155;</span></button>\n            <% } %>\n\n            <% if (!isStandby && rate.availability && rate.availability < 5) { %>\n                <div class="low-availability">Only <%= rate.availability %> Left!</div>\n            <% } %>\n        </div>\n    </td>\n\n</tr>',
        filename: undefined
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            buf.push("");
            __stack.lineno = 1;
            var thumbSize = typeof thumbSize != "undefined" ? thumbSize : [ 150, 105 ];
            var bookCta = typeof bookCta != "undefined" ? bookCta : "Book Now";
            buf.push('\n<tr class="rate tenor" data-room-type-id="', escape((__stack.lineno = 7, room.roomType.id)), '" data-rate-plan-id="', escape((__stack.lineno = 7, rate.ratePlan.id)), '">\n    <!-- room image -->\n    <td class="room-image">\n        <div class="inner">\n            <img data-path="', escape((__stack.lineno = 11, room.roomType.image.path)), '" width="', escape((__stack.lineno = 11, thumbSize[0])), '" height="', escape((__stack.lineno = 11, thumbSize[1])), '" />\n        </div>\n    </td>\n\n    <!-- room information -->\n    <td class="room-desc">\n        <div class="inner">\n            <div class="title">', escape((__stack.lineno = 18, room.roomType.name)), "</div>\n\n            ");
            __stack.lineno = 20;
            if (promos && promos.length && promos.length > 0) {
                buf.push("\n                ");
                __stack.lineno = 21;
                _.each(promos, function(promo) {
                    buf.push('\n                    <div class="rate-plan-desc">', escape((__stack.lineno = 22, promo)), "</div>\n                ");
                    __stack.lineno = 23;
                });
                buf.push("\n            ");
                __stack.lineno = 24;
            }
            buf.push("\n\n            ");
            __stack.lineno = 26;
            var description = room.roomType.description ? room.roomType.description.replace(/(<([^>]+)>)/ig, "") : "";
            var shortenedRoomDescription = description.substr(0, 85);
            buf.push('\n\n            <div class="description" data-full-description="', escape((__stack.lineno = 31, description)), '">\n\n            ');
            __stack.lineno = 33;
            if (description == "") {
                buf.push("\n\n            ");
                __stack.lineno = 35;
            } else if (shortenedRoomDescription != room.roomType.description) {
                buf.push("\n                ");
                __stack.lineno = 36;
                shortenedRoomDescription = shortenedRoomDescription.substr(0, shortenedRoomDescription.lastIndexOf(" "));
                buf.push("\n                ", escape((__stack.lineno = 37, shortenedRoomDescription)), '&hellip; <a href="#" class="more-description">See more</span>\n            ');
                __stack.lineno = 38;
            } else {
                buf.push("\n                ", escape((__stack.lineno = 39, description)), "\n            ");
                __stack.lineno = 40;
            }
            buf.push('\n            </div>\n        </div>\n    </td>\n\n    <!-- avg price/night -->\n    <td class="room-avg-price">\n        <div class="inner">\n            ');
            __stack.lineno = 48;
            if (isStandby) {
                buf.push('\n                <span class="standby-rate">Standby</span>\n            ');
                __stack.lineno = 50;
            } else {
                buf.push("\n                ");
                __stack.lineno = 51;
                if (avgMarketNightlyRate) {
                    buf.push('\n                    <span class="market">', escape((__stack.lineno = 52, currencySymbol)), "", escape((__stack.lineno = 52, avgMarketNightlyRate)), "</span>\n                ");
                    __stack.lineno = 53;
                }
                buf.push('\n                <span class="amt">', escape((__stack.lineno = 54, currencySymbol)), "", escape((__stack.lineno = 54, avgNightlyRate)), "</span>/night\n            ");
                __stack.lineno = 55;
            }
            buf.push('\n        </div>\n    </td>\n\n    <!-- total -->\n    <td class="room-total-price">\n        <div class="inner">\n            <div class="inner"><span class="amt">', escape((__stack.lineno = 62, currencySymbol)), "", escape((__stack.lineno = 62, total)), '</span></div>\n        </div>\n    </td>\n\n    <!-- buttons -->\n    <td class="cta-container">\n        <div class="inner">\n            ');
            __stack.lineno = 69;
            if (isStandby) {
                buf.push('\n                <button class="tenor book standby flat cta-button">Go on Standby</button>\n            ');
                __stack.lineno = 71;
            } else {
                buf.push('\n                <button class="tenor book flat cta-button">', escape((__stack.lineno = 72, bookCta)), "</button>\n            ");
                __stack.lineno = 73;
            }
            buf.push("\n\n            ");
            __stack.lineno = 75;
            if (!isStandby && rate.holdable) {
                buf.push('\n                <button class="tenor book hold cta-button">Hold Room <span class="arr">&#155;</span></button>\n            ');
                __stack.lineno = 77;
            }
            buf.push("\n\n            ");
            __stack.lineno = 79;
            if (!isStandby && rate.availability && rate.availability < 5) {
                buf.push('\n                <div class="low-availability">Only ', escape((__stack.lineno = 80, rate.availability)), " Left!</div>\n            ");
                __stack.lineno = 81;
            }
            buf.push("\n        </div>\n    </td>\n\n</tr>");
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}; 

Templates["./views/partials/property2/meta-rate.ejs"] = function anonymous(locals, filters, escape) {
    escape = escape || function(html) {
        return String(html).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<tr class="meta-rate-row partner-rate" data-url="<%- encodeURI(ta_booking_link) %>" data-offer-id="<%= provider_info_key %>">\n    <td class="meta-site"><div class="inner"><%- providerInfo.display_name %></div></td>\n    <td class="meta-rate"><div class="inner">\n        <span class="value">$<%- room[0].avg_nightly_price %></span><span class="asterisk">*</span> <span class="per-night">/night</span>\n    </div></td>\n    <td class="meta-total"><div class="inner"><span class="value">$<%- room[0].total_price %></span></div></td>\n    <td class="meta-cta"><div class="inner"><button class="go tenor">Select</button></div></td>\n</tr>',
        filename: undefined
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            buf.push('<tr class="meta-rate-row partner-rate" data-url="', (__stack.lineno = 1, encodeURI(ta_booking_link)), '" data-offer-id="', escape((__stack.lineno = 1, provider_info_key)), '">\n    <td class="meta-site"><div class="inner">', (__stack.lineno = 2, providerInfo.display_name), '</div></td>\n    <td class="meta-rate"><div class="inner">\n        <span class="value">$', (__stack.lineno = 4, room[0].avg_nightly_price), '</span><span class="asterisk">*</span> <span class="per-night">/night</span>\n    </div></td>\n    <td class="meta-total"><div class="inner"><span class="value">$', (__stack.lineno = 6, room[0].total_price), '</span></div></td>\n    <td class="meta-cta"><div class="inner"><button class="go tenor">Select</button></div></td>\n</tr>');
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}; 

Templates["./views/partials/property2/meta-rate-top.ejs"] = function anonymous(locals, filters, escape) {
    escape = escape || function(html) {
        return String(html).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<tr class="meta-rate-row top-rate">\n\n    <!-- room information -->\n    <td class="meta-site">\n        <div class="inner">\n            <img title="Jetsetter.com" src="/static/images/layout/header/logo.png?v3" style="width: 150px; height: auto;"/>\n        </div>\n    </td>\n\n    <!-- avg price/night -->\n    <td class="meta-rate">\n        <div class="inner">\n            <% if (avgMarketNightlyRate) { %>\n                <span class="market"><%=currencySymbol%><%=avgMarketNightlyRate%></span>\n            <% } %>\n            <span class="value"><%=currencySymbol%><%=avgNightlyRate%></span><span class="asterisk">*</span> <span class="per-night">/night</span>\n        </div>\n    </td>\n\n    <!-- total -->\n    <td class="meta-total">\n        <div class="inner">\n            <div class="inner"><span class="value"><%= currencySymbol %><%= total %></span></div>\n        </div>\n    </td>\n\n    <!-- buttons -->\n    <td class="meta-cta">\n        <div class="inner">\n            <button class="book flat cta-button tenor">Book Now</button>\n        </div>\n    </td>\n\n</tr>',
        filename: undefined
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            buf.push('<tr class="meta-rate-row top-rate">\n\n    <!-- room information -->\n    <td class="meta-site">\n        <div class="inner">\n            <img title="Jetsetter.com" src="/static/images/layout/header/logo.png?v3" style="width: 150px; height: auto;"/>\n        </div>\n    </td>\n\n    <!-- avg price/night -->\n    <td class="meta-rate">\n        <div class="inner">\n            ');
            __stack.lineno = 13;
            if (avgMarketNightlyRate) {
                buf.push('\n                <span class="market">', escape((__stack.lineno = 14, currencySymbol)), "", escape((__stack.lineno = 14, avgMarketNightlyRate)), "</span>\n            ");
                __stack.lineno = 15;
            }
            buf.push('\n            <span class="value">', escape((__stack.lineno = 16, currencySymbol)), "", escape((__stack.lineno = 16, avgNightlyRate)), '</span><span class="asterisk">*</span> <span class="per-night">/night</span>\n        </div>\n    </td>\n\n    <!-- total -->\n    <td class="meta-total">\n        <div class="inner">\n            <div class="inner"><span class="value">', escape((__stack.lineno = 23, currencySymbol)), "", escape((__stack.lineno = 23, total)), '</span></div>\n        </div>\n    </td>\n\n    <!-- buttons -->\n    <td class="meta-cta">\n        <div class="inner">\n            <button class="book flat cta-button tenor">Book Now</button>\n        </div>\n    </td>\n\n</tr>');
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}; 

/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jshint undef:true, browser:true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.lscache = factory();
    }
}(this, function () {

  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-';

  // Suffix for the key name on the expiration items in localStorage
  var CACHE_SUFFIX = '-cacheexpiration';

  // expiration date radix (set to Base-36 for most space savings)
  var EXPIRY_RADIX = 10;

  // time resolution in minutes
  var EXPIRY_UNITS = 60 * 1000;

  // ECMAScript max Date (epoch + 1e8 days)
  var MAX_DATE = Math.floor(8.64e15/EXPIRY_UNITS);

  var cachedStorage;
  var cachedJSON;
  var cacheBucket = '';
  var warnings = false;

  // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.
  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    }

    try {
      setItem(key, value);
      removeItem(key);
      cachedStorage = true;
    } catch (exc) {
      cachedStorage = false;
    }
    return cachedStorage;
  }

  // Determines if native JSON (de-)serialization is supported in the browser.
  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = (window.JSON != null);
    }
    return cachedJSON;
  }

  /**
   * Returns the full string for the localStorage expiration item.
   * @param {String} key
   * @return {string}
   */
  function expirationKey(key) {
    return key + CACHE_SUFFIX;
  }

  /**
   * Returns the number of minutes since the epoch.
   * @return {number}
   */
  function currentTime() {
    return Math.floor((new Date().getTime())/EXPIRY_UNITS);
  }

  /**
   * Wrapper functions for localStorage methods
   */

  function getItem(key) {
    return localStorage.getItem(CACHE_PREFIX + cacheBucket + key);
  }

  function setItem(key, value) {
    // Fix for iPad issue - sometimes throws QUOTA_EXCEEDED_ERR on setItem.
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
    localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
  }

  function warn(message, err) {
    if (!warnings) return;
    if (!'console' in window || typeof window.console.warn !== 'function') return;
    window.console.warn("lscache - " + message);
    if (err) window.console.warn("lscache - The error was: " + err.message);
  }

  var lscache = {
    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     */
    set: function(key, value, time) {
      if (!supportsStorage()) return;

      // If we don't get a string value, try to stringify
      // In future, localStorage may properly support storing non-strings
      // and this can be removed.
      if (typeof value !== 'string') {
        if (!supportsJSON()) return;
        try {
          value = JSON.stringify(value);
        } catch (e) {
          // Sometimes we can't stringify due to circular refs
          // in complex objects, so we won't bother storing then.
          return;
        }
      }

      try {
        setItem(key, value);
      } catch (e) {
        if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.name === 'QuotaExceededError') {
          // If we exceeded the quota, then we will sort
          // by the expire time, and then remove the N oldest
          var storedKeys = [];
          var storedKey;
          for (var i = 0; i < localStorage.length; i++) {
            storedKey = localStorage.key(i);

            if (storedKey.indexOf(CACHE_PREFIX + cacheBucket) === 0 && storedKey.indexOf(CACHE_SUFFIX) < 0) {
              var mainKey = storedKey.substr((CACHE_PREFIX + cacheBucket).length);
              var exprKey = expirationKey(mainKey);
              var expiration = getItem(exprKey);
              if (expiration) {
                expiration = parseInt(expiration, EXPIRY_RADIX);
              } else {
                // TODO: Store date added for non-expiring items for smarter removal
                expiration = MAX_DATE;
              }
              storedKeys.push({
                key: mainKey,
                size: (getItem(mainKey)||'').length,
                expiration: expiration
              });
            }
          }
          // Sorts the keys with oldest expiration time last
          storedKeys.sort(function(a, b) { return (b.expiration-a.expiration); });

          var targetSize = (value||'').length;
          while (storedKeys.length && targetSize > 0) {
            storedKey = storedKeys.pop();
            warn("Cache is full, removing item with key '" + key + "'");
            removeItem(storedKey.key);
            removeItem(expirationKey(storedKey.key));
            targetSize -= storedKey.size;
          }
          try {
            setItem(key, value);
          } catch (e) {
            // value may be larger than total quota
            warn("Could not add item with key '" + key + "', perhaps it's too big?", e);
            return;
          }
        } else {
          // If it was some other error, just give up.
          warn("Could not add item with key '" + key + "'", e);
          return;
        }
      }

      // If a time is specified, store expiration info in localStorage
      if (time) {
        setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
      } else {
        // In case they previously set a time, remove that info from localStorage.
        removeItem(expirationKey(key));
      }
    },

    /**
     * Retrieves specified value from localStorage, if not expired.
     * @param {string} key
     * @return {string|Object}
     */
    get: function(key) {
      if (!supportsStorage()) return null;

      // Return the de-serialized item if not expired
      var exprKey = expirationKey(key);
      var expr = getItem(exprKey);

      if (expr) {
        var expirationTime = parseInt(expr, EXPIRY_RADIX);

        // Check if we should actually kick item out of storage
        if (currentTime() >= expirationTime) {
          removeItem(key);
          removeItem(exprKey);
          return null;
        }
      }

      // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.
      var value = getItem(key);
      if (!value || !supportsJSON()) {
        return value;
      }

      try {
        // We can't tell if its JSON or a string, so we try to parse
        return JSON.parse(value);
      } catch (e) {
        // If we can't parse, it's probably because it isn't an object
        return value;
      }
    },

    /**
     * Removes a value from localStorage.
     * Equivalent to 'delete' in memcache, but that's a keyword in JS.
     * @param {string} key
     */
    remove: function(key) {
      if (!supportsStorage()) return null;
      removeItem(key);
      removeItem(expirationKey(key));
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function() {
      if (!supportsStorage()) return;

      // Loop in reverse as removing items will change indices of tail
      for (var i = localStorage.length-1; i >= 0 ; --i) {
        var key = localStorage.key(i);
        if (key.indexOf(CACHE_PREFIX + cacheBucket) === 0) {
          localStorage.removeItem(key);
        }
      }
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     * @param {string} bucket
     */
    setBucket: function(bucket) {
      cacheBucket = bucket;
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function() {
      cacheBucket = '';
    },

    /**
     * Sets whether to display warnings when an item is removed from the cache or not.
     */
    enableWarnings: function(enabled) {
      warnings = enabled;
    }
  };

  // Return the module
  return lscache;
}));
/**
 * This class may be shared between node and front-end JS therefore it should rely on as few outside dependencies as possible
 * @type {{_dateToString: _dateToString, _stringToDate: _stringToDate, _addDays: _addDays, _subDays: _subDays, _cloneDate: _cloneDate, getAvailableCheckInDates: getAvailableCheckInDates, getAvailableCheckOutDates: getAvailableCheckOutDates}}
 */

var InventoryUtils = {

    _MS_PER_DAY : 1000 * 60 * 60 * 24,

    _dateToString: function(date) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        return year + "-" + (month[1] ? month : "0" + month) + "-" + (day[1] ? day : "0" + day);
    },

    _stringToDate: function(date) {
        return new Date(date.substr(0,4), parseInt(date.substr(5,2), 10) - 1, date.substr(8,2));
    },

    _addDays: function(date, numDays) {
        date.setDate(date.getDate() + numDays);
        return date;
    },

    _subDays: function(date, numDays) {
        date.setDate(date.getDate() - numDays);
        return date;
    },

    _cloneDate: function(date) {
        var newDate = new Date();
        newDate.setTime(date.getTime());
        return newDate;
    },

    _diff: function(a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        var diff = Math.floor((utc2 - utc1) / this._MS_PER_DAY);
        return diff;
    },

    // Filter inventory based on:
    // - product/room type
    // - checkin/out dates
    // - num of rooms (occupancy indirectly)
    // - min/max stay
    // - available consecutive days
    getAvailableCheckInDates: function (inventory, checkOutDate, numOfRooms, numOfGuests) {

        numOfRooms = numOfRooms || 1;

        var checkOutDateString = null;

        if (checkOutDate) {
            if (moment && moment.isMoment(checkOutDate)) {
                checkOutDate = checkOutDate.toDate();
            } else if (typeof checkOutDate === 'string') {
                checkOutDate = this._stringToDate(checkOutDate);
            }
            checkOutDateString = this._dateToString(checkOutDate);
        }

        // `availabilityMap` is a map of date to availability information. ie
        // {
        //   2013-07-30: {
        //      availability: 1
        //      isAvailable: true
        //      marketPrice: null
        //      maxStay: 28
        //      minStay: 2
        //      price: null
        //    },
        //    2013-07-31: {
        //      availability: 1
        //      isAvailable: true
        //      marketPrice: null
        //      maxStay: 28
        //      minStay: 2
        //      price: null
        //    }
        // }
        var availabilityMap = {};

        var now = new Date();
        now.setTime(now.getTime() + (now.getTimezoneOffset() * 60000));  // set date to UTC

        for(var i = 0, ilength = inventory.roomTypeInventory.length; i < ilength; i++) {
            var roomTypeInventory = inventory.roomTypeInventory[i];
            var roomType = roomTypeInventory.roomType;

            // bail out if the room type doesn't have enough max occupancy
            if (numOfGuests > roomType.restrictions.maxOccupancy) {
                continue;
            }

            for (var j = 0, jlength = roomTypeInventory.ratePlanInventory.length; j < jlength; j++) {
                var ratePlanInventory = roomTypeInventory.ratePlanInventory[j];

                // convenience storage for members of ratePlanInventory
                var nightlyInventory = ratePlanInventory.nightlyInventory;
                var ratePlan = ratePlanInventory.ratePlan;
                var ratePlanRestrictions = ratePlan.restrictions || {};

                var dateKeys = Object.keys(nightlyInventory).sort();

                var firstDate = this._stringToDate(dateKeys[0]);
                var lastDate = this._stringToDate(dateKeys[dateKeys.length - 1]);


                for (var bookingDate = lastDate; bookingDate >= firstDate; this._subDays(bookingDate, 1)) {

                    if (checkOutDate && bookingDate >= checkOutDate) {
                        continue; // Skip days that come after the checkout date. move onto next date
                    }

                    // if the booking date is closer to the current date than the advance purchase requirement
                    if(ratePlanRestrictions.advancePurchaseRequirement && Math.abs(this._diff(bookingDate, now)) < ratePlanRestrictions.advancePurchaseRequirement) {
                        continue;
                    }

                    var dateKey = this._dateToString(bookingDate);
                    var checkInInventory = nightlyInventory[dateKey];
                    if (!checkInInventory) {
                        // if there's a checkout date, break off the search now because the user can't select a room
                        // for checkin earlier than this date if this date is not available
                        if (checkOutDate && bookingDate < checkOutDate) {
                            break; // break out of this rate plan
                        }
                        continue; // move onto the next date
                    }

                    var checkInInventoryRestrictions = checkInInventory.restrictions || {};

                    //var lengthOfStay = checkOutDate ? Math.abs(checkOutDate.diff(bookingDate, 'day')) : null;
                    var lengthOfStay = checkOutDate ? Math.abs(this._diff(checkOutDate, bookingDate)) : null;

                    if (checkInInventoryRestrictions && (checkInInventoryRestrictions.closedMaster || checkInInventoryRestrictions.closedToArrival)) {
                        continue; // move onto the next date
                    }

                    var stayAvailability = checkInInventory.availability;
                    var stayMinLOS = Math.max(checkInInventoryRestrictions.minLOS || 1, checkInInventoryRestrictions.forwardMinLOS || 1);
                    var stayMaxLOS = Math.min(checkInInventoryRestrictions.maxLOS || 28, checkInInventoryRestrictions.forwardMaxLOS || 28);

                    if ((stayAvailability < numOfRooms) && (this.soldOutSelectable == false)) {
                        continue; // continue onto next date if this one doesn't have enough availability
                    }

                    // Consecutive availability: if this booking date is selected, can the min stay be fulfilled for this product?
                    var forwardLengthOfStay = 0;
                    var dateSelectable = true;
                    var fplosBlocksStay = true; // make sure that fplos doesn't block all available nights in the min stay.
                    do {
                        forwardLengthOfStay += 1;
                        var stayDate = this._addDays(this._cloneDate(bookingDate), forwardLengthOfStay);
                        var stayDateKey = this._dateToString(stayDate);

                        // the departure that be used if the customer were to stay on this date. used for checking departure date restriction
                        var stayDateDepartureDateKey = this._dateToString(this._addDays(this._cloneDate(bookingDate), forwardLengthOfStay + 1));

                        var stayInventory = nightlyInventory[stayDateKey];
                        var stayInventoryRestrictions = stayInventory ? stayInventory.restrictions || {} : {};

                        // if there is no fplos or there is at least one fplos entry for the entire stay that allows a booking date in the stay then fplos will not block the stay
                        if (checkInInventoryRestrictions.checkout) {
                            if (checkInInventoryRestrictions.checkout[stayDateKey] === true) {
                                fplosBlocksStay = false;
                            }
                        } else {
                            fplosBlocksStay = false;
                        }

                        //var minStay = Math.max(checkOutDate ? Math.abs(checkOutDate.diff(bookingDate, 'day')) : 0, stayMinLOS) - 1;
                        var minStay = Math.max(checkOutDate ? Math.abs(this._diff(checkOutDate, bookingDate)) : 0, stayMinLOS) - 1;
                        if (forwardLengthOfStay > minStay) {
                            break; // break out of availability check
                        }

                        // Only check up to the check out date
                        if (checkOutDate && (stayDate > this._subDays(this._cloneDate(checkOutDate), 1))) {
                            break; // break out of availability check
                        }

                        if (!stayInventory) {
                            dateSelectable = false; // If inventory is doesn't exist then this rate plan isn't selectable past this date
                            break; // break out of consecutive availability check
                        }

                        if (nightlyInventory[stayDateDepartureDateKey] && nightlyInventory[stayDateDepartureDateKey].restrictions && nightlyInventory[stayDateDepartureDateKey].restrictions.closedToDeparture) {
                            stayMinLOS++;  // user can't leave on this date so needs to stay an extra night
                        }

                        if (stayInventoryRestrictions.closedMaster) {
                            dateSelectable = false;
                            break; // if this inventory is restricted master then this date isn't selectable, break out of the check
                        }

                        // optimization. short circuit checking for more rooms if this one breaks availability for the whole set
                        if ((stayInventory.availability < numOfRooms) && (this.soldOutSelectable == false)) {
                            dateSelectable = false;
                            break; // inventory not available. date is not available
                        }

                        stayAvailability = Math.min(stayAvailability, stayInventory.availability);
                        stayMinLOS = Math.max(stayMinLOS, stayInventoryRestrictions.minLOS || 1, stayInventoryRestrictions.forwardMinLOS || 1);
                        stayMaxLOS = Math.min(stayMaxLOS, stayInventoryRestrictions.maxLOS || 28, stayInventoryRestrictions.forwardMaxLOS || 28);
                    } while (true);

                    // if the min stay is longer than the max stay then this stay is not bookable
                    if (stayMinLOS > stayMaxLOS) {
                        continue;
                    }

                    if ((stayAvailability < numOfRooms) && (this.soldOutSelectable == false)) {
                        // if not enough availability to cover the entire stay, continue onto next room
                        continue;
                    }

                    if (fplosBlocksStay) {
                        // if there were no bookable stays in the min stay because they were blocked by fplos restrictions then continue onto the next date
                        continue;
                    }

                    // Check Full pattern LOS
                    if (lengthOfStay != null) {
                        if (checkInInventoryRestrictions.checkout && (
                            (Object.keys(checkInInventoryRestrictions.checkout).length >= lengthOfStay && checkInInventoryRestrictions.checkout[checkOutDateString] == false) ||
                                (Object.keys(checkInInventoryRestrictions.checkout).length < lengthOfStay && checkInInventoryRestrictions.checkout[Object.keys(checkInInventoryRestrictions.checkout).length] == false)
                            )) {
                            dateSelectable = false;
                            continue;  // This trip is not permitted accoring to FPLOS. continue onto next date
                        }
                    }

                    if (!dateSelectable) {
                        continue; // continue to the next date
                    }

                    var dayInfo = {
                        availability    : stayAvailability,
                        isAvailable     : stayAvailability >= numOfRooms,
                        minStay         : stayMinLOS,
                        maxStay         : stayMaxLOS,
                        price           : checkInInventory.price,
                        marketPrice     : checkInInventory.marketPrice
                    };

                    // If this date was iterated on previously, merge the current dateInfo into the one in the map... otherwise just set it
                    if (availabilityMap[dateKey]) {
                        var previous = availabilityMap[dateKey]; // convenience
                        availabilityMap[dateKey]['availability'] = Math.max(previous.availability, dayInfo.availability) || 0;
                        availabilityMap[dateKey]['isAvailable'] = previous.isAvailable || dayInfo.isAvailable;
                        availabilityMap[dateKey]['minStay'] = Math.min(previous.minStay || 1, dayInfo.minStay || 1);
                        availabilityMap[dateKey]['maxStay'] = Math.max(previous.maxStay || 28, dayInfo.maxStay || 28);
                        if (!previous.price || (dayInfo.price < previous.price)) {
                            availabilityMap[dateKey]['price'] = dayInfo.price;
                            availabilityMap[dateKey]['marketPrice'] = dayInfo.marketPrice;
                        }
                    } else {
                        availabilityMap[dateKey] = dayInfo;
                    }

                }
            }
        }

//        if (_.size(availabilityMap) === 0) {
//            throw 'No available dates found';
//        }

        var availableKeys = Object.keys(availabilityMap).sort();

        if (_.size(availabilityMap) > 0) {
            availabilityMap.earliestDate = this._stringToDate(availableKeys[0]);
            availabilityMap.latestDate = this._stringToDate(availableKeys[availableKeys.length - 1]);
        } else {
            availabilityMap.earliestDate = null;
            availabilityMap.latestDate = null;
        }

        return availabilityMap;

    },

    getAvailableCheckOutDates: function (inventory, checkInDate, numOfRooms, numOfGuests) {
        var checkInDateString = checkInDate ? this._dateToString(checkInDate) : null;

        numOfRooms = numOfRooms || 1;

        // `availabilityMap` is a map of date to availability information. ie
        // {
        //   2013-07-30: {
        //      availability: 1
        //      isAvailable: true
        //      marketPrice: null
        //      maxStay: 28
        //      minStay: 2
        //      price: null
        //    },
        //    2013-07-31: {
        //      availability: 1
        //      isAvailable: true
        //      marketPrice: null
        //      maxStay: 28
        //      minStay: 2
        //      price: null
        //    }
        // }
        var availabilityMap = {};

        for(var i = 0, ilength = inventory.roomTypeInventory.length; i < ilength; i++) {
            var roomTypeInventory = inventory.roomTypeInventory[i];
            var roomType = roomTypeInventory.roomType;

            // bail out if the room type doesn't have enough max occupancy
            if (numOfGuests > roomType.restrictions.maxOccupancy) {
                continue;
            }

            for (var j = 0, jlength = roomTypeInventory.ratePlanInventory.length; j < jlength; j++) {
                var ratePlanInventory = roomTypeInventory.ratePlanInventory[j];

                // convenience storage for members of ratePlanInventory
                var ratePlan = ratePlanInventory.ratePlan;
                var nightlyInventory = ratePlanInventory.nightlyInventory;

                var dateKeys = Object.keys(nightlyInventory).sort();
                var firstDate = this._stringToDate(dateKeys[0]);
                var lastDate = this._addDays(this._stringToDate(dateKeys[dateKeys.length - 1]), 1);

                var checkInInventory = checkInDate ? nightlyInventory[checkInDateString] : null;
                var checkInInventoryRestrictions = checkInInventory ? checkInInventory.restrictions || {} : {};

                if (checkInInventoryRestrictions.closedMaster || checkInInventoryRestrictions.closedToArrival) {
                    continue; // it is not allowed to check-in on this day for this rate plan. move on to the next rate plan
                }

                for (var bookingDate = firstDate; bookingDate < lastDate; this._addDays(bookingDate, 1)) {

                    if (checkInDate && bookingDate < checkInDate) {
                        continue; // Skip days that come before the check-in date
                    } else if (checkInDate && (Math.abs(this._diff(bookingDate, checkInDate)) > 28)) {
                        continue; // skip days that come 28 days after the check in since that's the maximum LOS
                    }

                    var dateKey = this._dateToString(bookingDate);
                    var checkOutInventory = nightlyInventory[dateKey];
                    if (!checkOutInventory) {
                        // if there's a checkout date, break off the search now because the user can't select a room
                        // for checkin earlier than this date if this date is not available
                        if (checkInDate && bookingDate >= checkInDate) {
                            break; // break out of this rate plan
                        }
                        continue; // move onto the next date
                    }
                    var checkOutInventoryRestrictions = checkOutInventory.restrictions || {};

                    var checkOutKey = this._dateToString(this._addDays(this._cloneDate(bookingDate), 1));

                    var lengthOfStay = checkInDate ? Math.abs(this._diff(bookingDate,checkInDate)) + 1 : null;

                    if (checkOutInventoryRestrictions.closedMaster) {
                        if (checkInDate) {
                            break; // this date is not bookable so no dates after this should be considered for this rate plan
                        } else {
                            continue;
                        }
                    }

                    if (nightlyInventory[checkOutKey]) {
                        // check if the day after the checkout has a departure restriction
                        if (nightlyInventory[checkOutKey].restrictions && nightlyInventory[checkOutKey].restrictions.closedToDeparture) {
                            continue; // move onto the next date, but this one is not available for check-out
                        }
                    }

                    var stayAvailability = checkOutInventory.availability;
                    var stayMinLOS = Math.max(checkOutInventoryRestrictions.minLOS || 1, checkOutInventoryRestrictions.forwardMinLOS || 1);
                    var stayMaxLOS = Math.min(checkOutInventoryRestrictions.maxLOS || 28, checkOutInventoryRestrictions.forwardMaxLOS || 28);

                    if (checkInInventory) {
                        stayMinLOS = Math.max(stayMinLOS, checkInInventoryRestrictions.minLOS || 1, checkInInventoryRestrictions.forwardMinLOS || 1);
                        stayMaxLOS = Math.min(stayMaxLOS, checkInInventoryRestrictions.maxLOS || 28, checkInInventoryRestrictions.forwardMaxLOS || 28);
                        stayAvailability = Math.min(stayAvailability, checkInInventory.availability);
                    }

                    // Consecutive availability: if this booking date is selected, can the min stay be fulfilled for this product?
                    var backwardLengthOfStay = 0;
                    var dateSelectable = true;
                    do {
                        backwardLengthOfStay += 1;
                        var stayDate = this._subDays(this._cloneDate(bookingDate), backwardLengthOfStay);
                        var stayDateKey = this._dateToString(stayDate);

                        var stayInventory = nightlyInventory[stayDateKey];

                        var minStay = Math.max(checkInDate ? Math.abs(this._diff(bookingDate, checkInDate)) : 0, stayMinLOS) - 1;
                        if (backwardLengthOfStay > minStay) {
                            break; // break out of availability check
                        }

                        // Only check up to the check out date
                        if (checkInDate && stayDate < checkInDate) {
                            break; // break out of availability check
                        }

                        if (!stayInventory) {
                            dateSelectable = false; // If inventory is doesn't exist then this rate plan isn't selectable past this date
                            break;
                        }

                        var stayInventoryRestrictions = stayInventory.restrictions || {};

                        if (stayInventoryRestrictions.closedMaster) {
                            dateSelectable = false; // if this inventory is restricted master then this date isn't selectable, break out of the check
                            break;
                        }

                        stayAvailability = Math.min(stayAvailability, stayInventory.availability);
                        stayMinLOS = Math.max(stayMinLOS, stayInventoryRestrictions.minLOS || 1, stayInventoryRestrictions.forwardMinLOS || 1);
                        stayMaxLOS = Math.min(stayMaxLOS, stayInventoryRestrictions.maxLOS || 28, stayInventoryRestrictions.forwardMaxLOS || 28);
                    } while (true);

                    // if the min stay is longer than the max stay then this stay is not bookable
                    if (stayMinLOS > stayMaxLOS) {
                        continue;
                    }

                    // Check Full pattern LOS
                    if (checkInInventory) {
                        if (checkInInventoryRestrictions.checkout && (
                            (Object.keys(checkInInventoryRestrictions.checkout).length >= lengthOfStay && checkInInventoryRestrictions.checkout[checkOutKey] == false) ||
                                (Object.keys(checkInInventoryRestrictions.checkout).length < lengthOfStay && checkInInventoryRestrictions.checkout[Object.keys(checkInInventoryRestrictions.checkout).length] == false)
                            )) {
                            dateSelectable = false;
                            continue;  // This trip is not permitted accoring to FPLOS. continue onto next date
                        }
                    }

                    if ((stayAvailability < numOfRooms) && (this.soldOutSelectable == false)) {
                        // not enough availability to cover the whole stay, continue onto next date
                        continue;
                    }

                    if (lengthOfStay != null) {
                        if (lengthOfStay < 0) {
                            continue; // Date is before check-in, continue to next date
                        }
                        if (lengthOfStay < stayMinLOS) {
                            continue; // Trip is shorter than allowed, continue onto next date
                        }
                        if (lengthOfStay > stayMaxLOS) {
                            break; // Trip is longer than allowed; stop trying
                        }
                    }

                    if (!dateSelectable) {
                        continue; // continue to the next date
                    }

                    var dayInfo = {
                        availability : stayAvailability,
                        minStay      : stayMinLOS,
                        maxStay      : stayMaxLOS,
                        price        : checkOutInventory.price,
                        marketPrice  : checkOutInventory.marketPrice,
                        isAvailable  : stayAvailability >= numOfRooms
                    };

                    // If this date was iterated on previously, merge the current dateInfo into the one in the map... otherwise just set it
                    if (availabilityMap[checkOutKey]) {
                        var previous = availabilityMap[checkOutKey]; // convenience
                        availabilityMap[checkOutKey]['availability'] = Math.max(previous.availability, dayInfo.availability);
                        availabilityMap[checkOutKey]['isAvailable'] = previous.isAvailable || dayInfo.isAvailable;
                        availabilityMap[checkOutKey]['minStay'] = Math.min(previous.minStay || 1, dayInfo.minStay || 1);
                        availabilityMap[checkOutKey]['maxStay'] = Math.max(previous.maxStay || 28, dayInfo.maxStay || 28);
                        if (dayInfo.price < previous.price) {
                            availabilityMap[checkOutKey]['price'] = dayInfo.price;
                            availabilityMap[checkOutKey]['marketPrice'] = dayInfo.marketPrice;
                        }
                    } else {
                        availabilityMap[checkOutKey] = dayInfo;
                    }

                }
            }
        }

//        if (_.size(availabilityMap) === 0) {
//            throw 'No available dates found';
//        }

        var availableKeys = Object.keys(availabilityMap).sort();


        if (_.size(availabilityMap) > 0) {
            availabilityMap.earliestDate = this._stringToDate(availableKeys[0]);
            availabilityMap.latestDate = this._stringToDate(availableKeys[availableKeys.length - 1]);
        } else {
            availabilityMap.earliestDate = null;
            availabilityMap.latestDate = null;
        }

        return availabilityMap;
    }

};

if (typeof module !== 'undefined') {
    module.exports = InventoryUtils;
}
if (typeof window['Class'] != 'function') {
    var clazz = require('node-base-class');
} else {
    var clazz = window['Class'];
}
var InventoryUtils = InventoryUtils || require('inventory-utils');

var InventoryManager = new clazz({

    Implements: Events,

	initialize: function(property, inventory) {
		this.property = property;

        this.channel = property.channel || property.mode; // so that we can accept either a v3 or v4 property object
        this.propertyId = this.property.propertyId;

        if (inventory) {
            this.setInventory(inventory);
        }

		this.soldOutSelectable = (this.channel == 'flash') || (this.property.details && this.property.details.standbysEnabled);

	},

    addInventory: function(newInventory) {
        this.setInventory(this._mergeInventory(this.inventory || {}, newInventory));
        this.fireEvent('inventoryAdded');
    },

    _mergeInventory: function(currentInventory, newInventory) {
        //var currentInventory = this.get('inventory');

        if (!currentInventory || !newInventory.roomTypeInventory) {
            return currentInventory;
        }

        if (!currentInventory.roomTypeInventory) {
            currentInventory.roomTypeInventory = {};
        }

        var ilength = newInventory.roomTypeInventory.length;
        for(var i = 0; i < ilength; i++) {

            // if current inventory doesn't have this room Type Id, add the whole thing
            var roomTypeId = newInventory.roomTypeInventory[i].roomType.id;
            var currentInventoryRoomType = _.find(currentInventory.roomTypeInventory, function(inv) { return inv.roomType && inv.roomType.id == roomTypeId; });
            if (!currentInventoryRoomType) {
                currentInventory.roomTypeInventory.push(newInventory.roomTypeInventory[i]);
                continue;
            }

            // otherwise we'll need to merge room type inventories
            var jlength = newInventory.roomTypeInventory[i].ratePlanInventory.length;
            for (var j = 0; j < jlength; j++) {

                // if the currently loaded inventory doesn't have this rate plan, add the whole thing and continue
                var ratePlanId = newInventory.roomTypeInventory[i].ratePlanInventory[j].ratePlan.id;
                var currentInventoryRatePlan = _.find(currentInventoryRoomType.ratePlanInventory, function(rpi) { return rpi.ratePlan.id == ratePlanId });
                if (!currentInventoryRatePlan) {
                    currentInventoryRoomType.ratePlanInventory.push(newInventory.roomTypeInventory[i].ratePlanInventory[j]);
                    continue;
                }

                _.each(newInventory.roomTypeInventory[i].ratePlanInventory[j].nightlyInventory, function(value, key) {
                    // if current inventory has the key, ignore it. otherwise add it to the currentInventoryRatePlan
                    if (currentInventoryRatePlan.nightlyInventory[key]) {
                        return;
                    } else {
                        currentInventoryRatePlan.nightlyInventory[key] = value;
                    }
                });

            }

        }

        return currentInventory;
    },

    // deprecated :)
    toDateString: function(date) {
        if (Jetsetter && (Jetsetter.ENV != 'production')) {
            console.log('inventory.js : toDateString deprecated');
        }
        return this._dateToString(date);
    },

    _dateToString: function(date) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        return year + "-" + (month[1] ? month : "0" + month) + "-" + (day[1] ? day : "0" + day);
    },

    _stringToDate: function(date) {
        return new Date(date.substr(0,4), parseInt(date.substr(5,2), 10) - 1, date.substr(8,2));
    },

    _addDays: function(date, numDays) {
        date.setDate(date.getDate() + numDays);
        return date;
    },

    _subDays: function(date, numDays) {
        date.setDate(date.getDate() - numDays);
        return date;
    },

    setInventory: function(inventory) {
        this.inventory = inventory;
        var products = {};

        // sort inventory by order set in admin
        this.inventory.roomTypeInventory = _.sortBy(this.inventory.roomTypeInventory, function(roomTypeInventory) { return -1 * (roomTypeInventory.roomType.adminDetails.order || 0); });

        _.each(_.map(this.inventory.roomTypeInventory, function(roomTypeInventory) {
            return [roomTypeInventory.roomType.id, roomTypeInventory.roomType.restrictions];
        }), function(prod) {
            products[prod[0]] = prod[1];
        });
        this.products = products;

        this.fireEvent('ready');

        /*if (Browser.ie6 || Browser.ie7) {
            setTimeout(this.fireEvent.bind(this, 'ready'), 0);
        } else {
            this.fireEvent('ready');
        } */
    },

	getAvailableProductIdsFromInventory: function (checkInDate, checkOutDate, numOfRooms, numOfGuests) {
		numOfRooms = numOfRooms || 1; 
		var productStates = this.getProductStatesFromInventory(checkInDate, checkOutDate, numOfRooms, numOfGuests);
		var availableProductIds = [];
		
		Object.each(productStates, function (productState, productId) {
			if (productState.isAvailable) {
				availableProductIds.push(productId);
			}
		});
		return availableProductIds;
	},

	// Filter inventory based on:
	// - product/room type
	// - checkin/out dates
	// - num of rooms (occupancy indirectly)
	// - min/max stay
	// - available consecutive days
	getAvailableCheckInDates: function (checkOutDate, numOfRooms, numOfGuests) {
        return InventoryUtils.getAvailableCheckInDates(this.inventory, checkOutDate, numOfRooms, numOfGuests);
    },

    getAvailableCheckOutDates: function (checkInDate, numOfRooms, numOfGuests) {
        return InventoryUtils.getAvailableCheckOutDates(this.inventory, checkInDate, numOfRooms, numOfGuests);
    },

	// Determine which products are in the check in/out selection
	getProductStatesFromInventory: function (checkInDate, checkOutDate, numOfRooms, numOfGuests) {
		var productStates = {};

        if (moment && moment.isMoment(checkInDate)) {
            checkInDate = checkInDate.toDate();
        } else if (typeof checkInDate === "string") {
            checkInDate = this._stringToDate(checkInDate)
        }

        if (moment && moment.isMoment(checkOutDate)) {
            checkOutDate = checkOutDate.toDate();
        } else if (typeof checkOutDate === "string") {
            checkOutDate = this._stringToDate(checkOutDate);
        }

        for (var i = 0, ilength = this.inventory.roomTypeInventory.length; i < ilength; i++) {
            var roomTypeInventory = this.inventory.roomTypeInventory[i];
            var roomType = roomTypeInventory.roomType;
            var ratePlanInventory = roomTypeInventory.ratePlanInventory;

            var productMaxOccupancy = roomType.restrictions.maxOccupancy;

            productStates[roomType.id] = {
                'isAvailable' : true
            };

            if (numOfGuests != null && productMaxOccupancy > 0 && (productMaxOccupancy * numOfRooms) < numOfGuests) {
                productStates[roomType.id] = {
                    'isAvailable' : false,
                    'reason'      : 'max occupancy'
                };
                continue;
            }

            if (checkInDate && checkOutDate) {
                var days = Math.abs(checkOutDate.diff(checkInDate, 'day'));

                // the product is unavailable for selection if any of the dates is not allocated
                for (var k = 0,klength = ratePlanInventory.length; k < klength; k++) {

                    var ratePlan = ratePlanInventory[k].ratePlan;
                    var nightlyInventory = ratePlanInventory[k].nightlyInventory;
                    var selectionMinStay = 1;
                    var selectionMaxStay = 28;
                    var selectionAvailability = numOfRooms; // default to available

                    for (var j = 0; j < days; j++) { // iterate through dates
                        var dateInventory = nightlyInventory[this._dateToString(this._addDays(checkInDate.clone(), i))];
                        if (!dateInventory) {
                            productStates[roomType.id] = {
                                'isAvailable' : false,
                                'reason'      : 'no allocation'
                            };
                            break;
                        }
                        var dateInventoryRestrictions = dateInventory ? dateInventory.restrictions || {} : {};
                        selectionMinStay = Math.max(selectionMinStay, dateInventoryRestrictions.minStay || 1);
                        selectionMaxStay = Math.min(selectionMaxStay, dateInventoryRestrictions.maxStay || 28);
                        selectionAvailability = Math.min(selectionAvailability, dateInventory.availability);
                    }

                    if (!productStates[roomType.id].isAvailable) {
                        // if it was discovered that there is no allocation in the loop, forego the other checks below
                        continue;
                    }

                    if (selectionAvailability < numOfRooms) {
                        productStates[roomType.id] = {
                            'isAvailable' : false,
                            'reason'      : 'sold out'
                        };
                        continue;
                    }
                    if (days < selectionMinStay) {
                        productStates[roomType.id] = {
                            'isAvailable' : false,
                            'reason'      : 'below min stay'
                        };
                        continue;
                    }
                    if (days > selectionMaxStay) {
                        productStates[roomType.id] = {
                            'isAvailable' : false,
                            'reason'      : 'above max stay'
                        };
                        continue;
                    }

                    productStates[roomType.id] = {
                        'isAvailable' : true
                    };
                    break; // if the product state is available then it's available for *some* rate plan on this room and that is good enough for the final result

                }
            } else {

                if (checkInDate) {
                    for (var k = 0, klength = ratePlanInventory.length; k < klength; k++) {
                        var nightlyInventory = ratePlanInventory[k].nightlyInventory;
                        var checkInDateInventory = nightlyInventory[this._dateToString(checkInDate)];
                        if (!checkInDateInventory) {
                            productStates[roomType.id] = {
                                'isAvailable' : false,
                                'reason'      : 'no allocation'
                            };
                        } else if (checkInDateInventory.availability < numOfRooms) {
                            productStates[roomType.id] = {
                                'isAvailable' : false,
                                'reason'      : 'sold out'
                            };
                        }

                        if (productStates[roomType.id].isAvailable) {
                            // if the product state is available then it's available for *some* rate plan on this room and that is good enough for the final result
                            break;
                        }
                    }
                }

                if (checkOutDate) {
                    for (var k = 0, klength = ratePlanInventory.length; k < klength; k++) {
                        var nightlyInventory = ratePlanInventory[k].nightlyInventory;
                        var checkOutDateInventory = nightlyInventory[this._dateToString(checkOutDate)];
                        if (!checkOutDateInventory) {
                            productStates[roomType.id] = {
                                'isAvailable' : false,
                                'reason'      : 'no allocation'
                            };
                        } else if (checkOutDateInventory.availability < numOfRooms) {
                            productStates[roomType.id] = {
                                'isAvailable' : false,
                                'reason'      : 'sold out'
                            };
                        }

                        if (productStates[roomType.id].isAvailable) {
                            // if the product state is available then it's available for *some* rate plan on this room and that is good enough for the final result
                            break;
                        }
                    }
                }
            }
        }

        return productStates;
	},

    // Determine which products are in the check in/out selection
    // used in www to determine which products (available and standby) to show after dates are selected
    getProductStatesWithPricing: function (pricingModel, checkInDate, checkOutDate, numOfRooms, numOfGuests) {
        var productStates = this.getProductStatesFromInventory(checkInDate, checkOutDate, numOfRooms, numOfGuests);

        var newStates = {};

        // Default to all returned product ids, filter out unavailable products for the current selection
        _.each(productStates, function (product, productId) {
            var productPricing = pricingModel.getProductById(productId);
            if (productPricing) {
                if (!productStates[productId] || productStates[productId].isAvailable == false) {
                    newStates[productId] = product;
                }

                var isAvailable = (productPricing.roomRates[0].availability >= numOfRooms) && ((numOfRooms * productPricing.roomType.restrictions.maxOccupancy) >= numOfGuests);
                newStates[productId] = {
                    'isAvailable': isAvailable,
                    'reason': isAvailable ? '' : 'sold out',
                    'discountedSubtotal': pricingModel.getSubtotalForProduct(productId)
                };
            }
        }, this);

        return newStates;;
    },

    /**
     * determine if the options passed in are for an available stay
     * // TODO: move to node?
     * @param options
     * @returns {*}
     */
    isAvailable: function(options) {

        if (!options.checkInDate && options.checkOutDate) {
            return false;
        } else if (options.checkInDate && !options.checkOutDate) {
            return false;
        } else if (!options.checkInDate && !options.checkOutDate) {
            return true;
        }

        try {
            var availableCheckInDates = this.getAvailableCheckInDates(options.checkOutDate, options.numOfRooms, options.numOfGuests);
            var availableCheckOutDates = this.getAvailableCheckOutDates(options.checkInDate, options.numOfRooms, options.numOfGuests);
            var haveSelectedDates = options.checkInDate && options.checkOutDate && availableCheckInDates[this._dateToString(options.checkInDate)] && availableCheckOutDates[this._dateToString(options.checkOutDate)];
            if (haveSelectedDates) {
                return haveSelectedDates.isAvailable;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    },

    getFirstAvailableHoldDate: function (productId) {
        if (!Jetsetter.products[productId]) {
            return new Date(100000000*86400000); // date max
        }

        return new Date(Jetsetter.firstAvailableHoldDate);
    }

});

if (typeof module != 'undefined') {
    module.exports = InventoryManager;
}
Jetsetter.Models = Jetsetter.Models || {};
Jetsetter.Models.PropertyInventory = Composer.Model.extend({

    init: function() {
        this.timeToFetch = 0;
        this.fetched = false;
        this.fetching = false;
        this.fetchedAll = false;
        this.inventoryService = this.get('inventoryService') || new InventoryService();
    },

    getRoomTypeInventory: function() {
        var inv = this.get('inventory');
        if (inv.roomTypeInventory) {
            return inv.roomTypeInventory;
        } else {
            return [];
        }
    },

    // called when 'fetch' is called on the model. fetches entire inventory set for the property
    sync: function() {
        this.trigger('syncStart');
        this.fetched = false;
        this.fetching = true;

        this.search(new Date() /* start date */, null /* will default to 36 month range */, true /* means this will be all inventory */);
    },

    // search first 3 months of inventory, starting today
    searchFirstThreeMonths: function() {
        var start = new Date();
        var startNormalized = new Date().normalize('month');
        var end = new Date();
        end.setMonth(startNormalized.getMonth() + 3);
        end = end.normalize('month');
        return this.search(startNormalized,end,false);
    },

    // assuming there was a search call made previously, search for rest of the inventory after the last searched range
    searchRestForwards: function() {
        return this.search(this.endInventory, null, true);
    },

    // assuming there was a search call made previously, search for all inventory _before_ the last searched range
    searchRestBackwards: function() {
        var startNormalized = new Date().normalize('month');
        if (this.startInventory < startNormalized) {
            return true;
        }
        if (startNormalized.getFullYear() == this.startInventory.getFullYear() && startNormalized.getMonth() == this.startInventory.getMonth()) {
            return true;
        }
        return this.search(startNormalized, this.startInventory, true);
    },

    /**
     * Query inventory service for all inventory between startDate and endDate.
     * this_is_all flag tells whether or not there is no inventory left to fetch after this request returns
     * @param startDate
     * @param endDate
     * @param this_is_all
     */
    search: function(startDate, endDate, this_is_all) {

        if (!endDate) {
            endDate = new Date();
            endDate.setMonth(startDate.getMonth() + 36); // default range 3 years
        }

        this.fetching = true;

        if (!this.startInventory || (startDate < this.startInventory)) {
            this.startInventory = startDate;
        }

        if (!this.endInventory || (endDate > this.endInventory)) {
            this.endInventory = endDate;
        }

        var start = new Date(); // for timing svc

        this.inventoryService.getPropertyInventoryRange({
            propertyId : this.get('propertyId'),
            channel    : this.get('channel'),
            start      : moment(startDate).format("YYYY-MM-DD"),
            end        : moment(endDate).format("YYYY-MM-DD"),
            onSuccess: function(data) {
                this.fetching = false;
                var finish = new Date();
                this.timeToFetch = finish.getTime() - start.getTime();
                this.addInventory(data);
                if (this_is_all) {
                    this.fetchedAll = true;
                }
                this.fetched = true;
                this.trigger('syncSuccess', [startDate, endDate]);
            }.bind(this),
            onFailure: function(data) {
                var finish = new Date();
                this.timeToFetch = finish.getTime() - start.getTime();
                this.fetchFailed = true;
                if (this_is_all) {
                    this.fetchedAll = true;
                }
                this.trigger('syncFailure', [data]);
            }.bind(this)
        });
    },

    addInventory: function(newInventory) {
        this.set({ inventory : this._mergeInventory(this.get('inventory') || {}, newInventory) });
        this.trigger('inventoryAdded');
    },

    _mergeInventory: function(currentInventory, newInventory) {
        //var currentInventory = this.get('inventory');

        if (!currentInventory || !newInventory.roomTypeInventory) {
            return currentInventory;
        }

        if (!currentInventory.roomTypeInventory) {
            currentInventory.roomTypeInventory = [];
        }

        var ilength = newInventory.roomTypeInventory.length;
        for(var i = 0; i < ilength; i++) {

            // if current inventory doesn't have this room Type Id, add the whole thing
            var roomTypeId = newInventory.roomTypeInventory[i].roomType.id;
            var currentInventoryRoomType = _.find(currentInventory.roomTypeInventory, function(inv) { return inv.roomType && inv.roomType.id == roomTypeId; });
            if (!currentInventoryRoomType) {
                currentInventory.roomTypeInventory.push(newInventory.roomTypeInventory[i]);
                continue;
            }

            // otherwise we'll need to merge room type inventories
            var jlength = newInventory.roomTypeInventory[i].ratePlanInventory.length;
            for (var j = 0; j < jlength; j++) {

                // if the currently loaded inventory doesn't have this rate plan, add the whole thing and continue
                var ratePlanId = newInventory.roomTypeInventory[i].ratePlanInventory[j].ratePlan.id;
                var currentInventoryRatePlan = _.find(currentInventoryRoomType.ratePlanInventory, function(rpi) { return rpi.ratePlan.id == ratePlanId });
                if (!currentInventoryRatePlan) {
                    currentInventoryRoomType.ratePlanInventory.push(newInventory.roomTypeInventory[i].ratePlanInventory[j]);
                    continue;
                }

                _.each(newInventory.roomTypeInventory[i].ratePlanInventory[j].nightlyInventory, function(value, key) {
                    // if current inventory has the key, ignore it. otherwise add it to the currentInventoryRatePlan
                    if (currentInventoryRatePlan.nightlyInventory[key]) {
                        return;
                    } else {
                        currentInventoryRatePlan.nightlyInventory[key] = value;
                    }
                });

            }

        }

        return currentInventory;
    }
});

/**
 * singleton for propertyInventory model. allows usage of Jetsetter.Models.PropertyInventory.get(..) to fetch or create
 * the model so that all controllers can listen to a single model and we don't have multiple floating instances of the same
 * data set
 */
(function() {
    var modelCache = {};
    // set a static method on the model
    Jetsetter.Models.PropertyInventory.get = function(initParams) {
        var key = _.values(initParams).join(':');
        if (!modelCache[key]) {
            modelCache[key] = new Jetsetter.Models.PropertyInventory(initParams);
        }
        return modelCache[key];
    }
})();
Jetsetter.Models = Jetsetter.Models || {};
Jetsetter.Models.PropertyDetails = Composer.Model.extend({

    init: function() {
        this.fetched = false;
        this.fetching = false;
        this.propertyService = this.get('propertyService') || new PropertyService();

        var propertyId = this.get('propertyId');
        // fetch the servicedata from the global serviceData object if it was pre-fetched server-side
        if (Jetsetter && Jetsetter.serviceData && Jetsetter.serviceData['propertyDetails'] && Jetsetter.serviceData['propertyDetails'][propertyId]) {
            this.set({property: Jetsetter.serviceData['propertyDetails'][propertyId]});
            this.fetched = true;
        }
    },

    isMetaEligible: function() {
        // Disable for JETSETTER-21187
        // if (this.get("property")) {
        //     return (this.get('property').adminDetails.includeJsFee) &&
        //         (this.get('property').details.taId) &&
        //         (this.get('property').channel != 'flash') &&
        //         !(this.get('property').name.match(/mystery/i));
        // }
        return false;
    },

    sync: function() {
        this.trigger('syncStart');

        this.fetched = false;
        this.fetching = true;

        this.propertyService.getProperty({
            propertyId : this.get('propertyId'),
            channel    : this.get('channel'),
            onSuccess: function(data) {
                this.fetched = true;
                this.fetching = false;
                this.set({property : data});
                this.trigger('syncSuccess');
                this.trigger('syncComplete');
            }.bind(this),
            onFailure: function(data) {
                this.fetched = true;
                this.fetching = false;
                this.trigger('syncFailure', [data]);
                this.trigger('syncComplete');
            }.bind(this)
        })
    }
});

/**
 * singleton for propertyInventory model. allows usage of Jetsetter.Models.PropertyInventory.get(..) to fetch or create
 * the model so that all controllers can listen to a single model and we don't have multiple floating instances of the same
 * data set
 */
(function() {
    var modelCache = {};
    // set a static method on the model
    Jetsetter.Models.PropertyDetails.get = function(initParams) {
        var key = _.values(initParams).join(':');
        if (!modelCache[key]) {
            modelCache[key] = new Jetsetter.Models.PropertyDetails(initParams);
        }
        return modelCache[key];
    }
})();
Jetsetter.Models = Jetsetter.Models || {};
Jetsetter.Models.PropertyPricing = Composer.Model.extend({

    /*
    members:
    propertyId
    checkInDate
    checkOutDate
    numRooms
    eventId - optional
    pricing - set after sync
     */

    init: function() {
        this.timeToFetch = 0;
        this.fetched = false;
        this.fetching = false;
        this.pricingService = this.get('pricingService') || new PricingService();
        this.requestCounter = 0;
    },

    /**
     * return whether or not room type exists in the previous service response
     * @param id
     * @returns {boolean}
     */
    hasProduct: function(id) {
        return (id in this.productOrder);
    },

    /**
     * return the room type from the pricing response. Return undefined if the room type does not exist in the data
     * @param id
     * @returns {*}
     */
    getProductById: function(id) {
        return _.find(this.get('pricing'), function(pricingItem) {
            return pricingItem.roomType.id == id;
        });
    },

    /**
     * Initiate a pricing request for the given dates. syncSuccess and syncFailure will trigger depending on the service response
     * @param checkInDate
     * @param checkOutDate
     */
    search: function(checkInDate, checkOutDate) {
        this.requestCounter++;
        this.trigger('syncStart');
        this.fetched = false;
        this.fetching = true;
        var start = new Date();

        var currentRequest = this.requestCounter;

        this.pricingService.getRoomRates({
            propertyId  : this.get('propertyId'),
            checkIn     : this._dateToString(checkInDate),
            checkOut    : this._dateToString(checkOutDate),
            channel     : this.get('channel'),
            onSuccess: function(response){
                if (currentRequest < this.requestCounter) {
                    // if true this means that search was called again before this request was able to finish so therefore this response is stale and shouldn't trigger any events
                    return;
                }
                var finish = new Date();
                this.timeToFetch = finish.getTime() - start.getTime();
                this.fetched = true;
                this.fetching = false;
                if(response.length === 0){
                    return this.trigger('syncFailure');
                }

                this.set({ pricing : response });
                this.productOrder = this._loadProductOrder(response);
                this.trigger('syncSuccess');
            }.bind(this),
            onFailure: function(){
                if (currentRequest < this.requestCounter) {
                    // if true this means this request is stale and shouldn't trigger any events
                    return;
                }
                var finish = new Date();
                this.timeToFetch = finish.getTime() - start.getTime();
                this.fetched = true;
                this.fetching = false;
                this.fetchFailed = true;
                this.trigger('syncFailure');
            }.bind(this)
        });
    },

    /**
     * return the product order that prices should be displayed
     * @returns {*}
     */
    getProductOrder: function() {
        return this.productOrder;
    },

    _loadProductOrder: function(serviceResponse) {
        serviceResponse.sort(function(room1, room2) {
            var room1Order = room1.roomType.adminDetails.order;
            var room2Order = room2.roomType.adminDetails.order;

            if (room1Order && room2Order) {
                // both rooms have an order
                if (room1Order == room2Order) {
                    // both rooms have the same order, sort by price ascending
                    return room1.roomRates[0].averageNightlyRate - room2.roomRates[0].averageNightlyRate;
                } else {
                    // sort by order descending
                    return room2Order - room1Order;
                }
            } else if (room1Order) {
                // room1 has an order but room2 does not, put room1 ahead of room 2
                return -1;
            } else if (room2Order) {
                // room2 has an order but room1 does not, put room2 ahead of room 1
                return 1;
            } else {
                // neither rooms have an order, sort by price ascending
                return room1.roomRates[0].averageNightlyRate - room2.roomRates[0].averageNightlyRate;
            }
        });

        return _.map(serviceResponse, function(room) { return room.roomType.id; });
    },

    /**
     * Get a summary object of lowest average nighlty rate prices for the products returned in this pricing response
     * @returns {{}}
     */
    getProductPrices: function () {
        var productPrices = {};

        if (!this.get('pricing')) {
            return productPrices;
        }

        _.each(this.get('pricing'), function (room) {
            productPrices[room.roomType.id] = {
                averagePrice : room.roomRates[0].averageNightlyRate
            };
        });

        return productPrices;
    },

    /**
     * Get the 'rate' object for the product Id and optional supplied rate plan
     * @param productId
     * @param ratePlanId
     * @returns {*}
     */
    getProductRate: function(productId, ratePlanId) {
        var product = this.getProductById(productId);
        if (product) {
            if (!ratePlanId) {
                return product.roomRates[0];
            } else {
                return _.find(product.roomRates, function(roomRate) { return roomRate.ratePlan.id == ratePlanId; });
            }
        }
        return null;
    },

    /**
     * get the
     * @param productId
     * @param ratePlanId optional, method will return first (cheapest) rate plan if not supplied
     * @returns {*}
     */
    getProductRatePlan: function(productId, ratePlanId){
        var productRate = this.getProductRate(productId, ratePlanId);
        if (productRate) {
            return productRate.ratePlan;
        }
        return null;
    },

    /**
     * Return all room Rates for a product
     * @param productId
     * @returns {*}
     */
    getProductRatePlans: function(productId) {
        var product = this.getProductById(productId);
        if (product) {
            return product.roomRates;
        }
        return null;
    },

    /**
     * Return the product with the lowest average nightly rate
     * @returns {*}
     */
    getLowestPricedProduct: function() {
        if (this.get('pricing')) {
            return _.min(this.get('pricing'), function(pricingObject) {
                return pricingObject.roomRates[0].averageNightlyRate;
            });
        }
        return null;
    },

    /**
     * return the maximum number of rooms that should be allowable to select for this pricing model
     */
    getMaxNumOfSelectableRooms: function() {
        // @todo: support standby?
        var maximumAvailability = _.reduce(this.get('pricing'), function(memo, room) {

            // collect the maximum availability of all of this room's rate plans
            var maxRateAvailability = _.reduce(room.roomRates, function(memo, rate) {
                return Math.max(rate.availability, memo);
            }, 0);

            return Math.max(maxRateAvailability, memo);

        }, 0 /* default to max 4 */);

        // limit to maximum of 4
        return Math.min(maximumAvailability, 4);
    },

    /**
     * return the maximum number of guests that should be allowed per-room for this pricing model
     */
    getMaxNumOfSelectableGuests: function() {
        return _.reduce(this.get('pricing'), function(memo, room) {
            return Math.max(memo, room.roomType.restrictions.maxOccupancy || 0);
        }, 0);
    },

    /**
     * Get the lowest price rate plan in the property response among all available rate plans that can fulfill the desired numRooms and numGuests
     * @param numRooms
     * @param numGuests
     * @returns {*}
     */
    getLowestPricedRatePlan: function(numRooms, numGuests, allowUnavailable /* used if we want to return potential standby dates */) {
        if (this.get('pricing')) {
            return _.chain(this.get('pricing'))

                // filter out rooms that can't reach max occupancy
                .filter(function(room) { return room.roomType.restrictions.maxOccupancy >= (numGuests || 1); })

                // reduce to rate plans with availability
                .map(function(room) {

                    // get room rates that can accomodate the requested availability
                    var availableRoomRates = _.filter(room.roomRates, function(roomRate) { return allowUnavailable || (roomRate.availability >= (numRooms || 1)); });

                    if (availableRoomRates.length === 0) {
                        // return false if no room rates fulfill the request. compact() later in the chain will ignore this room type
                        return false;
                    }

                    // return map value as the room rate with lowest averageNightlyRate
                    return _.min(availableRoomRates, function(roomRate) { return roomRate.averageNightlyRate; });
                })

                .compact()

                // get first ratePlan with availability
                .first()

                .value();
        }
        return null;
    },

    /**
     * Get the subtotal (including discounts) for the product with the given id
     * @param productId
     * @param ratePlanId (optional) If passed in then the subtotal for that rate plan will be returned, otherwise the first rate plan will be used
     * @returns {number}
     */
    getSubtotalForProduct: function (productId, ratePlanId) {
        var rate = this.getProductRate(productId, ratePlanId);
        if (rate) {
            var charges = rate.chargesSummary;
            return charges.subtotal - (charges.discount || 0);
        }
        return 0;
    },

    // internal method
    _dateToString: function(date) {
        return moment(date).format('YYYY-MM-DD');
    },

    /**
     * clear fetched pricing information
     */
    reset: function() {
        this.fetched = false;
        this.fetching = false;
        this.productOrder = null;
        this.unset('pricing');
    },

    // Determine which products are in the check in/out selection
    // used in www to determine which products (available and standby) to show after dates are selected
    getProductStates: function (numOfRooms, numOfGuests) {
        var states = {};
        _.each(this.get('pricing'), function(pricing) {
            var isAvailable = (pricing.roomRates[0].availability >= numOfRooms) && ((numOfRooms * pricing.roomType.restrictions.maxOccupancy) >= numOfGuests);
            states[pricing.roomType.id] = {
                isAvailable : isAvailable,
                reason      : isAvailable ? '' : 'sold out',
                averageNightlyRate: pricing.roomRates[0].averageNightlyRate,
                discountedSubtotal : this.getSubtotalForProduct(pricing.roomType.id)
            };
        }.bind(this));
        return states;
    }

});

/**
 * singleton for propertyInventory model. allows usage of Jetsetter.Models.PropertyPricing.get(..) to fetch or create
 * the model so that all controllers can listen to a single model and we don't have multiple floating instances of the same
 * data set
 */
(function() {
    var modelCache = {};
    // set a static method on the model
    Jetsetter.Models.PropertyPricing.get = function(initParams) {
        var key = _.values(initParams).join(':');
        if (!modelCache[key]) {
            modelCache[key] = new Jetsetter.Models.PropertyPricing(initParams);
        }
        return modelCache[key];
    }
})();
Jetsetter.Models = Jetsetter.Models || {};

/**
 * Model to represent an order-in-progress
 * @type {*}
 */
Jetsetter.Models.Order = Composer.Model.extend({

    /**
     * passables in `request` :
     * roomTypeId
     * ratePlanId
     * checkInDate - date object
     * checkOutDate - date object
     * mode - order/standby/hold/deferred
     * quantity
     * guests
     * trackName
     */

    init: function() {
        this.fetched = false;
        this.fetching = false;
        this.orderService = this.get('orderService') || new OrderService();  // for testing
    },

    goToCheckout: function() {

        var request = this.get('request');
        var mode = request.mode;
        var ratePlanId = request.ratePlanId;
        var roomTypeId = request.roomTypeId;
        var checkInString = moment(request.checkInDate).format("YYYY-MM-DD");
        var checkOutString = moment(request.checkOutDate).format("YYYY-MM-DD");
        var quantity = request.quantity;
        var guests = request.guests;
        var trackName = request.trackName;
        var format = request.format ? request.format : null;
        var channel = request.channel;

        var go = function (checkoutMode) {

            var orderQuery = {
                roomTypeId: roomTypeId,
                ratePlanId: ratePlanId,
                checkIn: checkInString,
                checkOut: checkOutString,
                mode: checkoutMode,
                rooms : JSON.stringify(this.buildRoomOccupancyObject(quantity, guests)),
                quantity : quantity,
                format: format,
                channel: channel,
                nm : trackName   // tracking
            };

            // create the order object and only continue if it returns correctly (has availability)
            this.orderService.getOrder(Object.merge({}, orderQuery, {
                orderType : checkoutMode,
                onSuccess: function(order) {
//                    var product = order.orderItems[0].product;
//                    if (true || (product.channel != 'flash') && product.details.collectOccupantDetails) {
//                        // delete quantity and keep rooms
//                        orderQuery.quantity = null;
//                    } else {
//                        // delete rooms and keep quantity
//                        orderQuery.rooms = null;
//                    }

                    this.trigger('checkoutSuccess');

                    setTimeout(function() {
                        document.location = Jetsetter.SECURE_HOST + '/checkout?' + Object.toQueryString(orderQuery);
                    }, 500); // wait a little while for any GAQ or omniture tracking to go through
                }.bind(this),
                onFailure: function() {
                    this.trigger('checkoutFailure', arguments);
                }.bind(this)
            }));

        }.bind(this);

        var guestBookingToken = (new URI()).getData('tok') || '';

        if (mode == 'order' || mode == 'deferred') {
            if (Jetsetter.user.hasSecureToken || (Jetsetter.user.hasIdentity() && guestBookingToken !== '')) {
                // go to public checkout directly, skip secure login
                go(mode);
            } else {
                Jetsetter.secureLogin({
                    dismissOnLogin: true,
                    onModalShow: function () {
                        this.trigger('checkoutSecureModalShown');
                    }.bind(this),
                    onCloseEnd: function () {
                        this.trigger('checkoutSecureModalClosed');
                    }.bind(this),
                    onLogin: function () {
                        this.trigger('checkoutSecureModalLogin');
                        go(mode);
                    }.bind(this)
                });
            }
        } else if (mode == 'standby') {
            Jetsetter.secureLogin({
                onModalShow: function () {
                    this.trigger('checkoutSecureModalShown');
                }.bind(this),
                onCloseEnd: function () {
                    this.trigger('checkoutSecureModalClosed');
                }.bind(this),
                onLogin: function () {
                    this.trigger('checkoutSecureModalLogin');
                    go('standby');
                }.bind(this)
            });
        } else if (mode == 'hold') {
            Jetsetter.secureLogin({
                onModalShow: function () {
                    this.trigger('checkoutSecureModalShown');
                }.bind(this),
                onCloseEnd: function () {
                    this.trigger('checkoutSecureModalClosed');
                }.bind(this),
                onLogin: function () {
                    go('hold');
                    // TODO: This doesn't seem to exist yet in v4
                    /*
                     new OrderService().getCountOfActiveHolds({
                     onSuccess: function(count) {
                     if(count >= 3) {
                     var notificationModal = new NotificationModal('Oops! Jetsetter allows a maximum of three active holds at a time. Please contact Customer Support if you have questions.','error');
                     notificationModal.show();
                     } else {
                     goToCheckout('hold');
                     }
                     }.bind(this),

                     onFailure: function() {
                     this.holdButton.set('disabled', false);
                     }.bind(this)
                     });*/
                }.bind(this)
            });
        }

        return true;
    },

    /**
     * Given a quantity (num of rooms) and guests amount, build a 'best-guess' room occupancy object.
     * This is for 'ean' type sales which require a rooms object for checkout however we do
     * not have a robust rooms/adults/childrens occupancy selector on the pdp currently to
     * faciliate choosing so we best guess based on quantity and guests
     *
     * note that the occupancy object will be ambiguous if it is not the only combination of rooms for the given
     * quantity and guests. For example if quantity=2 and guests=4, a valid room occupancies could be one of
     * 1,3 or 2,2
     *
     * @param quantity num of rooms
     * @param guests total num of guests
     * @param baseOccupancy base occupancy per-room
     * @param maxOccupancy max occupancy per-room
     */
    buildRoomOccupancyObject: function(quantity, guests) {

        if (guests < quantity) {
            // user chose more rooms than they have guests... default to at least as many guests as rooms
            guests = quantity;
        }

        var rooms = [];
        for (var i = 0; i < quantity; i++) {
            rooms.push({ adults: 0, children: []});
        }

        // assign guests to each rooms evenly
        for (var i = 0; i < guests; i++) {
            rooms[i % quantity].adults++;
        }

        return rooms;
    }

});

// this class should not have a global cache
Jetsetter.Models = Jetsetter.Models || {};
Jetsetter.Models.SearchParameters = Composer.Model.extend({

    // @todo: add filters to this model

    init: function() {
        this.set({
            'checkInDate'     : this.get('checkInDate') || null,
            'checkOutDate'    : this.get('checkOutDate') || null,
            'numOfRooms'      : this.get('numOfRooms') || 1,
            'numOfGuests'     : this.get('numOfGuests') || 2
        }, { silent: true });
    },

    hasDates: function() {
        return this.get('checkInDate') && this.get('checkOutDate');
    },

    // the internal checkInDate is a 'moment', get the Date representation
    // to get the moment representation, just call searchParametersModel.get('checkInDate')
    getCheckInDate: function() {
        var stored = this.get('checkInDate');
        if (stored) {
            return moment.isMoment(stored) ? stored.toDate() : stored;
        }
        return null;
    },

    getCheckOutDate: function() {
        var stored = this.get('checkOutDate');
        if (stored) {
            return moment.isMoment(stored) ? stored.toDate() : stored;
        }
        return null;
    }


});
Jetsetter.Models = Jetsetter.Models || {};
Jetsetter.Models.TripAdvisorMeta = Composer.Model.extend({

    POLLING_LIMIT : 10,
    POLLING_TIMEOUT: 1500,

    init: function() {
        this.fetched = false;
        this.fetchedPart = false;
        this.fetching = false;
        this.tripAdvisorMetaService = this.options.tripAdvisorMetaService || new TripAdvisorMetaService();
        this.taId = this.get('taId');
    },

    /**
     * send off the search.
     * this method will do some polling of the api if there are pending results after the first hit
     * @param checkIn
     * @param checkOut
     * @param numRooms
     * @param numGuests
     */
    search: function(checkIn, checkOut, numRooms, numGuests, mcid) {

        if (Jetsetter && Jetsetter.user && Jetsetter.user.isBot) {
            this.fetched = true;
            this.fetching = false;
            this.fetchedPart = true;
            this.trigger('syncSuccess');
            this.trigger('syncComplete');
            return false;
        }

        var poll;

        // if we're still polling for some other result set, abort it
        if (this.searchPollingTimeout) {
            clearInterval(this.searchPollingTimeout);
        }

        this.trigger('syncStart');

        var pollCounter = 0;
        var isPolling = false; // keep track of whether or not we are currently polling

        this.fetched = false;
        this.fetching = true;
        this.fetchedPart = false;
        this.reachedPollingLimit = false;

        var searchQuery = {
            taId    : this.taId,
            checkIn : checkIn,
            nights  : moment(checkOut).diff(moment(checkIn), 'days'),
            rooms   : numRooms,
            adults  : numGuests,
            mcid    : mcid
        };

        var searchParams = _.extend(searchQuery, {
            onSuccess: function(response) {
                this.trigger('syncSuccess');
                // if there are pending results in the data, poll for it
                //if (response.data && response.data.hac_offers && response.data.hac_offers.pending && (response.data.hac_offers.pending.length > 0)) {
                if (response && (response.done_all != 1)) {
                    //console.log('got a response that indicates theres more progress');
                    // fire another request after the polling timeout
                    //console.log('waiting '+this.POLLING_TIMEOUT+' to poll');
                    this.fetchedPart = true;
                    this.set({results: response});
                    this.trigger('syncSuccess');
                    this.searchPollingTimeout = setTimeout(poll, this.POLLING_TIMEOUT);
                } else {
                    // if there were no pending offers in the response then we're done and no more polling is necessary
                    this.fetched = true;
                    this.fetching = false;
                    this.set({results: response});
                    this.trigger('syncSuccess');
                    this.trigger('syncComplete'); // this event signifies polling is complete and there are no results left to wait on
                }
            }.bind(this),

            onFailure: function(data) {
                if (isPolling) {
                    // if polling then ignore failures because we already had a successful first call
                    // however don't break the chain and continue polling until the limit has been reached.
                    // this is because the error might have been some network hiccup that won't be repeated
                    this.searchPollingTimeout = setTimeout(poll, this.POLLING_TIMEOUT);
                    return;
                }
                this.fetched = true;
                this.fetching = false;
                this.trigger('syncFailure', [data]);
            }.bind(this)
        });

        poll = function() {
            //console.log('polling', pollCounter);
            if (pollCounter > 0) {
                isPolling = true;
                if (pollCounter >= this.POLLING_LIMIT) {
                    //console.log('reached polling limit');
                    // we've reached the maximum polling limit and still having pending offers. end here
                    this.fetched = true;
                    this.fetching = false;
                    this.reachedPollingLimit = true;
                    this.trigger('syncComplete'); // signifies that polling is complete and there are no more results left to wait on
                    return;
                }
            }
            pollCounter++;
            this.tripAdvisorMetaService.search(searchParams);
        }.bind(this);

        // fire off the first polling request which will begin polling until there are no more pending results in hac_offers or the POLLING_LIMIT is reached
        poll();

    },

    /**
     * get offers once the data has been fetched
     */
    getOffers: function() {
        if (!this.get('results')) { return []; }
        var hotel = _.find(this.get('results').valid_hotels, function(hotel) { return hotel.loc_id == this.get('taId');}.bind(this)); // get the hotel provider with the ta id that is specified in this class
        if (!hotel) { return []; }
        if (!'available' in hotel.providers) { return []; }

        var providerInfo = this.getProviderInfo();
        var offers = [];
        _.each(hotel.providers.available, function(provider) {
            provider.providerInfo = (provider.provider_info_key in providerInfo) && providerInfo[provider.provider_info_key];

            if (provider.providerInfo.display_name && provider.providerInfo.display_name.match(/jetsetter/i)) {
                // skip Jetsetter.com in the list
                return;
            }

            offers.push(provider);
        }.bind(this));

        return offers;
    },

    getProviderInfo: function() {
        return (this.get('results') && this.get('results').provider_info) || [];
    }

});

/**
 * singleton for propertyInventory model. allows usage of Jetsetter.Models.PropertyInventory.get(..) to fetch or create
 * the model so that all controllers can listen to a single model and we don't have multiple floating instances of the same
 * data set
 */
(function() {
    var modelCache = {};
    // set a static method on the model
    Jetsetter.Models.TripAdvisorMeta.get = function(initParams) {
        var key = _.values(initParams).join(':');
        if (!modelCache[key]) {
            modelCache[key] = new Jetsetter.Models.TripAdvisorMeta(initParams);
        }
        return modelCache[key];
    }
})();
/**
 * generic controller for inventory-enabled property checkin/checkout calendars.
 * This is a replacement for the current "BookingDatesSelector"
 * @type {*|{}}
 */

Jetsetter.Controllers = Jetsetter.Controllers || {};
Jetsetter.Controllers.PropertyDateCalendars = Composer.Controller.extend({

    dateFormat: Locale.get('Date.shortDate'),

    /**
     * pass in:
     * inventoryModel
     * propertyModel
     * quantity
     * guests
     * el
     * checkin (optional)
     * checkout (optional)
     */

    init: function() {

        // these two are passed in

//        this.inventoryModel = Jetsetter.Models.PropertyInventory.get({
//            propertyId : this.propertyId,
//            channel    : this.channel
//        });
//
//        this.propertyModel = Jetsetter.Models.PropertyDetails.get({
//            propertyId : this.propertyId,
//            channel    : this.channel
//        });

        this.inventoryModel.bind('syncSuccess', this.onInventorySync.bind(this));
        this.inventoryModel.bind('syncFailure', this.onInventorySync.bind(this));

        this.propertyModel.bind('syncSuccess', this.onPropertySync.bind(this));
        this.propertyModel.bind('syncFailure', this.onPropertySync.bind(this));

        if (this.inventoryModel.fetched) {
            this.onInventorySync();
        } else if (!this.inventoryModel.fetching) {
            this.inventoryModel.searchFirstThreeMonths();
        }

        if (this.propertyModel.fetched) {
            this.onPropertySync();
        } else if (!this.propertyModel.fetching) {
            this.propertyModel.fetch();
        }

    },

    onPropertySync: function() {
        this.propertyReady = true;
        if (!this.initialized) {
            this.startInit();
        }
    },

    onInventorySync: function() {

        this.removeInventoryLoadingStatus();

        if (this.inventoryModel.fetchedAll && (!this.inventoryModel.get('inventory') || !this.inventoryModel.get('inventory').roomTypeInventory || (this.inventoryModel.get('inventory').roomTypeInventory.length == 0))) {
            this.trigger('no-inventory');
            return;
            // We already fetched all possible inventory and there none... what to do?
        }

        if (this.initialized) {
            // if inventory has previously been initialized, add to current inventory
            this.inventoryManager.addInventory(this.inventoryModel.get('inventory'));
        } else {
            this.inventoryReady = true;
            this.startInit();
            // if not all inventory has been fetched and all rooms from the response are unavailable, fetch all inventory
            if (!this.inventoryModel.fetchedAll && (!_.find(this.getAvailableCheckInDates(), function(item) { return item && item.availability && item.availability > 0; } ))) {
                if (!this.inventoryModel.fetching) {
                    return this.inventoryModel.fetch();
                }
            }
        }
    },

    startInit: function() {
        if (this.propertyReady && this.inventoryReady) {
            this.inventoryManager = new InventoryManager(this.propertyModel.get('property'), this.inventoryModel.get('inventory'));
            this.initializeCalendars();
            this.initialized = true;
        }
    },

    initializeCalendars: function() {

        this.allowStandby = this.propertyModel.get('property').details.standbysEnabled;

        this.checkin = {};
        this.checkin.minStay;

        this.quantity = this.quantity || 1;
        this.guests = this.guests || 2;

        var availableCheckInDates = this.getAvailableCheckInDates();
        var availableCheckOutDates = this.getAvailableCheckOutDates();

        // Show month of first available inventory date or current date, whichever is later
        var activeMonth = new Date().normalize('month');
        var earliestMonth = availableCheckInDates.earliestDate ? availableCheckInDates.earliestDate.clone().normalize('month') : activeMonth;
        var latestMonth = availableCheckInDates.latestDate ? availableCheckInDates.latestDate.clone().normalize('month') : activeMonth;

        if (activeMonth < earliestMonth) {
            activeMonth = earliestMonth;
        } else if (activeMonth > latestMonth) {
            activeMonth = latestMonth;
        }

        this.checkinInput = this.el.getElement('.checkin-calendar-input');
        this.checkoutInput = this.el.getElement('.checkout-calendar-input');

        if (this.checkInDate && this.checkOutDate) {
            this.checkinInput.set('value', this.checkInDate.format(this.dateFormat));
            this.checkoutInput.set('value', this.checkOutDate.format(this.dateFormat));
        }

        if (Jetsetter.ab20381 == "B") {
            this.datesSelector = new BookingDatesSelector(this.checkinInput, this.checkoutInput, {
                checkinLegend: this._createLegendElement('Available dates'),
                checkoutLegend : this._createLegendElement('Available dates'),
                placeholder: {
                    checkin: 'Check In',
                    checkout: 'Check Out'
                },
                monthFormat: '%b',
                dateFormat: this.dateFormat,
                twoPane : true,
                altClass: 'popup-calendar-white inventory-enabled arrow-up',
                allowReset: false,
                autoOpenCheckout: true
            });
        } else {
            this.datesSelector = new BookingDatesSelector(this.checkinInput, this.checkoutInput, {
                placeholder: {
                    checkin: this.checkinInput.get('placeholder') || 'Check In',
                    checkout: this.checkoutInput.get('placeholder') || 'Check Out'
                },
                checkinLegend: this._createLegendElement('Available check in dates'),
                checkoutLegend : this._createLegendElement('Available check out dates'),
                monthFormat: '%b',
                dateFormat: this.dateFormat,
                altClass: 'test-default',
                autoOpenCheckout: true
            });
        }

        this.checkinInput.addEvent("keydown", function() {
            this.deselectCheckInDate();
        }.bind(this));

        this.checkoutInput.addEvent("keydown", function() {
            this.deselectCheckOutDate();
        }.bind(this));

        this.checkInCalendar = this.datesSelector.checkInCalendar;
        this.checkOutCalendar = this.datesSelector.checkOutCalendar;

        this.datesSelector.checkInCalendar.selectMonth((this.checkInDate && this.checkInDate.clone().normalize('month')) || activeMonth);
        this.datesSelector.checkOutCalendar.selectMonth((this.checkOutDate && this.checkOutDate.clone().normalize('month')) || activeMonth);

        this.bindCheckInCalendarEvents();
        this.bindCheckOutCalendarEvents();

        this.showAvailableCheckInDates(availableCheckInDates);
        this.showAvailableCheckOutDates(availableCheckOutDates);

        this.inventoryManager.addEvent('inventoryAdded', function() {
            this.showAvailableCheckInDates(this.getAvailableCheckInDates(), true);
            this.showAvailableCheckOutDates(this.getAvailableCheckOutDates(), true);
        }.bind(this));

        this.inventoryModel.bind('syncSuccess', function() {
            this.updateInventoryLoadStatus();
            this.inventoryManager.addInventory(this.inventoryModel.get('inventory'));
        }.bind(this));

        this.updateInventoryLoadStatus();

        this.initializedCalendars = true;

        this.trigger('calendarReady');
    },

    removeInventoryLoadingStatus: function() {
        this.el.removeClass('loading');
        this.el.getElement('.checkin-calendar-input').set('disabled', false);
        this.el.getElement('.checkout-calendar-input').set('disabled', false);0
    },

    updateInventoryLoadStatus: function() {
        if (!this.inventoryModel.fetchedAll) {
            this.setMonthsAfterLoading(this.inventoryModel.endInventory);
            this.setMonthsBeforeLoading(this.inventoryModel.startInventory);
        } else {
            this.clearMonthsLoading();
        }
    },

    _attachTooltipEvent: function (calendarEl, isCheckOutCalendar) {

        calendarEl.addEvents({
            'mouseover:relay(td)': function (event, dayEl) {

                var dayInventory = dayEl.retrieve('inventory');
                if (!dayInventory) {
                    return false;
                }

                if (!dayInventory.price) {
                    return false;
                }

                var tooltip = calendarEl.retrieve('tooltip');
                if (!tooltip) {
                    // Note that the tooltip needs to be in a container that doesn't
                    // get destroyed
                    tooltip = new Tooltip(calendarEl.getParent(), {
                        'className': 'price-tooltip tenor'
                    });
                    calendarEl.store('tooltip', tooltip);
                }


                var minStay = dayInventory.minStay;
                var minStayHtml = '';
                if (minStay > 1) {
                    minStayHtml = '<div class="separator"></div><div class="min-stay">Minimum stay:<br>' + minStay + ' nights</div>';
                }

                if (dayEl.hasClass('inactive-select')) {
                    return;
                    //tooltip.show('Check in' + minStayHtml, dayEl, 500);
                } else {
                    if (isCheckOutCalendar) {
                        minStayHtml = '';
                    }
                    tooltip.show('<div class="price">' + dayInventory.price.formatCurrency() + '</div>' + minStayHtml, dayEl, 0);
                    Jetsetter.promoDiscount && Jetsetter.promoDiscount.fireEvent('update', 'tooltip');
                }

            },
            'mouseout': function (event) {
                var tooltip = calendarEl.retrieve('tooltip');
                if (tooltip) {
                    tooltip.hide();
                }
            }
        });
    },

    _createLegendElement: function (availableLabel) {

        var legendHtml = '<li class="available"><span class="icon"></span> ' + availableLabel + '</li>';

        if (this.allowStandby) {
            legendHtml += '<li class="standby"><span class="icon"></span> Standby</li>';
        }

        return new Element('ul', {
            'class': 'legend',
            'html': legendHtml
        });
    },

    _isDayAvailable: function (dayEl) {
        return dayEl.hasClass('available') || (this.allowStandby && dayEl.hasClass('standby'));
    },

    _isDayOnStandby: function (dayEl) {
        return dayEl.hasClass('standby');
    },

    _setAvailabilityForDay: function (dayEl, inventory) {
        dayEl.removeClass('min-stay');
        // if inventory isn't set, the date is outside the inventory range
        if (inventory && inventory.isAvailable) {
            this._setDayToAvailable(dayEl, inventory);
        } else {
            this._setDayToUnavailable(dayEl, inventory, arguments[2]);
        }
    },

    _setDayToAvailable: function (dayEl, inventory) {
        dayEl.addClass('available').store('inventory', inventory);
        if (this.allowStandby) {
            dayEl.removeClass('standby');
        }
    },

    _setDayToUnavailable: function (dayEl, inventory) {
        dayEl.removeClass('available');
        if (this.allowStandby) {
            if (inventory) {
                dayEl.store('inventory', inventory).addClass('standby');
            } else {
                if (!dayEl.hasClass('inactive-select')) {
                    dayEl.eliminate('inventory');
                }

                dayEl.removeClass('standby')
            }
        }

        if(arguments[2]){
            switch(arguments[2]){
                case 'min-stay':
                    var curText = dayEl.get('text');
                    dayEl.empty();
                    new Element('div',{
                        'class': 'indicator',
                        'html': curText
                    }).inject(dayEl);
                    dayEl.addClass('min-stay');
            }
        }
    },

    setOccupancy: function(rooms, guests) {
        this.quantity = rooms;
        this.guests = guests;
        this.showAvailableCheckInDates(this.getAvailableCheckInDates());
        this.showAvailableCheckOutDates(this.getAvailableCheckOutDates());
    },

    bindCheckInCalendarEvents: function() {
        this.checkInCalendar.addEvents({

            'select': function (selectedDate, selectedEl) {

                if (Jetsetter.user.isAnonymous && Jetsetter.user.isPriceHidden) {
                    this.checkInCalendar.deselectDate();
                    Jetsetter.registrationModal.show();
                    return false;
                }

                this.trigger('checkInSelectStart', [selectedDate, selectedEl]);

                var tooltip = $(this.checkInCalendar).retrieve('tooltip');
                if (tooltip) {
                    tooltip.hide();
                }

                setTimeout(function() {
                    var checkOutDate = this.getCheckOutDate();
                    var checkOutDates = this.getAvailableCheckOutDates();
                    this.showAvailableCheckOutDates(checkOutDates);
                    if (!checkOutDate || !checkOutDates[checkOutDate.toBookingDateString()]) {
                        this.deselectCheckOutDate();
                    }
                }.bind(this), 100);

                this.trigger('checkInDateSelected');
                this.trigger('selectionMade');

            }.bind(this),
            'monthChange': function (activeMonth) {
                this.checkOutCalendar.selectMonth(activeMonth);

                if (!this.inventoryModel.fetchedAll) {
                    this.inventoryModel.searchRestForwards();
                }

                this.showAvailableCheckInDates(this.getAvailableCheckInDates());
                this.trigger('monthChange');
                this.trigger('checkInMonthChange');
            }.bind(this),
            'dateClick' : function(event, td) {
                if (this._isDayAvailable(td)) {
                    this.trigger('checkInDateClick');
                    //this.deselectCheckOutDate();
                }
            }.bind(this),

            'calendarOpen': function() {
                if (!this.inventoryModel.fetchedAll) {
                    this.inventoryModel.fetch();
                }
                this.trigger('checkInCalendarOpen');
            }.bind(this)
        });

        if (Jetsetter.user.isAdmin) {
            this._attachTooltipEvent(this.checkInCalendar.calendarEl);
        }
    },

    bindCheckOutCalendarEvents: function () {
        this.checkOutCalendar.addEvents({
            'select': function (selectedDate, selectedEl) {

                this.trigger('checkOutSelectStart', [selectedDate, selectedEl]);

                var tooltip = $(this.checkOutCalendar).retrieve('tooltip');
                if (tooltip) {
                    tooltip.hide();
                }

                if (this.getCheckInDate()) {
                    this.trigger('showPrices');
                }

                this.trigger('checkOutDateSelected');
                this.trigger('selectionMade');

            }.bind(this),
            'monthChange': function (activeMonth) {
                this.trigger('checkOutMonthChange');
                this.checkInCalendar.selectMonth(activeMonth);
                this.showAvailableCheckOutDates();

                if (!this.inventoryModel.fetchedAll) {
                    this.inventoryModel.searchRestForwards();
                }

                // Reset the flag position if months are switched before the flag is animated in
                if (this.checkInIndicatorEl) {
                    this.checkInFlag.setPosition();
                }

            }.bind(this),
            'dateClick': function(event, td) {
                if (this._isDayAvailable(td)) {
                    this.trigger('checkOutDateClick');
                    this.showAvailableCheckOutDates(this.getAvailableCheckOutDates());
                }
            }.bind(this),

            'calendarOpen': function() {
                if (!this.inventoryModel.fetchedAll) {
                    this.inventoryModel.fetch();
                }
                this.trigger('checkOutCalendarOpen');
            }.bind(this)

        });

        if (Jetsetter.user.isAdmin) {
            this._attachTooltipEvent(this.checkOutCalendar.calendarEl);
        }
    },

    deselectCheckInDate: function () {
        this.checkInCalendar.deselectDate();

        this.showAvailableCheckOutDates();
        this.trigger('checkInDeselect');
    },

    deselectCheckOutDate: function () {
        this.checkOutCalendar.reset();
        this.showAvailableCheckOutDates();
        this.trigger('checkOutDeselect');
    },

    getCheckInDate: function () {
        return this.checkInCalendar && this.checkInCalendar.getSelectedDate() || null;
    },

    setCheckInDate: function (checkInDate) {
        var dayEl = this.checkInCalendar.getElementFromBookingDate(checkInDate);
        if (!dayEl) {
            return;
        }
        this.checkInCalendar.selectDate(dayEl);
        this.checkinInput && this.checkinInput.set('value', checkInDate.format(this.dateFormat));
    },

    isCheckInDateOnStandby: function () {
        var checkInDate = null;
        if (this.checkInCalendar && (checkInDate = this.checkInCalendar.getSelectedDate())) {
            var dayEl = this.checkInCalendar.getElementFromBookingDate(checkInDate);
            return this._isDayOnStandby(dayEl);
        }

        return false;
    },

    getCheckOutDate: function () {
        return this.checkOutCalendar && this.checkOutCalendar.getSelectedDate() || null;
    },

    setCheckOutDate: function (checkOutDate) {
        var dayEl = this.checkOutCalendar.getElementFromBookingDate(checkOutDate);
        if (!dayEl) {
            return;
        }
        this.checkOutCalendar.selectDate(dayEl);
        this.checkoutInput && this.checkoutInput.set('value', checkOutDate.format(this.dateFormat));
    },

    isCheckOutDateOnStandby: function () {
        var checkOutDate = null;
        if (this.checkOutCalendar && (checkOutDate = this.checkOutCalendar.getSelectedDate())) {
            var dayEl = this.checkOutCalendar.getElementFromBookingDate(checkOutDate);
            return this._isDayOnStandby(dayEl);
        }

        return false;
    },

    getAvailableCheckInDates: function () {
        this.availableCheckInDates = this.inventoryManager.getAvailableCheckInDates(null, this.quantity, this.guests);

        if (!this.allowStandby) {
            this.trimAvailableDates(this.availableCheckInDates);
        }

        return this.availableCheckInDates;
    },

    getAvailableCheckOutDates: function () {
        this.availableCheckOutDates = this.inventoryManager.getAvailableCheckOutDates(this.getCheckInDate(), this.quantity, this.guests);

        if (!this.allowStandby) {
            this.trimAvailableDates(this.availableCheckOutDates);
        }

        return this.availableCheckOutDates;
    },

    _selectDates: function (checkInDate, checkOutDate) {
        var checkInDayEl = this.checkInCalendar.getElementFromBookingDate(checkInDate);
        var checkOutDayEl = this.checkOutCalendar.getElementFromBookingDate(checkOutDate);

        this.checkinInput.set('value', checkInDate.format(this.dateFormat));
        this.checkoutInput.set('value', checkOutDate.format(this.dateFormat));

        if (this._isDayAvailable(checkInDayEl) && this._isDayAvailable(checkOutDayEl)) {
            this.checkInCalendar.selectDate(checkInDayEl);

            this.checkOutCalendar.selectDate(checkOutDayEl);

            //this.trigger('checkOutSelectStart', [checkOutDate, checkOutDayEl]);
        }
    },

    _dateToString: function(date) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        return year + "-" + (month[1] ? month : "0" + month) + "-" + (day[1] ? day : "0" + day);
    },

    showAvailableCheckInDates: function (checkInDates, forceUpdate) {
        checkInDates = checkInDates || this.getAvailableCheckInDates();
        if (checkInDates.earliestDate && checkInDates.latestDate) {
            this.datesSelector.checkInCalendar.updateControls(checkInDates.earliestDate, checkInDates.latestDate, forceUpdate);
        }

        $(this.datesSelector.checkInCalendar).getElements('td').each(function (dayEl) {
            var bookingDate = dayEl.retrieve('bookingDate');
            var dayInventory = checkInDates[this._dateToString(bookingDate)];
            this._setAvailabilityForDay(dayEl, dayInventory);
        }.bind(this));
    },

    showAvailableCheckOutDates: function (checkOutDates, forceUpdate) {
        var checkInDate = this.getCheckInDate(),
            consec = false,
            minStay = 0;

        checkOutDates = checkOutDates || this.getAvailableCheckOutDates()
        if (checkOutDates.earliestDate && checkOutDates.latestDate) {
            this.datesSelector.checkOutCalendar.updateControls(checkOutDates.earliestDate, checkOutDates.latestDate, forceUpdate);
        }

        if(checkInDate){
            if(this.datesSelector.checkInCalendar.getElementFromBookingDate(checkInDate).retrieve('inventory')){
                minStay = this.datesSelector.checkInCalendar.getElementFromBookingDate(checkInDate).retrieve('inventory').minStay;
                this.checkin.minStay = minStay;
            }
            else{
                minStay = this.checkin.minStay;
            }
        }

        $(this.datesSelector.checkOutCalendar).getElements('td').each(function (dayEl) {
            var bookingDate = dayEl.retrieve('bookingDate');
            var dayInventory = checkOutDates[this._dateToString(bookingDate)];

            if(checkInDate && checkInDate.diff(bookingDate) > 0){
                consec = true;
            }

            if(!dayInventory && consec && checkInDate && checkInDate.diff(bookingDate) > 0 && checkInDate.diff(bookingDate) < minStay){
                this._setAvailabilityForDay(dayEl, dayInventory, 'min-stay');
            }
            else{
                this._setAvailabilityForDay(dayEl, dayInventory);
                consec = false;
            }
        }.bind(this));
    },

    trimAvailableDates: function (availableDates) {
        var availableKeys = Object.keys(availableDates).sort();

        var trim = function () {
            for (var i=availableKeys.length-1; i>0; i--) {
                var key = availableKeys[i];
                if (availableDates[key] && availableDates[key].isAvailable) {
                    break;
                } else {
                    availableKeys.pop();
                    delete availableDates[key];
                }
            }
        };

        // Trim rear
        trim();

        // Trim front
        availableKeys.reverse();
        trim();

        // Reset earliest/latest reverse sorted dates
        availableDates.earliestDate = availableKeys[availableKeys.length - 1].toDateObject();
        availableDates.latestDate = availableKeys[0].toDateObject();

        return availableDates;
    },

    setMonthsAfterLoading: function(month) {
        return this.datesSelector.setMonthsAfterLoading(month);
    },

    setMonthsBeforeLoading: function(month) {
        var today = new Date();
        if (today.getFullYear() == month.getFullYear() && today.getMonth() == month.getMonth()) {
            // if the month passed in is the current month, don't set the loading on the dates selector as there is nothing to load
            return this.datesSelector.setMonthsBeforeLoading(null);
        }
        return this.datesSelector.setMonthsBeforeLoading(month);
    },

    clearMonthsLoading: function() {
        return this.datesSelector.clearMonthsLoading();
    },

    showCheckInCalendar: function() {
        this.checkInCalendar.showCalendar();
    },

    showCheckOutCalendar: function() {
        this.checkOutCalendar.showCalendar();
    }
});
Jetsetter.Controllers = Jetsetter.Controllers || {};

/**
 * Fire a specific callback when a given element has been scrolled into view
 * @type {*|void}
 */
Jetsetter.Controllers.ScrollTracking = Composer.Controller.extend({
    init: function() {
        this.onReach = _.once(this.onReach).bind(this);

        this.check = _.throttle(this.check, 200).bind(this);

        window.addEvent('scroll', this.check);
        window.addEvent('resize', this.check);
    },

    check: function() {
        if (this.isScrolledIntoView()) {
            this.onReach();
        }
    },

    isScrolledIntoView: function() {
        var offsets = this.el.getOffsets();
        var windowHeight = window.getHeight();
        var windowScroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if ((windowHeight + windowScroll) >= offsets.y) {
            return true;
        }
        return false;
    },

    /* function called when the scroll-to area has been reached */
    onReach: function() {
        if (this.callback) {
            this.callback();
        }
        window.removeEvent('scroll', this.check);
        window.removeEvent('resize', this.check);
    }
});
Jetsetter.Controllers = Jetsetter.Controllers || {};

/**
 * Window shade is an element that is shown hidden based on whether a user has scrolled past a certain point on the screen
 * @type {*|void}
 */
Jetsetter.Controllers.WindowShade = Composer.Controller.extend({
    init: function() {

        // passed in:
        // - scrollPoint : coordinate boundary to show/hide window shade at
        // - onShow : optional callback to call when window shade is shown
        // - onHide : optional callback to call when window shade is hidden

        if (!this.scrollPoint) {
            return Jetsetter.log("no scroll point defined. remember to pass one into the window shade controller!");
        }

        this.visible = false;
//        this.showFx = new Fx.Tween(this.el, {
//            property: 'height'
//        });
        this.showFx = new Fx.Slide(this.el, {
            hideOverflow: false
        }).hide();
        this.showFx.wrapper.setStyle('z-index', this.el.getStyle('z-index'));

        this.check = _.throttle(this.check, 50).bind(this);

        window && window.addEvent('scroll', this.check);
        window && window.addEvent('resize', this.check);

//        this.el.hide();
        this.check();
    },

    isScrolledIntoView: function() {
        var offsetY = this.scrollPoint;
        var windowScroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (windowScroll >= offsetY) {
            return true;
        }
        return false;
    },

    show: function() {
        if (this.showFx.isRunning()) {
            this.showFx.cancel();
        }
        //this.el.setStyle('opacity', 0).show();
        this.showFx.slideIn().chain(function() {
            this.showFx.wrapper.setStyle('overflow', 'visible');
            this.showFx.element.setStyle('overflow', 'visible');
        }.bind(this));
        this.visible = true;
        this.onShow && this.onShow();
    },

    hide: function() {
        if (this.showFx.isRunning()) {
            this.showFx.cancel();
        }
        this.showFx.wrapper.setStyle('overflow', 'hidden');
        this.showFx.element.setStyle('overflow', 'hidden');
        this.showFx.slideOut().chain(function() {
        }.bind(this));
        this.visible = false;
        this.onHide && this.onHide();
    },

    check: function() {
        if (this.isScrolledIntoView()) {
            if (!this.visible) {
                this.show();
            }
        } else {
            if (this.visible) {
                this.hide();
            }
        }
    }


});

Jetsetter.Controllers = Jetsetter.Controllers || {};

Jetsetter.Controllers.ProductPricingArea = Composer.Controller.extend({

    events: {
        'click .book'   : 'onBookClick'
    },

    /**
     * Pass in:
     * - el
     * - pricingModel
     */

    init: function() {
        this.propertyPricingModel.bind('syncStart', this.onSyncStart.bind(this));
        this.propertyPricingModel.bind('syncSuccess', this.render.bind(this));
        this.propertyPricingModel.bind('syncFailure', this.render.bind(this));
        this.propertyInventoryModel.bind('syncSuccess', this.onInventory.bind(this));
        this.propertyInventoryModel.bind('syncFailure', this.onInventory.bind(this));
    },

    /**
     * when book is clicked for any rate
     * @param event
     * @param el
     * @returns {boolean}
     */
    onBookClick: function(event, el) {
        document.body.fireEvent('request-tab-switch', ['#overview-tab']);
        var $roomSelector = $('room-selector');
        if ($roomSelector) {
            new Fx.Scroll(window).toElementCenter($roomSelector);
            var checkinInput = $roomSelector.getElement('.checkin-calendar-input');
            var checkinValue = checkinInput.get("value");
            if (!checkinValue || (checkinValue.test(/check in/i))) {
                $roomSelector.addClass('focused');
                checkinInput.focus();
            }
        }
    },

    onSyncStart: function() {
        this.el.addClass('pricing-loading');
    },

    onInventory: function(){
        if (this.propertyInventoryModel.fetchedAll) {
            if (!this.propertyInventoryModel.get('inventory') || !this.propertyInventoryModel.get('inventory').roomTypeInventory || (this.propertyInventoryModel.get('inventory').roomTypeInventory.length == 0)) {
                return this.el.addClass('no-inventory');
            }
        }
        this.el.removeClass('no-inventory');
    },

    render: function() {

        this.el.removeClass('pricing-loading');

        if (!this.propertyPricingModel.get('pricing') || this.propertyPricingModel.get('pricing').length === 0) {
            this.el.addClass('no-inventory');
            return this;
        }

        this.el.removeClass('dateless');

        //var pricing = this.inventoryManager.getLowestPricedPricingObject();
        var pricing = this.propertyPricingModel.getLowestPricedRatePlan(this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'));

        if (pricing) { // this should always be populated after the initial pageload. only initially will it be null
            //pricingEl.show();
            this.el.getElement('.from').hide();

            this.el.getElement('.best-rate .amount').set('html', pricing.averageNightlyRate.formatCurrency());

            var nights = pricing.nightlyRates.length;
            var marketRate = pricing.chargesSummary.marketRate;
            var avgMarketRate = Math.ceil(marketRate / nights); // Rounding up to the whole dollar value, not taking into account cents
            var currencySymbol = pricing.chargesSummary.currency.symbol;

            if (avgMarketRate && (avgMarketRate > pricing.averageNightlyRate)) {
                this.el.getElement('.market-rate').set('html', currencySymbol + "" + avgMarketRate).setStyle('display', 'inline-block'); // using .show() would set display to 'block'
            } else {
                this.el.getElement('.market-rate').hide();
            }

//            if (Jetsetter.property.details.jetsetterExclusive) {
//                compareEl.addClass('exclusive').removeClass('other-price');
//                compareEl.set('html', 'Only on Jetsetter').show();
//            } else if (!avgMarketRate || (pricing.averageNightlyRate >= avgMarketRate)) {
//                compareEl.addClass('other-price').removeClass('exclusive');
//                compareEl.set('html', '').hide();
//            } else {
//                compareEl.addClass('other-price').removeClass('exclusive');
//
//                var str = 'Hotel website'; //Jetsetter.property.calendarType === 'package' ? 'Actual Value' : 'Hotel website';
//
//                compareEl.set('html', str + ' <del>' + avgMarketRate.formatCurrency() + '/night</del>').show();
//            }
            this.el.getElement('.sub-text').set('html', 'Lowest available rate for this sale');
        }

        return this;
    }

});

Jetsetter.Controllers = Jetsetter.Controllers || {};

Jetsetter.Controllers.ShareCenter = Composer.Controller.extend({

    events: {
        'click .facebook-connect'   : 'onFacebookClick'
    },

    /**
     * Pass in:
     * - el
     */

    init: function() {
        var template = $('share-center-template');
        if (template) {
            this.el.adopt(template.clone());
        } else {
            Jetsetter.log("could not find share center template when initializing share center controller");
        }

        if (window.gapi) {
            this.loadGooglePlusButtons();
        } else {
            document.body.addEvent('google-api-loaded', this.loadGooglePlusButtons.bind(this));
        }

        // initialize add-to-favs functionality
        this.el.getElements('.add-to-favs').each(function($el) {
            $el.store('add-favorite-instance', new AddFavorite($el));
        });
    },

    loadGooglePlusButtons: function() {
        // initialize google share icon
        if (window.gapi) {
            this.el.getElements('.g-plusone').each(function($el) {
                window.gapi.plusone.render($el);
            });
        } else {
            Jetsetter.log("can not initialize google plus sharing because window.gapi has not been initialized");
        }
    },

    // show share icons with the given index and hide all others. This applies to facebook share and pinterest icons
    calibrateIcons: function(index) {

        // show the correct facebook/pinterest buttons for the specific image being selected
        this.el.getElements('.pinterest-pin').hide();
        this.el.getElement('.pinterest-pin-'+index).show();

        this.el.getElements('.facebook-connect').hide();
        this.el.getElement('.facebook-connect-'+index).show();
    },

    onFacebookClick: function(event) {
        event.stop();
        var el = event.target;
        _gaq.push(['_trackEvent', 'PDP', 'FBConnect', 'Click']);

        var image = el.get('data-image-path') ? Jetsetter.JetsetUtil.getDynamicCropUrl(el.get('data-image-path'), 1200, 800) : Jetsetter.property.propertyImage;

        var url = "http://" + window.location.host + Jetsetter.property.url + "?osocid=fbshare&facebook=1&via=fbshare&plt=fbshare&source=fbshare&nm=fbshare";

        FB.ui({
            'method': 'feed',
            'name': Jetsetter.property.propertyName,
            'description': Jetsetter.property.description,
            'link': url,
            'actions':[
                {
                    'name': 'See more',
                    'link': url
                }
            ],
            //'picture': 'http:' + Jetsetter.CDN_HOST + '/static/' + image
            'picture': 'http://cdnx.jetcdn.com/static/' + image // For testing
        }, function (response) {
            if (response && !response.error_code) {
                Jetsetter.log('Posting completed.');
            } else {
                Jetsetter.log('Error while posting.');
            }
        });
    }

});

Jetsetter.RoomSelector = Jetsetter.RoomSelector || {};
Jetsetter.RoomSelector.Controllers = Jetsetter.RoomSelector.Controllers || {};

/**
 * View of TA meta providers
 */

(function() {

    var metaTemplate = Templates['./views/partials/property2/meta-rate.ejs'];

    Jetsetter.RoomSelector.Controllers.MetaList = Composer.Controller.extend({

        events: {
            'click .partner-rate td'      : 'onGoClick',
            'click .see-all a'            : 'onSeeAll',
            'mouseenter .disclaimer'      : 'onDisclaimerHover',
            'mouseleave .disclaimer'      : 'onDisclaimerHoverOut'
        },

        /**
         * Pass in:
         * - el
         * - pricingModel
         * - searchParametersModel
         */

        init: function() {

            this.metaContainer = this.el.getElement('.meta-container');

            var onSync = this.onSync.bind(this);

            this.tripAdvisorMetaModel.bind('syncStart', this.onSyncStart.bind(this));
            this.tripAdvisorMetaModel.bind('syncSuccess', onSync);
            this.tripAdvisorMetaModel.bind('syncFailure', onSync);
            this.tripAdvisorMetaModel.bind('syncComplete', onSync);

            this.propertyPricingModel.bind('syncSuccess', onSync);
            this.propertyPricingModel.bind('syncFailure', onSync);

        },

        onDisclaimerHover : function(event, element) {
            var tooltip = element.retrieve('tooltip');
            if (!tooltip) {
                tooltip = new Tooltip(this.attachTo, {
                    'className': 'meta-disclaimer-tooltip tenor'
                });
                element.store('tooltip', tooltip);
            }

            var text = 'Prices above are provided by partners for one room and do not include all taxes and fees. Please see our partners for full details.';
            tooltip.show(text, element, 150);
        },

        onDisclaimerHoverOut: function(event, element) {
            var tooltip = element.retrieve('tooltip');
            tooltip && tooltip.hide();
        },

        onGoClick: function(event, el) {
            event && event.stop();

            var url = el.getParent('tr').get('data-url');

            omniture.trackClickEvent('event22', ['eVar25', 'eVar24']);

            // height=735,width=1000
            var windowOptions = Browser.firefox || (Jetsetter.ab20381 == 'B' && Browser.chrome) ? 'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,width=1000,height=735' : '';
            window.open(url, '', windowOptions);
        },

        onSyncStart: function() {
            this.trackedMeta = false;
            this.metaContainer.empty();
        },

        onSync: function() {

            this.el.removeClass('meta-loading');

            // don't do anything unless jetsetter pricing has already been fetched
            if (this.propertyPricingModel.fetched) {
                if (this.tripAdvisorMetaModel.fetched) {
                    // if jetsetter pricing has been fetched but meta has not yet come back render some kind of loading message
                    this.el.removeClass('meta-loading');
                    if (_.size(this.tripAdvisorMetaModel.getOffers()) == 0) {
                        this.el.addClass('meta-unavailable');
                    }
                    this.renderMeta();
                } else if (this.tripAdvisorMetaModel.fetchedPart && (_.size(this.tripAdvisorMetaModel.getOffers()) > 0)) {
                    this.renderMeta();
                    this.el.removeClass('meta-loading');
                } else {
                    this.el.addClass('meta-loading');
                }

                // if meta has been completely fetched then log it
                if (this.tripAdvisorMetaModel.fetched && !this.trackedMeta) {
                    this.logMetaResults();
                }

            }
        },

        /**
         * the following logging would ideally be in its own controller, but since it is only temporary for the meta test
         * then this is a fine place for it for now
         */
        logMetaResults: function() {
            var jetsetterRate = this.propertyPricingModel.getLowestPricedRatePlan(this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'), true);
            if (jetsetterRate) {
                var jetsetterRoomType = this.propertyPricingModel.getProductById(jetsetterRate.roomStay.roomTypeId);
            }
            var partnerRates = this.tripAdvisorMetaModel.getOffers();

            var partnerData = {};

            var lowestPartnerAverageRate = Infinity;
            var lowestPartnerAverageRateName = 'none';
            var lowestPartnerTotalRate = Infinity;
            var lowestPartnerTotalRateName = 'none';

            for(var i =0; i <= 3; i++) {
                var rate = partnerRates[i];

                var room = rate && rate.room[0];

                var prepend = 'partner_'+i+'_';

                if (room) {
                    partnerData[prepend+'partner_name'] = rate.providerInfo.display_name;
                    partnerData[prepend+'partner_id'] = rate.provider_info_key;
                    partnerData[prepend+'average_nightly_price'] = room.avg_nightly_price;
                    partnerData[prepend+'average_taxes_and_fees'] = room.avg_taxes_fees;
                    partnerData[prepend+'room_name'] = room.desc;
                    partnerData[prepend+'total_price'] = room.total_price;

                    if (room.avg_nightly_price < lowestPartnerAverageRate) {
                        lowestPartnerAverageRate = room.avg_nightly_price;
                        lowestPartnerAverageRateName = rate.providerInfo.display_name;
                    }
                    if (room.total_price < lowestPartnerTotalRate) {
                        lowestPartnerTotalRate = room.total_price;
                        lowestPartnerTotalRateName = rate.providerInfo.display_name;
                    }
                } else {
                    partnerData[prepend+'partner_name'] = 'unavailable',
                    partnerData[prepend+'partner_id'] = 'unavailable',
                    partnerData[prepend+'average_nightly_price'] = 'unavailable';
                    partnerData[prepend+'average_taxes_and_fees'] = 'unavailable';
                    partnerData[prepend+'room_name'] = 'unavailable';
                    partnerData[prepend+'total_price'] = 'unavailable';
                }
            }

            var has_js_rate = jetsetterRate ? true : false;
            var has_partner_rates = partnerRates.length && partnerRates.length > 0;


            var checkInDate = moment(this.searchParametersModel.get('checkInDate'));
            var checkOutDate = moment(this.searchParametersModel.get('checkOutDate'));
            var nights = checkOutDate.diff(checkInDate, 'days');

            var mbl_average = null;
            var mbl_total = null;
            if (has_js_rate && has_partner_rates) {
                var jsTotal = jetsetterRate.chargesSummary.total;
                if (jsTotal > lowestPartnerTotalRate) {
                    mbl_total = 'lose';
                } else if (jsTotal < lowestPartnerTotalRate) {
                    mbl_total = 'beat';
                } else {
                    mbl_total = 'meet';
                }

                var jsAvg = jetsetterRate.averageNightlyRate;
                if (jsAvg > lowestPartnerAverageRate) {
                    mbl_average = 'lose';
                } else if (jsAvg < lowestPartnerAverageRate) {
                    mbl_average = 'win';
                } else {
                    mbl_average = 'meet';
                }
            } else {
                mbl_average = 'missing-rates';
                mbl_total = 'missing-rates';
            }



            // log meta when everything has been completely fetched
            new Request.JSON({
                url    : '/ta-meta-log',
                data   : {
                    data: JSON.stringify(_.extend({
                        'date'                    : moment().format("YYYY-MM-DD HH:mm:ss"),
                        'userGuid'                : Jetsetter.user && Jetsetter.user.guid ? Jetsetter.user.guid : 'unknown',
                        'propertyId'              : this.propertyModel.get('property').propertyId || this.propertyModel.get('property').id,
                        'propertyName'            : this.propertyModel.get('property').propertyName || this.propertyModel.get('property').name,
                        'propertyChannel'         : this.propertyModel.get('property').channel,
                        'propertyTaId'            : this.propertyModel.get('property').details.taId,
                        'checkInDate'             : moment(this.searchParametersModel.get('checkInDate')).format("YYYY-MM-DD"),
                        'checkOutDate'            : moment(this.searchParametersModel.get('checkOutDate')).format("YYYY-MM-DD"),
                        'numOfRooms'              : this.searchParametersModel.get('numOfRooms'),
                        'numOfGuests'             : this.searchParametersModel.get('numOfGuests'),
                        'nights'                  : nights,
                        'js_nightly'              : jetsetterRate ? jetsetterRate.averageNightlyRate : 'unavailable',
                        'js_room_name'            : jetsetterRoomType ? jetsetterRoomType.roomType.name : 'unavailable',
                        'js_subtotal'             : jetsetterRate ? jetsetterRate.chargesSummary.subtotal      : 'unavailable',
                        'js_subtotalWithDiscount' : jetsetterRate ? jetsetterRate.chargesSummary.subtotal - (jetsetterRate.chargesSummary.discount || 0) : 'unavailable',
                        'js_taxesAndFees'         : jetsetterRate ? jetsetterRate.chargesSummary.taxesAndFees  : 'unavailable',
                        'js_total'                : jetsetterRate ? jetsetterRate.chargesSummary.total         : 'unavailable',
                        'has_js_rate'             : has_js_rate,
                        'has_partner_rates'       : has_partner_rates,
                        'mbl_average'             : mbl_average,
                        'mbl_total'               : mbl_total,
                        'lowest_avg_partner_name' : lowestPartnerAverageRateName,
                        'lowest_total_partner_name': lowestPartnerTotalRateName,
                        'lowest_avg_partner_rate' : lowestPartnerAverageRate,
                        'lowest_total_partner_rate': lowestPartnerTotalRate,
                        'reached_polling_limit'   : this.tripAdvisorMetaModel.reachedPollingLimit
                    }, partnerData))
                }
            }).post();

            this.trackedMeta = true;
        },

        render: function() {
            this.el.removeClass('rates-unavailable');
            this.el.removeClass('rates-available');

            if (this.tripAdvisorMetaModel.fetching) {
                this.el.addClass('meta-loading');
            } else if (this.tripAdvisorMetaModel.fetched) {
                this.el.removeClass('meta-loading');
            }

            if (this.propertyPricingModel.fetching) {
                this.el.addClass('rates-loading');
            } else if (this.propertyPricingModel.fetched) {
                this.el.removeClass('rates-loading');
            }
            return this;
        },

        getMetaHeadingsRow: function() {
            return '<tr class="headings tenor">' +
                '<th class="meta-site"><!-- intentionally blank --></th>' +
                '<th class="meta-rate">Price/night</th>' +
                '<th class="meta-total">Total</th>' +
                '<th class="meta-cta"><!-- this space intentially left blank --></th>' +
                '</tr>';
        },

        onSeeAll: function(e) {
            e && e.preventDefault();
            omniture.trackClickWithSiteSection('see all meta click');
            this.metaContainer.getElement('tr.see-all').dispose();
            this.el.addClass('all-meta-visible');
            this.allFx.slideIn().chain(function() {
                this.element.setStyle('overflow', 'visible');
                this.wrapper.setStyle('overflow', 'visible');
                this.wrapper.setStyle('height', 'auto');
            });
        },

        /**
         * get the 'see all' link which should appear after the first 10 results (if there are > 10 total)
         */
        getSeeAllRow: function() {
            return '<tr class="see-all">' +
                '<td class="disclaimer-td">' +
                    '<div class="inner">' +
                        '<span class="disclaimer">*Disclaimer</span>' +
                    '</div>' +
                '</td>' +
                '<td colspan="4">' +
                    '<div class="inner">' +
                        '<a href="#">See all booking options</a>' +
                    '</div>' +
                '</td>' +
            '</tr>';
        },

        getDisclaimerRow: function() {
            return '<tr class="disclaimer-row">' +
                '<td colspan="5" class="disclaimer-td">' +
                    '<div class="inner">' +
                    '   <span class="disclaimer">*Disclaimer</span>' +
                    '</div>' +
                '</td>' +
                '</tr>'
        },

        renderMeta: function() {

            var numRates = 0;
            var html = '';
            var offers = this.tripAdvisorMetaModel.getOffers();

            var breakAt = 4;

            _.each(offers, function(metaOffer) {
                if(numRates === 0) {
                    html += '<table cellpadding="0" cellspacing="0" border="0" class="meta-table meta-vendor-rates tenor">'

                    // only show the headings row if there was no availability in jetsetter pricing
                    if (!this.propertyPricingModel.get('pricing')) {
                        html += this.getMetaHeadingsRow();
                    }
                }

                if (!this.el.hasClass('all-meta-visible') && (numRates == breakAt)) {
                    html += this.getSeeAllRow();
                    html += '</table><table cellpadding="0" cellspacing="0" border="0" class="meta-table meta-vendor-rates remaining tenor">';
                }

                numRates++;

                html += metaTemplate(metaOffer);
            }.bind(this));

            if (numRates > 0) {

                // add row with disclaimer message
                html = html + this.getDisclaimerRow();

                this.metaContainer.set('html', html + '</table>');

                var remainingTable = this.el.getElement('.meta-table.remaining');
                if (remainingTable) {
                    this.allFx = new Fx.Slide(remainingTable).hide();
                }
            } else {
                this.metaContainer.set('html', '');
            }

            this.trigger('rendered');
            return this;
        }

    });
})();
Jetsetter.RoomSelector = Jetsetter.RoomSelector || {};
Jetsetter.RoomSelector.Controllers = Jetsetter.RoomSelector.Controllers || {};
(function() {

    var roomTemplate = Templates["./views/partials/property2/room.ejs"];

    Jetsetter.RoomSelector.Controllers.RoomList = Composer.Controller.extend({

        events: {
            'click .cta-container button'   : 'onBookClick',
            'click .see-more a'             : 'onSeeMore',
            'click .see-all a'              : 'onSeeAll',
            'click .more-description'       : 'onClickMoreDescription',
            'mouseenter .hold'              : 'onHoldHover',
            'mouseleave .hold'              : 'onHoldHoverOut'
        },

        /**
         * Pass in:
         * - el
         * - pricingModel
         * - searchParametersModel
         */

        init: function() {

            this.templateOptions = this.templateOptions || {};

            this.animate = (typeof this.animate == 'undefined') ? true : this.animate;

            this.dynamicCropper = new DynamicCropperLinkGenerator();
            this.cdnContext = Jetsetter.CDN_HOST.replace(/^\/\//, '');

            this.ratesTableContainer = this.el.getElement('.table-container');

            this.propertyPricingModel.bind('syncStart', this.onSyncStart.bind(this));
            this.propertyPricingModel.bind('syncSuccess', this.onSyncComplete.bind(this));
            this.propertyPricingModel.bind('syncFailure', this.onSyncComplete.bind(this));

            if (this.animate) {
                this.ratesContainerSlide = new Fx.Slide(this.ratesTableContainer);
            }

            if (this.propertyPricingModel.fetched) {
                this.renderRooms();
            }

        },

        onHoldHover: function(e, element) {
            var holdTooltip = element.retrieve('holdTooltip');
            if (!holdTooltip) {
                holdTooltip = new Tooltip(this.attachTo, {
                    'className': 'order-tooltip tenor hold-tooltip'
                });
                element.store('holdTooltip', holdTooltip);
            }

            var holdTooltipText = 'If you need more time, hold this trip for the next 72 hours for 10% of the price. If you buy, the hold payment is applied to your purchase. If not, your hold will be refunded as a Jetsetter credit.';
            holdTooltip.show(holdTooltipText, element, 150);
        },

        onHoldHoverOut: function(e, element) {
            var tooltip = element.retrieve('holdTooltip');
            tooltip && tooltip.hide();
        },

        onClickMoreDescription: function(e, elem) {
            e && e.preventDefault();
            var parent = elem.getParent('.description');
            if (parent) {
                parent.set('html', parent.get('data-full-description'));
            }
        },

        /**
         * when book is clicked for any rate
         * @param event
         * @param el
         * @returns {boolean}
         */
        onBookClick: function(event, el) {

            var $el = $(el);
            var $row = $el.getParent('tr');

            var orderMode = 'order';
            if ($el.hasClass('standby')) {
                orderMode = 'standby';
            } else if ($el.hasClass('hold')) {
                orderMode = 'hold';
            } else if (this.propertyModel.get('property').details.inventoryRequiresApproval) {
                orderMode = 'deferred';
            }

            var orderModel = new Jetsetter.Models.Order({
                request: {
                    ratePlanId      : $row.get('data-rate-plan-id'),
                    roomTypeId      : $row.get('data-room-type-id'),
                    mode            : orderMode,
                    checkInDate     : this.searchParametersModel.get('checkInDate'),
                    checkOutDate    : this.searchParametersModel.get('checkOutDate'),
                    quantity        : this.searchParametersModel.get('numOfRooms'),
                    guests          : this.searchParametersModel.get('numOfGuests'),
                    trackName       : 'PDPv2',
                    format          : (orderMode == 'order') ? 'new' : null, // 'new' format is only supported for hotel orders currently
                    channel         : this.propertyModel.get('property').channel
                }
            });

            orderModel.bind('checkoutSuccess', function() {
                _gaq.push(['_trackEvent', 'PDPv2', 'Rooms', 'book-success']);
            });
            orderModel.bind('checkoutFailure', function() {
                _gaq.push(['_trackEvent', 'PDPv2', 'Rooms', 'book-fail']);
                $el.set('disabled', false);
                new NotificationModal('There are no rooms available for the dates selected. Please choose different dates', 'error').show();
            });
            orderModel.bind('checkoutSecureModalShown', function(){
                _gaq.push(['_trackEvent', 'Modal', 'PDPv2OrderSecureLogin', 'Show']);
            });
            orderModel.bind('checkoutSecureModalClosed', function() {
                $el.set('disabled', false);
            });

            // begin!
            $el.set('disabled', true);
            _gaq.push(['_trackEvent', 'PDPv2', 'Rooms', 'book-click']);
            orderModel.goToCheckout();

            return true;
        },

        onSyncStart: function() {
            this.el.addClass('rates-loading');
            if (this.animate) {
                this.ratesContainerSlide.element.setStyle('overflow', 'hidden');
                this.ratesContainerSlide.wrapper.setStyle('overflow', 'hidden');
                this.ratesContainerSlide.cancel().slideOut();
            }
        },

        onSyncComplete: function() {
            this.el.removeClass('rates-loading');
            this.renderRooms();
        },

        render: function() {
            this.el.removeClass('rates-loading');
            this.el.removeClass('rates-unavailable');
            this.el.removeClass('rates-available');

            if (this.propertyPricingModel.fetching) {
                this.el.addClass('rates-loading');
            } else if (!this.propertyPricingModel.fetched) {
            } else {
            }
            return this;
        },

        getHeadingsRow: function() {

            var totalRow = this.showTotal ? 'Total' : 'Subtotal';

            return '<tr class="headings tenor">' +
                '<th class="room-image"><!-- this space intentially left blank --></th>' +
                '<th class="room-desc">Room type</th>' +
                '<th class="room-avg-price">Avg price/night</th>' +
                '<th class="room-total-price">'+totalRow+'</th>' +
                '<th class="cta-container"><!-- this space intentially left blank --></th>' +
            '</tr>';
        },

        onSeeMore: function(e) {
            e && e.preventDefault();
            omniture.trackClickWithSiteSection('see more rooms click');
            this.ratesTableContainer.getElement('tr.see-more').dispose();
            this.moreRatesFx.slideIn().chain(function() {
                this.element.setStyle('overflow', 'visible');
                this.wrapper.setStyle('overflow', 'visible');
                this.wrapper.setStyle('height', 'auto');
            });
        },

        onSeeAll: function(e) {
            e && e.preventDefault();
            omniture.trackClickWithSiteSection('see all rooms click');
            this.ratesTableContainer.getElement('tr.see-all').dispose();
            this.remainingRatesFx.slideIn().chain(function(){
                this.element.setStyle('overflow', 'visible');
                this.wrapper.setStyle('overflow', 'visible');
                this.wrapper.setStyle('height', 'auto');
            });
        },

        /**
         * Get the 'see more' link which should appear after the first 5 results (if there are > 5 total)
         */
        getSeeMoreRow: function() {
            return '<tr class="see-more"><td colspan="5"><a href="#">See more room options</a></td></tr>'
        },

        /**
         * get the 'see all' link which should appear after the first 10 results (if there are > 10 total)
         */
        getSeeAllRow: function() {
            return '<tr class="see-all"><td colspan="5"><a href="#">See all room options</a></td></tr>'
        },

        renderRooms: function() {

            var pricing = this.propertyPricingModel.get('pricing');

            // keep track if there is at least 1 rate
            var numRates = 0;

            var html = '';

            _.each(this.propertyPricingModel.get('pricing') || [], function(room) {

                var ratePlanNames = []; // keep track of rate plan names encountered
                var standardRate = null; // keep track of standard rate plan rate

                _.each(room.roomRates, function(rate) {
                    if (rate.ratePlan.name.match(/standard/i)) {
                        standardRate = rate.averageNightlyRate;
                    }
                });

                _.each(room.roomRates, function(rate) {

                    if (!this.propertyModel.get('property').details.standbysEnabled && (this.searchParametersModel.get('numOfRooms') > rate.availability)) {
                        // not enough availability for chosen number of rooms
                        return;
                    }

                    if (room.roomType.restrictions.maxOccupancy) {
                        if (this.searchParametersModel.get('numOfGuests') > (room.roomType.restrictions.maxOccupancy * this.searchParametersModel.get('numOfRooms'))) {
                            // this room type can not support the selected occupancy
                            return;
                        }
                    }

                    // manage the name of the rate plan so that it doesnt redundantly contain the name of the room type
                    var ratePlanName = rate.ratePlan.name;
                    if (ratePlanName == (room.roomType.name + " Rate")) {
                        ratePlanName = "Standard Rate";
                    } else {
                        ratePlanName = ratePlanName.replace(room.roomType.name + " - ", "");
                    }

                    // if this is a duplicate rate plan from one shown previous, suppress it
                    if (_.contains(ratePlanNames, ratePlanName)) {
                        // don't show duplicate rate plans with same name
                        return;
                    } else {
                        ratePlanNames.push(ratePlanName);
                    }

                    // if this is a non-refundable rate plan and it is >= expensive as the standard rate, suppress it.
                    if ((standardRate !== null) && ratePlanName.match(/non.refundable/i) && rate.averageNightlyRate >= standardRate) {
                        return;
                    }

                    // if this rate plan is standard, suppress the display of the rate plan name
                    if (ratePlanName.match(/standard/i) !== null) {
                        ratePlanName = '';
                    }

                    // done mangling rate plan names

                    // the room type exists in pricing and is available
                    var currencySymbol = rate.chargesSummary.currency.symbol;
                    if (this.showTotal) {
                        var total = Math.ceil(this.searchParametersModel.get('numOfRooms') * (rate.chargesSummary.total));
                    } else {
                        // else show sub-total
                        var total = Math.ceil(this.searchParametersModel.get('numOfRooms') * (rate.chargesSummary.subtotal - (rate.chargesSummary.discount || 0)));
                    }

                    var marketRate = null;
                    var avgMarketRate = null;

                    if (rate.chargesSummary.marketRate) {
                        var nights = rate.nightlyRates.length;
                        marketRate = rate.chargesSummary.marketRate;
                        avgMarketRate = Math.ceil(marketRate / nights); // Rounding up to the whole dollar value, not taking into account cents
                    }

                    var avgNightlyRate = rate.averageNightlyRate;
                    avgNightlyRate = (avgNightlyRate % 1 != 0) ? avgNightlyRate.toFixed(2) : avgNightlyRate.toFixed(0); // round to 0 or 2 decimal places depending on whether or not there is a decimal component to the number
                    //total = Math.ceil(total); //(total % 1 != 0) ? total.toFixed(2) : total.toFixed(0); // round to 0 or 2 decimal places depending on whether or not there is a decimal component to the number

                    var isStandby = rate.availability < this.searchParametersModel.get('numOfRooms');

                    // keep track of promos for the rate
                    var promos = [];

                    if (ratePlanName) {
                        promos.push(ratePlanName);
                    }

                    if (rate.appliedPricingRule && rate.appliedPricingRule.description) {
                        promos.push(rate.appliedPricingRule.description);
                    }

                    if (isStandby) {
                        promos.push('Available for standby only');
                    }

                    // if we're at the threshold of either the 5 or 10 limit before we suppress the remaining list behind a button, close previous table and open a new one
                    if (numRates == 0) {
                        html += '<table cellpadding="0" cellspacing="0" border="0" class="room-rates-table first-rates">' + this.getHeadingsRow();
                    } else if (numRates == 5) {
                        html += this.getSeeMoreRow();
                        html += '</table><table cellpadding="0" cellspacing="0" border="0" class="room-rates-table more-rates">';
                    } else if (numRates == 10) {
                        html += this.getSeeAllRow();
                        html += '</table><table cellpadding="0" cellspacing="0" border="0" class="room-rates-table remaining-rates">';
                    }

                    html += roomTemplate(_.extend({}, this.templateOptions, {
                        room                 : room,
                        rate                 : rate,
                        currencySymbol       : currencySymbol,
                        avgMarketNightlyRate : avgMarketRate > avgNightlyRate ? avgMarketRate : null,
                        avgNightlyRate       : avgNightlyRate,
                        total                : total,
                        cropImage            : this.dynamicCropper.generateLink,
                        cdnContext           : this.cdnContext,
                        promos               : promos,
                        isStandby            : isStandby
                    }));
                    numRates++;
                }.bind(this));
            }.bind(this));

            if (numRates > 0) {
                html += '</table>';
                this.ratesTableContainer.empty().set('html', html);

                // set up animation for 'more rates' table
                if (numRates > 5) {
                    this.moreRatesFx = new Fx.Slide(this.ratesTableContainer.getElement('.more-rates')).hide();
                }

                // set up animation for 'all rates' table
                if (numRates > 10) {
                    this.remainingRatesFx = new Fx.Slide(this.ratesTableContainer.getElement('.remaining-rates')).hide();
                }

                if (this.animate) {
                    this.ratesContainerSlide.cancel().slideIn().chain(function() {
                        this.element.setStyle('overflow', 'visible');
                        this.wrapper.setStyle('overflow', 'visible');
                        this.wrapper.setStyle('height', 'auto');
                    });
                }

                Jetsetter.loadImages(this.ratesTableContainer.getElements('img'));

                this.el.removeClass('rates-unavailable').addClass('rates-available');
            } else {
                this.ratesContainerSlide.slideOut().chain(function() {
                    this.ratesTableContainer.empty();
                }.bind(this));
                this.el.removeClass('rates-available').addClass('rates-unavailable');
            }

            this.trigger('rendered');
            return this;

        }

    });
})();
Jetsetter.RoomSelector = Jetsetter.RoomSelector || {};
Jetsetter.RoomSelector.Controllers = Jetsetter.RoomSelector.Controllers || {};

/**
 * Represent only the top room of pricing. used in conjunction with meta
 */

(function() {

    var roomTemplate = Templates["./views/partials/property2/meta-rate-top.ejs"];

    Jetsetter.RoomSelector.Controllers.TopRoom = Composer.Controller.extend({

        events: {
            'click .top-rate td'            : 'onBookClick',
            'mouseenter .hold'              : 'onHoldHover',
            'mouseleave .hold'              : 'onHoldHoverOut'
        },

        /**
         * Pass in:
         * - el
         * - pricingModel
         * - searchParametersModel
         */

        init: function() {

            this.dynamicCropper = new DynamicCropperLinkGenerator();
            this.cdnContext = Jetsetter.CDN_HOST.replace(/^\/\//, '');

            this.ratesTableContainer = this.el.getElement('.table-container');
            this.metaContainer = this.el.getElement('.meta-container');

            this.propertyPricingModel.bind('syncStart', this.onSyncStart.bind(this));

            this.propertyPricingModel.bind('syncSuccess', this.onPricingComplete.bind(this));
            this.propertyPricingModel.bind('syncFailure', this.onPricingComplete.bind(this));

            this.ratesContainerSlide = new Fx.Slide(this.ratesTableContainer);
        },

        onHoldHover: function(e, element) {
            var holdTooltip = element.retrieve('holdTooltip');
            if (!holdTooltip) {
                holdTooltip = new Tooltip(this.attachTo, {
                    'className': 'order-tooltip tenor'
                });
                element.store('holdTooltip', holdTooltip);
            }

            var holdTooltipText = 'If you need more time, hold this trip for the next 72 hours for 10% of the price. If you buy, the hold payment is applied to your purchase. If not, your hold will be refunded as a Jetsetter credit.';
            holdTooltip.show(holdTooltipText, element, 150);
        },

        onHoldHoverOut: function(e, element) {
            var tooltip = element.retrieve('holdTooltip');
            tooltip && tooltip.hide();
        },

        /**
         * when book is clicked for any rate
         * @param event
         * @param el
         * @returns {boolean}
         */
        onBookClick: function(event, el) {
            event && event.stop();

            // @todo: dont re-initialize this object on every invocation

            this.roomListModal = new RoomListModal();
            var modalRoomListController = new Jetsetter.RoomSelector.Controllers.RoomList({
                el                    : this.roomListModal.toElement(), // this is bad practice, to assign two views to the same el, but since elements of that view mixed with elements of this view, i'm doing it.
                searchParametersModel : this.searchParametersModel,
                propertyPricingModel  : this.propertyPricingModel,
                propertyModel         : this.propertyModel,
                animate               : false,
                showTotal             : true
            });
            this.roomListModal.setRoomListController(modalRoomListController);

            this.roomListModal.show();
        },

        onSyncStart: function() {
            this.el.addClass('rates-loading');
            this.ratesContainerSlide.element.setStyle('overflow', 'hidden');
            this.ratesContainerSlide.wrapper.setStyle('overflow', 'hidden');
            this.ratesContainerSlide.cancel().slideOut();
        },

        onPricingComplete: function() {
            this.el.removeClass('rates-loading');
            this.renderRooms();
        },

        render: function() {
            this.el.removeClass('rates-unavailable');
            this.el.removeClass('rates-available');

            if (this.tripAdvisorMetaModel.fetching) {
                this.el.addClass('meta-loading');
            } else if (this.tripAdvisorMetaModel.fetched) {
                this.el.removeClass('meta-loading');
            }

            if (this.propertyPricingModel.fetching) {
                this.el.addClass('rates-loading');
            } else if (this.propertyPricingModel.fetched) {
                this.el.removeClass('rates-loading');
            }
            return this;
        },

        getHeadingsRow: function() {

            return '<tr class="headings tenor">' +
                '<th class="meta-site"><!-- intentionally blank --></th>' +
                '<th class="meta-rate">Price/night</th>' +
                '<th class="meta-total">Total</th>' +
                '<th class="meta-cta"><!-- this space intentially left blank --></th>' +
                '</tr>';
        },

        renderRooms: function() {

            var pricing = this.propertyPricingModel.get('pricing');

            // keep track if there is at least 1 rate
            var numRates = 0;

            var html = '';

            var rate = this.propertyPricingModel.getLowestPricedRatePlan(this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'), this.propertyModel.get('property').details.standbysEnabled);
            if (rate) {
                // the room type exists in pricing and is available
                var currencySymbol = rate.chargesSummary.currency.symbol;
                //var total = Math.ceil(this.searchParametersModel.get('numOfRooms') * (rate.chargesSummary.subtotal - (rate.chargesSummary.discount || 0)));
                var total = Math.ceil(this.searchParametersModel.get('numOfRooms') * (rate.chargesSummary.total));

                var marketRate = null;
                var avgMarketRate = null;

                if (rate.chargesSummary.marketRate) {
                    var nights = rate.nightlyRates.length;
                    marketRate = rate.chargesSummary.marketRate;
                    avgMarketRate = Math.ceil(marketRate / nights); // Rounding up to the whole dollar value, not taking into account cents
                }

                var avgNightlyRate = rate.averageNightlyRate;
                avgNightlyRate = (avgNightlyRate % 1 != 0) ? avgNightlyRate.toFixed(2) : avgNightlyRate.toFixed(0); // round to 0 or 2 decimal places depending on whether or not there is a decimal component to the number
                //total = Math.ceil(total); //(total % 1 != 0) ? total.toFixed(2) : total.toFixed(0); // round to 0 or 2 decimal places depending on whether or not there is a decimal component to the number

                var isStandby = rate.availability < this.searchParametersModel.get('numOfRooms');

                // keep track of promos for the rate
                var promos = [];

//                if (ratePlanName) {
//                    promos.push(ratePlanName);
//                }

                if (rate.appliedPricingRule && rate.appliedPricingRule.description) {
                    promos.push(rate.appliedPricingRule.description);
                }

                if (isStandby) {
                    promos.push('Available for standby only');
                }

                html += '<table cellpadding="0" cellspacing="0" border="0" class="meta-table meta-jetsetter-rate tenor">' + this.getHeadingsRow();


                html += roomTemplate({
                    rate                 : rate,
                    currencySymbol       : currencySymbol,
                    avgMarketNightlyRate : avgMarketRate > avgNightlyRate ? avgMarketRate : null,
                    avgNightlyRate       : avgNightlyRate,
                    total                : total,
                    cropImage            : this.dynamicCropper.generateLink,
                    cdnContext           : this.cdnContext,
                    promos               : promos,
                    isStandby            : isStandby
                });

                html += '</table>';
                this.ratesTableContainer.empty().set('html', html);

                this.ratesContainerSlide.cancel().slideIn().chain(function() {
                    this.element.setStyle('overflow', 'visible');
                    this.wrapper.setStyle('overflow', 'visible');
                    this.wrapper.setStyle('height', 'auto');
                });
                this.el.removeClass('rates-unavailable').addClass('rates-available');
            } else {
                this.ratesContainerSlide.slideOut().chain(function() {
                    this.ratesTableContainer.empty();
                }.bind(this));
                this.el.removeClass('rates-available').addClass('rates-unavailable');
            }

            this.trigger('rendered');

            return this;

        }

    });
})();
Jetsetter.RoomSelector = Jetsetter.RoomSelector || {};
Jetsetter.RoomSelector.Controllers = Jetsetter.RoomSelector.Controllers || {};
Jetsetter.RoomSelector.Controllers.Main = Composer.Controller.extend({

    /**
     * pass in
     * - el
     * - searchParameterModel
     * - this.propertyModel  - property details model passed in
     * - this.propertyPricingModel - pricing model passed in
     * - this.propertyInventoryModel - inventory model passed in
     * - this.tripAdvisorMetaModel - (optional) ta metasearch model, or null
     * - this.searchParametersModel - passed in
     */

    events: {
        'click .search'   : 'onClickUpdate'
    },

    init: function() {

        this.dynamicCropper = new DynamicCropperLinkGenerator();
        this.cdnContext = Jetsetter.CDN_HOST.replace(/^\/\//, '');

        this.searchForm = this.el.getElement('.search-form');
        if (!this.searchForm) {
            return this;
        }

        this.ctaButton = this.searchForm.getElement('button');

        this.isDatedSearch = this.searchParametersModel.hasDates();

        this._initializeListController();

        this.initializeSearchForm(this.searchParametersModel.getCheckInDate(), this.searchParametersModel.getCheckOutDate());

        this.propertyPricingModel.bind('syncSuccess', this.render.bind(this));
        this.propertyPricingModel.bind('syncFailure', this.render.bind(this));

        this.propertyPricingModel.bind('syncSuccess', this.updateMaxGuests.bind(this));

        this.propertyPricingModel.bind('syncSuccess', this.trackPricing.bind(this));
        this.propertyPricingModel.bind('syncFailure', this.trackPricing.bind(this));

        this.propertyInventoryModel.bind('syncSuccess', this.render.bind(this));
        this.propertyInventoryModel.bind('syncFailure', this.render.bind(this));

        this.propertyInventoryModel.bind('syncSuccess', this.checkInventory.bind(this));
        this.propertyInventoryModel.bind('syncFailure', this.checkInventory.bind(this));

        this.propertyPricingModel.bind('syncSuccess', this.onFieldUpdate.bind(this));

        if (this.searchParametersModel.hasDates()) {
            this.propertyPricingModel.search(this.searchParametersModel.getCheckInDate(), this.searchParametersModel.getCheckOutDate());
        }

        this.hasSearched = false;

        this.render();
    },

    _initializeListController: function() {
        this.roomListController = new Jetsetter.RoomSelector.Controllers.RoomList({
            el                    : this.el, // this is bad practice, to assign two views to the same el, but since elements of that view mixed with elements of this view, i'm doing it.
            searchParametersModel : this.searchParametersModel,
            propertyPricingModel  : this.propertyPricingModel,
            propertyModel         : this.propertyModel
        });
    },

    trackPricing: function() {
        var ratePlan = this.propertyPricingModel.getLowestPricedRatePlan(this.getSelectedRooms(), this.getSelectedGuests(), this.propertyModel.get('property').details.standbysEnabled);
        omniture.trackClickWithSiteSection(ratePlan ? 'Availability yes' : 'Availability no')
    },

    /**
     * get the state of the rooms dropdown in the UI
     */
    getSelectedRooms: function() {
        return parseInt(this.searchForm.getElement('select[name=rooms]').get('value'), 10);
    },

    /**
     * get the state of the guests dropdown in the UI
     */
    getSelectedGuests: function() {
        return parseInt(this.searchForm.getElement('select[name=guests]').get('value'), 10);
    },

    /**
     * check inventory for no availability. If not availability and all inventory has been fetched then we'll add the no-inventory class to show messaging
     */
    checkInventory: function() {
        if (this.propertyInventoryModel.fetchedAll) {
            if (!this.propertyInventoryModel.get('inventory') || !this.propertyInventoryModel.get('inventory').roomTypeInventory || (this.propertyInventoryModel.get('inventory').roomTypeInventory.length == 0)) {
                this.el.addClass('no-inventory');
            }
        }
    },

    updateMaxGuests: function() {
        if (!this.propertyPricingModel.fetched) {
            // this functionality requires property pricing to have been fetched
            return;
        }
        var numRooms = this.getSelectedRooms();
        var maxGuests = this.propertyPricingModel.getMaxNumOfSelectableGuests() * numRooms;
        var select = this.searchForm.getElement('select[name=guests]');
        var currentMaxGuests = select.getElements('option').length;

        if (maxGuests > currentMaxGuests) {
            for(var i = currentMaxGuests + 1; i <= maxGuests; i++) {
                var option = new Element('option').set('value', i).set('html', i + ' Guests');
                option.inject(select);
            }
            select.retrieve('dropdown-ui').rebuild();
        } else if (maxGuests < currentMaxGuests) {
            var selectedGuests = parseInt(select.get('value'), 10);
            var options = select.getElements('option');
            for(var i = currentMaxGuests; i > maxGuests; i--) {
                options[i - 1].dispose();
            }

            // if user had selected more guests than we now allow, show them a message and reset the select dropdown
            if (selectedGuests > maxGuests) {
                new NotificationModal("The maximum number of guests for the dates selected is "+maxGuests+". We have adjusted your selected number of guests to "+maxGuests+".", 'error').show();
                select.retrieve('dropdown-ui').set('value', maxGuests);
                this.searchParametersModel.set({numOfGuests : maxGuests});
            }

            select.retrieve('dropdown-ui').rebuild();
        } else {
            return;
        }
    },

    /**
     * When clicking on 'update' or 'show prices', send the pricing model out to pick up some prices
     * @param event
     * @param el
     */
    onClickUpdate: function(event, el) {

        var checkIn = this.dateSelectorController.getCheckInDate();
        var checkOut = this.dateSelectorController.getCheckOutDate();

        this.el.removeClass('focused');

        if (checkIn && checkOut) {
//            omniture.trackClickWithSiteSection('PDPv2 Update Prices click');
            this.update();
        } else {
            var tt = new Tooltip(this.attachTo, {
                'className': 'order-tooltip tenor'
            });
            var ttText = 'Please select both check in and check out dates';
            tt.show(ttText, el, 150);
        }

        this.render();
    },

    /**
     * Update the search parameter model with parameters of the current search as defined by the state of the form inputs.
     * Any controllers listening to the search parameters model will fetch new data from the server by themselves and any
     * controllers listening to those models will update the front-end display
     */
    update: function () {
        var checkInDate = this.dateSelectorController.getCheckInDate();
        var checkOutDate = this.dateSelectorController.getCheckOutDate();

        this.searchParametersModel.set({
            checkInDate  : moment(checkInDate),
            checkOutDate : moment(checkOutDate),
            numOfRooms   : this.getSelectedRooms(),
            numOfGuests  : this.getSelectedGuests()
        });

        // search will automatically get kicked off when search parameters get changed

        this.hasSearched = true;
        //this.propertyPricingModel.search(checkInDate, checkOutDate);
    },

    /**
     * when any search parameter is changed, compare with the last search state and if it's different
     * then I make the update button orange, if the state is the same then the button should be grey
     */
    onFieldUpdate: function() {

        // don't change the button if inventory or pricing have not yet been fetched
        if (!this.propertyInventoryModel.fetched || !this.propertyPricingModel.fetched) {
            return;
        }

        this.el.removeClass('focused');

        if (this.hasUpdatedFields()) {
            this.ctaButton.set('disabled', false);
            this.ctaButton.removeClass('inactive');
        } else {
            this.ctaButton.set('disabled', true);
            this.ctaButton.addClass('inactive');
        }
    },

    /**
     * return whether or not fields in the form elements are different since the last rate search
     */
    hasUpdatedFields: function() {

        if (!this.propertyPricingModel.fetched) {
            // if pricing hasn't been fetched yet then this is vacuously true
            return true;
        }

        var formCheckIn = moment(this.dateSelectorController.getCheckInDate());
        var formCheckOut = moment(this.dateSelectorController.getCheckOutDate());
        var formRooms = this.getSelectedRooms();
        var formGuests = this.getSelectedGuests();

        if (!formCheckIn || !formCheckOut) {
            // if invalid dates are supplied then we'll return true
            return true;
        }

        if (!formCheckIn.isSame(this.searchParametersModel.get('checkInDate')) ||
            !formCheckOut.isSame(this.searchParametersModel.get('checkOutDate')) ||
            formRooms != this.searchParametersModel.get('numOfRooms') ||
            formGuests != this.searchParametersModel.get('numOfGuests')) {
            return true;
        }
    },

    /**
     * initialize search form and events
     * @param checkin
     * @param checkout
     */
    initializeSearchForm: function(checkin, checkout) {

        this.dateSelectorController = new Jetsetter.Controllers.PropertyDateCalendars({
            el              : this.searchForm,

            // @todo: ? .. pass entire searchParametersModel instead of its members?
            checkInDate     : checkin,
            checkOutDate    : checkout,
            quantity        : this.searchParametersModel.get('numOfRooms'), // @todo: ? .. pass searchParametersModel?
            guests          : this.searchParametersModel.get('numOfGuests'), // @todo: ? .. pass searchParametersModel?

            propertyModel   : this.propertyModel,
            inventoryModel  : this.propertyInventoryModel
        }); // just instantiating the object will initialize all fields/pickers/etc

        var roomsSelect = this.searchForm.getElement('select[name=rooms]');
        var guestsSelect = this.searchForm.getElement('select[name=guests]');

        if (roomsSelect) {
            if (roomsSelect.getElement('option[value='+this.searchParametersModel.get('numOfRooms')+']')) {
                roomsSelect.set('value', this.searchParametersModel.get('numOfRooms'));
            }
            new Dropdown(roomsSelect, null);
        }

        if (guestsSelect) {
            if (guestsSelect.getElement('option[value='+this.searchParametersModel.get('numOfGuests')+']')) {
                guestsSelect.set('value', this.searchParametersModel.get('numOfGuests'));
            }
            new Dropdown(guestsSelect, null);
        }

        this.dateSelectorController.bind('checkInSelectStart', function() {
            this.el.removeClass('focused');
            omniture.trackClickWithSiteSection('Check in Calendar click');
        }.bind(this));

        this.dateSelectorController.bind('checkInCalendarOpen', function() {
            this.el.removeClass('focused');
        }.bind(this));

        this.dateSelectorController.bind('checkOutSelectStart', function() {
            omniture.trackClickWithSiteSection('Check out Calendar click');
            this.el.removeClass('focused');
        }.bind(this));

        this.dateSelectorController.bind('checkOutCalendarOpen', function() {
            this.el.removeClass('focused');
        }.bind(this));

        var roomsDropdown = this.searchForm.getElement('select[name=rooms]');
        var guestsDropdown = this.searchForm.getElement('select[name=guests]');

        roomsDropdown.addEvent('change', function() {
            if (this.dateSelectorController.getCheckInDate() && this.dateSelectorController.getCheckOutDate()) {
                this.update();
            } else {
                this.updateMaxGuests();
            }
            this.onFieldUpdate();
        }.bind(this));

        guestsDropdown.addEvent('change', function() {
            if (this.dateSelectorController.getCheckInDate() && this.dateSelectorController.getCheckOutDate()) {
                this.update();
            }
            this.onFieldUpdate();
        }.bind(this));

        this.dateSelectorController.bind('checkInDateClick', function() {
            if (!this.dateSelectorController.getCheckOutDate()) {
                this.dateSelectorController.showCheckOutCalendar();
            } else {
                this.update();
            }
            this.onFieldUpdate();
        }.bind(this));

        this.dateSelectorController.bind('checkOutDateClick', function() {
            if (this.dateSelectorController.getCheckInDate() && this.dateSelectorController.getCheckOutDate()) {
                this.update();
            }
            this.onFieldUpdate();
        }.bind(this));

        this.searchParametersModel.bind('change', this._onSearchParametersUpdate.bind(this));

        this.searchFormInitialized = true;

    },

    _onSearchParametersUpdate: function() {

        var checkin = this.searchParametersModel.getCheckInDate();
        var checkout = this.searchParametersModel.getCheckOutDate();
        if (checkin && checkout) {
            this.dateSelectorController.setCheckInDate(checkin);
            this.dateSelectorController.setCheckOutDate(checkout);

            this.propertyPricingModel.search(checkin, checkout);
        }
    },

    /**
     * generic render method that will take into account current state of the search and render appropriate content
     */
    render: function() {

        if (this.hasSearched) {
            this.el.addClass('has-searched');
        }

//        this.el.removeClass('rates-showing');

        /**
         * Change 'show prices' button to 'update' if there are prices and vice versa
         */

        if (this.propertyInventoryModel.fetched) {
            if (this.propertyPricingModel.fetched) {
//                this.el.addClass('rates-showing')
                this.ctaButton.set('text', 'Update');
            } else if (this.propertyPricingModel.fetching) {
                this.ctaButton.set('text', 'Loading...');
            } else {
                this.ctaButton.set('text', 'See Prices');
            }
        } else {
            this.ctaButton.set('text', 'Loading..');
        }
    }

});
Jetsetter.RoomSelector = Jetsetter.RoomSelector || {};
Jetsetter.RoomSelector.Controllers = Jetsetter.RoomSelector.Controllers || {};
Jetsetter.RoomSelector.Controllers.Main20381 = Jetsetter.RoomSelector.Controllers.Main.extend({

    /**
     * pass in
     * - el
     * - searchParameterModel
     * - this.propertyModel  - property details model passed in
     * - this.propertyPricingModel - pricing model passed in
     * - this.propertyInventoryModel - inventory model passed in
     * - this.tripAdvisorMetaModel - (optional) ta metasearch model, or null
     * - this.searchParametersModel - passed in
     */

    events: {
        'click .search'   : 'onClickUpdate'
    },

    init: function() {

        this.parent();

        if (this.searchParametersModel.hasDates() && this.tripAdvisorMetaModel) {
            this.tripAdvisorMetaModel.search(this.searchParametersModel.getCheckInDate(), this.searchParametersModel.getCheckOutDate(), this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'), this._getMetaMcid());
        }

        this.render(); // todo: necessary?
    },

    _initializeListController: function() {
        if (this.tripAdvisorMetaModel) {
            /**
             * if we have a meta model, use the topRoom and meat list controllers separately
             */

            this.topRoomView = new Jetsetter.RoomSelector.Controllers.TopRoom({
                el                    : this.el,
                searchParametersModel : this.searchParametersModel,
                propertyModel         : this.propertyModel,
                propertyPricingModel  : this.propertyPricingModel
            });

            this.metaListView = new Jetsetter.RoomSelector.Controllers.MetaList({
                el                    : this.el, // this is bad practice, to assign two views to the same el, but since elements of that view mixed with elements of this view, i'm doing it.
                searchParametersModel : this.searchParametersModel,
                propertyModel         : this.propertyModel,
                tripAdvisorMetaModel  : this.tripAdvisorMetaModel,
                propertyPricingModel  : this.propertyPricingModel
            });

        } else {

            this.roomListController = new Jetsetter.RoomSelector.Controllers.RoomList({
                el                    : this.el, // this is bad practice, to assign two views to the same el, but since elements of that view mixed with elements of this view, i'm doing it.
                searchParametersModel : this.searchParametersModel,
                propertyPricingModel  : this.propertyPricingModel,
                propertyModel         : this.propertyModel
            });

        }
    },

    // when the test is over we can just stop passing in mcid and use the default mcid on the server side
    _getMetaMcid: function() {
        if (Jetsetter.ab20381 == "B") {
            return 21473;
        } else {
            return null;
        }
    },

    /**
     * check inventory for no availability. If not availability and all inventory has been fetched then we'll add the no-inventory class to show messaging
     */
    checkInventory: function() {
        var hasJSInventory = true;
        if (this.propertyInventoryModel.fetchedAll) {
            if (!this.propertyInventoryModel.get('inventory') || !this.propertyInventoryModel.get('inventory').roomTypeInventory || (this.propertyInventoryModel.get('inventory').roomTypeInventory.length == 0)) {
                hasJSInventory = false;
            }
        }

        var hasMetaInventory = true;
        if (this.tripAdvisorMetaModel.fetchedAll) {
            var offers = this.tripAdvisorMetaModel.getOffers();
            if (!offers || offers.length == 0) {
                hasMetaInventory = false;
            }
        }

        if (!hasJSInventory && !hasMetaInventory) {
            this.el.addClass('no-inventory');
        }
    },

    update: function () {

        this.parent();

        var checkInDate = this.dateSelectorController.getCheckInDate();
        var checkOutDate = this.dateSelectorController.getCheckOutDate();

        if (this.tripAdvisorMetaModel) {
            this.tripAdvisorMetaModel.search(checkInDate, checkOutDate, this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'), this._getMetaMcid());
        }
    },

    _onSearchParametersUpdate: function() {
        var checkin = this.searchParametersModel.getCheckInDate();
        var checkout = this.searchParametersModel.getCheckOutDate();
        if (checkin && checkout) {
            this.dateSelectorController.setCheckInDate(checkin);
            this.dateSelectorController.setCheckOutDate(checkout);

            this.propertyPricingModel.search(checkin, checkout);
            if (this.tripAdvisorMetaModel) {
                this.tripAdvisorMetaModel.search(checkin, checkout, this.searchParametersModel.get('numOfRooms'), this.searchParametersModel.get('numOfGuests'), this._getMetaMcid());
            }
        }
    }

});
var RoomListModal = new Class({

    Extends: Modal,

    options: {
        title: '',
        byline: '',
        images: [
            /*
             id: 0,
             caption: '',
             imageUrl: ''
             */
        ]
    },

    initialize: function (options) {

        this.parent({
            id: 'room-list-modal',
            overlayOpacity: 0.4,
            dismissable: true
        });
        this.setOptions(options);

        //this.addCloseButton();

        var chooseARoom = new Element('div', { 'class' : 'choose-a-room tenor', 'text' : 'Please Choose a Room'});
        var roomSelector = new Element('div', { 'class': 'room-selector' });
        var roomList = new Element('div', { 'class' : 'room-list' });
        var tableContainer = new Element('div', { 'class' : 'table-container' });

        this.rootEl = this.content.adopt(chooseARoom).adopt(roomSelector.adopt(roomList.adopt(tableContainer)));

        this.addEvent('showEnd', function() {
            this.container.show();
            this.setPosition();
        }.bind(this));

    },

    addCloseButton: function () {
        this.closeButton = new Element('a', {
            'class' : 'close close-modal',
            'html'  : '&nbsp;'
        }).inject(this.content, 'top');

        this.content.addEvent('click:relay(.close-modal)', this.close.bind(this));

        // Store the function so that it can be detached later
        this._onEsc = function (event) {
            if (event.key == 'esc') {
                this.close();
            }
        }.bind(this);
        document.addEvent('keyup', this._onEsc);
    },

    setRoomListController: function(roomListController) {
        this.roomListController = roomListController;
        this.roomListController.bind('rendered', function() {
            this.container && this.setPosition();
        }.bind(this));
    },

    toElement: function () {
        return this.rootEl;
    },

    show: function() {
        this.parent();
        this.container.hide();
        return this;
    }


});
/**
*	@class TripBuilder
*	@author Dominik Hofmann
*	Date and quantity selector for booking trips.
*/

var TripBuilder = new Class({

	initialize: function (attachTo, productId, property, numRooms) {
		var scope = this;

        this.orderService = new OrderService();  // for testing

        this.isPackage = property.details.inventoryType == 'package';

		this.property = property;
		this.itemID = productId;
		
		this.numRooms;
		
		this.currentOrder = {};
		
		this.lowestPrice = null;
		this.lowestTax = null;
		this.lowestFee = null;
		
		
		this.firstAvailableHoldDate = new Date(Jetsetter.firstAvailableHoldDate);
		this.checkinTime = Jetsetter.property.check_in;
		this.checkoutTime = Jetsetter.property.check_out;
		this.holdsEnabled = Jetsetter.property.details.holdsEnabled;
		
		this.calendar = null;
		this.packageData = null;



		this.events = new Element('br');
		
		this.calendarContainer = new Element('div').inject(attachTo);
		
		var zero = 0;
		// @TODO: This should go in individual packages?
		new Element('div', {
			'class': 'segment'
		}).adopt(
			new Element('div', {
				'id': 'subtotal',
				'html': '<span class="label tenor">Subtotal:</span> <span class="value price tenor">' + zero.formatCurrency() + '</span>'
			}),
			new Element('div', {
				'class': 'rooms',
				'html': '<select id="quantity-list"><option value="1">1 Room</option><option value="2">2 Rooms</option><option value="3">3 Rooms</option><option value="4">4 Rooms</option></select>'
			})
		).inject(attachTo);
		
		this.actionContainer = new Element('div', {'class': 'actions segment'}).inject(attachTo);
		
		this.holdForm = new Element('form', {
			    'id' : 'hold-order-form',
			    'name' : 'hold-order-form',
			    'action' : Jetsetter.SECURE_HOST + '/checkout?mode=hold',
			    'method' : 'POST'})
			.inject(this.actionContainer);
		
		this.holdInput = new Element('input', {
			    'name' : 'input',
			    'type' : 'hidden'})
			.inject(this.holdForm);
		
		this.holdButton = new Element('div',{'class' : 'hold'})
		        .inject(this.actionContainer);

		!this.holdsEnabled && this.holdButton.hide();
		
		this.holdLink = new Element('button', {
			'type': 'button',
			'class': 'tenor',
			'id' : 'hold-btn',
			'title' : 'Hold this',
			'html' : 'Hold'}
		).inject(this.holdButton);
		
		this.tooltip = new Tooltip(attachTo);
		this.tooltip.container.set('id', 'actions-tooltip');
		this.tooltip.container.set('class', 'tooltip tenor');
		
		this.holdLink.addEvent('click', function () {

            _gaq.push(['_trackEvent', 'PDP', 'Hold', 'click']);

            if (Jetsetter.user.isAnonymous && Jetsetter.user.isPriceHidden) {
				Jetsetter.registrationModal.show();
			} else {
				if (scope.currentOrder != null
					&& scope.currentOrder.ratePlanId != null
					&& scope.bookButton.hasClass('wait') == false) {

						this.orderService.getCountOfActiveHolds({
                            guid: Jetsetter.user.guid,
							onSuccess: function(count) {
								if(count >= 3) {
                                    _gaq.push(['_trackEvent', 'PDP', 'Hold', 'fail']);
                                    var notificationModal = new NotificationModal('Oops! Jetsetter allows a maximum of three active holds at a time. Please contact Customer Support if you have questions.','error');
									notificationModal.show();
								} else {
									scope.currentOrder.isHold = true;
									//scope.holdInput.set('value', JSON.encode(scope.currentOrder));
									
									Jetsetter.secureLogin(Object.merge({
										onCloseEnd: function () {
											
										},
										onLogin: function () {
                                            scope.goToCheckout('hold');
										}
									}, Jetsetter.anonymousBrowse && Jetsetter.anonymousBrowse.options.promoId ? {promoId: Jetsetter.anonymousBrowse.options.promoId} : {}));
								}
							}.bind(this),
                            onFailure: function(code, message) {
                                _gaq.push(['_trackEvent', 'PDP', 'Hold', 'fail']);
                                new NotificationModal(message,'error').show();
                                throw message; // throw uncaught exception so it gets handled by client side js logger
                            }
						});
				} else {
					scope.shakeSelectNights();
				}
				return false;
			}
        }.bind(this));
		
		this.holdLink.addEvent('mouseenter', function(){
			scope.tooltip.show('If you need more time, hold this trip for the next 72 hours for 10% of the price. If you buy, the hold payment is applied to your purchase. If not, your hold will be refunded as a Jetsetter credit.', scope.holdLink, 150);
		});
		this.holdLink.addEvent('mouseout', function () {
			scope.tooltip.hide();
		});
		
		this.whatsThisStandbyButtonDoLink = new Element('a', {
			'class': 'standby-info action',
			'text': 'What’s Standby?'
		}).inject(this.actionContainer);
		this.whatsThisStandbyButtonDoLink.addEvent('mouseenter', function(){
			scope.tooltip.show('One or more of the dates you\'ve selected are sold out, but they may become available again before this sale ends. If you make a standby reservation, we\'ll automatically book you at the same rate if the dates open up.', this, 150);
		});
		this.whatsThisStandbyButtonDoLink.addEvent('mouseout', function () {
			scope.tooltip.hide();
		});
		this.whatsThisStandbyButtonDoLink.hide();


		this.bookButton = new Element('button',{
			'type': 'button',
			'class' : 'book cta-button tenor',
			'text' : 'Select'
		}).inject(this.actionContainer);
		
		var standbyTooltip = null;
		this.bookButton.addEvents({
			'click':  function () {
				if(this.bookButton.hasClass('wait')){
					this.bookButton.set('disabled', true);
				}
			}.bind(this),
			'mouseenter': function () {
				if(this.bookButton.hasClass('wait')){
					standbyTooltip = standbyTooltip || new Tooltip(this.attachTo, {
						'className': 'tenor order-tooltip order-tooltip-standby'
					});
					var standbyTooltipText = 'Some of your dates are sold out—but you can go on Standby. Click here for more information.';
					standbyTooltip.show(standbyTooltipText, this.bookButton, 150);	
				}
			}.bind(this),
			'mouseleave': function () {
				if(this.bookButton.hasClass('wait')){
					standbyTooltip.hide();	
				}
			}.bind(this)
		});

		this.bookButton.addEvent('click', function () {

            var isStandby = this.hasClass('wait'),
                button = this;

            var trackName = 'Book';
            if (isStandby) {
                trackName = 'Standby';
            }

            _gaq.push(['_trackEvent', 'PDP', trackName, 'click']);

            if (Jetsetter.user.isAnonymous && Jetsetter.user.isPriceHidden) {
				Jetsetter.registrationModal.show();
			} else {
				
				if (isStandby) {
					Jetsetter.secureLogin(Object.merge({
						onCloseEnd: function () {
							button.set('disabled', false);
						},
						onLogin: function () {
                            scope.goToCheckout('standby');
						}
					}, Jetsetter.anonymousBrowse && Jetsetter.anonymousBrowse.options.promoId ? {promoId: Jetsetter.anonymousBrowse.options.promoId} : {}));
					
					return false;
				}
				
				var order = scope.currentOrder;
				if (order && order.ratePlanId) {
					scope.bookButton.set('disabled', true).set('text', 'Submitting…');
					order.isHold = false;
					
					Jetsetter.secureLogin(Object.merge({
						dismissOnLogin: true,
						onCloseEnd: function () {
							scope.bookButton.set('disabled', false).set('text', 'Select');
						},
						onLogin: function () {
                            scope.goToCheckout('order');
						}
					}, Jetsetter.anonymousBrowse && Jetsetter.anonymousBrowse.options.promoId ? {promoId: Jetsetter.anonymousBrowse.options.promoId} : {}));
				} else {
					scope.shakeSelectNights();
					scope.tooltip.show('Please select a package above.', scope.bookButton);
				}
				
				return false;
			}
		});
		
		
		this.events.addEvent('packagesupdated', function (packages) {
			scope.buildCalendar(packages);
		});
		
		this.quantity = new DropDownList($('quantity-list'));
		this.quantity.events.addEvent('selectionupdate', function () {
			scope.updatePackages(scope.quantity.getSelectedItem().value);
		});
		
		
		this.updatePackages(numRooms);
		
	},

    goToCheckout: function(checkoutMode) {
        var order = this.currentOrder;

        var trackName = 'Book';
        if (checkoutMode == 'standby') {
            trackName = 'Standby';
        } else if (checkoutMode == 'hold') {
            trackName = 'Hold';
        }

        var orderQuery = {
            roomTypeId: order.roomTypeId,
            ratePlanId: order.ratePlanId,
            checkIn: moment(order.checkInDate).format("YYYY-MM-DD"),
            checkOut: moment(order.checkOutDate).format("YYYY-MM-DD"),
            mode: checkoutMode,
            quantity : order.quantity,
            nm : 'PDP'   // tracking
        };

        // create the order object and only continue if it returns correctly (has availability)
        this.orderService.getOrder(Object.merge({}, orderQuery, {
            orderType : checkoutMode,
            onSuccess: function(order) {
                _gaq.push(['_trackEvent', 'PDP', trackName, 'success']);
                setTimeout(function() {
                    document.location = Jetsetter.SECURE_HOST + '/checkout?' + Object.toQueryString(orderQuery);
                }.bind(this), 500);
            }.bind(this),
            onFailure: function() {
                this.bookButton.set('disabled', false).set('text', 'Select');
                new NotificationModal('There is no availability for the dates selected. Please choose different dates', 'error').show();
                _gaq.push(['_trackEvent', 'PDP', trackName, 'fail']);
            }.bind(this)
        }));


    },

	shakeSelectNights: function () {
		var instructionEl;
		
		if (this.isPackage) {
			instructionEl = this.calendarContainer.getElement('p.intro');
		} else {
			instructionEl = this.calendarContainer.getElement('.selected-nights p');
		}
		
		instructionEl && new Fx.Shake(instructionEl).start().chain(function () {
			instructionEl.setStyles({
				'position': '',
				'left': ''
			});
		});
		
	},
	
	updatePackages: function (numRooms) { 
		numRooms = numRooms || 1;
		var scope = this;
		
		if (this.productPackages) {
			this.numRooms = numRooms;
			this.events.fireEvent('packagesupdated', [this.productPackages[scope.itemID]]);
			return;
		}
		
		var propertyId = this.property.propertyId;
		new PricingService().getPackageRates({
			propertyId: propertyId,
			channel: this.property.channel,
			onSuccess: function(data) {
				scope.productPackages = scope.getPackagesFromData(data, numRooms);
				scope.numRooms = numRooms;
				var packages = scope.productPackages[scope.itemID];
				
                scope.isExclusive = Jetsetter.property && Jetsetter.property.details && Jetsetter.property.details.jetsetterExclusive;
				scope.packageRestrictions = Jetsetter.products[scope.itemID].restrictions;
				scope.inventoryWidget = Jetsetter.products[scope.itemID].inventoryWidget;
				scope.updateProductPrices();

				// setTimeout is needed for IE6/7 so that the bounded event handlers do execute
				if (Browser.ie6 || Browser.ie7) {
					setTimeout(function () {
						scope.events.fireEvent('packagesupdated', [packages]);
					}, 0)
				} else {
					scope.events.fireEvent('packagesupdated', [packages]);
				}
			},
			onFailure: function(){

			}
		})
	},

	getPackagesFromData: function (data, numRooms) {
		
		var scope = this;
	
		var index = 0;
		var expectedDate;
		var currentPackage;

		return _.object(_.map(data, function(roomTypeRates) {
			var packages = _.map(roomTypeRates.roomRates, function(roomRate) {
				return _.map(roomRate.nightlyRates, function(nightlyRate) {
					var pkg = moment(nightlyRate.bookingDate).toDate();
					pkg.ratePlanId = roomRate.ratePlan.id;
					pkg.roomTypeId = roomTypeRates.roomType.id;
					pkg.market_price = roomRate.chargesSummary.marketRate;
					pkg.tax = roomRate.chargesSummary.taxesAndFees;
					pkg.price = roomRate.chargesSummary.subtotal;
					pkg.available = roomRate.availability;
					pkg.waitList = roomRate.availability < numRooms;
					pkg.holdAvailable = Boolean(pkg >= scope.firstAvailableHoldDate) && scope.holdsEnabled;
					
					return pkg;
				});
			});

			return [roomTypeRates.roomType.id, packages];
		}));

	},
	
	updateProductPrices: function () {
		_.each(this.productPackages, function(packages, roomTypeId) {
			var lowestPrice = _.min(_.pluck(packages[0], 'price'));
			$$('#product-' + roomTypeId + ' .product-price strong')[0].set('text', lowestPrice.formatCurrency());
		}.bind(this));
	},

	updateProductPrice: function (scope) {
		// Update product prices
		var pricingEl = $('product-pricing');
		var ourPriceEl = pricingEl.getElement('.our-price');
		var compareEl = pricingEl.getElement('.compare');
		var product = Jetsetter.products[scope.itemID];

		var lowestPackage = _.min(_.pluck(this.productPackages[scope.itemID][0], 'price'));
		ourPriceEl.set('html', (scope.isPackage ? ('<span class="price">' + lowestPackage.formatCurrency() + '</span>') : ('from <span class="price">' + scope.lowestPrice.formatCurrency() + '</span> / night')));
		if (scope.isExclusive) {
			compareEl.addClass('exclusive').removeClass('other-price');
			compareEl.set('text', 'Only on Jetsetter');
		} else {
			compareEl.addClass('other-price').removeClass('exclusive');

			var str = scope.isPackage ? 'Actual Value' : 'Hotel website';

			var lowestPackageRetail = _.min(_.pluck(this.productPackages[scope.itemID][0], 'market_price'));
			compareEl.set('html', str + ' <del>' + (scope.isPackage ? lowestPackageRetail.formatCurrency() : scope.avgMarketPrice.formatCurrency() + '/night') + '</del>');
		}
	},
	
	buildCalendar: function (packages) {

		var scope = this;
		
		var monthOverride = null;
		var packageOverride = null;
		var datesOverride = null;
		//scope.currentOrder = null; // TODO: This is a hack. Eventually the current order needs to be re-applied on re-render.
		
		if (this.calendar) {
			this.calendar.dropPackages();
			
		} else {
			
			switch (this.property.details.inventoryType) {
				
				case 'package':
					this.quantity.container.getParent().destroy();
					this.calendar = new PackageCalendar(this.calendarContainer.set('id', 'packageCalendar'), packages.length);
					break;
					
				default:
					this.calendar = new ProductCalendar(this.calendarContainer.set('id', 'productCalendar'), this.packageRestrictions.min_stay, this.packageRestrictions.max_stay);
					break;
				
			}
		
		}
		this.events.fireEvent('calendarCreated');

		
		if (monthOverride) this.calendar.activeMonth = monthOverride;
		if (datesOverride) this.calendar.selectedDatesOffscreen = datesOverride;
		if (packageOverride) this.calendar.selectedPackageIndex = packageOverride;
		
		packages.each(function (pkg) {
			scope.calendar.addPackage(pkg);
		});
		
		
		/* TODO: Should this be here? Might make sense to be in a calendar itself */
		if (this.isPackage) {
			
			scope.lowestPrice = null;
			scope.lowestTax = null;
			scope.lowestFee = null;
			scope.avgMarketPrice = null;
			scope.avgMarketTaxFees = null;
		
			var divisor = 0;
			
			this.calendar.packages.each(function (packageChunk, index) {
				
				var totalPrice = 0;
				var totalMarketPrice = 0;
				
				packageChunk.dates.each(function (date, index) {
				
					totalPrice += Number(date.price);
					totalMarketPrice += Number(date.market_price);
					
					// Find the lowest room price per night
					if (date.price < scope.lowestPrice || scope.lowestPrice == null) {
						scope.lowestPrice = Math.floor(date.price);
						scope.lowestTax = Number(packageChunk.startDate.tax);
						scope.lowestFee = Number(packageChunk.startDate.fees);
						scope.avgMarketPrice = Math.floor(packageChunk.startDate.market_price);
						scope.avgMarketTaxFees = scope.lowestTax + scope.lowestFee;
					}
					
				});
				
			});
			
			var lowestPrice = scope.lowestPrice || 0;
			var marketPrice = scope.avgMarketPrice || 0;
			
			scope.updateProductPrice(scope);
			
		} else {
			this.calendar.events.addEvent('render', function () {
				
				scope.lowestPrice = null;
				scope.lowestTax = null;
				scope.lowestFee = null;
				scope.avgMarketPrice = null;
				scope.avgMarketTaxFees = null;
			
				var divisor = 0;
				
				$$('.calendar .available').each(function (dayElement, index) {
					
					var date = scope.calendar.availableDates.get(dayElement.key);
					
					if (date.getMonth() == scope.calendar.activeMonth) {
				
						var price = date.price;
						if (price < scope.lowestPrice || scope.lowestPrice == null) {
							scope.lowestPrice = Math.ceil(price);
							scope.lowestTax = Math.ceil(date.tax);
							scope.lowestFee = Math.ceil(date.fees);
						}
					
						scope.avgMarketPrice += Number(date.market_price);
						scope.avgMarketTaxFees += (Number(date.tax) + Number(date.fees));
						
						divisor++;
					}
				
				});
			
				scope.calendar.applyPremiums(scope.lowestPrice);
			
				scope.avgMarketPrice = Math.ceil(scope.avgMarketPrice / divisor);
				scope.avgMarketTaxFees = Math.ceil(scope.avgMarketTaxFees / divisor);
				
				
				scope.updateProductPrice(scope);
			});
		}
		
		
		this.calendar.events.addEvent('tripupdate', function () {

			var dates = scope.calendar.getSelectedDates();
			var totalPrice = 0;
			var waitList = false;
			var noHold = !scope.holdsEnabled;
			var checkInDate = dates[0];
			var checkOutDate = new Date(dates[dates.length -1]).increment('day', 1);

			var order = {
				ids: [],
				checkInDate: checkInDate,
				checkOutDate: checkOutDate,
				quantity: scope.quantity.getSelectedItem().value,
				attribute: "Room",
				isHold: false
			};
			
			dates.each(function (date) {
			
				totalPrice += Number(date.price);
				if (date.waitList) waitList = true;
				if (!date.holdAvailable) noHold = true;

				order.ratePlanId = date.ratePlanId;
				order.roomTypeId = date.roomTypeId;
			});

            if (dates && dates.length) {
			    $('subtotal').show().getElement('.value').set('text', (dates[0].price * order.quantity).formatCurrency());
            } else {
                $('subtotal').hide();
            }
				
			if (noHold) {
				scope.holdButton.hide();
			} else {
				scope.holdButton.show();
			}
			
			
			scope.whatsThisStandbyButtonDoLink.hide();
			if (waitList) {
				scope.bookButton.set('text', 'Go on Standby').addClass('wait');
				scope.whatsThisStandbyButtonDoLink.show();
				scope.holdButton.hide();
			} else {
				scope.bookButton.set('text', 'Select').removeClass('wait');
				if(!noHold) {
					scope.holdButton.show();
				}
			}

			scope.currentOrder = order;

		});
		
		if (!this.isPackage) {
			this.calendar.minLength = this.packageRestrictions.min_stay || 1;
			this.calendar.maxLength = this.packageRestrictions.max_stay == 0 ? 21 : Math.min(this.packageRestrictions.max_stay, 21);
		}
		
		this.calendar.render();
	}
	
});

var DecisionModal = new Class({
	
	Implements: [Events, Options],
	
	initialize: function (attachTo, message) {
		this.attachTo = attachTo;
		
		this.overlay = new Element('div', {
			'class': 'overlay'
		});
		
		this.buttonContainer = new Element('div', {
			'class': 'button-container',
			'html': '<p class="message tenor">' + message + '</p>'
		});
		
		this.rootEl = new Element('div', {
			'class': 'decision-modal'
		}).adopt(
			this.overlay,
			this.messageEl,
			this.buttonContainer
		).inject(attachTo).hide();
	},
	
	addButton: function (name, callback) {
		return new Element('button', {
			'class': 'tenor',
			'type': 'button',
			'text': name
		}).addEvent('click', function () {
			this.hide();
			callback(arguments);
		}.bind(this)).inject(this.buttonContainer);
	},
	
	hide: function () {
		// Fade out overlay
		this.overlay.tween('opacity', 0);
		
		// Slide out buttons
		this.buttonContainer.tween('margin-bottom', -(this.buttonContainer.getSize().y)).get('tween').chain(function () {
			this.rootEl.destroy();
		}.bind(this));
		
	},
	
	show: function () {
		
		this.cancelButton = this.addButton('Cancel', function () {
			this.fireEvent('cancel');
		}.bind(this)).addClass('cancel');
		
		this.rootEl.show();
		this.buttonContainer.setStyle('margin-bottom', -(this.buttonContainer.getSize().y));
		
		// Fade in overlay
		if (Browser.ie6 || Browser.ie7) {
			this.rootEl.setStyle('height', this.attachTo.getSize().y);
		}
		
		this.overlay.set('tween', {
			duration: 150
		}).fade('hide').fade(0.5);
		
		// Slide in buttons
		this.buttonContainer.set('tween', {
			duration: 250
		}).tween('margin-bottom', 0);
	}
	
});

var OccupancyOptions = new Class({
	
	Implements: Events,
	
	initialize: function (rootEl, options) {
		this.rootEl = rootEl;
		
		this.rooms = new Dropdown(this.rootEl.getElement('.rooms select'));
		this.rooms.addEvent('change', function (numOfRooms) {
			this.updateGuestsDropDown(numOfRooms);
			this.fireEvent('numOfRoomsChange', numOfRooms);
		}.bind(this)).set('value', options.numOfRooms);
		
		this.guests = new Dropdown(this.rootEl.getElement('.guests select'));
		this.guests.addEvent('change', function (numOfGuests) {
			this.fireEvent('numOfGuestsChange', numOfGuests);
		}.bind(this)).set('value', options.numOfGuests);

		this.updateGuestsDropDown(options.numOfRooms);
	},
	
	rebuildGuests: function(optionsList) {
		var selectEl = this.rootEl.getElement('.guests select');
		selectEl.empty();
		for(var i=0 ; i < optionsList.length ; ++i) {
			var option = optionsList[i];
			var selectItemEl = new Element('option', {
				'value': option,
				'text': option
			});
			selectItemEl.inject(selectEl);
		}
		this.guests.rebuild();
	},
	
	getNumOfRooms: function () {
		return this.rooms.get('value').toInt();
	},
	
	setNumOfRooms: function (value) {
		this.updateGuestsDropDown(value);
		this.rooms.set('value', value);
	},
	
	updateGuestsDropDown: function(numOfRooms) {
		//bump up #guests to 2 if set to 1 and if #rooms is set to anything >= 2
		//also change options in #guests drop-down to 2,3,4,5,6,7,8
		var numOfGuests = this.getNumOfGuests();
		if(numOfRooms >= 2) {
			this.rebuildGuests([2,3,4,5,6,7,8]);
			if(numOfGuests == 1) {
				numOfGuests = 2;	
			}
			this.setNumOfGuests(numOfGuests);
		} else {
			//change options in #guests drop-down to 1,2,3,4
			this.rebuildGuests([1,2,3,4]);
			//bump #guests down to 2 if it's > 4
			if(numOfGuests > 4) {
				numOfGuests = 2;
			}
			this.setNumOfGuests(numOfGuests);
		}
	},
	
	getNumOfGuests: function () {
		return this.guests.get('value').toInt();
	},
	
	setNumOfGuests: function (value) {
		this.guests.set('value', value);
	}
	
});

var VoucherSelector = new Class({
	
	Extends: Fx.Accordion,
	
	initialize: function (attachTo, propertyId, eventId) {
		this.attachTo = attachTo;
		
		var voucherEls = this.attachTo.getElements('.voucher');
		this.ProductService = new ProductService();

		this.ProductService.getVouchersForItem({
			propertyId: propertyId,
			eventId: eventId,
			onSuccess: function(data){
				var vouchers = data;
				Object.each(vouchers, function (voucher) {
					var voucherEl = $('voucher-' + voucher.eventVoucherId);
					// expert mode checkout
					if (voucher.expertMode) {
						voucherEl.addClass('expert');
					}
					if (voucher.amountAvailable <= 0) {
						voucherEl.addClass('sold-out');
						if (voucherEl.hasClass('selected')) {
							voucherEl.removeClass('selected').addClass('sold-out-selected');
						}

						voucherEl.getElements('p.limit') ? voucherEl.getElements('p.limit').hide() : null;
						voucherEl.getElement('p.sold-out-text').show();

						// var soldOutCopy = new Element('div', {
						// 	'class': 'sold-out-copy',
						// 	'text': 'Sold Out'
						// });
						// soldOutCopy.inject(voucherEl, 'top');
					
					} else {
						// Update dropdown quantities
						var selectEl = voucherEl.getElement('select')
						var selectProxyEl = voucherEl.getElement('.select-proxy');
						
						var numOfAvailableVouchers = Math.min(Jetsetter.voucher.voucherRestrictionCount,5);
						
						if(numOfAvailableVouchers == 1) {
							voucherEl.getElement('.quantity').hide();
						} else {
							for (var i=1; i<=numOfAvailableVouchers; i++) {
								var optionEl = new Element('option', {
									'value': i,
									'text': i
								});
								optionEl.inject(selectEl);
							}
						}
					
						var dropdown = new Dropdown(selectEl, selectProxyEl);
						dropdown.addEvent('change', function (selectedValue) {
							this.updateOrderForm();
						}.bind(this));
						
						if (Browser.ie6 || Browser.ie7) {
							selectProxyEl.hide();
						}
						
						voucherEl.store('dropdown', dropdown);
					}	
					
					
					// Select first voucher
					this.selectVoucher(voucherEls[0]);
					setTimeout(function () {
						this.display(0);
					}.bind(this), 0);
					
				}, this);
			}.bind(this),
			onFailure: function(){

			}.bind(this)
		})
		
		// Accordion
		this.parent(voucherEls, this.attachTo.getElements('.collapsible'), {
			duration: 500,
			transition: Fx.Transitions.Quint.easeInOut,
			opacity: false,
			display: -1
		});
		
		this.addEvents({
			'background': function (toggler, element) {
				element.setStyles({
					'overflow': 'hidden'
				});
				
				if (Browser.ie6 || Browser.ie7) {
					element.getElement('.select-proxy').hide();
				}
			},
			'complete': function () {
				this.updateOrderForm();
				
				var accordionEl = this.elements[this.previous]
				accordionEl.setStyle('overflow', 'visible');
				
				if (Browser.ie6 || Browser.ie7) {
					accordionEl.getElement('.select-proxy').show();
				}
				
			}
		});		
		
		// Vouchers
		this.attachTo.addEvents({
			'click:relay(.voucher)': function (event, element) {
				if (!element.hasClass('selected')) {
					this.selectVoucher(element);
					if(JETSETTER_GTM_DATA) {
						JETSETTER_GTM_DATA.push({
							'event': 'voucherSelected'
						});
					}
				}
			}.bind(this),
			'mouseover:relay(.voucher)': function (event, element) {
				element.addClass('hover');
			}.bind(this),
			'mouseout:relay(.voucher)': function (event, element) {
				element.removeClass('hover');
			}.bind(this)
		});
		
		// Submit button
		this.orderForm = this.attachTo.getElement('#order form');
		
		this.bookButton = this.orderForm.getElement('.book-button');
		this.bookButton.addEvent('click', function (event) {
            _gaq.push(['_trackEvent', 'PDP', 'Book', 'click']);

            this.bookButton.set('disabled', true).addClass('disabled');
			if (!this.submitOrder('order')) {
                _gaq.push(['_trackEvent', 'PDP', 'Book', 'fail']);
                this.bookButton.set('disabled', false).removeClass('disabled');
			}
		}.bind(this));
		
		this.standbyButton = this.orderForm.getElement('.standby-button');
		this.standbyButton.addEvent('click', function (event) {
            _gaq.push(['_trackEvent', 'PDP', 'Standby', 'click']);

            this.standbyButton.set('disabled', true).addClass('disabled');
			if (!this.submitOrder('standby')) {
                _gaq.push(['_trackEvent', 'PDP', 'Standby', 'fail']);
                this.standbyButton.set('disabled', false).removeClass('disabled');
			}
		}.bind(this));
		
	},
	
	selectVoucher: function (element) {
		this.deselectVoucher(this.selectedElement);
		
		element.addClass('selected');
		if (element.hasClass('sold-out')) {
			element.addClass('sold-out-selected');
		}
		
		this.selectedElement = element;
		
	},
	
	deselectVoucher: function (element) {
		if (element) {
			element.removeClass('selected').removeClass('sold-out-selected');
		}
	},
	
	getSelectedElement: function () {
		return this.selectedElement;
	},
	
	getSelectedPrice: function () {
		return this.selectedElement.getElement('.price').get('text').toCurrencyValue();
	},
	
	getSelectedQuantity: function () {
		return (this.selectedElement.retrieve('dropdown') && this.selectedElement.retrieve('dropdown').get('value')) ? this.selectedElement.retrieve('dropdown').get('value') : 1;
	},
	
	updateOrderForm: function () {
		this.resetOrderForm();
		
		if (this.selectedElement.hasClass('sold-out')) {
			//this.orderForm.addClass('standby');
			//this.standbyButton.set('disabled', false);
			this.bookButton.hide();
		} else {
			//this.orderForm.removeClass('standby');
			this.bookButton.show();
			this.bookButton.set('disabled', false);
		}
		
		// Animate price
		var subtotalEl = this.attachTo.getElement('#subtotal .value');
		subtotalEl.removeClass('upd');
		
		var priceFx = new Fx.PriceTween(subtotalEl);
		
		var totalPrice = this.getSelectedPrice() * this.getSelectedQuantity();
		var discountedPrice = Jetsetter.promoDiscount ? Jetsetter.promoDiscount.getDiscountedTotal() : totalPrice;
		priceFx.start(discountedPrice).chain(function() {
			Jetsetter.promoDiscount && Jetsetter.promoDiscount.fireEvent('update', 'subtotal');
		});
	},
	
	resetOrderForm: function () {
		this.orderForm.removeClass('hold').removeClass('standby');
		this.bookButton.set('disabled', true);
	},
	
	submitOrder: function () {
		
		if (Jetsetter.user.isAnonymous && Jetsetter.user.isPriceHidden) {
			Jetsetter.registrationModal.show();
			return false;
		}

		var selectedVoucherElement = this.getSelectedElement();

		// voucher-12345
		var selectedVoucherId = selectedVoucherElement.get('id').substr(8);
		var numOfVouchers = (this.getSelectedQuantity()) ? this.getSelectedQuantity() : 1;
		
		if (selectedVoucherElement.hasClass('sold-out')) {
			// console.log('standby order', selectedVoucherId, numOfVouchers)
            return false;
		} else {
			Jetsetter.secureLogin({
				onCloseEnd: function () {
					this.bookButton.set('disabled', false);
				}.bind(this),
				onLogin: function () {
                    _gaq.push(['_trackEvent', 'PDP', (arguments[0] == 'standby' ? 'Standby' : 'Book'), 'success']);
                    setTimeout(function() {
                        if (selectedVoucherElement.hasClass('expert')) {
                            location = Jetsetter.SECURE_HOST + '/checkout?voucher-id=' + selectedVoucherId + '&quantity=' + numOfVouchers + '&mode=expert&nm=PDP';
                        } else {
                            location = Jetsetter.SECURE_HOST + '/checkout?voucher-id=' + selectedVoucherId + '&quantity=' + numOfVouchers + '&mode=voucher&nm=PDP';
                        }
                    }, 500);
				}
			});
		}
		
		return true;
	}
	
});
var Ptp = new Class({
	
	Extends: Modal,
	
	initialize: function (attachTo, options) {
		this.parent(Object.merge(options || {}, {
			id: 'ptp-modal',
			dismissable: false
		}));
		
		this.buildHtml();
		
		this.addEvent('showEnd', function() {		

			
			$('close').addEvent('click', function(event) {
				event.stop();
				this.close();
			}.bind(this));
			
			$('submit').addEvent('click', function(event) {
				event.stop();
				
				var yourNameEl = $('your-name');
				var yourName = yourNameEl.get('value').trim();
				
				var emailAddressEl = $('email-address');
				var emailAddress = emailAddressEl.get('value').trim();
				
				var phoneNumberEl = $('phone-number');
				var phoneNumber = phoneNumberEl.get('value').trim();
				
				var numberOfTravelersEl = $('number-of-travelers');
				var numberOfTravelers = numberOfTravelersEl.get('value').trim();
				
				var dateRangeOfTravelEl = $('date-range-of-travel');
				var dateRangeOfTravel = dateRangeOfTravelEl.get('value').trim();

				var comments = $('comments').get('value').trim();
				
				var tccBoxEl = $('tcc-box');
				
				var bad = false;
				if (yourName.length == 0) {
					yourNameEl.addClass('error');
					bad = true;
				} else {
					yourNameEl.removeClass('error');
				}
				
				if (emailAddress.length == 0) {
					emailAddressEl.addClass('error');
					bad = true;
				} else {
					emailAddressEl.removeClass('error');
				}
				
				if (tccBoxEl.checked) {
					tccBoxEl.getParent().getParent().removeClass('error');
				} else {
					tccBoxEl.getParent().getParent().addClass('error');
					bad = true;
				}
				
				if (bad) {
					return;
				}
				
				var scope = this;
				var propertyService = new PropertyService();
				propertyService.addTripLeadGen({
					'propertyId': this.options.propertyId,
					'name': yourName,
					'email': emailAddress,
					'phone': phoneNumber,
					'numTravelers': numberOfTravelers,
					'dateRangeOfTravel': dateRangeOfTravel,
					'comments': comments,
					onSuccess: function() {
						scope.showSuccess();
						_gaq.push(['_trackEvent', 'LeadGen', 'ContactInfo', 'Submission']);
					},
					onFailure: function() {
						// Do nothing
					}
				});
			}.bind(this));
		
		}.bind(this));
	},
	
	showSuccess: function() {
		this.canvas.getElementById('ptpm2a').set('html', '<span>Thank you</span>');
		this.canvas.getElementById('ptp-form').hide();
		this.canvas.getElementById('ptp-ty').show();
	},
	
	buildHtml: function() {
		var data = {
			'propertyId': this.options.propertyId,
			'eventId': this.options.eventId
		},
		source = '<div id="ptpm1">\
			<div id="ptpm2">\
				<div id="ptpm2a">\
					<span id="title">Start Your Journey</span>\
				</div>\
				<div id="close"></div>\
			</div>\
			<div id="ptp-form">\
				<div id="ptpm3">\
					<div id="ptpm3a">\
						<span>Your name</span>\
						<span>Email address</span>\
						<span>Phone number</span>\
						<span>Number of travelers</span>\
						<span>Date range of travel</span>\
						<span>Comments</span>\
					</div>\
					<div id="ptpm3b">\
						<input type="input" id="your-name" max="256" />\
						<input type="input" id="email-address" max="256" />\
						<input type="input" id="phone-number" max="25" />\
						<input type="input" id="number-of-travelers" max="3" />\
						<input type="input" id="date-range-of-travel" max="256" />\
						<textarea name="comments" id="comments" max="800"></textarea>\
						<div id="ptp-tcc"><div id="ptp-tcc-box"><input type="checkbox" id="tcc-box" value="" /></div> <div id="ptp-tcc-copy">By clicking Contact me, I agree to Jetsetter\'s Terms of Service and give my consent to contacted by Jetsetter\'s staff and/or third-party partners.</div></div>\
					</div>\
				</div>\
				<div id="ptpm4">\
					<div id="submit"><span>Contact Me</span></div>\
				</div>\
			</div>\
			<div id="ptp-ty" style="display:none">\
				<p>Thank you for your inquiry. You will be contacted from advice@jetsetter.com within 24 to 48 hours.</p>\
			</div>\
		</div>',
		template = Handlebars.compile(source);		
		this.canvas.set('html',template(data));
	}
});
var VideoConsultModal = new Class({

	Extends: Modal,
	
	initialize: function (options) {
		this.parent(Object.merge(options || {}, {
			id: 'video-consult-modal',
			dismissable: true
		}));

		this.buildHtml();
	},

	buildHtml: function(){
		var source = '<a class="close-modal close-btn">&#215;</a>\
					  <iframe src="http://jetsetter.herokuapp.com/new?url={{currentPage}}" height="630" width="600" scrolling="no"></iframe>',
			template = Handlebars.compile(source);

		this.canvas.set('html', template({currentPage: encodeURIComponent(window.location.href)}));
	}

})
/**
*	@class ShareModal
*	@author Marvin Tam
*	
*/

var ShareModal = new Class({
	
	Extends: Modal,
	
	initialize: function (options) {
		
		this.setOptions(options);
		this.parent({
			'id': 'share-modal',
			'class': 'tenor'
		});
		
		// Build property detail elements
		var propertyDetailsEl = new Element('div', {
			'class': 'property clearfix'
		}).adopt(
			new Element('img', {
				'src': Jetsetter.CDN_HOST + '/static/' + this.options.propertyImage,
				'class': 'fl',
				'width': 230,
				'height': 125,
				'alt': ''
			}),
			new Element('div', {
				'class': 'fl'
			}).adopt(
				new Element('h2', {
					'text': this.options.propertyName
				}),
				new Element('h4', {
					'text': this.options.propertyLocation
				}),
				new Element('p', {
					'text': this.options.expirationTime || ''
				})
			)
		);
		
		this.canvas.adopt(
			new Element('div', {
				'class': 'banner',
				'html': '<h2>' + this.options.bannerTitle + '</h2>'
			}),
			propertyDetailsEl
		);
		
		// Set float to shrink wrap div.property to find the width, then unset float
		// so that "margin: 0 auto" would work
		propertyDetailsEl.setStyle('float', 'left');
		setTimeout(function () {
			var propertyDetailsElWidth = propertyDetailsEl.getSize().x;
			var formElWidth = 770;
			propertyDetailsElWidth = (propertyDetailsElWidth > formElWidth) ? formElWidth : propertyDetailsElWidth;
			propertyDetailsEl.setStyles({
				'float': 'none',
				'width': propertyDetailsElWidth + 10
			});
		}, 0);
		
		
		// The invite form
		var inviteEmailForm = new InviteEmailForm(this.canvas, {
			'message': this.options.message,
			'requestParams': {
				'type': 'EmailInvite',
				'propertyId': this.options.propertyId,
				'saleId': this.options.saleId || null
			}
		});
		
		
		inviteEmailForm.addEvent('emailFieldAdd', function () {
			_gaq.push(['_trackEvent', 'Modal', 'Share', 'AddNewEmail-Failed']);
			this.setPosition();
		}.bind(this));
		
		inviteEmailForm.addEvent('submitStart', function () {
			_gaq.push(['_trackEvent', 'Modal', 'Share', 'Attempt-Send']);
		})
		
		inviteEmailForm.addEvent('invitesSent', function (numOfInvites) {
			GA.trackInvites(numOfInvites, 'share-modal');
			_gaq.push(['_trackEvent', 'Modal', 'Share', 'Send-Success']);
			
			Jetsetter.NotificationCenter.success({
				message: "Your invites have been sent."
			});

			this.close();
		}.bind(this));

		omniture.trackClickWithSiteSection('Email icon click');
		_gaq.push(['_trackEvent', 'Modal', 'Share', 'Opened']);
	}
	
});

var GalleryThumbs = new Class({

    Implements: [Events, Options],

    selectedThumbEl: null,

    initialize: function (rootEl, options) {
        this.setOptions(options);
        // Transitioning between groups of thumbs

        this.slideShow  = new SlideShow(rootEl.getElement('.thumbs'), {
            transition: 'pushLeft',
            autoplay: false,
            duration: 350
        });

        this.rootEl = rootEl.addEvents({
            'click:relay(.thumbs li)': function (event, element) {
                if (element.hasAttribute('data-index')) {
                    var index = element.get('data-index').toInt()
                    this.selectThumb(index);
                    this.fireEvent('thumbClick', [index, this.selectedThumbEl]);
                }
            }.bind(this)
        });

        // Inits first selected thumb
        this.selectThumb(0);
        this.selectedThumbEl = this.rootEl.getElement('.selected');

    },

    selectSection: function (index, options) {
        this.slideShow.show(index, options || {
            transition: (this.slideShow.index > index) ? 'pushRight' : 'pushLeft'
        });
        return this;
    },

    selectThumb: function (index) {
        this.thumbsPerSection = this.thumbsPerSection || this.rootEl.getElement('.thumbs ul').getChildren().length;
        this.selectSection(Math.floor(index/this.thumbsPerSection));

        if (this.selectedThumbEl) {
            this.selectedThumbEl.removeClass('selected');
        }
        this.selectedThumbEl = this.rootEl.getElement('li[data-index=' + index + ']').addClass('selected');

        return this;
    }

});

/**
 *  @class PdpGallery
 *  @author Chris Graves
 *  Gallery that can load and switch between different types of screens.
 */
var PdpGallery = new Class({

    Implements: [Events, Options],

    initialize: function (options) {
        this.fullView = options.gallery;

        // Don't init if no gallery images are available
        if (!this.fullView.getChildren().length) {
            return this;
        }

        // Thumbnails
        this.galleryThumbs = new GalleryThumbs(options.thumbs, {
            onThumbClick: function (index, element) {
                this.hasUserInteraction = true;
                this.slideshow.pause();
                this.selectScreenAtIndex(index);
            }.bind(this)
        });

        var shareContainer = options.container.getElement('.share-center-container');
        if (shareContainer) {
            this.shareCenterController = new Jetsetter.Controllers.ShareCenter({
                el: shareContainer
            });
        }

        // Gallery images
        this.slideshow = new SlideShow(this.fullView, {
            duration: 350,
            autoplay: true,
            transition: 'crossFade',
            onShow: function (data) {
                this._loadImage(data.next.element);
                this._loadImage(this._getNextSlide());

                this.galleryThumbs.selectThumb(data.next.index);

                this.shareCenterController && this.shareCenterController.calibrateIcons(data.next.index);

                ///this.fireEvent('show', data);
            }.bind(this)
        });

        this.images = this.initModalGalleryImages();

        this.hasUserInteraction = false;

        // Gallery navigation
        this.rootEl = options.container.addEvents({
            'click:relay(.thumbs .nav)': function(event, element){
                this.hasUserInteraction = true;
                this.slideshow.pause();
                if (element.hasClass('prev')) {
                    this.prevImage();
//                    omniture.trackClickWithSiteSection('gallery - left/right nav');
                } else {
                    this.nextImage();
//                    omniture.trackClickWithSiteSection('gallery - left/right nav');
                }
            }.bind(this),

            'click:relay(.cta-360)': function(event, element){
                this.hasUserInteraction = true;
                this.slideshow.pause();
                this._loadPano(element);
                omniture.trackClickWithSiteSection('gallery - rotate 360');
            }.bind(this),

            'click:relay(.full-area)': function(event, element){
                this.hasUserInteraction = true;
                this.slideshow.pause();
                event.preventDefault();
                omniture.trackClickWithSiteSection('Photo Gallery Click');
                _gaq.push(['_trackEvent', 'PDP', 'FulScreenGalleryButton', 'Clicked']);
                this.launchFullscreen(element);
            }.bind(this),

            'click:relay(li.pin)': function(event, element){
                this._onClickShareIcon('pinterest');
            }.bind(this),

            'click:relay(li.favs)': function(event, element){
                this._onClickShareIcon('jetsetter favorites');
            }.bind(this)
        });

        // Assign to a member property so that it can be referenced on removeEvent()
        this.keyboardNavHandler = function (event) {
            this.hasUserInteraction = true;
            switch (event.key) {
                case 'left':
                    this.prevImage();
                    break;
                case 'right':
                    this.nextImage();
                    break;
            }
        }.bind(this);

        if(this.slideshow.current.get('data-mediatype') === 'pano'){
            this._loadImage(this.slideshow.current);
        }

    },

    _onClickShareIcon: function(message){
        this.hasUserInteraction = true;
        this.slideshow.pause();
        omniture.trackClickWithSiteSection('gallery - social shares - ' + message);
    },

    selectScreenAtIndex: function (index, options) {
        if (this.slideshow.transitioning) {
            return;
        }

        this.shareCenterController && this.shareCenterController.calibrateIcons(index);

        this.slideshow.show(index, options);
    },

    showImageById: function (id) {
        var slide = this.fullView.getElement('[data-id=' + id +']'),
            index = this.slideshow.slides.indexOf(slide);

        this.selectScreenAtIndex(index, {
            transition: 'none'
        });
    },

    prevImage: function () {
        var index = this.slideshow.slides[this.slideshow.index - 1] ?
            this.slideshow.index - 1 :
            this.slideshow.slides.length - 1;

        this.selectScreenAtIndex(index);
    },

    nextImage: function () {
        var index = this.slideshow.slides[this.slideshow.index + 1] ?
            this.slideshow.index + 1 : 0;

        this.selectScreenAtIndex(index);
    },

    _getNextSlide: function () {
        var currentIndex = this.slideshow.index;
        return this.slideshow.slides[(currentIndex + 1) % this.slideshow.slides.length];
    },

    _loadImage: function (element) {
        if (!element.getElement('img') && (element.get('data-mediatype') === 'img' || element.get('data-mediatype') === 'pano') && !element.getElement('object')) {
            var extra = {};
            if (element.get('data-offset-y')) {
                extra.offsetY = parseInt(element.get('data-offset-y'), 10);
            };
            var imgEl = new Element('img', {
                'src': Jetsetter.CDN_HOST + "/static/" + Jetsetter.JetsetUtil.getDynamicCropUrl(element.get('data-path'), 1245, 490, Jetsetter.devicePixelRatio, extra),
                'width': 1245,
                'height': 490,
                'alt': element.get('data-alt')
            }).inject(element, 'top');
            element.removeProperty('data-src');
        }

        return this;
    },

    _loadPano: function(elem){
        var siblings = elem.getSiblings('img');
        if (siblings && siblings.length) {
            siblings[0].destroy();
        }

        var extra = {};
        if (elem.get('data-offset-y')) {
            extra.offsetY = parseInt(elem.get('data-offset-y'), 10);
        }

        var textures = elem.get('data-pano1') + ',' + elem.get('data-pano2'),
            swf = new Swiff(Jetsetter.CDN_HOST + '/static/images/pano/WebPano.swf?v=2', {
                width: 1245,
                height: 490,
                params: {
                    bgcolor: '#000000',
                    allowFullscreen: true,
                    wmode: 'opaque',
                    wMode: 'opaque'
                },
                vars: {
                    maxFOVUp: 20,
                    maxFOVDown: 20,
                    textures: textures,
                    startInertia: -15
                }
            });

        swf.inject(elem.getParent(), 'top');

        elem.destroy();
    },

    launchFullscreen: function(element){
        var index = element.get('data-index').toInt();

        // Full screen gallery
        this.modalGallery = new GalleryModal({
            title: Jetsetter.property.propertyName,
            byline: Jetsetter.property.propertyLocation,
            images: this.images,
            onClose: function () {
                // Make the pdp gallery match the last shown image
                // in the full screen gallery
                this.selectScreenAtIndex(this.modalGallery.slideShow.index, {
                    transition: 'none'
                });
            }.bind(this),
            onChange: function (index, imageId) {
                //NewTrackerCode
                Jetsetter.tracker.trackEvent({
                    'eventType': 'feature',
                    'key34': 'fullScreenInteraction',
                    'key38': imageId,
                    'key39': (index + 1)
                });
            },
            showPinIt: true
        });

        this.modalGallery.show(index);

        //NewTrackerCode
        Jetsetter.tracker.trackEvent({
            'eventType': 'feature',
            'key34': 'fullScreenView',
            'key38': element.getParent('li').get('data-id').toInt(),
            'key39': (index + 1)
        });
    },

    initModalGalleryImages: function() {
        var images = [],
            dynamicCropper = new DynamicCropperLinkGenerator(),
            property = Jetsetter.property;

        property.gallery.each(function (image, i) {
            if (image.type === 'image') {
                images.push({
                    id: 'media-' + i,
                    pageUrl: image.pageUrl,
                    publicUrl: image.publicUrl,
                    url: Jetsetter.CDN_HOST + '/' + dynamicCropper.generateLink(image.path, 1200, 600),
                    path : image.path,
                    pin: image.pin,
                    caption: image.caption,
                    title: property.propertyName,
                    type: 'img'
                });
            }

            if(image.type === 'panoramic') {
                images.push({
                    id: 'media-' + i,
                    pageUrl: image.pageUrl,
                    publicUrl: image.publicUrl,
                    caption: image.caption,
                    pano1: image.pano1,
                    pano2: image.pano2,
                    //url: image.thumb,
                    url: Jetsetter.CDN_HOST + '/' + dynamicCropper.generateLink(image.path, 1200, 600),
                    type: 'pano'
                })
            }
        });

        return images;
    }
});



var GalleryModal = new Class({
	
	Extends: Modal,
	
	options: {
		title: '',
		byline: '',
		images: [
			/*
			id: 0,
			caption: '',
			imageUrl: ''
			*/
		]
	},
	
	initialize: function (options) {
		this.parent({
			id: 'gallery-modal',
			overlayOpacity: 1,
			dismissable: false,
			minWidth: 1220
		});
		this.setOptions(options);
		
		this.addCloseButton();
		
		var imagesEl = new Element('ul', {
			'class': 'images'
		});
		
		// @TODO: maybe put these in a single container
		var dotsContainerEl = new Element('div');
		var previousEl = new Element('div', {
			'class': 'nav previous unselectable tenor',
			'html': '<a><span class="icon"></span> Previous</a>'
		});
		var nextEl = new Element('div', {
			'class': 'nav next unselectable tenor',
			'html': '<a>Next <span class="icon"></span></a>'
		});

		// Construct gallery
		this.options.images.each(function (image, index) {
			if(image.type === 'img'){
				var listItemEl = new Element('li', {
					'data-id': image.id,
                    'data-path' : image.path,
					'data-mediatype': 'img',
					'data-alt': image.title +': '+ image.caption
				}).adopt([
					new Element('div', {
						'class': 'caption tenor',
						'html': '<p>' + image.caption + '</p>'
					})
				]);
			}
			else if(image.type === 'pano' && Browser.Plugins.Flash && Browser.Plugins.Flash.version >= 9){
				var listItemEl = new Element('li', {
					'data-id': image.id,
					'data-mediatype': 'pano'
				}).adopt([
					new Element('div', {
						'class': 'pano-wrap',
						'data-pano1': Jetsetter.CDN_HOST + "/static/" + image.pano1,
						'data-pano2': Jetsetter.CDN_HOST + "/static/" + image.pano2
					}),
					new Element('div', {
						'class': 'caption tenor',
						'html': '<p>' + image.caption + '</p>'
					})

				]);
			}

			else if(image.type === 'pano' && (!Browser.Plugins.Flash || Browser.Plugins.Flash.version < 9)){
				var listItemEl = new Element('li', {
					'data-id': image.id,
					'data-src': image.thumb,
					'data-mediatype': 'img'
				}).adopt([
					new Element('div', {
						'class': 'caption tenor',
						'html': '<p>' + image.caption + ' (Flash Required)</p>'
					})
				]);
			}
			
			imagesEl.adopt(listItemEl);
		});
		
		
		var galleryDots = new GalleryDots(dotsContainerEl, {
			numOfDots: this.options.images.length,
			onChange: function (index) {
				this.slideShow.show(index);
			}.bind(this)
		});
		
		this.slideShow = new SlideShow(imagesEl, {
			onShow: function (data) {
				this._loadImage(data.next.element);
				this._loadImage(this._getNextSlide());

                this.shareCenterController && this.shareCenterController.calibrateIcons(data.next.index);

				galleryDots.select(data.next.index);
				
				this.fireEvent('change', [data.next.index, this._getCurrentImageId()]);
			}.bind(this)
		});

		
		this.rootEl = this.content.adopt([
			new Element('div', {
				'class': 'gallery'
			}).adopt([
				imagesEl,
				previousEl,
				nextEl,
				dotsContainerEl
			]),
			new Element('div', {
				'class': 'meta'
			}).adopt([
				new Element('h1', {
					'class': 'title tenor',
					'text': this.options.title
				}),
				new Element('p', {
					'class': 'byline',
					'text': this.options.byline
				})
			]),
            new Element('div', {
                'class' : 'share-center-container'
            })
		]).addEvents({
			'click:relay(.previous)': function () {
				this.slideShow.show('previous');
			}.bind(this),
			'click:relay(.next)': function () {
				this.slideShow.show('next');
			}.bind(this),
			
			'mouseover:relay(.gallery)': function (event, element) {
				this._fadeIn(dotsContainerEl);
				
				this._fadeIn(previousEl);
				this._fadeIn(nextEl);
				
			}.bind(this),
			'mouseout:relay(.gallery)': function (event, element) {
				this._fadeOut(dotsContainerEl);
				
				this._fadeOut(previousEl);
				this._fadeOut(nextEl);
			}.bind(this)
		});

        var shareCenterContainer = this.rootEl.getElement('.share-center-container');
        this.shareCenterController = new Jetsetter.Controllers.ShareCenter({
            el: shareCenterContainer
        });
		
		// Hide nav elements on load
		this.rootEl.getElements('.nav').each(function (element) {
			element.get('tween').set('opacity', 0);
			element.setStyle('visibility', 'visible');
		});
		dotsContainerEl.setStyle('visibility', 'visible').get('tween').set('opacity', 0);
		
		
		this._onKeyUp = function (event) {
			switch (event.key) {
				case 'left':
					this.slideShow.show('previous');
					break;
				case 'right':
					this.slideShow.show('next');
					break;
			}
		}.bind(this);
		
		//for windows clients not to double bubble the event and close the modal
		this.rootEl.addEvent('keyup:relay(object)',function(e){
			e.stop();
		});

	},
	
	_fadeIn: function (element) {
		element.set('tween', {
			duration: 300,
			transition: Fx.Transitions.Quint.easeOut
		})
		.tween('opacity', 1);
		return this;
	},
	
	_fadeOut: function (element) {
		element.set('tween', {
			duration: 300,
			transition: Fx.Transitions.Quint.easeOut
		})
		.tween('opacity', 0)
		.get('tween').chain(function () {
			element.setStyle('visibility', 'visible')
		});
		return this;
	},
	
	_loadImage: function (element) {

        var src;
        if (element.get('data-path')) {
            src = Jetsetter.CDN_HOST + "/static/" + Jetsetter.JetsetUtil.getDynamicCropUrl(element.get('data-path'), 1200, 600, Jetsetter.devicePixelRatio || 1);
        }

		if (src && element.get('data-mediatype') === 'img') {
			var imgEl = new Element('img', {
				'width': 1200,
				'height': 600,
				'src': src,
				'alt': element.get('data-alt')
			}).inject(element, 'top');
			element.removeProperty('data-path');
		}
		
		else if(element.get('data-mediatype') === 'pano' && !element.getElement('object')){
			var panoDiv = element.getElement('.pano-wrap'),
				textures = panoDiv.get('data-pano1') + ',' + panoDiv.get('data-pano2'),
				swf = new Swiff(Jetsetter.CDN_HOST + '/static/images/pano/WebPano.swf?v=2', {
				width: 1200,
				height: 600,
				params: {
					bgcolor: '#000000',
					allowFullscreen: true,
					wmode: 'opaque',
					wMode: 'opaque'
				},
				vars: {
					maxFOVUp: 20,
					maxFOVDown: 20,
					textures: textures,
					fullscreenButton: true,
					startInertia: -15
				}
			});

			swf.inject(panoDiv);
		}
				
		return this;
	},

	_getNextSlide: function () {
		var currentIndex = this.slideShow.index;
		return this.slideShow.slides[(currentIndex + 1) % this.slideShow.slides.length];
	},
	
	_getCurrentImageId: function () {
		return this.slideShow.current.get('data-id').toInt();
	},
	
	toElement: function () {
		return this.rootEl;
	},
	
	show: function (index) {
		this.parent();
		
		// Load image manually because slideShow.onShow won't fire
		// if the requested and initial index is the same
		if (this.slideShow.index === index) {
			this._loadImage(this.slideShow.current);
		} else {
			this.slideShow.show(index, {
				transition: 'none'
			});
		}
		
		// Preload the next image
		this._loadImage(this._getNextSlide());
		
		document.addEvent('keyup', this._onKeyUp);
		
		return this;
	},
	
	close: function () {
		this.parent();
		
		this.fireEvent('close', this._getCurrentImageId());
		
		document.removeEvent('keyup', this._onKeyUp);
	}
	
});

var GoogleMaps = new Class({
	
	Implements: Options,
	
	options: {
		latitude: '40.727019100124934',
		longitude: '-74.038931884375',
		zoomLevel: 12,
		marker: {
			title: '',
			latitude: '40.727019100124934',
			longitude: '-74.038931884375',
			imageUrl: Jetsetter.CDN_HOST + '/static/images/layout/map_marker.png'
		}
	},
	
	map: null,
	
	initialize: function (rootEl, options) {
		this.rootEl = rootEl;
		this.setOptions(options);
		
		this.rootEl.addEvent('mousedown', function (event) {
			event.stop();
			this.enableScroll();
		}.bind(this));
		
		
		if (window.google && google.maps) {
			this.loadMap();
		} else {
			// Async script callback
			GoogleMaps.loadMap = this.loadMap.bind(this);
			
			var scriptEl = document.createElement('script');
			scriptEl.async = true;
			scriptEl.src = 'http://maps.google.com/maps/api/js?sensor=false&callback=GoogleMaps.loadMap' +
				'&client=' + Jetsetter.mapKey +
                '&channel=jetsetter.desktop';
			document.body.appendChild(scriptEl);
		}
	},
	
	loadMap: function () {
		// Init map
		var latlng = new google.maps.LatLng(this.options.latitude, this.options.longitude);
		this.map = new google.maps.Map(this.rootEl, {
			zoom: this.options.zoomLevel,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			scrollwheel: false
		});
		
		// Set property location marker on the map
		var markerImage = new google.maps.MarkerImage(this.options.marker.imageUrl);
		var markerLatLng = new google.maps.LatLng(this.options.marker.latitude, this.options.marker.longitude);
		var marker = new google.maps.Marker({
			position: markerLatLng,
			map: this.map,
			title: this.options.marker.title
		});
		marker.setIcon(markerImage);
	},
	
	enableScroll: function () {
		this.map.setOptions({
			scrollwheel: true
		});
		
		// Disable map scrolling if interacted outside the map
		document.addEvent('mousedown:once', this.disableScroll.bind(this));
		window.addEvent('scroll:once', this.disableScroll.bind(this));
		
		return this;
	},
	
	disableScroll: function () {
		this.map.setOptions({
			scrollwheel: false
		});
		
		return this;
	}
	
});


var Comments = new Class({
	
	Implements: Options,
	
	initialize: function (attachTo, options) {
		this.setOptions(options);
		
		var scope = this;
		
		this.wrapper = attachTo;
		this.list = attachTo.getElement('ul');
		this.moreLink = attachTo.getElement('#more-comments');

		this.moreLink && this.moreLink.getElement('a').addEvent('click', function () {
			scope.get();
			return false;
		});

		this.comments = [];

		this.list.getElements('li').each(function(comment, i) {
			if(!comment.hasClass('reply')){
				scope.comments.push(comment);
			}
		});

		this.start = null;
		this.limit = 10;
		

		// Post comment box
		// @TODO: might make more sense to init this in a separate class
		this.postCommentFormEl = $('post-comment').addEvent('submit', function (event) {
			event.preventDefault();

			if (Jetsetter.user.isAnonymous) {
				Jetsetter.registrationModal.show();
			} else {
				scope.submit();
			}
		});
		
		this.postCommentButtonEl = this.postCommentFormEl.getElement('button[type=submit]').set('disabled', false);

		attachTo.getElement('textarea').addEvent('keypress', function(event){
			switch (event.key) {
				case 'backspace':
				case 'delete':
					return true;
			}

			return this.get('value').length < this.get('_maxlength');
		}).addEvent('change', function (event) {
			this.set('value', this.get('value').substring(0, this.get('_maxlength')));
		});

	},

	get: function() {
		var scope = this;
		new CommentService().getCommentsByPropertyId({
		    propertyId: this.options.propertyId,
		    eventId: this.options.eventId,
		    offset: this.comments.length,
		    limit: this.limit,
		    onSuccess: function(data){
		        // If there are no more comments to show
		        if (Jetsetter.totalNumOfComments <= scope.comments.length + scope.limit) {
		        	scope.moreLink.hide();
		        	if (Jetsetter.totalNumOfComments == 0 && scope.comments.length == 0) {
		        		var postCommentEl = scope.wrapper.getElement('a.post-comment');
		        		postCommentEl && postCommentEl.hide();
		        		return;
		        	}
		        } else {
		        	scope.moreLink.show();
		        }
		        
		        scope.buildComments(data);
		    },
		    onFailure: function(){
		        
		    }
		})
	},

	buildComments: function(comments, isReply) {
		for (var i = 0; i < comments.length; i++) {
			var comment = comments[i];
			
			var reply = isReply;
			var fbid = comment.authorFacebookId ? comment.authorFacebookId : null;
			
			var commentEl = new Element('li', {
				'class': 'comment'
			});
			
			if (reply) {
				commentEl.addClass('reply');
			}
			
			var imageUrl = (fbid) ?
				'https://graph.facebook.com/'+ fbid +'/picture' : 
				Jetsetter.CDN_HOST + '/static/images/layout/quote-square.png';
			
			new Element('img', {
				'width': 50,
				'height': 50,
				'src': imageUrl
			}).inject(commentEl);
			
			
			var paragraphs = comment.text.split('\n');
			new Element('blockquote', {
				'html': '<p>' + paragraphs.join('</p><p>') + '</p>'
			}).inject(commentEl);
			
			new Element('cite', {
				'html': '<span class="name">' + (comment.authorName == null ? 'Anonymous User' : comment.authorName) + '</span> '
			}).adopt(
				new Element('span', {
					'class': 'time',
					'title': new Date(comment.submitted * 1000).format('long'),
					'html': moment.unix(comment.submitted).fromNow()
				})
			).inject(commentEl);
			
			if (reply) {
				new Element('div', {
					'class': 'reply-indicator'
				}).inject(commentEl);
			}
			
			if (!reply) {
				this.comments.push(commentEl);
			}
			
			commentEl.inject(this.list);
			
			if (comment.replies) {
				this.buildComments(comment.replies, true);
			}
		}
	},

	submit: function () {
		if (this.postCommentFormEl.getElement('textarea[name="text"]').get('value').length < 3) {
			return false;
		}
		
		Jetsetter.secureLogin({
			onLogin: function () {
				this.postCommentButtonEl.set('disabled', true);
				
				new CommentService().addComment({
					eventId: this.options.eventId,
					propertyId: this.options.propertyId,
					text: this.postCommentFormEl.toQueryObject().text,
					onSuccess: function(data){
						var wrapper = new Element('div', {
							'id': 'comment-submitted',
							'class': 'shaded'
						});
						
						new Element('h3', {
							html: 'Your comment has been submitted!'
						}).inject(wrapper);
						
						new Element('p', {
							html: 'We&rsquo;ll review your submission before publishing it, so it won&rsquo;t be visible right away.'
						}).inject(wrapper);
						
						$$('a[href$="post-comment"]').hide();
						
						wrapper.replaces($('post-comment'));
					},
					onFailure: function(err){
						new NotificationModal('An internal error has occured', 'error').show();
					}
				})
			}.bind(this),
			'access': 'insecure',
			'dismissOnLogin': true
		})
		
	}
});

var Reviews = new Class({
	
	Implements: Options,
	
	options: {
		ignoreEventSpecific: false
	},
	
	initialize: function (jetsetterReviewsEl, tripAdvisorReviewsEl, options) {
		this.setOptions(options);

        this.tripAdvisorReviewsEl = tripAdvisorReviewsEl;
        this.jetsetterReviewsEl = jetsetterReviewsEl;

        this.reviews = [];

        this.tabsEl = $('review-type-tabs');
        this.tabsContentEl = $('review-type-content');

        this._initializeTabs();
        this._initializeTripAdvisor();
        this._initializeJetsetter();

		this.start = null;
		this.limit = 10;
	},

    _initializeTabs: function() {

        // show first section by default
        this.tabsContentEl.getElements('.content-section')[0].show();

        if (!this.tabsEl) {
            return false;
        }

        this.tabsEl.getElements('li')[0].addClass('selected');

        this.tabsEl.addEvents({
            'click:relay(li)' : function(event, elem) {
                event.stop();
                var a = elem.getElement('a');
                var href = a.get('href');
                this.openTab(href);
                if (href.indexOf('tripadvisor') > -1) {
                    omniture.trackClickWithSiteSection('Tab Reviews - Tab Tripadvisor Reviews click');
                } else {
                    omniture.trackClickWithSiteSection('Tab Reviews - Tab Jetsetter Member Reviews click');
                }
            }.bind(this)
        });

    },

    openTab: function(id) {
        if (this.tabsEl) {
            this.tabsEl.getElements('li').removeClass('selected');
            this.tabsEl.getElement('a[href='+id+']').getParent('li').addClass('selected');
        }
        this.tabsContentEl.getElements('.content-section').hide();
        var el = $$(id);
        if (el) {
            el.show();
        }
    },

    _initializeJetsetter: function() {
        if (!this.jetsetterReviewsEl) {
            return false;
        }
        var attachTo = this.jetsetterReviewsEl;
        this.wrapper = attachTo;
        this.list = attachTo.getElement('ul');
        this.moreLink = attachTo.getElement('#more-reviews');

        this.moreLink && this.moreLink.getElement('a').addEvent('click', function () {
            this.fetchJetsetterReviews();
            return false;
        }.bind(this));

        this.wrapper.addEvent('click:relay(.was-helpful a)', function (event, element) {
            event.preventDefault();
            var reviewId = element.get('data-id');
            new Element('span', {'html':'Thank you for your feedback.'}).replaces(element).highlight('#ddd');

            new ReviewService().reviewWasHelpful({
                reviewId: reviewId,
                onSuccess: function(){

                },
                onFailure: function(){

                }
            })
        });

        this.list.getElements('li').each(function(review, i) {
            this.reviews.push(review);
        }.bind(this));
    },

    _initializeTripAdvisor: function() {
        var container = this.tripAdvisorReviewsEl;
        if (container) {
            container.addEvents({
                'click:relay(.show-full-review)' : function(event, elem) {
                    event.stop();
                    var reviewText = elem.getParent('.review-text');
                    var fullText = reviewText.get('data-full-text');
                    reviewText.set('html', fullText);
                },
                'click:relay(.read-all-reviews)' : function(event, elem) {
                    event.stop();
                    window.open(elem.get('href') + "#REVIEWS", 'ta-reviews', 'height=735,width=1000,toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1');
                    omniture.trackClickWithSiteSection('Tab Reviews - Tab Tripadvisor Reviews - Read all reviews click');
                }
            });

            $$('.trip-rating.badge').addEvents({
                'click' : function(event, elem) {
                    if (!this.tripAdvisorReviewsEl) { return; }
                    this.openTab('#tripadvisor-reviews');
                    omniture.trackClickWithSiteSection('Tab Overview - TA read reviews click');

                }.bind(this)
            });

            $$('.reviews.badge').addEvents({
                'click' : function(event, elem) {
                    if (!this.jetsetterReviewsEl) { return; }
                    this.openTab('#jetsetter-reviews');
                    omniture.trackClickWithSiteSection('Tab Overview - JS read reviews click');
                }.bind(this)
            });
        }
    },

	fetchJetsetterReviews: function() {
		new ReviewService().getReviewsByPropertyId({
			eventId: this.options.eventId,
			propertyId: this.options.propertyId,
			offset: this.reviews.length,
			limit: this.limit,
			ignoreEventSpecific: this.options.ignoreEventSpecific,
			onSuccess: function(reviews) {
				// If there are no more reviews to show
				if (Jetsetter.totalNumOfReviews <= this.reviews.length + this.limit) {
					this.moreLink.hide();
				} else {
					this.moreLink.show();
				}

				this.buildJetsetterReviews(reviews);
            }.bind(this),
			onFailure: function(){
			}
		});
	},

    // jetsetter reviews
	buildJetsetterReviews: function(reviews) {
		for (var i = 0; i < reviews.length; i++) {
			
			var review = reviews[i];
			
			var fbid = review.authorFacebookId ? review.authorFacebookId : null;
			
			var reviewEl = new Element('li', {
				'class': 'review'
			});
			
			var imageUrl = (fbid) ?
				'https://graph.facebook.com/'+ fbid +'/picture' : 
				Jetsetter.CDN_HOST + '/static/images/layout/quote-square.png';
			
			new Element('img', {
				'width': 50,
				'height': 50,
				'alt': '',
				'src': imageUrl
			}).inject(reviewEl);
			
			var blockquote = new Element('blockquote', {
				'html': '<div class="notch"></div>'
			});

			if (review.whatILoved) {
				var whatILovedParagraphs = review.whatILoved.split('\n');
				new Element('div', {
					'class': 'review-section',
					'html': '<h3>What I liked</h3>' + '<p>' +  whatILovedParagraphs.join('</p><p>') + '</p>'
				}).inject(blockquote);
			}
			
			if (review.whatToKnow) {
				var whatToKnowParagraphs = review.whatToKnow.split('\n');
				new Element('div', {
					'class': 'review-section last',
					'html': '<h3>What I disliked</h3>' + '<p>' +  whatToKnowParagraphs.join('</p><p>') + '</p>'
				}).inject(blockquote);
			}

			new Element('div', {
				'class': 'review-content'
			}).adopt(
				blockquote,
				new Element('cite', {
					'html': '<span class="name">' + (!review.authorName ? 'Anonymous User' : review.authorName) + '</span> '
				}).adopt(
					new Element('span', {
						'class': 'time',
						'title': moment(review.submitted, 'X').format('MMMM M, YYYY HH:mm'),
						'html': moment(review.submitted, 'X').fromNow()
					})
				)
			).inject(reviewEl);
			
			
			
			new Element('div', {
				'class': 'was-helpful'
			}).adopt(
				new Element('a', {
					'class': 'action',
					'html': 'This was helpful',
					'data-id': review.id
				})
			).inject(reviewEl);
			
			this.reviews.push(reviewEl);
			
			reviewEl.inject(this.list);
			
		}
	},
	
	reviewWasHelpful: function(review) {
		alert(review.reviewCreatedDisplay);
	}
});

var AddFavorite = new Class ({

	Implements: [Options, Events],

	options: {
		reload: false
	},

	initialize: function (rootEl, options) {
		this.setOptions(options);
		this.rootEl = rootEl;
		this.property = this.rootEl.get('data-property');
		this.showTooltip = true;
		this.textEl = this.rootEl.getElement('.text') || this.rootEl;

        this.favoritesService = (options && options.favoritesService) || new FavoritesService();

		this._toDefaultState();

		if (Cookie.read('j_cli') && JSON.decode(Base64.decode(Cookie.read('j_cli')))) {
			var customListIds = JSON.decode(Base64.decode(Cookie.read('j_cli')));
			if (customListIds && customListIds.propertyId && _.indexOf(customListIds.propertyId, parseInt(this.property)) != -1) {
				this._toAddedState();
			}
		}

		var self = this;

		self.rootEl.addEvent('click', function() {
			self.toggleFav();
		});

	},

	_toDefaultState: function () {
		this.rootEl.removeClass('add-to-favs-added');
		this.textEl.set('html', '<span class="icon icon-favs"></span>' + Locale.get('Copy.pdp-add-to-favorites'));
		return this;
	},

	_toAddedState: function () {
		this.rootEl.addClass('add-to-favs-added');
		this.textEl.set('html', '<span class="icon icon-favs"></span>' + Locale.get('Copy.pdp-favorite'));
		return this;
	},

	addFav: function () {
		Jetsetter.secureLogin({
			dismissOnLogin: true,
            access: 'secure',
            forceScreen: 'SecureLogin',
			onCloseEnd: function () {
				
 			},
 			onLogin: function () {
                this.favoritesService.add({
                    guid : Jetsetter.user.guid,
                    id   : this.property,
                    onSuccess: function(data) {
                        this.rootEl.set('data-favorite-id', data.id);
                        this._toAddedState();
                        try {
                            var cookieValue = this._getCookieValue();
							Cookie.write('j_cli', Base64.encode(JSON.encode({
                                show        : (cookieValue.show || 0) + 1,
                                propertyId  : (cookieValue.propertyId || []).concat([data.product.id])
                            })), {
								domain: Jetsetter.cookieDomain,
								path: '/',
								duration: 365
							});
                        } catch (e) {

                        }

                        if (this.options.reload) {
                            window.location.reload();
                        } else {
                            Jetsetter.NotificationCenter.success({
                                message: 'Property added to favorites.'
                            });
                        }
                    }.bind(this),
                    onFailure: function() {
                        Jetsetter.NotificationCenter.error({
                            message: 'Uh oh, something went wrong.',
                            cta: 'Try Again?',
                            onCtaClick: function(){
                                this.addFav();
                            }.bind(this)
                        });
                    }.bind(this)
                });

				omniture.trackClickWithSiteSection('Add to Favorites click');
				_gaq.push(['_trackEvent', 'Favorites', 'Add', 'Click']);
 			}.bind(this)
		});
	},

	removeFav: function () {

        this.favoritesService['delete']({
            id   : this.rootEl.get('data-favorite-id'),
            guid : Jetsetter.user.guid,
            onSuccess: function(data) {
                var cookieValue = this._getCookieValue();
                Cookie.write('j_cli', Base64.encode(JSON.encode({
                    show       : cookieValue.show ? cookieValue.show - 1 : 0,
                    propertyId : _.filter(cookieValue.propertyId || [], function(i) { return i != data.product.id; })
                })), {
                    domain: Jetsetter.cookieDomain,
                    path: '/',
                    duration: 365
                });

                this._toDefaultState();

                if(this.options.reload){
                    window.location.reload();
                } else {
                    Jetsetter.NotificationCenter.success({
                        message: 'Property removed from favorites.'
                    });
                }
            }.bind(this),
            onFailure: function() {
                Jetsetter.NotificationCenter.error({
                    message: 'Uh oh, something went wrong.',
                    cta: 'Try Again?',
                    onCtaClick: function(){
                        this.removeFav();
                    }.bind(this)
                });
            }.bind(this)
        });

		_gaq.push(['_trackEvent', 'Favorites', 'Remove', 'Click']);
	},

    _getCookieValue: function() {
        if(Cookie.read('j_cli') && typeof (JSON.decode(Base64.decode(Cookie.read('j_cli'))) || {}).show !== 'undefined'){
            return JSON.decode(Base64.decode(Cookie.read('j_cli')));
        }
        else{
            return {};
        }
    },

	getCount: function (){
		if(Cookie.read('j_cli') && typeof (JSON.decode(Base64.decode(Cookie.read('j_cli'))) || {}).show !== 'undefined'){
			return JSON.decode(Base64.decode(Cookie.read('j_cli'))).show;
		}
		else{
			return 0;
		}
	},

	toggleFav: function () {
		var self = this;

		switch(self.rootEl.hasClass('add-to-favs-added')){
			case true:
				self.removeFav();
				break;
			case false:
				self.addFav();
				break;
		}
	}


});
var FavsTooltip = new Class ({

	Implements: Events,

	initialize: function (rootEl) {
		this.rootEl = rootEl;

		var self = this,
			close = self.rootEl.getElement('.hide');

			if(Cookie.read('j_cli')){
				this.cookie = JSON.decode(Base64.decode(Cookie.read('j_cli')));
			}
			else{
				this.cookie = {};
				this.createCookie();
			}
			
		rootEl.position({
			relativeTo: $('secondary-nav'),
		    position: {
		    	x: 'left',
		    	y: 'bottom'
		    },
		    offset: {
		    	x: -90
		    }
		});
				
		close.addEvent('click', function (e){
			e.stop();
			self.hide();
		});
	},

	show: function () {
		if(JSON.decode(Base64.decode(Cookie.read('j_cli'))).show < 4){
			this.cookie = JSON.decode(Base64.decode(Cookie.read('j_cli')));
			this.rootEl.setStyle('display', 'block');
			new Fx.Tween(this.rootEl).start('opacity', 0, 1);
			this.cookie.show = parseInt(this.cookie.show) + 1;
			Cookie.write('j_cli', Base64.encode(JSON.encode(this.cookie)), {
				domain: Jetsetter.cookieDomain,
				path: '/',
				duration: 365
			});
		}
	},

	neverShow: function () {
		this.cookie = JSON.decode(Base64.decode(Cookie.read('j_cli')));
		this.cookie.show = 4;

		Cookie.write('j_cli', Base64.encode(JSON.encode(this.cookie)), {
			domain: Jetsetter.cookieDomain,
			path: '/',
			duration: 365
		});
	},

	createCookie: function () {
		this.cookie.show = 0;

		Cookie.write('j_cli', Base64.encode(JSON.encode(this.cookie)), {
			domain: Jetsetter.cookieDomain,
			path: '/',
			duration: 365
		});
	},

	hide: function () {
		if(this.rootEl.getStyle('display') === 'block'){
			var closeEffect = new Fx.Tween(this.rootEl)
			.start('opacity', 1, 0).chain(function () {
				this.rootEl.setStyle('display', 'none');
			}.bind(this));
			
		}
		
		if(!arguments[0]){
			this.neverShow();	
		}
	}

});

var SplashInvite = new Class({
	
	Extends: BaseForm,
	
	Implements: Social.InviteEmail,
	
	initialize: function (rootEl) {
		this.rootEl = rootEl;
		this.inviteViewEl = this.rootEl.getElement('.invite-view');
		this.sentViewEl = this.rootEl.getElement('.sent-view');
		this.formEl = this.rootEl.getElement('form');
		this.submitButtonEl = this.formEl.getElement('.submit');
		this.errorMessageEl = new Element('p', {
			'class': 'error'
		}).inject(this.formEl, 'top');
		this.addMoreButtonEl = this.formEl.getElement('.add-more');
		
		var emailContainerEl = this.formEl.getElement('.email-fields');
		
		// This field needs stuff from TextField
		this.getNewEmailEl().replaces(emailContainerEl.getFirst('.email'));
		
		this.addMoreButtonEl.addEvent('click', function () {
			// Limit to 5 email fields
			var numOfEmailFields = emailContainerEl.getChildren().length;
			if (numOfEmailFields < 5) {
				this.getNewEmailEl().inject(emailContainerEl).hide().reveal({
					'duration': 'short'
				});
				
				this.fireEvent('emailFieldAdd');
				
				if (numOfEmailFields == 4) {
					this.addMoreButtonEl.hide();
				}
			}
		}.bind(this));
		
		this.addEvent('formDisable', function () {
			this.submitButtonEl.set('text', 'Sending Invites…');
			this.submitButtonEl.getParent().addClass('sending');
		});
		
		this.addEvent('formEnable', function () {
			this.submitButtonEl.set('text', 'Send Invitations');
			this.submitButtonEl.getParent().removeClass('sending');
		});
		
		this.sentViewEl.getElement('button').addEvent('click', function () {
			this.resetSentView();
			this.showInviteView();
		}.bind(this));
		
		this.bindSubmitFunction();
	},
	
	submitForm: function () {
		omniture.trackClickWithSiteSection('Send Invitations click');
		_gaq.push(['_trackEvent', 'Invite', 'SplashInvite', 'Send']);
		
		var emailFieldEls = this.getValidEmailFields();
		if (!emailFieldEls) {
			return false;
		}

		new InviteService().sendInvitations({
		    validatedEmailAddresses: emailFieldEls.get('value'),
		    method: 'splash',
		    guid: Jetsetter.user.guid,
		    customMessage: 0, // Hack - we can't pass null values
		    onSuccess: function(json){
	        	GA.trackInvites(emailFieldEls.length, 'splash');
	        	_gaq.push(['_trackEvent', 'Invite', 'SplashInvite', 'Send-Sucess']);
	        	this.showSentView();

				Jetsetter.NotificationCenter.success({
					message: "Your invites have been sent."
				});
		    }.bind(this),
		    onFailure: function(){
		    	_gaq.push(['_trackEvent', 'Invite', 'SplashInvite', 'Send-Failed']);
		    	this.enableForm();

				Jetsetter.NotificationCenter.error({
					message: 'Uh oh, something went wrong.',
					cta: 'Try Again?',
					onCtaClick: function(){
						this.submitForm();
					}.bind(this)
				});
		    }.bind(this)
		});
	},
	
	showInviteView: function () {
		this.sentViewEl.fade('out').hide();
		this.inviteViewEl.show().fade('in');
	},
	
	showSentView: function () {
		this.inviteViewEl.fade('out').hide();
		this.sentViewEl.show().fade('in');
	},
	
	resetSentView: function () {
		this.formEl.getElement('.email-fields').empty().adopt(this.getNewEmailEl());
		this.enableForm();
		this.addMoreButtonEl.show();
	}
	
});

(function () {
var newCalendarInit = function (property) {
	
	// Parameters from the search page
	var queryParams = new URI().get('data');

    var guests = parseInt(queryParams.adults || queryParams.numAdults || queryParams.guests || queryParams.numGuests, 10);
    
    Jetsetter.persistentDates = new PersistentDates(Jetsetter.property.channel);

	var options = {
		checkInDate: Jetsetter.persistentDates.checkinDate,
		checkOutDate: Jetsetter.persistentDates.checkoutDate,
		numOfRooms: (queryParams.numRooms && queryParams.numRooms.toInt) ? queryParams.numRooms.toInt() : 1,
		numOfGuests: guests ? guests : null
	};

	if (queryParams.month) {
		// format: "3/2012"
		var monthSplit = queryParams.month.split('/', 2);
		if (monthSplit.length > 1) {
			var monthPart = monthSplit[0];
			var yearPart = monthSplit[1];
			options.selectedMonth = new Date(yearPart, monthPart - 1, 1);
		}
	}

	// Initialize calendar
	if (typeOf(Jetsetter.products) === 'object') {

        // initialize models first

        var searchParametersModel = new Jetsetter.Models.SearchParameters({
            checkInDate  : options.checkInDate ? moment(options.checkInDate.clone()) : null,
            checkOutDate : options.checkOutDate ? moment(options.checkOutDate.clone()) : null,
            numOfRooms   : options.numOfRooms,
            numOfGuests  : options.numOfGuests || 2
        });

        var propertyInventoryModel = Jetsetter.Models.PropertyInventory.get({
            propertyId : Jetsetter.property.propertyId,
            channel    : Jetsetter.property.channel
        });

        var propertyPricingModel = Jetsetter.Models.PropertyPricing.get({
            propertyId : Jetsetter.property.propertyId,
            channel    : Jetsetter.property.channel
        });

        // build property model based on what is printed out onto the page during load. this prevents the need to
        // re-fetch the property details again via ajax
        var propertyModel = Jetsetter.Models.PropertyDetails.get({
            propertyId: Jetsetter.property.propertyId
        });
        propertyModel.set({'property': Jetsetter.property });
        propertyModel.fetched = true;

        // instantiate trip advisor meta model only if the property has a ta Id
        var tripAdvisorMetaModel = null;
        if (propertyModel.get('property').details.taId) {
            tripAdvisorMetaModel = Jetsetter.Models.TripAdvisorMeta.get({
                taId : propertyModel.get('property').details.taId
            });
        }

        // initialize controllers below

        // controller for the pricing area above the gallery
        var topPriceController = new Jetsetter.Controllers.ProductPricingArea({
            el                   : $$('.header-block.pricing'),
            propertyPricingModel : propertyPricingModel,
            searchParametersModel: searchParametersModel,
            propertyInventoryModel: propertyInventoryModel
        });


        /**
         * @Todo: if the meta test R4 is victorious, this function should be moved into its own file, perhaps into a class that extends the default controllers.WindowShade class
         */
        var initializeWindowShade = function() {

            var shadeEl = $('window-shade-search');

            if (!shadeEl) {
                return;
            }

            if (Jetsetter.ab20381 != 'B') {
                shadeEl.dispose();
                return;
            }

            var windowShade = new Jetsetter.Controllers.WindowShade({
                el: shadeEl,
                scrollPoint: 100, /* show shade after scrolled 100px from the top of the document */
                onShow: function() {
                },
                onHide: function() {
                }
            });

            var disableSubmit = function() {
                var btn = shadeEl.getElement('input[type=submit]');
                btn.set('disabled', 'disabled');
                btn.addClass('disabled');
            };

            var enableSubmit = function() {
                var btn = shadeEl.getElement('input[type=submit]');
                btn.set('disabled', false);
                btn.removeClass('disabled');
            };

            var searchAutocomplete = new SearchAutocomplete(shadeEl.getElement('input.term'), {
                searchSource: 'PDPShade',
                truncateAtChar: 55
            });

            shadeEl.getElement('input.term').addEvent('keydown', enableSubmit);
            searchAutocomplete.addEvent('selectionMade', enableSubmit);

            var dateCalendars = new Jetsetter.Controllers.PropertyDateCalendars({
                el              : shadeEl,

                // @todo: ? .. pass entire searchParametersModel instead of its members?
                checkInDate     : searchParametersModel.getCheckInDate(),
                checkOutDate    : searchParametersModel.getCheckOutDate(),
                quantity        : searchParametersModel.get('numOfRooms'),   // @todo: ? .. pass searchParametersModel?
                guests          : searchParametersModel.get('numOfGuests'),  // @todo: ? .. pass searchParametersModel?

                propertyModel   : propertyModel,
                inventoryModel  : propertyInventoryModel
            }); // just instantiating the object will initialize all fields/pickers/etc

            if (searchParametersModel.get('checkInDate') && searchParametersModel.get('checkOutDate')) {
                enableSubmit();
            }

            dateCalendars.bind('selectionMade', enableSubmit);

            var $form = shadeEl.getElement('form');
            var $searchTerm = $form.getElement('input.search');

            searchParametersModel.bind('change:checkInDate', function() {
                if (searchParametersModel.get('checkInDate')) {
                    dateCalendars.setCheckInDate(searchParametersModel.getCheckInDate());
                }
            });
            searchParametersModel.bind('change:checkOutDate', function() {
                if (searchParametersModel.get('checkOutDate')) {
                    dateCalendars.setCheckOutDate(searchParametersModel.getCheckOutDate());
                }
            });

            $form.addEvent('submit', function(e) {
                // search term is unchanged, only search for dates
                if ($searchTerm.get('data-default-value') == $searchTerm.get('value')) {
                    e.preventDefault();
                    searchParametersModel.set({
                        'checkInDate': moment(dateCalendars.getCheckInDate()),
                        'checkOutDate': moment(dateCalendars.getCheckOutDate())
                    });

                    var $roomSelector = $('room-selector');
                    if ($roomSelector) {
                        new Fx.Scroll(window).toElementCenter($roomSelector);
                    }

                    disableSubmit();
                } else {
                    // if autocomplete had
                    if (searchAutocomplete.getSelectedResult()) {
                        e.preventDefault();
                        var params = $form.toQueryString().parseQueryString();
                        delete params.q;
                        searchAutocomplete.followUrl(searchAutocomplete.getSelectedResult(), params);
                    }
                    // search term has changed, go to the SERP which is the default action on the form
                }
            });

        };

        var initializeRoomSelector = function() {

            // meta-controller for date selection area
            Jetsetter.ab20381 = null;
            var isRateGain = window.location.href.match(/comp=rg/i);
            var isUS = (location.host.indexOf('.com') != -1) && Jetsetter.userGeoModel.get('data') && (Jetsetter.userGeoModel.get('data').countryCode == 'US');
            if (propertyModel.isMetaEligible() && !isRateGain && isUS && tripAdvisorMetaModel && Jetsetter.user.isABEligible()) {
                var recipe = Jetsetter.ABTests.metaTest.recipe(Jetsetter.user.partition);
                Jetsetter.ab20381 = recipe;
            }

            // query override
            if (queryParams.metaTest && _.contains(['A','B'], queryParams.metaTest)) {
                Jetsetter.ab20381 = queryParams.metaTest;
            }

            if (Jetsetter.ab20381) {
                Jetsetter.ABTests.metaTest.track(Jetsetter.ab20381);
            }

            /**
             * Jetsetter-20381 ab test
             * - recipe A - no meta
             * - recipe B - TA meta search incorporated
             */
            if (Jetsetter.ab20381 == "B") {

                document.body.addClass('ab20381_'+Jetsetter.ab20381);

                if (!propertyModel.isMetaEligible()) {
                    var dateSelectorController = new Jetsetter.RoomSelector.Controllers.Main({
                        el                      : $('room-selector'),

                        // pass in models
                        searchParametersModel   : searchParametersModel,
                        propertyInventoryModel  : propertyInventoryModel,
                        propertyPricingModel    : propertyPricingModel,
                        propertyModel           : propertyModel
                    });
                } else {

                    var dateSelectorController = new Jetsetter.RoomSelector.Controllers.Main20381({
                        el                      : $('room-selector'),

                        // pass in models
                        searchParametersModel   : searchParametersModel,
                        propertyInventoryModel  : propertyInventoryModel,
                        propertyPricingModel    : propertyPricingModel,
                        propertyModel           : propertyModel,
                        tripAdvisorMetaModel    : tripAdvisorMetaModel
                    });
                }

            } else {
                var dateSelectorController = new Jetsetter.RoomSelector.Controllers.Main({
                    el                      : $('room-selector'),

                    // pass in models
                    searchParametersModel   : searchParametersModel,
                    propertyInventoryModel  : propertyInventoryModel,
                    propertyPricingModel    : propertyPricingModel,
                    propertyModel           : propertyModel
                });
            }

            initializeWindowShade();

        };

        Jetsetter.userGeoModel.supply(initializeRoomSelector);

        searchParametersModel.bind('change:checkInDate', function(){
            var date = this.get('checkInDate').toDate()
            Jetsetter.persistentDates.persistCheckIn(date);
            updateBreadCrumb('checkin', date.format("%Y-%m-%d"));
        });

        searchParametersModel.bind('change:checkOutDate', function(){
            var date = this.get('checkOutDate').toDate();
            Jetsetter.persistentDates.persistCheckOut(date);
            updateBreadCrumb('checkout', date.format("%Y-%m-%d"));
        });

        var gptAd = new Jetsetter.Controllers.ScrollTracking({
            el        : $('ad-scroll-checkpoint'),
            callback  : function() {

                omniture.trackClickWithSiteSection('scroll to ad area');

                var scrollCheckpoint = $('ad-scroll-checkpoint');
                var p = scrollCheckpoint.getParent();
                var adEl = new Element('div').set('html', '<div class="ad-module module box-shadow" id="div-gpt-ad-1401719619735-0"></div>');
                p.grab(adEl);

                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1401719619735-0'); });

            }
        });

	}

    if (Jetsetter.persistentDates.getCheckIn()) {
        updateBreadCrumb('checkin', Jetsetter.persistentDates.getCheckIn());
    }

    if (Jetsetter.persistentDates.getCheckOut()) {
        updateBreadCrumb('checkout', Jetsetter.persistentDates.getCheckOut());
    }
}

var updateBreadCrumb = function (key, date) {
    var breadcrumbEl = $$('.breadcrumbs').getElement('a')[0];

    if (!_.isEmpty(breadcrumbEl)) {
        var breadCrumbURL = new URI(breadcrumbEl.get('href'));
        breadCrumbURL.setData(key, date);
        breadcrumbEl.set('href', breadCrumbURL.toString());
    }
}

Jetsetter.packages.product.init = function () {

    if (!Jetsetter.property) {
        return;
    }

	if (Jetsetter.user.isAnonymous && Jetsetter.user.isPriceHidden) {
		Jetsetter.anonymousBrowse.showRegistrationModal();
	}

	var property = Jetsetter.property;
	var infoEl = $('info');
	var mainRailEl = $('com-left');
	var tabContainerEl = mainRailEl.getElement('ul.info-tabs');
	var commentsEl = $('all-comments');
	
	var j_pid = JSON.decode(Cookie.read('j_pid')) || [];
	j_pid.unshift(Jetsetter.property.propertyId);
	j_pid = j_pid.unique().slice(0,6);
	Cookie.write('j_pid', JSON.encode(j_pid), {
		duration: 7,
		domain: Jetsetter.cookieDomain
	});
	
	var mapsTabMap = null;
	var mapDetails = Jetsetter.property.locationDetails && Jetsetter.property.locationDetails.mapDetails;
    var markerLatitude = null;
    var markerLongitude = null;
    if (Jetsetter.property.locationDetails && Jetsetter.property.locationDetails.address && Jetsetter.property.locationDetails.address.location) {
        markerLatitude = Jetsetter.property.locationDetails.address.location.latitude;
        markerLongitude = Jetsetter.property.locationDetails.address.location.longitude;
    } else {
        markerLatitude = mapDetails.center.latitude;
        markerLongitude = mapDetails.center.longitude;
    }
	var mapData = mapDetails && {
		zoomLevel: mapDetails.zoomLevel,
		latitude: mapDetails.center.latitude,
		longitude: mapDetails.center.longitude,
		marker: {
			title: Jetsetter.property.propertyName,
			latitude: markerLatitude,
			longitude: markerLongitude
		}
	};

	function switchTab(tabEl) {
		// Update selected tab
		tabContainerEl.getElement('.selected').removeClass('selected');
		tabEl.getParent('li').addClass('selected');

		// Show selected section
		var selectedSectionId = tabEl.get('href').substr(1);
		infoEl.getElements('.section').removeClass('selected-section');
		$(selectedSectionId).addClass('selected-section');
		
		var hash = new URI(tabEl.get('href')).get('fragment');
		switch (hash) {
			case 'reviews':
				// commentsEl && commentsEl.hide();
				break;
			
			case 'area':
			case 'maps-and-attractions':
				if (!mapsTabMap) {
					var mapEl = $(selectedSectionId).getElement('.google-map');
					if (mapEl) {
						mapsTabMap = new GoogleMaps(mapEl, mapData);
					}
				}
				break;
			case 'all-comments':

			default:
				// commentsEl && commentsEl.show();
		}
	}

    // this is bad style. @todo: find a better way
    document.body.addEvent('request-tab-switch', function(tabName) {
        var els = $$(tabName);
        if (els && els.length == 1) {
            switchTab(els[0].getElement('a'));
        }
    });

    // Gallery
    var galleryEl = $('screen-gallery');
    if (galleryEl) {
        var pdpGal = new PdpGallery({
            container: galleryEl,
            gallery: galleryEl.getElement('.full-view ul'),
            thumbs: $('thumbs-container')
        });
    }

    window.addEvent('fbReady', function () {
        // Fb like button
//        var fbLikeEl = $('facebook-like');
//        if (fbLikeEl) {
//            FB.XFBML.parse(fbLikeEl);
//        }

//        // When something is liked
//        FB.Event.subscribe('edge.create', function (response) {
//            var responseUri = new URI(response);
//
//            $('share-center').getElement('li.fb').fireEvent('click');
//            omniture.trackClickWithSiteSection('gallery - social shares - facebook like');
//
//            if (responseUri.get('directory').indexOf('/image/') === 0) {
//
//                //NewTrackerCode
//                // Image landing page
//                Jetsetter.tracker.trackEvent({
//                    'eventType': 'feature',
//                    'key34': 'fullScreenFbLike',
//                    'key37': Jetsetter.property.propertyId,
//                    'key38': responseUri.get('file') // imageId
//                })
//
//            } else if (responseUri.get('file') === property.alias) {
//                //NewTrackerCode
//                // Property page (flash/retail/archive)
//                Jetsetter.tracker.trackEvent({
//                    'eventType': 'feature',
//                    'key34': 'propertyLike'
//                });
//            }
//        });
    });


    // initialize sharing modules for twitter, and google
    // this functionality only pulls in the sharing libraries to make them available for other features to use
    (function() {

        /**
         * twitter
         */
        window.twttr = function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0],
                p=/^http:/.test(d.location)?'http':'https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+'://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js,fjs);
            }
            return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
        }(document, 'script', 'twitter-wjs');

        twttr.ready(function (twttr) {
            twttr.events.bind('click', function(){
                omniture.trackClickWithSiteSection('gallery - social shares - twitter');
            });
        });


        /**
         * google
         */
        (function() {
            window.___gcfg = {
                parsetags: 'explicit'
            };

            window.onCallbackGPlus = function(args){
                omniture.trackClickWithSiteSection('gallery - social shares - google plus');
            };

            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.onload = function() {
                document.body.fireEvent('google-api-loaded');
                // optionally initialize all g-plus widgets here
            }
            po.src = 'https://apis.google.com/js/platform.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);

        })();

        /**
         * pinterest
         */
        (function() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'http://assets.pinterest.com/js/pinit.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        })();


    })();

//    document.body.addEvent('click:relay(.facebook-connect)', function(event) {
//        event.stop();
//        var el = event.target;
//        _gaq.push(['_trackEvent', 'PDP', 'FBConnect', 'Click']);
//
//        var image = el.get('data-image-path') ? Jetsetter.JetsetUtil.getDynamicCropUrl(el.get('data-image-path'), 1200, 800) : Jetsetter.property.propertyImage;
//
//        var url = "http://" + window.location.host + Jetsetter.property.url + "?osocid=fbshare&facebook=1&via=fbshare&plt=fbshare&source=fbshare&nm=fbshare";
//
//        FB.ui({
//            'method': 'feed',
//            'name': property.propertyName,
//            'description': property.description,
//            'link': url,
//            'actions':[
//                {
//                    'name': 'See more',
//                    'link': url
//                }
//            ],
//            //'picture': 'http:' + Jetsetter.CDN_HOST + '/static/' + image
//            'picture': 'http://cdnx.jetcdn.com/static/' + image // For testing
//        }, function (response) {
//            if (response && !response.error_code) {
//                Jetsetter.log('Posting completed.');
//            } else {
//                Jetsetter.log('Error while posting.');
//            }
//        });
//
//    });

	if (property.mode == 'archive') {
		// Archive property right rail
		var saleReminderButton = $('com-right').getElement('.sale-reminder');
		saleReminderButton.addEvent('click', function () {
			saleReminderButton.set('disabled', true);
			
			var req = new Request.JSON({
				url: '/saleasync.php',
				data: {
					'action': 'createAlert',
					'woeId': property.propertyWoeId
				},
				onSuccess: function (json) {
					if (json.success) {
						var fadeFx = new Fx.Tween(saleReminderButton).start('opacity', 0).chain(function () {
							saleReminderButton.set('disabled', false);
							saleReminderButton.set('html', '<span>Manage my alerts</span>').fade('in');
							saleReminderButton.removeEvents().addEvent('click', function () {
								location.href = '/account/emailpreferences';
								return false;
							});
						});
					}
				}.bind(this)
			}).post();
		});
		
		$$('#hotel-info a.url').addEvent('click', function (event, el) {
			_gaq.push(['_trackEvent', 'PDP', 'Property', 'ClickOut']);
		});
		
	} else {

        // this is currently the only kind of inventoryType that pdpv2 supports
        if (Jetsetter.property.details.inventoryType == 'nightly') {
            newCalendarInit(property);
        }

        /**
         * @todo: support
         * - vouchers
         * - packages
         * - ptp
         */

	}


	// Tabs
	if(tabContainerEl){
		tabContainerEl.addEvent('click:relay(a)', function (event, el) {
			event.stop();
			switchTab(el);

			omniture.trackClickWithSiteSection('Tab ' + el.innerHTML.trim() + ' click');
		});
	}
	
	
	// Scroll to #anchor links instead of jumping by default
	mainRailEl.addEvent('click:relay(a)', function (event, element) {
		var href = element.get('href');
		var uri = new URI(href);
		var hash = uri.get('fragment');

		if (href && hash && uri.get('host').test(/jetset(ter|www)/) && !element.hasClass('redirect') && tabContainerEl) {
			event.preventDefault();
			
			// Switch to the tab if the anchor points to one
			var selectedTab = tabContainerEl.getElement('a[href=#' + hash + ']');
			var scrollToEl = (selectedTab) ? tabContainerEl : $(hash);

			// Don't use smooth scrolling if target is already in view
			if (element.hasClass('no-scroll')) {
				if (selectedTab) {
					switchTab(selectedTab);
				}
			} else {
				var scrollFx = new Fx.Scroll(window);
				scrollFx.start(0, scrollToEl.getPosition().y - 20).chain(function () {
					if (selectedTab) {
						switchTab(selectedTab);
					}
				});
			}
		}
	});
	


	// Switch to area tab, then scroll down to the large map
	var miniMapEl = $('mini-map');
	if (miniMapEl) {
		miniMapEl.addEvent('click:relay(.see-full)', function (event, element) {
			event.preventDefault();

			switchTab($('area-tab'));

			var scrollToEl = $(new URI(element.get('href')).get('fragment'));
			var scrollFx = new Fx.Scroll(window);
			scrollFx.start(0, scrollToEl.getPosition().y);
		});
	}
	
	// Make getPosition() relative to #header to work around MobileWebkit's
	// issue of reporting different element positions on scroll
	var headerEl = $('header');
	var mapEl = $('overview').getElement('.google-map');
	if (mapEl) {
		// Lazy load Google Maps
		var loadMap = function () {
			new GoogleMaps(mapEl, mapData);

			window.removeEvent('scroll:pause', loadMapOnScroll);
		};
		var loadMapOnScroll = function () {
			if (window.getScroll().y + window.getSize().y > mapEl.getPosition(headerEl).y) {
				loadMap();
			}
		};
		window.addEvent('scroll:pause', loadMapOnScroll);
	}
	
	// First 10 reviews on the page, lazy-load the rest
    var jetsetterReviewsEl = $('jetsetter-reviews');
    var tripAdvisorReviewsEl = $('tripadvisor-reviews');
	if (jetsetterReviewsEl || tripAdvisorReviewsEl) {

        var reviewsOptions = {
			eventId: Jetsetter.eventId,
			propertyId: property.propertyId
		};
		
		if (property.mode != 'flash') {
			reviewsOptions = Object.merge({
				ignoreEventSpecific: true
			}, reviewsOptions);
		}		
		var reviews = new Reviews(jetsetterReviewsEl, tripAdvisorReviewsEl, reviewsOptions);

        var tripBadge = $$('.trip-rating-badge');
        if (tripBadge) {
            $$('.trip-rating.badge').addEvents({
                'click': function() {
                    omniture.trackClickWithSiteSection('Tab Overview - JS read reviews click');
                    switchTab($('reviews-tab'));
                }
            });
            $$('.badge.reviews').addEvent('click', function() {
                omniture.trackClickWithSiteSection('Tab Overview - JS read reviews click');
                switchTab($('reviews-tab'));
            });
        }
	}
	

	
	
	//new non-lazy loaded comments -- first 10 will be on page, rest will be lazy loaded 
	if(commentsEl){
		var comments = new Comments(commentsEl, {
			eventId: Jetsetter.eventId,
			propertyId: property.propertyId
		});
	}

    //public sidebar actions -- we assume user is public
    //var contentHeader = $('content-header'),
        //signupEl = contentHeader.getElement('.signup');

    //if(contentHeader && signupEl){
    $$('.signup').each(function(signupEl) {
        var formEl = signupEl.getElement('form');
        var submitButton = signupEl.getElement('input[type=submit]');

        var emailField = new InviteEmailField(formEl.getElement('.email'), {
                'tooltipType': 'top',
                'existingMemberCheck': false
        });

		formEl.addEvent('submit', function(e){

            e.preventDefault();

            submitButton.set('disabled', true);
			emailField.validateField();
			
			if (emailField.get('state') !== 'valid') {
				emailField.updateDisplayState();
                submitButton.set('disabled', false);
				return false;
			} else{
				if(Jetsetter.regOptions){
					Jetsetter.regOptions.email = emailField.get('value');	
				} else {
					Jetsetter.regOptions = {
						email: emailField.get('value')
					}
				}


				var regOptions = Object.merge({'promoAlias': ((Jetsetter.session && Jetsetter.session.pl) ? Jetsetter.session.pl.promo : '')}, Jetsetter.regOptions);
				Jetsetter.Auth.authenticate(Object.merge(regOptions, {
					type: 'email',
					onSuccess: function(json){
						window.location.reload();
					}.bind(this),
					onFailure: function(json){
                        emailField.isValid = false;
                        emailField.set('state', 'invalid');
                        emailField.updateDisplayState();
                        submitButton.set('disabled', false);
//						var errorCode = json.error.code,
//							errorMessage = json.error.message;
//						switch (errorCode) {
//							// TODO: handle errors
//							default:
//								emailField.isValid = false;
//								emailField.updateDisplayState(errorMessage);
//								break;
//						}
//						submitButton.set('disabled', false);
					}.bind(this)
				}));
			}
		});
	});

	//allow subsciber reg from fader butttons
	$$('.fader .cta-button').each(function(button){
		button.addEvent('click', function(e){
			var secureOptions = {
					'access': 'insecure',
					defaultToSubscriberRegistration: true,
					onCloseEnd: function () {
				},
				onLogin: function () {
					window.location.reload();
				}
			};

			if(Jetsetter.regOptions){
				secureOptions.promoId = Jetsetter.regOptions.promoId ? Jetsetter.regOptions.promoId : '';
				secureOptions.referrerGuid = Jetsetter.regOptions.referrerGuid ? Jetsetter.regOptions.referrerGuid : '';
				secureOptions.invitationId = Jetsetter.regOptions.invitationId ? Jetsetter.regOptions.invitationId : '';
				secureOptions.promo = Jetsetter.regOptions.promo ? Jetsetter.regOptions.promo : '';
				secureOptions.promoKey = Jetsetter.regOptions.promoKey ? Jetsetter.regOptions.promoKey : '';
			}
			
			Jetsetter.secureLogin(secureOptions);
		});
	});

	var splashInviteEl = $('splash-invite');
	if (splashInviteEl) {
		var splashInvite = new SplashInvite(splashInviteEl);
	}
//
//    var badges = $('badges');
//    if (badges && badges.getChildren().length < 2) {
//        badges.setStyle('width', '170px');
//    }

	var virginLink = $('virgin-flight-routes');
	if(virginLink){
		virginLink.addEvent('click', function(e){
			e.stop();
			new VirginModal(virginLink).show();
		});
	}


	
	// Snique away member welcome modal
	if(Jetsetter.popups.SniqueWelcomeModal) {
		setTimeout(function(){
			new SniqueWelcomeModal().show();
		}, 1000);
	}

    // ta landing page modal
    if (Jetsetter.popups.TALandingModal) {
        setTimeout(function() {
            new TALandingModal().show();
        }, 1000);
    }

    /**
     * handle share center hovering. handled in javascript with .hover class to accomodate ie9 (and probably 8) which loses :hover state
     * when hovering over iframe
     */
    (function() {
        var $screenGallery = $('screen-gallery');
        var hideTimeout = null;
        var isHovering = false;
        $screenGallery.addEvents({
            'mouseover:relay(div,a,li,iframe,ul)': function() {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                if (!isHovering) {
                    $screenGallery.addClass('hover');
                }
            }, 'mouseout:relay(div,a,li,iframe,ul)': function() {
                hideTimeout = setTimeout(function() {
                    $screenGallery.removeClass('hover');
                    isHovering = false;
                }, 500);
            }
        })
    }());

	//track sale view
	var currUri = new URI(window.location);
	var refUri = new URI(document.referrer);
	//NewTrackerCode
	Jetsetter.tracker.trackEvent({
		eventType: 'saleView',
		key1: Jetsetter.user.guid,
		key2: Jetsetter.user.partition,
		key7: property.propertyId,
		key8: Jetsetter.eventId,
		key9: currUri.getData('nm'),
		key10: currUri.getData('cl'),
		key15: Jetsetter.session.al && Jetsetter.session.al.promo_id,
		key18: currUri.getData('ep'),
		key19: currUri.getData('et'),
		key20: currUri.getData('ept'),
		key21: currUri.getData('eca')
	});

};

})(Jetsetter.property);
window.addEvent('domready', Jetsetter.packages.product.init);

var SniqueWelcomeSlides = new Class({
	
	Extends: SlideShow,
	
	currentIndex: 1,
	
	initialize: function (attachTo, creditAmount) {
		// Preload slide images
		var slide2Image = Jetsetter.CDN_HOST + '/static/images/snique-welcome/slide2.png';
		var slide3Image = Jetsetter.CDN_HOST + '/static/images/snique-welcome/slide3.png';
		new Image().src = slide2Image;
		new Image().src = slide3Image;
		
		var slidesHtml = [
			'<div class="slide slide-1 first">\
				<p>\
				    Jetsetter (formerly SniqueAway) is a community of travelers that provides<br/>\
				    our members with exclusive deals of up to <b>40% off</b> the world\'s greatest vacations,<br/>\
				    expert knowledge and inspiring articles. We\'re glad you\'re here.\
				</p>\
				<div class="credit-explanation">\
					 As a former <b>SniqueAway</b> member,<br/>\
					 you\'ve received a credit to your account for:<br/>\
					 <h3 class="snique-credit">$' + creditAmount + '</h3>\
				</div>\
			</div>',
			'<div class="slide slide-2 first">\
				<img class="slide-image" src="' + slide2Image + '" />\
			</div>',
			'<div class="slide slide-3 first">\
				<img class="slide-image" src="' + slide3Image + '" />\
			</div>'
		];
		
		
		var slidesEl = new Element('div', {
			'class': 'slides',
			'html': slidesHtml.join('')
		});
		
		// Next button
		var nextContainerEl = new Element('div', {
			'class': 'next',
			'html': '<span class="copy">Up next:</span> '
		});

		this.headerEl = new Element('div', {
			'class': 'slide-header',
			'html':  '<h2 class="tenor"></h2>'
		});
		
		this.footerEl = new Element('div', {
			'class': 'slide-footer',
			'html':  '<div class="next-button"></div><br clear="right" />\
				      <div class="no-thanks">No thanks</div>'
		});

		this.slideData = [{
			title: 'Welcome to Jetsetter',
			buttonText: 'How Jetsetter works'
		}, {
			title: 'What to know',
			buttonText: 'How to book'
		}, {
			title: 'What to love',
			buttonText: 'Go travel'
		}];

		this.titleEl = this.headerEl.getElement('h2');
		this.nextButtonEl = this.footerEl.getElement('.next-button').addEvents({
			'click': function () {
				if (this.transitioning) {
					return false;
				}
				
				if(this.currentIndex == this.slideData.length - 1) {
					return this.fireEvent('slidesEnd');
				}

				var slideInfo = this.slideData[this.currentIndex + 1];
				this._setTitle(slideInfo.title);
				this._setButtonText(slideInfo.buttonText);
				this.show('next');
			}.bind(this)
		});

		this._setTitle(this.slideData[0].title);
		this._setButtonText(this.slideData[0].buttonText);

		
		this.footerEl.getElement('.no-thanks').addEvent('click', function() {
			this.fireEvent('close')
		}.bind(this));
		
		// Set up the container
		this.rootEl = new Element('div', {
			'id': 'snique-slides',
			'class': 'screen'
		}).adopt(
			this.headerEl,
			slidesEl,
			this.footerEl
		).inject(attachTo);
		
		this.parent(slidesEl, {
			transition: 'slideInLeft',
			duration: 900
		});
		
		this._setCurrentIndex();
	},
	
	show: function (slide, options) {
		this.parent(slide, options);
		this._setCurrentIndex();
		return this;
	},
	
	_setCurrentIndex: function () {
		this.currentIndex = (this.slides.indexOf(this.current)) % this.slides.length;
		return this;
	},
	
	_setButtonText: function (text) {
		this.nextButtonEl.set('text', text);
		return this;
	},
	
	_setTitle: function (text) {
		this.titleEl.set('text', text);
		return this;
	},
	
	toElement: function () {
		return this.rootEl;
	}
	
	
});

var SniqueWelcomeModal = new Class({

	Extends: Modal,

	creditAmounts: {
		SAMember: 50,
		SABuyer: 100,
		SATopTier: 150,
		JSSAMember: 50,
		JSSABuyer: 100,
		JSSATopTier: 150
	},

	initialize: function (options) {
		this.parent({
			id: 'snique-welcome-modal'
		});

		var guid = Jetsetter.user && Jetsetter.user.guid;

		var url = new URI();
		var creditAmount = this.creditAmounts[url.get('data')['sniqueMarketingSource'] || 'SAMember'];
		var slides = new SniqueWelcomeSlides(this.canvas, creditAmount);
		slides.addEvents({
			slidesEnd: function() {
				_gaq.push(['_trackEvent', 'snique-onboarding', 'modal', 'tourfinished']);
				this.close();
			}.bind(this),
			close: function() {
				trackClose();
				this.close();
			}.bind(this)
		});
		this.addEvents({
			close: function() {
				trackClose();
			}.bind(this)
		});

		function trackClose() {
			var eventName = ['modal', 'modal-whattoknow', 'modal-whattolove'][slides.currentIndex] || 'modal';
			_gaq.push(['_trackEvent', 'snique-onboarding', eventName, 'Closed']);
		}


		Cookie.write('js_snique_welcome', 'true', {
			domain: Jetsetter.cookieDomain,
			path: '/',
			duration: 3650
		});

		_gaq.push(['_trackEvent', 'snique-onboarding', 'modal-displayed', creditAmount]);
	}
	
});

SniqueWelcomeModal.shouldShow = function () {
	var url = new URI();
	var hasSniqueGuid = url.get('data')['DG'] && url.get('data')['sniqueMarketingSource'];
	var hasExpired = new Date() > new Date('2013-10-01');
	var userHasSeenModal = !!Cookie.read('js_snique_welcome');
	return hasSniqueGuid && !userHasSeenModal && !hasExpired;
};

SniqueWelcomeModal.whitelist = ['splash', 'product-details', 'multisale'];

SniqueWelcomeModal.allowPublic = true;
//In traffic coming from a new TripAdvisor deals newsletter (powered by JS), we'll want to create a custom experiencing for first time users. It will be a one-page modal
//
//- This experience should be limited only to those users coming from this specific Newsletter (do we need to identify the promo(s) that are driving to limit behavior)
//- We'll want the necessary tracking in GA (and Omniture) to track how many times its firing.
//- We'll want to use much of the same business rules for the SA modal
//- Once the user is a known registered user, they no longer have so see the modal. Once they become a registered user can the information be passed back to STM so GUID can be included on the string?
//- If the user has previously seen the modal in the prior session, they no longer have to see the modal.

var TALandingModal = new Class({

	Extends: Modal,

	initialize: function (options) {
		this.parent({
			id: 'ta-landing-modal'
		});

		var slides = new TALandingSlides(this.canvas);

		slides.addEvents({
			close: function() {
				this.close();
			}.bind(this)
		});

		this.addEvents({
			close: function() {
				trackClose();
			}.bind(this)
		});

		function trackClose() {
			_gaq.push(['_trackEvent', 'ta-landing-modal', 'modal', 'Closed']);
		}

        _gaq.push(['_trackEvent', 'ta-landing-modal', 'modal', 'Opened']);

		Cookie.write('js_ta_landing_modal', 'true', {
			domain: Jetsetter.cookieDomain,
			path: '/',
			duration: 3650
		});
	}
	
});

TALandingModal.shouldShow = function () {
    // valid 'via' promo codes on the url will trigger the dialog. valid 'via' promo codes start with TADeals_
	var url = new URI();
    var via = url.get('data')['via'];
	var hasPromoCode = via && /^TADeals_.+/.test(via); // does the via param in the url match any element in promoCodes?
	var userHasSeenModal = !!Cookie.read('js_ta_landing_modal');
    var userNotLoggedIn = !Jetsetter.user || Jetsetter.user.isPublic;
	return userNotLoggedIn && hasPromoCode && !userHasSeenModal;
};

TALandingModal.whitelist = ['splash', 'product-details', 'multisale'];

TALandingModal.allowPublic = true;
var TALandingSlides = new Class({
	
	Extends: SlideShow,
	
	currentIndex: 1,
	
	initialize: function (attachTo) {

		var html = '<div class="slide slide-1 first">\
				<p>\
				    Jetsetter members receive up to 40% off the <br />world\'s greatest travel experiences.<br/>\
				</p>\
				<div class="cta">\
                    <button class="cta-button submit" type="submit" name="submit">Go Travel</button>\
                </div>\
			</div>';
		
		
		var slidesEl = new Element('div', {
			'class': 'slides',
			'html': html
		});

		this.headerEl = new Element('div', {
			'class': 'slide-header',
			'html':  '<h2 class="tenor">Welcome to Jetsetter</h2>'
		});

        this.footerEl = new Element("div", {
            'class' : 'slide-footer',
            'html'  : '<div class="jetsetter-logo"></div>\
                <div class="trip tenor">A TripAdvisor company</div>'
        });

		// Set up the container
		this.rootEl = new Element('div', {
			'id': 'ta-landing-modal-slides',
			'class': 'screen'
		}).adopt(
			this.headerEl,
			slidesEl,
			this.footerEl
		).inject(attachTo);
		
		this.parent(slidesEl, {
			transition: 'slideInLeft',
			duration: 900
		});

        this.rootEl.getElement('.cta-button').addEvent('click', function() {
            this.fireEvent('close');
        }.bind(this));
	},
	
	toElement: function () {
		return this.rootEl;
	}
	
	
});

