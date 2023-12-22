var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@noble/hashes/_assert.js
var require_assert = __commonJS({
  "../../node_modules/@noble/hashes/_assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
    function number3(n) {
      if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
    }
    exports.number = number3;
    function bool(b) {
      if (typeof b !== "boolean")
        throw new Error(`Expected boolean, not ${b}`);
    }
    exports.bool = bool;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    function bytes(b, ...lengths) {
      if (!isBytes(b))
        throw new Error("Expected Uint8Array");
      if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
    }
    exports.bytes = bytes;
    function hash(hash2) {
      if (typeof hash2 !== "function" || typeof hash2.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number3(hash2.outputLen);
      number3(hash2.blockLen);
    }
    exports.hash = hash;
    function exists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    exports.exists = exists;
    function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    exports.output = output;
    var assert = { number: number3, bool, bytes, hash, exists, output };
    exports.default = assert;
  }
});

// ../../node_modules/@noble/hashes/_u64.js
var require_u64 = __commonJS({
  "../../node_modules/@noble/hashes/_u64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
    var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    var _32n = /* @__PURE__ */ BigInt(32);
    function fromBig(n, le = false) {
      if (le)
        return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
      return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
    }
    exports.fromBig = fromBig;
    function split(lst, le = false) {
      let Ah = new Uint32Array(lst.length);
      let Al = new Uint32Array(lst.length);
      for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
      }
      return [Ah, Al];
    }
    exports.split = split;
    var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
    exports.toBig = toBig;
    var shrSH = (h, _l, s) => h >>> s;
    exports.shrSH = shrSH;
    var shrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.shrSL = shrSL;
    var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
    exports.rotrSH = rotrSH;
    var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.rotrSL = rotrSL;
    var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
    exports.rotrBH = rotrBH;
    var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
    exports.rotrBL = rotrBL;
    var rotr32H = (_h, l) => l;
    exports.rotr32H = rotr32H;
    var rotr32L = (h, _l) => h;
    exports.rotr32L = rotr32L;
    var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    exports.rotlSH = rotlSH;
    var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    exports.rotlSL = rotlSL;
    var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    exports.rotlBH = rotlBH;
    var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
    exports.rotlBL = rotlBL;
    function add(Ah, Al, Bh, Bl) {
      const l = (Al >>> 0) + (Bl >>> 0);
      return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
    }
    exports.add = add;
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    exports.add3L = add3L;
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    exports.add3H = add3H;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    exports.add4L = add4L;
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    exports.add4H = add4H;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    exports.add5L = add5L;
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    exports.add5H = add5H;
    var u64 = {
      fromBig,
      split,
      toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    exports.default = u64;
  }
});

// ../../node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode = __commonJS({
  "../../node_modules/@noble/hashes/cryptoNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = void 0;
    var nc = require("crypto");
    exports.crypto = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : void 0;
  }
});

// ../../node_modules/@noble/hashes/utils.js
var require_utils = __commonJS({
  "../../node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
    var crypto_1 = require_cryptoNode();
    var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u8;
    var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u32;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!exports.isLE)
      throw new Error("Non little-endian hardware is not supported");
    var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
      }
      return array;
    }
    exports.hexToBytes = hexToBytes;
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
        cb(i);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    exports.asyncLoop = asyncLoop;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      if (!isBytes(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
      return data;
    }
    exports.toBytes = toBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
          throw new Error("Uint8Array expected");
        sum += a.length;
      }
      const res = new Uint8Array(sum);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    var Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var toStr = {}.toString;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    exports.checkOpts = checkOpts;
    function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    exports.wrapConstructor = wrapConstructor;
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
    function randomBytes2(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
    exports.randomBytes = randomBytes2;
  }
});

