"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[4553],{94553:(e,t,s)=>{function n(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}s.d(t,{mainnet:()=>i,optimism:()=>Ue,sepolia:()=>Fe});const i=n({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var r=s(79756);function o(e,t){return({exclude:s,format:n})=>({exclude:s,format:e=>{const i=t(e);if(s)for(const e of s)delete i[e];return{...i,...n(e)}},type:e})}const a={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function c(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,r.ME)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,r.ME)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?a[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}const l=o("transaction",c);function u(e){const t=e.transactions?.map((e=>"string"==typeof e?e:c(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const h=o("block",u);const d={"0x0":"reverted","0x1":"success"};function b(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>function(e,{args:t,eventName:s}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...s?{args:t,eventName:s}:{}}}(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,r.ME)(e.transactionIndex):null,status:e.status?d[e.status]:null,type:e.type?a[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}const f=o("transactionReceipt",b),p={block:h({format(e){const t=e.transactions?.map((e=>{if("string"==typeof e)return e;const t=c(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,r.uU)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}));return{transactions:t,stateRoot:e.stateRoot}}}),transaction:l({format(e){const t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,r.uU)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:f({format:e=>({l1GasPrice:e.l1GasPrice?(0,r.uU)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,r.uU)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,r.uU)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};var m=s(66077),g=s(38626),y=s(30666),x=s(38903),v=s(82521);class P extends v.C{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class w extends v.C{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class C extends v.C{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const I={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new C({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new w({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new P({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new P({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const s=t??this.position;return this.assertPosition(s+e-1),this.bytes.subarray(s,s+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const s=this.inspectBytes(e);return this.position+=t??e,s},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function G(e,{recursiveReadLimit:t=8192}={}){const s=Object.create(I);return s.bytes=e,s.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),s.positionReadCount=new Map,s.recursiveReadLimit=t,s}var B=s(62421);function U(e,t="hex"){const s=F(e),n=G(new Uint8Array(s.length));return s.encode(n),"hex"===t?(0,x.My)(n.bytes):n.bytes}function F(e){return Array.isArray(e)?function(e){const t=e.reduce(((e,t)=>e+t.length),0),s=E(t);return{length:t<=55?1+t:1+s+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+s),1===s?n.pushUint8(t):2===s?n.pushUint16(t):3===s?n.pushUint24(t):n.pushUint32(t));for(const{encode:t}of e)t(n)}}}(e.map((e=>F(e)))):function(e){const t="string"==typeof e?(0,B.aT)(e):e,s=E(t.length),n=1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+s+t.length;return{length:n,encode(e){1===t.length&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+s),1===s?e.pushUint8(t.length):2===s?e.pushUint16(t.length):3===s?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}(e)}function E(e){if(e<256)return 1;if(e<65536)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new v.C("Length is too large.")}const j={ether:-9,wei:9};function O(e,t){let s=e.toString();const n=s.startsWith("-");n&&(s=s.slice(1)),s=s.padStart(t,"0");let[i,r]=[s.slice(0,s.length-t),s.slice(s.length-t)];return r=r.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${r?`.${r}`:""}`}function T(e,t="wei"){return O(e,j[t])}function k(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),s=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(s+1)}  ${t}`)).join("\n")}v.C;class L extends v.C{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class $ extends v.C{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",k(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}v.C;v.C;class M extends v.C{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}v.C;v.C;v.C;v.C;function R(e){const{kzg:t}=e,s=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),n="string"==typeof e.blobs[0]?e.blobs.map((e=>(0,B.aT)(e))):e.blobs,i=[];for(const e of n)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return"bytes"===s?i:i.map((e=>(0,x.My)(e)))}function H(e){const{kzg:t}=e,s=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),n="string"==typeof e.blobs[0]?e.blobs.map((e=>(0,B.aT)(e))):e.blobs,i="string"==typeof e.commitments[0]?e.commitments.map((e=>(0,B.aT)(e))):e.commitments,r=[];for(let e=0;e<n.length;e++){const s=n[e],o=i[e];r.push(Uint8Array.from(t.computeBlobKzgProof(s,o)))}return"bytes"===s?r:r.map((e=>(0,x.My)(e)))}var N=s(26879),A=s(27997);const z=(e,t,s)=>e&t^e&s^t&s;class S extends A.Vw{constructor(e,t,s,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=s,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,A.O8)(this.buffer)}update(e){(0,N.t2)(this);const{view:t,buffer:s,blockLen:n}=this,i=(e=(0,A.ZJ)(e)).length;for(let r=0;r<i;){const o=Math.min(n-this.pos,i-r);if(o!==n)s.set(e.subarray(r,r+o),this.pos),this.pos+=o,r+=o,this.pos===n&&(this.process(t,0),this.pos=0);else{const t=(0,A.O8)(e);for(;n<=i-r;r+=n)this.process(t,r)}}return this.length+=e.length,this.roundClean(),this}digestInto(e){(0,N.t2)(this),(0,N.CG)(e,this),this.finished=!0;const{buffer:t,view:s,blockLen:n,isLE:i}=this;let{pos:r}=this;t[r++]=128,this.buffer.subarray(r).fill(0),this.padOffset>n-r&&(this.process(s,0),r=0);for(let e=r;e<n;e++)t[e]=0;!function(e,t,s,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,s,n);const i=BigInt(32),r=BigInt(4294967295),o=Number(s>>i&r),a=Number(s&r),c=n?4:0,l=n?0:4;e.setUint32(t+c,o,n),e.setUint32(t+l,a,n)}(s,n-8,BigInt(8*this.length),i),this.process(s,0);const o=(0,A.O8)(e),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=a/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const s=e.slice(0,t);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:s,length:n,finished:i,destroyed:r,pos:o}=this;return e.length=n,e.pos=o,e.finished=i,e.destroyed=r,n%t&&e.buffer.set(s),e}}const V=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),D=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_=new Uint32Array(64);class K extends S{constructor(){super(64,32,8,!1),this.A=0|D[0],this.B=0|D[1],this.C=0|D[2],this.D=0|D[3],this.E=0|D[4],this.F=0|D[5],this.G=0|D[6],this.H=0|D[7]}get(){const{A:e,B:t,C:s,D:n,E:i,F:r,G:o,H:a}=this;return[e,t,s,n,i,r,o,a]}set(e,t,s,n,i,r,o,a){this.A=0|e,this.B=0|t,this.C=0|s,this.D=0|n,this.E=0|i,this.F=0|r,this.G=0|o,this.H=0|a}process(e,t){for(let s=0;s<16;s++,t+=4)_[s]=e.getUint32(t,!1);for(let e=16;e<64;e++){const t=_[e-15],s=_[e-2],n=(0,A.Ow)(t,7)^(0,A.Ow)(t,18)^t>>>3,i=(0,A.Ow)(s,17)^(0,A.Ow)(s,19)^s>>>10;_[e]=i+_[e-7]+n+_[e-16]|0}let{A:s,B:n,C:i,D:r,E:o,F:a,G:c,H:l}=this;for(let e=0;e<64;e++){const t=l+((0,A.Ow)(o,6)^(0,A.Ow)(o,11)^(0,A.Ow)(o,25))+((u=o)&a^~u&c)+V[e]+_[e]|0,h=((0,A.Ow)(s,2)^(0,A.Ow)(s,13)^(0,A.Ow)(s,22))+z(s,n,i)|0;l=c,c=a,a=o,o=r+t|0,r=i,i=n,n=s,s=t+h|0}var u;s=s+this.A|0,n=n+this.B|0,i=i+this.C|0,r=r+this.D|0,o=o+this.E|0,a=a+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(s,n,i,r,o,a,c,l)}roundClean(){_.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const q=(0,A.ld)((()=>new K));var J=s(23785);function Y(e){const{commitment:t,version:s=1}=e,n=e.to??("string"==typeof t?"hex":"bytes"),i=function(e,t){const s=t||"hex",n=q((0,J.q)(e,{strict:!1})?(0,B.ZJ)(e):e);return"bytes"===s?n:(0,x.nj)(n)}(t,"bytes");return i.set([s],0),"bytes"===n?i:(0,x.My)(i)}const Z=32,W=4096,Q=Z*W,X=6*Q-1-1*W*6,ee=1;class te extends v.C{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class se extends v.C{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class ne extends v.C{constructor({hash:e,size:t}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class ie extends v.C{constructor({hash:e,version:t}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${ee}`,`Received: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}var re=s(96943);function oe(e){const{data:t,kzg:s,to:n}=e,i=e.blobs??function(e){const t=e.to??("string"==typeof e.data?"hex":"bytes"),s="string"==typeof e.data?(0,B.aT)(e.data):e.data,n=(0,re.E)(s);if(!n)throw new se;if(n>X)throw new te({maxSize:X,size:n});const i=[];let r=!0,o=0;for(;r;){const e=G(new Uint8Array(Q));let t=0;for(;t<W;){const n=s.slice(o,o+(Z-1));if(e.pushByte(0),e.pushBytes(n),n.length<31){e.pushByte(128),r=!1;break}t++,o+=31}i.push(e)}return"bytes"===t?i.map((e=>e.bytes)):i.map((e=>(0,x.My)(e.bytes)))}({data:t,to:n}),r=e.commitments??R({blobs:i,kzg:s,to:n}),o=e.proofs??H({blobs:i,commitments:r,kzg:s,to:n}),a=[];for(let e=0;e<i.length;e++)a.push({blob:i[e],commitment:r[e],proof:o[e]});return a}function ae(e,{dir:t="left"}={}){let s="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<s.length-1&&"0"===s["left"===t?e:s.length-e-1].toString();e++)n++;return s="left"===t?s.slice(n):s.slice(0,s.length-n),"string"==typeof e?(1===s.length&&"right"===t&&(s=`${s}0`),`0x${s.length%2==1?`0${s}`:s}`):s}v.C;v.C;v.C;v.C;class ce extends v.C{constructor({chainId:e}){super("number"==typeof e?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}class le extends v.C{constructor({cause:e,message:t}={}){const s=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${s?`with reason: ${s}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(le,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(le,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class ue extends v.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${T(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(ue,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class he extends v.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${T(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(he,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class de extends v.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(de,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class be extends v.C{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(be,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class fe extends v.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(fe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class pe extends v.C{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(pe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class me extends v.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class ge extends v.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(ge,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class ye extends v.C{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(ye,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class xe extends v.C{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:s}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${T(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${T(s)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(xe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});v.C;var ve=s(65846);function Pe(e){const{chainId:t,maxPriorityFeePerGas:s,maxFeePerGas:n,to:i}=e;if(t<=0)throw new ce({chainId:t});if(i&&!(0,g.P)(i))throw new m.M({address:i});if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n});if(s&&n&&s>n)throw new xe({maxFeePerGas:n,maxPriorityFeePerGas:s})}function we(e){if(!e||0===e.length)return[];const t=[];for(let s=0;s<e.length;s++){const{address:n,storageKeys:i}=e[s];for(let e=0;e<i.length;e++)if(i[e].length-2!=64)throw new M({storageKey:i[e]});if(!(0,g.P)(n,{strict:!1}))throw new m.M({address:n});t.push([n,i])}return t}function Ce(e,t){const s=function(e){if(e.type)return e.type;if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new $({transaction:e})}(e);return"eip1559"===s?function(e,t){const{chainId:s,gas:n,nonce:i,to:r,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=e;Pe(e);const h=we(l),d=[(0,x.nj)(s),i?(0,x.nj)(i):"0x",c?(0,x.nj)(c):"0x",a?(0,x.nj)(a):"0x",n?(0,x.nj)(n):"0x",r??"0x",o?(0,x.nj)(o):"0x",u??"0x",h,...Ie(e,t)];return(0,y.aP)(["0x02",U(d)])}(e,t):"eip2930"===s?function(e,t){const{chainId:s,gas:n,data:i,nonce:r,to:o,value:a,accessList:c,gasPrice:l}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:i,to:r}=e;if(t<=0)throw new ce({chainId:t});if(r&&!(0,g.P)(r))throw new m.M({address:r});if(s||i)throw new v.C("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n})}(e);const u=we(c),h=[(0,x.nj)(s),r?(0,x.nj)(r):"0x",l?(0,x.nj)(l):"0x",n?(0,x.nj)(n):"0x",o??"0x",a?(0,x.nj)(a):"0x",i??"0x",u,...Ie(e,t)];return(0,y.aP)(["0x01",U(h)])}(e,t):"eip4844"===s?function(e,t){const{chainId:s,gas:n,nonce:i,to:o,value:a,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,accessList:h,data:d}=e;!function(e){const{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new se;for(const e of t){const t=(0,re.E)(e),s=(0,r.ME)((0,ve.di)(e,0,1));if(32!==t)throw new ne({hash:e,size:t});if(s!==ee)throw new ie({hash:e,version:s})}}Pe(e)}(e);let b=e.blobVersionedHashes,f=e.sidecars;if(e.blobs&&(void 0===b||void 0===f)){const t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map((e=>(0,x.My)(e))),s=e.kzg,n=R({blobs:t,kzg:s});if(void 0===b&&(b=function(e){const{commitments:t,version:s}=e,n=e.to??("string"==typeof t[0]?"hex":"bytes"),i=[];for(const e of t)i.push(Y({commitment:e,to:n,version:s}));return i}({commitments:n})),void 0===f){f=oe({blobs:t,commitments:n,proofs:H({blobs:t,commitments:n,kzg:s})})}}const p=we(h),m=[(0,x.nj)(s),i?(0,x.nj)(i):"0x",u?(0,x.nj)(u):"0x",l?(0,x.nj)(l):"0x",n?(0,x.nj)(n):"0x",o??"0x",a?(0,x.nj)(a):"0x",d??"0x",p,c?(0,x.nj)(c):"0x",b??[],...Ie(e,t)],g=[],v=[],P=[];if(f)for(let e=0;e<f.length;e++){const{blob:t,commitment:s,proof:n}=f[e];g.push(t),v.push(s),P.push(n)}return(0,y.aP)(["0x03",U(f?[m,g,v,P]:m)])}(e,t):function(e,t){const{chainId:s=0,gas:n,data:i,nonce:r,to:o,value:a,gasPrice:c}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:i,to:r,accessList:o}=e;if(r&&!(0,g.P)(r))throw new m.M({address:r});if(void 0!==t&&t<=0)throw new ce({chainId:t});if(s||i)throw new v.C("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n});if(o)throw new v.C("`accessList` is not a valid Legacy Transaction attribute.")}(e);let l=[r?(0,x.nj)(r):"0x",c?(0,x.nj)(c):"0x",n?(0,x.nj)(n):"0x",o??"0x",a?(0,x.nj)(a):"0x",i??"0x"];if(t){const e=(()=>{if(t.v>=35n){return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n)}if(s>0)return BigInt(2*s)+BigInt(35n+t.v-27n);const e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new L({v:t.v});return e})();l=[...l,(0,x.nj)(e),t.r,t.s]}else s>0&&(l=[...l,(0,x.nj)(s),"0x","0x"]);return U(l)}(e,t)}function Ie(e,t){const s=t??e,{v:n,yParity:i}=s;if(void 0===s.r)return[];if(void 0===s.s)return[];if(void 0===n&&void 0===i)return[];const r=ae(s.r),o=ae(s.s);return["number"==typeof i?i?(0,x.nj)(1):"0x":0n===n?"0x":1n===n?(0,x.nj)(1):27n===n?"0x":(0,x.nj)(1),"0x00"===r?"0x":r,"0x00"===o?"0x":o]}const Ge={contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:p,serializers:{transaction:function(e,t){return function(e){return"deposit"===e.type||void 0!==e.sourceHash}(e)?function(e){!function(e){const{from:t,to:s}=e;if(t&&!(0,g.P)(t))throw new m.M({address:t});if(s&&!(0,g.P)(s))throw new m.M({address:s})}(e);const{sourceHash:t,data:s,from:n,gas:i,isSystemTx:r,mint:o,to:a,value:c}=e,l=[t,n,a??"0x",o?(0,x.nj)(o):"0x",c?(0,x.nj)(c):"0x",i?(0,x.nj)(i):"0x",r?"0x1":"0x",s??"0x"];return(0,y.aP)(["0x7e",U(l)])}(e):Ce(e,t)}}},Be=1,Ue=n({...Ge,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...Ge.contracts,disputeGameFactory:{[Be]:{address:"0xe5965Ab5962eDc7477C8520243A95517CD252fA9"}},l2OutputOracle:{[Be]:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{[Be]:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{[Be]:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:1}),Fe=n({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0})}}]);
//# sourceMappingURL=4553.d7e64bbb.js.map