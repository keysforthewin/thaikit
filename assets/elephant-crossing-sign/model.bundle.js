var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../repo/scratch/elephant-crossing-sign/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createElephantCrossingSignModel: () => createElephantCrossingSignModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "elephant-crossing-sign",
  "name": "Elephant Crossing Sign",
  "exportName": "ElephantCrossingSign",
  "envelope": "Envelope 0.9 x 2.1 x 0.134 m, origin base-centre on the post axis, +Y up, +Z the printed face.\n * Budget (small, overridden): <=800 triangles, <=2 draw calls, <=2 materials, <=2 unique geometries.",
  "materials": [
    {
      "id": "sheeting",
      "color": 16777215,
      "roughness": 0.42,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "galv",
      "color": 16777215,
      "roughness": 0.55,
      "metalness": 0.3,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "sheeting",
      "kind": "baked",
      "uri": "data:image/webp;base64,UklGRgBXAABXRUJQVlA4IPRWAAAwiAGdASo5An0CPlUqkUYjoqGhJfOpGHAKiWNu182iq6i612akuy5tQNuKzhZH4Dfx/9S/pP9w/f///+baI3yn+P/aD+7++3bn85/eP05/c/2B+bfjD2l51Hlf63/s/uk+Wv/O9df6x/73uIfxn+ef6L/Tf5T9m+8d+6/qX/1/++/cj3iv/B60f8p6kP+y6o70N/Ns/5n7ef//5a/63/8P3H+Av/Ffyj///v/8AH//9hj+Af8L/////lO/I/9K67f0r3Xf6r9x/h/vF2p/dZ99+bHxu7h/2j/R9Cz3B/pvzD/vnry8AnpfMg75f93/E+s7H/sr2wP7F5wf68Dhv1PgqL4QKv3SXX3wLEWXj8+OEKoXnC4MhAwVF8IFwZCBgqLttZiC8Iy+mbH7qmfzzQYKHZN/+gqL4QLgyEDBUXwgXBkHmXmCOT3DQdOSgHWB4ru05mwAEffvNmaeBrCkEHKgyeMm9GOcbhAuDIQMFRfCBcGQAcX1s40Pd+e9WzRG7AkE/mHBoFO6X2BqXcZhVPNBn7gCu+sEmRKL4QLgyEDBUXwgXBHvxw1pLJovo+J8Z+ejnRshh5jaKtJOVTN5YaFHhrJz3wFhd1qNQJBUXwgXBkIGCovg/7xbuOgVsiRqlIXQg3DerNVT0JmBtWo0MmAjKLzNTjRU2nku/QtycP19IBY76gBhPet1Gp8to2aGP2/54XBkIGCovhAuDEjUOSWHY6lUONI/qRrlJBv0FSoIzu2h7cr5PY6PnZdouVJwIvmVZdVDn4H8nwPuk/d8YctRWSlPHRz1AIHUsHRX9BOp8FRfCBcGQgPwTONTAFm6XPXC/mBTXZulwvSUTCb27HSUuSpNAbb7/Ha8GG8qXZKMPxWBsNt7VcRPg9GRSE/5xL3h1Mmhtt6wIKWWdbVvigiVj3iYVfAoxUavG4QLgyEDBUSbPNjhLhKqVjVo46pyNybfMgGYb/+SNBec0h6Li9J9Nd1If8CqyGlN2jZEn7v4Ojkr1TEoNjkfemHkL9peG1HvL3vvaJUozOz+eTFiPlVFRfCBcGQeWNbc6oKGqkWgG+SI0BpU4D4zUwVo+uQiHareUuRlNAi1dmJ/GfBPqLhY0ovizYw+B+FmzN0x5xjo6Vu3G1SQB2WHOsSRDwj2RKkYT3t991rrPZTvj9hOp8FRfCBVjFka/hSQHGXbjDIHAx+e/pthZWmsxmo4kJvW0nbs5q6OPsPVJha+sOzMfzIC7MBCWLDgxCoxFCT5RPCr0pKLb7aweWorzPq8nqERl0kOv2QaSwZjPdQj/zwWWAF+CovhAtyk1hfZH0BVivReq/C79RHxYgD0B7fUfwgAPuOtBmaI5hX2TCNuFugZa3EsDtz7rvroFqdAjIQL6ppCk1FgCz0C84XBj+fSpKQDlv1Lz5CA/uFo4lOMUPy01rb3VzIDn9PGsPZvHnOJHAOoqvUkFshPSItW9ecPH66sNTDM084XQQasoVFrxtRhqyAWhW+h9r062zQLziG43oQiX+ezkQzXehx/qH6rtA6XhTo4uoFv4fg0QC84Vc7cvPYu8067P338VgoziKt69GUb8xlLh5xR3i/jgr6ddkjqLnM0miEZyTgBC4fZQufDUnIYyJLJgpQP6WHRALzFMpXoG2oKGkc5I+QLFFGSCH1eWqlvC8yWFG75vP19B298Xa4IhrvUpnj2FD9jV/e6IEKs9ptxwya2ZmB41qrYJooSyKDgDPTYN9cY6IFGqwXjNhSFC07UeaYA/KhMGuKIdyHLNxfnolF7g4rIHnG72qhWTYayU4ZAek5MVz23zqggJramojBFAW0ve9Gn1+UDWdzw/j2hq8Un2+G8RpNhP3tt++WWX2Vwdj7q6fRAq8nIGkTPcuiBmwgfRO28BLciygqMoV+i3JHhxI3xWxIiLFUTh3r+Ag44aoJHjp4Adv5ALOU3T+owsQvMI5mmCT0isCycDcFl0vc1Vimq223dUc4XJ/QeBWuzm/xTEzjWbyOtVvT+pLeScIJdlnvmZXtYOPj+pXJSs3jUmDW2+WwXC5yifyDpfD/tS7WJD6dGufcQdGtApyoh5Cs/iKHm9t1L7CH7JggYKjBasQuRDpXqDQHr1OI/+DDo3TNOoqMZmPztchKk+yyCp8NrtjLGx0xmEnXHR7K/K4KZMndhiNqRHACdZSo7sJMie9SRAvrLul31QzktBPox8E406djcOEGmFiDp6RvETuj4+GSRQxYGYcINxN3ie9Ff7Em/JYLy/TXa+mbsJDJh0qWiWH9kbIJSN1R7eXemyOsePicPCzNK+z8x+TF4n/VliHG6orfe94cB3vD19M18YOPqrm6eieWH2IpVTelAyDU2TBI842zzG2EKhYSQDUXwvFmXscyVEEKy4UsaZyOWMpXDihEbt9capAY+5vzZZJNQ/cOZmhPKLT2X2tZOtcuvRUiV7WvPJ+CVG9W0Ue2EITm1YrkxmxI5lVnbhgr6rDUw7ygFeVhOSQw/CjOgsp0ZyLul9P5SnhjtryeZXJ9k9spI9Vd8fa4bRptz4EGzHdCWsxfT0pZouRcRB+TWxCoDqQgXUvBUXwg3gVMlhW48duZTZ3CB/DgtYSf/BV3G5/k5cxzWJSJNeUqhn5voQwZOOWlnrymr5Vmq0yUMnad2PNGyVVoCR58ezfusALHxk1CEtNgYdlSJQLgyEDZfC0ZmTSrdvCsSYFYVAoPR16VuWY1/1A8ewH/Me8v40kyFNG/al0Q61A3IUh141vg1MOyvBuFwZCBjm57taL+VbGR8EIkbYZeWASdHuu50oFPdlzzKCJhgqL4Yf1PgqL4Qb1g/9mIjUl6HJ/V3+ozWTnm6pJs03H2rWEDBUX0fyEDBUXwicDFKbccaApDn7mdLQjzHlKoH/WpGQt8z6gYdlRUX0fyEDBUXwgZIi0H37aptTb06+jtMGX+9NuToWFg5ZmWa7eSi+EC4MjwRuEC4MhAwbQABGLxbw33RlDs6/aLb5h39XAnu6EtG6oqL4QLg0r5G4QLgyEDBrlcP9eIAO6bLwR/1hFX4XyAJh2VFRfDD+p8FRfCBcGRGlUJaU7SJbfO4bzUhAuDIQMFSZODIQHrJlGXMwaoF7efWUQT0cO4Hfp/Uivxavb9XQULDEtygXt0t0jyeTc4gU5dCo2M0owdGup8pkYQUxRavwgVBcWvVN76DSMMehYOiUTy7riffNjVRG9aPvvgRKoWEjO9iqvS5AVkH8CDOvshCGB9Nak09K3O74i0HwLb3MdH9QM4NwuDEkTzeExXSUSRTRrH3GrPsZ6eodMTloiOd8OYeMiqjzA2sTqkmfBpqQzmgFsMXSIgY1HSVa4RzF8aynhThUH49d+vFEbogYIOUbOVj5D4k4czLAkIGcG4XBiSb7hTF+xi6KphD9fXAH2c+4yKhHQdR0OpIVRdfifz/q8VTm45iy1cUM3IR9uC7mQYzxgXsOhruy0lLlC8+yDI2akP92nAteNNRvH0wme+gq3ARXTJJWn3U7y6sbkeFUIb7bofuOJifBXKqr0dK5gWSAunOZHphJPqHYUd7GGwbVyHFXV8/ser7fhC6oGColY+Ep5eJZ8zB+0L1LAkwdCQe1K3EbivYGUn2prWr4gdq/Rvfg0Kp/bkayR+0jM6YKZ4jwpQX3ZBefiKMltg8zH2cyLUFO1i6n71Y4rcH4ZpibKmcWfYjMLgm/sMmg1/tP24fZ7KlMUunnLqgYKiVRD+r+O/vWySnnbE1ZLNJ+d7mAx/674mONcTRi8UzRRXBX4CQMJs1IhO8L0LjpU+zoN9oiCNkkcfU/hW/pSPaRi00CBEciv3aXdHhDPp5n/gv8cz7R4113+DSvkbg/9B3rUbfnksUueyUhLy79CkTeXJyxQTPzHvnJHP2BzeSSXIZtH4EGZb8o7KHTJzDB6Ti/4IkDsJ4mqpSpaP7z9KmUdlGfkV3T8hwlhci0/zvKzRoCHYFou9r5blbrwmrjd53Y4DkmYTutkEyiU543gxen7pCj2wpvUzal0qB4/cTgV/xF3ICUdTDWCbBI8w7a5in+Omk6tXJy0xBnc2W3Lk1v+u8epSVv5UIHFqLlEI457d00txEMf0ggwyPBoI2pZ6z3Rkiu6/kBMOKrFp9+Wr/6AidtdRQpRwRbeFgDK04gNvZrOjxlLiesdM4Gy2Cgh1v6GSpl3zZAG8LgYi+GH8oAAD+/nDpr1gANb2dxbLDuiI7plJ0M4ivUXf987RcXLiwb4mOmeF4QKXCG2rCFDuPGSt0FIleLxwxBbJvsHFh6w/SkTbfocd+gGi1qugybJKhDu81wfKtlxR+9gAAAAAb+f4OvWm1tvKP2BN53FME91fCu6nAlrUT7X5rIsrRAcPVlBFibHzmCeQPJ1NGi2h+O+osAE58yofDtc/SqkqM4M3jybP3fLvk+xgDkFX7KM5QShRNcaHQAtWbXsx7QabnMxvrM5YXWIUWsrL5aEMIGwWcxdahYYmifliB5ExvuIDf0W+Yg2MWcDVwEAAAABlJ8A3hYRYJ5YUrWRZWon2vzWRZWon2vyu07DYZ+SfUl+S2i+OWMCJC3Nge/PfUb7MTHV6qo5N9+qQdSSNB2QBHWBW21tZaA7ZLvXuBMOuSpcrKX1dPp8voKu/GvHSN4UDGgb7g5d8Q9iHwH/bGOjF2kK07PkRlFAeFTfsOmffG+bUKeJOjavwbIQfeUfSLjtuqJNoRG2zgkfMgyaC5SqCsr+CLBwi88Kd0m8noczNymnJOfNRva2NE36gEAAAAbizq/DOWD8Lp3F9TcNcnT7yDIg6YYuDyDIg6YYuDcm2JsfOYJ5Gax/cV+JULajQZdonAgFPKSGD7ILLT0axnepNUlbHiUW453p7+QAFNZ6DxMkUCoVdrLcMQNSX0Je1mkvNNNdmnhBrm37mP7ZIEfJu/IKmICE7qteEwr6IRexqe+KMerQA+zcSQMUgJinWSKJjzbdHc17pUZC+OAhfcxCzERwf8P39+HKIw6kpnE1BcbVcAcxstqWckkTAzgNehmgyVJOmfIj3QUb6yGWByoX+0tP5Z/1Q845AIyq5SvzSDmFFqU92Wb7RF6QfPKlo5mblNOl8yuvhUHSU06QafOVR2qr+NfR3EwEAAABCmW7A/oEv2haqRRxkSWLHc3k+q0Xm6nwzzVKIm6nwzopMTPHpOb5UDcF5GeN9/EQQ2cnIZ11vbVGv6i2CFjwOksYgK/3vYAJI5EqTZgnQPnOH8ikQ51+LUni5idcF/am/IpQgt7jMu7rP8Qs7wdTjk3huX3fHw67VIsZycG8mBsCS4aD7s5gKeknv40NIMOjfRWtL/HlSg3QxRjmr0vFGoLLpoJmYCOf8I9WYm/0sXUYeqR7RYTrmoZURXObJPYFMlFJFtg+/nLwjiEnStpQBwYdwFXY+HwQ5ApVyIBpekTw5QhsLW95anYKW27Kn1DjNYLk50+Jd4XtzC8MWHxjYNdyN/N+18KpBDD2uEO93IyvlVGS4Npr34PsG+ehK24QY2T+BNZIVR5WMMka1CwxNo+YBQ5mblNOSdJzS6ent2wo1DgIAAACFMt2Bwud6/hntDueI0SwUtJrS1Eyo/5bTW3CM/Dpd3iG2lEn1Jfku/ak3aT3UWfe4oH7dtSd4gDHtAEX+uEz0nJiozxREUzUsNo+ZIjC1rKu/xnpFxb4hO4/kjABSCuki8lBFowexs8azKPrx5Iy2J5ekbeSsMnUOezpeWH1+ES86EJ2z/mZIdKsA8ae3fiOTOrMc8W2Sj3LGCsROEe1VAIqQ02t/9+Vm0/TonMJFzHaLtFJESc5liX8jQq2t3CPKt6jpZBNsDcV/O0eqX+hHEPwhJtmr1O2rbJX9DVQII8TCZ6SSMjDO9ZCGyc9iahqy/1f2KEqjkOcZx4/pc/+lIr1SXRkFwc9UNFfVbgfD/vlAADXt6FpXsZ4G6eKo86PxZzHdsadMAtaF92erTc+ugKb1PQncP3hL4lwasBEJat5GwblAW1OrVuMhd6b5Fb57fRpMyM+22vjsa80AAAAEKMNWalhr1TbSohNoD33S6siytRPtfmsiytRM/hIrlpLd1THhAqTFI7n3O8+HlyGJ6GZ1djML4pd04xIqRBofOX90QdmkpS+ajXYft/fl7/N/3+ckFrzOnYdcp8F/EZqNdsd84iTEeQNy3zmr12Qf4HJ5KIoTf20olJLPVEgBpkmtHm3s+/DqLEq2QYZyo9N+ZnCvirJqyyoQ98+DCpaGq4HRRqu6/kkdu7Y5lxeF2BTyXasK/ORh4RX663nLPuxQ3OxxhJqV3pzMsnB3G6ccZqCZNs4v494SF3A1ckCxjKSjN4eKqpYRG41IubPJZ1FgGk7h6socwJVViwTMcncDZy0GIdMlx+LrZTmQ3fqZ4kICAZlREaD4Qcis3VE5anofe1jYzzsz6PJdreuoXG6aacMHkZtSySAWwbtquqFFB5dt9iolyAjRCIwJD/9kZp4ewRTtNB2JiUTHiIQyathALSKJbT9gIyppOXegpL0IFzzqelKTIhgaGE5eUnMaAAAG4tEKjKMEjCJevJopINp128MXB5BkNJy3L6vFsTYwWkt3TJRk7w0exLRxdLWw561atg6fC0teOaExd0FFOmzasrXl5hXjanFegP5hWyApROYTEfFi9cphOUxlu+8dhyGRr5Gd2BOqmrVOewIj7w1S8q+FLG2B+FuQ76B1tRrYHqB03tH7Vyi72UHxcwiM2PW0aG7J8mURb4tSdFABN4Z8X7i0bFqFjvYezQoTCXFNyZpBytrnnhz8fzktBbX/Oi1Hl3Fx4IRvaBwCpPJlpP7ennSzn/l0MisobmSAq1wJQFrXx0rO97fCNsLlfVLSL4S4ifF/4WCEIUTfOEG+3BEQN7K6acEqrh/V7wqmPJrl9oe9GfVUp4h5x0mft34oqSd6uxZZWN4P8H4fXYPFsnC5GxSoXdlNlKq8wggeN43TLn1/HLKnYcbaDYFPKoKN4WG27yroiiV34SEEQdGjzZGeMHmo+eKLZoegrxn6tLoaD5KHzoHOztvuiwnoxzmDCIn6vMGgT7WELNAvzLI739OCKnFdY+OajXTJU003X00WYqcnr550AACAg9g/vWMpjmUOCVvRuy/SX1sjXe0tRMqP+UTN2Gw0M+CeRmshEkR2cYCS+ZRnNdXAfbccylLECUr5n0yD65Zqb3SkVqC7hG5iMjQxeANt1PUKdaYrp6QU1xEx89kAoabW/9KEvPDBamJyOKB7JLjLa07riNgUS7HL7ZL90SSDyPwfSj2BBTyvi/pC64xC/gKKFjtkE4XiPxgW7emrtu8bp/OdldxyVUmiLdA2FnjdlOxAsQsYudptz9XTkvfyYwFtFWKHl60DHWkkBfvu8WvduNp1Q47fesqq3o8KdpZ0+sEm7nrYO9wA8lIW+GhwQyNya9yiZcXja0Es+eQk4ZGQ32tUTnjXaQKTByANOJucNrOB882DEB8saaUxl6CPaQYB8//2tz4dEkWUSvWxBQOEhOkkwM+NImCi6iusbnpyQAhNNODftxnKCTn0gLG7hobqe59FcVouru/RD9Bi+5kVhi5nAuNH5ZT7Mtj/+phk9THCcpqAtWST30SmsXdzrVNlqGbFotGlmPKHqYuW/AiICczFNjoIDgFJ+B+t8KBHY6t4ZGVtBUGAgoACgMuAnu+SAsNizPqHc5Xrim80I96O5PgsBsqwsSJZoWAAAhTLTrdttQsNDIDUyphlj7XIvjuQZDSchYmUiQTyM8oENtFBnM5ZkL5DYcPdzwkxXbFwOo5jUhJBw8S6OYK85U9Jj2bO0yEJjt5/V/+1JPYTe85UtUGKf2v3Rwa2J5tSBy0Vomn8wJKHi+dBEHaJJmzfWLvOj0pkzuvWEeWY1KWD8ZO38FmqvwdmKkAQdMSpCWz4ay0LnLlIWOrKKav7KK4VzRkmJrl58G3OTjMJBSP7Z+HtbM/flQI8oVOGqOHfRgXSYIBzEg6pRt/QvFdBSLxSqqFcXWJbOWFqwsCg2WxPRUcOtg+0+c6r0awtQLNHBg+Yh+p3dl/0rTD0X62/BBnnyN+OQvoBuG+2u5Q+hnLG93Ftso+2M9mSLuqwxSkrI/OJbybO6FFjr4+5P2E3EvUh0kesK3VBwuPogGYV9ecx7Vz7ayc7jE2HRBLff/l1IinygMPuSWS5htNYX/9g/y3MBlEML0cnJKKmkiGLM4gDaR/pJnzUOx688jqBM2hNhKb5+yUb9hD48vrN81pyvI7kh7z6Mr6KgPonDjbS50cNwFd38CDsL1d4VG08FRZP7LkY+tT92lEJuuD6Na3HpdPvJts84V8YswwnDUomImqfded6+EtvwmoKwXjZMX+aVoug3+UfqWkQ7CGDjrTZmAJGSj3oxwIWRd1P641RyAO38WGfGVJiHCHn/qB+z8ACAAgYNsnGZ9Ls6aym/d84nm0NT6c6sYch+JZU9B3N3hjFWPwtxYmxgEIEGwa2XMObnEKW/7xL25iE0OlKJz36KxLGQJL4Y8GASoSeVdA9AcOEyiwb0uQ1P6RWEHwNmO16822J9xDJMPd1iAfXBTIOaRCRP6SZeNyZ+vQHi9tvk798iJ0AaNX8xkj6HgbDZDjJ9qjiOCxtT4LMnZsLdxGAnie8UHV77BqcAV3/YENueTvMvL49LVsKp7lb7nQ5rpKEmlmLkD9eba3me/6GyuaWeEh7RddnJxUfKhh7zfuR8/ciOaobFgSHnG7gm3rVRvtg7CrfXmy3cSPIeM1XnT6+KIUXKAVzXsRXecQLDDL6CRq5183iNXP1SfAqXvb3qLLvOxZ8+UNeWXGA1IK8B9jpm3o1Vez3l0lqrZG0nA8Lnoa1+XXFqIWPUMQ6ZqfgOCBVe8XGsYOedZYCXlgbY0y8xb/OiTN7nPhcB3+ZeK2WsXAX6B6ps6FgpfWvyoGjhuu5J94SWNdGb6nVGaElVGRnTxcNRrFbzF+fWVNANJpMTdZAjSt2BtFe1iXl9ZyzJw58OHdwy1E2KMSIB2lhMVYxkN9fvlNlNwkswil0x0Zi2st664I2OVaW+TI6xTrO9JnRj2ntEDFnETm14OoiFdGbw3oHFr8URL4nLuLqVEcbQnc8VpyF+WUbJhm3VvcGtiTELKCj0l6JzOAxTvkLyuAzYcqvDCxDOLMkKR9qZg1Z0NvHN5+ccp9ZG7Qk4tNgFBwC1DVSa7SPZm2jcomJ/cwKhsLJbJ+G0KllU9wNP/huSTx6ioZBHWiUWHFqLmekPGcywITSdHt271Q1rP5tYJqk29io+PP1jF5mmhTbebU++7ZEkfG7+VKQkdfsgkNO8wI2nuWeDzrtoUJMz9eRCaIrT+fOzFssCQBCiL/3dvy6KmFpfWy5gldR07qx6YAAWVqmtmieAC8dbkm/y4kMXT+WCeC+2QMhwbWfcVQKnqlAAIBvhH687QoQv9OEqd2dsP4qsCGwyw3gx4bU+7iPmbwmeI53T+b1JlJ5YcE8Za0Of6mApYTD8NMSQyzWRVSj5E7qBkXhE6Tw4cegzgBsIcCsCTEpJw+K3N67BYzhCm/jikq2u/+7MSNm9njUGPX3jlbGSyiIMYYgbVnjqpFbUnhQtO90F3J7N0G32GYp8ZB8/MHtV8mZxqHoA+Z5htYLU2EKmYjUN5PRQjkaTEFgbCb2zKIZjmCTVCoCeQQHcXmasjJiV5GOOiHedUHD3KsT29qUp4iRXkpiFag+HUIfjUCNQPSVCFmIw+EcZboM9pwkmZ9l7Znrkiez21AKAVYPe55y8Aw5oe0plAE/l89rsjxTQb0I0w+LJ/9T0mFIZwsC8O070EQkDEtYfnppSXMyqCzidhs6SKYeX96TMVDPO4av5fat4hT9iPCC7+P8pJsOjPTRVr+5lPOOAOsT9Y/qN9h53mnwojpJmxSXBFa4BGQLOAunRefOlIC6s7fzy41BkhnxlSYhybpi6smxFs8AHeBgetFF3rXGT0Aru937w2p93EfNX3SeFxU39IQ24ZjVH2DYLpQJZbLsZuiUIePEdNzBdqnahDPdgsqbrb9drS26BdKoO48DlsY6Pj03S7YMJluymjAnP5LqjiKuvBigGb4p3AyC9Qfu/wwm4hG3fWOWyRimOqtuYvdzzCQfrl5f8FBbkOf/DRqJPMO9ingXkjMA6ChSUanrOKX88qSTPJWOVxAPWR8cTC19ebHcYf214woJoNWtCAG7sEkmeeQFl4u4eUgTjy4KX/ddHW78x8HtnGqlxbpzFmpwvIN03L/nVZVQV3hg7bj2bFt1HGOQ+VguPCg/e7g9QUngqROHG/7zvot/4IO+9LfYBuNWK2QzmR5HXgQnSps2XxDoH+8RPSD/NeqrtkULakMD/SLunCiszYdnKBJmOG1fuIXRI8f+AcumFpHJO5QgAu0rdI0M2qnsG78tiOhOQ6UJZrxVm3U1L4Mq5wC6NOOXYsXv95a1MFi00h82TXit+V4MK6/lmVFPNoD7dRG0STS8a8EB/mGTmp7ntlc/VACVK1GIf7Xk+MiwzRr6vMjqNiqWjRGLONpCo5AWnpHuZeszjbilN9JAXDgInPleYp9edttzjZelKNC3boW0OfOfrcZTMNQupGvpqQvCE+ab7V/2XmNxr41PHiNUKY3xpNTMaJT1RPfBxIgNS0P46xoxtHy8c+7bRPCeH9iCGSZp5AmgCRxQ4Vj/H1FOTvsVqkERGv3DHkT4wAAVCHFQyyFiwhEYiXuG7i7hfmYzViiH05RbYCFX+8+FKke1uc23Kj44fKgR9q0uya/pA7PAxNhKYjysHJujCwEDGMIfKrQqEPf+hYZAlXtowfpC5u9Z+IacEm5d7r5DgzTUAeXIPDrXgDHXaDNA25Wiun8Gkh9adtXRyCKu5PEE3tyDHNToAnKO0IKs0j8uBCixWMkL1B4hUlQC5jqmAgQnhZlpb8Lef6q7IRXjqs1A6r0B/Fgf0sB4s2zXAmKIAPiHd7UBhc2vqQlHObUxGc/v+y2livNjUGsLbPN35RFTF4we3+puOVeqVWjqEjsds2AS4uKDCeWw/PgLbLtsiUBb3gZX5ZT3N5TsfMsDF9zE97bWNrDtaiEPCjuvnQ3+84WU4ixCtXhG8aDhZlrXSLdCnuPxvAazfOyi+EqXFT4Vfoc8sya5hYlzxo37igVo0Tu6zo7FveoGWqsdrRIC6GuQl0KOPflx5WOS4Vi0+ctia0sotW+s8T8QjfBqy8vfbVQunq7yOScGsAN/uApoo0qjtNQ/9AB9Su05QnHFUts9HVPJAsa3gXVU/hjdE/2fbQv+yxfLFqUt6/oUmzGh9xGh9r7JDnMCS5Mhr32ul5cxwWov2AFob8sMfe9r2eDZ/zEoYsolhO4qJF5vTw+3mdv63GOA1RHXYy5otiFYALnNwJjLKrRMyNmi25holHXtLCFGAhLCp8igKe9JCBv9NEI8e/7X1BSqz2nwJfw0nhl88IisHIi72/Bucr1wkrwF1q1fLadxGuTQZVzhRpMVmF4R+dmDMQLAz1YDO5H48icXnoDC5svcZMGMA5zZVqA3/w/l8RMHz0wsjNRZnYXNp1wM5mQae5RtHZVjW9J3bPG/DHq6mABNIdq63KYujzCNjQHNX8RvzyFOyY+y05Y3McbX0G7Ry71f+ajKHD9EJcieIfQ28KB5sPISQGnmx32+ecMjiaWAlHHmB8nrAgX+MQgasfVN0MiRx4xmw/sTp3wqtxO5Dbq7EE2TbA4R2e/VkMQE3J6ui/5ZOG7Zz3jgT0Qcrgm9EzTpGHJS2utUPac4bk4zyJeRU/X83WjTe2QSybQJcUt3nP81+oxMi/xmhCeI16S/f4pXrS6yHmpb64NbrkDr4/FpcUZq8Zhmr1JnwEaN7SrCniBpP3HibndR2Ca/dyrVsJeGLje3ZnkjAqN3a2KqXkh221VZwCWTQ2RZE6yEWSTm8tSn2dH9bshyouxj6Ss8HpiMF3VCoECVTPFoHPJ64xrnImdafOqtZnrbEnIdCEPhNzV7mX6CFQ+zBfabqTHP/RqjFQgtpudhqW854xYJMCekNvKxMM8a6BHZ4a0zh+N4/jzYYQKXX3EkZUMlYwMHsPy23ne75vpiDvA/Lc/oaAPNyqm0n8YMWbT+UuuyH9J6cKxNffMn72mV9EkXblAVGDpvPQfI51SW4lKkYCWi/KnaJ/DeKGRiAnVUQWg119o8hOXHVMIr7rP+TdrZt1M9QhjO05MyhGEsyU1evurXJKj3F4I3s9dZWKaJ/jajjWllgc6X1eU2+E69ng8TNM8ULRHQ7uxsTM1a7FXwuzFusON3Z71JUCIqAAvHtJDacX4aa5qMTkaXeCdV/+n1Ly/JzA+tBhK114NjZswtSxFZuK2aylYGT765nUDJa+CyOJBRK7PQEGHXNK3Oao4pEexumAspE9BFJj7dPf+Z95Ua7r01PR3bF7lxtgL5iBqq1jcBL9m16s8QLlM/ApIUHSP8zSnkP+7kUGuGhsnNN/bQCfHBHh6uZ138BNFePTdM2iDoNdCKmbDycUkDFWwWOPG+KaA2Y8ESb4q6O7POab3mRFKuzpMLXsdtcS07Bn5934LuDTfGG8yxJ1jp4YXDuOep99edJDH+37SdaIUqj2HSoxuBWwe/taE8jp9E/LOXKQEEiGGuksRwawsR3wY/eLTLVi6pnSu6NO8zw+7UzibToyeHqsQgE2X2N/KSNyplb62qADPkXna1aoNeWyi7+hRoIIPTHB39OqygYMUqGq/NmLfGltn/iNy8QjI+NdZVQZNCmq0RvgNKj6HNkS+a61kOhQMYgHFiZzL4rYHDBmRfPgEFGHJnZmSf6Zb/prjOs1n8rBA/h6RutLXv/E1JOtodXvenLA+Oy1Rm+tUzVVtDLx/Ifyz4bA6XCuTa+2EDuPIHMl6lk7YTLRVyiG/lAI7b7wGktVRUk8OIrw1HW+e0ncio6Lgpzi+rutmidpFNoSEp5gzIherbHq7koI9QZTnuV1gbDZ9YPJc2pD5Uiwez5MuHZRjMlnja8RfKeQL+MBLhZJkst+roZY1Mzt+bl6JxvmAI9dHy6eeJdVrelLKgtDjZVFAUydepPJvJgdjPjdtOQGqdW72mefX2bl7q+AorZiGs9Qxzbc8y17wO+EpiKTME+5lgCKmIKVIaPykBJ20YS9+S3zOxE7if2NEoWHx5atBYq4XyMw1UfREv1SUEi/XdHmxTQUUWpI8Q/+OcDD1DT/tVBThU9MMptlyQYWb3rpGpikPbxX96BDekltjbd/Ob2q5pFbHUp/u/tPSyffIDq/2DRuLUR9Cg/Z8LDnb/DGC3SkJkPcHwX9O/KlLdgrjDLGyecaZHf5pSFhGh+w6++r/wkJvr1zNqvUS3Jv5U5xLAmQRGNYaur5kU6aMcN4aNng+VMNQAWAtcgggUqel8K6/WHq8wj5bgVSvV0GGIuGc8D1c/NF4fJI5YjnVmKL3mPb/bUUKT2c/ju5BCEOexCfv5iularYXlnszB/OVJLHk0ypyAD4I+PA5TpK2o1ddSvC4aGzOC4oSMKvFK1sMPiknYfX0Eq+ui3Vi94RuywmtRvyh9pFXtsD/eQ4inq/Z+m+setgkD/C7CLJ8DrT0107Clgn1z1zu7nl+GJO8d0ZzGXh1Oh2CGsEADeizi+GCfotSEEwpBzP2VlhO17cuH1XyUoRcliFpSzghkStS0EECUr6whJ5ltw0tAO6Ut2jOD0eQq+vg/ifch4l9uNG6KM33y6aYfHAaw/nAjkIucqGBqMdMU/SBOE/cS8SPbAgB0SNV8Cy2xg34BsJZ6xAlpt/Kuce/tnIvLi4bKmHa7I87LfmYwN8YT4/EnoOR9B4kmdu2qCtS8tas8KXcDwMhNF5OK2qQ3y5qc4RI+WsIhNXdL4qAHFHibw4F7WKrT2xIbt4PoFMrDfahDazFcjn01efL87DGWHKrAAdQ8CQezA0X1+zQmDHtTjmVtD7q5JWTok6+5IgmMKj/jDyimbFVZGkPBPZMs5pKsl9fZEGhZWWV+xO2A/I/z4cAnyDvlbCCFxTTTOVa5JLy7wo6fu+YWY9h3nWFP2csv/yKioPO9BtbkM5+FkP/1qbQ86NzKr8Jo5Napkw8kpJb0LJvEZthe10zdSDfqv+k2ujm3U7j1kbKG4nWf4UMEoo4kH55cnlrvh9EkGkSlKCKLS6A/472P/BdTSrTuxloUR4dy7b9TPdI2hJvD4i7WlnqwjOK5MiAJEd2JfDaI5m+dTIdNm37STBhE69XPOauOxFafHgCxz9RVjbTOHtOhFQvovtiC7IwNMPeQgkrZyYe6vNrJu4oImaStE0pPbWnLga+XhnWLCkuSNdn9aYgtzRijKBeg3KeA6BVrgLSuHU6tCIQtTeV0mjhH/07MqEqXVIqcOFn5WZ3bbaEvrekmVYBgBJa1DBAwMCVVXkUsb1Zw7klI1mqprI9luXg4R4pl3q72y12x27to1DNYPxSNCNRrqduXsYFPUxJB3gkuhCIMlA8iWV+feK8MzmWm6t1KqXQGNjlQ+thD9OIrX+WrTmBURn37V6qON4d1x9NprFyUGy7WyXjbsYAXdO3O9TTwDebtI0NuqVphIhYemrNK2tFvAIA9mHLJrU8GXw/6z+9fwJaigK7L+X4p/TJiSxVtu5qv+v9Xi/DmjfnmYPbIkuc3WTe1SH8GNScjtN2kZU75TK8OYdhjD+tG5XsaGI4QJwa8ifJsDDpGnSH0ZjQOetje63XAlTxyzzQxRvUtbN6IdwwgALPXlCBGpIv5nizUyp8E+ZnZYfit4ImuYyMshbhlyoACQJYlWpaYQNANBO8m+qtECbhmkWXiCX83NuFH1wAL6Ws4Tz3aFwd4LuCXaEEceRIWMscQZ8s1xDaRvEBLjSBA2ol6YfhrS+f5oBT8JEuBlRJOSAxoyogEOAVh8eE1ohSPuP9Ql9fB3rwDuy+dr3pibiUlK3f6s8WO3KH4S2PivxFn7vinpGxbCIKUDlSnmhbt9DSGECu5Nv4ttdc3Q0VNV4F5BOYM+BuMjY9pUrQNfKrNHgB0nLT18v3oYgR3iUyYtj6jYQxDUxFOMGZKbs68wRILtJUhbm8qJq0/Xesro+l3k1IGM+0WQIaRMd6f0zY8YKVl+T7bRPzYGAp/u9y1lrsPY+3aFwWoYpyPXDHP5c4gSDuCm1tlMg77dAWuqlYiC2ZA1WlC7qSp4o9lh6ewYxqm5l8MMtQvPIOz+NlYz/oMj4mStvuR6fKSHn/Ev4Nq3CogDMoQvG26WPUGawVZQkWneFmtzIA6tObSlleAAQPFPMMgnP43R+C79rnXdiBfhri0OBh9t0ZvkCUf+jDUPuAjvLVj7n4zwOFrxkOIhBmbXzarcNlNtvuh80h5QsCP3Dkj0RBurxDF8DFJTJzfaz4PrkHAo4Gq1uVs0u51fY7PxYyfEEiKTPhXC6blWR9EY3Bo0B9/sEh0oDhvKDLEVYMWOF3MUtRU26k+eRud9qgvECGECeoxPfI8vL5ngOjwUEua/epr46wof9ZiH3MafpPuL4fgA8iCKMTq4hDwARouq/ah7TCbNjvlaY99O1DYvxPG4LGEAqz8oMzfubGD3T8KNoet9LTV0g3fqCgu/3XGYgvcgKz9v1CTF4BBk+BFwLSD+VzJgANsqfBPmZ5SRfzPFmp/Wq8+ZCt3P3d8FD6GUAP/NT8AXkAAyzgge3+b6R9McP/1tjC5LYPmTOqG1SM4DqBj7oDEkUrTUhu8CDoiXCuMFiE6gKgvYN7VttuqPB5QKQcFNWXzU/wIc9sSMKZzA/ZwxB3xGTlexTHBltIEoiCZbuZxLApT1j4z7O5MatRQiDydKmfAYkdwePA9lt9frkZ51Ivl8ikGGyehituDxygIFcvCtaawwYJd4H0Mgd7HQDN024QidnCupysnlp7E5wdpECnb+ICbzM5RwXK8kaR9GuYotxwTdKDqpZP+271ZwwupXWTE4Bh1YfHHPr6lHZIBT1HUcj+SvH9KiHQyUNZFSJI7CYPyk5wI/dovpKFM/w1rcZg5t9RMgqmlZTdDzLpeGCVPNdbTsYmVQpCi2zucBQ/bdd5X8+JR4vTbGyn4jRPXOFD7oRA19TiX1UvTGBRdSnvpo56gZjxfEcIeDY3Dt2jq0TXGuSvqWWT84VTd2sZtDModeswJb8oMFyEDELdt6aZDx+gX+hqe9gwE25GM3ra6Ob/yqCtDadA8fCJlczU3zLBEmpT/lTorycZPa1RldOzYWFprzwbvR9U0LiWSOT8NECd9N6TjsccFmPn4V9Nm6CFuEApb7Qtlr1hxomkqxe4lKxX1XpNCDxqZJ2NkfeirFSLz4/zYclJd39RmL57zCe659FB8CYQZkxnFh+wbItbinKgglta/XTrnR/TpsWWxcOVjRVWAWKzvDJ/L5DGqXDrNuwLxkoxWSq3iO1dIiphNnEsE1r9y8HEndZbi+4+Q2gBfAb+/m6Qz62uD3SLJYm/lVv6RHiIi8P3X7Pitpd0POrKnbcrUKughiiJszhuTY+CsWAnQ6ZNNChSRwVHxuRMeda4auJNhdMXcwu75VC1HlwMsc31BCX2oQ2xZtrFtnDj2yqd/hN4jtKXrMAAkGRPEuaWbg0IJzUft8zcRnGSjciDQ2qRmnuPwLxN3VnkgARBucP0L+tV0U3ua8+Gs6FB6OnEQRJFPyY8oYi1XHSnAl6IuW+3cyMLHXtDUm+XCDSqtqx1CosfzRo9XkzqoRBUw51WuI78O3RAwBVmhGeKMolM4kQPOH5lUq4tk9nhVhXp2hkLJ10KoLHTovvBfOyX5xloFAf4mvQgbiRsOX1mUpHS60hPHfLC/q59pHP+MAhZxvGCUd1F35rLoQVvar1V2Ol6W/T/B//1iV0ge4sKiBPkRkTxLmwBM3kl0m99hqy2vH6oVnk/GTRBih3KFedGIhbEdVgmpcE+yceZHoie/wlKwQX4/+iL81amhQbOY/k8wjL/qBjSIy7tsQt83WTHZL+v4TXfQddnqdoeKGwYCUwzWEASQ7QO9sgxUvQjvghnL6OouKH4QTUbiBy2e8qvcctzairY/M/DCAfvjw02QLjEoialdJCBHUJHhVRvy/XJ5hOu3c1yw3TJVZyWEKFliBuniJreGCA271FkBKz6qqhV+QRio2dys6Xg4rcFnBHQw95crN4FEBP25zuGGeJLy2zsVetEXjhdAxGssEQRaQp4Z+UrWnrqOswoX7eHRiuLP/OKLsjZwAjHFtn9nOV9VF1ep3/lZJcYfw2TIylzTZ508u2QXdSNhECi3T6uFFgxOuStWybTDwzhcG3axvobzPnJx/pBOZllehytSWbB4/5O+ok1Acdx4FPMCI5zUkcOpxSyANgIxAHPbYQYAAqr4q3UEeBH+sIgraKt8V+pYed6OTlaEaQN9sUAAAAAwurB8GSBS8uGEzNNkAXQsYRB4Tr5lhu+UkW5LUxyvrHip6VlrI4mRST/shS2Yp7bOfghKjgb3+64Jfcf39b5xgbG94lbtYmA6yxm/Ztb7utWS7kTMUO4rkzKvVWy4MopzXySKA7SIudOC3BCy2EQm9K09oq1fzr2VsQv8DP00jUV8yu/6m6QBMXBSVMzA3dgSCENhbyba1JTf7whOmE8yC5xTz5tz+aTfjhxdrsRyIG7/igW/pf9wSk0Qi4XzblXimT/vkfbr5q/0bLysruf5LtIKvO65P07Jc3+Fr6sX94S+KlLmPSmkuWW41rMaKXvN1FFTa9HZhOvPreHhblOu0uDuNZpNPM3gHKyhuo4DfkG/dUBDuDZ3ZDj9Kwqz3nlbR0ayeOLK20CQsEuk1Jax2dKUnZHJmWu6PcAQouZd8PEVcrfnhcyHUFFtb+YqIt8zJdeeUogLf1fpHwIlGVKW+Gfp4GmcjqFFdmqB8k2gU8390yieen7/Qzd2b30QoEJ7LlZpQZ7UqvNAx+5OOveu/hlqz/R/V4sdrnboQk1oZ6EMALvjLUaPEbxmYTgQrrbJ76exObTotztnRvDbPlsXMBA2ZyhJ7/A9iMku87FAIuXFXndfEQOhLBqgK0OHOu+mlarxnwyhkSaYYQPLROgHdN5ivR9xT4t2P1KafvoYy9wIZbuvAIEvIqkIhzwFpAAAA923E5P+shCqtD+oHuT+WQY8psl87v0YyTOUl3I8i4JF5xgVJUQtqfpX5svHblbjLFHkukIBsYQh9Gk4wL5xwChglFSJfTAk+b+4rQDcr9m/3MH/sIoGW22Du5KpCO6HIphunACsiT5HVjC2cthBgjGO7bdCDPsV12zQjs6vMdmg2BmP/GC1YBzz+tJMIiIoLe7DfzoSHtj/74dJ8aYUc0RxL/iXeEO3kpKblSD792gfqTZVXzS0SYlQBRjmUPZOhLb0JWE3Ib/flQAkI7UQvRbnboHE5mgTJQoh+WWw3EMGg7LvCB3H7g24EDucT0ZghBJJB9d2lnqc+7bZggTzRSDK9Sd5AdYhMJcf1h9+Lc86NjAIAsoNlBkRjfmDHITgJ8+swpV9/mzESW8k59COL1AJ0o5StajYUc410sEvHt+U2lQo/aF5lXe+K0TjOjQ5quZO/d+6tOITL17UiJPaOaK3YcZKhYAymmfSIWnjS2OjATYGvXeRwFMwPwZ6zoa55313xzqvpAI0mi8zPRdcSTjhF18AdhyVYQd0EE1LgggSTZrpC9VC3QuNbqLMsWLy2XKzq+RKqfmhvATz7GAzQelNtVMVjjMSyaxSjHpwGAzamg8sZ4Iax7RSAas6h0CevD0i5wY20Z00xL5ZHImQRq6yAygIDtfnNcF3NQdsMDRGdeVWNYEm/KCd43HVVhaHEglb+8NbUxqeYHP0YFRbJNchDyaG68vc2QKa4e88ZJVhaH9GIBxJt1ErYbxIhhOKfG3iRDCcVIcb2g6HrnjxXmxTbCSdXoyzt3AAAAHH8GVbSPAMfT0uGZVVBTIvXIEZQmzEaIDbKSaSDhubgxGPF/03ewPK1rcgRvdJQdQsx8HHzABMsC6A9CqXBoDkBthCSo4S/qmnB0olneFlKco06YIZTwvtAtsFMLKdd+b0ti1FLrcY63e+SnmdXjjDCLs9hkYg2P5v+Z/itlGn1vK+ONcSnvIbTgxaqW1iNfmr49nlOy8gMoQVKC+1W8fYoU+OHxGauUyY/KE+v8AsghgmIGd8so9Zs8eZ9yU4LWgLJ6ZmQstuI+mAPr9QUChVp9Jtj6p9agfw0rfrmNWvV5oRxvfQxp0ip2tlxXXiacslkLmHKrivxnNMAAC8KOCBA/UANohNEhmnI5uxFKmqXHvWQ5EImcMhAR//K1MNMe4oV5Am6JU3mOyGALUgEtUH4+7r0j4tIKm7rTnvcX4+MDmrQVfOcgCwpgC2KW0I4NZTJ1K9gr+Z6yFJMtHCXw5nNYnY12MdE9buioZF7r9cOz3MRQQ+SxHxf8HYjRQuFNYt/miSdR+m0Jpzj577xauqmff1B+0owCnDxvC/vRuONHHgStFSNBWwRV90uNqxvIW8Z3CSLUr11wLaJIctWXycrBz4EM9yazE+ZZqHPtmn3zbNPuOGkwq11HNNQsuAAAABq3PXoXdvtQaZhWzINpr9CpKEa5Uan0RVl3xba020fAnn4/G0MRC06LXW60QjUHnodsmj4KoLqvpyKkIQ5Lg0fAEecDZ1fd+jY9/I6R0kxidsdB7EwYPDFXvLZxjsJdeT6UBIEXFtbkpBU9pR20U1D0gNXf0oxJynZKI4ckUJZ6NOzXtNmXZtu6SRH3mhF6YebcZmJyZe6FhRYxQIdELDVJ4ShcjVbV9ANFBHgR/tI6KCPAj/jYHyNPv4etsiaY+0K6lEI54vj2AAAAbapEOfs37lSTPaw1cEqqgpkXzSPRJdvz7Ui4UdVYyWWQbkjUHtdhXTlD9SbHWXdzUzkKQWlQk7VU+pDOqJmW04cl/cqzF/60XtyvgvsVX8P3EkD7+rfcGSFDjad7aBgfA8MUbSFHW+EQbS8h9d0Vd7wbcCPJdXyl89hUXRA6ofnc/Q1aH4QS6VgNdWYzqa5AdSk3VeRUPtHvgLEZKZpIp2qchAFzfpjVq2gblnKDLNGVtljFK/w7EeDapCHvl4UAAAAABsHr0l0bIjgvQNAuoWvqg2neO8cTx/UC2uuav/Won56nkt4R6vJHmdnkgv1rNAuGs1xuAbbDLuCHyNO6Xm5kRRDAJyV2yKLGivOFsJjIuAuS560febKkdexx1k8FIaOOcWcfqyyLiC/c+SwNEqlEh2jAqi7WVtQcHdLSwtPIc7OIb66uR8C8ADYQAwvdJyBY6kyv/hZmlyOfTV58vxnvf6wr+EAAAAABT0PwANh4hWRuciaAQV5erjmeGANNpRSuXTvHeN5JX/GA+Tyd5uYPUWvN9z2A6yEf18NyUKW02/G951xriv3PfrHtmaa+QoIyZqXGvG/JcRL1rzmDME3/Q8eFbd+x6JBZiMDuqNQgmgGs2UKggCsketCBPAbQat7iKYhTUdxZqj+cKolChlhi/2QscuF4AAAAACYEmE8CklTFJyogZ1fulHtzsdlTlv6YFxEJokMvErwzEl6CHNpy+PeMvp8a6MtMnNfZo6deqL0gP4QvSeSSGEi1Pu/7+10n32ucD4YKFx+5UrEaACg4eYk7PEz1hR+idctLbTwKoVT7vjTe/gnMOLLoAAAAAGEC/mweTWbM/umAEk5zAiVjWepedjX1CMYZkL2NWpQXZ8e2Twwt22pz234YAJ8KondJyBY6kyv/hZlXIezt3oXMkrD6Y7AAAAAH8s/wGbZMuqkiBNyfpDXFHj79N2/H1tn3yqZ0G/Lo/wGBhI9DbgZx60r9amX0L7WwliLTEEpdA4I7euULW2l+J0B74l5PEBrgC5lF099X2NDvITXRcxKPYE1GnGPppuZmiYAP3/gPoHOUYj/Ee2np9Bw8jZCpDSd3rQi2Bi53XeknAjCBkpYvgfLU/1ZQ/sICJhdm7nnENO2aahk1N/mw8nlFGgvX12j7CIWYXfB4N9jKDMmLWRUonB5H5L17VyUJyeiJv4/+uWMIP/2QJ2cdUSYS4oxa1cc5HMfMDXlhKS5gBFB2JtIwv960Qpk6FZX5OaI20l3Sn5ZiVH0cfiQHEA5wIrWBWrQV4Da6je5S/jOND6Abx6xpTzvIuf3nQB5VJlCFCYXfV8KWgNYPZ2LpjtYPMxO0JVRYrvD/Nvb6/EZODp8jn+68Q8AAOFDjEjxHgBQBNqyTlIwvfpG5BHNuQwhHkNueanU4vP6Pg4Gz5NdGfDEgH4+Pini2si2Jx0AeKZnPPFkNojVOx+nTiMGP5NewSvIEHYTMqOdK/ZIX6Ft3skRY0tsq0MzifDAenT2mXEuldwytu4tMMihpxA5EWVTVC70uE933zTx9IySSvxrp8OXyRZMmmHd5xcXGqGY5LI05M369BJs4l+OQhl03ogD6AjZai4yDaHuuh/Z5NO63m2DmQNwVOrwM65MxSd0wGli9xD8fsubCa6L2gXJwfKifFjGasgC7rZebIPxaqTANpxjhOcI6H0XtIYcmdeorpN3W735v/5DzNqi4jS0zdETwDVJKsWEX2nUYxsNNd/cp4y7XUlbeeW7Rfbvyko3SvlhMLw1o4Ny2bK8xjAJF6mIyQN666WaQUQnzmCoV2QHNDRQn5Xz9N/fRUEsS+v5mn/A6Crxga30PKm11WzEJFT6qztXwOwZSvi+2fQyGZsasNJTg5IhS3I27xbSw66XKjrAKxzbAlE2lYfvzgG9jTbJWSGCmcxaIJo3KaV1W4tYW9+7/Gp4CbZy/0alhCc13e9ZvnROgPyRYd7ackbwlnRWpNV1HkvlZ+IVijlFFvcCcFsC+NVpjdA3hjUQu8NlH8isCCXn6MKmUZgOB7CUMf9KznZbQLVsXzKd4ODKni62JdF2gwYXcAbixCtEbMcNY+fe6YrAYsrcoGBIH54t+f5upRFiFYYfrLCjVidlQIhVtptr7ghp3z/yFFmrLYYVMIAAaRGG1++6JMhV3oCsVOyfcbfoq4DYhm2r4FPQg1DNpQjFi4hjChSJoKRgvSlF2BhmbK2+z+TvV7LWpMGAGPy9dLzW2oTHPjVCzzbfqLhd23Dc9zzQF1s/gC33aH4BM2e8EIFoUvVBs5cMKl6hCwB5jTIRVXfrmFKQ9uzYBzBwm/iMKRk7kZKUlZza27zOFSFFuzdbYXx1J6e9PL6KzhndtZFO4yWjF+O9KnGsWXn5XSrt7WNl5lKJFuElZTa63sMP4fii3sOtHEQfUaELGqiIBp4Sl1czCI5OuDmn48ZBqtu1imbZ4VtfTmeYBP/H2D7ozPW5iBW8KqNXuo6bwTdYorpsMj6EG3cIis54XUhnvyJklEgzUMkFNpRhdr7dHtXaa8RWVmlwBcj+THneXIyL2llYZoAmHD2b427G7BmnjFlTLNl08ZW/T8/s+z12jt+LTAO9SqPb/2wEx5TiaB45qfUoc/2uKhsgQU9fbq9Qp48vBA7NH2P1wwQyqQt1MBdFa7qXVyw9vc7pVjQlNfBLrF5Ga5hP++0VXbUjY63L6LTJc+20P0+/p5w3+KPim33p5TxgXk41rR2cyORHMwjfAHYNgvl78oVTKGQvNHK/JkrTptHFzn6vq2Twt1D0dZ+QsiU/0HD6HuU15mKgM5lRFtqRDvEX3QZZehFn/AR1hqMUJEg9f4bPbuGAZ27KKQtR7Y08WeGsyQgSFWLP0f1nyrU+b56hMCBv/DXts8koBUF4Knj0LtkYa5V4ORLa9x48Zl4PUJtxTxhA7fVcMsXI4MbaiP0ntlJSs1zHMmRSlOwpqf0VJTYE/ZdP/5C6gmgkwGTd6gjSZM843/35Y6LrlqQX6f+c8LixdshBb8iylZy6O6QVRZNnU0JnR8DQvRxdAG5tY/G6WQW4fkH6FJIuJziT6GxXvkTKq6g9LTaNqq/HZXvyfxVw4dD01xVdjDsaoOhRmn211bqu0WuL0xw3TxRK8i8gGn98xzPyYdziih7rSU6FckluoT5bU9wAAYobkDHjgBxL3LuvjDGCIX9GoyfpHKs2QPkVdD4soS59xC6zFhFTQgoK1z4oZe8JPLMHbeWOhHko2vssRszRVnhaa+aHsa/6YFy4GLaVPX5LEuKyen0JWOXiSyPm6KeNsO27hxAIeS7CqqrC8HDy3ScmIgNsRkr24bYVx7jmfw7gRGsWkPXne3OC3UVfS/sZ63lndo7BL3zjZMVNiIIWIfEuhBC1dY9zYeXOr2o2g8I305nnquPk5LHDXpUVSogVUb74IuxeUMHniUMxW+asC6/KxFlucWiWY2SoipWpBf0tv3nQtkdrZpJ9uhAvKlL9bD/SVPFjzZM5LqJfktJSm1zuTgIstHKZj8vIXvc09+Qox4M1h7VSaY2A/KYmFX/2GFX9jViqlHsyLDv+JktOYb+E7S5xV6JghqKBa0g9DVGRj5dRxP/EcWojVL8yBGWccvOskEhuL8TR4Q1AoSGN8xgluDEqz5yQcZ/Eq78uxFL7Il7+exB9vokr9Ro9FTX5HtMVgPtdGqHhEZNtSb4qAiJdDeDSExoonSe2nibFqvue52bO3oDeT92HrQcOUhb7thNJrHMiJwrQAByYPWXIOI7tM3DmCvqKOwgOTr++zntzGMnS7A2/NbtN7uCEa98qS3K1jnFFwABKbLhAONfYKMvW2U7hR9aXLiGv90buRre8/atoaQmaERISpAuSkoUkneUzD7iKNvG89+jUe2KfB6Y/Wx42Wkb74/qLocxG+G6IDN78UFxrmA6xi9kSGohajhGqfyfFiwWweMPp8ivD9p3tXFIAU7snA6oArzjoAx/q+wBmdBIHcKPCvmni8szXcrqNaMKqrT28xd8g1BZr3Ht4MqcrngWCN2eec2MggwFHuKLxw3TBGO2UrORU4VCViv2rWSb8JvkPX3Yclg46td2Ba2vsl1Jtl7uHQPOP3g9yMfbQ7NgewFmOhhop8BwyHI09loYBTu5GiZBUQluDAmJLCenelty3VK8HCPtbz7NtlA34uWv/dcKp967//9tc2u21CLkbdMwGvfN9Jruzi4yMFYvpIxU6/DMoZzy1c6QO++4/SUTjC3ztVE1L6hHih0C2nFqqfMHvu7dVa4wPBY7M1sztCD43z2kZdAx+DYuLC93VjDUE5p4GGCKL+mxC369C3rSFkz3seB32bbqAKScc2JnVfHYhmyuRWnBV2OWNA8yD3Edethoblpi0Iy+t09mTc/ydvJjv8G0B2n/HuFOeeZpfNudmzO+dU4LKB2K42vz62tP6zszHArqyxE2bCs8XLGFbv38PRIlWkI9nWQHmzoWxGkjUjW4GrIC6DmatXUjstHkMocr4Y2asXmHienxKtTn8rkrx0aGNFSvsY0bL2j/nvX9/WZarRLlmCkHNWBGRREqSR0kFcb+uLop0u3dVCFU6Zubj/yE+9xg5o3F9tixwQdI02YOHMM9WXnco11wcpeI9UHCJoW0xVzBeJdxrjXImin5dauY/KYXf1+oGthVPqcKsl+GHaPORDAOh2p+fLR39kzweNnyUnopE3SL8ziZdLyDUUnEnIetir0gm249R9AzyN3JvMEG8fYtCU0z5YKCSqlSZgjXuCS5Z3wDNRbFJuC6LXhDD2jPbhUnZSfOMrQrFrxbvtaJ5Yxyzx5OL/u3T/CtXMAUEiWJPwgRiJSH+wGChetIO92JAA/uJfmrfuyPoE4Vzg5ozzIiJD4KnTT8uq6UZ0CaXcSrXszgNaUNvtTl6smXuqy6x0QXBkihM/PkXvnqkzpCc/lY6LxKhgUPQjsBeGejC7J4mCx4uIVtTDUFGveckBdjEDXNDW2iwjbDNfSaUVrKw/Riim5teOT35mdGS9VkeWO1fREodJGBMsPVpr1u1vsQehdNIQWe3VlEWC6uAJo/El0pZzyvWKJ4wNwX16VJ1Jbfw/wuteOgLU0x9/aO7vYny2gsH9kuaBvaaEwSg9EwJpSTfPl/PzMEqBBthzt0vmi9SlHroVezzoQn3knaUGDtIg6t7Qk4XrM97uW+7QqH+hbR2zzoprrxYed1eFJ6qMWoVnHA2L9hbx4N9loNla7vh+xdgKovzsBtqAOpBcOA1DeJ5v5JTeVRiI08otNNvk2h/4uNk41r6hXy/3/gTjKF4hX6bHtGjvrILI45guzDRjdD+Ll2pkuEKJvfT/2bypX6ofyLzQ5TloELu6FkMKB5/EJAnIaKfWygQ81cubO9q+lLKPDGl33zBsHqxJ3qc7B1Sg6bZ9nVD9yXjytZouFIsiaj83N0Gtrjf/5yMenubQdc/ZVPiBj1jM+v+aRd9hPUreGlAuP8RdLa5IQ0AfJKGiaDSo9sbj/IbzVIH6C4YGQ/hPSU1kEscJ0HMjanyGpK6I/OAxrqlVwijDexSDnceB+bpIBmAVk5vH+wWDkCdsINwRabtmV2yRczxNe9IVst+gFA5HzEm8V8pHc1HyhbWpoEC9/obr/k/UT7VdshavIjvHRc//f/lHWr2C21/6IFKKL7sA2Ss7065tUECedXSWnu2amlDbpiS08X2TO96OJ1jpgZ+GSJCuU9iJxoE1DSGQBVR0zIpccTWq5qkcRVQpojF+LuCUX1+tRm1QDpzxgSr+371jg6nEun3uzLLTo2/s5EuAsVb3dwCz8ApdixYmSSZ29uSEapwiN35ibs9CLg3ukb4ypNhzFlzJUegFBmb2LCY9S/opJeYIExO3XWaCrYptccVhzAoeUdKHeKiwEldpjo8Lj2ebNrcUELgAG3ZMmNYvDmwMJkxJB9V1pDgUr7SOh00m0VvEB3INdCjW5QPlE3rzFKbcfrS6RFfAQkzuiWKj0FmSyQ+2QxMCydLcT5axWagZjXWsBE2QWnEluhWyY4ogZRU9yKPNTUbEHm4Z4Cv/1Sy72cpWpub6pSidDB4Up7undD04OmbHkK3fhJEMnXNXX1CH+m6XfCv1nRWDizEgVfSYPl5P6H2KksT8zArRnYGDlXnjBGJ1hLcFUhhCHgF3j+cUSM6oxaPw8r5nnHBmcUA6OnaaQ841VBtECRJyVY3vUYhacX0R/CC3Y3oWaGAUtLPkrK8nCYY6GX32uqMVO7yM4OCv/3JP14znptdnWLRXOGi5VvT0kmarAgdUZqUDzEd9LHMCD9+OcsIbBIkVVMaR2DFrd1Z7NXrVSFFOVEMrRmSfGqMxAVdxmPXYXBDfDaGyasvdeCM0YiHTwqPGck+9ko8j7MMoQibXnwy/zDMCc3ZbFZ/RNf0tULBUJyebAfGrbyP2cuJUZwVJnEDO53DK0mllYXJIoGAEa7h/9nL2TYG7t1mL8K3OAUTPy1t/DA5uzuvi0VQu6kXtv3Td+N1R2qo5435SV1GsRQsuTUwp6zM7cUffmeInSogM/Hc1YbHkwVxcWkc9nG01RLtRrExnTLN0pPpmo2JAQ/cx2pFp/Vpqv21fF4Oa/hkFp2oLDAXWP9IFMUmaKyq4jjSjAzFvaQR70j6iqjdfvYJUaQRIwaAdKjVLxHH3QAAIRnCwL7hcVAbSfrK4v4agL2wwwvMsTEf/e+Q4RXukdT/ahCzOF38Q9Oh814guFH2XPtlp+wCUrXDJg2Qw1yeDMwEovoHTBTZi5HQeziIUap6yvhHesAatvTHDDr57/fTW88FmNjYvYcd+s3o6BJW+H3Um3WKDGwWQbDtSXYKQqPAmaRgDOdN0wLkPp9dotuZJFyNrb3EDfIPSdRpvzQL9Ltt6XoNiV1QTcDt0m9l9LiMOBPOjtPmeX6senCTvxWAPQidi8zMGwyBYagtyHVxe/7TXk9qvswH/O3/WruAAuT5pMumcve1fkNDy8+t0c2/m8uZRAPyJ+ah9Kn+JGqL2NwadG9vmKA5k4gP7XjBkNUujflllmcaS6Bxf3wZlQxCIGIq2H189QI0HTtaeQ3mUygcx4PqXgykjMIHzzDcpsNi2s+HVHU4QwCEu0MeAp11n0YK910KDNCDQ+AfQ9GCJLGvAmspqqntsidDRZjwyL5aj+s4G++33GAB2Kf027mk1X8BBcHXUYCGVO9yQF0T1vs5h22M4UVqOJrjq4la373YJuUBVa1oqvoc1KRP2QTt4u3jONRPfwtqjbKKQHm2yRDQN8yBHN/t4z9HIy1ccq1NnktMXNbIxtXfKOQSiNxtzsP500sKTAdSIVpjTum8DXtm5c5CLbYLodlgxeB0cq8gLEhqyMjlhCorYjQodP6epFuZn6efgHGd4qIE5zue+R3zUnOtiIk2c7H30xfRiKvSCxhaufsMUr0MYsnIXkojqStgVhIGKD0OFoAF9QoIHuV+uoS5ow7CbciAOikZ5kghXychlek+RNMp/FXdRZ/imYxepTjfptP8CzIksAmW3U6MHESYcct5V2I2XYBQNeImyasrkcWQdTmVVwsfwz1ajEgq//RfwYXNXkvKqSm3744J3V0TvrHizDlVKmdM5Qr5sFGAtX82WDZvOCxEHbcPMUm1isEHf8JlkYaTBy3VvvB0lqJKILj9QGY8geCAHlt7dQNVrXy2GY/94ok8Kx8hz9Wds9A+9/wRxnXNq9cpvHdJ7ry/JkTAX/0yuklrInAqTC1wtZFSPq3A+BlZ6sPM5r0AZWWeY+95VlbZOxWzslszlthSXq9Db6J5xrIs3KB83WS/TzySoQ6cB6wf/e+guTZ7y9ZQrDMDSCVSE0byGQVP9OY7jatSJLAPAx+Z6VfRZlxyL0VaXIB1WSclJ3osC5tzwo81/g6yMkBsvG4WbJ2nUiEU65AkMZZq2lfhT1Vhk911cuSXUNFL8+7dflvRnVkA5jubjwlZt0rcM3tSMrNfPvbaN+gGhoFxf5FpIXI3iB5sOKN+zpf7x7SFj8lRhW1BTmmLh3wz3Y0G15ukWaZyKtV3eHEmfXhgjZX0OTXy/2Z82vasOz6GT7t4mXrQP4wZ0iAig7qH5u2wcXlo3GjdqTC/gzWr0vxRKrxGXplz95cf6mnqpsvMd+K3Zcytt0/yriEX/yj5cxHOVAOYkhOhTjSmGq8vO8DvQ6/iyb/34n5iKda0e/uoAKIFZ/Y0MdyZ30djOYnjxXHB5LvFMVSTqqsFsQhfyoI0R26gdyunP3obITklXzt4lhJT0SwRqV4d57YpAyASYU+Qu4h+E5gXaxP0D/q2/Gpg2R5bjV5IxgetPJIXk3aT4Ntt/EqiJIDyTyLZdvd0YwF4zELRaHjhEFIpDqxYN6wFgmzs7Ppfa9e3x1a8SuLnFOZCCdkQkruZ8kytZawmU92uTi/c+w8RzM8PBEX7nHQRJp0JkVcJkiTiMNYX2Tt7u5joPyheGOgAZlGAVGC1LXGvMeW7ApaAxLuYNyWQUeGqQuQl24tMCsmZI5KcBbc1HRb8nqnoH4Iwifhsqa/uj+7WdgVBIVaVP5DNGWHMVFfs6M0lAlOO2bQ3as/tvWEXnFQbBzxmJQgZRDOdl4TIv4xO9Nxynd2iBI1WREzRMiU6o2bjyjzR84vqyDBwb4WDOFON6+2xeFHDYkVQy9NYtJ+PQKCZfoKf+IVY4u/IBjV9o0F+H5a6EoOB9yWAPbXlG574b5KSZ48OXfMu1HG1SuWCGsvrTtN6zXKClXU5loXT3UgJvCfi9X+wEu2u3lxRco9qlC53FhOBunCwIaFXC7jW2DH7j2vSwqpvvUSfZU5R0z4TakeQ2UkeeeWXmQUL+jJrFbW3FqAkz2O/Shvjdb96lIMY5e9ONLpK8B8xsHaryCwzZP6ZkI6RFLnhOxK04XcItOhX3qS+dTFx/bbVUTLM3mKJSEPRejlAC0wn6W+I7D6h3rAp56DulXch/l61YNt+yPpn0oM8N6xFzMZMdVcH1roPDHsN3hf7Linb+0hW6T5g5HTLeeKu7glSXscG7omt1elBDnPFFZpCX3SrdmezHw+Ilm4V2JQw6EaJL2Z1pQ6jDZFkNqzB+XakjPoEwPWGjuxVy2mE6DWZ9qEsVnk33ddExKXuCJrLXkXslGB4zlJMoewg6//canpwNRUgF8jYf8AOxTtbXS9xWOveu549/asgxUKQwI4MDGyeqL3HS2VOVYIfmiA3VUJckGbAofPiwQJQfG1S37F7e/VXfxJWnoCX7yrhsenjQkzc3Bv9+4sPE9UJ5+TdNetDw3FTgsjgDdRibKlkPvjwLCcxWWI3esvlzbnyfPuu14aL4uX1Jqtc9sIwJ/efYc9jXeWT+zinHC/iZoGFqxlYaVbF8b9O0yFSE8mH+GeYlK6ThQOx4aOcMhCdMmDO1eonAq3bkJSqnnqc8DQKMkb+JIBWkaBh5uMVNXT9bC6afqGzi+mYYplTTbPVZvv2dWaY/1/KGqvQzLEue9/yoH3Hl/1jx3vRCxIFcJGGhf5DR73Y7y30vj5M794zf4jDvXBZxqHBCWZHsZXtFztK1X0gOLd7f1qRHmqlo1KGW/45rr8Pt69xR6sm3gLomb39n799senF6f9m6usaqBuve8XwabfowXLVtLv6L36uo132X5ISXEPICZFaVQGVNferaEB/3CCZW/glc6OSNcOxTp06YM6M2SeD422XaPG6ZxibxNttcX4jYfl6RYdM4jo5L0WaaEqFqul4a65J3t9EW0fLtjdIHw7St1/dDH4eREonwNK89wO/k7hp4Si8eRypIkc2e+XPxOGTelWH/5CqGwQ500QuhSrbnW1ADfE2wyIv78QZ89UlHFry1A7t3WCfyuY2yAAAAAA="
    },
    {
      "material": "galv",
      "kind": "paint",
      "size": 512,
      "seed": 811,
      "base": [
        0.78,
        0.8,
        0.82
      ],
      "chalk": [
        0.9,
        0.92,
        0.93
      ],
      "rust": [
        0.48,
        0.33,
        0.2
      ],
      "run": [
        0.4,
        0.26,
        0.13
      ],
      "drift": 10,
      "rustClusters": 3,
      "clusterScale": 0.45,
      "grain": 1200,
      "hbands": [
        {
          "v0": 0.40952380952380957,
          "v1": 0.4666666666666667,
          "alpha": 0.5,
          "specks": 80
        }
      ],
      "bandStreaks": [
        {
          "v": 0.40952380952380957,
          "count": 36,
          "len": 0.04,
          "lenVar": 0.07,
          "width": 6e-3,
          "alpha": 0.28
        }
      ],
      "groundBand": 0.45,
      "groundHeight": 0.0857142857142857
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "plate",
        "name": "Printed sign plate",
        "material": "sheeting",
        "uv": "front",
        "atlas": {
          "x0": -0.45,
          "x1": 0.55,
          "y0": 2.1,
          "y1": 0.98,
          "yMin": 0.98,
          "pin": [
            0.975,
            0.75
          ],
          "base": 16777215,
          "minNz": 0.95
        },
        "extrudes": [
          {
            "hex": 16777215,
            "poly": [
              [
                0.02121,
                2.07879
              ],
              [
                776e-5,
                2.08655
              ],
              [
                -776e-5,
                2.08655
              ],
              [
                -0.02121,
                2.07879
              ],
              [
                -0.42879,
                1.67121
              ],
              [
                -0.43655,
                1.65776
              ],
              [
                -0.43655,
                1.64224
              ],
              [
                -0.42879,
                1.62879
              ],
              [
                -0.02121,
                1.22121
              ],
              [
                -776e-5,
                1.21345
              ],
              [
                776e-5,
                1.21345
              ],
              [
                0.02121,
                1.22121
              ],
              [
                0.42879,
                1.62879
              ],
              [
                0.43655,
                1.64224
              ],
              [
                0.43655,
                1.65776
              ],
              [
                0.42879,
                1.67121
              ]
            ],
            "z0": 0.053000000000000005,
            "z1": 0.08600000000000001
          },
          {
            "hex": 16777215,
            "poly": [
              [
                0.3,
                1.165
              ],
              [
                0.29799,
                1.1725
              ],
              [
                0.2925,
                1.17799
              ],
              [
                0.285,
                1.18
              ],
              [
                -0.285,
                1.18
              ],
              [
                -0.2925,
                1.17799
              ],
              [
                -0.29799,
                1.1725
              ],
              [
                -0.3,
                1.165
              ],
              [
                -0.3,
                0.995
              ],
              [
                -0.29799,
                0.9875
              ],
              [
                -0.2925,
                0.98201
              ],
              [
                -0.285,
                0.98
              ],
              [
                0.285,
                0.98
              ],
              [
                0.2925,
                0.98201
              ],
              [
                0.29799,
                0.9875
              ],
              [
                0.3,
                0.995
              ]
            ],
            "z0": 0.053000000000000005,
            "z1": 0.08600000000000001
          }
        ]
      },
      {
        "id": "post",
        "name": "Galvanised support, brackets and rim",
        "material": "galv",
        "uv": "height",
        "uvScale": 2.1,
        "tint": {
          "axis": "y",
          "from": 0.03,
          "to": 0.32,
          "c0": 11047024,
          "c1": 16777215,
          "keep": true
        },
        "collider": {
          "shape": "box",
          "localCenter": [
            0,
            1.05,
            0.02
          ],
          "halfExtents": [
            0.45,
            1.05,
            0.067
          ],
          "notes": "The sign envelope; the shipped compound is derived from the geometry."
        },
        "boxes": [
          [
            16777215,
            0,
            1,
            0,
            0.08,
            2,
            0.08
          ],
          [
            16777215,
            0,
            2.004,
            0,
            0.08600000000000001,
            8e-3,
            0.08600000000000001
          ],
          [
            16777215,
            0,
            1.38,
            0.046,
            0.558,
            0.045,
            0.012000000000000004
          ],
          [
            16777215,
            0,
            1.9200000000000002,
            0.046,
            0.558,
            0.045,
            0.012000000000000004
          ],
          [
            16777215,
            0,
            1.08,
            0.046,
            0.186,
            0.045,
            0.012000000000000004
          ],
          [
            16777215,
            0,
            1.54,
            0.046,
            0.08,
            1.08,
            0.012000000000000004
          ]
        ],
        "cyls": [],
        "extrudes": [
          {
            "hex": 15133163,
            "poly": [
              [
                0.02121,
                2.07879
              ],
              [
                776e-5,
                2.08655
              ],
              [
                -776e-5,
                2.08655
              ],
              [
                -0.02121,
                2.07879
              ],
              [
                -0.42879,
                1.67121
              ],
              [
                -0.43655,
                1.65776
              ],
              [
                -0.43655,
                1.64224
              ],
              [
                -0.42879,
                1.62879
              ],
              [
                -0.02121,
                1.22121
              ],
              [
                -776e-5,
                1.21345
              ],
              [
                776e-5,
                1.21345
              ],
              [
                0.02121,
                1.22121
              ],
              [
                0.42879,
                1.62879
              ],
              [
                0.43655,
                1.64224
              ],
              [
                0.43655,
                1.65776
              ],
              [
                0.42879,
                1.67121
              ]
            ],
            "holes": [
              [
                [
                  849e-5,
                  2.06323
                ],
                [
                  311e-5,
                  2.06634
                ],
                [
                  -311e-5,
                  2.06634
                ],
                [
                  -849e-5,
                  2.06323
                ],
                [
                  -0.41323,
                  1.65849
                ],
                [
                  -0.41634,
                  1.65311
                ],
                [
                  -0.41634,
                  1.64689
                ],
                [
                  -0.41323,
                  1.64151
                ],
                [
                  -849e-5,
                  1.23677
                ],
                [
                  -311e-5,
                  1.23366
                ],
                [
                  311e-5,
                  1.23366
                ],
                [
                  849e-5,
                  1.23677
                ],
                [
                  0.41323,
                  1.64151
                ],
                [
                  0.41634,
                  1.64689
                ],
                [
                  0.41634,
                  1.65311
                ],
                [
                  0.41323,
                  1.65849
                ]
              ]
            ],
            "z0": 0.082,
            "z1": 0.094
          },
          {
            "hex": 15133163,
            "poly": [
              [
                0.3,
                1.165
              ],
              [
                0.29799,
                1.1725
              ],
              [
                0.2925,
                1.17799
              ],
              [
                0.285,
                1.18
              ],
              [
                -0.285,
                1.18
              ],
              [
                -0.2925,
                1.17799
              ],
              [
                -0.29799,
                1.1725
              ],
              [
                -0.3,
                1.165
              ],
              [
                -0.3,
                0.995
              ],
              [
                -0.29799,
                0.9875
              ],
              [
                -0.2925,
                0.98201
              ],
              [
                -0.285,
                0.98
              ],
              [
                0.285,
                0.98
              ],
              [
                0.2925,
                0.98201
              ],
              [
                0.29799,
                0.9875
              ],
              [
                0.3,
                0.995
              ]
            ],
            "holes": [
              [
                [
                  0.28,
                  1.156
                ],
                [
                  0.27946,
                  1.158
                ],
                [
                  0.278,
                  1.15946
                ],
                [
                  0.276,
                  1.16
                ],
                [
                  -0.276,
                  1.16
                ],
                [
                  -0.278,
                  1.15946
                ],
                [
                  -0.27946,
                  1.158
                ],
                [
                  -0.28,
                  1.156
                ],
                [
                  -0.28,
                  1.004
                ],
                [
                  -0.27946,
                  1.002
                ],
                [
                  -0.278,
                  1.00054
                ],
                [
                  -0.276,
                  1
                ],
                [
                  0.276,
                  1
                ],
                [
                  0.278,
                  1.00054
                ],
                [
                  0.27946,
                  1.002
                ],
                [
                  0.28,
                  1.004
                ]
              ]
            ],
            "z0": 0.082,
            "z1": 0.094
          }
        ]
      }
    ]
  },
  "_depth": 0.134
};
function mergeGeos(geos) {
  const parts = [];
  const temp = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temp.push(true);
    } else {
      parts.push(g);
      temp.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute("position").count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  const anyColor = parts.some((g) => !!g.getAttribute("color"));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    const c = g.getAttribute("color");
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i);
      position[(v + i) * 3 + 1] = p.getY(i);
      position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) {
        normal[(v + i) * 3] = n.getX(i);
        normal[(v + i) * 3 + 1] = n.getY(i);
        normal[(v + i) * 3 + 2] = n.getZ(i);
      }
      if (t) {
        uv[(v + i) * 2] = t.getX(i);
        uv[(v + i) * 2 + 1] = t.getY(i);
      }
      if (color && c) {
        color[(v + i) * 3] = c.getX(i);
        color[(v + i) * 3 + 1] = c.getY(i);
        color[(v + i) * 3 + 2] = c.getZ(i);
      }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) {
    if (temp[i]) parts[i].dispose();
    geos[i].dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(position, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(normal, 3));
  out.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (color) out.setAttribute("color", new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function splitCorners(pts, minDeg = 70, eps = 8e-4) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], a = pts[i - 1], b = pts[i + 1];
    let sharp = false;
    if (a && b) {
      const ux = p[0] - a[0], uy = p[1] - a[1], vx = b[0] - p[0], vy = b[1] - p[1];
      const lu = Math.hypot(ux, uy), lv = Math.hypot(vx, vy);
      if (lu > 0 && lv > 0) sharp = Math.acos(Math.max(-1, Math.min(1, (ux * vx + uy * vy) / (lu * lv)))) > minDeg * Math.PI / 180;
      if (sharp && lu > 3 * eps) out.push([p[0] - ux / lu * eps, p[1] - uy / lu * eps]);
      out.push(p);
      if (sharp && lv > 3 * eps) out.push([p[0] + vx / lv * eps, p[1] + vy / lv * eps]);
    } else out.push(p);
  }
  return out;
}
function lathe(pts, seg, yOffset = 0, sharp = true, weldSeam = false) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  if (weldSeam) {
    const n = g.getAttribute("normal");
    const rows = n.count / (seg + 1);
    for (let r = 0; r < rows; r++) {
      const a = r, b = seg * rows + r;
      const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      n.setXYZ(a, x / l, y / l, z / l);
      n.setXYZ(b, x / l, y / l, z / l);
    }
    n.needsUpdate = true;
  }
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function ribbedDome(profile, ribs, amp, seg, valley) {
  const tri = [];
  const col = [];
  const tint = (j) => {
    if (!valley) return [1, 1, 1];
    const f = Math.pow((1 - Math.cos(ribs * (j % seg * Math.PI * 2 / seg))) / 2, 0.55);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const th = j % seg * Math.PI * 2 / seg;
    const f = 1 + amp * Math.cos(ribs * th);
    const r = profile[i][0] * f;
    return [Math.sin(th) * r, profile[i][1], Math.cos(th) * r];
  };
  for (let i = 0; i < profile.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i, j + 1), c = at(i + 1, j + 1), d = at(i + 1, j);
      push(a, b, c);
      push(a, c, d);
      const ta = tint(j), tb = tint(j + 1);
      col.push(...ta, ...tb, ...tb, ...ta, ...tb, ...ta);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  if (valley) g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry, flatY] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const x = cx + Math.sin(th) * rx;
      let y = cy + Math.cos(th) * ry;
      if (flatY !== void 0 && y < flatY) y = flatY;
      pos.push(x, y, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function tintGeo(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function worldUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u, v;
    if (ax >= ay && ax >= az) {
      u = p.getZ(i);
      v = p.getY(i);
    } else if (ay >= az) {
      u = p.getX(i);
      v = p.getZ(i);
    } else {
      u = p.getX(i);
      v = p.getY(i);
    }
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spokes(rHub, rRim, halfW, n, hex, t = 6e-3, prism = false) {
  const segs = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    const g = prism ? new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true) : new THREE.BoxGeometry(t, len, t);
    g.translate(0, rHub + len / 2, 0);
    g.rotateX(Math.atan2(side, len) * 0.6);
    g.rotateX(0);
    g.translate(0, 0, side * 0.5);
    g.rotateX(a);
    segs.push(g);
  }
  return tintGeo(mergeGeos(segs), hex);
}
function tube(pts, r, seg = 8, hex) {
  const parts = [];
  const rAt = (i) => typeof r === "number" ? r : r[Math.min(i, r.length - 1)];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const ra = rAt(i), rb = rAt(i + 1);
    const g = new THREE.CylinderGeometry(rb, ra, len + (ra + rb) * 0.6, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function strap(pts, w, t, about, hex) {
  const parts = [];
  const c = new THREE.Vector3(about[0], about[1], about[2]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const dir = b.clone().sub(a);
    const len = dir.length();
    if (len < 1e-6) continue;
    dir.normalize();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    let nrm = mid.clone().sub(c);
    nrm.sub(dir.clone().multiplyScalar(nrm.dot(dir)));
    if (nrm.lengthSq() < 1e-12) nrm = new THREE.Vector3(0, 0, 1).sub(dir.clone().multiplyScalar(dir.z));
    nrm.normalize();
    const side = new THREE.Vector3().crossVectors(dir, nrm).normalize();
    const g = new THREE.BoxGeometry(w, len + t, t);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(side, dir, nrm));
    g.translate(mid.x, mid.y, mid.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function rbox(b) {
  const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
  if (b[6]) g.rotateX(b[6]);
  if (b[7]) g.rotateY(b[7]);
  if (b[8]) g.rotateZ(b[8]);
  g.translate(b[0], b[1], b[2]);
  return g;
}
function mirrorX(list) {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}
function canvasTile(size, draw) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function mudTile(size, base, seed, coverage = 0.33) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v) => "#" + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, "0")).join("");
    ctx.fillStyle = toHex(base);
    ctx.fillRect(0, 0, s, s);
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, "rgba(255,255,255,0.88)");
    grad.addColorStop(0.45, "rgba(255,255,255,0.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(255,250,240,${a})`);
      g2.addColorStop(1, "rgba(255,250,240,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const x = rnd() * s, y = rnd() * s;
      const v = rnd() < 0.5 ? 0 : 255;
      ctx.fillStyle = `rgba(${v},${v},${v},0.035)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
  });
}
function dustTile(size, dust, seed, coverage = 0.3) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const c = dust.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.9)`);
    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},0.4)`);
    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 80; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.4, r = 3 + rnd() * s * 0.05, a = 0.08 + rnd() * 0.25;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function corrugationTile(size, pitch, low, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * pitch) + 1) / 2;
      const v = Math.round(255 * (low + (1 - low) * t));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 60; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.08 + rnd() * 0.18;
      g2.addColorStop(0, `rgba(120,90,60,${a})`);
      g2.addColorStop(1, "rgba(120,90,60,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function plankTile(size, boards, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const bh = s / boards;
    for (let b = 0; b < boards; b++) {
      const tone = 0.82 + rnd() * 0.18;
      const v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(0, b * bh, s, bh);
      ctx.fillStyle = "rgba(40,30,20,0.55)";
      ctx.fillRect(0, b * bh, s, Math.max(1, s * 6e-3));
      for (let k = 0; k < 14; k++) {
        const y = b * bh + rnd() * bh, len = s * (0.2 + rnd() * 0.6), x = rnd() * s;
        ctx.strokeStyle = `rgba(60,45,30,${0.05 + rnd() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + len, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y);
        ctx.stroke();
      }
    }
  });
}
function rustTile(size, ratio, seed, density = 90) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < density; i++) {
      const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * s * 0.09;
      const a = 0.15 + rnd() * 0.45;
      const c = ratio.map((v) => Math.round(255 * v));
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function furTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(tone)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.patches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.05), pc = o.patchTone ?? [0.72, 0.56, 0.52];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb2(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb2(pc)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r * 1.3, r, rnd() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const strokes = o.strokes ?? 5e3, len = s * (o.length ?? 0.022);
    const drawStroke = (x, y, dx, dy, w) => {
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.stroke();
      if (x < m) {
        ctx.beginPath();
        ctx.moveTo(x + s, y);
        ctx.lineTo(x + s + dx, y + dy);
        ctx.stroke();
      }
      if (x > s - m) {
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + dx, y + dy);
        ctx.stroke();
      }
      if (y < m) {
        ctx.beginPath();
        ctx.moveTo(x, y + s);
        ctx.lineTo(x + dx, y + s + dy);
        ctx.stroke();
      }
      if (y > s - m) {
        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x + dx, y - s + dy);
        ctx.stroke();
      }
    };
    ctx.lineCap = "round";
    for (let i = 0; i < strokes; i++) {
      const x = rnd() * s, y = rnd() * s, th = (rnd() - 0.5) * 0.78, l = len * (0.6 + rnd() * 0.8);
      const light = rnd() < 0.42;
      ctx.globalCompositeOperation = light ? "screen" : "multiply";
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb2(tone)},${0.06 + rnd() * 0.14})`;
      drawStroke(x, y, Math.sin(th) * l, Math.cos(th) * l, 0.6 + rnd() * 1.2);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function heightUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = p.getY(i) / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function bindTile(mat, tex, bump = 0) {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) {
    mat.bumpMap = tex;
    mat.bumpScale = bump;
  }
  mat.needsUpdate = true;
}
function sheet(s) {
  const nx = s.nx, nz = s.nz, Hh = s.heights, t = s.t ?? 0.012;
  const X = (i) => s.x0 + (s.x1 - s.x0) * i / nx;
  const ZS = Array.isArray(s.zs) ? s.zs : null;
  const Z = (j) => ZS ? ZS[j] : s.z0 + (s.z1 - s.z0) * j / nz;
  const grid = (yOff, flip) => {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      pos.push(X(i), Hh[j][i] + yOff, Z(j));
      uv.push(i / nx, j / nz);
    }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c);
      else idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  };
  const paint = (g, hex) => {
    const n = g.getAttribute("position").count, c = new THREE.Color(hex), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const paintGrid = (g, HG) => {
    const n = g.getAttribute("position").count, col = new Float32Array(n * 3), c = new THREE.Color();
    let k = 0;
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      c.setHex(HG[j][i]);
      col[k++] = c.r;
      col[k++] = c.g;
      col[k++] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexGrid !== void 0 ? [paintGrid(top0, s.hexGrid), paint(und0, s.hexUnder ?? 16777215)] : s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
  const strip = (pts, out) => {
    const pos = [], uv = [];
    for (const [p0, p1] of pts) {
      const q0 = p0, q1 = p1, q2 = [p1[0], p1[1] - t, p1[2]], q3 = [p0[0], p0[1] - t, p0[2]];
      const e12 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]], e22 = [q2[0] - q0[0], q2[1] - q0[1], q2[2] - q0[2]];
      const n = [e12[1] * e22[2] - e12[2] * e22[1], e12[2] * e22[0] - e12[0] * e22[2], e12[0] * e22[1] - e12[1] * e22[0]];
      const tri = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? [q0, q1, q2, q0, q2, q3] : [q0, q2, q1, q0, q3, q2];
      for (const q of tri) {
        pos.push(q[0], q[1], q[2]);
        uv.push(0, 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  };
  const top = (i, j) => [X(i), Hh[j][i], Z(j)];
  const e0 = [], e1 = [], e2 = [], e3 = [];
  for (let i = 0; i < nx; i++) {
    e0.push([top(i, 0), top(i + 1, 0)]);
    e1.push([top(i, nz), top(i + 1, nz)]);
  }
  for (let j = 0; j < nz; j++) {
    e2.push([top(0, j), top(0, j + 1)]);
    e3.push([top(nx, j), top(nx, j + 1)]);
  }
  const edges = [strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0])];
  const rimHex = s.hexRim ?? s.hexUnder;
  parts.push(...rimHex !== void 0 ? edges.map((g) => paint(g, rimHex)) : edges);
  return mergeGeos(parts);
}
function paintTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, hard = false) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(hard ? 0.72 : 0.55, `rgba(${rgb2(c)},${hard ? a : a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.3) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.3) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6, o.hardEdges === true);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(o.speckRun ? run : rust)},${(o.speckAlpha ?? 0.25) + rnd() * (o.speckAlphaVar ?? 0.5)})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        const ra = (o.runAlpha ?? 0.16) + rnd() * 0.18;
        g.addColorStop(0, `rgba(${rgb2(run)},${ra})`);
        if (o.hardEdges) g.addColorStop(0.92, `rgba(${rgb2(run)},${ra})`);
        g.addColorStop(1, `rgba(${rgb2(run)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const cscale = o.chalkScale ?? 1, calpha = o.chalkAlpha ?? 0.35;
    for (let k = 0; k < (o.chalkPatches ?? 9); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.05 + rnd() * 0.1) * cscale;
      blob(chalk, cx, cy, cr, calpha + rnd() * 0.3, 0.5 + rnd() * 0.7);
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.25;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, r = 1 + rnd() * 3;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * (o.streakWidth ?? 0.014), len = s * (0.25 + rnd() * 0.55);
      const a = (o.streakAlpha ?? 0.1) + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
      g.addColorStop(o.hardEdges ? 0.92 : 0.25, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    for (const hb of o.hbands ?? []) {
      const y0 = s * (1 - hb.v1), y1 = s * (1 - hb.v0), tone = hb.tone ?? rust;
      ctx.fillStyle = `rgba(${rgb2(tone)},${hb.alpha ?? 0.8})`;
      ctx.fillRect(0, y0, s, y1 - y0);
      for (let i = 0; i < (hb.specks ?? 0); i++) {
        const x = rnd() * s, y = y0 + rnd() * (y1 - y0), r = 0.8 + rnd() * 2.2;
        ctx.fillStyle = `rgba(${rgb2(rnd() < 0.5 ? run : base)},${0.2 + rnd() * 0.5})`;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    for (const bs of o.bandStreaks ?? []) {
      const y0 = s * (1 - bs.v);
      for (let i = 0; i < (bs.count ?? 12); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * (bs.width ?? 0.012), len = s * ((bs.len ?? 0.12) + rnd() * (bs.lenVar ?? 0.25));
        const a = (bs.alpha ?? 0.14) + rnd() * 0.22;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
        g.addColorStop(o.hardEdges ? 0.92 : 0.3, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0 - 2, w, len);
      }
    }
    if (o.stencil) {
      const st = o.stencil, px = s * (st.size ?? 0.06);
      ctx.font = `bold ${px}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${rgb2(st.tone ?? chalk)},${st.alpha ?? 0.85})`;
      for (const dx of [-s, 0, s]) ctx.fillText(st.text, s * (st.u ?? 0.5) + dx, s * (1 - (st.v ?? 0.5)));
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb2(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb2(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb2(run)},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grain ?? 1800); i++) {
      const x = rnd() * s, y = rnd() * s, r = 0.5 + rnd() * 1.3, a = 0.03 + rnd() * 0.07;
      ctx.fillStyle = `rgba(150,140,130,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function sweepTube(pts, r, seg = 10, hex, cap = true) {
  const P = pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  for (let i = P.length - 1; i > 0; i--) if (P[i].distanceTo(P[i - 1]) < 1e-7) P.splice(i, 1);
  if (P.length < 2) return new THREE.BufferGeometry();
  const n = P.length;
  const segDir = [];
  for (let i = 0; i < n - 1; i++) segDir.push(P[i + 1].clone().sub(P[i]).normalize());
  const T = P.map((_, i) => i === 0 ? segDir[0].clone() : i === n - 1 ? segDir[n - 2].clone() : segDir[i - 1].clone().add(segDir[i]).normalize());
  let N = Math.abs(T[0].y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  N.sub(T[0].clone().multiplyScalar(N.dot(T[0]))).normalize();
  const pos = [], idx = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const q = new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]);
      N.applyQuaternion(q);
      N.sub(T[i].clone().multiplyScalar(N.dot(T[i]))).normalize();
    }
    const B = new THREE.Vector3().crossVectors(T[i], N).normalize();
    const k = i > 0 && i < n - 1 ? 1 / Math.max(0.5, segDir[i - 1].dot(T[i])) : 1;
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i].x + (N.x * c + B.x * s * k) * r, P[i].y + (N.y * c + B.y * s * k) * r, P[i].z + (N.z * c + B.z * s * k) * r);
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) {
    const a = i * seg + j, b = (i + 1) * seg + j, c2 = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
    idx.push(a, c2, b, a, d, c2);
  }
  if (cap) {
    for (const [ring, at, flip] of [[0, P[0], true], [n - 1, P[n - 1], false]]) {
      const base = pos.length / 3;
      for (let j = 0; j < seg; j++) {
        const k = (ring * seg + j) * 3;
        pos.push(pos[k], pos[k + 1], pos[k + 2]);
      }
      const ci = pos.length / 3;
      pos.push(at.x, at.y, at.z);
      for (let j = 0; j < seg; j++) {
        const a = base + j, b = base + (j + 1) % seg;
        if (flip) idx.push(ci, b, a);
        else idx.push(ci, a, b);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return hex === void 0 ? g : tintGeo(g, hex);
}
function frontAtlasUV(geo, a) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  const col = geo.getAttribute("color");
  const base = a.base !== void 0 ? new THREE.Color(a.base) : null;
  const minNz = a.minNz ?? 0.7;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const front = nrm.getZ(i) > minNz && x >= a.x0 && x <= a.x1 && y >= (a.yMin ?? a.y1) && y <= a.y0;
    if (front) {
      uv[i * 2] = (x - a.x0) / (a.x1 - a.x0);
      uv[i * 2 + 1] = (y - a.y1) / (a.y0 - a.y1);
      if (base && col) col.setXYZ(i, base.r, base.g, base.b);
    } else {
      uv[i * 2] = a.pin[0];
      uv[i * 2 + 1] = a.pin[1];
    }
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (col) col.needsUpdate = true;
  return geo;
}
function panelUV(geo, scale, rot = false) {
  const p = geo.getAttribute("position");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const u = rot ? p.getY(i) : p.getX(i), v = rot ? p.getX(i) : p.getY(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spike(at, w, h) {
  const g = new THREE.ConeGeometry(w / Math.SQRT2, h, 4, 1, false);
  g.rotateY(Math.PI / 4);
  g.translate(at[0], at[1] + h / 2, at[2]);
  g.computeVertexNormals();
  return g;
}
function grimeTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb2(wash)},${washA})`;
      ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb2(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb2(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.rubs) {
      const rub = o.rub ?? [0.3, 0.28, 0.3];
      for (let i = 0; i < o.rubs; i++) {
        const x = rnd() * s, y = s * (0.6 + rnd() * 0.38);
        const w = s * (0.05 + rnd() * 0.22), h = s * (6e-3 + rnd() * 0.03), a = 0.2 + rnd() * 0.45;
        const g2 = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
        g2.addColorStop(0, `rgba(${rgb2(rub)},0)`);
        g2.addColorStop(0.5, `rgba(${rgb2(rub)},${a})`);
        g2.addColorStop(1, `rgba(${rgb2(rub)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x - w / 2 + dx, y - h / 2, w, h);
      }
    }
    if (o.scuffs) {
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < o.scuffs; i++) {
        const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * (o.scuffScale ?? 0.14));
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(255,255,255,${o.scuffAlpha ?? 0.55})`);
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "multiply";
    }
    for (let i = 0; i < (o.clouds ?? 0); i++) {
      const v = o.cloud ?? [0.86, 0.86, 0.84];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.16) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.12) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.scuffs) {
      const v = o.scuff ?? [0.62, 0.62, 0.64], band = o.scuffBand ?? [0.3, 0.7];
      for (let i = 0; i < o.scuffs; i++) {
        const cx = rnd() * s, cy = s * (1 - (band[0] + rnd() * (band[1] - band[0])));
        const w = s * (0.05 + rnd() * 0.11), h = w * (0.05 + rnd() * 0.1);
        const a = (o.scuffAlpha ?? 0.34) * (0.5 + rnd());
        for (const dx of [-s, 0, s]) {
          ctx.save();
          ctx.translate(cx + dx, cy);
          ctx.rotate((rnd() - 0.5) * 0.45);
          ctx.scale(1, h / w);
          const g2 = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
          g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
          g2.addColorStop(0.45, `rgba(${rgb2(v)},${a * 0.55})`);
          g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(0, 0, w, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }
    if (o.seams) {
      const v = o.seam ?? [0.72, 0.71, 0.68];
      for (let i = 0; i < o.seams; i++) {
        const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s;
        const wpx = Math.max(1, Math.round(s * 4e-3));
        ctx.fillStyle = `rgba(${rgb2(v)},${o.seamAlpha ?? 0.5})`;
        ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb2(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
        ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.4, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb2(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb2(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb2(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb2(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb2(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb2(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb2(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const lo = o.grainLo ?? 200;
      const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.12})`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function chainlinkTile(size, wire, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    ctx.lineWidth = Math.max(1.5, wire * s);
    ctx.lineCap = "round";
    const v = 150 + Math.round(rnd() * 30);
    ctx.strokeStyle = `rgb(${v},${v + 2},${v + 4})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, s);
    ctx.moveTo(s, 0);
    ctx.lineTo(0, s);
    ctx.stroke();
    ctx.fillStyle = `rgb(${v - 20},${v - 18},${v - 16})`;
    for (const [x, y] of [[0, 0], [s, 0], [0, s], [s, s], [s / 2, s / 2]]) {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}
function bambooTile(size, strips, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const sw = s / strips;
    for (let b = 0; b < strips; b++) {
      const tone = 0.8 + rnd() * 0.2, v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 6})`;
      ctx.fillRect(b * sw, 0, sw, s);
      ctx.fillStyle = "rgba(50,42,34,0.6)";
      ctx.fillRect(b * sw, 0, Math.max(1, s * 6e-3), s);
      ctx.fillStyle = "rgba(255,255,255,0.10)";
      ctx.fillRect(b * sw + sw * 0.35, 0, sw * 0.25, s);
      const n = 1 + Math.floor(rnd() * 2);
      for (let k = 0; k < n; k++) {
        const y = rnd() * s;
        ctx.fillStyle = "rgba(70,60,48,0.45)";
        ctx.fillRect(b * sw, y, sw, Math.max(1, s * 8e-3));
      }
      for (let k = 0; k < 6; k++) {
        const x = b * sw + rnd() * sw;
        ctx.fillStyle = `rgba(80,70,58,${0.05 + rnd() * 0.1})`;
        ctx.fillRect(x, 0, 1, s);
      }
    }
    for (let i = 0; i < 300; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = "rgba(30,28,24,0.18)";
      ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  });
}
function posterTile(size, seed, lines) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    for (let k = 0; k < 4; k++) {
      const x = s * (0.02 + rnd() * 0.3), y = s * (0.15 + rnd() * 0.45), w = s * (0.14 + rnd() * 0.16), h = s * (0.18 + rnd() * 0.22);
      ctx.fillStyle = `rgba(${225 + Math.round(rnd() * 20)},${222 + Math.round(rnd() * 18)},${210 + Math.round(rnd() * 20)},0.96)`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      const n = 9;
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w * i / n, y + (rnd() - 0.5) * h * 0.08);
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + w * i / n, y + h + (rnd() - 0.5) * h * 0.12);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(40,40,45,0.55)";
      for (let i = 0; i < 7; i++) ctx.fillRect(x + w * 0.1, y + h * (0.2 + i * 0.1), w * (0.3 + rnd() * 0.5), Math.max(1, s * 6e-3));
    }
    ctx.fillStyle = "rgba(20,20,22,0.88)";
    ctx.font = `bold ${Math.round(s * 0.07)}px sans-serif`;
    ctx.textBaseline = "middle";
    for (let i = 0; i < lines.length; i++) {
      const x = s * 0.4, y = s * (0.44 + i * 0.13);
      for (let k = 0; k < 3; k++) {
        ctx.globalAlpha = 0.6;
        ctx.fillText(lines[i], x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 3);
      }
      ctx.globalAlpha = 1;
    }
  });
}
function stripeTile(size, bands, a, b, seed, o = {}) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb2(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.smudges ?? 40); i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`);
      g2.addColorStop(1, "rgba(150,140,125,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.specks ?? 1200); i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    if (o.broad) {
      const lo = o.broadLo ?? 0.8, hi = o.broadHi ?? 1;
      const g3 = ctx.createLinearGradient(0, 0, s, 0);
      for (let i = 0; i <= 64; i++) {
        const t = i / 64;
        const v = lo + (hi - lo) * (0.5 + 0.5 * Math.cos(2 * Math.PI * o.broad * t));
        const c = Math.round(255 * v);
        g3.addColorStop(t, `rgb(${c},${c},${c})`);
      }
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function latheUV(g, pointCount, seg, scale, vScale = scale, v0 = 0) {
  const p = g.getAttribute("position");
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / scale));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount);
    uv[i * 2] = s / seg * rep;
    uv[i * 2 + 1] = (p.getY(i) - v0) / vScale;
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}
function pebbleTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb2(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      if (o.shade) {
        ctx.fillStyle = rgb2((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = rgb2(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = `rgba(255,255,255,${o.gloss ?? 0.18})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx - rx * 0.2, y + dy - ry * 0.25, rx * 0.5, ry * 0.4, a, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function treadTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const groove = o.groove ?? 0.8, slots = o.slots ?? 2, rings = o.rings ?? 2;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const gv = Math.round(255 * groove);
    ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
    const pitch = s / slots, w = pitch * (o.slotWidth ?? 0.16);
    for (let i = 0; i < slots; i++) {
      const x = i * pitch + pitch * 0.4 + (rnd() - 0.5) * pitch * 0.1;
      ctx.fillRect(x, s * 0.12, w, s * 0.76);
      ctx.fillRect(x - s, s * 0.12, w, s * 0.76);
    }
    for (let i = 0; i < rings; i++) {
      const y = s * (0.2 + 0.6 * (i + 0.5) / rings);
      ctx.fillRect(0, y - 1.5, s, 3);
    }
    for (let i = 0; i < 24; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.12), v = 235 + Math.round(rnd() * 20);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
      g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function tyreTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.24, 0.76], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    ctx.fillStyle = `rgb(${base},${base},${base})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) {
      const v = base + Math.round((rnd() - 0.5) * 22);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(rnd() * s, rnd() * s, 2, 2);
    }
    const strip = (ya, yb, treaded) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) {
        const y = b0 + (b1 - b0) * (i + 1) / (ng + 1);
        ctx.fillRect(0, y - gw / 2, s, gw);
      }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : k === 0 ? y0 : y1 - (y1 - y0) * 0.45, ys1 = treaded ? y1 : k === 0 ? y0 + (y1 - y0) * 0.45 : y1;
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + k % 2 * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.moveTo(x + dx, ys0);
            ctx.lineTo(x + dx + w, ys0);
            ctx.lineTo(x + dx + w + sl, ys1);
            ctx.lineTo(x + dx + sl, ys1);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02);
      sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`);
      sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh;
      ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`;
      ctx.fillRect(0, ya + h * 0.045, s, h * 0.012);
      ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`;
      ctx.fillRect(0, ya + h * 0.11, s, 2);
      ctx.fillRect(0, ya + h * 0.88, s, 2);
      const dg = ctx.createLinearGradient(0, yb, 0, ya + h * 0.6);
      dg.addColorStop(0, `rgba(${dust[0]},${dust[1]},${dust[2]},${o.dustAlpha ?? 0.35})`);
      dg.addColorStop(1, `rgba(${dust[0]},${dust[1]},${dust[2]},0)`);
      ctx.fillStyle = dg;
      ctx.fillRect(0, ya + h * 0.6, s, h * 0.4);
      for (let i = 0; i < (o.scuffs ?? 14); i++) {
        const x = rnd() * s, y = rnd() < 0.5 ? b0 + (rnd() - 0.3) * h * 0.08 : b1 + (rnd() - 0.7) * h * 0.08, r = s * (0.02 + rnd() * 0.05), v = 225 + Math.round(rnd() * 25);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
        g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y, r * 2.2, r * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 60; i++) {
        const x = rnd() * s, y = b0 + rnd() * (b1 - b0), v = 6 + Math.round(rnd() * 14);
        ctx.fillStyle = `rgb(${v},${Math.round(v * 0.9)},${Math.round(v * 0.75)})`;
        ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 3);
      }
      ctx.globalCompositeOperation = "source-over";
    };
    strip(0, s / 2, true);
    strip(s / 2, s, false);
  });
}
function frustum(b) {
  const [cx, y0, cz, w0, d0, w1, d1, h] = b;
  const g = new THREE.BoxGeometry(1, h, 1);
  const p = g.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + h / 2) / h;
    p.setX(i, p.getX(i) * (w0 + (w1 - w0) * t));
    p.setZ(i, p.getZ(i) * (d0 + (d1 - d0) * t));
  }
  g.computeVertexNormals();
  g.translate(cx, y0 + h / 2, cz);
  return g;
}
function zincTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const mid = o.mid ?? 0.88, lo = o.lo ?? 0.74;
    const g = (v) => {
      const b = Math.round(255 * v);
      return `rgb(${b},${b},${b})`;
    };
    ctx.fillStyle = g(mid);
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.clouds ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.35 + rnd() * 0.5) : lo + (mid - lo) * rnd();
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${o.cloudAlpha ?? 0.28})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const cl = Array.from({ length: o.spangleClusters ?? 0 }, () => [rnd() * s, rnd() * s, s * (0.04 + rnd() * 0.1)]);
    for (let i = 0; i < (o.spangle ?? 520); i++) {
      let x = rnd() * s, y = rnd() * s;
      if (cl.length && rnd() > (o.spangleLoose ?? 0.25)) {
        const c = cl[rnd() * cl.length | 0], a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * c[2];
        x = c[0] + Math.cos(a) * d;
        y = c[1] + Math.sin(a) * d;
      }
      const r = s * ((o.spangleMin ?? 4e-3) + Math.pow(rnd(), 2) * (o.spangleMax ?? 0.013));
      const v = mid + (1 - mid) * (0.5 + rnd() * 0.5);
      const k = 4 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${(o.spangleAlpha ?? 0.2) + rnd() * (o.spangleAlphaVar ?? 0.35)})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        for (let j = 0; j < k; j++) {
          const a = a0 + j * Math.PI * 2 / k, rr = r * (0.55 + rnd() * 0.75);
          const px = x + dx + Math.cos(a) * rr, py = y + dy + Math.sin(a) * rr * 0.8;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.streaks ?? 30); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.01, y0 = rnd() * s * 0.5, len = s * (0.2 + rnd() * 0.7);
      const v = lo + (mid - lo) * rnd() * 0.6, a = 0.06 + rnd() * 0.14;
      const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      gr.addColorStop(0.25, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${a})`);
      gr.addColorStop(1, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
    }
    for (let i = 0; i < (o.grain ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, w = 1 + rnd() * 2, h = 1 + rnd() * 2;
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.4 + rnd() * 0.6) : lo + (mid - lo) * rnd();
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.3})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) ctx.fillRect(x + dx, y + dy, w, h);
    }
    ctx.lineCap = "round";
    for (let i = 0; i < (o.scratches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, len = s * (6e-3 + rnd() * 0.055), a = (rnd() - 0.5) * 0.7 + Math.PI / 2;
      const up = rnd() < 0.45;
      const v = up ? mid + (1 - mid) * (0.5 + rnd() * 0.5) : lo + (mid - lo) * rnd() * 0.8;
      ctx.strokeStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.28})`;
      ctx.lineWidth = 0.7 + rnd() * 1.6;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len);
        ctx.stroke();
      }
    }
    if (o.rust) {
      const c = o.rust, band = o.rustBand ?? 0.16;
      const rgbs = `${Math.round(255 * c[0])},${Math.round(255 * c[1])},${Math.round(255 * c[2])}`;
      for (const [edge, dir, b] of [[0, 1, o.rustBandTop ?? band], [s, -1, band]]) {
        const gr = ctx.createLinearGradient(0, edge, 0, edge + dir * s * b);
        gr.addColorStop(0, `rgba(${rgbs},${o.rustWash ?? 0.3})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        ctx.fillRect(0, 0, s, s);
      }
      for (let i = 0; i < (o.rustRuns ?? 22); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * 0.014;
        const top = rnd() < 0.5;
        const y0 = top ? 0 : s - s * band * (0.3 + rnd());
        const len = s * (0.1 + rnd() * 0.32);
        const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
        gr.addColorStop(0, `rgba(${rgbs},${0.18 + rnd() * 0.32})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
  });
}
function culmUV(g, r, h, scale, vOff = 0) {
  const uv = g.getAttribute("uv");
  const ku = 2 * Math.PI * r / scale, kv = h / scale;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * ku, uv.getY(i) * kv + vOff);
  return g;
}
function grainLines(ctx, rnd, x0, x1, y0, y1, n, dark, light, aMax) {
  for (let k = 0; k < n; k++) {
    const x = x0 + rnd() * (x1 - x0), a = 0.04 + rnd() * aMax, w = rnd() < 0.75 ? 1 : 1.6;
    ctx.fillStyle = `rgba(${rnd() < 0.72 ? dark : light},${a.toFixed(3)})`;
    ctx.fillRect(x, y0, w, y1 - y0);
  }
}
function weatherPatches(ctx, rnd, s, x0, x1, n, warmA, bleachA) {
  for (let k = 0; k < n; k++) {
    const y = rnd() * s, len = s * (0.12 + rnd() * 0.45), warm = rnd() < 0.5;
    const c = warm ? "112,100,88" : "255,255,255", a = warm ? warmA * (0.4 + rnd() * 0.6) : bleachA * (0.4 + rnd() * 0.6);
    const g2 = ctx.createLinearGradient(0, y, 0, y + len);
    g2.addColorStop(0, `rgba(${c},0)`);
    g2.addColorStop(0.35, `rgba(${c},${a})`);
    g2.addColorStop(0.65, `rgba(${c},${a})`);
    g2.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g2;
    for (const dy of [-s, 0]) ctx.fillRect(x0, y + dy, x1 - x0, len);
  }
}
function mouldClusters(ctx, rnd, s, spots, rx, ry, n, aMax) {
  for (const [cx, cy] of spots) {
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry) * 0.8);
    g2.addColorStop(0, `rgba(28,26,22,${(aMax * 0.9).toFixed(3)})`);
    g2.addColorStop(1, "rgba(28,26,22,0)");
    ctx.fillStyle = g2;
    for (const dy of [-s, 0, s]) {
      ctx.beginPath();
      ctx.ellipse(cx, cy + dy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < n; i++) {
      const x = cx + (rnd() + rnd() - 1) * rx, y = cy + (rnd() + rnd() - 1) * ry;
      ctx.fillStyle = `rgba(28,26,22,${(0.08 + rnd() * aMax).toFixed(3)})`;
      const w = 1 + rnd() * 2, h = 1 + rnd() * 3;
      for (const dy of [-s, 0, s]) ctx.fillRect(x, y + dy, w, h);
    }
  }
}
function culmTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "92,78,62", LIGHT = "255,255,255";
    ctx.fillStyle = "#f0efec";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(100,92,84,0.12)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.10)");
    ga.addColorStop(1, "rgba(100,92,84,0.12)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 14, 0.12, 0.3);
    const nodes = [s * (0.2 + rnd() * 0.1), s * (0.66 + rnd() * 0.12)];
    const stations = [0, ...nodes, s];
    for (let i = 0; i + 1 < stations.length; i++) grainLines(ctx, rnd, 0, s, stations[i], stations[i + 1], 260, DARK, LIGHT, 0.26);
    for (let k = 0; k < 2; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.25 + rnd() * 0.5);
      ctx.fillStyle = "rgba(38,32,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    for (const y of nodes) {
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.22)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.62)";
      ctx.fillRect(0, y, s, 2.5);
      ctx.fillStyle = "rgba(255,255,255,0.34)";
      ctx.fillRect(0, y + 2.5, s, 4);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 6.5, s, 1.5);
      const gd = ctx.createLinearGradient(0, y + 8, 0, y + s * 0.05);
      gd.addColorStop(0, "rgba(60,50,40,0.20)");
      gd.addColorStop(1, "rgba(60,50,40,0)");
      ctx.fillStyle = gd;
      ctx.fillRect(0, y + 8, s, s * 0.05);
    }
    const spots = [];
    for (const y of nodes) for (let i = 0; i < 2; i++) spots.push([rnd() * s, y + s * (0.02 + rnd() * 0.05)]);
    for (let i = 0; i < 3; i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.1, s * 0.06, 90, 0.3);
  });
}
function thatchTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const nc = o.courses ?? 4, ch = s / nc;
    const stems = o.stems ?? 260, spread = o.spread ?? 0.12;
    const wMin = o.stemW?.[0] ?? 1, wMax = o.stemW?.[1] ?? 2;
    const ragged = o.ragged ?? 0.06;
    const [sr, sg, sb] = o.stemRgb ?? [120, 106, 84];
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const butts = [];
    for (let c = 0; c <= nc; c++) {
      const row = [];
      let y = 0;
      for (let x = 0; x <= s; x++) {
        if (x % Math.max(2, Math.round(s / 48)) === 0) y = (rnd() * 2 - 1) * ragged * ch;
        row.push(c * ch + y);
      }
      butts.push(row);
    }
    for (let c = 0; c < nc; c++) {
      const y0 = c * ch;
      const t = 1 - spread * rnd();
      const v = Math.round(255 * t);
      ctx.fillStyle = `rgb(${v},${Math.round(v * 0.985)},${Math.round(v * 0.95)})`;
      ctx.fillRect(0, y0 - ragged * ch - 1, s, ch + 2 * ragged * ch + 2);
      for (let k = 0; k < stems; k++) {
        const x = rnd() * s;
        const w = wMin + rnd() * (wMax - wMin);
        const tone = 1 - spread * (0.3 + rnd() * 0.7);
        const a = 0.18 + rnd() * 0.32;
        const dark = rnd() < 0.62;
        ctx.fillStyle = dark ? `rgba(${Math.round(sr * tone)},${Math.round(sg * tone)},${Math.round(sb * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
        const tear = o.tear ?? 0;
        if (tear > 0 && rnd() < 0.45) {
          const L = ch * tear * (0.3 + rnd() * 0.7);
          ctx.beginPath();
          ctx.moveTo(x, yBot);
          ctx.lineTo(x + w, yBot);
          ctx.lineTo(x + w / 2, yBot + L);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = `rgba(58,48,36,${(0.1 + rnd() * 0.16).toFixed(3)})`;
          ctx.fillRect(x - 1, yBot, w + 2, L * 0.5);
        }
      }
      for (let k = 0; k < (o.seams ?? 0); k++) {
        const x = rnd() * s;
        ctx.fillStyle = `rgba(70,60,46,${(0.1 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 - ch * 0.1, 1, ch * (0.7 + rnd() * 0.5));
      }
      const gaps = o.gaps ?? 0;
      for (let k = 0; k < gaps; k++) {
        const x = rnd() * s, w = s * (0.01 + rnd() * 0.03);
        ctx.fillStyle = `rgba(96,84,66,${(0.2 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 + ch * 0.25, w, ch * (0.4 + rnd() * 0.5));
      }
    }
    for (let c = 1; c <= nc; c++) {
      for (let x = 0; x < s; x++) {
        const yb = butts[c][x];
        const gh = ctx.createLinearGradient(0, yb - ch * 0.09, 0, yb);
        gh.addColorStop(0, "rgba(255,252,242,0)");
        gh.addColorStop(1, `rgba(255,252,242,${(o.tip ?? 0.34).toFixed(3)})`);
        ctx.fillStyle = gh;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb - ch * 0.09 + dy, 1, ch * 0.09);
        const g2 = ctx.createLinearGradient(0, yb, 0, yb + ch * 0.22);
        g2.addColorStop(0, `rgba(58,48,36,${(o.shadow ?? 0.42).toFixed(3)})`);
        g2.addColorStop(1, "rgba(58,48,36,0)");
        ctx.fillStyle = g2;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb + dy, 1, ch * 0.22);
      }
    }
    for (let k = 0; k < (o.moss ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.14);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.14 + rnd() * 0.22;
      g2.addColorStop(0, `rgba(150,190,110,${a.toFixed(3)})`);
      g2.addColorStop(1, "rgba(150,190,110,0)");
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    for (let k = 0; k < (o.rot ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.08);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.3 + rnd() * 0.25;
      g2.addColorStop(0, `rgba(96,86,74,${a.toFixed(3)})`);
      g2.addColorStop(0.6, `rgba(96,86,74,${(a * 0.5).toFixed(3)})`);
      g2.addColorStop(1, "rgba(96,86,74,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 10, 0.1, 0.22);
  });
}
function tarpTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const pitch = Math.max(3, Math.round(s / (o.tapes ?? 64)));
    for (let x = 0; x < s; x += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(x, 0, 1, s);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(x + 1, 0, Math.max(1, pitch * 0.35), s);
    }
    for (let y = 0; y < s; y += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(0, y, s, 1);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(0, y + 1, s, Math.max(1, pitch * 0.35));
    }
    for (let k = 0; k < (o.creases ?? 6); k++) {
      const horiz = rnd() < 0.5, p = rnd() * s, len = s * (0.5 + rnd() * 0.5), q = rnd() * s;
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      if (horiz) {
        ctx.fillRect(q - len / 2, p, len, 1.6);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(q - len / 2, p + 1.6, len, 2);
      } else {
        ctx.fillRect(p, q - len / 2, 1.6, len);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(p + 1.6, q - len / 2, 2, len);
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 12, 0.1, 0.34);
  });
}
function sawnTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "96,84,68", LIGHT = "255,255,255";
    ctx.fillStyle = "#f4f2ee";
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 20, 0.14, 0.3);
    grainLines(ctx, rnd, 0, s, 0, s, o.grain ?? 220, DARK, LIGHT, 0.18);
    for (let k = 0; k < (o.knots ?? 4); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02);
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.fillStyle = "rgba(74,60,44,0.45)";
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(96,80,60,0.22)";
        ctx.lineWidth = 1;
        for (let q = 1; q <= 3; q++) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y + dy, r * (1 + q * 0.6), r * (1.6 + q * 0.9), 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    for (let k = 0; k < (o.splits ?? 3); k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.2 + rnd() * 0.45);
      ctx.fillStyle = "rgba(58,48,36,0.42)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    const spots = [];
    for (let i = 0; i < (o.mould ?? 3); i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.09, s * 0.07, 70, 0.24);
  });
}
function galvTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, rot, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const fl = o.flutes ?? 0, flow = o.fluteLow ?? 0.88;
    if (fl > 0) {
      for (let x = 0; x < s; x++) {
        const t = (1 - Math.cos(x / s * Math.PI * 2 * fl)) / 2;
        const k = flow + (1 - flow) * t;
        ctx.fillStyle = `rgb(${rgb2(base.map((v) => v * k))})`;
        ctx.fillRect(x, 0, 1, s);
      }
    } else {
      ctx.fillStyle = `rgb(${rgb2(base)})`;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.drift ?? 16); i++)
      blob(dark, rnd() * s, rnd() * s, s * (0.16 + rnd() * 0.3) * (o.driftScale ?? 1), 0.1 + rnd() * 0.18, 0.5 + rnd() * 0.9, rnd() * Math.PI);
    for (let k = 0; k < (o.chalkPatches ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.08 + rnd() * 0.18) * (o.chalkScale ?? 1);
      blob(chalk, cx, cy, cr, (o.chalkAlpha ?? 0.55) + rnd() * 0.3, 0.5 + rnd() * 0.9, rnd() * Math.PI);
      for (let i = 0; i < 40; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.3;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let k = 0; k < (o.rustClusters ?? 10); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.02 + rnd() * 0.055);
      blob(rust, cx, cy, cr, 0.25 + rnd() * 0.3, 0.7 + rnd() * 0.7, rnd() * Math.PI);
      for (let i = 0; i < (o.specksPerCluster ?? 26); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.7 + rnd() * 1.8;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 6e-3, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(rust)},${0.14 + rnd() * 0.16})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb2(c)},${a})`;
      ctx.lineWidth = 0.7 + rnd() * 1.3;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, 0);
        ctx.lineTo(x + dx, s);
        ctx.stroke();
      }
    }
  });
}
function splitTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "88,76,58", LIGHT = "255,255,255";
    ctx.fillStyle = "#f3f0e8";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(90,84,74,0.14)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.08)");
    ga.addColorStop(1, "rgba(90,84,74,0.14)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 10, 0.1, 0.34);
    const node = s * (0.3 + rnd() * 0.4);
    for (const [y0, y1] of [[0, node], [node, s]]) grainLines(ctx, rnd, 0, s, y0, y1, 320, DARK, LIGHT, 0.24);
    for (let k = 0; k < 3; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.3 + rnd() * 0.6);
      ctx.fillStyle = "rgba(40,34,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.6, len);
      ctx.fillStyle = "rgba(255,255,255,0.20)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.6, y + dy, 1.2, len);
    }
    {
      const y = node;
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.24)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.66)";
      ctx.fillRect(0, y, s, 3);
      ctx.fillStyle = "rgba(255,255,255,0.36)";
      ctx.fillRect(0, y + 3, s, 5);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 8, s, 2);
    }
    for (let k = 0; k < 4; k++) {
      const cx = rnd() * s, cy = rnd() * s, rx = s * (0.012 + rnd() * 0.03), ry = rx * (1.4 + rnd() * 1.6), rot = (rnd() - 0.5) * 0.6;
      for (const dy of [-s, 0, s]) {
        const halo = ctx.createRadialGradient(cx, cy + dy, 0, cx, cy + dy, Math.max(rx, ry) * 2.4);
        halo.addColorStop(0, "rgba(96,74,40,0.42)");
        halo.addColorStop(0.5, "rgba(96,74,40,0.20)");
        halo.addColorStop(1, "rgba(96,74,40,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx * 2.6, ry * 2.4, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(36,28,18,0.82)";
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx, ry, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(14,10,6,0.9)";
        ctx.beginPath();
        ctx.ellipse(cx + rx * 0.2, cy + dy - ry * 0.1, rx * 0.5, ry * 0.55, rot, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < 6; i++) {
        const x = cx + (rnd() - 0.5) * s * 0.12, y = cy + (rnd() - 0.5) * s * 0.2, r = 1 + rnd() * 1.8;
        ctx.fillStyle = "rgba(30,24,16,0.85)";
        for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    mouldClusters(ctx, rnd, s, [[rnd() * s, node + s * 0.04], [rnd() * s, rnd() * s]], s * 0.08, s * 0.05, 60, 0.26);
  });
}
function ropeTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#f4efe4";
    ctx.fillRect(0, 0, s, s);
    const n = 10, pitch = s / n, ang = 0.32;
    const dx = Math.tan(ang) * s;
    ctx.save();
    for (let k = -3; k < n + 3; k++) {
      const x0 = k * pitch;
      for (const oy of [-s, 0, s]) {
        ctx.strokeStyle = "rgba(70,58,40,0.55)";
        ctx.lineWidth = pitch * 0.22;
        ctx.beginPath();
        ctx.moveTo(x0, oy);
        ctx.lineTo(x0 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.30)";
        ctx.lineWidth = pitch * 0.3;
        ctx.beginPath();
        ctx.moveTo(x0 + pitch * 0.5, oy);
        ctx.lineTo(x0 + pitch * 0.5 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(90,76,52,0.28)";
        ctx.lineWidth = 1.2;
        for (let t = 0; t < 12; t++) {
          const yy = oy + (t + rnd()) * s / 12, xx = x0 + pitch * 0.5 + dx * ((yy - oy) / s);
          ctx.beginPath();
          ctx.moveTo(xx - pitch * 0.35, yy - pitch * 0.18);
          ctx.lineTo(xx + pitch * 0.35, yy + pitch * 0.18);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
    for (let i = 0; i < 500; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = rnd() < 0.6 ? "rgba(70,58,40,0.18)" : "rgba(255,255,255,0.22)";
      ctx.fillRect(x, y, 1, 1 + rnd() * 2);
    }
    for (let i = 0; i < 3; i++) {
      const y = rnd() * s, h = s * (0.06 + rnd() * 0.1);
      const g2 = ctx.createLinearGradient(0, y, 0, y + h);
      g2.addColorStop(0, "rgba(60,48,32,0)");
      g2.addColorStop(0.5, "rgba(60,48,32,0.22)");
      g2.addColorStop(1, "rgba(60,48,32,0)");
      ctx.fillStyle = g2;
      for (const dy of [-s, 0]) ctx.fillRect(0, y + dy, s, h);
    }
  });
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true
    });
    if (s.envMapIntensity !== void 0) m.envMapIntensity = s.envMapIntensity;
    if (s.emissive !== void 0) {
      m.emissive = new THREE.Color(s.emissive);
      m.emissiveIntensity = s.emissiveIntensity ?? 1;
    }
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    if (s.alphaTest !== void 0) {
      m.alphaTest = s.alphaTest;
      m.transparent = false;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createElephantCrossingSignModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Elephant Crossing Sign";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function guardVertexColors(geo, mat) {
    if (!mat || !mat.vertexColors || geo.getAttribute("color")) return;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    node.add(mesh);
    root.add(node);
    nodes[id] = node;
    meshes[id] = mesh;
    colliders[id] = null;
    return mesh;
  }
  function addInst(id, name, geo, matId, mats, cols) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst);
    root.add(node);
    nodes[id] = node;
    meshes[id] = inst;
    colliders[id] = null;
    return inst;
  }
  function quad(radius, y, phase = 0) {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1)
      );
    });
  }
  const G = CONFIG.geometry;
  for (const c of G.components) {
    const gs = [];
    for (const b of c.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(c.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of c.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const t of c.sweeps ?? []) gs.push(sweepTube(t.pts, t.r, t.seg ?? 10, t.hex, t.cap !== false));
    for (const st of c.straps ?? []) gs.push(strap(st.pts, st.w, st.t, st.about, st.hex));
    for (const cy of c.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) {
        const uv = g2.getAttribute("uv");
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]);
      }
      if (cy.sideUV) {
        const uv = g2.getAttribute("uv"), n = ((cy.seg ?? 12) + 1) * 2;
        for (let i = 0; i < n; i++) uv.setXY(i, cy.sideUV[0], cy.sideUV[1]);
      }
      if (cy.scale) {
        g2.scale(cy.scale[0], cy.scale[1], cy.scale[2]);
        g2.computeVertexNormals();
      }
      if (c.uv === "culm") culmUV(g2, cy.rt, cy.h, c.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
      }
      if (l.ry) g2.rotateY(l.ry);
      if (l.rx) g2.rotateX(l.rx);
      if (l.rz) g2.rotateZ(l.rz);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const d of c.domes ?? []) {
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley);
      if (d.ry) g2.rotateY(d.ry);
      if (d.rx) g2.rotateX(d.rx);
      if (d.rz) g2.rotateZ(d.rz);
      if (d.at) g2.translate(d.at[0], d.at[1], d.at[2]);
      if (d.valley && d.hex !== void 0) {
        const col = g2.getAttribute("color");
        const t = new THREE.Color(d.hex);
        for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * t.r, col.getY(i) * t.g, col.getZ(i) * t.b);
        gs.push(g2);
      } else gs.push(d.valley ? g2 : tintGeo(g2, d.hex));
    }
    for (const p of c.planes ?? []) {
      const g2 = new THREE.PlaneGeometry(p.w, p.h, 1, 1);
      g2.translate(p.at[0], p.at[1], p.at[2]);
      const uv = g2.getAttribute("uv");
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.rep?.[0] ?? 1), uv.getY(i) * (p.rep?.[1] ?? 1));
      gs.push(tintGeo(g2, p.hex));
    }
    for (const e of c.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      for (const h of e.holes ?? []) {
        const hp = new THREE.Path();
        hp.moveTo(h[0][0], h[0][1]);
        for (let i = 1; i < h.length; i++) hp.lineTo(h[i][0], h[i][1]);
        hp.closePath();
        shape.holes.push(hp);
      }
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const e of c.ellipsoids ?? []) {
      const g2 = new THREE.SphereGeometry(1, e[10] ?? 16, e[11] ?? 12);
      g2.scale(e[4], e[5], e[6]);
      if (e[7]) g2.rotateX(e[7]);
      if (e[8]) g2.rotateY(e[8]);
      if (e[9]) g2.rotateZ(e[9]);
      g2.translate(e[1], e[2], e[3]);
      gs.push(tintGeo(g2, e[0]));
    }
    for (const f of c.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const s of c.sheets ?? []) {
      const g2 = sheet(s);
      gs.push(s.hexUnder !== void 0 ? g2 : tintGeo(g2, s.hex));
    }
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      if (t.hexes) {
        const seg = t.seg ?? 12, n = t.stations.length;
        const col = new Float32Array(seg * n * 3);
        for (let i = 0; i < n; i++) {
          const e = t.hexes[Math.min(t.hexes.length - 1, i)];
          const d = new THREE.Color(Array.isArray(e) ? e[0] : e), v = new THREE.Color(Array.isArray(e) ? e[1] : e);
          for (let j = 0; j < seg; j++) {
            const f = (Math.sin(j * Math.PI * 2 / seg) + 1) / 2;
            const k = (i * seg + j) * 3;
            col[k] = d.r + (v.r - d.r) * f;
            col[k + 1] = d.g + (v.g - d.g) * f;
            col[k + 2] = d.b + (v.b - d.b) * f;
          }
        }
        g2.setAttribute("color", new THREE.BufferAttribute(col, 3));
        gs.push(g2);
      } else gs.push(tintGeo(g2, t.hex ?? 16777215));
    }
    let g = mergeGeos(gs);
    if (c.scale) g.scale(c.scale[0], c.scale[1], c.scale[2]);
    if (c.tint) {
      const a = new THREE.Color(c.tint.c0), b = new THREE.Color(c.tint.c1);
      const p = g.getAttribute("position");
      let col = g.getAttribute("color");
      if (!col) {
        col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3);
        g.setAttribute("color", col);
      }
      const ax = c.tint.axis === "x" ? 0 : c.tint.axis === "y" ? 1 : 2;
      for (let i = 0; i < p.count; i++) {
        const v = ax === 0 ? p.getX(i) : ax === 1 ? p.getY(i) : p.getZ(i);
        const t = Math.min(1, Math.max(0, (v - c.tint.from) / (c.tint.to - c.tint.from)));
        const r = a.r + (b.r - a.r) * t, gg = a.g + (b.g - a.g) * t, bb = a.b + (b.b - a.b) * t;
        if (c.tint.keep) col.setXYZ(i, col.getX(i) * r, col.getY(i) * gg, col.getZ(i) * bb);
        else col.setXYZ(i, r, gg, bb);
      }
      col.needsUpdate = true;
    }
    if (c.uv === "world") g = worldUV(g, c.uvScale ?? 1);
    if (c.uv === "height") g = heightUV(g, c.uvScale ?? 1);
    if (c.uv === "panel") g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === "panel-rot") g = panelUV(g, c.uvScale ?? 1, true);
    if (c.uv === "front") g = frontAtlasUV(g, c.atlas);
    add(c.id, c.name, g, c.material);
    if (c.collider) colliders[c.id] = c.collider;
  }
  for (const r of G.instanced ?? []) {
    const gs = [];
    for (const b of r.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const s of r.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const f of r.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(
        cy.rt,
        cy.rb,
        cy.h,
        cy.seg ?? 12,
        1,
        cy.open ?? false,
        cy.th0 ?? 0,
        cy.thLen ?? Math.PI * 2
      );
      if (r.uv === "culm") culmUV(g2, cy.rt, cy.h, r.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of r.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.rx) g2.rotateX(l.rx);
      if (l.ry) g2.rotateY(l.ry);
      if (l.rz) g2.rotateZ(l.rz);
      if (l.at) g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const s of r.spokes ?? []) {
      const g2 = spokes(s.rHub, s.rRim, s.halfW, s.n, s.hex, s.t ?? 6e-3, s.prism ?? false);
      if (s.rx) g2.rotateX(s.rx);
      if (s.ry) g2.rotateY(s.ry);
      if (s.rz) g2.rotateZ(s.rz);
      if (s.at) g2.translate(s.at[0], s.at[1], s.at[2]);
      gs.push(g2);
    }
    for (const t of r.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    let g = mergeGeos(gs);
    if (r.uv === "world") g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === "height") g = heightUV(g, r.uvScale ?? 1);
    const mats = [];
    for (const p of r.placements) {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(p[0], p[1], p[2]),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(p[3] ?? 0, p[4] ?? 0, p[5] ?? 0)),
        new THREE.Vector3(1, 1, 1)
      ));
    }
    addInst(r.id, r.name, g, r.material, mats, r.colors);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    if (t.kind === "baked") {
      if (typeof document === "undefined") continue;
      const baked = new THREE.TextureLoader().load(t.uri);
      const srgb = THREE.SRGBColorSpace;
      if (srgb) baked.colorSpace = srgb;
      baked.anisotropy = 4;
      mat.map = baked;
      mat.needsUpdate = true;
      continue;
    }
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "paint") tex = paintTile(t.size ?? 512, t.seed ?? 17, t);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "zinc") tex = zincTile(t.size ?? 512, t.seed ?? 19, t);
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9, t);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    if (t.kind === "galv") tex = galvTile(t.size ?? 512, t.seed ?? 47, t);
    if (t.kind === "split") tex = splitTile(t.size ?? 512, t.seed ?? 53);
    if (t.kind === "rope") tex = ropeTile(t.size ?? 512, t.seed ?? 59);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createElephantCrossingSignModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    pivots.push(rootPivot);
    for (const pv of CONFIG.pivots ?? []) {
      const o = new THREE.Object3D();
      o.name = pv.name;
      o.position.set(pv.position[0], pv.position[1], pv.position[2]);
      o.userData.actionProfile = {
        animationRole: "child",
        pivot: {
          mode: "custom",
          localPosition: pv.position,
          axis: pv.axis,
          name: pv.name,
          component: pv.component,
          instance: pv.instance ?? null,
          notes: pv.note ?? ""
        }
      };
      root.add(o);
      pivots.push(o);
    }
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    const grouped = /* @__PURE__ */ new Map();
    for (const [name, members] of Object.entries(rt.destructionGroups ?? {})) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = node?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== "string" || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(node);
    }
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values(rt.sockets ?? {}),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} }
    };
  }
  return root;
}
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRWxlcGhhbnQgQ3Jvc3NpbmcgU2lnbiAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAwLjkgeCAyLjEgeCAwLjEzNCBtLCBvcmlnaW4gYmFzZS1jZW50cmUgb24gdGhlIHBvc3QgYXhpcywgK1kgdXAsICtaIHRoZSBwcmludGVkIGZhY2UuXG4gKiBCdWRnZXQgKHNtYWxsLCBvdmVycmlkZGVuKTogPD04MDAgdHJpYW5nbGVzLCA8PTIgZHJhdyBjYWxscywgPD0yIG1hdGVyaWFscywgPD0yIHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBTVFJFRVQgQU5EIFZFTkRPUiBQUk9QUyAtLSBhIGNvbmUsIGEgYmFycmllciwgYSBjYXJ0LCBhIHN0b29sLiBUaGVcbiAqIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBUSU5URUQgQk9YIGFuZCB0aGUgcG9seWxpbmUgVFVCRSBtZXJnZWQgaW50byBvbmUgZ2VvbWV0cnkgcGVyIG1hdGVyaWFsLFxuICogd2l0aCBldmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgYSBtYXRlcmlhbCBjYXJyaWVkIGFzIGEgdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLFxuICogYW5kIHN1cmZhY2UgaWRlbnRpdHkgKGNvcnJ1Z2F0aW9uLCBncmltZSB3YXNoLCBtb3NzLCBwbGFuayBqb2ludHMsIHJ1c3QpIGRlbGl2ZXJlZCBhcyBPTkVcbiAqIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHBlciBtYXRlcmlhbCByYXRoZXIgdGhhbiBhcyBnZW9tZXRyeSBvciBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJlbGVwaGFudC1jcm9zc2luZy1zaWduXCIsXG4gICAgXCJuYW1lXCI6IFwiRWxlcGhhbnQgQ3Jvc3NpbmcgU2lnblwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkVsZXBoYW50Q3Jvc3NpbmdTaWduXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDAuOSB4IDIuMSB4IDAuMTM0IG0sIG9yaWdpbiBiYXNlLWNlbnRyZSBvbiB0aGUgcG9zdCBheGlzLCArWSB1cCwgK1ogdGhlIHByaW50ZWQgZmFjZS5cXG4gKiBCdWRnZXQgKHNtYWxsLCBvdmVycmlkZGVuKTogPD04MDAgdHJpYW5nbGVzLCA8PTIgZHJhdyBjYWxscywgPD0yIG1hdGVyaWFscywgPD0yIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInNoZWV0aW5nXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNDIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMyxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzaGVldGluZ1wiLFxuICAgICAgICBcImtpbmRcIjogXCJiYWtlZFwiLFxuICAgICAgICBcInVyaVwiOiBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JnQlhBQUJYUlVKUVZsQTRJUFJXQUFBd2lBR2RBU281QW4wQ1BsVXFrVVlqb3FHaEpmT3BHSEFLaVdOdTE4MmlxNmk2MTJha3V5NXRRTnVLemhaSDREZngvOVMvcFA5dy9mLy8vK2JhSTN5bitQL2FEKzcrKzNibjg1L2VQMDUvYy8yQitiZmpEMmw1MUhsZjYzL3MvdWsrV3YvTzlkZjZ4LzczdUlmeG4rZWY2TC9UZjVUOW0rOGQrNi9xWC8xLysrL2NqM2l2L0I2MGY4cDZrUCt5Nm83ME4vTnMvNW43ZWYvLzVhLzYzLzhQM0grQXYvRmZ5ai8vL3YvOEFILy85aGorQWY4TC8vLy8vbE8vSS85SzY3ZjByM1hmNnI5eC9oL3ZGMnAvZFo5OStiSHh1N2gvMmovUjlDejNCL3B2ekQvdm5yeThBbnBmTWc3NWY5My9FK3M3SC9zcjJ3UDdGNXdmNjhEaHYxUGdxTDRRS3YzU1hYM3dMRVdYajgrT0VLb1huQzRNaEF3VkY4SUZ3WkNCZ3FMdHRaaUM4SXkrbWJIN3FtZnp6UVlLSFpOLytncUw0UUxneUVEQlVYd2dYQmtIbVhtQ09UM0RRZE9TZ0hXQjRydTA1bXdBRWZmdk5tYWVCckNrRUhLZ3llTW05R09jYmhBdURJUU1GUmZDQmNHUUFjWDFzNDBQZCtlOVd6Ukc3QWtFL21IQm9GTzZYMkJxWGNaaFZQTkJuN2dDdStzRW1SS0w0UUxneUVEQlVYd2dYQkh2eHcxcExKb3ZvK0o4Witlam5Sc2hoNWphS3RKT1ZUTjVZYUZIaHJKejN3RmhkMXFOUUpCVVh3Z1hCa0lHQ292Zy83eGJ1T2dWc2lScWxJWFFnM0Rlck5WVDBKbUJ0V28wTW1BaktMek5UalJVMm5rdS9RdHljUDE5SUJZNzZnQmhQZXQxR3A4dG8yYUdQMi81NFhCa0lHQ292aEF1REVqVU9TV0hZNmxVT05JL3FScmxKQnYwRlNvSXp1Mmg3Y3I1UFk2UG5aZG91Vkp3SXZtVlpkVkRuNEg4bndQdWsvZDhZY3RSV1NsUEhSejFBSUhVc0hSWDlCT3A4RlJmQ0JjR1FnUHdUT05UQUZtNlhQWEMvbUJUWFp1bHd2U1VUQ2IyN0hTVXVTcE5BYmI3L0hhOEdHOHFYWktNUHhXQnNOdDdWY1JQZzlHUlNFLzV4TDNoMU1taHR0NndJS1dXZGJWdmlnaVZqM2lZVmZBb3hVYXZHNFFMZ3lFREJVU2JQTmpoTGhLcVZqVm80NnB5TnliZk1nR1liLytTTkJlYzBoNkxpOUo5TmQxSWY4Q3F5R2xOMmpaRW43djRPamtyMVRFb05qa2ZlbUhrTDlwZUcxSHZMM3Z2YUpVb3pPeitlVEZpUGxWRlJmQ0JjR1FlV05iYzZvS0dxa1dnRytTSTBCcFU0RDR6VXdWbyt1UWlIYXJlVXVSbE5BaTFkbUovR2ZCUHFMaFkwb3Zpell3K0IrRm16TjB4NXhqbzZWdTNHMVNRQjJXSE9zU1JEd2oyUktrWVQzdDk5MXJyUFpUdmo5aE9wOEZSZkNCVmpGa2EvaFNRSEdYYmpESUhBeCtlL3B0aFpXbXN4bW80a0p2VzBuYnM1cTZPUHNQVkpoYStzT3pNZnpJQzdNQkNXTERneENveEZDVDVSUENyMHBLTGI3YXdlV29yelBxOG5xRVJsMGtPdjJRYVN3WmpQZFFqL3p3V1dBRitDb3ZoQXR5azFoZlpIMEJWaXZSZXEvQzc5Ukh4WWdEMEI3ZlVmd2dBUHVPdEJtYUk1aFgyVENOdUZ1Z1phM0VzRHR6N3J2cm9GcWRBaklRTDZwcENrMUZnQ3owQzg0WEJqK2ZTcEtRRGx2MUx6NUNBL3VGbzRsT01VUHkwMXJiM1Z6SURuOVBHc1BadkhuT0pIQU9vcXZVa0ZzaFBTSXRXOWVjUEg2NnNOVERNMDg0WFFRYXNvVkZyeHRSaHF5QVdoVytoOXIwNjJ6UUx6aUc0M29RaVgrZXprUXpYZWh4L3FINnJ0QTZYaFRvNHVvRnY0ZmcwUUM4NFZjN2N2UFl1ODA2N1AzMzhWZ296aUt0NjlHVWI4eGxMaDV4UjNpL2pncjZkZGtqcUxuTTBtaUVaeVRnQkM0ZlpRdWZEVW5JWXlKTEpncFFQNldIUkFMekZNcFhvRzJvS0drYzVJK1FMRkZHU0NIMWVXcWx2Qzh5V0ZHNzV2UDE5QjI5OFhhNElocnZVcG5qMkZEOWpWL2U2SUVLczlwdHh3eWEyWm1CNDFxcllKb29TeUtEZ0RQVFlOOWNZNklGR3F3WGpOaFNGQzA3VWVhWUEvS2hNR3VLSWR5SExOeGZub2xGN2c0cklIbkc3MnFoV1RZYXlVNFpBZWs1TVZ6MjN6cWdnSnJhbW9qQkZBVzB2ZTlHbjErVURXZHp3L2oyaHE4VW4yK0c4UnBOaFAzdHQrK1dXWDJWd2RqN3E2ZlJBcThuSUdrVFBjdWlCbXdnZlJPMjhCTGNpeWdxTW9WK2kzSkhoeEkzeFd4SWlMRlVUaDNyK0FnNDRhb0pIanA0QWR2NUFMT1UzVCtvd3NRdk1JNW1tQ1QwaXNDeWNEY0ZsMHZjMVZpbXEyMjNkVWM0WEovUWVCV3V6bS94VEV6aldieU90VnZUK3BMZVNjSUpkbG52bVpYdFlPUGorcFhKU3MzalVtRFcyK1d3WEM1eWlmeURwZkQvdFM3V0pENmRHdWZjUWRHdEFweW9oNUNzL2lLSG05dDFMN0NIN0pnZ1lLakJhc1F1UkRwWHFEUUhyMU9JLytERG8zVE5Pb3FNWm1QenRjaEtrK3l5Q3A4TnJ0akxHeDB4bUVuWEhSN0svSzRLWk1uZGhpTnFSSEFDZFpTbzdzSk1pZTlTUkF2ckx1bDMxUXprdEJQb3g4RTQwNmRqY09FR21GaURwNlJ2RVR1ajQrR1NSUXhZR1ljSU54TjNpZTlGZjdFbS9KWUx5L1RYYSttYnNKREpoMHFXaVdIOWtiSUpTTjFSN2VYZW15T3NlUGljUEN6Tksrejh4K1RGNG4vVmxpSEc2b3JmZTk0Y0IzdkQxOU0xOFlPUHFybTZlaWVXSDJJcFZUZWxBeURVMlRCSTg0Mnp6RzJFS2hZU1FEVVh3dkZtWHNjeVZFRUt5NFVzYVp5T1dNcFhEaWhFYnQ5Y2FwQVkrNXZ6WlpKTlEvY09abWhQS0xUMlgydFpPdGN1dlJVaVY3V3ZQSitDVkc5VzBVZTJFSVRtMVlya3hteEk1bFZuYmhncjZyRFV3N3lnRmVWaE9TUXcvQ2pPZ3NwMFp5THVsOVA1U25oanRyeWVaWEo5azlzcEk5VmQ4ZmE0YlJwdHo0RUd6SGRDV3N4ZlQwcFpvdVJjUkIrVFd4Q29EcVFnWFV2QlVYd2czZ1ZNbGhXNDhkdVpUWjNDQi9EZ3RZU2YvQlYzRzUvazVjeHpXSlNKTmVVcWhuNXZvUXdaT09XbG5yeW1yNVZtcTB5VU1uYWQyUE5HeVZWb0NSNThlemZ1c0FMSHhrMUNFdE5nWWRsU0pRTGd5RURaZkMwWm1UU3JkdkNzU1lGWVZBb1BSMTZWdVdZMS8xQThld0gvTWU4djQwa3lGTkcvYWwwUTYxQTNJVWgxNDF2ZzFNT3l2QnVGd1pDQmptNTd0YUwrVmJHUjhFSWtiWVplV0FTZEh1dTUwb0ZQZGx6ektDSmhncUw0WWYxUGdxTDRRYjFnLzltSWpVbDZISi9WMytveldUbm02cEpzMDNIMnJXRURCVVgwZnlFREJVWHdpY0RGS2JjY2FBcERuN21kTFFqekhsS29IL1dwR1F0OHo2Z1lkbFJVWDBmeUVEQlVYd2daSWkwSDM3YXB0VGIwNitqdE1HWCs5TnVUb1dGZzVabVdhN2VTaStFQzRNandSdUVDNE1oQXdiUUFCR0x4YnczM1JsRHM2L2FMYjVoMzlYQW51NkV0RzZvcUw0UUxnMHI1RzRRTGd5RURCcmxjUDllSUFPNmJMd1IvMWhGWDRYeUFKaDJWRlJmREQrcDhGUmZDQmNHUkdsVUphVTdTSmJmTzRielVoQXVESVFNRlNaT0RJUUhySmxHWE13YW9GN2VmV1VRVDBjTzRIZnAvVWl2eGF2YjlYUVVMREV0eWdYdDB0MGp5ZVRjNGdVNWRDbzJNMG93ZEd1cDhwa1lRVXhSYXZ3Z1ZCY1d2Vk43NkRTTU1laFlPaVVUeTdyaWZmTmpWUkc5YVB2dmdSS29XRWpPOWlxdlM1QVZrSDhDRE92c2hDR0I5TmFrMDlLM083NGkwSHdMYjNNZEg5UU00Tnd1REVrVHplRXhYU1VTUlRSckgzR3JQc1o2ZW9kTVRsb2lPZDhPWWVNaXFqekEyc1Rxa21mQnBxUXptZ0ZzTVhTSWdZMUhTVmE0UnpGOGF5bmhUaFVINDlkK3ZGRWJvZ1lJT1ViT1ZqNUQ0azRjekxBa0lHY0c0WEJpU2I3aFRGK3hpNktwaEQ5ZlhBSDJjKzR5S2hIUWRSME9wSVZSZGZpZnovcThWVG00NWl5MWNVTTNJUjl1QzdtUVl6eGdYc09ocnV5MGxMbEM4K3lESTJha1A5Mm5BdGVOTlJ2SDB3bWUrZ3EzQVJYVEpKV24zVTd5NnNia2VGVUliN2JvZnVPSmlmQlhLcXIwZEs1Z1dTQXVuT1pIcGhKUHFIWVVkN0dHd2JWeUhGWFY4L3NlcjdmaEM2b0dDb2xZK0VwNWVKWjh6QiswTDFMQWt3ZENRZTFLM0ViaXZZR1VuMnByV3I0Z2RxL1J2ZmcwS3AvYmtheVIrMGpNNllLWjRqd3BRWDNaQmVmaUtNbHRnOHpIMmN5TFVGTzFpNm43MVk0cmNINFpwaWJLbWNXZllqTUxnbS9zTW1nMS90UDI0Zlo3S2xNVXVubkxxZ1lLaVZSRCtyK08vdld5U25uYkUxWkxOSitkN21BeC82NzRtT05jVFJpOFV6UlJYQlg0Q1FNSnMxSWhPOEwwTGpwVSt6b045b2lDTmtrY2ZVL2hXL3BTUGFSaTAwQ0JFY2l2M2FYZEhoRFBwNW4vZ3Y4Y3o3UjQxMTMrRFN2a2JnLzlCM3JVYmZua3NVdWV5VWhMeTc5Q2tUZVhKeXhRVFB6SHZuSkhQMkJ6ZVNTWEladEg0RUdaYjhvN0tIVEp6REI2VGkvNElrRHNKNG1xcFNwYVA3ejlLbVVkbEdma1YzVDhod2xoY2kwL3p2S3pSb0NIWUZvdTlyNWJsYnJ3bXJqZDUzWTREa21ZVHV0a0V5aVU1NDNneGVuN3BDajJ3cHZVemFsMHFCNC9jVGdWL3hGM0lDVWRURFdDYkJJOHc3YTVpbitPbWs2dFhKeTB4Qm5jMlczTGsxdit1OGVwU1Z2NVVJSEZxTGxFSTQ1N2QwMHR4RU1mMGdnd3lQQm9JMnBaNnozUmtpdTYva0JNT0tyRnA5K1dyLzZBaWR0ZFJRcFJ3UmJlRmdESzA0Z052WnJPanhsTGllc2RNNEd5MkNnaDF2NkdTcGwzelpBRzhMZ1lpK0dIOG9BQUQrL25EcHIxZ0FOYjJkeGJMRHVpSTdwbEowTTRpdlVYZjk4N1JjWExpd2I0bU9tZUY0UUtYQ0cyckNGRHVQR1N0MEZJbGVMeHd4QmJKdnNIRmg2dy9Ta1RiZm9jZCtnR2kxcXVneWJKS2hEdTgxd2ZLdGx4Uis5Z0FBQUFBYitmNE92V20xdHZLUDJCTjUzRk1FOTFmQ3U2bkFsclVUN1g1cklzclJBY1BWbEJGaWJIem1DZVFQSjFOR2kyaCtPK29zQUU1OHlvZkR0Yy9TcWtxTTRNM2p5YlAzZkx2ayt4Z0RrRlg3S001UVNoUk5jYUhRQXRXYlhzeDdRYWJuTXh2ck01WVhXSVVXc3JMNWFFTUlHd1djeGRhaFlZbWlmbGlCNUV4dnVJRGYwVytZZzJNV2NEVndFQUFBQUJsSjhBM2hZUllKNVlVcldSWldvbjJ2eldSWldvbjJ2eXUwN0RZWitTZlVsK1MyaStPV01DSkMzTmdlL1BmVWI3TVRIVjZxbzVOOStxUWRTU05CMlFCSFdCVzIxdFphQTdaTHZYdUJNT3VTcGNyS1gxZFBwOHZvS3UvR3ZIU040VURHZ2I3ZzVkOFE5aUh3SC9iR09qRjJrSzA3UGtSbEZBZUZUZnNPbWZmRytiVUtlSk9qYXZ3YklRZmVVZlNManR1cUpOb1JHMnpna2ZNZ3lhQzVTcUNzcitDTEJ3aTg4S2QwbThub2N6TnltbkpPZk5SdmEyTkUzNmdFQUFBQWJpenEvRE9XRDhMcDNGOVRjTmNuVDd5RElnNllZdUR5RElnNllZdURjbTJKc2ZPWUo1R2F4L2NWK0pVTGFqUVpkb25BZ0ZQS1NHRDdJTExUMGF4bmVwTlVsYkhpVVc0NTNwNytRQUZOWjZEeE1rVUNvVmRyTGNNUU5TWDBKZTFta3ZOTk5kbW5oQnJtMzdtUDdaSUVmSnUvSUttSUNFN3F0ZUV3cjZJUmV4cWUrS01lclFBK3pjU1FNVWdKaW5XU0tKanpiZEhjMTdwVVpDK09BaGZjeEN6RVJ3ZjhQMzkrSEtJdzZrcG5FMUJjYlZjQWN4c3RxV2Nra1RBemdOZWhtZ3lWSk9tZklqM1FVYjZ5R1dCeW9YKzB0UDVaLzFRODQ1QUl5cTVTdnpTRG1GRnFVOTJXYjdSRjZRZlBLbG81bWJsTk9sOHl1dmhVSFNVMDZRYWZPVlIycXIrTmZSM0V3RUFBQUJDbVc3QS9vRXYyaGFxUlJ4a1NXTEhjM2srcTBYbTZud3p6VktJbTZud3pvcE1UUEhwT2I1VURjRjVHZU45L0VRUTJjbklaMTF2YlZHdjZpMkNGandPa3NZZ0svM3ZZQUpJNUVxVFpnblFQbk9IOGlrUTUxK0xVbmk1aWRjRi9hbS9JcFFndDdqTXU3clA4UXM3d2RUamszaHVYM2ZIdzY3VklzWnljRzhtQnNDUzRhRDdzNWdLZWtudjQwTklNT2pmUld0TC9IbFNnM1F4UmptcjB2RkdvTExwb0ptWUNPZjhJOVdZbS8wc1hVWWVxUjdSWVRybW9aVVJYT2JKUFlGTWxGSkZ0Zysvbkx3amlFblN0cFFCd1lkd0ZYWStId1E1QXBWeUlCcGVrVHc1UWhzTFc5NWFuWUtXMjdLbjFEak5ZTGs1MCtKZDRYdHpDOE1XSHhqWU5keU4vTisxOEtwQkREMnVFTzkzSXl2bFZHUzROcHIzNFBzRytlaEsyNFFZMlQrQk5aSVZSNVdNTWthMUN3eE5vK1lCUTVtYmxOT1NkSnpTNmVudDJ3bzFEZ0lBQUFDRk10MkJ3dWQ2L2hudER1ZUkwU3dVdEpyUzFFeW8vNWJUVzNDTS9EcGQzaUcybEVuMUpma3UvYWszYVQzVVdmZTRvSDdkdFNkNGdESHRBRVgrdUV6MG5KaW96eFJFVXpVc05vK1pJakMxckt1L3hucEZ4YjRoTzQva2pBQlNDdWtpOGxCRm93ZXhzOGF6S1ByeDVJeTJKNWVrYmVTc01uVU9lenBlV0gxK0VTODZFSjJ6L21aSWRLc0E4YWUzZmlPVE9yTWM4VzJTajNMR0NzUk9FZTFWQUlxUTAydC85K1ZtMC9Ub25NSkZ6SGFMdEZKRVNjNWxpWDhqUXEydDNDUEt0NmpwWkJOc0RjVi9PMGVxWCtoSEVQd2hKdG1yMU8ycmJKWDlEVlFJSThUQ1o2U1NNakRPOVpDR3ljOWlhaHF5LzFmMktFcWprT2NaeDQvcGMvK2xJcjFTWFJrRndjOVVORmZWYmdmRC92bEFBRFh0NkZwWHNaNEc2ZUtvODZQeFp6SGRzYWRNQXRhRjkyZXJUYyt1Z0tiMVBRbmNQM2hMNGx3YXNCRUphdDVHd2JsQVcxT3JWdU1oZDZiNUZiNTdmUnBNeU0rMjJ2anNhODBBQUFBRUtNTldhbGhyMVRiU29oTm9EMzNTNnNpeXRSUHRmbXNpeXRSTS9oSXJscExkMVRIaEFxVEZJN24zTzgrSGx5R0o2R1oxZGpNTDRwZDA0eElxUkJvZk9YOTBRZG1rcFMrYWpYWWZ0L2ZsNy9OLzMrY2tGcnpPbllkY3A4Ri9FWnFOZHNkODRpVEVlUU55M3ptcjEyUWY0SEo1S0lvVGYyMG9sSkxQVkVnQnBrbXRIbTNzKy9EcUxFcTJRWVp5bzlOK1puQ3ZpckpxeXlvUTk4K0RDcGFHcTRIUlJxdTYva2tkdTdZNWx4ZUYyQlR5WGFzSy9PUmg0Ulg2NjNuTFB1eFEzT3h4aEpxVjNwek1zbkIzRzZjY1pxQ1pOczR2NDk0U0YzQTFja0N4aktTak40ZUtxcFlSRzQxSXViUEpaMUZnR2s3aDZzb2N3SlZWaXdUTWNuY0RaeTBHSWRNbHgrTHJaVG1RM2ZxWjRrSUNBWmxSRWFENFFjaXMzVkU1YW5vZmUxall6enN6NlBKZHJldW9YRzZhYWNNSGtadFN5U0FXd2J0cXVxRkZCNWR0OWlvbHlBalJDSXdKRC85a1pwNGV3UlR0TkIySmlVVEhpSVF5YXRoQUxTS0piVDlnSXlwcE9YZWdwTDBJRnp6cWVsS1RJaGdhR0U1ZVVuTWFBQUFHNHRFS2pLTUVqQ0pldkpvcElOcDEyOE1YQjVCa05KeTNMNnZGc1RZd1drdDNUSlJrN3cwZXhMUnhkTFd3NTYxYXRnNmZDMHRlT2FFeGQwRkZPbXphc3JYbDVoWGphbkZlZ1A1aFd5QXBST1lURWZGaTljcGhPVXhsdSs4ZGh5R1JyNUdkMkJPcW1yVk9ld0lqN3cxUzhxK0ZMRzJCK0Z1UTc2QjF0UnJZSHFCMDN0SDdWeWk3MlVIeGN3aU0yUFcwYUc3SjhtVVJiNHRTZEZBQk40WjhYN2kwYkZxRmp2WWV6UW9UQ1hGTnlacEJ5dHJubmh6OGZ6a3RCYlgvT2kxSGwzRng0SVJ2YUJ3Q3BQSmxwUDdlbm5Tem4vbDBNaXNvYm1TQXExd0pRRnJYeDByTzk3ZkNOc0xsZlZMU0w0UzRpZkYvNFdDRUlVVGZPRUcrM0JFUU43SzZhY0VxcmgvVjd3cW1QSnJsOW9lOUdmVlVwNGg1eDBtZnQzNG9xU2Q2dXhaWldONFA4SDRmWFlQRnNuQzVHeFNvWGRsTmxLcTh3Z2dlTjQzVExuMS9ITEtuWWNiYURZRlBLb0tONFdHMjd5cm9paVYzNFNFRVFkR2p6WkdlTUhtbytlS0xab2VncnhuNnRMb2FENUtIem9IT3p0dnVpd25veHptRENJbjZ2TUdnVDdXRUxOQXZ6TEk3MzlPQ0tuRmRZK09halhUSlUwMDNYMDBXWXFjbnI1NTBBQUNBZzlnL3ZXTXBqbVVPQ1Z2UnV5L1NYMXNqWGUwdFJNcVArVVROMkd3ME0rQ2VSbXNoRWtSMmNZQ1MrWlJuTmRYQWZiY2N5bExFQ1VyNW4weUQ2NVpxYjNTa1ZxQzdoRzVpTWpReGVBTnQxUFVLZGFZcnA2UVUxeEV4ODlrQW9hYlcvOUtFdlBEQmFtSnlPS0I3SkxqTGEwN3JpTmdVUzdITDdaTDkwU1NEeVB3ZlNqMkJCVHl2aS9wQzY0eEMvZ0tLRmp0a0U0WGlQeGdXN2VtcnR1OGJwL09kbGR4eVZVbWlMZEEyRm5qZGxPeEFzUXNZdWRwdHo5WFRrdmZ5WXdGdEZXS0hsNjBESFdra0JmdnU4V3ZkdU5wMVE0N2Zlc3FxM284S2RwWjArc0VtN25yWU85d0E4bElXK0dod1F5TnlhOXlpWmNYamEwRXMrZVFrNFpHUTMydFVUbmpYYVFLVEJ5QU5PSnVjTnJPQjg4MkRFQjhzYWFVeGw2Q1BhUVlCOC8vMnR6NGRFa1dVU3ZXeEJRT0VoT2trd00rTkltQ2k2aXVzYm5weVFBaE5OT0RmdHhuS0NUbjBnTEc3aG9icWU1OUZjVm91cnUvUkQ5QmkrNWtWaGk1bkF1Tkg1WlQ3TXRqLytwaGs5VEhDY3BxQXRXU1QzMFNtc1hkenJWTmxxR2JGb3RHbG1QS0hxWXVXL0FpSUNjekZOam9JRGdGSitCK3Q4S0JIWTZ0NFpHVnRCVUdBZ29BQ2dNdUFudStTQXNOaXpQcUhjNVhyaW04MEk5Nk81UGdzQnNxd3NTSlpvV0FBQWhUTFRyZHR0UXNORElEVXlwaGxqN1hJdmp1UVpEU2NoWW1VaVFUeU04b0VOdEZCbk01WmtMNURZY1BkendreFhiRndPbzVqVWhKQnc4UzZPWUs4NVU5SmoyYk8weUVKanQ1L1YvKzFKUFlUZTg1VXRVR0tmMnYzUndhMko1dFNCeTBWb21uOHdKS0hpK2RCRUhhSkptemZXTHZPajBwa3p1dldFZVdZMUtXRDhaTzM4Rm1xdndkbUtrQVFkTVNwQ1d6NGF5MExuTGxJV09yS0thdjdLSzRWelJrbUpybDU4RzNPVGpNSkJTUDdaK0h0Yk0vZmxRSThvVk9HcU9IZlJnWFNZSUJ6RWc2cFJ0L1F2RmRCU0x4U3FxRmNYV0piT1dGcXdzQ2cyV3hQUlVjT3RnKzArYzZyMGF3dFFMTkhCZytZaCtwM2RsLzByVEQwWDYyL0JCbm55TitPUXZvQnVHKzJ1NVEraG5MRzkzRnRzbysyTTltU0x1cXd4U2tySS9PSmJ5Yk82RkZqcjQrNVAyRTNFdlVoMGtlc0szVkJ3dVBvZ0dZVjllY3g3Vno3YXljN2pFMkhSQkxmZi9sMUlpbnlnTVB1U1dTNWh0TllYLzlnL3kzTUJsRU1MMGNuSktLbWtpR0xNNGdEYVIvcEpuelVPeDY4OGpxQk0yaE5oS2I1K3lVYjloRDQ4dnJOODFweXZJN2toN3o2TXI2S2dQb25EamJTNTBjTndGZDM4Q0RzTDFkNFZHMDhGUlpQN0xrWSt0VDkybEVKdXVENk5hM0hwZFB2SnRzODRWOFlzd3duRFVvbUltcWZkZWQ2K0V0dndtb0t3WGpaTVgrYVZvdWczK1VmcVdrUTdDR0RqclRabUFKR1NqM294d0lXUmQxUDY0MVJ5QU8zOFdHZkdWSmlIQ0huL3FCK3o4QUNBQWdZTnNuR1o5THM2YXltL2Q4NG5tME5UNmM2c1ljaCtKWlU5QjNOM2hqRldQd3R4WW14Z0VJRUd3YTJYTU9ibkVLVy83eEwyNWlFME9sS0p6MzZLeExHUUpMNFk4R0FTb1NlVmRBOUFjT0V5aXdiMHVRMVA2UldFSHdObU8xNjgyMko5eERKTVBkMWlBZlhCVElPYVJDUlA2U1plTnlaK3ZRSGk5dHZrNzk4aUowQWFOWDh4a2o2SGdiRFpEako5cWppT0N4dFQ0TE1uWnNMZHhHQW5pZThVSFY3N0JxY0FWMy9ZRU51ZVR2TXZMNDlMVnNLcDdsYjduUTVycEtFbWxtTGtEOWViYTNtZS82R3l1YVdlRWg3UmRkbkp4VWZLaGg3emZ1UjgvY2lPYW9iRmdTSG5HN2dtM3JWUnZ0ZzdDcmZYbXkzY1NQSWVNMVhuVDYrS0lVWEtBVnpYc1JYZWNRTERETDZDUnE1MTgzaU5YUDFTZkFxWHZiM3FMTHZPeFo4K1VOZVdYR0ExSUs4QjlqcG0zbzFWZXozbDBscXJaRzBuQThMbm9hMStYWEZxSVdQVU1RNlpxZmdPQ0JWZThYR3NZT2VkWllDWGxnYlkweTh4Yi9PaVRON25QaGNCMytaZUsyV3NYQVg2QjZwczZGZ3BmV3Z5b0dqaHV1NUo5NFNXTmRHYjZuVkdhRWxWR1JuVHhjTlJyRmJ6RitmV1ZOQU5KcE1UZFpBalN0MkJ0RmUxaVhsOVp5ekp3NThPSGR3eTFFMktNU0lCMmxoTVZZeGtOOWZ2bE5sTndrc3dpbDB4MFppMnN0NjY0STJPVmFXK1RJNnhUck85Sm5SajJudEVERm5FVG0xNE9vaUZkR2J3M29IRnI4VVJMNG5MdUxxVkVjYlFuYzhWcHlGK1dVYkpobTNWdmNHdGlURUxLQ2owbDZKek9BeFR2a0x5dUF6WWNxdkRDeERPTE1rS1I5cVpnMVowTnZITjUrY2NwOVpHN1FrNHROZ0ZCd0MxRFZTYTdTUFptMmpjb21KL2N3S2hzTEpiSitHMEtsbFU5d05QL2h1U1R4NmlvWkJIV2lVV0hGcUxtZWtQR2N5d0lUU2RIdDI3MVExclA1dFlKcWsyOWlvK1BQMWpGNW1taFRiZWJVKys3WkVrZkc3K1ZLUWtkZnNna05POHdJMm51V2VEenJ0b1VKTXo5ZVJDYUlyVCtmT3pGc3NDUUJDaUwvM2R2eTZLbUZwZld5NWdsZFIwN3F4NllBQVdWcW10bWllQUM4ZGJrbS95NGtNWFQrV0NlQysyUU1od2JXZmNWUUtucWxBQUlCdmhINjg3UW9RdjlPRXFkMmRzUDRxc0NHd3l3M2d4NGJVKzdpUG1id21lSTUzVCtiMUpsSjVZY0U4WmEwT2Y2bUFwWVREOE5NU1F5eldSVlNqNUU3cUJrWGhFNlR3NGNlZ3pnQnNJY0NzQ1RFcEp3K0szTjY3Qll6aENtL2ppa3EydS8rN01TTm05bmpVR1BYM2psYkdTeWlJTVlZZ2JWbmpxcEZiVW5oUXRPOTBGM0o3TjBHMzJHWXA4WkI4L01IdFY4bVp4cUhvQStaNWh0WUxVMkVLbVlqVU41UFJRamthVEVGZ2JDYjJ6S0laam1DVFZDb0NlUVFIY1htYXNqSmlWNUdPT2lIZWRVSEQzS3NUMjlxVXA0aVJYa3BpRmFnK0hVSWZqVUNOUVBTVkNGbUl3K0VjWmJvTTlwd2ttWjlsN1pucmtpZXoyMUFLQVZZUGU1NXk4QXc1b2UwcGxBRS9sODlyc2p4VFFiMEkwdytMSi85VDBtRklad3NDOE8wNzBFUWtERXRZZm5wcFNYTXlxQ3ppZGhzNlNLWWVYOTZUTVZEUE80YXY1ZmF0NGhUOWlQQ0M3K1A4cEpzT2pQVFJWcis1bFBPT0FPc1Q5WS9xTjloNTNtbndvanBKbXhTWEJGYTRCR1FMT0F1blJlZk9sSUM2czdmenk0MUJraG54bFNZaHlicGk2c214RnM4QUhlQmdldEZGM3JYR1QwQXJ1OTM3dzJwOTNFZk5YM1NlRnhVMzlJUTI0WmpWSDJEWUxwUUpaYkxzWnVpVUllUEVkTnpCZHFuYWhEUGRnc3FicmI5ZHJTMjZCZEtvTzQ4RGxzWTZQajAzUzdZTUpsdXltakFuUDVMcWppS3V2QmlnR2I0cDNBeUM5UWZ1L3d3bTRoRzNmV09XeVJpbU9xdHVZdmR6ekNRZnJsNWY4RkJia09mL0RScUpQTU85aW5nWGtqTUE2Q2hTVWFuck9LWDg4cVNUUEpXT1Z4QVBXUjhjVEMxOWViSGNZZjIxNHdvSm9OV3RDQUc3c0VrbWVlUUZsNHU0ZVVnVGp5NEtYL2RkSFc3OHg4SHRuR3FseGJwekZtcHd2SU4wM0wvblZaVlFWM2hnN2JqMmJGdDFIR09RK1ZndVBDZy9lN2c5UVVuZ3FST0hHLzd6dm90LzRJTys5TGZZQnVOV0syUXptUjVIWGdRblNwczJYeERvSCs4UlBTRC9OZXFydGtVTGFrTUQvU0x1bkNpc3pZZG5LQkptT0cxZnVJWFJJOGYrQWN1bUZwSEpPNVFnQXUwcmRJME0ycW5zRzc4dGlPaE9RNlVKWnJ4Vm0zVTFMNE1xNXdDNk5PT1hZc1h2OTVhMU1GaTAwaDgyVFhpdCtWNE1LNi9sbVZGUE5vRDdkUkcwU1RTOGE4RUIvbUdUbXA3bnRsYy9WQUNWSzFHSWY3WGsrTWl3elJyNnZNanFOaXFXalJHTE9OcENvNUFXbnBIdVplc3pqYmlsTjlKQVhEZ0luUGxlWXA5ZWR0dHpqWmVsS05DM2JvVzBPZk9mcmNaVE1OUXVwR3ZwcVF2Q0UrYWI3Vi8yWG1OeHI0MVBIaU5VS1kzeHBOVE1hSlQxUlBmQnhJZ05TMFA0NnhveHRIeThjKzdiUlBDZUg5aUNHU1pwNUFtZ0NSeFE0VmovSDFGT1R2c1Zxa0VSR3YzREhrVDR3QUFWQ0hGUXl5Rml3aEVZaVh1RzdpN2hmbVl6VmlpSDA1UmJZQ0ZYKzgrRktrZTF1YzIzS2o0NGZLZ1I5cTB1eWEvcEE3UEF4TmhLWWp5c0hKdWpDd0VER01JZktyUXFFUGYraFlaQWxYdG93ZnBDNXU5WitJYWNFbTVkN3I1RGd6VFVBZVhJUERyWGdESFhhRE5BMjVXaXVuOEdraDlhZHRYUnlDS3U1UEVFM3R5REhOVG9BbktPMElLczBqOHVCQ2l4V01rTDFCNGhVbFFDNWpxbUFnUW5oWmxwYjhMZWY2cTdJUlhqcXMxQTZyMEIvRmdmMHNCNHMyelhBbUtJQVBpSGQ3VUJoYzJ2cVFsSE9iVXhHYy92K3kybGl2TmpVR3NMYlBOMzVSRlRGNHdlMytwdU9WZXFWV2pxRWpzZHMyQVM0dUtEQ2VXdy9QZ0xiTHRzaVVCYjNnWlg1WlQzTjVUc2ZNc0RGOXpFOTdiV05yRHRhaUVQQ2p1dm5RMys4NFdVNGl4Q3RYaEc4YURoWmxyWFNMZENudVB4dkFhemZPeWkrRXFYRlQ0VmZvYzhzeWE1aFlsenhvMzdpZ1ZvMFR1NnpvN0Z2ZW9HV3FzZHJSSUM2R3VRbDBLT1BmbHg1V09TNFZpMCtjdGlhMHNvdFcrczhUOFFqZkJxeTh2ZmJWUXVucTd5T1NjR3NBTi91QXBvbzBxanROUS85QUI5U3UwNVFuSEZVdHM5SFZQSkFzYTNnWFZVL2hqZEUvMmZiUXYreXhmTEZxVXQ2L29VbXpHaDl4R2g5cjdKRG5NQ1M1TWhyMzJ1bDVjeHdXb3YyQUZvYjhzTWZlOXIyZURaL3pFb1lzb2xoTzRxSkY1dlR3KzNtZHY2M0dPQTFSSFhZeTVvdGlGWUFMbk53SmpMS3JSTXlObWkyNWhvbEhYdExDRkdBaExDcDhpZ0tlOUpDQnY5TkVJOGUvN1gxQlNxejJud0pmdzBuaGw4OElpc0hJaTcyL0J1Y3Ixd2tyd0YxcTFmTGFkeEd1VFFaVnpoUnBNVm1GNFIrZG1ETVFMQXoxWURPNUg0OGljWG5vREM1c3ZjWk1HTUE1elpWcUEzL3cvbDhSTUh6MHdzak5SWm5ZWE5wMXdNNW1RYWU1UnRIWlZqVzlKM2JQRy9ESHE2bUFCTklkcTYzS1l1anpDTmpRSE5YOFJ2enlGT3lZK3kwNVkzTWNiWDBHN1J5NzFmK2FqS0hEOUVKY2llSWZRMjhLQjVzUElTUUdubXgzMitlY01qaWFXQWxISG1COG5yQWdYK01RZ2FzZlZOME1pUng0eG13L3NUcDN3cXR4TzVEYnE3RUUyVGJBNFIyZS9Wa01RRTNKNnVpLzVaT0c3WnozamdUMFFjcmdtOUV6VHBHSEpTMnV0VVBhYzRiazR6eUplUlUvWDgzV2pUZTJRU3liUUpjVXQzblA4MStveE1pL3htaENlSTE2Uy9mNHBYclM2eUhtcGI2NE5icmtEcjQvRnBjVVpxOFpobXIxSm53RWFON1NyQ25pQnBQM0hpYm5kUjJDYS9keXJWc0plR0xqZTNabmtqQXFOM2EyS3FYa2gyMjFWWndDV1RRMlJaRTZ5RVdTVG04dFNuMmRIOWJzaHlvdXhqNlNzOEhwaU1GM1ZDb0VDVlRQRm9IUEo2NHhybkltZGFmT3F0Wm5yYkVuSWRDRVBoTnpWN21YNkNGUSt6QmZhYnFUSFAvUnFqRlFndHB1ZGhxVzg1NHhZSk1DZWtOdkt4TU04YTZCSFo0YTB6aCtONC9qellZUUtYWDNFa1pVTWxZd01Ic1B5MjNuZTc1dnBpRHZBL0xjL29hQVBOeXFtMG44WU1XYlQrVXV1eUg5SjZjS3hOZmZNbjcybVY5RWtYYmxBVkdEcHZQUWZJNTFTVzRsS2tZQ1dpL0tuYUovRGVLR1JpQW5WVVFXZzExOW84aE9YSFZNSXI3clArVGRyWnQxTTlRaGpPMDVNeWhHRXN5VTFldnVyWEpLajNGNEkzczlkWldLYUovamFqaldsbGdjNlgxZVUyK0U2OW5nOFROTThVTFJIUTd1eHNUTTFhN0ZYd3V6RnVzT04zWjcxSlVDSXFBQXZIdEpEYWNYNGFhNXFNVGthWGVDZFYvK24xTHkvSnpBK3RCaEsxMTROalpzd3RTeEZadUsyYXlsWUdUNzY1blVESmErQ3lPSkJSSzdQUUVHSFhOSzNPYW80cEVleHVtQXNwRTlCRkpqN2RQZitaOTVVYTdyMDFQUjNiRjdseHRnTDVpQnFxMWpjQkw5bTE2czhRTGxNL0FwSVVIU1A4elNua1ArN2tVR3VHaHNuTk4vYlFDZkhCSGg2dVoxMzhCTkZlUFRkTTJpRG9OZENLbWJEeWNVa0RGV3dXT1BHK0thQTJZOEVTYjRxNk83UE9hYjNtUkZLdXpwTUxYc2R0Y1MwN0JuNTkzNEx1RFRmR0c4eXhKMWpwNFlYRHVPZXA5OWVkSkRIKzM3U2RhSVVxajJIU294dUJXd2UvdGFFOGpwOUUvTE9YS1FFRWlHR3Vrc1J3YXdzUjN3WS9lTFRMVmk2cG5TdTZOTzh6dys3VXppYlRveWVIcXNRZ0UyWDJOL0tTTnlwbGI2MnFBRFBrWG5hMWFvTmVXeWk3K2hSb0lJUFRIQjM5T3F5Z1lNVXFHcS9ObUxmR2x0bi9pTnk4UWpJK05kWlZRWk5DbXEwUnZnTktqNkhOa1MrYTYxa09oUU1ZZ0hGaVp6TDRyWUhEQm1SZlBnRUZHSEpuWm1TZjZaYi9wcmpPczFuOHJCQS9oNlJ1dExYdi9FMUpPdG9kWHZlbkxBK095MVJtK3RVelZWdERMeC9JZnl6NGJBNlhDdVRhKzJFRHVQSUhNbDZsazdZVExSVnlpRy9sQUk3Yjd3R2t0VlJVazhPSXJ3MUhXK2UwbmNpbzZMZ3B6aStydXRtaWRwRk5vU0VwNWd6SWhlcmJIcTdrb0k5UVpUbnVWMWdiRFo5WVBKYzJwRDVVaXdlejVNdUhaUmpNbG5qYThSZktlUUwrTUJMaFpKa3N0K3JvWlkxTXp0K2JsNkp4dm1BSTlkSHk2ZWVKZFZyZWxMS2d0RGpaVkZBVXlkZXBQSnZKZ2RqUGpkdE9RR3FkVzcybWVmWDJibDdxK0FvclppR3M5UXh6YmM4eTE3d08rRXBpS1RNRSs1bGdDS21JS1ZJYVB5a0JKMjBZUzkrUzN6T3hFN2lmMk5Fb1dIeDVhdEJZcTRYeU13MVVmUkV2MVNVRWkvWGRIbXhUUVVVV3BJOFEvK09jREQxRFQvdFZCVGhVOU1NcHRseVFZV2IzcnBHcGlrUGJ4WDk2QkRla2x0amJkL09iMnE1cEZiSFVwL3UvdFBTeWZmSURxLzJEUnVMVVI5Q2cvWjhMRG5iL0RHQzNTa0prUGNId1g5Ty9LbExkZ3JqRExHeWVjYVpIZjVwU0ZoR2grdzYrK3Ivd2tKdnIxek5xdlVTM0p2NVU1eExBbVFSR05ZYXVyNWtVNmFNY040YU5uZytWTU5RQVdBdGNnZ2dVcWVsOEs2L1dIcTh3ajViZ1ZTdlYwR0dJdUdjOEQxYy9ORjRmSkk1WWpuVm1LTDNtUGIvYlVVS1QyYy9qdTVCQ0VPZXhDZnY1aXVsYXJZWGxuc3pCL09WSkxIazB5cHlBRDRJK1BBNVRwSzJvMWRkU3ZDNGFHek9DNG9TTUt2Rksxc01QaWtuWWZYMEVxK3VpM1ZpOTRSdXl3bXRSdnloOXBGWHRzRC9lUTRpbnEvWittK3NldGdrRC9DN0NMSjhEclQwMTA3Q2xnbjF6MXp1N25sK0dKTzhkMFp6R1hoMU9oMkNHc0VBRGVpemkrR0Nmb3RTRUV3cEJ6UDJWbGhPMTdjdUgxWHlVb1JjbGlGcFN6Z2hrU3RTMEVFQ1VyNndoSjVsdHcwdEFPNlV0MmpPRDBlUXErdmcvaWZjaDRsOXVORzZLTTMzeTZhWWZIQWF3L25BamtJdWNxR0JxTWRNVS9TQk9FL2NTOFNQYkFnQjBTTlY4Q3kyeGczNEJzSlo2eEFscHQvS3VjZS90bkl2TGk0YkttSGE3STg3TGZtWXdOOFlUNC9Fbm9PUjlCNGttZHUycUN0Uzh0YXM4S1hjRHdNaE5GNU9LMnFRM3k1cWM0UkkrV3NJaE5YZEw0cUFIRkhpYnc0RjdXS3JUMnhJYnQ0UG9GTXJEZmFoRGF6RmNqbjAxZWZMODdER1dIS3JBQWRROENRZXpBMFgxK3pRbURIdFRqbVZ0RDdxNUpXVG9rNis1SWdtTUtqL2pEeWltYkZWWkdrUEJQWk1zNXBLc2w5ZlpFR2haV1dWK3hPMkEvSS96NGNBbnlEdmxiQ0NGeFRUVE9WYTVKTHk3d282ZnUrWVdZOWgzbldGUDJjc3YveUtpb1BPOUJ0YmtNNStGa1AvMXFiUTg2TnpLcjhKbzVOYXBrdzhrcEpiMExKdkVadGhlMTB6ZFNEZnF2K2sydWptM1U3ajFrYktHNG5XZjRVTUVvbzRrSDU1Y25scnZoOUVrR2tTbEtDS0xTNkEvNDcyUC9CZFRTclR1eGxvVVI0ZHk3YjlUUGRJMmhKdkQ0aTdXbG5xd2pPSzVNaUFKRWQySmZEYUk1bStkVElkTm0zN1NUQmhFNjlYUE9hdU94RmFmSGdDeHo5UlZqYlRPSHRPaEZRdm92dGlDN0l3Tk1QZVFna3JaeVllNnZOckp1NG9JbWFTdEUwcFBiV25MZ2ErWGhuV0xDa3VTTmRuOWFZZ3R6UmlqS0JlZzNLZUE2QlZyZ0xTdUhVNnRDSVF0VGVWMG1qaEgvMDdNcUVxWFZJcWNPRm41V1ozYmJhRXZyZWttVllCZ0JKYTFEQkF3TUNWVlhrVXNiMVp3N2tsSTFtcXBySTlsdVhnNFI0cGwzcTcyeTEyeDI3dG8xRE5ZUHhTTkNOUnJxZHVYc1lGUFV4SkIzZ2t1aENJTWxBOGlXVitmZUs4TXptV202dDFLcVhRR05qbFErdGhEOU9JclgrV3JUbUJVUm4zN1Y2cU9ONGQxeDlOcHJGeVVHeTdXeVhqYnNZQVhkTzNPOVRUd0RlYnRJME51cVZwaEloWWVtck5LMnRGdkFJQTltSExKclU4R1h3LzZ6Kzlmd0phaWdLN0wrWDRwL1RKaVN4VnR1NXF2K3Y5WGkvRG1qZm5tWVBiSWt1YzNXVGUxU0g4R05TY2p0TjJrWlU3NVRLOE9ZZGhqRCt0RzVYc2FHSTRRSndhOGlmSnNERHBHblNIMFpqUU9ldGplNjNYQWxUeHl6elF4UnZVdGJONklkd3dnQUxQWGxDQkdwSXY1bml6VXlwOEUrWm5aWWZpdDRJbXVZeU1zaGJobHlvQUNRSllsV3BhWVFOQU5CTzhtK3F0RUNiaG1rV1hpQ1g4M051Rkgxd0FMNldzNFR6M2FGd2Q0THVDWGFFRWNlUklXTXNjUVo4czF4RGFSdkVCTGpTQkEyb2w2WWZoclMrZjVvQlQ4SkV1QmxSSk9TQXhveW9nRU9BVmg4ZUUxb2hTUHVQOVFsOWZCM3J3RHV5K2RyM3BpYmlVbEszZjZzOFdPM0tINFMyUGl2eEZuN3ZpbnBHeGJDSUtVRGxTbm1oYnQ5RFNHRUN1NU52NHR0ZGMzUTBWTlY0RjVCT1lNK0J1TWpZOXBVclFOZktyTkhnQjBuTFQxOHYzb1lnUjNpVXlZdGo2allReERVeEZPTUdaS2JzNjh3UklMdEpVaGJtOHFKcTAvWGVzcm8rbDNrMUlHTSswV1FJYVJNZDZmMHpZOFlLVmwrVDdiUlB6WUdBcC91OXkxbHJzUFkrM2FGd1dvWXB5UFhESFA1YzRnU0R1Q20xdGxNZzc3ZEFXdXFsWWlDMlpBMVdsQzdxU3A0bzlsaDZld1l4cW01bDhNTXRRdlBJT3orTmxZei9vTWo0bVN0dnVSNmZLU0huL0V2NE5xM0NvZ0RNb1F2RzI2V1BVR2F3VlpRa1duZUZtdHpJQTZ0T2JTbGxlQUFRUEZQTU1nblA0M1IrQzc5cm5YZGlCZmhyaTBPQmg5dDBadmtDVWYrakRVUHVBanZMVmo3bjR6d09GcnhrT0loQm1iWHphcmNObE50dnVoODBoNVFzQ1AzRGtqMFJCdXJ4REY4REZKVEp6ZmF6NFBya0hBbzRHcTF1VnMwdTUxZlk3UHhZeWZFRWlLVFBoWEM2YmxXUjlFWTNCbzBCOS9zRWgwb0RodktETEVWWU1XT0YzTVV0UlUyNmsrZVJ1ZDlxZ3ZFQ0dFQ2VveFBmSTh2TDVuZ09qd1VFdWEvZXByNDZ3b2Y5WmlIM01hZnBQdUw0ZmdBOGlDS01UcTRoRHdBUm91cS9haDdUQ2JOanZsYVk5OU8xRFl2eFBHNExHRUFxejhvTXpmdWJHRDNUOEtOb2V0OUxUVjBnM2ZxQ2d1LzNYR1lndmNnS3o5djFDVEY0QkJrK0JGd0xTRCtWekpnQU5zcWZCUG1aNVNSZnpQRm1wL1dxOCtaQ3QzUDNkOEZENkdVQVAvTlQ4QVhrQUF5emdnZTMrYjZSOU1jUC8xdGpDNUxZUG1UT3FHMVNNNERxQmo3b0RFa1VyVFVodThDRG9pWEN1TUZpRTZnS2d2WU43VnR0dXFQQjVRS1FjRk5XWHpVL3dJYzlzU01LWnpBL1p3eEIzeEdUbGV4VEhCbHRJRW9pQ1pidVp4TEFwVDFqNHo3TzVNYXRSUWlEeWRLbWZBWWtkd2VQQTlsdDlmcmtaNTFJdmw4aWtHR3llaGl0dUR4eWdJRmN2Q3RhYXd3WUpkNEgwTWdkN0hRRE4wMjRRaWRuQ3VweXNubHA3RTV3ZHBFQ25iK0lDYnpNNVJ3WEs4a2FSOUd1WW90eHdUZEtEcXBaUCsyNzFad3d1cFhXVEU0QmgxWWZISFByNmxIWklCVDFIVWNqK1N2SDlLaUhReVVOWkZTSkk3Q1lQeWs1d0kvZG92cEtGTS93MXJjWmc1dDlSTWdxbWxaVGREekxwZUdDVlBOZGJUc1ltVlFwQ2kyenVjQlEvYmRkNVg4K0pSNHZUYkd5bjRqUlBYT0ZEN29SQTE5VGlYMVV2VEdCUmRTbnZwbzU2Z1pqeGZFY0llRFkzRHQyanEwVFhHdVN2cVdXVDg0VlRkMnNadERNb2Rlc3dKYjhvTUZ5RURFTGR0NmFaRHgrZ1graHFlOWd3RTI1R00zcmE2T2IveXFDdERhZEE4ZkNKbGN6VTN6TEJFbXBUL2xUb3J5Y1pQYTFSbGRPellXRnByendidlI5VTBMaVdTT1Q4TkVDZDlONlRqc2NjRm1QbjRWOU5tNkNGdUVBcGI3UXRscjFoeG9ta3F4ZTRsS3hYMVhwTkNEeHFaSjJOa2ZlaXJGU0x6NC96WWNsSmQzOVJtTDU3ekNlNjU5RkI4Q1lRWmt4bkZoK3diSXRiaW5LZ2dsdGEvWFRyblIvVHBzV1d4Y09WalJWV0FXS3p2REovTDVER3FYRHJOdXdMeGtveFdTcTNpTzFkSWlwaE5uRXNFMXI5eThIRW5kWmJpKzQrUTJnQmZBYisvbTZRejYydUQzU0xKWW0vbFZ2NlJIaUlpOFAzWDdQaXRwZDBQT3JLbmJjclVLdWdoaWlKc3podVRZK0NzV0FuUTZaTk5DaFNSd1ZIeHVSTWVkYTRhdUpOaGRNWGN3dTc1VkMxSGx3TXNjMzFCQ1gyb1EyeFp0ckZ0bkRqMnlxZC9oTjRqdEtYck1BQWtHUlBFdWFXYmcwSUp6VWZ0OHpjUm5HU2pjaURRMnFSbW51UHdMeE4zVm5rZ0FSQnVjUDBMK3RWMFUzdWE4K0dzNkZCNk9uRVFSSkZQeVk4b1lpMVhIU25BbDZJdVcrM2N5TUxIWHREVW0rWENEU3F0cXgxQ29zZnpSbzlYa3pxb1JCVXc1MVd1STc4TzNSQXdCVm1oR2VLTW9sTTRrUVBPSDVsVXE0dGs5bmhWaFhwMmhrTEoxMEtvTEhUb3Z2QmZPeVg1eGxvRkFmNG12UWdiaVJzT1gxbVVwSFM2MGhQSGZMQy9xNTlwSFArTUFoWnh2R0NVZDFGMzVyTG9RVnZhcjFWMk9sNlcvVC9CLy8xaVYwZ2U0c0tpQlBrUmtUeExtd0JNM2tsMG05OWhxeTJ2SDZvVm5rL0dUUkJpaDNLRmVkR0loYkVkVmdtcGNFK3ljZVpIb2llL3dsS3dRWDQvK2lMODFhbWhRYk9ZL2s4d2pML3FCalNJeTd0c1F0ODNXVEhaTCt2NFRYZlFkZG5xZG9lS0d3WUNVd3pXRUFTUTdRTzlzZ3hVdlFqdmdobkw2T291S0g0UVRVYmlCeTJlOHF2Y2N0emFpclkvTS9EQ0Fmdmp3MDJRTGpFb2lhbGRKQ0JIVUpIaFZSdnkvWEo1aE91M2MxeXczVEpWWnlXRUtGbGlCdW5pSnJlR0NBMjcxRmtCS3o2cXFoVitRUmlvMmR5czZYZzRyY0ZuQkhRdzk1Y3JONEZFQlAyNXp1R0dlSkx5MnpzVmV0RVhqaGRBeEdzc0VRUmFRcDRaK1VyV25ycU9zd29YN2VIUml1TFAvT0tMc2pad0FqSEZ0bjluT1Y5VkYxZXAzL2xaSmNZZncyVEl5bHpUWjUwOHUyUVhkU05oRUNpM1Q2dUZGZ3hPdVN0V3liVER3emhjRzNheHZvYnpQbkp4L3BCT1psbGVoeXRTV2JCNC81TytvazFBY2R4NEZQTUNJNXpVa2NPcHhTeUFOZ0l4QUhQYllRWUFBcXI0cTNVRWVCSCtzSWdyYUt0OFYrcFllZDZPVGxhRWFRTjlzVUFBQUFBd3VyQjhHU0JTOHVHRXpOTmtBWFFzWVJCNFRyNWxodStVa1c1TFV4eXZySGlwNlZsckk0bVJTVC9zaFMyWXA3Yk9mZ2hLamdiMys2NEpmY2YzOWI1eGdiRzk0bGJ0WW1BNnl4bS9adGI3dXRXUzdrVE1VTzRya3pLdlZXeTRNb3B6WHlTS0E3U0l1ZE9DM0JDeTJFUW05SzA5b3ExZnpyMlZzUXY4RFAwMGpVVjh5dS82bTZRQk1YQlNWTXpBM2RnU0NFTmhieWJhMUpUZjd3aE9tRTh5QzV4VHo1dHorYVRmamh4ZHJzUnlJRzcvaWdXL3BmOXdTazBRaTRYemJsWGltVC92a2ZicjVxLzBiTHlzcnVmNUx0SUt2TzY1UDA3SmMzK0ZyNnNYOTRTK0tsTG1QU21rdVdXNDFyTWFLWHZOMUZGVGE5SFpoT3ZQcmVIaGJsT3UwdUR1TlpwTlBNM2dIS3lodW80RGZrRy9kVUJEdURaM1pEajlLd3F6M25sYlIwYXllT0xLMjBDUXNFdWsxSmF4MmRLVW5aSEptV3U2UGNBUW91WmQ4UEVWY3JmbmhjeUhVRkZ0YitZcUl0OHpKZGVlVW9nTGYxZnBId0lsR1ZLVytHZnA0R21janFGRmRtcUI4azJnVTgzOTB5aWVlbjcvUXpkMmIzMFFvRUo3TGxacFFaN1Vxdk5BeCs1T092ZXUvaGxxei9SL1Y0c2RybmJvUWsxb1o2RU1BTHZqTFVhUEVieG1ZVGdRcnJiSjc2ZXhPYlRvdHp0blJ2RGJQbHNYTUJBMlp5aEo3L0E5aU1rdTg3RkFJdVhGWG5kZkVRT2hMQnFnSzBPSE91K21sYXJ4bnd5aGtTYVlZUVBMUk9nSGRONWl2Ujl4VDR0MlAxS2Fmdm9ZeTl3SVpidXZBSUV2SXFrSWh6d0ZwQUFBQTkyM0U1UCtzaENxdEQrb0h1VCtXUVk4cHNsODd2MFl5VE9VbDNJOGk0SkY1eGdWSlVRdHFmcFg1c3ZIYmxiakxGSGt1a0lCc1lRaDlHazR3TDV4d0NoZ2xGU0pmVEFrK2IrNHJRRGNyOW0vM01IL3NJb0dXMjJEdTVLcENPNkhJcGh1bkFDc2lUNUhWakMyY3RoQmdqR083YmRDRFBzVjEyelFqczZ2TWRtZzJCbVAvR0MxWUJ6eit0Sk1JaUlvTGU3RGZ6b1NIdGovNzRkSjhhWVVjMFJ4TC9pWGVFTzNrcEtibFNENzkyZ2ZxVFpWWHpTMFNZbFFCUmptVVBaT2hMYjBKV0UzSWIvZmxRQWtJN1VRdlJibmJvSEU1bWdUSlFvaCtXV3czRU1HZzdMdkNCM0g3ZzI0RUR1Y1QwWmdoQkpKQjlkMmxucWMrN2JaZ2dUelJTREs5U2Q1QWRZaE1KY2YxaDkrTGM4Nk5qQUlBc29ObEJrUmpmbURISVRnSjgrc3dwVjkvbXpFU1c4azU5Q09MMUFKMG81U3RhallVYzQxMHNFdkh0K1UybFFvL2FGNWxYZStLMFRqT2pRNXF1Wk8vZCs2dE9JVEwxN1VpSlBhT2FLM1ljWktoWUF5bW1mU0lXbmpTMk9qQVRZR3ZYZVJ3Rk13UHdaNnpvYTU1MzEzeHpxdnBBSTBtaTh6UFJkY1NUamhGMThBZGh5VllRZDBFRTFMZ2dnU1RacnBDOVZDM1F1TmJxTE1zV0x5MlhLenErUktxZm1odkFUejdHQXpRZWxOdFZNVmpqTVN5YXhTakhwd0dBemFtZzhzWjRJYXg3UlNBYXM2aDBDZXZEMGk1d1kyMFowMHhMNVpISW1RUnE2eUF5Z0lEdGZuTmNGM05RZHNNRFJHZGVWV05ZRW0vS0NkNDNIVlZoYUhFZ2xiKzhOYlV4cWVZSFAwWUZSYkpOY2hEeWFHNjh2YzJRS2E0ZTg4WkpWaGFIOUdJQnhKdDFFcllieEloaE9LZkczaVJEQ2NWSWNiMmc2SHJuanhYbXhUYkNTZFhveXp0M0FBQUFISDhHVmJTUEFNZlQwdUdaVlZCVEl2WElFWlFtekVhSURiS1NhU0RodWJneEdQRi8wM2V3UEsxcmNnUnZkSlFkUXN4OEhIekFCTXNDNkE5Q3FYQm9Ea0J0aENTbzRTL3FtbkIwb2xuZUZsS2NvMDZZSVpUd3Z0QXRzRk1MS2RkK2IwdGkxRkxyY1k2M2UrU25tZFhqakRDTHM5aGtZZzJQNXYrWi9pdGxHbjF2SytPTmNTbnZJYlRneGFxVzFpTmZtcjQ5bmxPeThnTW9RVktDKzFXOGZZb1UrT0h4R2F1VXlZL0tFK3Y4QXNnaGdtSUdkOHNvOVpzOGVaOXlVNExXZ0xKNlptUXN0dUkrbUFQcjlRVUNoVnA5SnRqNnA5YWdmdzByZnJtTld2VjVvUnh2ZlF4cDBpcDJ0bHhYWGlhY3Nsa0xtSEtyaXZ4bk5NQUFDOEtPQ0JBL1VBTm9oTkVobW5JNXV4RkttcVhIdldRNUVJbWNNaEFSLy9LMU1OTWU0b1Y1QW02SlUzbU95R0FMVWdFdFVINCs3cjBqNHRJS203clRudmNYNCtNRG1yUVZmT2NnQ3dwZ0MyS1cwSTROWlRKMUs5Z3IrWjZ5RkpNdEhDWHc1bk5ZblkxMk1kRTlidWlvWkY3cjljT3ozTVJRUStTeEh4ZjhIWWpSUXVGTll0L21pU2RSK20wSnB6ajU3N3hhdXFtZmYxQiswb3dDbkR4dkMvdlJ1T05ISGdTdEZTTkJXd1JWOTB1TnF4dklXOFozQ1NMVXIxMXdMYUpJY3RXWHljckJ6NEVNOXlhekUrWlpxSFB0bW4zemJOUHVPR2t3cTExSE5OUXN1QUFBQUJxM1BYb1hkdnRRYVpoV3pJTnByOUNwS0VhNVVhbjBSVmwzeGJhMDIwZkFubjQvRzBNUkMwNkxYVzYwUWpVSG5vZHNtajRLb0xxdnB5S2tJUTVMZzBmQUVlY0RaMWZkK2pZOS9JNlIwa3hpZHNkQjdFd1lQREZYdkxaeGpzSmRlVDZVQklFWEZ0YmtwQlU5cFIyMFUxRDBnTlhmMG94SnluWktJNGNrVUpaNk5Pelh0Tm1YWnR1NlNSSDNtaEY2WWViY1ptSnlaZTZGaFJZeFFJZEVMRFZKNFNoY2pWYlY5QU5GQkhnUi90STZLQ1BBai9qWUh5TlB2NGV0c2lhWSswSzZsRUk1NHZqMkFBQUFiYXBFT2ZzMzdsU1RQYXcxY0VxcWdwa1h6U1BSSmR2ejdVaTRVZFZZeVdXUWJralVIdGRoWFRsRDlTYkhXWGR6VXprS1FXbFFrN1ZVK3BET3FKbVcwNGNsL2NxekYvNjBYdHl2Z3ZzVlg4UDNFa0Q3K3JmY0dTRkRqYWQ3YUJnZkE4TVViU0ZIVytFUWJTOGg5ZDBWZDd3YmNDUEpkWHlsODloVVhSQTZvZm5jL1ExYUg0UVM2VmdOZFdZenFhNUFkU2szVmVSVVB0SHZnTEVaS1pwSXAycWNoQUZ6ZnBqVnEyZ2JsbktETE5HVnRsakZLL3c3RWVEYXBDSHZsNFVBQUFBQUJzSHIwbDBiSWpndlFOQXVvV3ZxZzJuZU84Y1R4L1VDMnV1YXYvV29uNTZua3Q0UjZ2SkhtZG5rZ3Yxck5BdUdzMXh1QWJiREx1Q0h5Tk82WG01a1JSREFKeVYyeUtMR2l2T0ZzSmpJdUF1UzU2MGZlYktrZGV4eDFrOEZJYU9PY1djZnF5eUxpQy9jK1N3TkVxbEVoMmpBcWk3V1Z0UWNIZExTd3RQSWM3T0liNjZ1UjhDOEFEWVFBd3ZkSnlCWTZreXYvaFptbHlPZlRWNTh2eG52ZjZ3citFQUFBQUFCVDBQd0FOaDRoV1J1Y2lhQVFWNWVyam1lR0FOTnBSU3VYVHZIZU41SlgvR0ErVHlkNXVZUFVXdk45ejJBNnlFZjE4TnlVS1cwMi9HOTUxeHJpdjNQZnJIdG1hYStRb0l5WnFYR3ZHL0pjUkwxcnptRE1FMy9ROGVGYmQreDZKQlppTUR1cU5RZ21nR3MyVUtnZ0Nza2V0Q0JQQWJRYXQ3aUtZaFRVZHhacWorY0tvbENobGhpLzJRc2N1RjRBQUFBQUNZRW1FOENrbFRGSnlvZ1oxZnVsSHR6c2RsVGx2NllGeEVKb2tNdkVyd3pFbDZDSE5weStQZU12cDhhNk10TW5OZlpvNmRlcUwwZ1A0UXZTZVNTR0VpMVB1LzcrMTBuMzJ1Y0Q0WUtGeCs1VXJFYUFDZzRlWWs3UEV6MWhSK2lkY3RMYlR3S29WVDd2alRlL2duTU9MTG9BQUFBQUdFQy9td2VUV2JNL3VtQUVrNXpBaVZqV2VwZWRqWDFDTVlaa0wyTldwUVhaOGUyVHd3dDIycHoyMzRZQUo4S29uZEp5Qlk2a3l2L2habFhJZXp0M29YTWtyRDZZN0FBQUFBSDhzL3dHYlpNdXFraUJOeWZwRFhGSGo3OU4yL0gxdG4zeXFaMEcvTG8vd0dCaEk5RGJnWng2MHI5YW1YMEw3V3dsaUxURUVwZEE0STdldVVMVzJsK0owQjc0bDVQRUJyZ0M1bEYwOTlYMk5EdklUWFJjeEtQWUUxR25HUHBwdVptaVlBUDMvZ1BvSE9VWWovRWUybnA5Qnc4alpDcERTZDNyUWkyQmk1M1hla25BakNCa3BZdmdmTFUvMVpRL3NJQ0poZG03bm5FTk8yYWFoazFOL213OG5sRkdndlgxMmo3Q0lXWVhmQjROOWpLRE1tTFdSVW9uQjVINUwxN1Z5VUp5ZWlKdjQvK3VXTUlQLzJRSjJjZFVTWVM0b3hhMWNjNUhNZk1EWGxoS1M1Z0JGQjJKdEl3djk2MFFwazZGWlg1T2FJMjBsM1NuNVppVkgwY2ZpUUhFQTV3SXJXQldyUVY0RGE2amU1Uy9qT05ENkFieDZ4cFR6dkl1ZjNuUUI1VkpsQ0ZDWVhmVjhLV2dOWVBaMkxwanRZUE14TzBKVlJZcnZEL052YjYvRVpPRHA4am4rNjhROEFBT0ZEakVqeEhnQlFCTnF5VGxJd3ZmcEc1QkhOdVF3aEhrTnVlYW5VNHZQNlBnNEd6NU5kR2ZERWdINCtQaW5pMnNpMkp4MEFlS1puUFBGa05valZPeCtuVGlNR1A1TmV3U3ZJRUhZVE1xT2RLL1pJWDZGdDNza1JZMHRzcTBNemlmREFlblQybVhFdWxkd3l0dTR0TU1paHB4QTVFV1ZUVkM3MHVFOTMzelR4OUl5U1N2eHJwOE9YeVJaTW1tSGQ1eGNYR3FHWTVMSTA1TTM2OUJKczRsK09RaGwwM29nRDZBalphaTR5RGFIdXVoL1o1Tk82M20yRG1RTndWT3J3TTY1TXhTZDB3R2xpOXhEOGZzdWJDYTZMMmdYSndmS2lmRmpHYXNnQzdyWmViSVB4YXFUQU5weGpoT2NJNkgwWHRJWWNtZGVvcnBOM1c3MzV2LzVEek5xaTRqUzB6ZEVUd0RWSktzV0VYMm5VWXhzTk5kL2NwNHk3WFVsYmVlVzdSZmJ2eWtvM1N2bGhNTHcxbzROeTJiSzh4akFKRjZtSXlRTjY2NldhUVVRbnptQ29WMlFITkRSUW41WHo5Ti9mUlVFc1MrdjVtbi9BNkNyeGdhMzBQS20xMVd6RUpGVDZxenRYd093WlN2aSsyZlF5R1pzYXNOSlRnNUloUzNJMjd4YlN3NjZYS2pyQUt4emJBbEUybFlmdnpnRzlqVGJKV1NHQ21jeGFJSm8zS2FWMVc0dFlXOSs3L0dwNENiWnkvMGFsaENjMTNlOVp2blJPZ1B5UllkN2Fja2J3bG5SV3BOVjFIa3ZsWitJVmlqbEZGdmNDY0ZzQytOVnBqZEEzaGpVUXU4TmxIOGlzQ0NYbjZNS21VWmdPQjdDVU1mOUt6blpiUUxWc1h6S2Q0T0RLbmk2MkpkRjJnd1lYY0FiaXhDdEViTWNOWStmZTZZckFZc3Jjb0dCSUg1NHQrZjV1cFJGaUZZWWZyTENqVmlkbFFJaFZ0cHRyN2docDN6L3lGRm1yTFlZVk1JQUFhUkdHMSsrNkpNaFYzb0NzVk95ZmNiZm9xNERZaG0ycjRGUFFnMUROcFFqRmk0aGpDaFNKb0tSZ3ZTbEYyQmhtYksyK3orVHZWN0xXcE1HQUdQeTlkTHpXMm9USFBqVkN6emJmcUxoZDIzRGM5enpRRjFzL2dDMzNhSDRCTTJlOEVJRm9VdlZCczVjTUtsNmhDd0I1alRJUlZYZnJtRktROXV6WUJ6QndtL2lNS1JrN2taS1VsWnphMjd6T0ZTRkZ1emRiWVh4MUo2ZTlQTDZLemhuZHRaRk80eVdqRitPOUtuR3NXWG41WFNydDdXTmw1bEtKRnVFbFpUYTYzc01QNGZpaTNzT3RIRVFmVWFFTEdxaUlCcDRTbDFjekNJNU91RG1uNDhaQnF0dTFpbWJaNFZ0ZlRtZVlCUC9IMkQ3b3pQVzVpQlc4S3FOWHVvNmJ3VGRZb3Jwc01qNkVHM2NJaXM1NFhVaG52eUprbEVnelVNa0ZOcFJoZHI3ZEh0WGFhOFJXVm1sd0JjaitUSG5lWEl5TDJsbFlab0FtSEQyYjQyN0c3Qm1uakZsVExObDA4WlcvVDgvcyt6MTJqdCtMVEFPOVNxUGIvMndFeDVUaWFCNDVxZlVvYy8ydUtoc2dRVTlmYnE5UXA0OHZCQTdOSDJQMXd3UXlxUXQxTUJkRmE3cVhWeXc5dmM3cFZqUWxOZkJMckY1R2E1aFArKzBWWGJValk2M0w2TFRKYysyMFAwKy9wNXczK0tQaW0zM3A1VHhnWGs0MXJSMmN5T1JITXdqZkFIWU5ndmw3OG9WVEtHUXZOSEsvSmtyVHB0SEZ6bjZ2cTJUd3QxRDBkWitRc2lVLzBIRDZIdVUxNW1LZ001bFJGdHFSRHZFWDNRWlplaEZuL0FSMWhxTVVKRWc5ZjRiUGJ1R0FaMjdLS1F0UjdZMDhXZUdzeVFnU0ZXTFAwZjFueXJVK2I1NmhNQ0J2L0RYdHM4a29CVUY0S25qMEx0a1lhNVY0T1JMYTl4NDhabDRQVUp0eFR4aEE3ZlZjTXNYSTRNYmFpUDBudGxKU3MxekhNbVJTbE93cHFmMFZKVFlFL1pkUC81QzZnbWdrd0dUZDZnalNaTTg0My8zNVk2THJscVFYNmYrYzhMaXhkc2hCYjhpeWxaeTZPNlFWUlpOblUwSm5SOERRdlJ4ZEFHNXRZL0c2V1FXNGZrSDZGSkl1SnppVDZHeFh2a1RLcTZnOUxUYU5xcS9IWlh2eWZ4Vnc0ZEQwMXhWZGpEc2FvT2hSbW4yMTFicXUwV3VMMHh3M1R4Uks4aThnR245OHh6UHlZZHppaWg3clNVNkZja2x1b1Q1YlU5d0FBWW9ia0RIamdCeEwzTHV2akRHQ0lYOUdveWZwSEtzMlFQa1ZkRDRzb1M1OXhDNnpGaEZUUWdvSzF6NG9aZThKUExNSGJlV09oSGtvMnZzc1JzelJWbmhhYSthSHNhLzZZRnk0R0xhVlBYNUxFdUt5ZW4wSldPWGlTeVBtNktlTnNPMjdoeEFJZVM3Q3FxckM4SER5M1NjbUlnTnNSa3IyNGJZVng3am1mdzdnUkdzV2tQWG5lM09DM1VWZlMvc1o2M2xuZG83QkwzempaTVZOaUlJV0lmRXVoQkMxZFk5elllWE9yMm8yZzhJMzA1bm5xdVBrNUxIRFhwVVZTb2dWVWI3NEl1eGVVTUhuaVVNeFcrYXNDNi9LeEZsdWNXaVdZMlNvaXBXcEJmMHR2M25RdGtkclpwSjl1aEF2S2xMOWJEL1NWUEZqelpNNUxxSmZrdEpTbTF6dVRnSXN0SEtaajh2SVh2YzA5K1FveDRNMWg3VlNhWTJBL0tZbUZYLzJHRlg5alZpcWxIc3lMRHYrSmt0T1liK0U3UzV4VjZKZ2hxS0JhMGc5RFZHUmo1ZFJ4UC9FY1dvalZMOHlCR1djY3ZPc2tFaHVMOFRSNFExQW9TR044eGdsdURFcXo1eVFjWi9FcTc4dXhGTDdJbDcrZXhCOXZva3I5Um85RlRYNUh0TVZnUHRkR3FIaEVaTnRTYjRxQWlKZERlRFNFeG9vblNlMm5pYkZxdnVlNTJiTzNvRGVUOTJIclFjT1VoYjd0aE5KckhNaUp3clFBQnlZUFdYSU9JN3RNM0RtQ3ZxS093Z09Ucisrem50ekdNblM3QTIvTmJ0Tjd1Q0VhOThxUzNLMWpuRkZ3QUJLYkxoQU9OZllLTXZXMlU3aFI5YVhMaUd2OTBidVJyZTgvYXRvYVFtYUVSSVNwQXVTa29Va25lVXpEN2lLTnZHODkralVlMktmQjZZL1d4NDJXa2I3NC9xTG9jeEcrRzZJRE43OFVGeHJtQTZ4aTlrU0dvaGFqaEdxZnlmRml3V3dlTVBwOGl2RDlwM3RYRklBVTdzbkE2b0FyempvQXgvcSt3Qm1kQklIY0tQQ3Ztbmk4c3pYY3JxTmFNS3FyVDI4eGQ4ZzFCWnIzSHQ0TXFjcm5nV0NOMmVlYzJNZ2d3Rkh1S0x4dzNUQkdPMlVyT1JVNFZDVml2MnJXU2I4SnZrUFgzWWNsZzQ2dGQyQmEydnNsMUp0bDd1SFFQT1AzZzl5TWZiUTdOZ2V3Rm1PaGhvcDhCd3lISTA5bG9ZQlR1NUdpWkJVUWx1REFtSkxDZW5lbHR5M1ZLOEhDUHRiejdOdGxBMzR1V3YvZGNLcDk2Ny8vOXRjMnUyMUNMa2JkTXdHdmZOOUpydXppNHlNRll2cEl4VTYvRE1vWnp5MWM2UU8rKzQvU1VUakMzenRWRTFMNmhIaWgwQzJuRnFxZk1IdnU3ZFZhNHdQQlk3TTFzenRDRDQzejJrWmRBeCtEWXVMQzkzVmpEVUU1cDRHR0NLTCtteEMzNjlDM3JTRmt6M3NlQjMyYmJxQUtTY2MySm5WZkhZaG15dVJXbkJWMk9XTkE4eUQzRWRldGhvYmxwaTBJeSt0MDltVGMveWR2Smp2OEcwQjJuL0h1Rk9lZVpwZk51ZG16TytkVTRMS0IySzQydno2MnRQNnpzekhBcnF5eEUyYkNzOFhMR0ZidjM4UFJJbFdrSTluV1FIbXpvV3hHa2pValc0R3JJQzZEbWF0WFVqc3RIa01vY3I0WTJhc1htSGllbnhLdFRuOHJrcngwYUdORlN2c1kwYkwyai9udlg5L1daYXJSTGxtQ2tITldCR1JSRXFTUjBrRmNiK3VMb3AwdTNkVkNGVTZadWJqL3lFKzl4ZzVvM0Y5dGl4d1FkSTAyWU9ITU05V1huY28xMXdjcGVJOVVIQ0pvVzB4VnpCZUpkeHJqWEltaW41ZGF1WS9LWVhmMStvR3RoVlBxY0tzbCtHSGFQT1JEQU9oMnArZkxSMzlrendlTm55VW5vcEUzU0w4emlaZEx5RFVVbkVuSWV0aXIwZ20yNDlSOUF6eU4zSnZNRUc4Zll0Q1UwejVZS0NTcWxTWmdqWHVDUzVaM3dETlJiRkp1QzZMWGhERDJqUGJoVW5aU2ZPTXJRckZyeGJ2dGFKNVl4eXp4NU9ML3UzVC9DdFhNQVVFaVdKUHdnUmlKU0grd0dDaGV0SU85MkpBQS91SmZtcmZ1eVBvRTRWemc1b3p6SWlKRDRLblRUOHVxNlVaMENhWGNTclhzemdOYVVOdnRUbDZzbVh1cXk2eDBRWEJraWhNL1BrWHZucWt6cENjL2xZNkx4S2hnVVBRanNCZUdlakM3SjRtQ3g0dUlWdFREVUZHdmVja0JkakVEWE5EVzJpd2piRE5mU2FVVnJLdy9SaWltNXRlT1QzNW1kR1M5VmtlV08xZlJFb2RKR0JNc1BWcHIxdTF2c1FlaGROSVFXZTNWbEVXQzZ1QUpvL0VsMHBaenl2V0tKNHdOd1gxNlZKMUpiZncvd3V0ZU9nTFUweDkvYU83dllueTJnc0g5a3VhQnZhYUV3U2c5RXdKcFNUZlBsL1B6TUVxQkJ0aHp0MHZtaTlTbEhyb1ZlenpvUW4za25hVUdEdElnNnQ3UWs0WHJNOTd1Vys3UXFIK2hiUjJ6em9wcnJ4WWVkMWVGSjZxTVdvVm5IQTJMOWhieDROOWxvTmxhN3ZoK3hkZ0tvdnpzQnRxQU9wQmNPQTFEZUo1djVKVGVWUmlJMDhvdE5OdmsyaC80dU5rNDFyNmhYeS8zL2dUaktGNGhYNmJIdEdqdnJJTEk0NWd1ekRSamREK0xsMnBrdUVLSnZmVC8yYnlwWDZvZnlMelE1VGxvRUx1NkZrTUtCNS9FSkFuSWFLZld5Z1E4MWN1Yk85cStsTEtQREdsMzN6QnNIcXhKM3FjN0IxU2c2Ylo5blZEOXlYanl0Wm91RklzaWFqODNOMEd0cmpmLzV5TWVudWJRZGMvWlZQaUJqMWpNK3YrYVJkOWhQVXJlR2xBdVA4UmRMYTVJUTBBZkpLR2lhRFNvOXNiai9JYnpWSUg2QzRZR1EvaFBTVTFrRXNjSjBITWphbnlHcEs2SS9PQXhycWxWd2lqRGV4U0RuY2VCK2JwSUJtQVZrNXZIK3dXRGtDZHNJTndSYWJ0bVYyeVJjenhOZTlJVnN0K2dGQTVIekVtOFY4cEhjMUh5aGJXcG9FQzkvb2JyL2svVVQ3VmRzaGF2SWp2SFJjLy9mL2xIV3IyQzIxLzZJRktLTDdzQTJTczcwNjV0VUVDZWRYU1dudTJhbWxEYnBpUzA4WDJUTzk2T0oxanBnWitHU0pDdVU5aUp4b0UxRFNHUUJWUjB6SXBjY1RXcTVxa2NSVlFwb2pGK0x1Q1VYMSt0Um0xUURwenhnU3IrMzcxamc2bkV1bjN1ekxMVG8yL3M1RXVBc1ZiM2R3Q3o4QXBkaXhZbVNTWjI5dVNFYXB3aU4zNWliczlDTGczdWtiNHlwTmh6Rmx6SlVlZ0ZCbWIyTENZOVMvb3BKZVlJRXhPM1hXYUNyWXB0Y2NWaHpBb2VVZEtIZUtpd0VsZHBqbzhMajJlYk5yY1VFTGdBRzNaTW1OWXZEbXdNSmt4SkI5VjFwRGdVcjdTT2gwMG0wVnZFQjNJTmRDalc1UVBsRTNyekZLYmNmclM2UkZmQVFrenVpV0tqMEZtU3lRKzJReE1DeWRMY1Q1YXhXYWdaalhXc0JFMlFXbkVsdWhXeVk0b2daUlU5eUtQTlRVYkVIbTRaNEN2LzFTeTcyY3BXcHViNnBTaWREQjRVcDd1bmREMDRPbWJIa0szZmhKRU1uWE5YWDFDSCttNlhmQ3YxblJXRGl6RWdWZlNZUGw1UDZIMktrc1Q4ekFyUm5ZR0RsWG5qQkdKMWhMY0ZVaGhDSGdGM2orY1VTTTZveGFQdzhyNW5uSEJtY1VBNk9uYWFRODQxVkJ0RUNSSnlWWTN2VVloYWNYMFIvQ0MzWTNvV2FHQVV0TFBrcks4bkNZWTZHWDMydXFNVk83eU00T0N2LzNKUDE0em5wdGRuV0xSWE9HaTVWdlQwa21hckFnZFVacVVEekVkOUxITUNEOStPY3NJYkJJa1ZWTWFSMkRGcmQxWjdOWHJWU0ZGT1ZFTXJSbVNmR3FNeEFWZHhtUFhZWEJEZkRhR3lhc3ZkZUNNMFlpSFR3cVBHY2srOWtvOGo3TU1vUWliWG53eS96RE1DYzNaYkZaL1JOZjB0VUxCVUp5ZWJBZkdyYnlQMmN1SlVad1ZKbkVETzUzREswbWxsWVhKSW9HQUVhN2gvOW5MMlRZRzd0MW1MOEszT0FVVFB5MXQvREE1dXp1dmkwVlF1NmtYdHYzVGQrTjFSMnFvNTQzNVNWMUdzUlFzdVRVd3A2ek03Y1VmZm1lSW5Tb2dNL0hjMVliSGt3VnhjV2tjOW5HMDFSTHRSckV4blRMTjBwUHBtbzJKQVEvY3gycEZwL1ZwcXYyMWZGNE9hL2hrRnAyb0xEQVhXUDlJRk1VbWFLeXE0ampTakF6RnZhUVI3MGo2aXFqZGZ2WUpVYVFSSXdhQWRLalZMeEhIM1FBQUlSbkN3TDdoY1ZBYlNmcks0djRhZ0wyd3d3dk1zVEVmL2UrUTRSWHVrZFQvYWhDek9GMzhROU9oODE0Z3VGSDJYUHRscCt3Q1VyWERKZzJRdzF5ZURNd0Vvdm9IVEJUWmk1SFFlemlJVWFwNnl2aEhlc0FhdHZUSEREcjU3L2ZUVzg4Rm1Oall2WWNkK3MzbzZCSlcrSDNVbTNXS0RHd1dRYkR0U1hZS1FxUEFtYVJnRE9kTjB3TGtQcDlkb3R1WkpGeU5yYjNFRGZJUFNkUnB2elFMOUx0dDZYb05pVjFRVGNEdDBtOWw5TGlNT0JQT2p0UG1lWDZzZW5DVHZ4V0FQUWlkaTh6TUd3eUJZYWd0eUhWeGUvN1RYazlxdnN3SC9PMy9XcnVBQXVUNXBNdW1jdmUxZmtORHk4K3QwYzIvbTh1WlJBUHlKK2FoOUtuK0pHcUwyTndhZEc5dm1LQTVrNGdQN1hqQmtOVXVqZmxsbG1jYVM2QnhmM3dabFF4Q0lHSXEySDE4OVFJMEhUdGFlUTNtVXlnY3g0UHFYZ3lrak1JSHp6RGNwc05pMnMrSFZIVTRRd0NFdTBNZUFwMTFuMFlLOTEwS0ROQ0RRK0FmUTlHQ0pMR3ZBbXNwcXFudHNpZERSWmp3eUw1YWorczRHKyszM0dBQjJLZjAyN21rMVg4QkJjSFhVWUNHVk85eVFGMFQxdnM1aDIyTTRVVnFPSnJqcTRsYTM3M1lKdVVCVmExb3F2b2MxS1JQMlFUdDR1M2pPTlJQZnd0cWpiS0tRSG0yeVJEUU44eUJITi90NHo5SEl5MWNjcTFObmt0TVhOYkl4dFhmS09RU2lOeHR6c1A1MDBzS1RBZFNJVnBqVHVtOERYdG01YzVDTGJZTG9kbGd4ZUIwY3E4Z0xFaHF5TWpsaENvcllqUW9kUDZlcEZ1Wm42ZWZnSEdkNHFJRTV6dWUrUjN6VW5PdGlJazJjN0gzMHhmUmlLdlNDeGhhdWZzTVVyME1Zc25JWGtvanFTdGdWaElHS0QwT0ZvQUY5UW9JSHVWK3VvUzVvdzdDYmNpQU9pa1o1a2doWHljaGxlaytSTk1wL0ZYZFJaL2ltWXhlcFRqZnB0UDhDeklrc0FtVzNVNk1IRVNZY2N0NVYySTJYWUJRTmVJbXlhc3JrY1dRZFRtVlZ3c2Z3ejFhakVncS8vUmZ3WVhOWGt2S3FTbTM3NDRKM1YwVHZySGl6RGxWS21kTTVRcjVzRkdBdFg4MldEWnZPQ3hFSGJjUE1VbTFpc0VIZjhKbGtZYVRCeTNWdnZCMGxxSktJTGo5UUdZOGdlQ0FIbHQ3ZFFOVnJYeTJHWS85NG9rOEt4OGh6OVdkczlBKzkvd1J4blhOcTljcHZIZEo3cnkvSmtUQVgvMHl1a2xySW5BcVRDMXd0WkZTUHEzQStCbFo2c1BNNXIwQVpXV2VZKzk1VmxiWk94V3pzbHN6bHRoU1hxOURiNko1eHJJczNLQjgzV1MvVHp5U29RNmNCNndmL2UrZ3VUWjd5OVpRckRNRFNDVlNFMGJ5R1FWUDlPWTdqYXRTSkxBUEF4K1o2VmZSWmx4eUwwVmFYSUIxV1NjbEozb3NDNXR6d284MS9nNnlNa0Jzdkc0V2JKMm5VaUVVNjVBa01aWnEybGZoVDFWaGs5MTFjdVNYVU5GTDgrN2RmbHZSblZrQTVqdWJqd2xadDByY00zdFNNck5mUHZiYU4rZ0dob0Z4ZjVGcElYSTNpQjVzT0tOK3pwZjd4N1NGajhsUmhXMUJUbW1MaDN3ejNZMEcxNXVrV2FaeUt0VjNlSEVtZlhoZ2paWDBPVFh5LzJaODJ2YXNPejZHVDd0NG1YclFQNHdaMGlBaWc3cUg1dTJ3Y1hsbzNHamRxVEMvZ3pXcjB2eFJLcnhHWHBsejk1Y2Y2bW5xcHN2TWQrSzNaY3l0dDAveXJpRVgveWo1Y3hIT1ZBT1lraE9oVGpTbUdxOHZPOER2UTYvaXliLzM0bjVpS2RhMGUvdW9BS0lGWi9ZME1keVozMGRqT1luanhYSEI1THZGTVZTVHFxc0ZzUWhmeW9JMFIyNmdkeXVuUDNvYklUa2xYenQ0bGhKVDBTd1JxVjRkNTdZcEF5QVNZVStRdTRoK0U1Z1hheFAwRC9xMi9HcGcyUjVialY1SXhnZXRQSklYazNhVDROdHQvRXFpSklEeVR5TFpkdmQwWXdGNHpFTFJhSGpoRUZJcERxeFlONndGZ216czdQcGZhOWUzeDFhOFN1TG5GT1pDQ2RrUWtydVo4a3l0WmF3bVU5MnVUaS9jK3c4UnpNOFBCRVg3bkhRUkpwMEprVmNKa2lUaU1OWVgyVHQ3dTVqb1B5aGVHT2dBWmxHQVZHQzFMWEd2TWVXN0FwYUF4THVZTnlXUVVlR3FRdVFsMjR0TUNzbVpJNUtjQmJjMUhSYjhucW5vSDRJd2lmaHNxYS91ais3V2RnVkJJVmFWUDVETkdXSE1WRmZzNk0wbEFsT08yYlEzYXMvdHZXRVhuRlFiQnp4bUpRZ1pSRE9kbDRUSXY0eE85Tnh5bmQyaUJJMVdSRXpSTWlVNm8yYmp5anpSODR2cXlEQndiNFdET0ZPTjYrMnhlRkhEWWtWUXk5Tll0SitQUUtDWmZvS2YrSVZZNHUvSUJqVjlvMEYrSDVhNkVvT0I5eVdBUGJYbEc1NzRiNUtTWjQ4T1hmTXUxSEcxU3VXQ0dzdnJUdE42elhLQ2xYVTVsb1hUM1VnSnZDZmk5WCt3RXUydTNseFJjbzlxbEM1M0ZoT0J1bkN3SWFGWEM3alcyREg3ajJ2U3dxcHZ2VVNmWlU1UjB6NFRha2VRMlVrZWVlV1htUVVMK2pKckZiVzNGcUFrejJPL1NodmpkYjk2bElNWTVlOU9OTHBLOEI4eHNIYXJ5Q3d6WlA2WmtJNlJGTG5oT3hLMDRYY0l0T2hYM3FTK2RURngvYmJWVVRMTTNtS0pTRVBSZWpsQUMwd242VytJN0Q2aDNyQXA1NkR1bFhjaC9sNjFZTnQreVBwbjBvTThONnhGek1aTWRWY0gxcm9QREhzTjNoZjdMaW5iKzBoVzZUNWc1SFRMZWVLdTdnbFNYc2NHN29tdDFlbEJEblBGRlpwQ1gzU3JkbWV6SHcrSWxtNFYySlF3NkVhSkwyWjFwUTZqRFpGa05xekIrWGFralBvRXdQV0dqdXhWeTJtRTZEV1o5cUVzVm5rMzNkZEV4S1h1Q0pyTFhrWHNsR0I0emxKTW9ld2c2Ly9jYW5wd05SVWdGOGpZZjhBT3hUdGJYUzl4V092ZXU1NDkvYXNneFVLUXdJNE1ER3llcUwzSFMyVk9WWUlmbWlBM1ZVSmNrR2JBb2ZQaXdRSlFmRzFTMzdGN2UvVlhmeEpXbm9DWDd5cmhzZW5qUWt6YzNCdjkrNHNQRTlVSjUrVGROZXREdzNGVGdzamdEZFJpYktsa1B2andMQ2N4V1dJM2Vzdmx6Ym55ZlB1dTE0YUw0dVgxSnF0YzlzSXdKL2VmWWM5alhlV1QremluSEMvaVpvR0ZxeGxZYVZiRjhiOU8weUZTRThtSCtHZVlsSzZUaFFPeDRhT2NNaENkTW1ETzFlb25BcTNia0pTcW5ucWM4RFFLTWtiK0pJQldrYUJoNXVNVk5YVDliQzZhZnFHemkrbVlZcGxUVGJQVlp2djJkV2FZLzEvS0dxdlF6TEV1ZTkveW9IM0hsLzFqeDN2UkN4SUZjSkdHaGY1RFI3M1k3eTMwdmo1TTc5NHpmNGpEdlhCWnhxSEJDV1pIc1pYdEZ6dEsxWDBnT0xkN2YxcVJIbXFsbzFLR1cvNDVycjhQdDY5eFI2c20zZ0xvbWIzOW43OTlzZW5GNmY5bTZ1c2FxQnV2ZThYd2FiZm93WExWdEx2NkwzNnVvMTMyWDVJU1hFUElDWkZhVlFHVk5mZXJhRUIvM0NDWlcvZ2xjNk9TTmNPeFRwMDZZTTZNMlNlRDQyMlhhUEc2WnhpYnhOdHRjWDRqWWZsNlJZZE00am81TDBXYWFFcUZxdWw0YTY1SjN0OUVXMGZMdGpkSUh3N1N0MS9kREg0ZVJFb253Tks4OXdPL2s3aHA0U2k4ZVJ5cElrYzJlK1hQeE9HVGVsV0gvNUNxR3dRNTAwUXVoU3JiblcxQURmRTJ3eUl2NzhRWjg5VWxIRnJ5MUE3dDNXQ2Z5dVkyeUFBQUFBQT1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJraW5kXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDgxMSxcbiAgICAgICAgXCJiYXNlXCI6IFtcbiAgICAgICAgICAwLjc4LFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAwLjgyXG4gICAgICAgIF0sXG4gICAgICAgIFwiY2hhbGtcIjogW1xuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAwLjkyLFxuICAgICAgICAgIDAuOTNcbiAgICAgICAgXSxcbiAgICAgICAgXCJydXN0XCI6IFtcbiAgICAgICAgICAwLjQ4LFxuICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgMC4yXG4gICAgICAgIF0sXG4gICAgICAgIFwicnVuXCI6IFtcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC4yNixcbiAgICAgICAgICAwLjEzXG4gICAgICAgIF0sXG4gICAgICAgIFwiZHJpZnRcIjogMTAsXG4gICAgICAgIFwicnVzdENsdXN0ZXJzXCI6IDMsXG4gICAgICAgIFwiY2x1c3RlclNjYWxlXCI6IDAuNDUsXG4gICAgICAgIFwiZ3JhaW5cIjogMTIwMCxcbiAgICAgICAgXCJoYmFuZHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidjBcIjogMC40MDk1MjM4MDk1MjM4MDk1NyxcbiAgICAgICAgICAgIFwidjFcIjogMC40NjY2NjY2NjY2NjY2NjY3LFxuICAgICAgICAgICAgXCJhbHBoYVwiOiAwLjUsXG4gICAgICAgICAgICBcInNwZWNrc1wiOiA4MFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJiYW5kU3RyZWFrc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ2XCI6IDAuNDA5NTIzODA5NTIzODA5NTcsXG4gICAgICAgICAgICBcImNvdW50XCI6IDM2LFxuICAgICAgICAgICAgXCJsZW5cIjogMC4wNCxcbiAgICAgICAgICAgIFwibGVuVmFyXCI6IDAuMDcsXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAuMDA2LFxuICAgICAgICAgICAgXCJhbHBoYVwiOiAwLjI4XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImdyb3VuZEJhbmRcIjogMC40NSxcbiAgICAgICAgXCJncm91bmRIZWlnaHRcIjogMC4wODU3MTQyODU3MTQyODU3XG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwicGxhdGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQcmludGVkIHNpZ24gcGxhdGVcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwic2hlZXRpbmdcIixcbiAgICAgICAgICBcInV2XCI6IFwiZnJvbnRcIixcbiAgICAgICAgICBcImF0bGFzXCI6IHtcbiAgICAgICAgICAgIFwieDBcIjogLTAuNDUsXG4gICAgICAgICAgICBcIngxXCI6IDAuNTUsXG4gICAgICAgICAgICBcInkwXCI6IDIuMSxcbiAgICAgICAgICAgIFwieTFcIjogMC45OCxcbiAgICAgICAgICAgIFwieU1pblwiOiAwLjk4LFxuICAgICAgICAgICAgXCJwaW5cIjogW1xuICAgICAgICAgICAgICAwLjk3NSxcbiAgICAgICAgICAgICAgMC43NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiYmFzZVwiOiAxNjc3NzIxNSxcbiAgICAgICAgICAgIFwibWluTnpcIjogMC45NVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleHRydWRlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDIxMjEsXG4gICAgICAgICAgICAgICAgICAyLjA3ODc5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAwNzc2LFxuICAgICAgICAgICAgICAgICAgMi4wODY1NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA3NzYsXG4gICAgICAgICAgICAgICAgICAyLjA4NjU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMjEyMSxcbiAgICAgICAgICAgICAgICAgIDIuMDc4NzlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjQyODc5LFxuICAgICAgICAgICAgICAgICAgMS42NzEyMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuNDM2NTUsXG4gICAgICAgICAgICAgICAgICAxLjY1Nzc2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC40MzY1NSxcbiAgICAgICAgICAgICAgICAgIDEuNjQyMjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjQyODc5LFxuICAgICAgICAgICAgICAgICAgMS42Mjg3OVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDIxMjEsXG4gICAgICAgICAgICAgICAgICAxLjIyMTIxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMDc3NixcbiAgICAgICAgICAgICAgICAgIDEuMjEzNDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDA3NzYsXG4gICAgICAgICAgICAgICAgICAxLjIxMzQ1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAyMTIxLFxuICAgICAgICAgICAgICAgICAgMS4yMjEyMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40Mjg3OSxcbiAgICAgICAgICAgICAgICAgIDEuNjI4NzlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDM2NTUsXG4gICAgICAgICAgICAgICAgICAxLjY0MjI0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQzNjU1LFxuICAgICAgICAgICAgICAgICAgMS42NTc3NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40Mjg3OSxcbiAgICAgICAgICAgICAgICAgIDEuNjcxMjFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiejBcIjogMC4wNTMwMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAgIFwiejFcIjogMC4wODYwMDAwMDAwMDAwMDAwMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTUsXG4gICAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgICAgMS4xNjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjk3OTksXG4gICAgICAgICAgICAgICAgICAxLjE3MjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjkyNSxcbiAgICAgICAgICAgICAgICAgIDEuMTc3OTlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjg1LFxuICAgICAgICAgICAgICAgICAgMS4xOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjg1LFxuICAgICAgICAgICAgICAgICAgMS4xOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjkyNSxcbiAgICAgICAgICAgICAgICAgIDEuMTc3OTlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjI5Nzk5LFxuICAgICAgICAgICAgICAgICAgMS4xNzI1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgICAgICAgMS4xNjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgICAgICAwLjk5NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjk3OTksXG4gICAgICAgICAgICAgICAgICAwLjk4NzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjI5MjUsXG4gICAgICAgICAgICAgICAgICAwLjk4MjAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yODUsXG4gICAgICAgICAgICAgICAgICAwLjk4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI4NSxcbiAgICAgICAgICAgICAgICAgIDAuOThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjkyNSxcbiAgICAgICAgICAgICAgICAgIDAuOTgyMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjk3OTksXG4gICAgICAgICAgICAgICAgICAwLjk4NzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAgIDAuOTk1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IDAuMDUzMDAwMDAwMDAwMDAwMDA1LFxuICAgICAgICAgICAgICBcInoxXCI6IDAuMDg2MDAwMDAwMDAwMDAwMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwicG9zdFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkdhbHZhbmlzZWQgc3VwcG9ydCwgYnJhY2tldHMgYW5kIHJpbVwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgICAgXCJ1dlwiOiBcImhlaWdodFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAyLjEsXG4gICAgICAgICAgXCJ0aW50XCI6IHtcbiAgICAgICAgICAgIFwiYXhpc1wiOiBcInlcIixcbiAgICAgICAgICAgIFwiZnJvbVwiOiAwLjAzLFxuICAgICAgICAgICAgXCJ0b1wiOiAwLjMyLFxuICAgICAgICAgICAgXCJjMFwiOiAxMTA0NzAyNCxcbiAgICAgICAgICAgIFwiYzFcIjogMTY3NzcyMTUsXG4gICAgICAgICAgICBcImtlZXBcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjb2xsaWRlclwiOiB7XG4gICAgICAgICAgICBcInNoYXBlXCI6IFwiYm94XCIsXG4gICAgICAgICAgICBcImxvY2FsQ2VudGVyXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMS4wNSxcbiAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgICAgICAwLjQ1LFxuICAgICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgICAwLjA2N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibm90ZXNcIjogXCJUaGUgc2lnbiBlbnZlbG9wZTsgdGhlIHNoaXBwZWQgY29tcG91bmQgaXMgZGVyaXZlZCBmcm9tIHRoZSBnZW9tZXRyeS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAwLjA4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMi4wMDQsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDg2MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAuMDA4LFxuICAgICAgICAgICAgICAwLjA4NjAwMDAwMDAwMDAwMDAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMS4zOCxcbiAgICAgICAgICAgICAgMC4wNDYsXG4gICAgICAgICAgICAgIDAuNTU4LFxuICAgICAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAgICAgMC4wMTIwMDAwMDAwMDAwMDAwMDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLjkyMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIDAuMDQ2LFxuICAgICAgICAgICAgICAwLjU1OCxcbiAgICAgICAgICAgICAgMC4wNDUsXG4gICAgICAgICAgICAgIDAuMDEyMDAwMDAwMDAwMDAwMDA0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMS4wOCxcbiAgICAgICAgICAgICAgMC4wNDYsXG4gICAgICAgICAgICAgIDAuMTg2LFxuICAgICAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAgICAgMC4wMTIwMDAwMDAwMDAwMDAwMDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLjU0LFxuICAgICAgICAgICAgICAwLjA0NixcbiAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgMS4wOCxcbiAgICAgICAgICAgICAgMC4wMTIwMDAwMDAwMDAwMDAwMDRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXSxcbiAgICAgICAgICBcImV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTUxMzMxNjMsXG4gICAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMjEyMSxcbiAgICAgICAgICAgICAgICAgIDIuMDc4NzlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDA3NzYsXG4gICAgICAgICAgICAgICAgICAyLjA4NjU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMDc3NixcbiAgICAgICAgICAgICAgICAgIDIuMDg2NTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAyMTIxLFxuICAgICAgICAgICAgICAgICAgMi4wNzg3OVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuNDI4NzksXG4gICAgICAgICAgICAgICAgICAxLjY3MTIxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC40MzY1NSxcbiAgICAgICAgICAgICAgICAgIDEuNjU3NzZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjQzNjU1LFxuICAgICAgICAgICAgICAgICAgMS42NDIyNFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuNDI4NzksXG4gICAgICAgICAgICAgICAgICAxLjYyODc5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMjEyMSxcbiAgICAgICAgICAgICAgICAgIDEuMjIxMjFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAwNzc2LFxuICAgICAgICAgICAgICAgICAgMS4yMTM0NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMDc3NixcbiAgICAgICAgICAgICAgICAgIDEuMjEzNDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDIxMjEsXG4gICAgICAgICAgICAgICAgICAxLjIyMTIxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQyODc5LFxuICAgICAgICAgICAgICAgICAgMS42Mjg3OVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40MzY1NSxcbiAgICAgICAgICAgICAgICAgIDEuNjQyMjRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDM2NTUsXG4gICAgICAgICAgICAgICAgICAxLjY1Nzc2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQyODc5LFxuICAgICAgICAgICAgICAgICAgMS42NzEyMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJob2xlc1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjAwODQ5LFxuICAgICAgICAgICAgICAgICAgICAyLjA2MzIzXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjAwMzExLFxuICAgICAgICAgICAgICAgICAgICAyLjA2NjM0XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC4wMDMxMSxcbiAgICAgICAgICAgICAgICAgICAgMi4wNjYzNFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuMDA4NDksXG4gICAgICAgICAgICAgICAgICAgIDIuMDYzMjNcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIC0wLjQxMzIzLFxuICAgICAgICAgICAgICAgICAgICAxLjY1ODQ5XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC40MTYzNCxcbiAgICAgICAgICAgICAgICAgICAgMS42NTMxMVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuNDE2MzQsXG4gICAgICAgICAgICAgICAgICAgIDEuNjQ2ODlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIC0wLjQxMzIzLFxuICAgICAgICAgICAgICAgICAgICAxLjY0MTUxXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC4wMDg0OSxcbiAgICAgICAgICAgICAgICAgICAgMS4yMzY3N1xuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuMDAzMTEsXG4gICAgICAgICAgICAgICAgICAgIDEuMjMzNjZcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMDAzMTEsXG4gICAgICAgICAgICAgICAgICAgIDEuMjMzNjZcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMDA4NDksXG4gICAgICAgICAgICAgICAgICAgIDEuMjM2NzdcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuNDEzMjMsXG4gICAgICAgICAgICAgICAgICAgIDEuNjQxNTFcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuNDE2MzQsXG4gICAgICAgICAgICAgICAgICAgIDEuNjQ2ODlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuNDE2MzQsXG4gICAgICAgICAgICAgICAgICAgIDEuNjUzMTFcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuNDEzMjMsXG4gICAgICAgICAgICAgICAgICAgIDEuNjU4NDlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiejBcIjogMC4wODIsXG4gICAgICAgICAgICAgIFwiejFcIjogMC4wOTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE1MTMzMTYzLFxuICAgICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAgIDEuMTY1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5Nzk5LFxuICAgICAgICAgICAgICAgICAgMS4xNzI1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5MjUsXG4gICAgICAgICAgICAgICAgICAxLjE3Nzk5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI4NSxcbiAgICAgICAgICAgICAgICAgIDEuMThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjI4NSxcbiAgICAgICAgICAgICAgICAgIDEuMThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjI5MjUsXG4gICAgICAgICAgICAgICAgICAxLjE3Nzk5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yOTc5OSxcbiAgICAgICAgICAgICAgICAgIDEuMTcyNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgICAgIDEuMTY1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgICAgICAgMC45OTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjI5Nzk5LFxuICAgICAgICAgICAgICAgICAgMC45ODc1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yOTI1LFxuICAgICAgICAgICAgICAgICAgMC45ODIwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjg1LFxuICAgICAgICAgICAgICAgICAgMC45OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yODUsXG4gICAgICAgICAgICAgICAgICAwLjk4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5MjUsXG4gICAgICAgICAgICAgICAgICAwLjk4MjAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5Nzk5LFxuICAgICAgICAgICAgICAgICAgMC45ODc1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgICAwLjk5NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJob2xlc1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgICAgICAgICAxLjE1NlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMC4yNzk0NixcbiAgICAgICAgICAgICAgICAgICAgMS4xNThcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMjc4LFxuICAgICAgICAgICAgICAgICAgICAxLjE1OTQ2XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjI3NixcbiAgICAgICAgICAgICAgICAgICAgMS4xNlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuMjc2LFxuICAgICAgICAgICAgICAgICAgICAxLjE2XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC4yNzgsXG4gICAgICAgICAgICAgICAgICAgIDEuMTU5NDZcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIC0wLjI3OTQ2LFxuICAgICAgICAgICAgICAgICAgICAxLjE1OFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuMjgsXG4gICAgICAgICAgICAgICAgICAgIDEuMTU2XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC4yOCxcbiAgICAgICAgICAgICAgICAgICAgMS4wMDRcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIC0wLjI3OTQ2LFxuICAgICAgICAgICAgICAgICAgICAxLjAwMlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLTAuMjc4LFxuICAgICAgICAgICAgICAgICAgICAxLjAwMDU0XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAtMC4yNzYsXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMjc2LFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLjI3OCxcbiAgICAgICAgICAgICAgICAgICAgMS4wMDA1NFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMC4yNzk0NixcbiAgICAgICAgICAgICAgICAgICAgMS4wMDJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMjgsXG4gICAgICAgICAgICAgICAgICAgIDEuMDA0XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IDAuMDgyLFxuICAgICAgICAgICAgICBcInoxXCI6IDAuMDk0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcIl9kZXB0aFwiOiAwLjEzNFxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbi8qKiBMYXRoZUdlb21ldHJ5IHNoYXJlcyB0aGUgY29ybmVyIHZlcnRleCBiZXR3ZWVuIGFuIGVuZCBkaXNjIGFuZCB0aGUgc2lkZSB3YWxsLCBzb1xuICogIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIHRpbHRzIHRoZSB3YWxsJ3MgZmlyc3QgcmluZyA0NSBkZWdyZWVzIHRvd2FyZCB0aGUgZGlzYyBhbmQgdGhlIGhhcm5lc3Mgc2hhZGVzXG4gKiAgYSBkYXJrIGdyYWRpZW50IHRoZXJlIC0tIGEgcmluZyB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBhcyBhIEhPTEUgdW5kZXIgdGhlIHN0YWlubGVzcyBiaW4ncyBjYXAuXG4gKiAgSW5zZXJ0aW5nIGEgcG9pbnQgMC44IG1tIHBhc3QgZXZlcnkgc2hhcnAgY29ybmVyICg+IDcwIGRlZ3JlZXMpIGNvbmZpbmVzIHRoZSBhdmVyYWdlZCBub3JtYWwgdG8gdGhhdFxuICogIHNsaXZlci4gQ29zdHMgb25lIHJpbmcgcGVyIGNvcm5lcjsgcGFzcyBgc2hhcnAgPSBmYWxzZWAgd2hlcmUgdGhlIGJ1ZGdldCBjYW5ub3QgY2FycnkgaXQuICovXG5mdW5jdGlvbiBzcGxpdENvcm5lcnMocHRzOiBudW1iZXJbXVtdLCBtaW5EZWcgPSA3MCwgZXBzID0gMC4wMDA4KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBwdHNbaV0sIGEgPSBwdHNbaSAtIDFdLCBiID0gcHRzW2kgKyAxXTtcbiAgICBsZXQgc2hhcnAgPSBmYWxzZTtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICBjb25zdCB1eCA9IHBbMF0gLSBhWzBdLCB1eSA9IHBbMV0gLSBhWzFdLCB2eCA9IGJbMF0gLSBwWzBdLCB2eSA9IGJbMV0gLSBwWzFdO1xuICAgICAgY29uc3QgbHUgPSBNYXRoLmh5cG90KHV4LCB1eSksIGx2ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgaWYgKGx1ID4gMCAmJiBsdiA+IDApIHNoYXJwID0gTWF0aC5hY29zKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAodXggKiB2eCArIHV5ICogdnkpIC8gKGx1ICogbHYpKSkpID4gbWluRGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGlmIChzaGFycCAmJiBsdSA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdIC0gdXggLyBsdSAqIGVwcywgcFsxXSAtIHV5IC8gbHUgKiBlcHNdKTtcbiAgICAgIG91dC5wdXNoKHApO1xuICAgICAgaWYgKHNoYXJwICYmIGx2ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gKyB2eCAvIGx2ICogZXBzLCBwWzFdICsgdnkgLyBsdiAqIGVwc10pO1xuICAgIH0gZWxzZSBvdXQucHVzaChwKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogYHdlbGRTZWFtYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgcmFkaWFsIGNvbHVtbiwgd2hpY2ggaXMgd2hhdCBjbG9zZXMgdGhlXG4gKiAgcmV2b2x2ZSdzIFNIQURJTkcgc2VhbS4gTGF0aGVHZW9tZXRyeSBhbHJlYWR5IGRvZXMgdGhpcyBpdHNlbGYgLS0gaXQgZXhwbGljaXRseSBhdmVyYWdlcyB0aGUgdHdvXG4gKiAgZW5kIGNvbHVtbnMgZm9yIGEgZnVsbCAyKlBJIHN3ZWVwIC0tIGFuZCB0aGUgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClgIGJlbG93IHRocm93cyB0aGF0IHdvcmtcbiAqICBhd2F5LCBiZWNhdXNlIGEgcmVjb21wdXRlIHNlZXMgdGhlIHNlYW0gYXMgdHdvIHVuY29ubmVjdGVkIGVkZ2VzIGFuZCBnaXZlcyBlYWNoIHRoZSBub3JtYWwgb2ZcbiAqICB0aGUgZmFjZXMgb24gaXRzIG93biBzaWRlIG9ubHkuIE9uIGEgbWF0dGUgcHJvcCB0aGUgcmVzdWx0aW5nIGNyZWFzZSBpcyBpbnZpc2libGUsIHdoaWNoIGlzIHdoeVxuICogIGl0IHN1cnZpdmVkOyBvbiBhIHNhdGluIG1ldGFsIGl0IGlzIGEgaGFyZCB2ZXJ0aWNhbCBsaW5lIGRvd24gdGhlIHJldm9sdmUuIE1lYXN1cmVkIG9uIHRoZVxuICogIG5vb2RsZS1zaG9wIHRhYmxlJ3MgcmltIGF0IGF6aW11dGggMDogYSAzMS1sZXZlbCBsdW1hIHN0ZXAgYXQgeD01MTIgKDI0NSAtPiAyMTQgYXQgeT0yNTgpLFxuICogIFJFVkVSU0lORyB0byArMjcgYXQgeT0yNjYgLS0gYSBkaXNjb250aW51aXR5LCBub3QgYSBncmFkaWVudC5cbiAqICBEZWZhdWx0IE9GRiBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcCBjaGFuZ2VzIHNoYWRpbmcgaWYgaXQgaXMgZXZlciByZS1lbWl0dGVkOyB0aGUgcmVjb21wdXRlXG4gKiAgaXMgc3RpbGwgbmVlZGVkIGZvciB0aGUgc2hhcnAtY29ybmVyIHNwbGl0cywgc28gdGhpcyB3ZWxkcyBhZnRlcndhcmRzIHJhdGhlciB0aGFuIHNraXBwaW5nIGl0LiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDAsIHNoYXJwID0gdHJ1ZSwgd2VsZFNlYW0gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IChzaGFycCA/IHNwbGl0Q29ybmVycyhwdHMpIDogcHRzKS5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBpZiAod2VsZFNlYW0pIHtcbiAgICAvLyBMYXRoZUdlb21ldHJ5IGxheXMgb3V0IChzZWcgKyAxKSBjb2x1bW5zIG9mIGByb3dzYCB2ZXJ0aWNlczsgY29sdW1uIDAgYW5kIGNvbHVtbiBzZWcgYXJlIHRoZVxuICAgIC8vIHNhbWUgcGxhY2UgaW4gc3BhY2UuIEF2ZXJhZ2UgdGhlIHBhaXIgYW5kIHdyaXRlIGl0IGJhY2sgdG8gYm90aC5cbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IHJvd3MgPSBuLmNvdW50IC8gKHNlZyArIDEpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICBjb25zdCBhID0gciwgYiA9IHNlZyAqIHJvd3MgKyByO1xuICAgICAgY29uc3QgeCA9IG4uZ2V0WChhKSArIG4uZ2V0WChiKSwgeSA9IG4uZ2V0WShhKSArIG4uZ2V0WShiKSwgeiA9IG4uZ2V0WihhKSArIG4uZ2V0WihiKTtcbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHgsIHksIHopIHx8IDE7XG4gICAgICBuLnNldFhZWihhLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICAgIG4uc2V0WFlaKGIsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgIH1cbiAgICBuLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICAvL1xuICAvLyBBIHNpeHRoIHN0YXRpb24gZWxlbWVudCBgZmxhdFlgIENMQU1QUyB0aGUgcmluZydzIHVuZGVyc2lkZSB0byB0aGF0IGhlaWdodC4gQSBib2R5IHJlc3Rpbmcgb25cbiAgLy8gdGhlIGdyb3VuZCBpcyBub3QgYSBmbG9hdGluZyBlbGxpcHNlOiBpdCBzcHJlYWRzIHdoZXJlIGl0IGJlYXJzLCBhbmQgYW4gdW5jbGFtcGVkIHR1YmUgcmVhZHMgYXNcbiAgLy8gYSBzYXVzYWdlIG9uIGEgdGFibGUuIFRoZSBjbGFtcCBpcyBhIHNvZnQgb25lIC0tIHRoZSByaW5nIGtlZXBzIGl0cyB3aWR0aCBhbmQgbG9zZXMgaXRzIGRyb29wIC0tXG4gIC8vIHNvIHRoZSBjcmVhc2UgaXQgbGVhdmVzIGlzIHRoZSBjb250YWN0IGVkZ2UgcmF0aGVyIHRoYW4gYSBjdXQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5LCBmbGF0WV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguc2luKHRoKSAqIHJ4O1xuICAgICAgbGV0IHkgPSBjeSArIE1hdGguY29zKHRoKSAqIHJ5O1xuICAgICAgaWYgKGZsYXRZICE9PSB1bmRlZmluZWQgJiYgeSA8IGZsYXRZKSB5ID0gZmxhdFk7XG4gICAgICBwb3MucHVzaCh4LCB5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuPzogbnVtYmVyW11bXSwgY3VydmVTZWdtZW50cz86IG51bWJlciB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIHNoYXBlV2lkdGgoZywgb3B0cyk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogVGhlIHBlci12ZXJ0ZXggeCBzaGFwaW5nIHNoYXJlZCBieSB0aGUgYm9keSBhbmQgaXRzIGdsYXNzIGJhbmQsIHNvIGEgcGFuZSBvZmZzZXQgNSBtbSBwcm91ZCBvZlxuICogIHRoZSBib2R5IHN0YXlzIDUgbW0gcHJvdWQgYWZ0ZXIgYm90aCBhcmUgbmFycm93ZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uICovXG5mdW5jdGlvbiBzaGFwZVdpZHRoKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LFxuICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSB9KTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBsZXQgeCA9IHAuZ2V0WChpKTsgY29uc3QgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICBpZiAob3B0cy50dW1ibGUpIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoeSAtIG9wdHMudHVtYmxlLmJlbHQpIC8gKG9wdHMudHVtYmxlLnJvb2YgLSBvcHRzLnR1bWJsZS5iZWx0KSkpO1xuICAgICAgeCAqPSAxIC0gb3B0cy50dW1ibGUuayAqIHQ7XG4gICAgfVxuICAgIGlmIChvcHRzLnBsYW4gJiYgb3B0cy5wbGFuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgICAgbGV0IHMgPSBzdFswXVsxXTtcbiAgICAgIGlmICh6IDw9IHN0WzBdWzBdKSBzID0gc3RbMF1bMV07XG4gICAgICBlbHNlIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSBzID0gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICBlbHNlIGZvciAobGV0IGsgPSAwOyBrIDwgc3QubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgICBzID0gc3Rba11bMV0gKyAoc3RbayArIDFdWzFdIC0gc3Rba11bMV0pICogdTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHggKj0gcztcbiAgICB9XG4gICAgcC5zZXRYKGksIHgpO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYsIHByaXNtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICAvLyBgcHJpc21gOiBhbiBvcGVuIHRocmVlLXNpZGVkIHByaXNtIGF0IHNpeCB0cmlhbmdsZXMgd2hlcmUgdGhlIGJveCBjb3N0cyB0d2VsdmUgLS0gYSB3aXJlXG4gICAgLy8gc3Bva2UgaGFzIG5vIHJlc29sdmFibGUgc2VjdGlvbiBhdCBwcm9wIGRpc3RhbmNlLCBhbmQgMjggb2YgdGhlbSBvbiB0aHJlZSB3aGVlbHMgaXMgdGhlXG4gICAgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGFyZ2UgcHJvcCBpbnNpZGUgaXRzIHRyaWFuZ2xlIGNlaWxpbmcgYW5kIG9uZSBvdmVyIGl0XG4gICAgY29uc3QgZyA9IHByaXNtID8gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkodCAqIDAuNjIsIHQgKiAwLjYyLCBsZW4sIDMsIDEsIHRydWUpIDogbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG4vKipcbiAqIGByYCBtYXkgYmUgYSBzaW5nbGUgcmFkaXVzIChldmVyeSBzZWdtZW50IHRoZSBzYW1lLCB0aGUgb3JpZ2luYWwgYmVoYXZpb3VyKSBvciBPTkUgUkFESVVTIFBFUlxuICogU1RBVElPTiwgd2hpY2ggdGFwZXJzIHRoZSB0dWJlLiBBIGNhcHBlZCBjb25zdGFudC1yYWRpdXMgdHViZSBlbmRzIGluIGEgZmxhdCBkaXNjLCBhbmQgb24gdGhlXG4gKiBzcGlyaXQgaG91c2UncyBlYXZlIGhvcm5zIHRoYXQgcmVhZCBhcyBmb3VyIGN1dC1vZmYgcG9zdHMgcmF0aGVyIHRoYW4gcG9pbnRzOyBhIGhvcm4sIGEgc3Bpa2Ugb3JcbiAqIGEgd2hpc2tlciBuZWVkcyBpdHMgbGFzdCBzdGF0aW9uIGF0IH4wLjI1IG9mIHRoZSBmYXNjaWEgcmFkaXVzLiBUaGUgam9pbnQgb3ZlcmxhcCB0aGF0IGhpZGVzIHRoZVxuICogc2VhbSBiZXR3ZWVuIHNlZ21lbnRzIGlzIChyYSArIHJiKSAqIDAuNiwgd2hpY2ggaXMgZXhhY3RseSB0aGUgb2xkIGByICogMS4yYCB3aGVuIHRoZXkgYXJlIGVxdWFsLFxuICogc28gYSBudW1iZXIgc3RpbGwgcHJvZHVjZXMgYnl0ZS1pZGVudGljYWwgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIgfCBudW1iZXJbXSwgc2VnID0gOCwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCByQXQgPSAoaTogbnVtYmVyKSA9PiAodHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IHJbTWF0aC5taW4oaSwgci5sZW5ndGggLSAxKV0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBjb25zdCByYSA9IHJBdChpKSwgcmIgPSByQXQoaSArIDEpO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyYiwgcmEsIGxlbiArIChyYSArIHJiKSAqIDAuNiwgc2VnLCAxLCBmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKlxuICogQSBGTEFUIFNUUkFQIHN3ZXB0IGFsb25nIGEgcG9seWxpbmU6IGEgY2hhaW4gb2YgYm94ZXMsIGVhY2ggb3JpZW50ZWQgc28gaXRzIExFTkdUSCBydW5zIGFsb25nIHRoZVxuICogc2VnbWVudCwgaXRzIFRISUNLTkVTUyBhbG9uZyB0aGUgb3V0d2FyZCBub3JtYWwgZnJvbSBgYWJvdXRgLCBhbmQgaXRzIFdJRFRIIHRhbmdlbnQgdG8gdGhhdFxuICogc3VyZmFjZS4gVGhpcyBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgZ3VhcmQgYW5kIGEgd2lyZTogYSBidWxraGVhZCBsYW1wJ3MgY2FnZSBpcyBwcmVzc2VkXG4gKiBmbGF0IGJhciwgYW5kIGEgcm91bmQgdHViZSBvZiB0aGUgc2FtZSBtZWFzdXJlZCB3aWR0aCBzaGFkZXMgdG8gYSBuYXJyb3cgaGlnaGxpZ2h0IGFuZCByZWFkcyBhc1xuICogd2lyZSAtLSB3aGljaCBpcyB0aGUgdGhpbmcgdGhpcyBraXQncyBhc3NldCBub3RlcyBydWxlIG91dC4gSXQgaXMgYWxzbyBDSEVBUEVSIHRoYW4gYHR1YmVgOiBhIGJveFxuICogaXMgMTIgdHJpYW5nbGVzIGFnYWluc3QgYSBjYXBwZWQgNS1zaWRlZCBjeWxpbmRlcidzIDIwLlxuICovXG5mdW5jdGlvbiBzdHJhcChwdHM6IG51bWJlcltdW10sIHc6IG51bWJlciwgdDogbnVtYmVyLCBhYm91dDogbnVtYmVyW10sIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5WZWN0b3IzKGFib3V0WzBdLCBhYm91dFsxXSwgYWJvdXRbMl0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGRpciA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGRpci5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IG1pZCA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICAvLyBPdXR3YXJkIG5vcm1hbCBhdCB0aGUgbWlkcG9pbnQsIHJlLW9ydGhvZ29uYWxpc2VkIGFnYWluc3QgdGhlIHJ1biBzbyB0aGUgYmFzaXMgc3RheXMgc3F1YXJlXG4gICAgLy8gd2hlcmUgdGhlIHN0cmFwIGNsaW1icyBzdGVlcGx5IGFuZCB0aGUgdHdvIHdvdWxkIG90aGVyd2lzZSBiZSBuZWFybHkgcGFyYWxsZWwuXG4gICAgbGV0IG5ybSA9IG1pZC5jbG9uZSgpLnN1YihjKTtcbiAgICBucm0uc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKG5ybS5kb3QoZGlyKSkpO1xuICAgIGlmIChucm0ubGVuZ3RoU3EoKSA8IDFlLTEyKSBucm0gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoZGlyLnopKTtcbiAgICBucm0ubm9ybWFsaXplKCk7XG4gICAgLy8gZGlyIHggbnJtLCBOT1QgbnJtIHggZGlyLiBUaGUgYmFzaXMgY29sdW1ucyBhcmUgKHNpZGUsIGRpciwgbnJtKSBhZ2FpbnN0IGEgYm94J3MgKHcsIGxlbiwgdCksXG4gICAgLy8gc28gYSByaWdodC1oYW5kZWQgYmFzaXMgbmVlZHMgc2lkZSB4IGRpciA9IG5ybTsgbnJtIHggZGlyIGdpdmVzIC1ucm0sIGEgbWlycm9yZWQgYmFzaXMgd2l0aCBhXG4gICAgLy8gbmVnYXRpdmUgZGV0ZXJtaW5hbnQsIGFuZCBldmVyeSBzdHJhcCByZW5kZXJzIGluc2lkZSBvdXQgLS0gd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gZGFya1xuICAgIC8vIHNsaXZlciByYXRoZXIgdGhhbiBhbiBvYnZpb3VzbHkgZmxpcHBlZCBmYWNlLCBzbyBpdCByZWFkcyBhcyBhIGdlb21ldHJ5IGJ1Zywgbm90IGEgd2luZGluZyBvbmUuXG4gICAgY29uc3Qgc2lkZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKGRpciwgbnJtKS5ub3JtYWxpemUoKTtcbiAgICAvLyBPdmVybGFwIHRoZSBqb2ludHMgYnkgdGhlIHRoaWNrbmVzcyBzbyBjb25zZWN1dGl2ZSBib3hlcyBjbG9zZSB0aGUgbWl0cmUgcmF0aGVyIHRoYW5cbiAgICAvLyBsZWF2aW5nIGEgd2VkZ2Ugb2YgZGF5bGlnaHQgYXQgZXZlcnkgc3RhdGlvbi5cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGxlbiArIHQsIHQpO1xuICAgIGcuYXBwbHlNYXRyaXg0KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZUJhc2lzKHNpZGUsIGRpciwgbnJtKSk7XG4gICAgZy50cmFuc2xhdGUobWlkLngsIG1pZC55LCBtaWQueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICAvLyB3aWxsUmVhZEZyZXF1ZW50bHkga2VlcHMgdGhlIHRpbGUgb24gdGhlIENQVSByYXN0ZXIgcGF0aDogYSBHUFUtYmFja2VkIGNhbnZhcyBjb3N0cyBzZWNvbmRzIHBlclxuICAvLyB0aG91c2FuZCBwYXRoIGZpbGxzIHdoZXJlIHRoZSBzb2Z0d2FyZSBwYXRoIHRha2VzIHRlbnMgb2YgbWlsbGlzZWNvbmRzLlxuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuLyoqXG4gKiBTSE9SVCBGVVI6IGEgc2VhbWxlc3MgdGlsZSBvZiBkZW5zZSwgc2hvcnQsIGRpcmVjdGlvbmFsIGhhaXIgc3Ryb2tlcyBvdmVyIGEgY2xvdWR5IHRvbmUgZHJpZnQsIGFzIGFcbiAqIG11bHRpcGx5IG1hcCAoYW5kIGJ1bXApIG9uIGEgd2hpdGUgdmVydGV4LWNvbG91cmVkIGNvYXQuIFRoZSBzdHJva2VzIHJ1biBhbG9uZyB2IHdpdGggYSBqaXR0ZXJlZFxuICogbGVhbiBhbmQgYSBuYXJyb3cgdG9uZSBzcHJlYWQgLS0gYSB3aWRlIHNwcmVhZCByZWFkcyBhcyBzY2FsZXMsIGEgcGVyZmVjdCBsYXkgcmVhZHMgYXMgY29tYmVkXG4gKiBwbGFzdGljLiBgcGF0Y2hlc2AgYWRkcyBhIGZldyBzb2Z0IHBpbmstZ3JleSBiYXJlIHBhdGNoZXMsIHRoZSBtYW5nZSBtYXJrcyBvZiBhIHN0cmVldCBkb2cuXG4gKi9cbmZ1bmN0aW9uIGZ1clRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgdG9uZSA9IG8udG9uZSA/PyBbMC43MiwgMC42NiwgMC41OF0sIG0gPSBzICogMC4wNjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0IHVuZGVybmVhdGggc28gdGhlIGNvYXQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpLCBhID0gMC4wNCArIHJuZCgpICogMC4xMDtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHRvbmUpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IodG9uZSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBiYXJlIHBhdGNoZXM6IHNvZnQsIHNwYXJzZSwgd2FybSBncmV5LXBpbmtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4wNSksIHBjID0gby5wYXRjaFRvbmUgPz8gWzAuNzIsIDAuNTYsIDAuNTJdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocGMpfSwwLjU1KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihwYyl9LDAuMylgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHBjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAxLjMsIHIsIHJuZCgpICogTWF0aC5QSSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGhhaXIgc3Ryb2tlczogZGFyayBhbmQgbGlnaHQsIHNob3J0LCBsZWFuaW5nIHdpdGhpbiArLTIyIGRlZ3JlZXMgb2YgdlxuICAgIGNvbnN0IHN0cm9rZXMgPSBvLnN0cm9rZXMgPz8gNTAwMCwgbGVuID0gcyAqIChvLmxlbmd0aCA/PyAwLjAyMik7XG4gICAgY29uc3QgZHJhd1N0cm9rZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgdzogbnVtYmVyKSA9PiB7XG4gICAgICBjdHgubGluZVdpZHRoID0gdzsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgaWYgKHggPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgcywgeSk7IGN0eC5saW5lVG8oeCArIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeCA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgKyBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgLSBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgLSBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9O1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cm9rZXM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdGggPSAocm5kKCkgLSAwLjUpICogMC43OCwgbCA9IGxlbiAqICgwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgICBjb25zdCBsaWdodCA9IHJuZCgpIDwgMC40MjtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsaWdodCA/ICdzY3JlZW4nIDogJ211bHRpcGx5JztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpZ2h0ID8gYHJnYmEoMjU1LDI1MCwyNDAsJHswLjA1ICsgcm5kKCkgKiAwLjEwfSlgIDogYHJnYmEoJHtyZ2IodG9uZSl9LCR7MC4wNiArIHJuZCgpICogMC4xNH0pYDtcbiAgICAgIGRyYXdTdHJva2UoeCwgeSwgTWF0aC5zaW4odGgpICogbCwgTWF0aC5jb3ModGgpICogbCwgMC42ICsgcm5kKCkgKiAxLjIpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUOiBgaGVpZ2h0c1tqXVtpXWAgaXMgdGhlIHRvcCBzdXJmYWNlIGF0IHggPSB4MC4ueDEgKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlclxuICogbnopOyB0aGUgc2hlZXQgaXMgYHRgIHRoaWNrLiBUb3AgYW5kIHVuZGVyc2lkZSBhcmUgc21vb3RoLXNoYWRlZCBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXRcbiAqIHN0cmlwcyB3b3VuZCBvdXR3YXJkLiBBIHRhcnAgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnIGJldHdlZW4gaXRzIHBvbGVzIG1pbnVzIHRoZVxuICogZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICAvLyBgenNgIGdpdmVzIHRoZSB6IFNUQVRJT05TIGV4cGxpY2l0bHkgaW5zdGVhZCBvZiBkaXZpZGluZyB6MC4uejEgZXZlbmx5LiBBIHJvb2Ygd2hvc2UgZWF2ZSBhbmRcbiAgLy8gcmFrZSB3YW50IGEgbmFycm93IHJ1c3RlZCBiYW5kIG5lZWRzIHJvd3MgMC4xMCBtIGluIGZyb20gdGhlIGVkZ2UsIGFuZCByZWFjaGluZyB0aGF0IGJ5IHJhaXNpbmdcbiAgLy8gbnogYWxvbmUgd291bGQgbXVsdGlwbHkgdGhlIHdob2xlIGdyaWQgLS0gMTA0IGZsdXRlIGNvbHVtbnMgaXMgd2hhdCBtYWtlcyBhIHJvdyBleHBlbnNpdmUuXG4gIGNvbnN0IFpTOiBudW1iZXJbXSB8IG51bGwgPSBBcnJheS5pc0FycmF5KHMuenMpID8gcy56cyA6IG51bGw7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiAoWlMgPyBaU1tqXSA6IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56KTtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhUb3BgIC8gYGhleFVuZGVyYDogYSBjb2xvdXIgYXR0cmlidXRlIHdyaXR0ZW4gcGVyIGdyaWQsIHNvIGEgdGFycCBjYW4gYmUgYmx1ZSBvbiB0b3AgYW5kXG4gIC8vIG9yYW5nZSB1bmRlcm5lYXRoIG9uIE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gQSBjb21wb25lbnQgdGludCBjYW5ub3QgZG8gaXQgLS0gdGhlIHR3b1xuICAvLyBzdXJmYWNlcyBhcmUgbWlsbGltZXRyZXMgYXBhcnQgaW4geSwgc28gbm8gYXhpcyBibGVuZCBzZXBhcmF0ZXMgdGhlbSAtLSBhbmQgYSBzZWNvbmQgc2hlZXRcbiAgLy8gd291bGQgZG91YmxlIHRoZSByb29mJ3MgdHJpYW5nbGVzIGZvciBhIGNvbG91ci4gT21pdHRlZCwgdGhlIGdlb21ldHJ5IGlzIHVudGludGVkIGFzIGJlZm9yZS5cbiAgY29uc3QgcGFpbnQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4R3JpZFtqXVtpXWAgaXMgYSBjb2xvdXIgUEVSIFRPUC1HUklEIFZFUlRFWCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lIC0tIHdoaWNoIGlzIHRoZSBvbmx5IHdheVxuICAvLyB0byBwdXQgYSBtYXJrIGF0IGEga25vd24gcGxhY2Ugb24gdGhlIHNoZWV0LiBBIGNhbnZhcyB0aWxlIHJlcGVhdHMgYnkgd29ybGQgcG9zaXRpb24gYW5kIGtub3dzXG4gIC8vIG5vdGhpbmcgYWJvdXQgd2hlcmUgdGhlIGVhdmUgaXM7IGBoZXhUb3BgIGlzIG9uZSBmbGF0IHRvbmUgZm9yIHRoZSB3aG9sZSBzdXJmYWNlLiBUaGlzIGlzIHdoYXRcbiAgLy8gY2FycmllcyB0aGUgcnVzdGVkIGJhbmQgYWxvbmcgdGhlIGVhdmUgYW5kIHRoZSByYWtlcywgYW5kIHRoZSBzdGFpbmluZyBiZXNpZGUgZWFjaCBzaGVldCBsYXAuXG4gIGNvbnN0IHBhaW50R3JpZCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgSEc6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgbGV0IGsgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgYy5zZXRIZXgoSEdbal1baV0pOyBjb2xbaysrXSA9IGMucjsgY29sW2srK10gPSBjLmc7IGNvbFtrKytdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4R3JpZCAhPT0gdW5kZWZpbmVkXG4gICAgPyBbcGFpbnRHcmlkKHRvcDAsIHMuaGV4R3JpZCksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIgPz8gMHhmZmZmZmYpXVxuICAgIDogcy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtwYWludCh0b3AwLCBzLmhleFRvcCA/PyAweGZmZmZmZiksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIpXVxuICAgICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyBUaGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuIE9uIGFcbiAgLy8gcm9vZiBkZWNrIGl0IGlzIHRoZSBmbHV0ZWQgZWF2ZSwgd2hpY2ggaXMgd2hlcmUgdGhlIHJ1c3QgaXMsIHNvIGBoZXhSaW1gIG92ZXJyaWRlcyBpdC5cbiAgY29uc3QgcmltSGV4ID0gcy5oZXhSaW0gPz8gcy5oZXhVbmRlcjtcbiAgcGFydHMucHVzaCguLi4ocmltSGV4ICE9PSB1bmRlZmluZWQgPyBlZGdlcy5tYXAoKGcpID0+IHBhaW50KGcsIHJpbUhleCkpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKlxuICogV0VBVEhFUkVEIFBBSU5UIG9uIGEgc3RlZWwgY29udGFpbmVyOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIGNsZWFuIHBhaW50LCBydXN0XG4gKiBhbmQgY2hhbGtlZCBibG9vbSB0b2dldGhlci5cbiAqXG4gKiBUaGUgdGhyZWUgdG9uZXMgY2Fubm90IHJpZGUgYSBwbGFpbiBtdWx0aXBseSBvdmVyIHRoZSBjbGVhbiBwYWludCwgYmVjYXVzZSBhIGNoYWxrIGJsb29tIGlzXG4gKiBCUklHSFRFUiB0aGFuIHRoZSBwYWludCBpdCBzaXRzIG9uIGluIHR3byBjaGFubmVscyAtLSBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gU28gdGhlIHZlcnRleFxuICogY29sb3VyIGlzIFJFLUJBU0VEIHRvIGFuIGVudmVsb3BlIGFib3ZlIGV2ZXJ5IHRvbmUgdGhlIHRpbGUgaGFzIHRvIHJlYWNoIChgby5iYXNlYCBpcyB0aGUgY2xlYW5cbiAqIHBhaW50J3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlLCBhbmQgaXQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZCB3aXRoKSxcbiAqIGV4YWN0bHkgYXMgdGhlIGxpY2hlbi1vbi1zdG9uZSByb3V0ZSBkb2VzLiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBmaWxsIGlzIGRyYXduIHNvdXJjZS1vdmVyIGluXG4gKiBhYnNvbHV0ZSBtdWx0aXBsaWVyIHNwYWNlLCBzbyBhIG1hcmsgbWF5IGxhbmQgZWl0aGVyIHNpZGUgb2YgY2xlYW4uXG4gKlxuICogT3JkZXIgbWF0dGVycyBhbmQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3ZWF0aGVyaW5nIGFuZCBjYW1vdWZsYWdlOiBhIHNvZnQgY2xvdWR5IGRyaWZ0XG4gKiBmaXJzdCwgdGhlbiB0aGUgcnVzdCBhcyBjbHVzdGVyZWQgZ3JhbnVsYXIgcGF0Y2hlcyByYXRoZXIgdGhhbiBoYXJkIGJsb3RjaGVzLCB0aGVuIHRoZSBydW5zIGl0XG4gKiBsZWF2ZXMgQkVMT1cgaXRzZWxmLCB0aGVuIHRoZSBjaGFsayBibG9vbXMsIHRoZW4gYSBmaW5lIGdyYWluIG92ZXIgdGhlIGxvdC5cbiAqL1xuZnVuY3Rpb24gcGFpbnRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGNoYWxrID0gby5jaGFsayA/PyBiYXNlO1xuICAgIGNvbnN0IHJ1biA9IG8ucnVuID8/IHJ1c3Q7XG4gICAgLy8gd3JhcCBldmVyeSBtYXJrIHRocmVlIHdheXMgc28gbm90aGluZyBpcyBjdXQgYnkgdGhlIHRpbGUgZWRnZVxuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICAvLyBgaGFyZGAga2VlcHMgdGhlIG1hcmsgYXQgZnVsbCBhbHBoYSB0byAwLjcyIG9mIGl0cyByYWRpdXMgYW5kIGRyb3BzIGl0IG92ZXIgdGhlIGxhc3QgcXVhcnRlcjpcbiAgICAvLyBhIHJ1c3QgYmxvb20gb3ZlciBpdHMgQ09NUExFTUVOVCAodGVhbCkgYmxlbmRzIHRvIGEgbmV1dHJhbCBncmV5IGFsb25nIGEgc29mdCBlZGdlLCBhbmQgdGhlXG4gICAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZHMgdGhhdCByaW5nIGFzIGJhY2tkcm9wIC0tIGEgcmVhbCBibG9vbSBoYXMgYSBncmFudWxhciwgbm90IGEgZmVhdGhlcmVkLCBlZGdlLlxuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCBoYXJkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoaGFyZCA/IDAuNzIgOiAwLjU1LCBgcmdiYSgke3JnYihjKX0sJHtoYXJkID8gYSA6IGEgKiAwLjQ1fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gMS4gY2xvdWR5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCBiYXJlbHkgb2ZmIGNsZWFuIC0tIHdoYXQgc3RvcHMgdGhlIGZsYXQgYXJlYXMgcmVhZGluZyBhcyBwYWludCBjaGlwcyBvbiBwbGFzdGljXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNCk7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHJuZCgpIDwgMC41ID8gcnVzdCA6IGNoYWxrO1xuICAgICAgYmxvYihjLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE4ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMDUgKyBybmQoKSAqIDAuMDcsIDAuNiArIHJuZCgpICogMC44KTtcbiAgICB9XG5cbiAgICAvLyAyLiBydXN0OiBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggd2l0aCBncmFudWxhciBzcGVja3Mgb3ZlciBpdC4gQmFyZSBzdGVlbCBjb3Jyb2RlcyBpblxuICAgIC8vICAgIGZpZWxkcywgbm90IGluIGRvdHM7IGEgc3BlY2sgZmllbGQgd2l0aCBubyBwYXRjaCB1bmRlciBpdCByZWFkcyBhcyBjb25mZXR0aS5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxNik7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4xMSkgKiAoby5jbHVzdGVyU2NhbGUgPz8gMSk7XG4gICAgICAvLyBUaGUgY2x1c3RlciBwYXRjaCdzIE9QQUNJVFkuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWQgc291cmNlLW92ZXIgb24gdGhlIGJhc2UgZmlsbCwgc28gYVxuICAgICAgLy8gY2x1c3RlciBhdCBhbHBoYSAwLjMwLTAuNjUgYmxlbmRzIHRvIGFuIGludGVybWVkaWF0ZSB0b25lIGFuZCBvbmx5IHRoZSBzcGVja3Mgb3ZlciBpdCBldmVyXG4gICAgICAvLyByZWFjaCB0aGUgYXV0aG9yZWQgcnVzdCAtLSB3aGljaCBpcyByaWdodCBmb3IgYSBydXN0IEJMT09NIG9uIHBhaW50ZWQgc3RlZWwgYW5kIHdyb25nIGZvclxuICAgICAgLy8gdGhlIGJvbGQgY2hpcHBlZCBwYXRjaGVzIGEgcGVlbGluZyBsaWQgY2Fycmllcywgd2hlcmUgYmFyZSBtZXRhbCBpcyBzaW1wbHkgZXhwb3NlZC5cbiAgICAgIC8vIERlZmF1bHRzIGFyZSB0aGUgcHJldmlvdXMgY29uc3RhbnRzIGV4YWN0bHksIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAoby5ydXN0QWxwaGEgPz8gMC4zMCkgKyBybmQoKSAqIChvLnJ1c3RBbHBoYVZhciA/PyAwLjM1KSwgMC43ICsgcm5kKCkgKiAwLjYsIG8uaGFyZEVkZ2VzID09PSB0cnVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyA0MCk7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG8uc3BlY2tSdW4gPyBydW4gOiBydXN0KX0sJHsoby5zcGVja0FscGhhID8/IDAuMjUpICsgcm5kKCkgKiAoby5zcGVja0FscGhhVmFyID8/IDAuNSl9KWA7ICAgLy8gc3BlY2tSdW46IGRhcmtlciBzcGVja3MgdGhhdCB0ZXh0dXJlIGFuIG9wYXF1ZSBibG9vbVxuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJ1biBpdCBsZWF2ZXMgYmVsb3cgaXRzZWxmOiBydXN0IGJsZWVkcyBET1dOIGEgdmVydGljYWwgcGFuZWwgYW5kIG5vd2hlcmUgZWxzZVxuICAgICAgaWYgKHJuZCgpIDwgKG8ucnVuQ2hhbmNlID8/IDAuNTUpKSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zNSk7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmEgPSAoby5ydW5BbHBoYSA/PyAwLjE2KSArIHJuZCgpICogMC4xODtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGlmIChvLmhhcmRFZGdlcykgZy5hZGRDb2xvclN0b3AoMC45MiwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBjaGFsayBibG9vbTogbGFyZ2UsIHZlcnkgc29mdCwgbG93LWNvbnRyYXN0LiBJdCBpcyB0aGUgdG9uZSB0aGUgdGlsZSB3YXMgcmUtYmFzZWQgZm9yLlxuICAgIGNvbnN0IGNzY2FsZSA9IG8uY2hhbGtTY2FsZSA/PyAxLCBjYWxwaGEgPSBvLmNoYWxrQWxwaGEgPz8gMC4zNTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyA5KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKSAqIGNzY2FsZTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIGNhbHBoYSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4yNTtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjcsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHRoZSB0d28gbWFya3MgdGhhdCBvbmx5IG1ha2Ugc2Vuc2Ugb25jZSB0aGUgdGlsZSBpcyBIRUlHSFQta2V5ZWQ6IGxvbmcgcnVucyBibGVlZGluZyBkb3duXG4gICAgLy8gICAgZnJvbSB0aGUgdG9wIGVkZ2UgKHRoZSB0b3AgcmFpbCBpcyB3aGVyZSB3YXRlciBzaXRzIGFuZCB0aGUgcGFpbnQgZ29lcyBmaXJzdCkgYW5kIGEgZGlydFxuICAgIC8vICAgIGJhbmQgYWxvbmcgdGhlIGJvdHRvbS4gQm90aCBhcmUgbm8tb3BzIG9uIGEgd29ybGQtc3BhY2UgdGlsZSwgd2hlcmUgdGhlcmUgaXMgbm8gdXAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby50b3BTdHJlYWtzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKG8uc3RyZWFrV2lkdGggPz8gMC4wMTQpLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IChvLnN0cmVha0FscGhhID8/IDAuMTApICsgcm5kKCkgKiAwLjIyO1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3Aoby5oYXJkRWRnZXMgPyAwLjkyIDogMC4yNSwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7by5oYXJkRWRnZXMgPyBhIDogYSAqIDAuOH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyA0Yi4gQVRMQVMgbWFya3MgZm9yIGEgdGlsZSBtYXBwZWQgT05DRSB1cCBhIHByb3AgKGN5bFVWIHdpdGggdGhlIHRpbGUgaGVpZ2h0ID0gdGhlIHByb3AgaGVpZ2h0KTpcbiAgICAvLyAgICAgYGhiYW5kc2AgcGFpbnRzIGEgdG9uZSBhY3Jvc3MgYSBob3Jpem9udGFsIGJhbmQgb2YgdiAoYSBydXN0ZWQgY2hpbWUsIGEgd29ybiBob29wIGNyb3duKSxcbiAgICAvLyAgICAgYGJhbmRTdHJlYWtzYCBoYW5ncyBydW5zIGZyb20gYSBnaXZlbiB2ICh3YXRlciBzaXRzIG9uIGEgcm9sbGluZyBob29wIGFuZCBibGVlZHMgZG93biBmcm9tIGl0LFxuICAgIC8vICAgICBleGFjdGx5IGFzIGl0IGRvZXMgZnJvbSB0aGUgdG9wIGVkZ2UpLCBhbmQgYHN0ZW5jaWxgIGEgcGFpbnRlZCBtYXJrIGF0ICh1LCB2KS4gdiBpcyB1cC5cbiAgICBmb3IgKGNvbnN0IGhiIG9mIChvLmhiYW5kcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHkwID0gcyAqICgxIC0gaGIudjEpLCB5MSA9IHMgKiAoMSAtIGhiLnYwKSwgdG9uZSA9IGhiLnRvbmUgPz8gcnVzdDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih0b25lKX0sJHtoYi5hbHBoYSA/PyAwLjh9KWA7IGN0eC5maWxsUmVjdCgwLCB5MCwgcywgeTEgLSB5MCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChoYi5zcGVja3MgPz8gMCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0geTAgKyBybmQoKSAqICh5MSAtIHkwKSwgciA9IDAuOCArIHJuZCgpICogMi4yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iocm5kKCkgPCAwLjUgPyBydW4gOiBiYXNlKX0sJHswLjIgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGJzIG9mIChvLmJhbmRTdHJlYWtzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeTAgPSBzICogKDEgLSBicy52KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGJzLmNvdW50ID8/IDEyKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKGJzLndpZHRoID8/IDAuMDEyKSwgbGVuID0gcyAqICgoYnMubGVuID8/IDAuMTIpICsgcm5kKCkgKiAoYnMubGVuVmFyID8/IDAuMjUpKTtcbiAgICAgICAgY29uc3QgYSA9IChicy5hbHBoYSA/PyAwLjE0KSArIHJuZCgpICogMC4yMjtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChvLmhhcmRFZGdlcyA/IDAuOTIgOiAwLjMsIGByZ2JhKCR7cmdiKHJ1c3QpfSwke28uaGFyZEVkZ2VzID8gYSA6IGEgKiAwLjh9KWApO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAgLSAyLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoby5zdGVuY2lsKSB7XG4gICAgICBjb25zdCBzdCA9IG8uc3RlbmNpbCwgcHggPSBzICogKHN0LnNpemUgPz8gMC4wNik7XG4gICAgICBjdHguZm9udCA9IGBib2xkICR7cHh9cHggc2Fucy1zZXJpZmA7IGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJzsgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHN0LnRvbmUgPz8gY2hhbGspfSwke3N0LmFscGhhID8/IDAuODV9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsVGV4dChzdC50ZXh0LCBzICogKHN0LnUgPz8gMC41KSArIGR4LCBzICogKDEgLSAoc3QudiA/PyAwLjUpKSk7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIFNXRVBUIHBvbHlsaW5lIHR1YmU6IE9ORSByaW5nIG9mIGBzZWdgIHZlcnRpY2VzIHBlciBwb2ludCwgbWl0cmVkIGF0IGV2ZXJ5IGJlbmQsIGluZGV4ZWQgYW5kXG4gKiBzbW9vdGgtc2hhZGVkLiBUaGlzIGlzIG5vdCB3aGF0IGB0dWJlYCBkb2VzLCBhbmQgdGhlIGRpZmZlcmVuY2UgaXMgYSB2aXNpYmxlIGRlZmVjdCByYXRoZXIgdGhhbiBhXG4gKiByZWZpbmVtZW50LiBgdHViZWAgY2hhaW5zIGEgc2VwYXJhdGUgY3lsaW5kZXIgcGVyIHNlZ21lbnQgYW5kIEVYVEVORFMgZWFjaCBvbmUgYnkgYHIgKiAxLjJgIHNvIHRoZVxuICogam9pbnRzIGNsb3NlIC0tIHdoaWNoIGlzIGZpbmUgd2hpbGUgdGhlIHNlZ21lbnRzIGFyZSBsb25nLCBhbmQgY2F0YXN0cm9waGljIG9uIGEgdGlnaHQgY3VydmU6IGFcbiAqIDAuMTIgbSBjb3JuZXIgcmFkaXVzIHNhbXBsZWQgaW4gZml2ZSBzdGVwcyBoYXMgYSAwLjAzOCBtIGNob3JkIGFnYWluc3QgYSAwLjAyNSBtIG92ZXJsYXAsIHNvXG4gKiBjb25zZWN1dGl2ZSBjeWxpbmRlcnMgb3ZlcnNob290IGVhY2ggb3RoZXIgYnkgdHdvIHRoaXJkcyBvZiB0aGVpciBsZW5ndGggYW5kIHRoZSBiZW5kIHJlbmRlcnMgYXMgYVxuICogY3J1bXBsZWQgYWNjb3JkaW9uIG9mIHBsZWF0cy4gVGhlIGNyb3dkIGJhcnJpZXIncyByb3VuZGVkIHRvcCBjb3JuZXJzIHNoaXBwZWQgdGhhdCB3YXkuXG4gKlxuICogVGhlIGZyYW1lIGlzIHJvdGF0aW9uLW1pbmltaXNpbmcgKHBhcmFsbGVsIHRyYW5zcG9ydCksIG5vdCBGcmVuZXQ6IGEgRnJlbmV0IGZyYW1lIGZsaXBzIGl0cyBub3JtYWxcbiAqIHRocm91Z2ggYW4gaW5mbGVjdGlvbiBhbmQgdHdpc3RzIHRoZSB0dWJlLCB3aGljaCBhIFVWIG9yIGEgdmVydGV4IGNvbG91ciB0aGVuIHNob3dzIGFzIGEgc3RyaXBlXG4gKiBzcGlyYWxsaW5nIGFsb25nIGEgcmFpbCB0aGF0IGlzIG1lYW50IHRvIGJlIHN0cmFpZ2h0LiBJbnRlcmlvciBwb2ludHMgcmluZyBvbiB0aGUgQklTRUNUT1Igb2YgdGhlXG4gKiB0d28gYWRqYWNlbnQgdGFuZ2VudHMsIHdoaWNoIGlzIHRoZSBtaXRyZSBhIHJlYWwgYmVudCB0dWJlIGhhcy5cbiAqL1xuZnVuY3Rpb24gc3dlZXBUdWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSAxMCwgaGV4PzogbnVtYmVyLCBjYXAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBQID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSkpO1xuICAvLyBkcm9wIHJlcGVhdGVkIHBvaW50czogYSB6ZXJvLWxlbmd0aCBzZWdtZW50IGhhcyBubyB0YW5nZW50LCBhbmQgb25lIGR1cGxpY2F0ZSBpcyBlbm91Z2ggdG9cbiAgLy8gcHV0IGEgTmFOIHRocm91Z2ggdGhlIHdob2xlIHRyYW5zcG9ydCBjaGFpblxuICBmb3IgKGxldCBpID0gUC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSBpZiAoUFtpXS5kaXN0YW5jZVRvKFBbaSAtIDFdKSA8IDFlLTcpIFAuc3BsaWNlKGksIDEpO1xuICBpZiAoUC5sZW5ndGggPCAyKSByZXR1cm4gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGNvbnN0IG4gPSBQLmxlbmd0aDtcbiAgY29uc3Qgc2VnRGlyOiBUSFJFRS5WZWN0b3IzW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBzZWdEaXIucHVzaChQW2kgKyAxXS5jbG9uZSgpLnN1YihQW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHBlci1wb2ludCB0YW5nZW50OiB0aGUgc2VnbWVudCBkaXJlY3Rpb24gYXQgdGhlIGVuZHMsIHRoZSBiaXNlY3RvciBiZXR3ZWVuIHR3byBzZWdtZW50cyBpbnNpZGVcbiAgY29uc3QgVCA9IFAubWFwKChfLCBpKSA9PiBpID09PSAwID8gc2VnRGlyWzBdLmNsb25lKClcbiAgICA6IGkgPT09IG4gLSAxID8gc2VnRGlyW24gLSAyXS5jbG9uZSgpXG4gICAgOiBzZWdEaXJbaSAtIDFdLmNsb25lKCkuYWRkKHNlZ0RpcltpXSkubm9ybWFsaXplKCkpO1xuICAvLyBzZWVkIGEgbm9ybWFsIHRoYXQgaXMgbm90IHBhcmFsbGVsIHRvIHRoZSBmaXJzdCB0YW5nZW50LCB0aGVuIHRyYW5zcG9ydCBpdCBwb2ludCB0byBwb2ludFxuICBsZXQgTiA9IE1hdGguYWJzKFRbMF0ueSkgPiAwLjkgPyBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSA6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICBOLnN1YihUWzBdLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFswXSkpKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyByb3RhdGUgdGhlIGNhcnJpZWQgbm9ybWFsIGJ5IHRoZSBzYW1lIHJvdGF0aW9uIHRoYXQgdGFrZXMgdGhlIHByZXZpb3VzIHRhbmdlbnQgdG8gdGhpcyBvbmVcbiAgICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhUW2kgLSAxXSwgVFtpXSk7XG4gICAgICBOLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICAgIE4uc3ViKFRbaV0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUW2ldKSkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBCID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoVFtpXSwgTikubm9ybWFsaXplKCk7XG4gICAgLy8gYSBtaXRyZWQgcmluZyBpcyBhbiBFTExJUFNFIGluIGl0cyBvd24gcGxhbmU6IHdpZGVuIGl0IGJ5IDEvY29zKGhhbGYtYW5nbGUpIGFsb25nIHRoZSBiZW5kIHNvXG4gICAgLy8gdGhlIHN3ZXB0IHNlY3Rpb24gc3RheXMgY2lyY3VsYXIgdGhyb3VnaCB0aGUgY29ybmVyIHJhdGhlciB0aGFuIHBpbmNoaW5nIHRvIGEgd2Fpc3RcbiAgICBjb25zdCBrID0gaSA+IDAgJiYgaSA8IG4gLSAxID8gMSAvIE1hdGgubWF4KDAuNSwgc2VnRGlyW2kgLSAxXS5kb3QoVFtpXSkpIDogMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh0aCksIHMgPSBNYXRoLnNpbih0aCk7XG4gICAgICBwb3MucHVzaChQW2ldLnggKyAoTi54ICogYyArIEIueCAqIHMgKiBrKSAqIHIsIFBbaV0ueSArIChOLnkgKiBjICsgQi55ICogcyAqIGspICogciwgUFtpXS56ICsgKE4ueiAqIGMgKyBCLnogKiBzICogaykgKiByKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgLy8gKGEsIGMyLCBiKSwgTk9UIChhLCBiLCBjMikuIFRoZSByaW5nIHJ1bnMgTiAtPiBCIHdpdGggQiA9IFQgeCBOLCBzbyB3aW5kaW5nIGFsb25nIHRoZSB0dWJlXG4gICAgLy8gZmlyc3QgYW5kIGFyb3VuZCBpdCBzZWNvbmQgZ2l2ZXMgYSBmYWNlIG5vcm1hbCBvZiBUIHggQiA9IC1OOiBldmVyeSB3YWxsIHRyaWFuZ2xlIGZhY2VzIElOV0FSRC5cbiAgICAvLyBCYWNrZmFjZSBjdWxsaW5nIHRoZW4gaGlkZXMgdGhlIG5lYXIgd2FsbCBhbmQgc2hvd3MgdGhlIEZBUiBvbmUsIHdoaWNoIGZvciBhIGxpdCBncmV5IHR1YmUgbG9va3NcbiAgICAvLyBhbG1vc3QgcmlnaHQgLS0gYW5kIHdyaXRlcyBpdHMgZGVwdGggb24gdGhlIGZhciBzaWRlLCBzbyBhbnl0aGluZyBwYXNzaW5nIHRocm91Z2ggdGhlIHR1YmUgZHJhd3NcbiAgICAvLyBpbiBmcm9udCBvZiBpdC4gVGhlIGZvb3Qgc3R1YnMgc3Rvb2QgcHJvdWRseSB0aHJvdWdoIHRoZSBib3R0b20gcmFpbCBiZWNhdXNlIG9mIHRoaXMsIGFuZCBpdFxuICAgIC8vIHJlYWQgYXMgYSBnZW9tZXRyeSBlcnJvciBpbiB0aGUgc3R1YiByYXRoZXIgdGhhbiBhIHdpbmRpbmcgZXJyb3IgaW4gdGhlIHN3ZWVwLlxuICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjMiA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgaWR4LnB1c2goYSwgYzIsIGIsIGEsIGQsIGMyKTtcbiAgfVxuICBpZiAoY2FwKSB7XG4gICAgLy8gRmxhdCBlbmQgZGlzY3MsIG9uIHRoZWlyIE9XTiBDT1BZIG9mIHRoZSByaW0gdmVydGljZXMuIEZhbm5pbmcgdGhlbSBvZmYgdGhlIHNpZGUgd2FsbCdzIHJpbmdcbiAgICAvLyBzaGFyZXMgdGhvc2UgdmVydGljZXMsIGFuZCBgY29tcHV0ZVZlcnRleE5vcm1hbHNgIHRoZW4gYXZlcmFnZXMgdGhlIGRpc2MncyBheGlhbCBub3JtYWwgaW50b1xuICAgIC8vIHRoZSB3YWxsJ3MgcmFkaWFsIG9uZSAtLSB3aGljaCBkb2VzIG5vdCBzaGFkZSBhIHNsaWdodGx5IHdyb25nIHJpbSwgaXQgdGlsdHMgdGhlIG5vcm1hbCBhdCBCT1RIXG4gICAgLy8gZW5kcyBvZiBhIHR3by1wb2ludCB0dWJlIGFuZCBzbyBzaGFkZXMgdGhlIFdIT0xFIHR1YmUgd3JvbmcuIFRoZSBmb290IHN0dWJzIHJlbmRlcmVkIGFzIGdsYXNzXG4gICAgLy8gdGVzdCB0dWJlcyB3aXRoIGEgYnJpZ2h0IGJhbmQgdW5kZXIgdGhlIHJhaWwsIGFuZCB0aGUgYmFuZCByZWFkIGFzIGEgc2VwYXJhdGUgb2JqZWN0IHNpdHRpbmcgb25cbiAgICAvLyBpdC4gU2FtZSBmYXVsdCwgc2FtZSBmaXgsIGFzIHRoZSBzaGFycC1jb3JuZXIgc3BsaXQgaW4gYGxhdGhlYC5cbiAgICBmb3IgKGNvbnN0IFtyaW5nLCBhdCwgZmxpcF0gb2YgW1swLCBQWzBdLCB0cnVlXSwgW24gLSAxLCBQW24gLSAxXSwgZmFsc2VdXSBhcyBbbnVtYmVyLCBUSFJFRS5WZWN0b3IzLCBib29sZWFuXVtdKSB7XG4gICAgICBjb25zdCBiYXNlID0gcG9zLmxlbmd0aCAvIDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7IGNvbnN0IGsgPSAocmluZyAqIHNlZyArIGopICogMzsgcG9zLnB1c2gocG9zW2tdLCBwb3NbayArIDFdLCBwb3NbayArIDJdKTsgfVxuICAgICAgY29uc3QgY2kgPSBwb3MubGVuZ3RoIC8gMzsgcG9zLnB1c2goYXQueCwgYXQueSwgYXQueik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiYXNlICsgaiwgYiA9IGJhc2UgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZiAoZmxpcCkgaWR4LnB1c2goY2ksIGIsIGEpOyBlbHNlIGlkeC5wdXNoKGNpLCBhLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBoZXgpO1xufVxuXG4vKipcbiAqIEZST05ULUFUTEFTIFVWczogZXZlcnkgdmVydGV4IHdob3NlIG5vcm1hbCBmYWNlcyArWiBhbmQgdGhhdCBsaWVzIGluc2lkZSB0aGUgYXRsYXMncyB3b3JsZFxuICogcmVjdGFuZ2xlIHRha2VzIGEgUExBTkFSICh4LCB5KSBVViBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGltYWdlLCBhbmQgZXZlcnkgb3RoZXIgdmVydGV4IGlzXG4gKiBwaW5uZWQgdG8gb25lIGNsZWFuIHRleGVsIG9mIGl0LiBBIHdhbGwtbW91bnRlZCBib3ggc2VlbiBmcm9tIHRoZSBmcm9udCBJUyBpdHMgZWxldmF0aW9uLCBzbyB0aGVcbiAqIHBsYXRlJ3Mgb3duIHByaW50ZWQgbGFiZWxzLCBzY3JldyBoZWFkcywgZ2Fza2V0IGxpbmUgYW5kIHJ1c3QgbGFuZCBleGFjdGx5IHdoZXJlIHRoZSBnZW9tZXRyeVxuICogcHV0cyB0aGVtLCBvbiBvbmUgbWF0ZXJpYWwuIGBiYXNlYCBvdmVycmlkZXMgdGhlIGZyb250IHZlcnRpY2VzJyBjb2xvdXIsIGJlY2F1c2UgdGhlIGF0bGFzIGlzIGFcbiAqIHJhdGlvIG92ZXIgb25lIHJlZmVyZW5jZSB0b25lIGFuZCB0aGUgcGVyLXBhcnQgdGludHMgb25seSBiZWxvbmcgb24gdGhlIGZhY2VzIHRoZSBhdGxhcyBkb2VzIG5vdFxuICogcmVhY2guIGB5TWluYCBrZWVwcyBwYXJ0cyBoYW5naW5nIGJlbG93IHRoZSBhdGxhcyAoYSBjb25kdWl0IHN0dWIpIG91dCBvZiBpdC5cbiAqL1xuZnVuY3Rpb24gZnJvbnRBdGxhc1VWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGE6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCBjb2wgPSBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gIGNvbnN0IGJhc2UgPSBhLmJhc2UgIT09IHVuZGVmaW5lZCA/IG5ldyBUSFJFRS5Db2xvcihhLmJhc2UpIDogbnVsbDtcbiAgY29uc3QgbWluTnogPSBhLm1pbk56ID8/IDAuNztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpO1xuICAgIGNvbnN0IGZyb250ID0gbnJtLmdldFooaSkgPiBtaW5OeiAmJiB4ID49IGEueDAgJiYgeCA8PSBhLngxICYmIHkgPj0gKGEueU1pbiA/PyBhLnkxKSAmJiB5IDw9IGEueTA7XG4gICAgaWYgKGZyb250KSB7XG4gICAgICB1dltpICogMl0gPSAoeCAtIGEueDApIC8gKGEueDEgLSBhLngwKTtcbiAgICAgIHV2W2kgKiAyICsgMV0gPSAoeSAtIGEueTEpIC8gKGEueTAgLSBhLnkxKTtcbiAgICAgIGlmIChiYXNlICYmIGNvbCkgY29sLnNldFhZWihpLCBiYXNlLnIsIGJhc2UuZywgYmFzZS5iKTtcbiAgICB9IGVsc2UgeyB1dltpICogMl0gPSBhLnBpblswXTsgdXZbaSAqIDIgKyAxXSA9IGEucGluWzFdOyB9XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2wpIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiBnZW87XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGMyKSBicm9hZCBDTE9VRCBtb3R0bGluZyxcbiAqIChkKSBzd2VwdCB0eXJlIFNDVUZGUyBvdmVyIGFcbiAqIGhlaWdodCBiYW5kLCAoZSkgdmVydGljYWwgZm9ybSBTRUFNUywgKGYpIFBJTkhPTEVTIC0tIHRoZSBhaXIgYnViYmxlcyBvZiBhIHByZWNhc3QgZmFjZSwgKGcpXG4gKiBvcHRpb25hbCBncmVlbiBtb3NzL2FsZ2FlIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoaCkgZmluZSBncmFpbi4gKGQpLCAoZSlcbiAqIGFuZCAoZikgYXJlIG9mZiB1bmxlc3MgYXNrZWQgZm9yLCBzbyBub3RoaW5nIGFscmVhZHkgZW1pdHRlZCBjaGFuZ2VzLiBFdmVyeSBjb2xvdXIgaXMgYSBmcmFjdGlvbiBvZiB0aGVcbiAqIG1hdGVyaWFsJ3MgbWVhc3VyZWQgYWxiZWRvLCBhbmQgdGhlIGRhcmtlc3QgY29yZSBpcyBjbGFtcGVkIHNvIG5vdGhpbmcgb24gYSB3aGl0ZSBvciBjcmVhbVxuICogc3VyZmFjZSBkcm9wcyB0b3dhcmQgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguXG4gKi9cbmZ1bmN0aW9uIGdyaW1lVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IFswLjYyLCAwLjYyLCAwLjU4XSwgd2FzaEEgPSBvLndhc2hBbHBoYSA/PyAwLjcsIGNvdiA9IG8uY292ZXJhZ2UgPz8gMC4zO1xuICAgIC8vIGBiYXNlYCBpcyB0aGUgdG9uZSB0aGUgVU4tZ3JpbWVkIHBhcnQgb2YgdGhlIHRpbGUgY2FycmllcywgZGVmYXVsdGluZyB0byB3aGl0ZSAtLSBpLmUuIHRvXG4gICAgLy8gXCJsZWF2ZSB0aGUgdmVydGV4IGNvbG91ciBhbG9uZVwiLCB3aGljaCBpcyBldmVyeSBleGlzdGluZyBjYWxsZXIuIEl0IGV4aXN0cyBmb3IgRU5WRUxPUEVcbiAgICAvLyBSRS1CQVNJTkc6IGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBhIHBhcnQgdGhhdCBtdXN0IHJlYWQgY2xlYW4gb3JhbmdlIGluIG9uZSBwbGFjZSBhbmRcbiAgICAvLyBncmV5IHJvYWQgZ3JpbWUgaW4gYW5vdGhlciBjYW5ub3QgZG8gaXQgZnJvbSBhIHNpbmdsZSB2ZXJ0ZXggY29sb3VyLCBiZWNhdXNlIHRoZSBncmltZSBpc1xuICAgIC8vIEhJR0hFUiBpbiBibHVlIHRoYW4gdGhlIG9yYW5nZSBpcy4gVGhlIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgbWF4aW11bSBvZiBib3RoXG4gICAgLy8gYW5kIHRoaXMgZmlsbCBwYWludHMgdGhlIGNsZWFuIHRvbmUgYmFjayBvdXQgb2YgaXQuXG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICAvLyByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEyLCBsZW4gPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNiksIGEgPSAwLjA1ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguZmlsbFJlY3QoeCwgMCwgdywgbGVuKTsgY3R4LmZpbGxSZWN0KHggLSBzLCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBncm91bmQgd2FzaC4gYHdhc2hGbGF0YCBtYWtlcyBpdCBVTklGT1JNIGluc3RlYWQgb2YgYSBib3R0b20tdXAgZ3JhZGllbnQsIHdoaWNoIGlzIHdoYXQgYVxuICAgIC8vIGhvcml6b250YWwgc2xhYiBuZWVkczogYSBncmFkaWVudCBrZXllZCB0byB0aGUgdGlsZSdzIHYgbWFwcyBzdHJhaWdodCBhY3Jvc3MgYSBmbGF0IGZhY2UgYW5kXG4gICAgLy8gc3BsaXRzIGl0IGludG8gYSBwYWxlIGhhbGYgYW5kIGEgZGFyayBoYWxmIHdpdGggYSBoYXJkIGVkZ2UgYmV0d2VlbiB0aGVtLiBEZWZhdWx0ZWQgb2ZmLCBzb1xuICAgIC8vIGV2ZXJ5IHByb3AgdGhhdCBkb2VzIG5vdCBhc2sgZm9yIGl0IGlzIHVuY2hhbmdlZC5cbiAgICBpZiAoby53YXNoRmxhdCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292KSk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEEgKiAwLjQ1fSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cbiAgICAvLyBibG90Y2hlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uYmxvdGNoZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDYsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjM7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBSVUJTOiBuZWFyLWJsYWNrIHR5cmUgc21lYXJzIGxvdyBvbiB0aGUgdGlsZS4gRGlzdGluY3QgZnJvbSBgYmxvdGNoZXNgLCB3aGljaCBkYXJrZW4gdG93YXJkXG4gICAgLy8gdGhlIGdyaW1lIHRvbmU6IGEgdHlyZSBydWIgaXMgYSBkaWZmZXJlbnQgY29sb3VyIGFuZCBhIGRpZmZlcmVudCBzaGFwZSAtLSBsb25nLCBsb3csIGFuZCBtdWNoXG4gICAgLy8gZGFya2VyIHRoYW4gYW55dGhpbmcgd2VhdGhlciBkb2VzLiBEZWZhdWx0IDAsIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgIGlmIChvLnJ1YnMpIHtcbiAgICAgIGNvbnN0IHJ1YiA9IG8ucnViID8/IFswLjMwLCAwLjI4LCAwLjMwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5ydWJzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgKiAoMC42MCArIHJuZCgpICogMC4zOCk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMjIpLCBoID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wMzApLCBhID0gMC4yMCArIHJuZCgpICogMC40NTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCAtIHcgLyAyLCAwLCB4ICsgdyAvIDIsIDApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2IocnViKX0sJHthfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCAtIHcgLyAyICsgZHgsIHkgLSBoIC8gMiwgdywgaCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNDVUZGUzogc29mdCBwYXRjaGVzIHdoZXJlIHRoZSB3YXNoIGlzIGVyYXNlZCBiYWNrIHRvd2FyZCB3aGl0ZS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZFxuICAgIC8vIG11bHRpcGx5LW9uLXdoaXRlLCBzbyBwYWludGluZyB3aGl0ZSBzb3VyY2Utb3ZlciBpcyBwYWludGluZyBcIm5vdCBkYXJrZW5lZFwiIC0tIHdoaWNoIGlzIHRoZVxuICAgIC8vIG9ubHkgd2F5IGEgbXVsdGlwbHkgdGlsZSBjYW4gcHV0IFBBTEUgd2VhciBvbiBhIGRhcmsgYmFzZSB3aXRob3V0IHJlLWJhc2luZyB0aGUgZW52ZWxvcGVcbiAgICAvLyB0d2ljZS4gRGVmYXVsdGVkIHRvIG5vbmUuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAoby5zY3VmZlNjYWxlID8/IDAuMTQpKTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjU1LDI1NSwke28uc2N1ZmZBbHBoYSA/PyAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIH1cblxuICAgIC8vIENMT1VEUzogYnJvYWQsIHZlcnkgc29mdCBwYXRjaGVzIG92ZXIgdGhlIFdIT0xFIHRpbGUuIEEgY2FzdCBmYWNlIGlzIG1vdHRsZWQgYXQgdGhlIHNjYWxlIG9mXG4gICAgLy8gdGVucyBvZiBjZW50aW1ldHJlcyAtLSBwb3VyIGxpbmVzLCBkYW1wLCB0aGUgbW91bGQncyBvd24gaGlzdG9yeSAtLSBhbmQgdGhhdCBsb3cgZnJlcXVlbmN5IGlzXG4gICAgLy8gbW9zdCBvZiB3aGF0IHNlcGFyYXRlcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBvZiA2IGZyb20gdGhlIHBsYXRlJ3MgMTIuIFNtYWxsIG1hcmtzXG4gICAgLy8gY2Fubm90IHN1cHBseSBpdDogYXQgcHJvcCBkaXN0YW5jZSBhIHRob3VzYW5kIG9mIHRoZW0gYXZlcmFnZSBiYWNrIG91dCB0byBvbmUgZmxhdCB0b25lLlxuICAgIC8vIEtlZXAgdGhlbSBTTUFMTCByZWxhdGl2ZSB0byB0aGUgdGlsZSwgdGhvdWdoLiBBIHRpbGUgdGhhdCByZXBlYXRzIHR3byBvciB0aHJlZSB0aW1lcyBhY3Jvc3MgYVxuICAgIC8vIHByb3AgcmVwZWF0cyBpdHMgY2xvdWRzIHRvbywgYW5kIGEgY2xvdWQgdGhlIHNpemUgb2YgYSB0aGlyZCBvZiB0aGUgdGlsZSB0aGVuIHJlYWRzIGFzXG4gICAgLy8gY2Ftb3VmbGFnZSB3aXRoIGEgdmlzaWJsZSBzZWFtIC0tIHRoZSBzYW1lIGZhaWx1cmUgYXMgaGFyZCBibG90Y2hlcywgb25lIG9jdGF2ZSBsb3dlci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5jbG91ZCA/PyBbMC44NiwgMC44NiwgMC44NF07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqIChvLmNsb3VkUiA/PyAwLjE2KSAqICgwLjQgKyBybmQoKSAqIDEuNCksIGEgPSAoby5jbG91ZEFscGhhID8/IDAuMTIpICogKDAuNCArIHJuZCgpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTQ1VGRiBhcmNzOiB0aGUgdHlyZSBhbmQgYnVtcGVyIG1hcmtzIGEgcm9hZHNpZGUgYmFycmllciBjb2xsZWN0cyBvbiB0aGUgYmFuZCB0aGUgdHJhZmZpY1xuICAgIC8vIGFjdHVhbGx5IHJlYWNoZXMuIEJyb2FkLCBzb2Z0LCBuZWFyLWhvcml6b250YWwgc21lYXJzIHdpdGggYSBzd2VwdCBzaGFwZSAtLSBhIGJsb3RjaCByZWFkcyBhc1xuICAgIC8vIGEgc3RhaW4sIGFuZCB3aGF0IHRoZSBwbGF0ZSBjYXJyaWVzIGlzIHNvbWV0aGluZyB0aGF0IHdlbnQgcGFzdC4gYHNjdWZmQmFuZGAgaXMgYSBwYWlyIG9mXG4gICAgLy8gSEVJR0hUIGZyYWN0aW9ucyAoMCBhdCB0aGUgZ3JvdW5kKSwgc28gaXQgaXMgc3RhdGVkIGluIHRoZSBzYW1lIHRlcm1zIGFzIGBjb3ZlcmFnZWAuXG4gICAgaWYgKG8uc2N1ZmZzKSB7XG4gICAgICBjb25zdCB2ID0gby5zY3VmZiA/PyBbMC42MiwgMC42MiwgMC42NF0sIGJhbmQgPSBvLnNjdWZmQmFuZCA/PyBbMC4zMCwgMC43MF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAqICgxIC0gKGJhbmRbMF0gKyBybmQoKSAqIChiYW5kWzFdIC0gYmFuZFswXSkpKTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMSksIGggPSB3ICogKDAuMDUgKyBybmQoKSAqIDAuMTApO1xuICAgICAgICBjb25zdCBhID0gKG8uc2N1ZmZBbHBoYSA/PyAwLjM0KSAqICgwLjUgKyBybmQoKSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoY3ggKyBkeCwgY3kpOyBjdHgucm90YXRlKChybmQoKSAtIDAuNSkgKiAwLjQ1KTsgY3R4LnNjYWxlKDEsIGggLyB3KTtcbiAgICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCgwLCAwLCAwLCAwLCAwLCB3KTtcbiAgICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYih2KX0sJHthICogMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYygwLCAwLCB3LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBGT1JNIFNFQU1TOiB0aGUgdmVydGljYWwgam9pbnQgbGluZXMgYSBwcmVjYXN0IG1vdWxkIGxlYXZlcywgb25lIHBlciB0aWxlLiBBIGRhcmsgaGFpcmxpbmUgd2l0aFxuICAgIC8vIGEgcGFsZXIgbGlwIGJlc2lkZSBpdCwgd2hpY2ggaXMgd2hhdCBhIHByb3VkIHNlYW0gbG9va3MgbGlrZSAtLSBhIHNpbmdsZSBkYXJrIGxpbmUgcmVhZHMgYXMgYVxuICAgIC8vIHNjcmF0Y2guIGBzZWFtQXRgIHBsYWNlcyBpdCBhcyBhIGZyYWN0aW9uIG9mIHRoZSB0aWxlIHNvIGl0IGRvZXMgbm90IGxhbmQgb24gdGhlIHdyYXAuXG4gICAgaWYgKG8uc2VhbXMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNlYW0gPz8gWzAuNzIsIDAuNzEsIDAuNjhdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNlYW1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQocyAqICgoby5zZWFtQXQgPz8gMC40MikgKyBpIC8gby5zZWFtcykpICUgcztcbiAgICAgICAgY29uc3Qgd3B4ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChzICogMC4wMDQpKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwke28uc2VhbUFscGhhID8/IDAuNX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIHdweCwgcyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHsoby5zZWFtQWxwaGEgPz8gMC41KSAqIDAuM30pYDsgY3R4LmZpbGxSZWN0KHggKyB3cHgsIDAsIHdweCwgcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBJTkhPTEVTOiB0aGUgYWlyIGJ1YmJsZXMgYSBwcmVjYXN0IGZhY2UgaXMgY292ZXJlZCBpbi4gVGhleSBhcmUgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nXG4gICAgLy8gbWFyayBvZiBiYXJlIGNvbmNyZXRlIGF0IHByb3AgZGlzdGFuY2UgLS0gd2l0aG91dCB0aGVtIHRoZSBmYWNlIGlzIGEgcGFpbnRlZCBzbGFiLCB3aGljaCBpc1xuICAgIC8vIG1lYXN1cmFibGUgYXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gYSB0aGlyZCBvZiB0aGUgcGxhdGUncy4gU21hbGwsIGRhcmssIGFuZCBNQU5ZLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGl0cyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5waXQgPz8gWzAuNDIsIDAuNDAsIDAuMzZdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IChvLnBpdFIgPz8gMS42KSAqICgwLjUgKyBybmQoKSAqIDEuMyk7XG4gICAgICBjb25zdCBhID0gMC4yNSArIHJuZCgpICogMC41O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgciAqIDIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40LCBgcmdiYSgke3JnYih2KX0sJHthICogMC40NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByICogMiwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluLiBgZ3JhaW5gL2BncmFpbkFscGhhYCBkZWZhdWx0IHRvIHRoZSBvcmlnaW5hbCAxNTAwIGF0IDAuMTIsIHNvIG5vIGFscmVhZHktZW1pdHRlZCBwcm9wXG4gICAgLy8gY2hhbmdlczsgYSB0aWxlIHN0cmV0Y2hlZCBvdmVyIGEgV0hPTEUgcHJvcCAodXZTY2FsZSA+IGl0cyBoZWlnaHQpIHNhbXBsZXMgb25seSB0aGUgZnJhY3Rpb25cbiAgICAvLyBvZiB0aGUgdGlsZSB3aWR0aCBoZWlnaHRVViBmb2xkcyBvbnRvIGl0LCBhbmQgbmVlZHMgdGhlIGNvdW50IHJhaXNlZCB0byBrZWVwIHRoZSBzYW1lIGRlbnNpdHkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxNTAwKTsgaSsrKSB7XG4gICAgICBjb25zdCBsbyA9IG8uZ3JhaW5MbyA/PyAyMDA7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSBsbyArIE1hdGgucm91bmQocm5kKCkgKiAoMjU1IC0gbG8pKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwke28uZ3JhaW5BbHBoYSA/PyAwLjEyfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBDSEFJTi1MSU5LIHRpbGU6IGEgZGlhbW9uZCB3aXJlIGxhdHRpY2UgZHJhd24gb3BhcXVlIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsIGJvdW5kIGFzIG1hcFxuICogIG9uIGFuIGFscGhhLXRlc3RlZCBtYXRlcmlhbCBzbyB0aGUgY2VsbHMgYXJlIG9wZW4uIE9uZSB0aWxlIGlzIG9uZSBkaWFtb25kIGNlbGw7IHRoZSBwYW5lJ3NcbiAqICBVVnMgcmVwZWF0IGl0IGF0IHRoZSByZWFsIG1lc2ggcGl0Y2guIGB3aXJlYCBpcyB0aGUgd2lyZSB3aWR0aCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBjZWxsLiAqL1xuZnVuY3Rpb24gY2hhaW5saW5rVGlsZShzaXplOiBudW1iZXIsIHdpcmU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IE1hdGgubWF4KDEuNSwgd2lyZSAqIHMpO1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBjb25zdCB2ID0gMTUwICsgTWF0aC5yb3VuZChybmQoKSAqIDMwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiKCR7dn0sJHt2ICsgMn0sJHt2ICsgNH0pYDtcbiAgICAvLyB0d28gZGlhZ29uYWxzIHRocm91Z2ggdGhlIHRpbGUsIG9mZnNldCBzbyB0aGUgd3JhcCBtYWtlcyBhIGNvbnRpbnVvdXMgZGlhbW9uZCBsYXR0aWNlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7IGN0eC5saW5lVG8ocywgcyk7XG4gICAgY3R4Lm1vdmVUbyhzLCAwKTsgY3R4LmxpbmVUbygwLCBzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gdGhlIGtudWNrbGUgd2hlcmUgd2lyZXMgdHdpc3Qgcm91bmQgZWFjaCBvdGhlciwgYXQgdGhlIHR3byBjcm9zc2luZ3Mgb24gdGhlIHRpbGUgZWRnZXNcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3YgLSAyMH0sJHt2IC0gMTh9LCR7diAtIDE2fSlgO1xuICAgIGZvciAoY29uc3QgW3gsIHldIG9mIFtbMCwgMF0sIFtzLCAwXSwgWzAsIHNdLCBbcywgc10sIFtzIC8gMiwgcyAvIDJdXSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIGN0eC5saW5lV2lkdGggKiAwLjksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQkFNQk9PIFNUUklQIHRpbGU6IHZlcnRpY2FsIHNwbGl0LWJhbWJvbyBzdHJpcHMgd2l0aCBwYWxlIGN1bG0gZmFjZXMsIGRhcmsgam9pbnRzIGJldHdlZW4gdGhlbVxuICogIGFuZCBhIG5vZGUgbGluZSBvciB0d28gLS0gYSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBzaWx2ZXItZ3JleS4gKi9cbmZ1bmN0aW9uIGJhbWJvb1RpbGUoc2l6ZTogbnVtYmVyLCBzdHJpcHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBzdyA9IHMgLyBzdHJpcHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzdHJpcHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODAgKyBybmQoKSAqIDAuMiwgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7diAtIDJ9LCR7diAtIDZ9KWA7IGN0eC5maWxsUmVjdChiICogc3csIDAsIHN3LCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1MCw0MiwzNCwwLjYpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSwgcyk7XG4gICAgICAvLyBhIGhpZ2hsaWdodCBkb3duIHRoZSBjdWxtJ3Mgcm91bmRcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKSc7IGN0eC5maWxsUmVjdChiICogc3cgKyBzdyAqIDAuMzUsIDAsIHN3ICogMC4yNSwgcyk7XG4gICAgICAvLyBub2RlIHJpbmdzXG4gICAgICBjb25zdCBuID0gMSArIE1hdGguZmxvb3Iocm5kKCkgKiAyKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7IGNvbnN0IHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSg3MCw2MCw0OCwwLjQ1KSc7IGN0eC5maWxsUmVjdChiICogc3csIHksIHN3LCBNYXRoLm1heCgxLCBzICogMC4wMDgpKTsgfVxuICAgICAgLy8gZmluZSBncmFpbiBsaW5lc1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA2OyBrKyspIHsgY29uc3QgeCA9IGIgKiBzdyArIHJuZCgpICogc3c7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4MCw3MCw1OCwkezAuMDUgKyBybmQoKSAqIDAuMX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpOyB9XG4gICAgfVxuICAgIC8vIG1vdWxkIHNwZWNrbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwMDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgzMCwyOCwyNCwwLjE4KSc7IGN0eC5maWxsUmVjdCh4LCB5LCAxICsgcm5kKCkgKiAyLCAxICsgcm5kKCkgKiAyKTsgfVxuICB9KTtcbn1cblxuLyoqIFBPU1RFUiB0aWxlIGZvciBhIGhvYXJkaW5nOiB0b3JuIHBhc3RlLXVwIHNoZWV0cyBhbmQgYSBzcHJheSBzdGVuY2lsIG92ZXIgYSBUUkFOU1BBUkVOVCBncm91bmQsXG4gKiAgYm91bmQgb24gYW4gYWxwaGEtdGVzdGVkIHBhbmUgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIHNoZWV0LiBgbGluZXNgIGFyZSB0aGUgc3RlbmNpbFxuICogIHN0cmluZ3M7IGEgcHJpbnRlZCBncmFwaGljIGlzIGV4YWN0bHkgdGhlIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyBjYXNlLiAqL1xuZnVuY3Rpb24gcG9zdGVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbGluZXM6IHN0cmluZ1tdKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gcGFzdGUtdXBzOiBvdmVybGFwcGluZyBvZmYtd2hpdGUgcmVjdGFuZ2xlcyB3aXRoIHRvcm4gZWRnZXMgYW5kIGZhaW50IHByaW50IGxpbmVzXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMzApLCB5ID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjQ1KSwgdyA9IHMgKiAoMC4xNCArIHJuZCgpICogMC4xNiksIGggPSBzICogKDAuMTggKyBybmQoKSAqIDAuMjIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7MjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjIgKyBNYXRoLnJvdW5kKHJuZCgpICogMTgpfSwkezIxMCArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LDAuOTYpYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGNvbnN0IG4gPSA5O1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMDgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSBjdHgubGluZVRvKHggKyB3ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIGggKyAocm5kKCkgLSAwLjUpICogaCAqIDAuMTIpO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgKHJuZCgpIC0gMC41KSAqIHcgKiAwLjA4LCB5ICsgaCAqIGkgLyBuKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCw0MCw0NSwwLjU1KSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykgY3R4LmZpbGxSZWN0KHggKyB3ICogMC4xLCB5ICsgaCAqICgwLjIgKyBpICogMC4xKSwgdyAqICgwLjMgKyBybmQoKSAqIDAuNSksIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgIH1cbiAgICAvLyBzcHJheSBzdGVuY2lsLCBzbGlnaHRseSBzb2Z0IGFuZCB1bmV2ZW5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjAsMjIsMC44OCknO1xuICAgIGN0eC5mb250ID0gYGJvbGQgJHtNYXRoLnJvdW5kKHMgKiAwLjA3KX1weCBzYW5zLXNlcmlmYDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAwLjQwLCB5ID0gcyAqICgwLjQ0ICsgaSAqIDAuMTMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHsgY3R4Lmdsb2JhbEFscGhhID0gMC42OyBjdHguZmlsbFRleHQobGluZXNbaV0sIHggKyAocm5kKCkgLSAwLjUpICogMywgeSArIChybmQoKSAtIDAuNSkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1RSSVBFIHRpbGU6IGFsdGVybmF0aW5nIGNvbG91ciBiYW5kcyBhbG9uZyB1IChhbiBhd25pbmcpLCB3aXRoIGEgc29mdCBncmltZSBtdWx0aXBseSBzbyB0aGUgY2xvdGhcbiAqICByZWFkcyB3b3JuIHJhdGhlciB0aGFuIHByaW50ZWQuIGBhYC9gYmAgYXJlIHRoZSB0d28gYmFuZCBjb2xvdXJzIGFzIFtyLGcsYl0gMC0xLiBCb3VuZCBhcyBtYXAgb24gYVxuICogIFdISVRFIG1hdGVyaWFsIHNvIHRoZSBiYW5kcyBjYXJyeSB0aGUgd2hvbGUgYWxiZWRvLiAqL1xuLy8gYG9gIGlzIG9wdGlvbmFsIGFuZCBldmVyeSBmaWVsZCBkZWZhdWx0cyB0byB0aGUgcHJldmlvdXMgaGFyZC1jb2RlZCBiZWhhdmlvdXIsIHNvIG5vIHByb3AgdGhhdFxuLy8gZG9lcyBub3QgcGFzcyBpdCBjaGFuZ2VzLiBgc211ZGdlc2AgYW5kIGBzcGVja3NgIGV4aXN0IGJlY2F1c2UgYnJ1c2hlZCBTVEVFTCB3YW50cyB0aGUgYmFuZGluZ1xuLy8gd2l0aG91dCB0aGUgZGlydDogdGhlIDQwIHJhZGlhbCBzbXVkZ2VzIGFuZCAxMjAwIGxpZ2h0IHNwZWNrcyByZWFkIGFzIG1vdWxkIG9uIGEgY2xlYW4gc2F0aW5cbi8vIHN1cmZhY2UsIHdoaWNoIGlzIHRoZSBvcHBvc2l0ZSBvZiB3aGF0IGEgc3RyaXBlIHRpbGUgaXMgZm9yIHRoZXJlLlxuZnVuY3Rpb24gc3RyaXBlVGlsZShzaXplOiBudW1iZXIsIGJhbmRzOiBudW1iZXIsIGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBvOiBhbnkgPSB7fSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zbXVkZ2VzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3MgPz8gMTIwMCk7IGkrKykgeyBjb25zdCB2ID0gMjAwICsgTWF0aC5yb3VuZChybmQoKSAqIDU1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTApYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICAvLyBCUk9BRCByZWZsZWN0aW9uIGJhbmRpbmc6IGBvLmJyb2FkYCB3aG9sZSBicmlnaHQvZGFyayBjeWNsZXMgYWNyb3NzIHRoZSB0aWxlLCBkcmF3biBhcyBvbmVcbiAgICAvLyB3cmFwcGluZyBjb3NpbmUgZ3JhZGllbnQuIEJydXNoZWQgc3RlZWwgd2l0aCBubyBlbnZpcm9ubWVudCBtYXAgdG8gcmVmbGVjdCBoYXMgbm90aGluZyB0b1xuICAgIC8vIG1ha2UgaXRzIGZsYW5rcyBicmlnaHQgYW5kIGl0cyBtaWRkbGUgZGFyaywgYW5kIHRoZSBmaW5lIGdyYWluIGNhbm5vdCBzdXBwbHkgaXQgLS0gYSAzIG1tXG4gICAgLy8gcGl0Y2ggYXZlcmFnZXMgdG8gb25lIGZsYXQgdG9uZSBhdCBwcm9wIGRpc3RhbmNlLCB3aGljaCBpcyB3aGF0IGEgcmVuZGVyZWQgc3RhaW5sZXNzIGJpblxuICAgIC8vIGxvb2tzIGxpa2Ugd2hlbiBpdCByZWFkcyBhcyBwYWludGVkIG1ldGFsLiBXaG9sZSBjeWNsZXMsIHNvIHRoZSB0aWxlIHN0aWxsIG1lZXRzIGl0c2VsZi5cbiAgICAvLyBEZWZhdWx0ZWQgT0ZGLCBzbyBldmVyeSBleGlzdGluZyBjYWxsZXIgaXMgYnl0ZS1pZGVudGljYWwuXG4gICAgaWYgKG8uYnJvYWQpIHtcbiAgICAgIGNvbnN0IGxvID0gby5icm9hZExvID8/IDAuODAsIGhpID0gby5icm9hZEhpID8/IDEuMDtcbiAgICAgIGNvbnN0IGczID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjQ7IGkrKykge1xuICAgICAgICBjb25zdCB0ID0gaSAvIDY0O1xuICAgICAgICBjb25zdCB2ID0gbG8gKyAoaGkgLSBsbykgKiAoMC41ICsgMC41ICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBvLmJyb2FkICogdCkpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5yb3VuZCgyNTUgKiB2KTtcbiAgICAgICAgZzMuYWRkQ29sb3JTdG9wKHQsIGByZ2IoJHtjfSwke2N9LCR7Y30pYCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzM7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogU2VhbWxlc3MgYXJvdW5kLWJ5LXVwIFVWcyBmb3IgYSBMYXRoZUdlb21ldHJ5OiB1IGZyb20gdGhlIFNFR01FTlQgaW5kZXggKHRoZSBsYXRoZSBvcmRlcnMgaXRzXG4gKiAgdmVydGljZXMgc2VnbWVudC1tYWpvciwgaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCBzbyB0aGUgZHVwbGljYXRlZCBzZWFtIGNvbHVtbiByZWFkc1xuICogIHUgPSByZXBlYXRzIGV4YWN0bHkgYW5kIFJlcGVhdFdyYXBwaW5nIGNsb3NlcyBpdC4gYHNjYWxlYCBpcyB0aGUgdGlsZSBzaXplIGluIG1ldHJlczsgdGhlXG4gKiAgYXJvdW5kLXJlcGVhdCBjb3VudCBpcyByb3VuZGVkIHNvIHRoZSB0aWxlIG1lZXRzIGl0c2VsZiwgZnJvbSB0aGUgcHJvZmlsZSdzIHdpZGVzdCByYWRpdXMuICovXG5mdW5jdGlvbiBsYXRoZVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwb2ludENvdW50OiBudW1iZXIsIHNlZzogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2U2NhbGUgPSBzY2FsZSwgdjAgPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgbGV0IHJNYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgck1heCA9IE1hdGgubWF4KHJNYXgsIE1hdGguaHlwb3QocC5nZXRYKGkpLCBwLmdldFooaSkpKTtcbiAgY29uc3QgcmVwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgyICogTWF0aC5QSSAqIHJNYXggLyBzY2FsZSkpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGkgLyBwb2ludENvdW50KTtcbiAgICB1dltpICogMl0gPSAocyAvIHNlZykgKiByZXA7IHV2W2kgKiAyICsgMV0gPSAocC5nZXRZKGkpIC0gdjApIC8gdlNjYWxlO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbn1cblxuLyoqIEVYUE9TRUQtQUdHUkVHQVRFIHRpbGU6IGEgZGFyayBtb3J0YXIgZ3JvdW5kIHBhY2tlZCB3aXRoIHJvdW5kZWQgcGViYmxlcyBpbiBhIG1lYXN1cmVkIHBhbGV0dGUsXG4gKiAgZWFjaCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cyBzbyB0aGUgdGlsZSBpcyBzZWFtbGVzcy4gYG8ucGFsZXR0ZWAgaXMgYSBsaXN0IG9mIFtyLGcsYl1cbiAqICByYXRpb3MgYWdhaW5zdCB0aGUgbWF0ZXJpYWwgY29sb3VyLCBgby5ncm91bmRgIHRoZSBtb3J0YXIgcmF0aW8sIGBvLmNvdW50YCB0aGUgcGViYmxlIGNvdW50LiAqL1xuZnVuY3Rpb24gcGViYmxlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGN0eC5maWxsU3R5bGUgPSByZ2Ioby5ncm91bmQgPz8gWzAuNDUsIDAuNDIsIDAuMzhdKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBhbDogbnVtYmVyW11bXSA9IG8ucGFsZXR0ZSA/PyBbWzAuODUsIDAuNzgsIDAuNjZdLCBbMC43MiwgMC42MiwgMC41MF0sIFswLjYwLCAwLjU4LCAwLjU1XSwgWzAuOTAsIDAuODYsIDAuODBdXTtcbiAgICBjb25zdCBuID0gby5jb3VudCA/PyA5MDAsIHJNaW4gPSBzICogKG8uck1pbiA/PyAwLjAxMiksIHJNYXggPSBzICogKG8uck1heCA/PyAwLjAyOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHJ4ID0gck1pbiArIHJuZCgpICogKHJNYXggLSByTWluKSwgcnkgPSByeCAqICgwLjYgKyBybmQoKSAqIDAuNSksIGEgPSBybmQoKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBjID0gcGFsW01hdGguZmxvb3Iocm5kKCkgKiBwYWwubGVuZ3RoKV0sIGsgPSAwLjg1ICsgcm5kKCkgKiAwLjM7XG4gICAgICAvLyBDT05UQUNUIFNIQURPVyBmaXJzdCwgb2Zmc2V0IGRvd24tcmlnaHQgYW5kIGEgdG91Y2ggbGFyZ2VyLCBzbyB3aGF0IHN1cnZpdmVzIGFyb3VuZCBlYWNoXG4gICAgICAvLyBzdG9uZSBpcyB0aGUgZGFyayBtb3J0YXIgY3Jlc2NlbnQgdGhhdCBtYWtlcyBhIHBhY2tlZCBhZ2dyZWdhdGUgcmVhZCBhcyBzdG9uZXMgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIG92ZXJsYXBwaW5nIGZsYXQgZGlzY3MuIGBzaGFkZWAgaXMgYSByYXRpbyBhZ2FpbnN0IHRoZSBtb3J0YXIgZ3JvdW5kOyAwIGtlZXBzIHRoZSBvbGRcbiAgICAgIC8vIGxvb2sgZm9yIGV2ZXJ5IHRpbGUgYWxyZWFkeSBzaGlwcGVkLlxuICAgICAgaWYgKG8uc2hhZGUpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYigoby5ncm91bmQgPz8gWzAuNDUsIDAuNDIsIDAuMzhdKS5tYXAoKHYpID0+IHYgKiBvLnNoYWRlKSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4ICsgcnggKiAwLjE2LCB5ICsgZHkgKyByeSAqIDAuMjIsIHJ4ICogMS4xLCByeSAqIDEuMSwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZmlsbFN0eWxlID0gcmdiKGMubWFwKCh2KSA9PiBNYXRoLm1pbigxLCB2ICogaykpKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHJ4LCByeSwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAvLyBhIGhpZ2hsaWdodCBjcmVzY2VudCBvbiB0aGUgbGl0IHNpZGUgc28gZWFjaCBzdG9uZSByZWFkcyBhcyBhIGJ1bXBcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDI1NSwke28uZ2xvc3MgPz8gMC4xOH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4IC0gcnggKiAwLjIsIHkgKyBkeSAtIHJ5ICogMC4yNSwgcnggKiAwLjUsIHJ5ICogMC40LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogVFlSRSBUUkVBRCB0aWxlIGZvciBhIGxhdGhlIGNhcnJ5aW5nIGBjeWxVVmA6IHUgcnVucyBBUk9VTkQgdGhlIHR5cmUgYW5kIHYgVVAgaXQsIHNvIHRyZWFkIHNsb3RzIGFyZVxuICogIGJhcnMgYXQgY29uc3RhbnQgdSBhbmQgdGhlIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFyZSBsaW5lcyBhdCBjb25zdGFudCB2LiBEcmF3biBhcyByYXRpb3Mgb24gd2hpdGVcbiAqICBhbmQgbXVsdGlwbGllZCBpbnRvIHRoZSAobGlmdGVkKSBydWJiZXIgY29sb3VyOyBgby5ncm9vdmVgIGlzIHRoZSBkYXJrZXN0IHJhdGlvLCBrZXB0IGFib3ZlIHRoZVxuICogIGx1bWEtNTggaG9sZSBiYW5kIGJ5IHRoZSBjYWxsZXIuIGBvLnNsb3RzYCBiYXJzIHBlciB0aWxlLCBgby5yaW5nc2AgY2lyY3VtZmVyZW50aWFsIGxpbmVzLiAqL1xuZnVuY3Rpb24gdHJlYWRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC44MCwgc2xvdHMgPSBvLnNsb3RzID8/IDIsIHJpbmdzID0gby5yaW5ncyA/PyAyO1xuICAgIC8vIGBiYXNlYCBpcyB0aGUgdG9uZSB0aGUgVU4tZ3JpbWVkIHBhcnQgb2YgdGhlIHRpbGUgY2FycmllcywgZGVmYXVsdGluZyB0byB3aGl0ZSAtLSBpLmUuIHRvXG4gICAgLy8gXCJsZWF2ZSB0aGUgdmVydGV4IGNvbG91ciBhbG9uZVwiLCB3aGljaCBpcyBldmVyeSBleGlzdGluZyBjYWxsZXIuIEl0IGV4aXN0cyBmb3IgRU5WRUxPUEVcbiAgICAvLyBSRS1CQVNJTkc6IGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBhIHBhcnQgdGhhdCBtdXN0IHJlYWQgY2xlYW4gb3JhbmdlIGluIG9uZSBwbGFjZSBhbmRcbiAgICAvLyBncmV5IHJvYWQgZ3JpbWUgaW4gYW5vdGhlciBjYW5ub3QgZG8gaXQgZnJvbSBhIHNpbmdsZSB2ZXJ0ZXggY29sb3VyLCBiZWNhdXNlIHRoZSBncmltZSBpc1xuICAgIC8vIEhJR0hFUiBpbiBibHVlIHRoYW4gdGhlIG9yYW5nZSBpcy4gVGhlIHZlcnRleCBjb2xvdXIgYmVjb21lcyB0aGUgcGVyLWNoYW5uZWwgbWF4aW11bSBvZiBib3RoXG4gICAgLy8gYW5kIHRoaXMgZmlsbCBwYWludHMgdGhlIGNsZWFuIHRvbmUgYmFjayBvdXQgb2YgaXQuXG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoMjU1ICogZ3Jvb3ZlKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgIGNvbnN0IHBpdGNoID0gcyAvIHNsb3RzLCB3ID0gcGl0Y2ggKiAoby5zbG90V2lkdGggPz8gMC4xNik7XG4gICAgLy8gdHJlYWQgc2xvdHMgc3BhbiB0aGUgYmFuZCBiZXR3ZWVuIHRoZSB0d28gZWRnZSBzaG91bGRlcnMgKHYgMC4xMi4uMC44OCBvZiB0aGUgdGlsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RzOyBpKyspIHsgY29uc3QgeCA9IGkgKiBwaXRjaCArIHBpdGNoICogMC40ICsgKHJuZCgpIC0gMC41KSAqIHBpdGNoICogMC4xOyBjdHguZmlsbFJlY3QoeCwgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgY3R4LmZpbGxSZWN0KHggLSBzLCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW5nczsgaSsrKSB7IGNvbnN0IHkgPSBzICogKDAuMiArIDAuNiAqIChpICsgMC41KSAvIHJpbmdzKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSAxLjUsIHMsIDMpOyB9XG4gICAgLy8gc2lkZXdhbGwgc2hlZW46IGEgc29mdCBsaWdodGVyIHdhc2ggc28gdGhlIHJ1YmJlciBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMiksIHYgPSAyMzUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogT0xEIFRZUkUgdGlsZTogVFdPIHR5cmUgaGVpZ2h0cyB0YWxsIGJ5IGBvLnBpdGNoYCBtZXRyZXMgYXJvdW5kIChjeWxVVikuIFRoZSB1cHBlciBoYWxmICh2IDAuNS0xKVxuICogIGlzIGEgdHJlYWRlZCB0eXJlLCB0aGUgbG93ZXIgaGFsZiAodiAwLTAuNSkgYSB3b3JuIFNMSUNLIHdpdGggY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYW5kIHNob3J0XG4gKiAgc2hvdWxkZXIgc2lwZXMgb25seSwgc28gYSBzdGFjayBtaXhlcyBiYWxkIGFuZCB0cmVhZGVkIHR5cmVzIG9mZiBvbmUgY2FudmFzIGJ5IHYwLiBEcmF3biBhcyBSQVRJT1NcbiAqICBhZ2FpbnN0IHRoZSB2ZXJ0ZXgtY29sb3VyZWQgcnViYmVyIGF0IGBiYXNlYCAoMjAwLzI1NSAtPiB2ZXJ0ZXggdG9uZXMgYXJlIGF1dGhvcmVkIDEuMjc1eCB0aGVcbiAqICBpbnRlbmRlZCBhbGJlZG8gc28gZHVzdCBhbmQgc2N1ZmZzIGNhbiBnbyBCUklHSFRFUiB0aGFuIHRoZSBydWJiZXIgdW5kZXIgYSBtdWx0aXBseSBjYW52YXMpLlxuICogIFJvd3MgYXJlIGhlaWdodHM6IGxvd2VyIHNpZGV3YWxsLCB0cmVhZCBiYW5kICh2IGBvLmJhbmRbMF1gLi5gby5iYW5kWzFdYCBvZiB0aGUgc3RyaXApLCB1cHBlclxuICogIHNpZGV3YWxsIHdpdGggYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMuIFdlYXI6IGEgd2FybSBkdXN0IHdhc2ggb24gdGhlIGxvd2VyIHNob3VsZGVyLCBncmV5IHNjdWZmc1xuICogIG9uIGJvdGggc2hvdWxkZXJzLCBkdXN0IGNhdWdodCBpbiB0aGUgY3V0cywgZ3JhaW4gb3ZlciBldmVyeXRoaW5nLiAqL1xuZnVuY3Rpb24gdHlyZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IDIwMCwgYmFuZCA9IG8uYmFuZCA/PyBbMC4yNCwgMC43Nl0sIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuNDU7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKGJhc2UgKiBncm9vdmUpLCBydiA9IE1hdGgucm91bmQoYmFzZSAqIDAuNyksIG12ID0gTWF0aC5yb3VuZChiYXNlICogMC45KTtcbiAgICBjb25zdCBkdXN0ID0gby5kdXN0ID8/IFsyMzIsIDIxNCwgMTkwXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzICogcyAvIDY7IGkrKykgeyBjb25zdCB2ID0gYmFzZSArIE1hdGgucm91bmQoKHJuZCgpIC0gMC41KSAqIDIyKTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAyLCAyKTsgfVxuICAgIC8vIG9uZSB0eXJlIHN0cmlwIGJldHdlZW4gY2FudmFzIHJvd3MgeWEgKHRvcCkgYW5kIHliIChib3R0b20pOyBjYW52YXMgeSBncm93cyBET1dOLCB2IGdyb3dzIFVQXG4gICAgY29uc3Qgc3RyaXAgPSAoeWE6IG51bWJlciwgeWI6IG51bWJlciwgdHJlYWRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IHliIC0geWEsIGIwID0geWEgKyBoICogKDEgLSBiYW5kWzFdKSwgYjEgPSB5YSArIGggKiAoMSAtIGJhbmRbMF0pO1xuICAgICAgY29uc3QgbmcgPSBvLmdyb292ZXMgPz8gMywgZ3cgPSBoICogMC4wMjQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZzsgaSsrKSB7IGNvbnN0IHkgPSBiMCArIChiMSAtIGIwKSAqIChpICsgMSkgLyAobmcgKyAxKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSBndyAvIDIsIHMsIGd3KTsgfVxuICAgICAgY29uc3QgbnMgPSBvLnNpcGVzID8/IDIsIHcgPSBzICogKG8uc2lwZVdpZHRoID8/IDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gbmc7IGsrKykge1xuICAgICAgICBjb25zdCB5MCA9IGsgPT09IDAgPyBiMCA6IGIwICsgKGIxIC0gYjApICogayAvIChuZyArIDEpICsgZ3cgLyAyLCB5MSA9IGsgPT09IG5nID8gYjEgOiBiMCArIChiMSAtIGIwKSAqIChrICsgMSkgLyAobmcgKyAxKSAtIGd3IC8gMjtcbiAgICAgICAgLy8gYSBzbGljayBrZWVwcyBvbmx5IFNIT1JUIHNpcGVzIGF0IHRoZSB0d28gc2hvdWxkZXIgcm93cywgY3V0IGluIGZyb20gdGhlIGJhbmQgZWRnZVxuICAgICAgICBjb25zdCBvdXRlciA9IGsgPT09IDAgfHwgayA9PT0gbmc7XG4gICAgICAgIGlmICghdHJlYWRlZCAmJiAhb3V0ZXIpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCB5czAgPSB0cmVhZGVkID8geTAgOiAoayA9PT0gMCA/IHkwIDogeTEgLSAoeTEgLSB5MCkgKiAwLjQ1KSwgeXMxID0gdHJlYWRlZCA/IHkxIDogKGsgPT09IDAgPyB5MCArICh5MSAtIHkwKSAqIDAuNDUgOiB5MSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnM7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHggPSAoKGkgKyAwLjUpIC8gbnMgKyAoayAlIDIpICogMC41IC8gbnMpICogcyArIChybmQoKSAtIDAuNSkgKiBzICogMC4wNiwgc2wgPSAocm5kKCkgLSAwLjUpICogcyAqIDAuMDg7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdywgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgc2wsIHlzMSk7IGN0eC5saW5lVG8oeCArIGR4ICsgc2wsIHlzMSk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzaG91bGRlciBzdGVwIGF0IHRoZSB0b3Agb2YgdGhlIGJhbmQsIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzIG9uIHRoZSBzaWRld2FsbHNcbiAgICAgIGNvbnN0IHNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGIwIC0gaCAqIDAuMDMsIDAsIGIwICsgaCAqIDAuMDIpOyBzaC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMClgKTsgc2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDAuNDUpYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2g7IGN0eC5maWxsUmVjdCgwLCBiMCAtIGggKiAwLjAzLCBzLCBoICogMC4wNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J2fSwke3J2fSwke3J2fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4wNDUsIHMsIGggKiAwLjAxMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjk0LCBzLCBoICogMC4wMTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHttdn0sJHttdn0sJHttdn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMTEsIHMsIDIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC44OCwgcywgMik7XG4gICAgICAvLyB3ZWFyOiB3YXJtIHJvYWQgZHVzdCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIgYW5kIHNpZGV3YWxsLCBncmV5IHNjdWZmcyBvbiBib3RoIHNob3VsZGVyc1xuICAgICAgY29uc3QgZGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHlhICsgaCAqIDAuNik7IGRnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwke28uZHVzdEFscGhhID8/IDAuMzV9KWApOyBkZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBkZzsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuNiwgcywgaCAqIDAuNCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyAxNCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgPCAwLjUgPyBiMCArIChybmQoKSAtIDAuMykgKiBoICogMC4wOCA6IGIxICsgKHJuZCgpIC0gMC43KSAqIGggKiAwLjA4LCByID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KSwgdiA9IDIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyNSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHksIHIgKiAyLjIsIHIgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gYjAgKyBybmQoKSAqIChiMSAtIGIwKSwgdiA9IDYgKyBNYXRoLnJvdW5kKHJuZCgpICogMTQpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjc1KX0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDIgKyBybmQoKSAqIDYsIDIgKyBybmQoKSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuICAgIHN0cmlwKDAsIHMgLyAyLCB0cnVlKTsgICAgICAvLyB2IDAuNS4uMTogdHJlYWRlZFxuICAgIHN0cmlwKHMgLyAyLCBzLCBmYWxzZSk7ICAgICAvLyB2IDAuLjAuNTogc2xpY2tcbiAgfSk7XG59XG5cbi8qKiBBIHRhcGVyZWQgYm94OiBCb3hHZW9tZXRyeSgxLCBoLCAxKSB3aG9zZSB4L3ogYXJlIHNjYWxlZCBwZXIgdmVydGV4IGJ5IHRoZSBmb290cHJpbnQgaW50ZXJwb2xhdGVkXG4gKiAgZnJvbSAodzAsIGQwKSBhdCB0aGUgYm90dG9tIHRvICh3MSwgZDEpIGF0IHRoZSB0b3AuIE5vcm1hbHMgcmVjb21wdXRlZCBzbyB0aGUgc2xhbnRlZCBmYWNlcyBzaGFkZVxuICogIGZsYXQuIGBiYCA9IFtjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXS4gKi9cbmZ1bmN0aW9uIGZydXN0dW0oYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFtjeCwgeTAsIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gPSBiO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIGgsIDEpO1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IChwLmdldFkoaSkgKyBoIC8gMikgLyBoO1xuICAgIHAuc2V0WChpLCBwLmdldFgoaSkgKiAodzAgKyAodzEgLSB3MCkgKiB0KSk7IHAuc2V0WihpLCBwLmdldFooaSkgKiAoZDAgKyAoZDEgLSBkMCkgKiB0KSk7XG4gIH1cbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBnLnRyYW5zbGF0ZShjeCwgeTAgKyBoIC8gMiwgY3opO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBIT1QtRElQIEdBTFZBTklTRUQgWklOQzogY2xvdWR5IHRvbmUgZHJpZnQsIGNyeXN0YWxsaW5lIFNQQU5HTEUsIGFuZCBydXN0IGJsZWVkaW5nIGZyb20gdGhlIHdlbGRzLlxuICpcbiAqIFRoaXMgZXhpc3RzIGJlY2F1c2UgYGdyaW1lVGlsZWAgbWVhc3VyYWJseSBjYW5ub3Qgc2F5IGBnYWx2YW5pc2VkYC4gTWVhc3VyZWQgb24gdGhlIGNyb3dkXG4gKiBiYXJyaWVyJ3MgcGxhdGUgYWdhaW5zdCBpdHMgZmlyc3QgYnVpbGQsIG92ZXIgbWF0Y2hlZCBmbGF0IHBhbmVsIGNyb3BzOiB0aGUgcGxhdGUgcmVhZHMgbWVhbiBsdW1hXG4gKiAxNTctMTU5IHdpdGggc2QgMTItMTYgYW5kIGEgcDUuLnA5NSBzcGFuIG9mIH40MiwgYW5kIHRoZSByZW5kZXIgcmVhZCBtZWFuIDE0MiB3aXRoIHNkIDgtMTAgYW5kIGFcbiAqIHNwYW4gb2YgfjIxIC0tIGhhbGYgdGhlIHRvbmFsIHZhcmlhdGlvbiwgYW5kIENMSVBQRUQgYXQgdGhlIHRvcCAocDc1ID0gcDk1ID0gMTQ3LCB0aGUgdGlsZSBkb2luZ1xuICogbm90aGluZyBhdCBhbGwgb3ZlciB0aGUgdXBwZXIgaGFsZiBvZiB0aGUgcGFuZWwpLiBBIGdhbHZhbmlzZWQgc3VyZmFjZSBpcyBub3QgZGlydCBvbiBncmV5IHBhaW50OlxuICogaXQgaXMgYSBmcm96ZW4gY3J5c3RhbCBzdHJ1Y3R1cmUsIGJyaWdodCBpcnJlZ3VsYXIgc3BhbmdsZSBmYWNldHMgc3RhbmRpbmcgQUJPVkUgdGhlIGJhc2UgdG9uZVxuICogd2l0aCBkdWxsIGdyZXktYnJvd24gZHJpZnQgYmV0d2VlbiB0aGVtLCBhbmQgdGhlIGJyaWdodGVzdCBmaWZ0aCBvZiBpdCBpcyB0aGUgcGFydCB0aGF0IHJlYWRzLlxuICpcbiAqIEEgY2FudmFzIHRpbGUgaXMgYm91bmQgYXMgYSBNVUxUSVBMWSBtYXAsIHNvIGl0IGNhbiBvbmx5IGV2ZXIgZGFya2VuIC0tIHdoaWNoIGlzIHdoeSB0aGUgc3ByZWFkXG4gKiB3YXMgb25lLXNpZGVkLiBUaGUgdGlsZSBpcyB0aGVyZWZvcmUgYXV0aG9yZWQgYXJvdW5kIGEgYG1pZGAgbXVsdGlwbGllciB3ZWxsIGJlbG93IDEgYW5kIHRoZVxuICogY2FsbGVyIHJhaXNlcyB0aGUgYmFzZSBhbGJlZG8gYnkgMS9taWQ6IHRoZSBzcGFuZ2xlIHRoZW4gcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBiYXNlIHdoaWxlIHRoZVxuICogZHJpZnQgZmFsbHMgYXdheSBiZWxvdyBpdCwgYW5kIHRoZSBzdXJmYWNlIHZhcmllcyBpbiBCT1RIIGRpcmVjdGlvbnMgYWJvdXQgaXRzIG1lYW4uIEF1dGhvciB0aGVcbiAqIGFsYmVkbyBmb3IgdGhhdCwgb3IgdGhlIHByb3Agc2hpcHMgYXMgYnJpZ2h0IGFzIHRoZSBzcGFuZ2xlIGV2ZXJ5d2hlcmUuXG4gKlxuICogYHJ1c3RCYW5kYCBibGVlZHMgYSBkZXNhdHVyYXRlZCBicm93biBkb3duIGZyb20gdGhlIHRvcCBhbmQgdXAgZnJvbSB0aGUgYm90dG9tIC0tIHRoZSB0d28gcGxhY2VzIGFcbiAqIGJhcnJpZXIncyB3ZWxkcyBhcmUgLS0gYmVjYXVzZSBydXN0IG9uIGdhbHZhbmlzZWQgc3RlZWwgc3RhcnRzIGF0IGEgd2VsZCwgd2hlcmUgdGhlIHppbmMgd2FzXG4gKiBidXJudCBvZmYsIGFuZCBSVU5TLiBUaGUgcGxhdGUncyBydXN0IG1lYXN1cmVzICM4MjZlNTggb3ZlciAyLjIlIG9mIHRoZSBmcmFtZTogYSB3YXNoLCBub3QgdGhlXG4gKiBvcmFuZ2UgcG9sa2EgZG90cyBhIGJsb3RjaCB0aWxlIGdpdmVzLlxuICovXG5mdW5jdGlvbiB6aW5jVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG1pZCA9IG8ubWlkID8/IDAuODgsIGxvID0gby5sbyA/PyAwLjc0O1xuICAgIGNvbnN0IGcgPSAodjogbnVtYmVyKSA9PiB7IGNvbnN0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHYpOyByZXR1cm4gYHJnYigke2J9LCR7Yn0sJHtifSlgOyB9O1xuICAgIGN0eC5maWxsU3R5bGUgPSBnKG1pZCk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQ6IGJyb2FkIHNvZnQgYmxvYnMgYm90aCBhYm92ZSBhbmQgYmVsb3cgdGhlIG1pZCwgdGhlIG1vdHRsZSBhIGRpcCBsZWF2ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyA2MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xNik7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuMzUgKyBybmQoKSAqIDAuNSkgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKTtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7by5jbG91ZEFscGhhID8/IDAuMjh9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTUEFOR0xFOiBpcnJlZ3VsYXIgYnJpZ2h0IGNyeXN0YWwgZmFjZXRzLCBhbmd1bGFyIHJhdGhlciB0aGFuIHJvdW5kLCB1cCB0byB0aGUgYmFzZSB0b25lLlxuICAgIC8vIFNtYWxsIGFuZCBkZW5zZSAtLSBsYXJnZSBvbmVzIHJlYWQgYXMgc3BsYXNoZXMgb2Ygd2hpdGUgcGFpbnQsIHdoaWNoIGlzIHRoZSBmYWlsdXJlIG1vZGUgYVxuICAgIC8vIGJsb3RjaCB0aWxlIGZhbGxzIGludG8uXG4gICAgLy8gQ0xVU1RFUkVELCBub3Qgc2NhdHRlcmVkLiBVbmlmb3JtbHkgc3ByZWFkIGZhY2V0cyByZWFkIGFzIHNub3cgb3IgZHVzdCBzcGVja3MgLS0gaXNvbGF0ZWRcbiAgICAvLyBicmlnaHQgZG90cyBvbiBhIHNtb290aCBmaWVsZCwgd2hpY2ggaXMgd2hhdCB0aGUgc2Vjb25kIHR1bmluZyBzaGlwcGVkIGFuZCB3aGF0IHRoZSBwbGF0ZSBoYXNcbiAgICAvLyBub25lIG9mLiBSZWFsIHNwYW5nbGUgYmxvb21zOiB0aGUgY3J5c3RhbHMgbnVjbGVhdGUgdG9nZXRoZXIsIHNvIHRoZSBzdXJmYWNlIGlzIHBhdGNoZXMgb2ZcbiAgICAvLyBkZW5zZSBicmlnaHQgZmFjZXRzIHdpdGggcXVpZXQgZ3JleSBiZXR3ZWVuIHRoZW0uIGBzcGFuZ2xlQ2x1c3RlcnNgIGNlbnRyZXMgY2FycnlcbiAgICAvLyBgMSAtIHNwYW5nbGVMb29zZWAgb2YgdGhlIGZhY2V0cywgZGlzdHJpYnV0ZWQgc3FydC11bmlmb3JtbHkgc28gZWFjaCBibG9vbSBpcyBkZW5zZSBhdCBpdHNcbiAgICAvLyBtaWRkbGUgYW5kIHRoaW5zIGF0IGl0cyBlZGdlOyB0aGUgcmVzdCBzdGF5IHNjYXR0ZXJlZCBzbyB0aGUgZmllbGQgaXMgbmV2ZXIgYmFsZC5cbiAgICBjb25zdCBjbCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG8uc3BhbmdsZUNsdXN0ZXJzID8/IDAgfSwgKCkgPT4gW3JuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMDQgKyBybmQoKSAqIDAuMTApXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGFuZ2xlID8/IDUyMCk7IGkrKykge1xuICAgICAgbGV0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7XG4gICAgICBpZiAoY2wubGVuZ3RoICYmIHJuZCgpID4gKG8uc3BhbmdsZUxvb3NlID8/IDAuMjUpKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjbFsocm5kKCkgKiBjbC5sZW5ndGgpIHwgMF0sIGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNbMl07XG4gICAgICAgIHggPSBjWzBdICsgTWF0aC5jb3MoYSkgKiBkOyB5ID0gY1sxXSArIE1hdGguc2luKGEpICogZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHIgPSBzICogKChvLnNwYW5nbGVNaW4gPz8gMC4wMDQpICsgTWF0aC5wb3cocm5kKCksIDIpICogKG8uc3BhbmdsZU1heCA/PyAwLjAxMykpO1xuICAgICAgY29uc3QgdiA9IG1pZCArICgxIC0gbWlkKSAqICgwLjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjb25zdCBrID0gNCArIE1hdGguZmxvb3Iocm5kKCkgKiAzKTtcbiAgICAgIGNvbnN0IGEwID0gcm5kKCkgKiBNYXRoLlBJICogMjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkeyhvLnNwYW5nbGVBbHBoYSA/PyAwLjIpICsgcm5kKCkgKiAoby5zcGFuZ2xlQWxwaGFWYXIgPz8gMC4zNSl9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IGEwICsgaiAqIE1hdGguUEkgKiAyIC8gaywgcnIgPSByICogKDAuNTUgKyBybmQoKSAqIDAuNzUpO1xuICAgICAgICAgIGNvbnN0IHB4ID0geCArIGR4ICsgTWF0aC5jb3MoYSkgKiByciwgcHkgPSB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIHJyICogMC44O1xuICAgICAgICAgIGlmIChqID09PSAwKSBjdHgubW92ZVRvKHB4LCBweSk7IGVsc2UgY3R4LmxpbmVUbyhweCwgcHkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZGFyayBkcmlwIHN0cmVha3MgcnVubmluZyBkb3duOiB3ZWF0aGVyaW5nLCBhbmQgd2hhdCBnaXZlcyBhIGZsYXQgcGFuZWwgYSB2ZXJ0aWNhbCByZWFkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdHJlYWtzID8/IDMwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDEwLCB5MCA9IHJuZCgpICogcyAqIDAuNSwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNyk7XG4gICAgICBjb25zdCB2ID0gbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjYsIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjE0O1xuICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwKWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAuMjUsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7YX0pYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIEZJTkUgR1JBSU4gYW5kIFNDUkFUQ0hFUy4gTWVhc3VyZWQgYWdhaW5zdCB0aGUgcGxhdGUgYXQgbWF0Y2hlZCBtYWduaWZpY2F0aW9uLCB0aGlzIGlzIHRoZVxuICAgIC8vIGxheWVyIHRoZSBmaXJzdCB0dW5pbmcgd2FzIG1pc3NpbmcgZW50aXJlbHk6IHRoZSBwbGF0ZSdzIHppbmMgaXMgc2NyYXRjaHkgYXQgMS0yIHB4IGV2ZXJ5d2hlcmVcbiAgICAvLyAtLSBkcmF3aW5nIG1hcmtzLCBoYW5kbGluZyBzY3VmZnMsIHRoZSBjcnlzdGFsIGJvdW5kYXJpZXMgdGhlbXNlbHZlcyAtLSBhbmQgd2l0aG91dCBpdCB0aGVcbiAgICAvLyBkcmlmdCBhbmQgdGhlIHNwYW5nbGUgcmVhZCBhcyBzb2Z0IHNub3cgb24gc21vb3RoIGdyZXkgaG93ZXZlciB3ZWxsIHRoZSBISVNUT0dSQU0gbWF0Y2hlcy4gVHdvXG4gICAgLy8gY3JvcHMgd2l0aCBpZGVudGljYWwgbWVhbiwgc2QgYW5kIHBlcmNlbnRpbGVzIGNhbiBsb29rIG5vdGhpbmcgYWxpa2U7IHRoZSBzdGF0aXN0aWMgdGhhdFxuICAgIC8vIHNlcGFyYXRlcyB0aGVtIGlzIHNwYXRpYWwgZnJlcXVlbmN5LCBzbyB0dW5lIHRoaXMgYnkgZXllIGFnYWluc3QgYSBtYXRjaGVkIGNyb3AsIG5vdCBieSBzZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMjtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC40ICsgcm5kKCkgKiAwLjYpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHswLjEwICsgcm5kKCkgKiAwLjMwfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjcmF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMDA2ICsgcm5kKCkgKiAwLjA1NSksIGEgPSAocm5kKCkgLSAwLjUpICogMC43ICsgTWF0aC5QSSAvIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC40NTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjUgKyBybmQoKSAqIDAuNSkgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKSAqIDAuODtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4yOH0pYDtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDEuNjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHkgKyBkeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIGR4ICsgTWF0aC5jb3MoYSkgKiBsZW4sIHkgKyBkeSArIE1hdGguc2luKGEpICogbGVuKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSVVNUIGZyb20gdGhlIHdlbGRzOiBhIHdhc2ggaW4gdGhlIHRvcCBhbmQgYm90dG9tIGJhbmRzLCBwbHVzIHJ1bnMgdHJhaWxpbmcgb3V0IG9mIGl0XG4gICAgaWYgKG8ucnVzdCkge1xuICAgICAgY29uc3QgYyA9IG8ucnVzdCwgYmFuZCA9IG8ucnVzdEJhbmQgPz8gMC4xNjtcbiAgICAgIGNvbnN0IHJnYnMgPSBgJHtNYXRoLnJvdW5kKDI1NSAqIGNbMF0pfSwke01hdGgucm91bmQoMjU1ICogY1sxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiBjWzJdKX1gO1xuICAgICAgLy8gdGhlIHR3byBiYW5kcyBhcmUgU0VQQVJBVEU6IG9uIGEgYmFycmllciB0aGUgZ3JvdW5kIGVuZCBjYXJyaWVzIHRoZSBmZWV0LCB0aGUgc3R1YiB3ZWxkcyBhbmRcbiAgICAgIC8vIGV2ZXJ5IHJ1biBvZmYgdGhlbSwgYW5kIHRoZSB0b3AgZW5kIGNhcnJpZXMgb25seSB0aGUgcmFpbCdzIG93biB3ZWxkcy4gT25lIHN5bW1ldHJpYyBiYW5kXG4gICAgICAvLyB3aWRlIGVub3VnaCB0byByZWFjaCB0aGUgcmFpbCB3ZWxkcyBhdCB2ID0gMC4yNiBhbHNvIHdhc2hlcyB0aGUgd2hvbGUgdXBwZXIgdGhpcmQgb2YgZXZlcnlcbiAgICAgIC8vIHBhbmVsLCB3aGljaCB0aGUgcGxhdGUgZG9lcyBub3QgaGF2ZS5cbiAgICAgIGZvciAoY29uc3QgW2VkZ2UsIGRpciwgYl0gb2YgW1swLCAxLCBvLnJ1c3RCYW5kVG9wID8/IGJhbmRdLCBbcywgLTEsIGJhbmRdXSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGVkZ2UsIDAsIGVkZ2UgKyBkaXIgKiBzICogYik7XG4gICAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYnN9LCR7by5ydXN0V2FzaCA/PyAwLjMwfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnJ1c3RSdW5zID8/IDIyKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTQ7XG4gICAgICAgIGNvbnN0IHRvcCA9IHJuZCgpIDwgMC41O1xuICAgICAgICBjb25zdCB5MCA9IHRvcCA/IDAgOiBzIC0gcyAqIGJhbmQgKiAoMC4zICsgcm5kKCkpO1xuICAgICAgICBjb25zdCBsZW4gPSBzICogKDAuMTAgKyBybmQoKSAqIDAuMzIpO1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwkezAuMTggKyBybmQoKSAqIDAuMzJ9KWApOyBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2JzfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAsIHcsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYW5vcHktbW9kdWxlIGhlbHBlcnNcbiAqIFRoZSBmaXZlIENBTk9QWSBNT0RVTEVTIC0tIG5pcGEgdGhhdGNoLCB2ZXRpdmVyIHRoYXRjaCwgc3BsaXQgYmFtYm9vLCBjb3JydWdhdGVkIG1ldGFsLFxuICogdGFycGF1bGluIC0tIGFyZSBvbmUgZmFtaWx5OiBmb3VyIGNvcm5lciBwb3N0cyBpbnNpZGUgYSA0IHggNCBtIG1vZHVsZSwgYSBoZWFkIGZyYW1lLCBhbmQgYSByb29mXG4gKiB3aG9zZSBtYXRlcmlhbCBpcyB0aGUgd2hvbGUgaWRlbnRpdHkuIFdoYXQgdGhleSBuZWVkIGJleW9uZCB0aGUgc3RyZWV0LXByb3Agdm9jYWJ1bGFyeSBpcyBhXG4gKiByb29maW5nIHRpbGUgcGVyIG1hdGVyaWFsIGFuZCB0aGUgY3VsbSBtYXBwaW5nIGEgcm91bmQgYmFtYm9vIHBvbGUgd2FudHMuXG4gKlxuICogYGN1bG1VVmAsIGBncmFpbkxpbmVzYCwgYHdlYXRoZXJQYXRjaGVzYCwgYG1vdWxkQ2x1c3RlcnNgIGFuZCBgY3VsbVRpbGVgIGFyZSBwb3J0ZWQgVkVSQkFUSU0gZnJvbVxuICogc2NyYXRjaC9fZmVuY2UvZmVuY2UuaGVscGVycy50bXBsLCB3aGVyZSB0aGV5IHdlcmUgd3JpdHRlbiBmb3IgdGhlIGJhbWJvbyBmZW5jZSBwYW5lbCBhbmQgd2hlcmVcbiAqIHRoZSByZWFzb25pbmcgYmVoaW5kIGV2ZXJ5IG51bWJlciBpcyByZWNvcmRlZC4gVGhleSBhcmUgY29waWVkIHJhdGhlciB0aGFuIHNoYXJlZCBiZWNhdXNlIHRoZSB0d29cbiAqIGZhbWlsaWVzIGtlZXAgc2VwYXJhdGUgdGVtcGxhdGUgc2V0czsgYSB0aGlyZCBmYW1pbHkgd2FudGluZyB0aGVtIHNob3VsZCBtb3ZlIHRoZW0gdXAgaW50b1xuICogaGVscGVycy50bXBsIHJhdGhlciB0aGFuIGNvcHkgdGhlbSBhIHNlY29uZCB0aW1lLlxuICovXG5cbi8qKiBDVUxNIFVWczogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UgYW5kIHYgYWxvbmcgdGhlIGxlbmd0aCwgYm90aCBpbiBtZXRyZXMgb3ZlciBgc2NhbGVgLCBzbyBhXG4gKiAgY3VsbSB0aWxlJ3Mgbm9kZSByaW5ncyBjcm9zcyB0aGUgY3VsbSBhdCByZWFsIHNwYWNpbmcgd2hpY2hldmVyIHdheSB0aGUgY3lsaW5kZXIgaXMgdGhlbiByb3RhdGVkLlxuICogIEFwcGx5IEJFRk9SRSByb3RhdGUvdHJhbnNsYXRlLiBgdk9mZmAgcGhhc2VzIHRoZSB0aWxlIGFsb25nIHRoZSBjdWxtIHNvIG5vIHR3byBjdWxtcyAob3IgYSBjb3JkXG4gKiAgY29sbGFyKSByaW5nIGF0IHRoZSBzYW1lIHN0YXRpb24uICovXG5mdW5jdGlvbiBjdWxtVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHI6IG51bWJlciwgaDogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCB2T2ZmID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgY29uc3Qga3UgPSAoMiAqIE1hdGguUEkgKiByKSAvIHNjYWxlLCBrdiA9IGggLyBzY2FsZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICoga3UsIHV2LmdldFkoaSkgKiBrdiArIHZPZmYpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4geTAgYW5kIHkxIGFjcm9zcyBhIGJhbmQgeDAuLngxOiBtYW55IGhhaXJsaW5lcywgbW9zdGx5IGEgZGFya1xuICogIGZpYnJlIHRvbmUsIGEgZmV3IGJsZWFjaGVkLCBzbyB0aGUgc3VyZmFjZSByZWFkcyBhcyBmaWJyb3VzIGJhbWJvbyByYXRoZXIgdGhhbiBwYWludC4gKi9cbmZ1bmN0aW9uIGdyYWluTGluZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBuOiBudW1iZXIsIGRhcms6IHN0cmluZywgbGlnaHQ6IHN0cmluZywgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeCA9IHgwICsgcm5kKCkgKiAoeDEgLSB4MCksIGEgPSAwLjA0ICsgcm5kKCkgKiBhTWF4LCB3ID0gcm5kKCkgPCAwLjc1ID8gMSA6IDEuNjtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtybmQoKSA8IDAuNzIgPyBkYXJrIDogbGlnaHR9LCR7YS50b0ZpeGVkKDMpfSlgO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5MCwgdywgeTEgLSB5MCk7XG4gIH1cbn1cblxuLyoqIFNvZnQgY2xvdWR5IHdlYXRoZXJpbmcgYWxvbmcgdGhlIGZpYnJlIGRpcmVjdGlvbjogbGVuZ3Rod2lzZSBwYXRjaGVzIG9mIHdhcm0gYnJvd24tZ3JleSAob2xkXG4gKiAgbGlnbmluIHNob3dpbmcgdGhyb3VnaCB0aGUgYmxlYWNoKSBhbmQgb2YgbmVhci13aGl0ZSAoc3VuLWJsZWFjaGVkIGZhY2VzKSwgc28gdGhlIHRvbmUgZHJpZnRzXG4gKiAgdGhlIHdheSB3ZWF0aGVyZWQgYmFtYm9vIGRvZXMgaW5zdGVhZCBvZiBzaXR0aW5nIGF0IG9uZSBncmV5LiBWZXJ0aWNhbCA9IGFsb25nIHRoZSBmaWJyZS4gKi9cbmZ1bmN0aW9uIHdlYXRoZXJQYXRjaGVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBuOiBudW1iZXIsIHdhcm1BOiBudW1iZXIsIGJsZWFjaEE6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4xMiArIHJuZCgpICogMC40NSksIHdhcm0gPSBybmQoKSA8IDAuNTtcbiAgICBjb25zdCBjID0gd2FybSA/ICcxMTIsMTAwLDg4JyA6ICcyNTUsMjU1LDI1NScsIGEgPSB3YXJtID8gd2FybUEgKiAoMC40ICsgcm5kKCkgKiAwLjYpIDogYmxlYWNoQSAqICgwLjQgKyBybmQoKSAqIDAuNik7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIGxlbik7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y30sMClgKTsgZzIuYWRkQ29sb3JTdG9wKDAuMzUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNjUsIGByZ2JhKCR7Y30sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y30sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeDAsIHkgKyBkeSwgeDEgLSB4MCwgbGVuKTtcbiAgfVxufVxuXG4vKiogTW91bGQ6IGNsdXN0ZXJzIG9mIHNtYWxsIGRhcmsgc3BlY2tzIChhIGZldyBkb3plbiBlYWNoKSwgdGhlIHdheSBibGFjayBtb3VsZCBzaXRzIG9uIG91dGRvb3JcbiAqICBiYW1ib28gLS0gZGVuc2UgYXQgYSBmZXcgc3BvdHMsIGFic2VudCBlbHNld2hlcmUuIEFscGhhIGNhcHBlZCBzbyB0aGUgZGFya2VzdCBzcGVjayBvdmVyIHRoZVxuICogIG1lYXN1cmVkIGFsYmVkbyBzdGF5cyB3ZWxsIGNsZWFyIG9mIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LiBXcmFwcyBpbiB5LiAqL1xuZnVuY3Rpb24gbW91bGRDbHVzdGVycyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgc3BvdHM6IG51bWJlcltdW10sIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIG46IG51bWJlciwgYU1heDogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAoY29uc3QgW2N4LCBjeV0gb2Ygc3BvdHMpIHtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgTWF0aC5tYXgocngsIHJ5KSAqIDAuOCk7XG4gICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI4LDI2LDIyLCR7KGFNYXggKiAwLjkpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjgsMjYsMjIsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBjeCArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeCwgeSA9IGN5ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ5O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI4LDI2LDIyLCR7KDAuMDggKyBybmQoKSAqIGFNYXgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDM7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQ1VMTSB0aWxlIGZvciB0aGUgd2hvbGUtYmFtYm9vIHBvc3QgYW5kIHJhaWxzOiB4IHJ1bnMgQVJPVU5EIHRoZSBjdWxtLCB5IEFMT05HIGl0IChzZWUgY3VsbVVWKSxcbiAqICAwLjYgbSBvZiBjdWxtIHBlciB0aWxlLiBUd28gbm9kZSByaW5ncyBwZXIgdGlsZSBhdCBpcnJlZ3VsYXIgc3RhdGlvbnMgLS0gYSBkYXJrIGdyb292ZSB1bmRlciBhXG4gKiAgcGFsZSByYWlzZWQgcmlkZ2UsIHRoZSBncmFpbiBicmVha2luZyBhdCBlYWNoIC0tIHdpdGggZmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB0aGVtLCBhXG4gKiAgbG9uZyBkcnlpbmcgc3BsaXQsIGxlbmd0aHdpc2Ugd2VhdGhlcmluZyBwYXRjaGVzIGFuZCBibGFjayBtb3VsZCBnYXRoZXJlZCBqdXN0IGJlbG93IGVhY2ggbm9kZSxcbiAqICBhcyBpbiB0aGUgcGxhdGUncyBwb3N0IGFuZCByYWlsIGNyb3BzLiBBIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIGN1bG0gZ3JleS4gKi9cbmZ1bmN0aW9uIGN1bG1UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTIsNzgsNjInLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjBlZmVjJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCB0b25lIGRyaWZ0IGFyb3VuZCB0aGUgY3VsbSwgc28gdGhlIHJvdW5kIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTsgZ2EuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknKTsgZ2EuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxNCwgMC4xMiwgMC4zMCk7XG4gICAgLy8gbm9kZSBzdGF0aW9uczogdHdvIHBlciB0aWxlLCBpcnJlZ3VsYXIsIG5ldmVyIHdpdGhpbiAwLjE4IG9mIGVhY2ggb3RoZXIgb3IgdGhlIHdyYXBcbiAgICBjb25zdCBub2RlcyA9IFtzICogKDAuMjAgKyBybmQoKSAqIDAuMTApLCBzICogKDAuNjYgKyBybmQoKSAqIDAuMTIpXTtcbiAgICAvLyBncmFpbiBpbiBzZWdtZW50cyBiZXR3ZWVuIHRoZSBub2RlcyBzbyBpdCBicmVha3MgYXQgZWFjaCByaW5nXG4gICAgY29uc3Qgc3RhdGlvbnMgPSBbMCwgLi4ubm9kZXMsIHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCBzdGF0aW9uc1tpXSwgc3RhdGlvbnNbaSArIDFdLCAyNjAsIERBUkssIExJR0hULCAwLjI2KTtcbiAgICAvLyBhIGNvdXBsZSBvZiBsb25nIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzOCwzMiwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE4KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdzXG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBncyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5IC0gcyAqIDAuMDMsIDAsIHkpO1xuICAgICAgZ3MuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDApJyk7IGdzLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwLjIyKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdzOyBjdHguZmlsbFJlY3QoMCwgeSAtIHMgKiAwLjAzLCBzLCBzICogMC4wMyk7ICAgICAgICAgIC8vIHNoYWRlIHVwIHRvIHRoZSByaW5nXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTIsNDQsMzYsMC42MiknOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMi41KTsgICAgICAgIC8vIHRoZSBncm9vdmVcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM0KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMi41LCBzLCA0KTsgLy8gdGhlIHJhaXNlZCBzaGVhdGggcmlkZ2VcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgNi41LCBzLCAxLjUpOyAgLy8gaXRzIGxvd2VyIGVkZ2VcbiAgICAgIGNvbnN0IGdkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgKyA4LCAwLCB5ICsgcyAqIDAuMDUpO1xuICAgICAgZ2QuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDAuMjApJyk7IGdkLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdkOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIHMgKiAwLjA1KTtcbiAgICB9XG4gICAgLy8gbW91bGQgZ2F0aGVycyBqdXN0IGJlbG93IHRoZSBub2RlcyBhbmQgaW4gYSBjb3VwbGUgb2YgbG9vc2UgcGF0Y2hlc1xuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChjb25zdCB5IG9mIG5vZGVzKSBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCB5ICsgcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4xMCwgcyAqIDAuMDYsIDkwLCAwLjMwKTtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBUSEFUQ0ggdGlsZSwgZm9yIGEgcm9vZiBtYXBwZWQgd2l0aCBXT1JMRCBVVnMgc28gdSBydW5zIGFsb25nIHRoZSByaWRnZSBhbmQgdiB1cCB0aGUgc2xvcGUuXG4gKlxuICogVGhhdGNoIGlzIGxhaWQgaW4gQ09VUlNFUzogZWFjaCBjb3Vyc2UgaXMgYSBidW5kbGUgb2Ygc3RlbXMgcGVnZ2VkIHRvIGEgcHVybGluIHdpdGggaXRzIGJ1dHRzXG4gKiBoYW5naW5nIG92ZXIgdGhlIGNvdXJzZSBiZWxvdywgc28gd2hhdCBhIHZpZXdlciBhY3R1YWxseSByZXNvbHZlcyBhdCBwcm9wIGRpc3RhbmNlIGlzIGEgc3RhY2sgb2ZcbiAqIGhvcml6b250YWwgYmFuZHMgd2l0aCBhIHNoYWRvdyBsaW5lIHVuZGVyIGVhY2ggYnV0dCwgYW5kIGEgZmlicmUgdGV4dHVyZSBydW5uaW5nIGRvd24gdGhlIHNsb3BlXG4gKiBpbnNpZGUgdGhlbS4gTW9kZWxsaW5nIHRoZSBzdGVtcyBpcyB3aGF0IHRoZSByZWdpc3RyeSBub3RlcyBmb3JiaWQ7IHRoaXMgaXMgd2hlcmUgdGhhdCBkZXRhaWxcbiAqIGdvZXMgaW5zdGVhZC5cbiAqXG4gKiBPbmUgdGlsZSBpcyBgY291cnNlc2AgY291cnNlcyB0YWxsLiBUaGUga25vYnMgYXJlIHdoYXQgc2VwYXJhdGVzIHRoZSB0d28gdGhhdGNoZXMgb24gdGhlIHBsYXRlczpcbiAqICAgbmlwYSAgICAgYnJvYWQgZmxhdCBwYWxtIGJsYWRlcyAtLSBmZXcgd2lkZSBzdHJva2VzIChgc3RlbVdgIDMtNyBweCksIGEgd2lkZSB0b25hbCBgc3ByZWFkYCxcbiAqICAgICAgICAgICAgYSBkZWVwbHkgUkFHR0VEIGJ1dHQgbGluZSBhbmQgb2NjYXNpb25hbCBtaXNzaW5nIGJsYWRlcy5cbiAqICAgdmV0aXZlciAgY29tYmVkIGdyYXNzIC0tIGh1bmRyZWRzIG9mIGhhaXJsaW5lcywgYSBuYXJyb3cgc3ByZWFkLCBhbiBhbG1vc3Qgc3RyYWlnaHQgYnV0dC5cbiAqIGBtb3NzYCBtdWx0aXBsaWVzIGEgZ3JlZW4gY2FzdCBpbnRvIHNjYXR0ZXJlZCBwYXRjaGVzOiB0aGUgdGlsZSBpcyBhIE1VTFRJUExJRVIgb24gYSBwYWxlIHN0cmF3XG4gKiBhbGJlZG8sIGFuZCBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gZ3JlZW4gaGFzIHRvIGFycml2ZSBhcyBcImxlc3MgcmVkIGFuZCBibHVlXCIgYW5kIG5ldmVyXG4gKiBhcyBhIHBhaW50ZWQgZ3JlZW4uIE5vdGhpbmcgaGVyZSBnb2VzIGJlbG93IDAuNDIgb2YgdGhlIGFsYmVkbywgd2hpY2gga2VlcHMgdGhlIGRhcmtlc3QgdGV4ZWwgb2ZcbiAqIGEgc3RyYXcgYXQgbHVtYSB+MTUwIHdlbGwgY2xlYXIgb2YgdGhlIHNpbGhvdWV0dGUgZ2F0ZSdzIGJhY2tkcm9wIGJhbmQuXG4gKi9cbmZ1bmN0aW9uIHRoYXRjaFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBuYzogbnVtYmVyID0gby5jb3Vyc2VzID8/IDQsIGNoID0gcyAvIG5jO1xuICAgIGNvbnN0IHN0ZW1zOiBudW1iZXIgPSBvLnN0ZW1zID8/IDI2MCwgc3ByZWFkOiBudW1iZXIgPSBvLnNwcmVhZCA/PyAwLjEyO1xuICAgIGNvbnN0IHdNaW46IG51bWJlciA9IG8uc3RlbVc/LlswXSA/PyAxLCB3TWF4OiBudW1iZXIgPSBvLnN0ZW1XPy5bMV0gPz8gMjtcbiAgICBjb25zdCByYWdnZWQ6IG51bWJlciA9IG8ucmFnZ2VkID8/IDAuMDY7ICAgICAgICAgICAgICAgICAvLyBidXR0LWxpbmUgd2F2aW5lc3MsIGFzIGEgc2hhcmUgb2YgY2hcbiAgICBjb25zdCBbc3IsIHNnLCBzYl06IG51bWJlcltdID0gby5zdGVtUmdiID8/IFsxMjAsIDEwNiwgODRdOyAgIC8vIHRoZSBkYXJrIGJsYWRlIHRpbnQ7IG5pcGEgaXMgZ3JleWVyIHRoYW4gZ3Jhc3NcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyB0aGUgYnV0dCBsaW5lIG9mIGVhY2ggY291cnNlLCBqaXR0ZXJlZCBwZXIgY29sdW1uIGFuZCBTSEFSRUQgd2l0aCB0aGUgY291cnNlIGFib3ZlIHNvIHRoZVxuICAgIC8vIHNoYWRvdyBhbmQgdGhlIGJsYWRlcyBhZ3JlZSBvbiB3aGVyZSB0aGUgZWRnZSBpc1xuICAgIGNvbnN0IGJ1dHRzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPD0gbmM7IGMrKykge1xuICAgICAgY29uc3Qgcm93OiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gczsgeCsrKSB7XG4gICAgICAgIGlmICh4ICUgTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzIC8gNDgpKSA9PT0gMCkgeSA9IChybmQoKSAqIDIgLSAxKSAqIHJhZ2dlZCAqIGNoO1xuICAgICAgICByb3cucHVzaChjICogY2ggKyB5KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHkwID0gYyAqIGNoO1xuICAgICAgLy8gdGhlIGNvdXJzZSdzIG93biB0b25lOiB0aGF0Y2ggd2VhdGhlcnMgY291cnNlIGJ5IGNvdXJzZSwgdGhlIGxvd2VyIG9uZXMgZ3JleWVyXG4gICAgICBjb25zdCB0ID0gMSAtIHNwcmVhZCAqIHJuZCgpO1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45ODUpfSwke01hdGgucm91bmQodiAqIDAuOTUpfSlgO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIHkwIC0gcmFnZ2VkICogY2ggLSAxLCBzLCBjaCArIDIgKiByYWdnZWQgKiBjaCArIDIpO1xuICAgICAgLy8gc3RlbXMgcnVubmluZyBET1dOIHRoZSBzbG9wZSBpbnNpZGUgdGhlIGNvdXJzZSwgZWFjaCBhIGxpdHRsZSBwYXN0IGl0cyBidXR0IGxpbmVcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3RlbXM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjb25zdCB3ID0gd01pbiArIHJuZCgpICogKHdNYXggLSB3TWluKTtcbiAgICAgICAgY29uc3QgdG9uZSA9IDEgLSBzcHJlYWQgKiAoMC4zICsgcm5kKCkgKiAwLjcpO1xuICAgICAgICBjb25zdCBhID0gMC4xOCArIHJuZCgpICogMC4zMjtcbiAgICAgICAgY29uc3QgZGFyayA9IHJuZCgpIDwgMC42MjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRhcmsgPyBgcmdiYSgke01hdGgucm91bmQoc3IgKiB0b25lKX0sJHtNYXRoLnJvdW5kKHNnICogdG9uZSl9LCR7TWF0aC5yb3VuZChzYiAqIHRvbmUpfSwke2EudG9GaXhlZCgzKX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGByZ2JhKDI1NSwyNTMsMjQ2LCR7KGEgKiAwLjYpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGNvbnN0IHlUb3AgPSB5MCAtIGNoICogKDAuMTUgKyBybmQoKSAqIDAuMjUpO1xuICAgICAgICBjb25zdCB5Qm90ID0gYnV0dHNbYyArIDFdW01hdGgubWluKHMsIE1hdGgucm91bmQoeCkpXSArIGNoICogKHJuZCgpICogMC4xMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5VG9wLCB3LCBNYXRoLm1heCgyLCB5Qm90IC0geVRvcCkpO1xuICAgICAgICAvLyBUT1JOIFRJUDogc29tZSBibGFkZXMgcnVuIG9uIHBhc3QgdGhlIGJ1dHQgbGluZSBhbmQgZW5kIGluIGEgcG9pbnQsIHNvIHRoZSBjb3Vyc2UgZWRnZSBpc1xuICAgICAgICAvLyBhIGZyaW5nZSBvZiBpbmRpdmlkdWFsIGJsYWRlcyByYXRoZXIgdGhhbiBhIHdhdnkgY3V0ICh0aGUgbmlwYSBwbGF0ZSdzIHdob2xlIGNoYXJhY3RlcilcbiAgICAgICAgY29uc3QgdGVhcjogbnVtYmVyID0gby50ZWFyID8/IDA7XG4gICAgICAgIGlmICh0ZWFyID4gMCAmJiBybmQoKSA8IDAuNDUpIHtcbiAgICAgICAgICBjb25zdCBMID0gY2ggKiB0ZWFyICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeUJvdCk7IGN0eC5saW5lVG8oeCArIHcsIHlCb3QpOyBjdHgubGluZVRvKHggKyB3IC8gMiwgeUJvdCArIEwpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDU4LDQ4LDM2LCR7KDAuMTAgKyBybmQoKSAqIDAuMTYpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KHggLSAxLCB5Qm90LCB3ICsgMiwgTCAqIDAuNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEJMQURFIFNFQU1TOiBhIHRoaW4gZGFyayBsaW5lIGJldHdlZW4gbmVpZ2hib3VyaW5nIGJsYWRlcywgd2hpY2ggaXMgd2hhdCBzZXBhcmF0ZXMgYSBuaXBhXG4gICAgICAvLyByb29mIChicm9hZCBsZWFmbGV0cyBsYWlkIHNpZGUgYnkgc2lkZSkgZnJvbSBjb21iZWQgZ3Jhc3MgdGhhdGNoXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNlYW1zID8/IDApOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDcwLDYwLDQ2LCR7KDAuMTAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCAtIGNoICogMC4xLCAxLCBjaCAqICgwLjcgKyBybmQoKSAqIDAuNSkpO1xuICAgICAgfVxuICAgICAgLy8gTUlTU0lORyBibGFkZXM6IGEgZmV3IGdhcHMgd2hlcmUgdGhlIGNvdXJzZSBoYXMgdGhpbm5lZCwgZGFyayBidXQgbmV2ZXIgYmxhY2tcbiAgICAgIGNvbnN0IGdhcHMgPSBvLmdhcHMgPz8gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ2FwczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDEgKyBybmQoKSAqIDAuMDMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoOTYsODQsNjYsJHsoMC4yMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwICsgY2ggKiAwLjI1LCB3LCBjaCAqICgwLjQgKyBybmQoKSAqIDAuNSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBzaGFkb3cgZWFjaCBjb3Vyc2UncyBidXR0IGNhc3RzIG9uIHRoZSBvbmUgYmVsb3c6IGEgZ3JhZGllbnQgZmFsbGluZyBBV0FZIGZyb20gdGhlIGxpbmUsXG4gICAgLy8gZHJhd24gYWxvbmcgdGhlIGppdHRlcmVkIGJ1dHQgc28gdGhlIHNoYWRvdyBpcyBhcyByYWdnZWQgYXMgdGhlIGVkZ2UgdGhhdCBjYXN0cyBpdCwgd2l0aCB0aGVcbiAgICAvLyBMSVQgVElQUyBvZiB0aGUgY291cnNlIGFib3ZlIGl0IGFzIGEgcGFsZSBsaW5lLiBUaGUgcGFpciBpcyB3aGF0IG1ha2VzIHRoZSByb29mIHJlYWQgYXNcbiAgICAvLyBzdGFja2VkIGxheWVyczsgdGhlIHNoYWRvdyBhbG9uZSByZWFkcyBhcyBncmFpbiwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYnVpbGQgbG9va2VkIGxpa2UuXG4gICAgZm9yIChsZXQgYyA9IDE7IGMgPD0gbmM7IGMrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgeWIgPSBidXR0c1tjXVt4XTtcbiAgICAgICAgY29uc3QgZ2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIgLSBjaCAqIDAuMDksIDAsIHliKTtcbiAgICAgICAgZ2guYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTIsMjQyLDApJyk7IGdoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgyNTUsMjUyLDI0MiwkeyhvLnRpcCA/PyAwLjM0KS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdoO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiAtIGNoICogMC4wOSArIGR5LCAxLCBjaCAqIDAuMDkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWIgKyBjaCAqIDAuMjIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoNTgsNDgsMzYsJHsoby5zaGFkb3cgPz8gMC40MikudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1OCw0OCwzNiwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliICsgZHksIDEsIGNoICogMC4yMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9TUyAvIE1PVUxEOiBsZXNzIHJlZCBhbmQgYmx1ZSBvdmVyIHNvZnQgcGF0Y2hlcywgbmV2ZXIgYSBwYWludGVkIGdyZWVuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTQpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4xNCArIHJuZCgpICogMC4yMjtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTkwLDExMCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTkwLDExMCwwKScpO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7IGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG4gICAgLy8gUk9UOiBkYXJrIGdyZXktYnJvd24gcGF0Y2hlcyB3aGVyZSB0aGUgdGhhdGNoIGhhcyBkZWNheWVkLCBuZXV0cmFsIHJhdGhlciB0aGFuIGdyZWVuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5yb3QgPz8gMCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4wOCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjMwICsgcm5kKCkgKiAwLjI1O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDk2LDg2LDc0LCR7YS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoOTYsODYsNzQsJHsoYSAqIDAuNSkudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5Niw4Niw3NCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gc29mdCB0b25hbCBkcmlmdCBzbyB0aGUgY291cnNlcyBkbyBub3QgcmVhZCBhcyBhIHByaW50ZWQgc3RyaXBlXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMCwgMC4xMCwgMC4yMik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdPVkVOIFRBUlBBVUxJTiB0aWxlOiB0aGUgY29hcnNlIGNyb3NzLXdvdmVuIHBvbHlwcm9weWxlbmUgdGFwZSBvZiBhIFRoYWkgYnVpbGRlcidzIHRhcnAsIHBsdXNcbiAqIHRoZSBjcmVhc2VzIGEgZm9sZGVkIHNoZWV0IGtlZXBzIGZvciBsaWZlIGFuZCB0aGUgc3VuLWJsZWFjaGluZyBhbG9uZyB0aGUgcmlkZ2VzLiBBIG11bHRpcGxpZXIgb25cbiAqIHRoZSBtZWFzdXJlZCBibHVlLCBzbyB0aGUgd2VhdmUgZGFya2VucyBhbmQgdGhlIGJsZWFjaCBsaWZ0cyB0b3dhcmQgd2hpdGUuXG4gKi9cbmZ1bmN0aW9uIHRhcnBUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5tYXgoMywgTWF0aC5yb3VuZChzIC8gKG8udGFwZXMgPz8gNjQpKSk7XG4gICAgLy8gdGhlIHdlYXZlOiB3YXJwIGFuZCB3ZWZ0IHRhcGVzLCBlYWNoIHBhaXIgd2l0aCBhIHNoYWRvdyBhdCBpdHMgam9pbiwgYWx0ZXJuYXRpbmcgb3Zlci91bmRlclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCh4ICsgMSwgMCwgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSwgcyk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgczsgeSArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAxKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMSwgcywgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSk7XG4gICAgfVxuICAgIC8vIGZvbGQgY3JlYXNlczogbG9uZyBwYWxlIGxpbmVzIHdpdGggYSBzaGFkb3cgb24gb25lIHNpZGUsIGF0IHRoZSB0d28gYXhlcyBhIHRhcnAgaXMgZm9sZGVkIG9uXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jcmVhc2VzID8/IDYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGhvcml6ID0gcm5kKCkgPCAwLjUsIHAgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC41ICsgcm5kKCkgKiAwLjUpLCBxID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBpZiAoaG9yaXopIHsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwLCBsZW4sIDEuNik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCArIDEuNiwgbGVuLCAyKTsgfVxuICAgICAgZWxzZSB7IGN0eC5maWxsUmVjdChwLCBxIC0gbGVuIC8gMiwgMS42LCBsZW4pOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocCArIDEuNiwgcSAtIGxlbiAvIDIsIDIsIGxlbik7IH1cbiAgICB9XG4gICAgLy8gc3VuLWJsZWFjaGVkIHN0cmVha3MgYW5kIGEgbGl0dGxlIGdyaW1lXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMiwgMC4xMCwgMC4zNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNBV04gVElNQkVSIHRpbGUgZm9yIGEgd2VhdGhlcmVkIHBvc3QtYW5kLXBsYXRlIGZyYW1lOiBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiwgYSBmZXcga25vdHMsIHRoZVxuICogb2RkIGRyeWluZyBzcGxpdCwgYW5kIGNsb3VkeSBzaWx2ZXIgd2VhdGhlcmluZy4gRGVsaWJlcmF0ZWx5IFdFQUtMWSBkaXJlY3Rpb25hbCAtLSB0aGUgZnJhbWUgaXNcbiAqIG1hcHBlZCB3aXRoIHdvcmxkIFVWcywgd2hpY2ggcHV0IHYgYWxvbmcgdGhlIHBvc3QgYnV0IEFDUk9TUyBhIGJlYW0sIGFuZCBhIHN0cm9uZ2x5IHN0cmlwZWQgdGlsZVxuICogd291bGQgdGhlbiByZWFkIGFzIGEgcGxhbmsgam9pbnQgcnVubmluZyB0aGUgd3Jvbmcgd2F5IG9uIGhhbGYgdGhlIGZyYW1lLiBUaGUgd2VhdGhlcmluZyBjYXJyaWVzXG4gKiBtb3N0IG9mIHRoZSByZWFkIGFuZCB0aGUgZ3JhaW4gb25seSBzaGFycGVucyBpdCwgd2hpY2ggc3Vydml2ZXMgYm90aCBvcmllbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNhd25UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Niw4NCw2OCcsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmNGYyZWUnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAyMCwgMC4xNCwgMC4zMCk7XG4gICAgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgMCwgcywgby5ncmFpbiA/PyAyMjAsIERBUkssIExJR0hULCAwLjE4KTtcbiAgICAvLyBrbm90czogYSBkYXJrIGVsbGlwc2Ugd2l0aCB0aGUgZ3JhaW4gc3dlZXBpbmcgcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmtub3RzID8/IDQpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAyKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg3NCw2MCw0NCwwLjQ1KSc7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAxLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTYsODAsNjAsMC4yMiknOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgZm9yIChsZXQgcSA9IDE7IHEgPD0gMzsgcSsrKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAoMSArIHEgKiAwLjYpLCByICogKDEuNiArIHEgKiAwLjkpLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc3BsaXRzID8/IDMpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjQ1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1OCw0OCwzNiwwLjQyKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE2KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5tb3VsZCA/PyAzKTsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4wOSwgcyAqIDAuMDcsIDcwLCAwLjI0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogR0FMVkFOSVNFRCBTSEVFVCB3ZWF0aGVyaW5nOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIHRoZSB0aHJlZSB0aGluZ3MgYSB6aW5jIHJvb2ZcbiAqIGFjdHVhbGx5IHNob3dzIC0tIHRoZSBjaGFsa3kgd2hpdGUgb3hpZGF0aW9uIHRoYXQgZWF0cyB0aGUgc3BhbmdsZSwgdGhlIGRhcmtlciBncmV5IGRyaWZ0IHdoZXJlXG4gKiBpdCBoYXMgbm90LCBhbmQgdGhlIHdhcm0gcnVzdCBmcmVja2xlcyB0aGF0IHN0YXJ0IGF0IGV2ZXJ5IGZpeGluZyBhbmQgbGFwLlxuICpcbiAqIExpa2UgYHBhaW50VGlsZWAgaXQgaXMgZHJhd24gaW4gQUJTT0xVVEUgbXVsdGlwbGllciBzcGFjZSBvdmVyIGEgUkUtQkFTRUQgZW52ZWxvcGUsIGJlY2F1c2VcbiAqIGNoYWxraW5nIGlzIEJSSUdIVEVSIHRoYW4gdGhlIGNsZWFuIHNoZWV0IGl0IHNpdHMgb24gYW5kIGEgcGxhaW4gbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBgby5iYXNlYFxuICogaXMgdGhlIGNsZWFuIHppbmMncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUgYW5kIGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWRcbiAqIHdpdGg7IGBvLmNoYWxrYCByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGVudmVsb3BlLiBNZWFzdXJlZCBvZmYgdGhlIHBsYXRlLCB0aGUgZGVjayBydW5zIDE3MiB0byAxOTdcbiAqIGx1bWEgYWNyb3NzIGl0cyBvd24gc3VyZmFjZSBhdCBhIHNhdHVyYXRpb24gb2YgMC4wNCAtLSBhIDI1LWx1bWEgc3ByZWFkIG9uIGEgbm9taW5hbGx5IGZsYXQgZ3JleSxcbiAqIHdoaWNoIGlzIHRoZSB3aG9sZSBkaWZmZXJlbmNlIGJldHdlZW4gYSByb29mIGFuZCBhIHNoZWV0IG9mIHBsYXN0aWMuXG4gKlxuICogYGNoYWxrU2NhbGVgIC8gYGRyaWZ0U2NhbGVgIGV4aXN0IGJlY2F1c2Ugb24gYSByb29mIHRoZSB0aWxlIGlzIHNtYWxsIGFnYWluc3QgdGhlIHN1cmZhY2U6IHRoZVxuICogZGVjayByZXBlYXRzIGl0IGZvdXIgdGltZXMgYWNyb3NzLCBzbyBhbnkgbWFyayB3aWRlciB0aGFuIGEgdGVudGggb2YgaXQgZHJhd3MgYSB2aXNpYmxlIGxhdHRpY2UuXG4gKiBUaGUgQlJPQUQgY2hhbGsgem9uZXMgYmVsb25nIG9uIHRoZSBzaGVldCdzIG93biB2ZXJ0ZXggZ3JpZCwgd2hpY2ggZG9lcyBub3QgcmVwZWF0OyB3aGF0IHRoZSB0aWxlXG4gKiBvd2VzIGlzIHRoZSBmaW5lIHNwZWNrbGUgaW5zaWRlIHRoZW0uXG4gKlxuICogVGhlIHJvbGwgbWFya3MgYXJlIGRyYXduIExBU1QgYW5kIGFsb25nIHUsIHdoaWNoIG9uIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIGlzIHRoZSBheGlzIHRoZSBtb2RlbGxlZFxuICogZmx1dGVzIHJ1biBhY3Jvc3MuIFRoZXkgYXJlIHdoYXQgdGhlIHRpbGUgc3RpbGwgb3dlcyB0aGUgZ2VvbWV0cnkgb25jZSB0aGUgY29ycnVnYXRpb24gaXRzZWxmIGlzXG4gKiByZWFsOiBhIHJvbGwgZm9ybWVyIGxlYXZlcyBmaW5lIGxlbmd0aHdpc2Ugc3RyaWF0aW9uIGJldHdlZW4gdGhlIGZsdXRlcywgYW5kIGBidW1wYCBwaWNrcyBpdCB1cC5cbiAqL1xuZnVuY3Rpb24gZ2FsdlRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIGNoYWxrID0gby5jaGFsayA/PyBiYXNlLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGRhcmsgPSBvLmRhcmsgPz8gYmFzZTtcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEsIHJvdCA9IDApID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7YSAqIDAuNX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYmFzZSBmaWxsIGNhcnJpZXMgdGhlIEZMVVRFIHNoYWRpbmcgd2hlbiBgZmx1dGVzYCBpcyBzZXQ6IGBmbHV0ZXNgIHJpcHBsZXMgcGVyIHRpbGUsIGluXG4gICAgLy8gcGhhc2Ugd2l0aCB0aGUgbW9kZWxsZWQgY29ycnVnYXRpb24gKGEgdHJvdWdoIGF0IHUgPSAwLCB3aGljaCBpcyB3aGVyZSB0aGUgZGVjaydzIHdvcmxkIFVWcyBwdXRcbiAgICAvLyBvbmUpLiBUaGUgZ2VvbWV0cnkgYWxyZWFkeSB0dXJucyB0aGUgZmx1dGVzIHRvIHRoZSBsaWdodCAtLSB0aGlzIGlzIHRoZSBhbWJpZW50IGRhcmtlbmluZyBpblxuICAgIC8vIHRoZSB2YWxsZXlzIGFuZCB0aGUgcm9sbC1mb3JtZXIncyBvd24gcG9saXNoIG9uIHRoZSBjcmVzdHMsIHdoaWNoIGZsYXQgc3R1ZGlvIGxpZ2h0aW5nIG9uIGFcbiAgICAvLyBzbW9vdGgtc2hhZGVkIHRyaWFuZ2xlIHdhdmUgZ2l2ZXMgbm9uZSBvZi4gT3V0IG9mIHBoYXNlIGl0IHdvdWxkIEJFQVQgd2l0aCB0aGUgZ2VvbWV0cnksIHdoaWNoXG4gICAgLy8gaXMgd2h5IHRoZSBwaXRjaCBpcyBsb2NrZWQgdG8gdGhlIGRlY2sncyBvd24gMTMgZmx1dGVzIHBlciBtZXRyZSByYXRoZXIgdGhhbiBjaG9zZW4uXG4gICAgY29uc3QgZmwgPSBvLmZsdXRlcyA/PyAwLCBmbG93ID0gby5mbHV0ZUxvdyA/PyAwLjg4O1xuICAgIGlmIChmbCA+IDApIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSAoMSAtIE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBmbCkpIC8gMjsgICAvLyAwIGluIHRoZSB0cm91Z2gsIDEgYXQgdGhlIGNyZXN0XG4gICAgICAgIGNvbnN0IGsgPSBmbG93ICsgKDEgLSBmbG93KSAqIHQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UubWFwKCh2OiBudW1iZXIpID0+IHYgKiBrKSl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpOyB9XG5cbiAgICAvLyAxLiB0aGUgZ3JleSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgdGhlIGFyZWFzIHRoZSBjaGFsayBoYXMgbm90IHJlYWNoZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE2KTsgaSsrKVxuICAgICAgYmxvYihkYXJrLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE2ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMTAgKyBybmQoKSAqIDAuMTgsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuXG4gICAgLy8gMi4gdGhlIGNoYWxrIGJsb29tOiBMQVJHRSwgc29mdCBhbmQgaXJyZWd1bGFyLCB3aXRoIGEgZ3JhbnVsYXIgZnJpbmdlLiBPbiBhIHJvb2YgaXQgaXMgdGhlXG4gICAgLy8gICAgZG9taW5hbnQgbWFyayAtLSB0aGUgcGxhdGUncyBkZWNrIGlzIG1vcmUgY2hhbGsgdGhhbiBjbGVhbiBzaGVldCAtLSBzbyBpdCBpcyBkcmF3biB3aWRlIGFuZFxuICAgIC8vICAgIGF0IGhpZ2ggYWxwaGEsIHVubGlrZSB0aGUgc3BhcnNlIGJsb29tcyBvZiBhIHBhaW50ZWQgcGFuZWwuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gMTQpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpICogKG8uY2hhbGtTY2FsZSA/PyAxKTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIChvLmNoYWxrQWxwaGEgPz8gMC41NSkgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4zO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBydXN0OiBzbWFsbCB3YXJtIGZyZWNrbGUgY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHVuZGVyIGEgZmllbGQgb2Ygc3BlY2tzLCB3aXRoIGEgc2hvcnRcbiAgICAvLyAgICBydW4gYmVsb3cgaXQuIFppbmMgZG9lcyBub3Qgc2hlZXQtcnVzdCB0aGUgd2F5IGJhcmUgc3RlZWwgZG9lcyAtLSBpdCBmcmVja2xlcyBmaXJzdC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxMCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNTUpO1xuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAwLjI1ICsgcm5kKCkgKiAwLjMwLCAwLjcgKyBybmQoKSAqIDAuNywgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyAyNik7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjcgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMjUgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICBpZiAocm5kKCkgPCAwLjYpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgbGVuID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydXN0KX0sJHswLjE0ICsgcm5kKCkgKiAwLjE2fSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiByb2xsIG1hcmtzOiBmaW5lIGxpbmVzIG9mIGNvbnN0YW50IHUsIGF0IGByb2xsc2AgcGVyIHRpbGUsIGFsdGVybmF0ZWx5IGEgc2hhZGUgdW5kZXIgYW5kIGFcbiAgICAvLyAgICBzaGFkZSBvdmVyIHRoZSB0b25lIHRoZXkgY3Jvc3MuIEJvdW5kIGFzIGEgYnVtcCBtYXAgdGhleSBhcmUgdGhlIHN0cmlhdGlvbiBiZXR3ZWVuIGZsdXRlcy5cbiAgICBjb25zdCByb2xscyA9IG8ucm9sbHMgPz8gNDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xsczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gKGkgKyAwLjM1ICsgcm5kKCkgKiAwLjMpICogcyAvIHJvbGxzLCB1cCA9IHJuZCgpIDwgMC40NTtcbiAgICAgIGNvbnN0IGMgPSB1cCA/IGNoYWxrIDogZGFyaywgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke3JnYihjKX0sJHthfSlgOyBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjM7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgMCk7IGN0eC5saW5lVG8oeCArIGR4LCBzKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNQTElULUNVTE0gdGlsZSBmb3IgdGhlIGhhbGYtcGlwZSByb29maW5nOiB4IEFST1VORCB0aGUgaGFsZiBjdWxtIChjdWxtVVYgb3ZlciAwLjcwIG0sIHNvIHRoZVxuICogIHNlYW0gbGFuZHMgb24gdGhlIGhpZGRlbiB1bmRlcnNpZGUpLCB5IEFMT05HIGl0LiBXaGF0IHRoZSBwbGF0ZSBzaG93cyBvbiBhIHJvb2ZpbmcgY3VsbSB0aGF0IGFcbiAqICB3aG9sZSBwb2xlIGRvZXMgbm90OiBPTkUgbm9kZSByaW5nIHBlciAwLjcwIG0gKHRoZSByb29mIGN1bG1zIGFyZSBsb25nZXIgaW50ZXJub2RlcyB0aGFuIHRoZVxuICogIHBvc3RzKSwgZGVuc2UgbG9uZ2l0dWRpbmFsIGZpYnJlLCBhIGxvbmcgZHJ5aW5nIHNwbGl0LCBibGVhY2hlZCBmYWNlcywgYW5kIFJPVCAtLSBkYXJrXG4gKiAgaXJyZWd1bGFyIGhvbGVzIHdpdGggYSBzdGFpbmVkIGhhbG8gYW5kIGEgc2NhdHRlciBvZiBpbnNlY3QgcGluaG9sZXMsIHRocmVlIG9yIGZvdXIgcGVyIHRpbGUuXG4gKiAgQSBtdWx0aXBsaWVyIG9uIHRoZSBwZXItaW5zdGFuY2UgdG9uZTsgdGhlIHJvdCBjb3JlcyBhcmUgc21hbGwgZW5vdWdoICgxMC0yMCBweCBvZiA1MTIsIG9uIGFcbiAqICAwLjcwIG0gdGlsZSwgc28gMTUtMzAgbW0pIHRoYXQgbm8gZW5jbG9zZWQgZGFyayBwYXRjaCByZWFjaGVzIHRoZSBzaWxob3VldHRlIGdhdGUuICovXG5mdW5jdGlvbiBzcGxpdFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc4OCw3Niw1OCcsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmM2YwZTgnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYSBzb2Z0IHJvdW5kLW9mZiBhY3Jvc3MgdGhlIGFyYzogdGhlIHJpbXMgYSB0b3VjaCBkYXJrZXIgdGhhbiB0aGUgY3Jvd25cbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoOTAsODQsNzQsMC4xNCknKTsgZ2EuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC4wOCknKTsgZ2EuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDkwLDg0LDc0LDAuMTQpJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdhOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIDEwLCAwLjEwLCAwLjM0KTtcbiAgICBjb25zdCBub2RlID0gcyAqICgwLjMwICsgcm5kKCkgKiAwLjQwKTtcbiAgICBmb3IgKGNvbnN0IFt5MCwgeTFdIG9mIFtbMCwgbm9kZV0sIFtub2RlLCBzXV0pIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIHkwLCB5MSwgMzIwLCBEQVJLLCBMSUdIVCwgMC4yNCk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4zICsgcm5kKCkgKiAwLjYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDM0LDI2LDAuNTUpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS42LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjApJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjYsIHkgKyBkeSwgMS4yLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nXG4gICAge1xuICAgICAgY29uc3QgeSA9IG5vZGU7XG4gICAgICBjb25zdCBncyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5IC0gcyAqIDAuMDMsIDAsIHkpO1xuICAgICAgZ3MuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDUwLDQwLDApJyk7IGdzLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw1MCw0MCwwLjI0KScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdzOyBjdHguZmlsbFJlY3QoMCwgeSAtIHMgKiAwLjAzLCBzLCBzICogMC4wMyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTIsNDQsMzYsMC42NiknOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNiknOyBjdHguZmlsbFJlY3QoMCwgeSArIDMsIHMsIDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDUwLDQwLDAuMzApJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCAyKTtcbiAgICB9XG4gICAgLy8gUk9UOiBhbiBpcnJlZ3VsYXIgZGFyayBjb3JlIHdpdGggYSB3YXJtIHN0YWluZWQgaGFsbywgYW5kIHBpbmhvbGVzIGFyb3VuZCBpdFxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIHJ4ID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMyksIHJ5ID0gcnggKiAoMS40ICsgcm5kKCkgKiAxLjYpLCByb3QgPSAocm5kKCkgLSAwLjUpICogMC42O1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGNvbnN0IGhhbG8gPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5ICsgZHksIDAsIGN4LCBjeSArIGR5LCBNYXRoLm1heChyeCwgcnkpICogMi40KTtcbiAgICAgICAgaGFsby5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoOTYsNzQsNDAsMC40MiknKTsgaGFsby5hZGRDb2xvclN0b3AoMC41LCAncmdiYSg5Niw3NCw0MCwwLjIwKScpOyBoYWxvLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5Niw3NCw0MCwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gaGFsbzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcnggKiAyLjYsIHJ5ICogMi40LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDM2LDI4LDE4LDAuODIpJzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcngsIHJ5LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDE0LDEwLDYsMC45KSc7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyByeCAqIDAuMiwgY3kgKyBkeSAtIHJ5ICogMC4xLCByeCAqIDAuNSwgcnkgKiAwLjU1LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIChybmQoKSAtIDAuNSkgKiBzICogMC4xMiwgeSA9IGN5ICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjIsIHIgPSAxICsgcm5kKCkgKiAxLjg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzMCwyNCwxNiwwLjg1KSc7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbG9vc2UgbW91bGQgYmVsb3cgdGhlIG5vZGVcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBbW3JuZCgpICogcywgbm9kZSArIHMgKiAwLjA0XSwgW3JuZCgpICogcywgcm5kKCkgKiBzXV0sIHMgKiAwLjA4LCBzICogMC4wNSwgNjAsIDAuMjYpO1xuICB9KTtcbn1cblxuLyoqIFJPUEUgdGlsZSBmb3IgdGhlIGxhc2hpbmdzOiB4IEFST1VORCB0aGUgY29sbGFyLCB5IEFMT05HIHRoZSBwb2xlIGl0IHdyYXBzLiBBIGxhc2hpbmcgaXMgdHVybnNcbiAqICBvZiBsYWlkIHJvcGUsIHNvIHRoZSBzdXJmYWNlIGlzIGRpYWdvbmFsIFNUUkFORFMgLS0gYSBncm9vdmUgYW5kIGEgbGl0IHJpZGdlIHBlciBzdHJhbmQgYXQgYVxuICogIHNoYWxsb3cgd3JhcCBhbmdsZSAtLSB3aXRoIGZpYnJlIGZ1enogYW5kIGEgZmV3IGRhcmtlciBzb2lsZWQgdHVybnMuIE92ZXIgMC4xMiBtIHBlciB0aWxlIHRoZVxuICogIHN0cmFuZCBwaXRjaCBpcyB+MTIgbW0sIHdoaWNoIGlzIHRoZSBwbGF0ZSdzIHJvcGUuIFNlYW1sZXNzOiBldmVyeSBzdHJva2UgaXMgZHJhd24gYXQgdGhyZWVcbiAqICB5IG9mZnNldHMgYW5kIHRoZSBzdHJhbmQgcnVucyBhY3Jvc3MgdGhlIHdyYXAuICovXG5mdW5jdGlvbiByb3BlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmNGVmZTQnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgbiA9IDEwLCBwaXRjaCA9IHMgLyBuLCBhbmcgPSAwLjMyOyAgICAgICAgICAgICAgICAvLyB3cmFwIGFuZ2xlLCByYWRpYW5zXG4gICAgY29uc3QgZHggPSBNYXRoLnRhbihhbmcpICogczsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG93IGZhciBhIHN0cmFuZCBkcmlmdHMgaW4geCBvdmVyIG9uZSB0aWxlIGhlaWdodFxuICAgIGN0eC5zYXZlKCk7XG4gICAgZm9yIChsZXQgayA9IC0zOyBrIDwgbiArIDM7IGsrKykge1xuICAgICAgY29uc3QgeDAgPSBrICogcGl0Y2g7XG4gICAgICBmb3IgKGNvbnN0IG95IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgLy8gZ3Jvb3ZlIGJldHdlZW4gdHVybnNcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoNzAsNTgsNDAsMC41NSknOyBjdHgubGluZVdpZHRoID0gcGl0Y2ggKiAwLjIyO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeDAsIG95KTsgY3R4LmxpbmVUbyh4MCArIGR4LCBveSArIHMpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoZSBsaXQgY3Jvd24gb2YgdGhlIHR1cm5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zMCknOyBjdHgubGluZVdpZHRoID0gcGl0Y2ggKiAwLjMwO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeDAgKyBwaXRjaCAqIDAuNSwgb3kpOyBjdHgubGluZVRvKHgwICsgcGl0Y2ggKiAwLjUgKyBkeCwgb3kgKyBzKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0d2lzdCBtYXJrcyBhY3Jvc3MgZWFjaCB0dXJuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDkwLDc2LDUyLDAuMjgpJzsgY3R4LmxpbmVXaWR0aCA9IDEuMjtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxMjsgdCsrKSB7XG4gICAgICAgICAgY29uc3QgeXkgPSBveSArICh0ICsgcm5kKCkpICogcyAvIDEyLCB4eCA9IHgwICsgcGl0Y2ggKiAwLjUgKyBkeCAqICgoeXkgLSBveSkgLyBzKTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeHggLSBwaXRjaCAqIDAuMzUsIHl5IC0gcGl0Y2ggKiAwLjE4KTsgY3R4LmxpbmVUbyh4eCArIHBpdGNoICogMC4zNSwgeXkgKyBwaXRjaCAqIDAuMTgpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgICAvLyBmdXp6IGFuZCBzb2lsaW5nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBybmQoKSA8IDAuNiA/ICdyZ2JhKDcwLDU4LDQwLDAuMTgpJyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjIpJztcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCAxLCAxICsgcm5kKCkgKiAyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSBybmQoKSAqIHMsIGggPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTApO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIGgpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDYwLDQ4LDMyLDApJyk7IGcyLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDYwLDQ4LDMyLDAuMjIpJyk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg2MCw0OCwzMiwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCgwLCB5ICsgZHksIHMsIGgpO1xuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIC8vIEEgTElUIHN1cmZhY2UgKGEgZmx1b3Jlc2NlbnQgdHViZSwgYSBjaGFyY29hbCBlbWJlciBiZWQpOiBlbWlzc2l2ZSBjYXJyaWVzIHRoZSBnbG93IHdpdGhvdXQgYVxuICAgIC8vIGxpZ2h0IHNvdXJjZSwgd2hpY2ggdGhlIGtpdCdzIHByb3BzIG5ldmVyIG93biAtLSB0aGUgaG9zdCBzY2VuZSBvd25zIGxpZ2h0aW5nLlxuICAgIGlmIChzLmVtaXNzaXZlICE9PSB1bmRlZmluZWQpIHsgbS5lbWlzc2l2ZSA9IG5ldyBUSFJFRS5Db2xvcihzLmVtaXNzaXZlKTsgbS5lbWlzc2l2ZUludGVuc2l0eSA9IHMuZW1pc3NpdmVJbnRlbnNpdHkgPz8gMTsgfVxuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgLy8gQW4gQUxQSEEtQ1VUIHBhbmUgKGNoYWluLWxpbmsgbWVzaCk6IHRoZSBjYW52YXMgdGlsZSBjYXJyaWVzIHRoZSBjdXQtb3V0IGluIGl0cyBhbHBoYSBjaGFubmVsIGFuZFxuICAgIC8vIGFscGhhVGVzdCBkaXNjYXJkcyB0aGUgb3BlbiBjZWxscywgc28gdGhlIHdpcmUgc3RheXMgb3BhcXVlIGFuZCBzb3J0cyBsaWtlIGEgc29saWQuXG4gICAgaWYgKHMuYWxwaGFUZXN0ICE9PSB1bmRlZmluZWQpIHsgbS5hbHBoYVRlc3QgPSBzLmFscGhhVGVzdDsgbS50cmFuc3BhcmVudCA9IGZhbHNlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZXBoYW50Q3Jvc3NpbmdTaWduTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdFbGVwaGFudCBDcm9zc2luZyBTaWduJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIC8vIFNXRVBUIHR1YmVzOiBvbmUgbWl0cmVkIHJpbmcgcGVyIHBvaW50IGluc3RlYWQgb2YgYSBjeWxpbmRlciBwZXIgc2VnbWVudCAtLSB0aGUgb25seSB0aGluZyB0aGF0XG4gICAgLy8gc3Vydml2ZXMgYSB0aWdodCBiZW5kLiBTZWUgc3dlZXBUdWJlLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy5zd2VlcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN3ZWVwVHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyAxMCwgdC5oZXgsIHQuY2FwICE9PSBmYWxzZSkpO1xuICAgIGZvciAoY29uc3Qgc3Qgb2YgKGMuc3RyYXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzdHJhcChzdC5wdHMsIHN0LncsIHN0LnQsIHN0LmFib3V0LCBzdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChjLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIG1ha2UgYSBQQVJUSUFMIGN5bGluZGVyIChhIGN1cnZlZCBzdGlja2VyIHBhdGNoIHdyYXBwZWQgb24gYSByb3VuZCBib2R5KSBhbmRcbiAgICAgIC8vIGBvcGVuYCBkcm9wcyB0aGUgY2FwczsgdGhlIHNpZGUgVVZzIHRoZW4gcnVuIDAuLjEgYWNyb3NzIHRoZSBhcmMgYW5kIHVwIHRoZSBoZWlnaHQsIHdoaWNoIGlzXG4gICAgICAvLyB3aGF0IGEgYmFrZWQgZ3JhcGhpYyB3YW50cy4gYHV2UmVwYCBtdWx0aXBsaWVzIHRoZW0gZm9yIGEgcmVwZWF0aW5nIHRpbGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoY3kudXZSZXApIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTsgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogY3kudXZSZXBbMF0sIHV2LmdldFkoaSkgKiBjeS51dlJlcFsxXSk7IH1cbiAgICAgIC8vIGBzaWRlVVZgIHBpbnMgdGhlIFNJREUgd2FsbCdzIFVWcyB0byBvbmUgdGV4ZWwgc28gYSBkaXNjIGNhcnJ5aW5nIGEgYmFrZWQgdG9wLWRvd24gaW1hZ2Ugc2hvd3NcbiAgICAgIC8vIHRoYXQgaW1hZ2Ugb24gaXRzIGNhcCBhbG9uZSwgd2l0aCBpdHMgcmltIGluIHdoYXRldmVyIHRoZSBwaW5uZWQgdGV4ZWwgaG9sZHMgKGEgYmFnIHRvbmUpLlxuICAgICAgaWYgKGN5LnNpZGVVVikgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpLCBuID0gKChjeS5zZWcgPz8gMTIpICsgMSkgKiAyOyBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgdXYuc2V0WFkoaSwgY3kuc2lkZVVWWzBdLCBjeS5zaWRlVVZbMV0pOyB9XG4gICAgICAvLyBgc2NhbGVgIGJlZm9yZSB0aGUgcm90YXRpb25zOiBhbiBPVkFMIGJhc2luIG9yIGRpc2MsIHdoaWNoIGEgbGF0aGUgb3IgYSBjeWxpbmRlciBjYW5ub3RcbiAgICAgIC8vIHJldm9sdmUgb24gaXRzIG93bi4gTm9ybWFscyBhcmUgcmVjb21wdXRlZCBiZWNhdXNlIGEgbm9uLXVuaWZvcm0gc2NhbGUgc2tld3MgdGhlbS5cbiAgICAgIGlmIChjeS5zY2FsZSkgeyBnLnNjYWxlKGN5LnNjYWxlWzBdLCBjeS5zY2FsZVsxXSwgY3kuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSwgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyAtLSBzbyB0aGUgbm9kZVxuICAgICAgLy8gcmluZ3Mgb2YgYSBjdWxtIHRpbGUgY3Jvc3MgYSBiYW1ib28gcG9sZSBhdCByZWFsIHNwYWNpbmcgaG93ZXZlciB0aGUgcG9sZSBpcyB0aGVuIHR1cm5lZC5cbiAgICAgIC8vIEl0IGhhcyB0byBoYXBwZW4gQkVGT1JFIHRoZSByb3RhdGlvbnMsIHdoaWxlIHRoZSBjeWxpbmRlciBzdGlsbCBydW5zIGFsb25nIGl0cyBvd24gWS5cbiAgICAgIGlmIChjLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgYy51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsIG9mIChjLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbjogYSA0LXNlZ21lbnQgbGF0aGUgdHVybmVkIDQ1IGRlZ3JlZXMgaXMgYSBjaGFtZmVyZWQgU1FVQVJFIHNsYWIgaW4gb25lXG4gICAgICAvLyBnZW9tZXRyeSAoYSBjb25lJ3MgcnViYmVyIGJhc2UpLCB3aGVyZSB0d28gc3RhY2tlZCBib3hlcyB3b3VsZCBjb3N0IHR3byBhbmQgYSBjb3BsYW5hciBwYWlyLlxuICAgICAgLy8gYGN5bFVWYCAoYSB0aWxlIHNpemUgaW4gbWV0cmVzKSB3cml0ZXMgYSBzZWFtbGVzcyBhcm91bmQtYnktdXAgVVYgZnJvbSB0aGUgbGF0aGUncyBvd24gc2VnbWVudFxuICAgICAgLy8gaW5kZXggLS0gYXRhbjIgd291bGQgZm9sZCBhIHdob2xlIHRpbGUgaW50byB0aGUgc2VhbSBjb2x1bW4gLS0gZm9yIHRyZWFkLCBmbHV0aW5nIGFuZCBncmFpbi5cbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLmN5bFVWKSB7IGNvbnN0IGN1ID0gQXJyYXkuaXNBcnJheShsLmN5bFVWKSA/IGwuY3lsVVYgOiBbbC5jeWxVViwgbC5jeWxVViwgMF07IGxhdGhlVVYoZywgKGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50IC8gKChsLnNlZyA/PyAxMikgKyAxKSkgfCAwLCBsLnNlZyA/PyAxMiwgY3VbMF0sIGN1WzFdLCBjdVsyXSA/PyAwKTsgfVxuICAgICAgaWYgKGwuc2NhbGUpIHsgZy5zY2FsZShsLnNjYWxlWzBdLCBsLnNjYWxlWzFdLCBsLnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb24gKGFib3ZlKS4gYHJ4YC9gcnpgIFRJTFQgdGhlIGF4aXMgaXRzZWxmLCB3aGljaCBpcyB3aGF0IGEgV0FMTCBvclxuICAgICAgLy8gY2VpbGluZyBmaXR0aW5nIG5lZWRzOiBhIGxhdGhlIHJldm9sdmVzIGFib3V0ICtZLCBhbmQgYSBidWxraGVhZCBsYW1wJ3MgYXhpcyBpcyB0aGUgd2FsbFxuICAgICAgLy8gbm9ybWFsLCBzbyBpdHMgYmFja3BsYXRlIGFuZCBkb21lIGFyZSBhdXRob3JlZCBhYm91dCBZIGFuZCBsYWlkIGRvd24gd2l0aCByeCA9IFBJLzIuXG4gICAgICBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICAvLyBSSUJCRUQgRE9NRVM6IGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIGNhcnJ5aW5nIHZlcnRpY2FsIEZMVVRFUywgYXMgYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWBcbiAgICAvLyBzYW1wbGVkIHBlciBzZWN0b3IgcmF0aGVyIHRoYW4gYSBsYXRoZS4gQSBwcmVzc2VkLWdsYXNzIGxhbXAgZG9tZSBpcyBmbHV0ZWQsIGFuZCBhIHNtb290aCBvbmVcbiAgICAvLyByZWFkcyBhcyBhIHBsYXN0aWMgYnViYmxlIC0tIHRoZSByaWJzIGFyZSBtb3N0IG9mIHdoYXQgc2F5cyBgZ2xhc3NgIGF0IHByb3AgZGlzdGFuY2UuIEF1dGhvcmVkXG4gICAgLy8gYWJvdXQgK1kgbGlrZSBhIGxhdGhlLCBzbyBhIHdhbGwgZml0dGluZyBsYXlzIGl0IGRvd24gd2l0aCByeC5cbiAgICBmb3IgKGNvbnN0IGQgb2YgKGMuZG9tZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gcmliYmVkRG9tZShkLnB0cywgZC5yaWJzLCBkLmFtcCwgZC5zZWcgPz8gMjQsIGQudmFsbGV5KTtcbiAgICAgIGlmIChkLnJ5KSBnLnJvdGF0ZVkoZC5yeSk7IGlmIChkLnJ4KSBnLnJvdGF0ZVgoZC5yeCk7IGlmIChkLnJ6KSBnLnJvdGF0ZVooZC5yeik7XG4gICAgICBpZiAoZC5hdCkgZy50cmFuc2xhdGUoZC5hdFswXSwgZC5hdFsxXSwgZC5hdFsyXSk7XG4gICAgICAvLyBBIGZsdXRlZCBkb21lIHdyaXRlcyBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUgKHRoZSBjcmVzdC10by12YWxsZXkgbXVsdGlwbGllciksIHNvIHRpbnRHZW9cbiAgICAgIC8vIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmx1dGUgc3RyaXBpbmcgd2l0aCBvbmUgZmxhdCBoZXggLS0gdGhlIHNhbWUgdHJhcCBgc2hlZXRgJ3MgaGV4VW5kZXJcbiAgICAgIC8vIGZlbGwgaW50by4gTXVsdGlwbHkgdGhlIHRvbmUgSU5UTyB0aGUgbXVsdGlwbGllciBpbnN0ZWFkLCBzbyB0aGUgZG9tZSBjYXJyaWVzIGJvdGguXG4gICAgICBpZiAoZC52YWxsZXkgJiYgZC5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ29sb3IoZC5oZXgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbC5jb3VudDsgaSsrKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogdC5yLCBjb2wuZ2V0WShpKSAqIHQuZywgY29sLmdldFooaSkgKiB0LmIpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2goZC52YWxsZXkgPyBnIDogdGludEdlbyhnLCBkLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBzaGVldCBnaXZlbiBgaGV4VW5kZXJgIGhhcyBhbHJlYWR5IHdyaXR0ZW4gaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlLCBvbmUgdG9uZSBmb3IgdGhlIHRvcFxuICAgICAgLy8gZ3JpZCBhbmQgYW5vdGhlciBmb3IgdGhlIHVuZGVyc2lkZSBhbmQgcmltLiB0aW50R2VvIHdvdWxkIG92ZXJ3cml0ZSB0aGUgbG90IHdpdGggYSBzaW5nbGVcbiAgICAgIC8vIGhleCAtLSB3aGljaCBpcyB3aGF0IHNoaXBwZWQgdGhlIHRhcnBhdWxpbiBiYXkncyBibHVlLW92ZXItb3JhbmdlIHRhcnAgYXMgYSB3aGl0ZSBzYWlsLlxuICAgICAgY29uc3QgZyA9IHNoZWV0KHMpO1xuICAgICAgZ3MucHVzaChzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBzLmhleCkpO1xuICAgIH1cbiAgICAvLyBPUkdBTklDIHN0YXRpb24gdHViZXM6IFt6LCBjeCwgY3ksIHJ4LCByeV0gc3RhdGlvbnMgc3dlcHQgYWxvbmcgWiAtLSB0aGUgb25seSBzb2Z0IGZvcm0gaW4gdGhlXG4gICAgLy8ga2l0LCBhIGx5aW5nIGFuaW1hbC4gTGl0IHNtb290aCBieSB0aGUgaGVscGVyJ3Mgc2hhcmVkIHJpbmcgdmVydGljZXMuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzQWxvbmcgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gdHViZUFsb25nKHQuc3RhdGlvbnMsIHQuc2VnID8/IDEyKTtcbiAgICAgIGlmICh0LnJ5KSBnLnJvdGF0ZVkodC5yeSk7IGlmICh0LmF0KSBnLnRyYW5zbGF0ZSh0LmF0WzBdLCB0LmF0WzFdLCB0LmF0WzJdKTtcbiAgICAgIC8vIGBoZXhlc2AgLS0gb25lIGNvbG91ciBwZXIgU1RBVElPTiwgYmxlbmRlZCBhbG9uZyB0aGUgc3dlZXAgLS0gaXMgaG93IGEgY29hdCBwYXR0ZXJuIHRoYXQgcnVuc1xuICAgICAgLy8gYWxvbmcgdGhlIGJvZHkgKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgaXMgY2FycmllZCBvbiBhIHNpbmdsZVxuICAgICAgLy8gbWVyZ2VkIG1lc2guIFRoZSBjb21wb25lbnQncyBheGlzIHRpbnQgdGhlbiBtdWx0aXBsaWVzIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBmYWRlIGludG8gaXQsXG4gICAgICAvLyBhbmQgbmVpdGhlciBjb3N0cyBhIG1hdGVyaWFsLiBBIHNpbmdsZSBgaGV4YCBzdGF5cyB0aGUgZGVmYXVsdC5cbiAgICAgIGlmICh0LmhleGVzKSB7XG4gICAgICAgIC8vIEEgc3RhdGlvbiBlbnRyeSBtYXkgYmUgb25lIGhleCwgb3IgYSBQQUlSIFtkb3JzYWwsIHZlbnRyYWxdIGJsZW5kZWQgYXJvdW5kIHRoZSByaW5nIGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHNpbih0aGV0YSkgdHViZUFsb25nIHN3ZXB0IHRoZSBzZWN0aW9uIHdpdGggLS0gc28gdGhlIGNvYXQgcnVucyBib3RoIEFMT05HIHRoZSBib2R5XG4gICAgICAgIC8vIChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGFuZCBBQ1JPU1MgaXQgKHRoZSBzYWRkbGUgZ2l2aW5nIHdheVxuICAgICAgICAvLyB0byBhIGR1c3R5IGZsYW5rIGFuZCBhIHBhbGUgYmVsbHkpLiBBbiBheGlzIHRpbnQgY2Fubm90IGRvIHRoZSBzZWNvbmQgaGFsZjogb24gYW4gYW5pbWFsXG4gICAgICAgIC8vIGx5aW5nIG9uIGl0cyBzaWRlIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBheGlzIGlzIGhvcml6b250YWwsIHNvIGEgYmFuZCBpbiB4IGN1dHMgdGhlIGNyb3duXG4gICAgICAgIC8vIG9mIHRoZSBzd2VlcCBpbiBoYWxmLCBhbmQgYSBNVUxUSVBMWSBjYW4gb25seSBldmVyIGRhcmtlbiAtLSBpdCBjYW5ub3QgdGFrZSBhIHdhcm0gdGFuIHRvXG4gICAgICAgIC8vIGEgY29vbGVyIGdyZXkuIFR3byBjb2xvdXJzIHBlciBzdGF0aW9uLCBvbmUgYXR0cmlidXRlLCBzdGlsbCBvbmUgZHJhdyBjYWxsLlxuICAgICAgICBjb25zdCBzZWcgPSB0LnNlZyA/PyAxMiwgbiA9IHQuc3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHNlZyAqIG4gKiAzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gdC5oZXhlc1tNYXRoLm1pbih0LmhleGVzLmxlbmd0aCAtIDEsIGkpXTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSksIHYgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMV0gOiBlKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmID0gKE1hdGguc2luKGogKiBNYXRoLlBJICogMiAvIHNlZykgKyAxKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBrID0gKGkgKiBzZWcgKyBqKSAqIDM7XG4gICAgICAgICAgICBjb2xba10gPSBkLnIgKyAodi5yIC0gZC5yKSAqIGY7IGNvbFtrICsgMV0gPSBkLmcgKyAodi5nIC0gZC5nKSAqIGY7IGNvbFtrICsgMl0gPSBkLmIgKyAodi5iIC0gZC5iKSAqIGY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IDB4ZmZmZmZmKSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICAvLyBhIHBlci1jb21wb25lbnQgc2NhbGUsIGFwcGxpZWQgdG8gdGhlIG1lcmdlIGJlZm9yZSB0aW50aW5nOiBob3cgYSBseWluZyBhbmltYWwgYXV0aG9yZWQgYXRcbiAgICAvLyBpdHMgb3duIHByb3BvcnRpb25zIGlzIGZpdHRlZCBpbnRvIHRoZSBkZWNsYXJlZCBlbnZlbG9wZSB3aXRob3V0IHJlLXJlYWRpbmcgZXZlcnkgc3RhdGlvblxuICAgIGlmIChjLnNjYWxlKSBnLnNjYWxlKGMuc2NhbGVbMF0sIGMuc2NhbGVbMV0sIGMuc2NhbGVbMl0pO1xuICAgIC8vIEFYSVMgVElOVDogYSBwZXItdmVydGV4IGJsZW5kIGZyb20gYzAgYXQgYGZyb21gIHRvIGMxIGF0IGB0b2AgYWxvbmcgb25lIGF4aXMsIG92ZXIgdGhlIHdob2xlXG4gICAgLy8gbWVyZ2UgLS0gYSB0YW4gYmFjayBmYWRpbmcgdG8gYSB3aGl0ZSBiZWxseSBjb3N0cyBhbiBhdHRyaWJ1dGUsIG5vdCBhIHNlY29uZCBtYXRlcmlhbC4gQXBwbGllZFxuICAgIC8vIGluIExJTkVBUiBzcGFjZSB0aHJvdWdoIFRIUkVFLkNvbG9yLiBga2VlcGAgbXVsdGlwbGllcyB0aGUgYmxlbmQgaW50byB0aGUgZXhpc3RpbmcgdGludCBpbnN0ZWFkXG4gICAgLy8gb2YgcmVwbGFjaW5nIGl0LCBzbyBhIGRhcmsgbm9zZSBzdGF5cyBkYXJrLlxuICAgIGlmIChjLnRpbnQpIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMwKSwgYiA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzEpO1xuICAgICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBsZXQgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgICAgIGlmICghY29sKSB7IGNvbCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKSwgMyk7IGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbCk7IH1cbiAgICAgIGNvbnN0IGF4ID0gYy50aW50LmF4aXMgPT09ICd4JyA/IDAgOiBjLnRpbnQuYXhpcyA9PT0gJ3knID8gMSA6IDI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2ID0gYXggPT09IDAgPyBwLmdldFgoaSkgOiBheCA9PT0gMSA/IHAuZ2V0WShpKSA6IHAuZ2V0WihpKTtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2IC0gYy50aW50LmZyb20pIC8gKGMudGludC50byAtIGMudGludC5mcm9tKSkpO1xuICAgICAgICBjb25zdCByID0gYS5yICsgKGIuciAtIGEucikgKiB0LCBnZyA9IGEuZyArIChiLmcgLSBhLmcpICogdCwgYmIgPSBhLmIgKyAoYi5iIC0gYS5iKSAqIHQ7XG4gICAgICAgIGlmIChjLnRpbnQua2VlcCkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHIsIGNvbC5nZXRZKGkpICogZ2csIGNvbC5nZXRaKGkpICogYmIpOyBlbHNlIGNvbC5zZXRYWVooaSwgciwgZ2csIGJiKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgLy8gJ2Zyb250JzogcGxhbmFyIFVWcyBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGF0bGFzIG9uICtaIGZhY2VzLCBvbmUgcGlubmVkIHRleGVsIGVsc2V3aGVyZS5cbiAgICBpZiAoYy51diA9PT0gJ2Zyb250JykgZyA9IGZyb250QXRsYXNVVihnLCBjLmF0bGFzKTtcbiAgICAvLyAnY3VsbScgaXMgZGVsaWJlcmF0ZWx5IGFic2VudCBoZXJlOiBpdCBpcyB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMsXG4gICAgLy8gYW5kIGEgd2hvbGUtbWVyZ2UgcGFzcyB3b3VsZCBmbGF0dGVuIGl0IGJhY2sgdG8gdGhlIGN5bGluZGVyJ3MgZGVmYXVsdCAwLi4xIHdyYXAuXG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIChyLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIGN1dCBhIFBBUlRJQUwgY3lsaW5kZXIgdGhlIHNhbWUgd2F5IHRoZSBjb21wb25lbnQgYnJhbmNoIGRvZXM6IGEgc3BsaXQgYmFtYm9vXG4gICAgICAvLyBjdWxtIGlzIGEgaGFsZiBwaXBlLCB0aExlbiA9IFBJLCBgb3BlbmAgc28gaXQgaXMgYSBzaGVsbCB3aXRoIG5vIGRpc2NzIGF0IGl0cyBlbmRzLiBUaGVcbiAgICAgIC8vIG1hdGVyaWFsIGNhcnJpZXMgZG91YmxlU2lkZWQsIGJlY2F1c2UgYSBob2xsb3ctdXAgY3VsbSBpcyBzZWVuIGZyb20gdGhlIGluc2lkZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKHIudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCByLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICAvLyBBbiBPUEVOIHdoZWVsIC0tIHR5cmUgYW5kIHJpbSBhcyBjbG9zZWQgcmluZyBsYXRoZXMsIGEgaHViLCBhbmQgd2lyZSBzcG9rZXMgLS0gZm9yIGEgYmljeWNsZVxuICAgIC8vIHdob3NlIHdoZWVscyByZWFkIGFzIGJpY3ljbGUgd2hlZWxzIHJhdGhlciB0aGFuIGRpc2NzLiBMYXRoZXMgcmV2b2x2ZSBhYm91dCBZIChgcnhgIGxheXMgdGhlXG4gICAgLy8gYXhsZSB3aGVyZSB0aGUgcGxhY2VtZW50IHdhbnRzIGl0KTsgYHNwb2tlc2AgcmFkaWF0ZSBhYm91dCBYIGJ5IHRoZSBoZWxwZXIncyBjb252ZW50aW9uLCBzbyBhblxuICAgIC8vIGF4bGUgb24gWiB0YWtlcyBgcnk6IFBJLzJgLlxuICAgIGZvciAoY29uc3QgbCBvZiAoci5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgaWYgKGwuYXQpIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwb2tlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzcG9rZXMocy5ySHViLCBzLnJSaW0sIHMuaGFsZlcsIHMubiwgcy5oZXgsIHMudCA/PyAwLjAwNiwgcy5wcmlzbSA/PyBmYWxzZSk7XG4gICAgICBpZiAocy5yeCkgZy5yb3RhdGVYKHMucngpOyBpZiAocy5yeSkgZy5yb3RhdGVZKHMucnkpOyBpZiAocy5yeikgZy5yb3RhdGVaKHMucnopO1xuICAgICAgaWYgKHMuYXQpIGcudHJhbnNsYXRlKHMuYXRbMF0sIHMuYXRbMV0sIHMuYXRbMl0pOyBncy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHQgb2YgKHIudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKHIudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoci51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgLy8gJ2N1bG0nIGFnYWluIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucy5cbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHAgb2Ygci5wbGFjZW1lbnRzIGFzIG51bWJlcltdW10pIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocFszXSA/PyAwLCBwWzRdID8/IDAsIHBbNV0gPz8gMCkpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICAgIH1cbiAgICBhZGRJbnN0KHIuaWQsIHIubmFtZSwgZywgci5tYXRlcmlhbCwgbWF0cywgci5jb2xvcnMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXNlcyAqL1xuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIC8vIEEgQkFLRUQgZ3JhcGhpYyAoYSBwcmludGVkIHNpZ24gZmFjZSk6IG9uZSBXZWJQIGRhdGEgVVJJIGNvbXBvc2VkIG9mZmxpbmUgZnJvbSB0aGUgcGxhdGUncyBvd25cbiAgICAvLyBwcmludGVkIHJlZ2lvbiBhbmQgdmVjdG9yIG1hcmtzLCBsb2FkZWQgdGhyb3VnaCBUZXh0dXJlTG9hZGVyLiBBc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZVxuICAgIC8vIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZS4gSXQgYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIHBlciBtYWNoaW5lLlxuICAgIGlmICh0LmtpbmQgPT09ICdiYWtlZCcpIHtcbiAgICAgIC8vIFVuZGVyIHBsYWluIE5vZGUgKHRoZSBjb3BsYW5hciBjaGVjaywgdGhlIHJ1bnRpbWUgcHJvYmUpIHRoZXJlIGlzIG5vIGRvY3VtZW50IGZvciBJbWFnZUxvYWRlcjpcbiAgICAgIC8vIGtlZXAgdGhlIHdoaXRlIGZhbGxiYWNrIHJhdGhlciB0aGFuIHRocm93LCBleGFjdGx5IGFzIHRoZSByZXRhaWwgZ2xhemluZyBkb2VzLlxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodC51cmkpO1xuICAgICAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuICAgICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgICBtYXQubWFwID0gYmFrZWQ7IG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0LmtpbmQgPT09ICdtdWQnKSB0ZXggPSBtdWRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYmFzZSwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBpZiAodC5raW5kID09PSAncGFpbnQnKSB0ZXggPSBwYWludFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDUxMiwgdC5waXRjaCA/PyAxMiwgdC5sb3cgPz8gMC43LCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dyaW1lJykgdGV4ID0gZ3JpbWVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3ppbmMnKSB0ZXggPSB6aW5jVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdmdXInKSB0ZXggPSBmdXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NoYWlubGluaycpIHRleCA9IGNoYWlubGlua1RpbGUodC5zaXplID8/IDI1NiwgdC53aXJlID8/IDAuMDksIHQuc2VlZCA/PyA0KTtcbiAgICBpZiAodC5raW5kID09PSAnYmFtYm9vJykgdGV4ID0gYmFtYm9vVGlsZSh0LnNpemUgPz8gNTEyLCB0LnN0cmlwcyA/PyAxMCwgdC5zZWVkID8/IDYpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzdHJpcGVzJykgdGV4ID0gc3RyaXBlVGlsZSh0LnNpemUgPz8gMjU2LCB0LmJhbmRzID8/IDgsIHQuYSwgdC5iLCB0LnNlZWQgPz8gOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Bvc3RlcicpIHRleCA9IHBvc3RlclRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDgsIHQubGluZXMgPz8gW10pO1xuICAgIGlmICh0LmtpbmQgPT09ICdwZWJibGUnKSB0ZXggPSBwZWJibGVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAyMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RyZWFkJykgdGV4ID0gdHJlYWRUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyMywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3R5cmUnKSB0ZXggPSB0eXJlVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjdWxtJykgdGV4ID0gY3VsbVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDMxKTtcbiAgICBpZiAodC5raW5kID09PSAnc2F3bicpIHRleCA9IHNhd25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0MywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RoYXRjaCcpIHRleCA9IHRoYXRjaFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDM3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGFycCcpIHRleCA9IHRhcnBUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0MSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dhbHYnKSB0ZXggPSBnYWx2VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzcGxpdCcpIHRleCA9IHNwbGl0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNTMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdyb3BlJykgdGV4ID0gcm9wZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDU5KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlRWxlcGhhbnRDcm9zc2luZ1NpZ25Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBc0N2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxVQUFVO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxZQUNMO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFFBQVE7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFFBQVEsQ0FBQztBQUFBLFFBQ1QsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxjQUNOO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0U7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRTtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFB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QUUsVUFBVSxRQUFRLEdBQUcsTUFBTSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQzNELENBQUMsTUFBTSxJQUFJO0FBRWpCLFFBQU0sUUFBUSxDQUFDLEtBQW1CLFFBQWtCO0FBQ2xELFVBQU0sTUFBZ0IsQ0FBQyxHQUFHLEtBQWUsQ0FBQztBQUMxQyxlQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssS0FBSztBQUMxQixZQUFNLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNyRixZQUFNQyxNQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBR0MsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQzNHLFlBQU0sSUFBSSxDQUFDRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsR0FBR0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxDQUFDO0FBQ3RHLFlBQU0sTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVB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LE1BQUM7QUFDekUsVUFBSSxFQUFFLE9BQU8sT0FBUSxRQUFPQSxJQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxXQUFXLEdBQUcsR0FBRyxRQUFRLENBQUM7QUFDeEUsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUFHLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFBRyxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQ3BGLE1BQUFBLEdBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBSyxRQUFRQSxJQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDdkU7QUFLQSxlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUN6QyxZQUFNQSxLQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxJQUFJLEdBQUcsRUFBRSxVQUFVLE9BQU8sRUFBRSxhQUFhLElBQUk7QUFDN0UsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBSyxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDN0U7QUFDQSxlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUN6QyxZQUFNQSxLQUFJLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssTUFBTyxFQUFFLFNB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O0FBQ3RFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDcEUsUUFBSSxFQUFFLFNBQVMsTUFBTyxPQUFNLFFBQVEsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNsRSxRQUFJLEVBQUUsU0FBUyxZQUFhLE9BQU0sY0FBYyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsTUFBTSxFQUFFLFFBQVEsQ0FBQztBQUMxRixRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLFFBQVEsQ0FBQztBQUNwRixRQUFJLEVBQUUsU0FBUyxVQUFXLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7QUFDaEcsUUFBSSxFQUFFLFNBQVMsU0FBVSxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRixRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3hFLFFBQUksRUFBRSxTQUFTLFFBQVMsT0FBTSxVQUFVLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDdEUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNwRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLFNBQVUsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVB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