// ../../node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS({
  "../../node_modules/@noble/hashes/sha3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
    var _assert_js_1 = require_assert();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
    var _0n = /* @__PURE__ */ BigInt(0);
    var _1n = /* @__PURE__ */ BigInt(1);
    var _2n = /* @__PURE__ */ BigInt(2);
    var _7n = /* @__PURE__ */ BigInt(7);
    var _256n = /* @__PURE__ */ BigInt(256);
    var _0x71n = /* @__PURE__ */ BigInt(113);
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
    var rotlH = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s);
    var rotlL = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s);
    function keccakP(s, rounds = 24) {
      const B = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x = 0; x < 10; x++)
          B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
          const idx1 = (x + 8) % 10;
          const idx0 = (x + 2) % 10;
          const B0 = B[idx0];
          const B1 = B[idx0 + 1];
          const Th = rotlH(B0, B1, 1) ^ B[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
          for (let y = 0; y < 50; y += 10) {
            s[x + y] ^= Th;
            s[x + y + 1] ^= Tl;
          }
        }
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
          const shift = SHA3_ROTL[t];
          const Th = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t];
          curH = s[PI];
          curL = s[PI + 1];
          s[PI] = Th;
          s[PI + 1] = Tl;
        }
        for (let y = 0; y < 50; y += 10) {
          for (let x = 0; x < 10; x++)
            B[x] = s[y + x];
          for (let x = 0; x < 10; x++)
            s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
      }
      B.fill(0);
    }
    exports.keccakP = keccakP;
    var Keccak = class extends utils_js_1.Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.number)(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
      }
      keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, _assert_js_1.exists)(this, false);
        (0, _assert_js_1.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        (0, _assert_js_1.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        (0, _assert_js_1.output)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    exports.Keccak = Keccak;
    var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
    exports.sha3_224 = gen(6, 144, 224 / 8);
    exports.sha3_256 = gen(6, 136, 256 / 8);
    exports.sha3_384 = gen(6, 104, 384 / 8);
    exports.sha3_512 = gen(6, 72, 512 / 8);
    exports.keccak_224 = gen(1, 144, 224 / 8);
    exports.keccak_256 = gen(1, 136, 256 / 8);
    exports.keccak_384 = gen(1, 104, 384 / 8);
    exports.keccak_512 = gen(1, 72, 512 / 8);
    var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    exports.shake128 = genShake(31, 168, 128 / 8);
    exports.shake256 = genShake(31, 136, 256 / 8);
  }
});

// ../../node_modules/@paralleldrive/cuid2/src/index.js
var require_src = __commonJS({
  "../../node_modules/@paralleldrive/cuid2/src/index.js"(exports, module2) {
    var { sha3_512: sha3 } = require_sha3();
    var defaultLength = 24;
    var bigLength = 32;
    var createEntropy = (length = 4, random2 = Math.random) => {
      let entropy = "";
      while (entropy.length < length) {
        entropy = entropy + Math.floor(random2() * 36).toString(36);
      }
      return entropy;
    };
    function bufToBigInt(buf) {
      let bits = 8n;
      let value = 0n;
      for (const i of buf.values()) {
        const bi = BigInt(i);
        value = (value << bits) + bi;
      }
      return value;
    }
    var hash = (input = "") => {
      return bufToBigInt(sha3(input)).toString(36).slice(1);
    };
    var alphabet = Array.from(
      { length: 26 },
      (x, i) => String.fromCharCode(i + 97)
    );
    var randomLetter = (random2) => alphabet[Math.floor(random2() * alphabet.length)];
    var createFingerprint = ({
      globalObj = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {},
      random: random2 = Math.random
    } = {}) => {
      const globals = Object.keys(globalObj).toString();
      const sourceString = globals.length ? globals + createEntropy(bigLength, random2) : createEntropy(bigLength, random2);
      return hash(sourceString).substring(0, bigLength);
    };
    var createCounter = (count) => () => {
      return count++;
    };
    var initialCountMax = 476782367;
    var init = ({
      // Fallback if the user does not pass in a CSPRNG. This should be OK
      // because we don't rely solely on the random number generator for entropy.
      // We also use the host fingerprint, current time, and a session counter.
      random: random2 = Math.random,
      counter = createCounter(Math.floor(random2() * initialCountMax)),
      length = defaultLength,
      fingerprint = createFingerprint({ random: random2 })
    } = {}) => {
      return function cuid2() {
        const firstLetter = randomLetter(random2);
        const time = Date.now().toString(36);
        const count = counter().toString(36);
        const salt = createEntropy(length, random2);
        const hashInput = `${time + salt + count + fingerprint}`;
        return `${firstLetter + hash(hashInput).substring(1, length)}`;
      };
    };
    var createId2 = init();
    var isCuid = (id, { minLength = 2, maxLength = bigLength } = {}) => {
      const length = id.length;
      const regex = /^[0-9a-z]+$/;
      try {
        if (typeof id === "string" && length >= minLength && length <= maxLength && regex.test(id))
          return true;
      } finally {
      }
      return false;
    };
    module2.exports.getConstants = () => ({ defaultLength, bigLength });
    module2.exports.init = init;
    module2.exports.createId = createId2;
    module2.exports.bufToBigInt = bufToBigInt;
    module2.exports.createCounter = createCounter;
    module2.exports.createFingerprint = createFingerprint;
    module2.exports.isCuid = isCuid;
  }
});

// ../../node_modules/@paralleldrive/cuid2/index.js
var require_cuid2 = __commonJS({
  "../../node_modules/@paralleldrive/cuid2/index.js"(exports, module2) {
    var { createId: createId2, init, getConstants, isCuid } = require_src();
    module2.exports.createId = createId2;
    module2.exports.init = init;
    module2.exports.getConstants = getConstants;
    module2.exports.isCuid = isCuid;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  mutations: () => mutations,
  prisma: () => prisma,
  queries: () => queries,
  seed: () => seed
});
module.exports = __toCommonJS(src_exports);

// src/db.ts
var import_client = require("@prisma/client");
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new import_client.PrismaClient({
  errorFormat: "minimal",
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

// src/index.ts
__reExport(src_exports, require("@prisma/client"), module.exports);

// src/data/mutations.ts
var mutations_exports = {};
__export(mutations_exports, {
  createApiKey: () => createApiKey,
  createChannel: () => createChannel,
  createChannelInvitation: () => createChannelInvitation,
  createContactFormEntry: () => createContactFormEntry,
  createMessage: () => createMessage,
  createOrganisation: () => createOrganisation,
  createReaction: () => createReaction,
  customMessage: () => customMessage,
  deleteReaction: () => deleteReaction,
  setCurrentOrganisationId: () => setCurrentOrganisationId,
  signIn: () => signIn,
  signInWithMagicLink: () => signInWithMagicLink,
  signOut: () => signOut,
  signUp: () => signUp,
  updateMessage: () => updateMessage,
  updateProfile: () => updateProfile,
  visitorSignIn: () => visitorSignIn,
  waitingListSignUp: () => waitingListSignUp
});
var z = __toESM(require("zod"));
var import_uniqolor = require("uniqolor");

// ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// ../../node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number3 = Number(dirtyNumber);
  if (isNaN(number3)) {
    return number3;
  }
  return number3 < 0 ? Math.ceil(number3) : Math.floor(number3);
}

// ../../node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// ../../node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// ../../node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// src/data/mutations.ts
var import_cuid2 = __toESM(require_cuid2());

// src/data/error.ts
var ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1e3,
  VALIDATION_ERROR: 1001,
  INVALID_CREDENTIALS_ERROR: 1002,
  PRISMA_ERROR: 2e3
};
function createError(errorKind) {
  return (params) => {
    const { message, payload, statusCode = 200 } = params;
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } };
    }
    return {
      success: false,
      error: {
        statusCode,
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message: typeof message === "string" ? message : JSON.stringify(message),
        payload
      }
    };
  };
}
var prismaError = createError("PRISMA_ERROR");
var insufficientPermissionsError = createError(
  "INSUFFICIENT_PERMISSIONS"
);
var validationError = createError("VALIDATION_ERROR");
var invalidCredentialsError = createError("INVALID_CREDENTIALS_ERROR");

// src/data/handlers.ts
function createPrecedure(args) {
  const {
    handler,
    schema,
    globalRoles,
    membershipRoles,
    isPublic = false,
    doNotValidate = false,
    cors = false
  } = args;
  return {
    cors,
    isPublic,
    handler: (args2, ctx) => {
      let error = null;
      if (membershipRoles && args2.organisationId) {
        if (!membershipRoles.includes(ctx.membershipRoles[args2.organisationId])) {
          error = insufficientPermissionsError({ statusCode: 403 });
        }
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        error = insufficientPermissionsError({ statusCode: 403 });
      }
      if (schema && !doNotValidate) {
        const { success, ...rest } = schema.safeParse(args2);
        if (!success) {
          error = validationError({
            payload: rest == null ? void 0 : rest.error,
            statusCode: 403
          });
        }
      }
      if (error) {
        return Promise.resolve(error);
      }
      return handler(args2, ctx);
    }
  };
}

// src/data/mutations.ts
var import_client2 = require("@prisma/client");
var createChannel = createPrecedure({
  schema: z.object({
    name: z.string({ required_error: "Name is required" }).min(3, "Channel name is too short"),
    kind: z.enum([import_client2.ChannelKind.PRIVATE, import_client2.ChannelKind.PUBLIC], {
      required_error: "Channel kind is required"
    }),
    organisationId: z.number({ required_error: "Organisation id is required" })
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { id } = ctx;
    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdById: id, organisationId }
      });
      return {
        success: true,
        data
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var createOrganisation = createPrecedure({
  schema: z.object({ name: z.string() }),
  handler: async (args) => {
    try {
      const org = await prisma.organisation.create({
        data: {
          name: args.name
        }
      });
      return {
        data: org,
        success: true
      };
    } catch (err) {
      return prismaError({ payload: err, statusCode: 400 });
    }
  }
});
var signUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
  }),
  handler: async (args, ctx) => {
    try {
      const { password: passwordRaw, email, name } = args;
      const password = await ctx.helpers.hashPassword(passwordRaw);
      const user = await prisma.user.create({
        data: {
          email,
          password,
          role: "CUSTOMER",
          userProfile: {
            create: {
              username: name,
              profileColor: (() => (0, import_uniqolor.random)({ saturation: [50, 80] }).color)()
            }
          },
          userStatus: {
            create: {
              status: "ONLINE"
            }
          },
          memberships: {
            create: {
              role: "USER",
              organisationId: 1
            }
          }
        },
        select: {
          email: true
        }
      });
      return {
        success: true,
        data: { user }
      };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  }
});
var signIn = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string()
  }),
  handler: async (args, ctx) => {
    const { email, password } = args;
    const { helpers } = ctx;
    console.log(email, password);
    try {
      const user = await prisma.user.findFirst({
        where: { email },
        include: {
          userProfile: true,
          userStatus: true,
          memberships: {
            include: {
              organisation: true
            }
          }
        }
      });
      if (user) {
        const passwordMatches = await helpers.verifyPassword(
          password,
          user.password
        );
        if (passwordMatches) {
          const token = helpers.jwtSign({
            id: user.id,
            userId: user.publicId,
            globalRole: user.role,
            membershipRoles: Object.fromEntries(
              user.memberships.map((membership) => [
                membership.organisation.publicId,
                membership.role
              ])
            )
          });
          const now = Date.now();
          helpers.setHeader("Access-Control-Allow-Credentials", "true");
          helpers.setCookie("Authorization", `Bearer ${token}`, {
            expires: addDays(now, 1),
            path: "/",
            httpOnly: true,
            sameSite: true
          });
          const { password: _, ...data } = user;
          return {
            success: true,
            data: { ...data, token }
          };
        } else {
          helpers.setStatusCode(401);
          return invalidCredentialsError({});
        }
      } else {
        helpers.setStatusCode(401);
        return invalidCredentialsError({});
      }
    } catch (error) {
      return invalidCredentialsError({});
    }
  }
});
var signInWithMagicLink = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    pin: z.string(),
    channelId: z.number()
  }),
  handler: async (args, ctx) => {
    const { email, pin, channelId } = args;
    const { helpers } = ctx;
    let invitation;
    try {
      invitation = await prisma.channelInvitation.findFirst({
        where: {
          issuedEmail: email,
          pin,
          channelId
        },
        include: {
          channel: true
        }
      });
    } catch (err) {
      return {
        success: false,
        error: insufficientPermissionsError({})
      };
    }
    let user;
    if (invitation) {
      try {
        user = await prisma.user.findFirst({
          where: { email },
          include: {
            userProfile: true,
            userStatus: true,
            memberships: {
              include: {
                organisation: true
              }
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return {
        success: false,
        error: insufficientPermissionsError({})
      };
    }
    if (user) {
      await prisma.channelInvitation.update({
        where: { id: invitation.id },
        data: {
          createdForId: user.id
        }
      });
      const token = helpers.jwtSign({
        id: user.id,
        userId: user.publicId,
        globalRole: user.role,
        membershipRoles: Object.fromEntries(
          user.memberships.map((membership) => [
            membership.organisation.id,
            membership.role
          ])
        )
      });
      const now = Date.now();
      helpers.setHeader("Access-Control-Allow-Credentials", "true");
      helpers.setCookie("Authorization", `Bearer ${token}`, {
        expires: addDays(now, 1),
        path: "/",
        httpOnly: true,
        sameSite: true
      });
      const { password: _, ...data } = user;
      return {
        success: true,
        data: { ...data, token }
      };
    }
    user = await prisma.user.create({
      data: {
        email,
        role: "CUSTOMER",
        userProfile: {
          create: {
            username: invitation.username,
            profileColor: (() => (0, import_uniqolor.random)({ saturation: [50, 80] }).color)()
          }
        },
        userStatus: {
          create: {
            status: "ONLINE"
          }
        },
        memberships: {
          create: {
            role: "EXTERNAL",
            organisationId: invitation.channel.organisationId
          }
        },
        channelInvitationsReceived: {
          connect: [{ id: invitation.id }]
        }
      },
      select: {
        email: true,
        memberships: true
      }
    });
    try {
      if (user) {
        const passwordMatches = true;
        if (passwordMatches) {
          const token = helpers.jwtSign({
            id: user.id,
            userId: user.publicId,
            globalRole: user.role,
            membershipRoles: Object.fromEntries(
              user.memberships.map((membership) => [
                membership.organisation.id,
                membership.role
              ])
            )
          });
          const now = Date.now();
          helpers.setHeader("Access-Control-Allow-Credentials", "true");
          helpers.setCookie("Authorization", `Bearer ${token}`, {
            expires: addDays(now, 1),
            path: "/",
            httpOnly: true,
            sameSite: true
          });
          const { password: _, ...data } = user;
          return {
            success: true,
            data: { ...data, token }
          };
        } else {
          helpers.setStatusCode(401);
          return invalidCredentialsError({});
        }
      } else {
        helpers.setStatusCode(401);
        return invalidCredentialsError({});
      }
    } catch (error) {
      return invalidCredentialsError({});
    }
  }
});
var signOut = createPrecedure({
  handler: async (_, ctx) => {
    ctx.helpers.deleteCookie("Authorization");
    return {
      success: true,
      data: { removeToken: true }
    };
  }
});
var setCurrentOrganisationId = createPrecedure({
  schema: z.object({ organisationId: z.string() }),
  handler: async (args, ctx) => {
    const { helpers } = ctx;
    helpers.setCookie("X-Organisation-Id", args.organisationId, {
      path: "/",
      httpOnly: true,
      sameSite: true
    });
    return {
      success: true,
      data: {
        currentOrganisationId: args.organisationId
      }
    };
  }
});
var updateProfile = createPrecedure({
  schema: z.object({ username: z.string(), profilePictureUrl: z.string() }),
  handler: async (args, ctx) => {
    const { profilePictureUrl, username } = args;
    const userProfile = await prisma.userProfile.update({
      data: { username, profilePictureUrl },
      where: { userId: ctx.id }
    });
    return {
      success: true,
      data: userProfile
    };
  }
});
var createMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string(),
    senderId: z.number(),
    //
    conversationId: z.number().optional(),
    receiverId: z.number().optional(),
    channelId: z.number().optional()
  }),
  handler: async (args, ctx) => {
    try {
      const message = await prisma.message.create({
        data: {
          ...args
        },
        include: {
          thread: true,
          reactions: true,
          sender: {
            include: {
              userProfile: true
            }
          }
        }
      });
      ctx.helpers.io.emit("message:created", message);
      return {
        success: true,
        data: message
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  }
});
var updateMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string()
  }),
  handler: async (args) => {
    try {
      const message = await prisma.message.update({
        where: { publicId: args.publicId },
        data: {
          text: args.text
        },
        include: {
          thread: true
        }
      });
      return {
        success: true,
        data: message
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  }
});
var createReaction = createPrecedure({
  schema: z.object({
    unified: z.string(),
    messageId: z.number()
  }),
  handler: async (args, ctx) => {
    const reaction = await prisma.reaction.create({
      data: {
        unified: args.unified,
        messageId: args.messageId,
        userId: ctx.id
      }
    });
    return {
      success: true,
      data: reaction
    };
  }
});
var deleteReaction = createPrecedure({
  schema: z.object({
    id: z.number()
  }),
  handler: async (args) => {
    const reaction = await prisma.reaction.delete({
      where: {
        id: args.id
      }
    });
    return {
      success: true,
      data: reaction
    };
  }
});
var waitingListSignUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string(),
    agreedToReceiveUpdates: z.boolean().optional()
  }),
  handler: async (args) => {
    try {
      const waitinglist = await prisma.waitingList.create({
        data: {
          email: args.email,
          agreedToReceiveUpdates: args.agreedToReceiveUpdates
        }
      });
      return {
        success: true,
        data: waitinglist
      };
    } catch (err) {
      return prismaError({ message: "something went wrong", statusCode: 400 });
    }
  }
});
var createContactFormEntry = createPrecedure({
  cors: true,
  isPublic: true,
  schema: z.object({
    email: z.string(),
    jobTitle: z.string().optional(),
    description: z.string().optional(),
    agreedToReceiveUpdates: z.boolean().optional()
  }),
  handler: async (args) => {
    try {
      const { description, email, jobTitle, agreedToReceiveUpdates } = args;
      const waitinglist = await prisma.contactForm.create({
        data: { email, description, jobTitle, agreedToReceiveUpdates }
      });
      return {
        success: true,
        data: waitinglist
      };
    } catch (err) {
      return prismaError({
        message: "something went wrong",
        statusCode: 400,
        payload: err
      });
    }
  }
});
var createChannelInvitation = createPrecedure({
  schema: z.object({
    channelId: z.number(),
    email: z.string(),
    name: z.string(),
    pin: z.string()
  }),
  handler: async (args, ctx) => {
    const { channelId, email, name, pin } = args;
    const { id } = ctx;
    const user = await prisma.user.findFirst({ where: { email } });
    try {
      const channel = await prisma.channel.findUnique({
        where: { id: channelId }
      });
      if (!channel) {
        return prismaError({});
      }
      await prisma.channelInvitation.create({
        data: {
          issuedEmail: email,
          pin,
          username: name,
          channelId,
          createdById: id,
          createdForId: user == null ? void 0 : user.id
        }
      });
      return {
        data: {
          token: Buffer.from(
            JSON.stringify({ channelId, email, name })
          ).toString("base64")
        },
        success: true
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var createApiKey = createPrecedure({
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    organisationId: z.number()
  }),
  handler: async (args, ctx) => {
    const { description, name, organisationId } = args;
    const key = (0, import_cuid2.createId)();
    try {
      const apiKey = await prisma.apiKey.create({
        data: {
          key,
          name,
          description,
          creatorId: ctx.id,
          organisationId
        }
      });
      return {
        success: true,
        data: apiKey
      };
    } catch (err) {
      return prismaError({});
    }
  }
});
var customMessage = createPrecedure({
  cors: true,
  isPublic: true,
  schema: z.object({
    channelId: z.string(),
    data: z.object({})
  }),
  handler: async (args, ctx) => {
    const { data, channelId } = args;
    const apiKeyToken = ctx.helpers.getHeader("Flect-API-Key") ?? ctx.helpers.getHeader("flect-api-key");
    if (!apiKeyToken) {
      return insufficientPermissionsError({});
    }
    const apiKey = await prisma.apiKey.findUnique({
      where: {
        key: apiKeyToken
      }
    });
    if (!apiKey) {
      return insufficientPermissionsError({});
    }
    const channel = await prisma.channel.findFirst({
      where: {
        publicId: channelId
      }
    });
    function writeValue(value) {
      const basic = ["boolean", "string", "number"];
      if (!basic.includes(typeof value)) {
        return JSON.stringify(value);
      }
      return String(value);
    }
    const text = Object.entries(data).map(([key, value]) => {
      return [
        {
          type: "paragraph",
          content: [{ type: "text", marks: [{ type: "bold" }], text: key }]
        },
        {
          type: "paragraph",
          content: [{ type: "text", text: writeValue(value) }]
        }
      ];
    }).flat();
    const message = await prisma.message.create({
      data: {
        channelId: channel.id,
        text: JSON.stringify(text),
        senderId: 0
      }
    });
    if (message) {
      ctx.helpers.io.emit("message:created", message);
    }
    return {
      success: true,
      data: message
    };
  }
});
var visitorSignIn = createPrecedure({
  isPublic: true,
  cors: true,
  schema: z.object({
    channelId: z.string().min(25),
    email: z.string().email(),
    name: z.string().min(2, "Name is too short"),
    text: z.string().min(44, "Message is too short, please add more detail")
  }),
  handler: async (args, ctx) => {
    const { channelId, email, name, text } = args;
    const { helpers } = ctx;
    const channel = await prisma.channel.findFirst({
      where: { publicId: channelId }
    });
    const user = await prisma.user.create({
      data: {
        email,
        role: "CUSTOMER",
        userProfile: {
          create: {
            username: name,
            profileColor: (() => (0, import_uniqolor.random)({ saturation: [50, 80] }).color)()
          }
        },
        memberships: {
          create: {
            role: "VISITOR",
            organisationId: channel.organisationId
          }
        },
        userStatus: {
          create: {
            status: "ONLINE"
          }
        }
      }
    });
    const message = await prisma.message.create({
      data: {
        text: JSON.stringify([
          {
            type: "paragraph",
            content: [{ type: "text", text }]
          }
        ]),
        channelId: channel.id,
        senderId: user.id
      }
    });
    helpers.io.emit("message:created", message);
    const token = helpers.jwtSign({
      id: user.id,
      userId: user.publicId,
      globalRole: user.role,
      membershipRoles: { [channel.organisationId]: "VISITOR" }
    });
    const now = Date.now();
    helpers.setHeader("Access-Control-Allow-Credentials", "true");
    helpers.setCookie("Authorization", `Bearer ${token}`, {
      expires: addDays(now, 1),
      path: "/",
      httpOnly: true,
      sameSite: true
    });
    const { password: _, ...data } = user;
    return {
      success: true,
      data: { user: { ...data }, token, message }
    };
  }
});

// src/data/queries.ts
var queries_exports = {};
__export(queries_exports, {
  getChannelInvitation: () => getChannelInvitation,
  getCurrentOrganisationId: () => getCurrentOrganisationId,
  getMessage: () => getMessage,
  listChannelMessages: () => listChannelMessages,
  listChannels: () => listChannels,
  listDMMessages: () => listDMMessages,
  listDirectMessages: () => listDirectMessages,
  listMessages: () => listMessages,
  listThreadMessages: () => listThreadMessages,
  listUsers: () => listUsers,
  me: () => me
});
var z2 = __toESM(require("zod"));
var me = createPrecedure({
  handler: async (_, ctx) => {
    if (!ctx.userId) {
      return insufficientPermissionsError({ statusCode: 403 });
    }
    const user = await prisma.user.findFirst({
      where: { publicId: ctx.userId },
      include: {
        userProfile: true,
        userStatus: true,
        memberships: {
          include: {
            organisation: true
          }
        }
      }
    });
    return {
      success: true,
      data: user
    };
  }
});
var listChannels = createPrecedure({
  doNotValidate: true,
  schema: z2.object({ organisationId: z2.number() }),
  handler: async (args, ctx) => {
    const role = ctx.membershipRoles[args.organisationId];
    if (role === "EXTERNAL") {
      const user = await prisma.user.findFirst({
        where: { publicId: ctx.userId },
        include: {
          channelInvitationsReceived: true
        }
      });
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: Number(args.organisationId),
          id: { in: user.channelInvitationsReceived.map((i) => i.channelId) }
        }
      });
      return {
        success: true,
        data: channels
      };
    }
    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: Number(args.organisationId)
        }
      });
      return {
        success: true,
        data: channels
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listDirectMessages = createPrecedure({
  handler: async (_, ctx) => {
    try {
      const directMessages = await prisma.message.findMany({
        distinct: ["senderId", "receiverId"],
        where: {
          AND: [
            {
              NOT: {
                AND: [
                  { senderId: { equals: ctx.id } },
                  { receiverId: { equals: ctx.id } }
                ]
              }
            },
            {
              OR: [
                {
                  senderId: { equals: ctx.id },
                  channelId: { equals: null }
                },
                {
                  receiverId: { equals: ctx.id },
                  channelId: { equals: null }
                }
              ]
            }
          ]
        }
      });
      return {
        success: true,
        data: directMessages
      };
    } catch (error) {
      console.log(error);
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var getMessage = createPrecedure({
  schema: z2.object({ messagePublicId: z2.string() }),
  handler: async (args) => {
    try {
      const message = await prisma.message.findFirst({
        where: { publicId: args.messagePublicId }
      });
      return {
        success: true,
        data: message
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var getCurrentOrganisationId = createPrecedure({
  handler: async (_, ctx) => {
    const { currentOrganisationId } = ctx;
    return {
      success: true,
      data: {
        currentOrganisationId
      }
    };
  }
});
var listMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    channelId: z2.number().optional(),
    receiverId: z2.number().optional(),
    conversationId: z2.number().optional()
  }),
  handler: async (args, ctx) => {
    const channelId = Number(args.channelId);
    const receiverId = Number(args.receiverId);
    if (isNaN(channelId) && isNaN(receiverId)) {
      return prismaError({ payload: { issues: [] }, statusCode: 400 });
    }
    let messages = [];
    try {
      if (isNaN(receiverId)) {
        messages = await prisma.message.findMany({
          where: {
            channelId
          },
          orderBy: { createdAt: "asc" }
        });
      }
      if (isNaN(channelId)) {
        messages = await prisma.message.findMany({
          where: {
            OR: [
              { receiverId, senderId: ctx.id },
              { senderId: receiverId, receiverId: ctx.id }
            ]
          },
          orderBy: { createdAt: "asc" }
        });
      }
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listChannelMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    channelId: z2.number().optional()
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          channelId: Number(args.channelId)
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listDMMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    receiverId: z2.number().optional()
  }),
  handler: async (args, ctx) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              receiverId: Number(args.receiverId),
              senderId: Number(ctx.id)
            },
            {
              receiverId: Number(ctx.id),
              senderId: Number(args.receiverId)
            }
          ]
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listThreadMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    conversationId: z2.number().optional(),
    withUsers: z2.boolean().optional()
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          conversationId: Number(args.conversationId)
        },
        include: {
          thread: true,
          reactions: true,
          ...args.withUsers ? { sender: { include: { userProfile: true } }, receiver: true } : {}
        },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listUsers = createPrecedure({
  schema: z2.object({ organisationId: z2.string() }),
  handler: async (args) => {
    try {
      const users = await prisma.user.findMany({
        where: {
          memberships: {
            some: {
              organisation: {
                publicId: { equals: args.organisationId }
              }
            }
          }
        },
        include: {
          userProfile: true,
          userStatus: true
        }
      });
      return {
        success: true,
        data: users
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var getChannelInvitation = createPrecedure({
  schema: z2.object({ token: z2.string() }),
  handler: async (args, ctx) => {
    const { token } = args;
    const plain = Buffer.from(token, "base64").toString("utf8");
    const { channelId, email, name } = JSON.parse(plain);
    return {
      success: true,
      data: {
        channelId,
        email,
        name
      }
    };
  }
});

// src/data/endpoints.ts
var mutations = mutations_exports;
var queries = queries_exports;

// src/seed.ts
var import_crypto = require("crypto");
var people = [
  {
    name: "Alina Lambert",
    email: "alina@reflect.rocks",
    avatarUrl: "alina.png",
    password: "reflectrocks"
  },
  {
    name: "Ayla Gregowski",
    email: "ayla@reflect.rocks",
    avatarUrl: "ayla.png",
    password: "reflectrocks"
  },
  {
    name: "Celine Parr",
    email: "cleline@reflect.rocks",
    avatarUrl: "celine.png",
    password: "reflectrocks"
  },
  {
    name: "Dave Schneider",
    email: "dave@reflect.rocks",
    avatarUrl: "dave.png",
    password: "reflectrocks"
  },
  {
    name: "Jakob Frater",
    email: "jakob@reflect.rocks",
    avatarUrl: "jakob.png",
    password: "reflectrocks"
  },
  {
    name: "Michael Selkis",
    email: "michael@reflect.rocks",
    avatarUrl: "michael.png",
    password: "reflectrocks"
  },
  {
    name: "Norah Scott",
    email: "norah@reflect.rocks",
    avatarUrl: "norah.png",
    password: "reflectrocks"
  }
];
async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = (0, import_crypto.randomBytes)(16).toString("hex");
    (0, import_crypto.scrypt)(password, salt, 64, (err, derivedKey) => {
      if (err)
        reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}
async function seed() {
  const org = await prisma.organisation.create({
    data: {
      name: "Reflect"
    }
  });
  const admin = await prisma.user.create({
    data: {
      email: "enes@reflect.rocks",
      password: await hashPassword("reflectrocks"),
      role: "SUPERADMIN",
      userProfile: {
        create: {
          username: "Enes Tufekci",
          profilePictureUrl: "enes.png",
          profileColor: "#00000"
        }
      },
      userStatus: {
        create: {
          status: "ONLINE"
        }
      },
      memberships: {
        create: {
          role: "OWNER",
          organisationId: org.id
        }
      }
    }
  });
  await prisma.channel.createMany({
    data: [
      {
        createdById: admin.id,
        name: "General",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Bugs",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Feedback",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Feature requests",
        organisationId: org.id
      }
    ]
  });
  for (const person of people) {
    await prisma.user.create({
      data: {
        email: person.email,
        role: "CUSTOMER",
        password: await hashPassword(person.password),
        userProfile: {
          create: {
            username: person.name,
            profileColor: "",
            profilePictureUrl: person.avatarUrl
          }
        },
        userStatus: {
          create: {
            status: "ONLINE"
          }
        },
        memberships: {
          create: {
            organisationId: org.id,
            role: "USER"
          }
        }
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mutations,
  prisma,
  queries,
  seed,
  ...require("@prisma/client")
});
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
