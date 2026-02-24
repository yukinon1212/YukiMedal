var ot=Object.defineProperty;var lt=(o,e,t)=>e in o?ot(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>lt(o,typeof e!="symbol"?e+"":e,t);import{M as K,O as ct,B as et,F as Be,S as ce,U as Se,V as X,W as xe,H as Ee,N as dt,C as ht,a as fe,b as ee,A as ut,c as pt,R as mt,d as ft,e as gt,L as yt,f as bt,g as Tt,h as tt,i as xt,j as Et,k as St,l as vt,m as wt,P as Ct,n as Mt,o as st,p as _t,D as Ge,q as ye,r as It,s as At,t as Pt,G as Ne,u as Rt,v as q,w as Lt,I as kt,x as V,y as Dt,z as be,E as M,T as Ht}from"./three--ETyBs3O.js";import{O as Te}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var v=(o=>(o.INIT="INIT",o.TITLE="TITLE",o.STAGE_START="STAGE_START",o.PLAYING="PLAYING",o.STAGE_CLEAR="STAGE_CLEAR",o.SKIP_PROMPT="SKIP_PROMPT",o.GAME_OVER="GAME_OVER",o.SHOP="SHOP",o.SKILL_SELECT="SKILL_SELECT",o.RESULT="RESULT",o))(v||{});class Bt{constructor(){r(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const A=new Bt,Gt=[{from:v.INIT,to:v.TITLE},{from:v.TITLE,to:v.STAGE_START},{from:v.STAGE_START,to:v.PLAYING},{from:v.PLAYING,to:v.STAGE_CLEAR},{from:v.PLAYING,to:v.GAME_OVER},{from:v.STAGE_CLEAR,to:v.STAGE_START},{from:v.STAGE_CLEAR,to:v.SKIP_PROMPT},{from:v.STAGE_CLEAR,to:v.SHOP},{from:v.SKIP_PROMPT,to:v.SHOP},{from:v.SKIP_PROMPT,to:v.STAGE_START},{from:v.SHOP,to:v.SKILL_SELECT},{from:v.SKILL_SELECT,to:v.STAGE_START},{from:v.GAME_OVER,to:v.RESULT},{from:v.RESULT,to:v.TITLE}];class Nt{constructor(){r(this,"current",v.INIT)}get state(){return this.current}canTransition(e){return Gt.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,A.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Ot{constructor(){r(this,"updateFns",[]);r(this,"rafId",null);r(this,"lastTime",0);r(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const Oe="yukimedal_save",Ut="yukimedal_best",ve={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Ft{constructor(){r(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(Oe);return e?{...ve,...JSON.parse(e)}:{...ve}}catch{return{...ve}}}save(){try{localStorage.setItem(Oe,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Ut,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const it={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class he{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zt=new ct(-1,1,1,-1,0,1);class Vt extends et{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}const Wt=new Vt;class Pe{constructor(e){this._mesh=new K(Wt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $t extends he{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ce?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Se.clone(e.uniforms),this.material=new ce({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pe(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ue extends he{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,l;this.inverse?(n=0,l=1):(n=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Yt extends he{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Qt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new X);this._width=i.width,this._height=i.height,t=new xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ee}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $t(it),this.copyPass.material.blending=dt,this.clock=new ht}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ue!==void 0&&(n instanceof Ue?i=!0:n instanceof Yt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qt extends he{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const Zt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class de extends he{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new X(e.x,e.y):new X(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new xe(a,n,{type:Ee}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new xe(a,n,{type:Ee});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new xe(a,n,{type:Ee});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),n=Math.round(n/2)}const l=Zt;this.highPassUniforms=Se.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new X(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=it;this.copyUniforms=Se.clone(g.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:ut,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new pt,this.fsQuad=new Pe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new X(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=de.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=de.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ce({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ce({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}de.BlurDirectionX=new X(1,0);de.BlurDirectionY=new X(0,1);const Kt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xt extends he{constructor(){super();const e=Kt;this.uniforms=Se.clone(e.uniforms),this.material=new mt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Et&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jt{constructor(e){r(this,"scene");r(this,"renderer");r(this,"composer");r(this,"renderPass");r(this,"bloomPass");r(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new St,this.scene.background=new fe(1710638),this.scene.fog=new vt(1710638,20,60),this.renderer=new wt({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ct,this.renderer.toneMapping=tt,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=Mt,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new st(60,t/i,.1,200);this.renderPass=new qt(this.scene,s),this.bloomPass=new de(new X(t,i),.75,.4,.82);const a=new Xt;this.composer=new Qt(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const h={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class Jt{constructor(){r(this,"camera");r(this,"target",new ee(0,0,-1));r(this,"basePosition",new ee(0,7,16));r(this,"shakeOffset",new ee);r(this,"shakeIntensity",0);r(this,"shakeDecay",0);r(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new st(h.CAMERA_FOV,window.innerWidth/window.innerHeight,h.CAMERA_NEAR,h.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class es{constructor(e){r(this,"ambient");r(this,"dirLight");r(this,"fillLight");r(this,"warmPoint");r(this,"coolPoint");r(this,"sideLeft");r(this,"sideRight");this.ambient=new _t(4210784,.6),this.dirLight=new Ge(16777215,1.8),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new Ge(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new ye(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new ye(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),this.sideLeft=new ye(16773344,1,22),this.sideLeft.position.set(-9,4,2),this.sideRight=new ye(16773344,1,22),this.sideRight.position.set(9,4,2),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}}class ts{constructor(e){r(this,"stars");r(this,"starMat");r(this,"grid");r(this,"scene");this.scene=e;const t=2e3,i=new Float32Array(t*3),s=60;for(let n=0;n<t;n++){const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),u=Math.cbrt(Math.random())*s;i[n*3]=u*Math.sin(c)*Math.cos(l),i[n*3+1]=u*Math.sin(c)*Math.sin(l),i[n*3+2]=u*Math.cos(c)}const a=new et;a.setAttribute("position",new It(i,3)),this.starMat=new At({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0}),this.stars=new Pt(a,this.starMat),e.add(this.stars),this.grid=new Ne(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new Ne(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-4,this.scene.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class ss{constructor(){r(this,"world");r(this,"_initialized",!1)}async init(){await Te.init(),this.world=new Te.World({x:0,y:h.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return Te}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new Te.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class is{constructor(){r(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation(),n=i.userData.physicsYOffset??0;i.position.set(s.x,s.y+n,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class as{constructor(){r(this,"handles",new Map);r(this,"dropZoneHandles",new Set);r(this,"eventQueue");r(this,"medalCollectedCallback");r(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,t=1){for(let i=0;i<t;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,s,a)=>{var u,g;if(!a)return;const n=this.handles.get(i),l=this.handles.get(s);if(n==="drop_zone"&&(l==="medal"||l==="item")||l==="drop_zone"&&(n==="medal"||n==="item")){const d=n==="drop_zone"?s:i,p=n==="drop_zone"?l:n;p==="medal"?(u=this.medalCollectedCallback)==null||u.call(this,d):p==="item"&&((g=this.itemCollectedCallback)==null||g.call(this,d))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class ns{constructor(){r(this,"body");r(this,"time",0);r(this,"zBase");r(this,"initialized",!1);this.zBase=-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,h.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/2,h.PUSHER_DEPTH/2);e.createCollider(s,this.body);const a=.15,n=a/Math.SQRT2,l=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,n,n).setTranslation(0,h.PUSHER_HEIGHT/2-a/2,h.PUSHER_DEPTH/2-a/2).setRotation({x:Math.sin(Math.PI/8),y:0,z:0,w:Math.cos(Math.PI/8)});e.createCollider(l,this.body),this.initialized=!0}update(e){this.time+=e;const t=h.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*h.PUSHER_RANGE;if(this.initialized){const a=Math.PI*h.PUSHER_RANGE/t*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/t&&this.body.setTranslation({x:0,y:h.PUSHER_HEIGHT/2,z:this.zBase},!0)}return s}get currentZOffset(){const e=h.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*h.PUSHER_RANGE}get restZ(){return this.zBase}}function rs(o){return[o>>16&255,o>>8&255,o&255]}function we(o){const e=o.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function le(o,e,t,i){return`rgb(${Math.min(255,o+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Ce(o,e,t,i){return`rgb(${Math.max(0,o-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function Fe(o,e,t){return`rgb(${o},${e},${t})`}function Q(o,e,t,i,s){return`rgba(${Math.min(255,o+i)},${Math.min(255,e+i)},${Math.min(255,t+i)},${s})`}class me{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Rt(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,l=128/2-1,[c,u,g]=rs(e),d=Fe(c,u,g),p=le(c,u,g,65),m=le(c,u,g,30),b=Ce(c,u,g,55),f=Ce(c,u,g,80),y=s.createRadialGradient(a-18,n-18,4,a,n,l);y.addColorStop(0,p),y.addColorStop(.45,m),y.addColorStop(.8,d),y.addColorStop(1,b),s.fillStyle=y,s.beginPath(),s.arc(a,n,l,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=5,s.beginPath(),s.arc(a,n,l-5,0,Math.PI*2),s.stroke();const x=s.createRadialGradient(a,n,0,a,n,38);x.addColorStop(0,m),x.addColorStop(.7,d),x.addColorStop(1,b),s.fillStyle=x,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=1.5,s.stroke(),s.strokeStyle=p,s.lineWidth=2.5,s.lineCap="round";for(let I=0;I<6;I++){const E=I*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(E)*7,n+Math.sin(E)*7),s.lineTo(a+Math.cos(E)*28,n+Math.sin(E)*28),s.stroke()}const w=s.createRadialGradient(a-2,n-2,0,a,n,8);w.addColorStop(0,p),w.addColorStop(1,d),s.fillStyle=w,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const T=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return T.addColorStop(0,"rgba(255,255,255,0.5)"),T.addColorStop(.4,"rgba(255,255,255,0.12)"),T.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=T,s.beginPath(),s.arc(a,n,l-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,l]=we(e),c=a>l+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c){for(let p=0;p<22;p++){const m=256*p/22,b=p%3===0,f=b?.55:.45;s.strokeStyle=b?`rgba(${Math.max(0,a-22)},${Math.max(0,n-16)},${Math.max(0,l-8)},${f})`:`rgba(${Math.min(255,a+22)},${Math.min(255,n+16)},${Math.min(255,l+8)},${f})`,s.lineWidth=2+Math.random()*4,s.beginPath();for(let y=0;y<=256;y+=4){const x=m+Math.sin(y*.035+p)*2.5+(Math.random()-.5)*.8;y===0?s.moveTo(y,x):s.lineTo(y,x)}s.stroke()}s.strokeStyle=Q(a,n,l,40,.12),s.lineWidth=.5;for(let p=0;p<256;p+=6)s.beginPath(),s.moveTo(0,p+.5),s.lineTo(256,p+.5),s.stroke()}else{s.strokeStyle=Q(a,n,l,80,.14),s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,256),s.stroke();for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(256,d),s.stroke()}const u=s.getImageData(0,0,256,256),g=u.data;for(let d=0;d<g.length;d+=4){const p=(Math.random()-.5)*(c?14:18);g[d]=Math.max(0,Math.min(255,g[d]+p)),g[d+1]=Math.max(0,Math.min(255,g[d+1]+p)),g[d+2]=Math.max(0,Math.min(255,g[d+2]+p))}return s.putImageData(u,0,0),i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d"),[n,l,c]=we(e),u=n>c+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),u){a.strokeStyle=Q(n,l,c,90,.38),a.lineWidth=.8;const p=14;for(let m=-128;m<384;m+=p)a.beginPath(),a.moveTo(m,0),a.lineTo(m+128,128),a.stroke();for(let m=0;m<512;m+=p)a.beginPath(),a.moveTo(m,0),a.lineTo(m-128,128),a.stroke();a.fillStyle=le(n,l,c,90);for(let m=0;m<2;m++){const b=10+m*108;for(let f=20;f<256;f+=36)a.fillStyle=le(n,l,c,80),a.beginPath(),a.arc(f,b,4.5,0,Math.PI*2),a.fill(),a.fillStyle=Q(n,l,c,150,.7),a.beginPath(),a.arc(f-1,b-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(f+1,b+1,3,.5,Math.PI*2),a.fill()}}else{for(let p=0;p<128;p++){const m=.015+Math.random()*.055;a.strokeStyle=Q(n,l,c,100,m),a.lineWidth=1,a.beginPath(),a.moveTo(0,p+.5),a.lineTo(256,p+.5),a.stroke()}a.fillStyle=Q(n,l,c,120,.35);for(let p=24;p<256;p+=48)a.beginPath(),a.arc(p,8,3,0,Math.PI*2),a.fill()}const g=a.createLinearGradient(0,0,0,18);g.addColorStop(0,Q(n,l,c,150,.6)),g.addColorStop(1,Q(n,l,c,150,0)),a.fillStyle=g,a.fillRect(0,0,256,18);const d=a.createLinearGradient(0,114,0,128);return d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=d,a.fillRect(0,114,256,14),s})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,l]=we(e),c=a>l+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c)for(let p=0;p<256;p+=40){const m=s.createLinearGradient(0,p,0,p+40);m.addColorStop(0,le(a,n,l,18)),m.addColorStop(.5,Fe(a,n,l)),m.addColorStop(1,Ce(a,n,l,12)),s.fillStyle=m,s.fillRect(0,p,256,40),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=2,s.beginPath(),s.moveTo(0,p+40-1),s.lineTo(256,p+40-1),s.stroke(),s.strokeStyle=Q(a,n,l,70,.45),s.lineWidth=1,s.beginPath(),s.moveTo(0,p+1),s.lineTo(256,p+1),s.stroke();for(let b=24;b<256;b+=48){const f=p+40-7;s.fillStyle=le(a,n,l,55),s.beginPath(),s.arc(b,f,4,0,Math.PI*2),s.fill(),s.fillStyle=Q(a,n,l,130,.6),s.beginPath(),s.arc(b-1,f-1,1.5,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(b+1,f+1,2.5,.4,Math.PI*2),s.fill()}}else for(let d=0;d<256;d+=48){const p=s.createLinearGradient(0,d,0,d+6);p.addColorStop(0,"rgba(0,0,0,0.4)"),p.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=p,s.fillRect(0,d,256,6);const m=s.createLinearGradient(0,d-4,0,d);m.addColorStop(0,Q(a,n,l,80,0)),m.addColorStop(1,Q(a,n,l,80,.2)),s.fillStyle=m,s.fillRect(0,d-4,256,4)}const u=s.getImageData(0,0,256,256),g=u.data;for(let d=0;d<g.length;d+=4){const p=(Math.random()-.5)*(c?8:10);g[d]=Math.max(0,Math.min(255,g[d]+p)),g[d+1]=Math.max(0,Math.min(255,g[d+1]+p)),g[d+2]=Math.max(0,Math.min(255,g[d+2]+p))}return s.putImageData(u,0,0),i})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}r(me,"cache",new Map);const os=new q(h.MEDAL_RADIUS,h.MEDAL_RADIUS,h.MEDAL_THICKNESS,24),ls=new q(h.MEDAL_RADIUS_LARGE,h.MEDAL_RADIUS_LARGE,h.MEDAL_THICKNESS,24),cs={normal:16766720,double:13691135,large:15245312},ds={normal:1,double:2,large:1};function hs(o){const e=o*100;return e<h.MEDAL_PROB_NORMAL?"normal":e<h.MEDAL_PROB_DOUBLE?"double":"large"}function us(o){return o==="large"?ls:os}class Re{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Lt({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new K(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}r(Re,"materialCache",new Map);class ps{constructor(){r(this,"medals",new Map);r(this,"pendingRemoval",new Set);r(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,l,c,u){if(this.medals.size>=h.MAX_MEDALS_ON_FIELD)return;const g=s.rapier,d=u??hs(Math.random()),p=d==="large"?h.MEDAL_RADIUS_LARGE:h.MEDAL_RADIUS,m=ds[d],b=g.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(1.5).setAngularDamping(5).setCcdEnabled(!0),f=s.createRigidBody(b);f.setEnabledRotations(!0,!1,!0,!0),c&&f.setLinvel(c,!0);const y=g.ColliderDesc.cylinder(h.MEDAL_THICKNESS/2,p).setRestitution(.05).setFriction(.7).setDensity(h.MEDAL_MASS).setActiveEvents(g.ActiveEvents.COLLISION_EVENTS),x=s.createCollider(y,f);n.registerHandle(x.handle,"medal");const w=Re.createMesh(us(d),cs[d],!0,!1);w.userData.physicsYOffset=.03,w.position.set(e,t,i),l.add(w),a.register(f,w),this.medals.set(x.handle,{body:f,collider:x,mesh:w,type:d,quotaValue:m}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const l=this.medals.get(n);l&&(t.unregister(l.body),i.unregisterHandle(n),s.remove(l.mesh),e.removeRigidBody(l.body),l.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a){let n=0;for(const[l,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),n++);return n}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class ms{constructor(){r(this,"body");r(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=i.RigidBodyDesc.fixed().setTranslation(0,-2,h.FIELD_DEPTH/2+7);this.body=e.createRigidBody(s);const a=i.ColliderDesc.cuboid(h.FIELD_WIDTH/2+1,1.5,8).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(a,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class fs{constructor(){r(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var O=(o=>(o.Common="Common",o.Rare="Rare",o.Epic="Epic",o.Legendary="Legendary",o))(O||{});const gs={[O.Common]:8947848,[O.Rare]:4474111,[O.Epic]:11141375,[O.Legendary]:16746496},ys=new kt(.4,0);class bs{constructor(e){r(this,"mesh");r(this,"animationOffset");const t=gs[e],i=new V({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new K(ys,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Le{constructor(e=Date.now()){r(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class Ts{constructor(){r(this,"items",new Map);r(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const l=new Le(n);for(const c of e){const u=l.nextFloat(-3,h.FIELD_WIDTH/2-1),g=l.nextFloat(-12/4,h.FIELD_DEPTH/4);this.spawnSingle(c,u,2,g,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,l,c){const u=a.rapier,g=u.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),d=a.createRigidBody(g),p=u.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(u.ActiveEvents.COLLISION_EVENTS),m=a.createCollider(p,d);l.registerHandle(m.handle,"item");const b=new bs(e.rarity);b.setPosition(t,i,s),c.add(b.mesh),n.register(d,b.mesh),this.items.set(m.handle,{body:d,collider:m,mesh:b,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const Me=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:O.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:O.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:O.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:O.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:O.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:O.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:O.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:O.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:O.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:O.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function ge(o){return Me.find(e=>e.id===o)}const ze={[O.Common]:60,[O.Rare]:30,[O.Epic]:8,[O.Legendary]:2};class xs{constructor(e){r(this,"rng");this.rng=new Le(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=Me.filter(l=>l.rarity===s);if(a.length===0){t.push(Me[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(ze),t=e.map(i=>ze[i]);return this.rng.weightedPick(e,t)}}function C(o,e,t=!1){const i=new K(o,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}function z(o,e=1){return new V({color:o,emissive:o,emissiveIntensity:e,roughness:.5,metalness:.3})}class P{constructor(e){r(this,"group");r(this,"pusherMesh",null);r(this,"wallMeshes",[]);r(this,"sideGuardMeshes",[]);r(this,"pusherZBase",-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE);this.group=new Dt,this.rebuild(e)}rebuild(e){this.group.traverse(t=>{if(t!==this.group&&t instanceof K){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new V({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new V({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const t=me.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=be,t.repeat.set(h.FIELD_WIDTH/2,h.FIELD_DEPTH/2);const i=new V({map:t,color:16777215,roughness:.92,metalness:0}),s=new M(h.FIELD_WIDTH,h.FIELD_HEIGHT,h.FIELD_DEPTH),a=new K(s,i);a.receiveShadow=!0,a.position.y=-.1/2,this.group.add(a)}buildPusher(e){const t=me.getPusherTexture(e.pusherTexBase);t.wrapS=t.wrapT=be,t.repeat.set(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/1);const i=new V({map:t,color:16777215,roughness:.35,metalness:.65}),s=new M(h.PUSHER_WIDTH,h.PUSHER_HEIGHT,h.PUSHER_DEPTH);this.pusherMesh=new K(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,h.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const t=h.PUSHER_WIDTH,i=h.PUSHER_HEIGHT,s=h.PUSHER_DEPTH,a=C(new M(t+.06,.14,.14),P.brassMat(e));a.position.set(0,-i/2+.07,s/2),this.pusherMesh.add(a);const n=C(new M(t,.07,s),P.brassMat(e));n.position.set(0,i/2-.035,0),this.pusherMesh.add(n);const l=C(new M(t-.2,.06,.06),z(e.secondaryNeon,1.2));l.position.set(0,i/2-.03,s/2-.05),this.pusherMesh.add(l);const c=.15,u=C(new M(t+.06,c,c),P.brassMat(e));u.rotation.x=Math.PI/4,u.position.set(0,i/2-c/2,s/2),this.pusherMesh.add(u);for(const g of[-1,1]){const d=C(new M(.1,i,.1),P.brassMat(e));d.position.set(g*(t/2-.05),0,s/2),this.pusherMesh.add(d)}}createWalls(e){const s=me.getWallTexture(e.wallTexBase);s.wrapS=s.wrapT=be;const a=()=>{const w=s.clone();return w.wrapS=w.wrapT=be,w.needsUpdate=!0,new V({map:w,color:16777215,roughness:.8,metalness:.15})},n=h.OPEN_ZONE_START- -12/2,l=-12/2+n/2,c=a();c.map.repeat.set(n/2,3.5/2);const u=new M(.3,3.5,n),g=new K(u,c);g.position.set(-8/2-.3/2,3.5/2,l),this.group.add(g),this.wallMeshes.push(g);const d=a();d.map.repeat.set(n/2,3.5/2);const p=new M(.3,3.5,n),m=new K(p,d);m.position.set(h.FIELD_WIDTH/2+.3/2,3.5/2,l),this.group.add(m),this.wallMeshes.push(m);const b=a(),f=h.FIELD_WIDTH+.3*2;b.map.repeat.set(f/2,3.5/2);const y=new M(f,3.5,.3),x=new K(y,b);x.position.set(0,3.5/2,-12/2-.3/2),this.group.add(x),this.wallMeshes.push(x)}buildCabinet(e){const t=h.FIELD_WIDTH,i=h.FIELD_DEPTH,s=-i/2,a=i/2,n=C(new M(12,1,17),P.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const l=C(new M(12,.1,.1),P.brassMat(e));l.position.set(0,0,a+2.55),this.group.add(l);const c=1.1,u=7.2,g=13.5,d=t/2+.75,p=-.25;for(const k of[-1,1]){const N=C(new M(c,u,g),P.cabinetMat(e),!0);N.position.set(k*d,u/2-.5,p),this.group.add(N);const W=C(new M(c+.08,.14,g+.08),P.brassMat(e));W.position.set(k*d,u-.5+.07,p),this.group.add(W);const Y=C(new M(c+.08,.1,g+.08),P.brassMat(e));Y.position.set(k*d,-.02,p),this.group.add(Y);const oe=C(new M(.06,u*.75,g*.7),new V({color:e.insetColor,roughness:.9,metalness:.1}));oe.position.set(k*(d-(c/2+.01)),u/2-.5,p),this.group.add(oe);const De=C(new M(.055,u*.8,.055),z(e.primaryNeon,1.1));De.position.set(k*(d-c/2-.05),u/2-.5,p),this.group.add(De);const He=C(new M(.05,u*.6,.05),z(e.tertiaryNeon,.9));He.position.set(k*(d-c/2-.05),u/2-.5,a+.3),this.group.add(He)}const m=10.5,b=1.3,f=s-1.15,y=C(new M(12,m,b),P.cabinetMat(e),!0);y.position.set(0,m/2-.5,f),this.group.add(y);const x=C(new M(12.1,.15,b+.1),P.brassMat(e));x.position.set(0,m-.5+.07,f),this.group.add(x);const w=3.8,T=9.8,I=new V({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.9,roughness:.3,metalness:.5}),E=C(new M(T,w,.08),I);E.position.set(0,m-.5-w/2-.3,f+b/2+.04),this.group.add(E);const L=C(new M(T+.24,w+.24,.06),P.brassMat(e));L.position.set(0,m-.5-w/2-.3,f+b/2),this.group.add(L);const _=m-.5-w/2-.3;for(let k=0;k<4;k++){const N=C(new M(T-.4,.05,.07),z(e.tertiaryNeon,.8));N.position.set(0,_-w/2+.5+k*.75,f+b/2+.06),this.group.add(N)}const H=C(new M(12,.07,.07),z(e.tertiaryNeon,1.2));H.position.set(0,m-.5+.18,f+b/2),this.group.add(H);const F=C(new M(12,.07,.07),z(e.primaryNeon,.9));F.position.set(0,3.7,f+b/2),this.group.add(F);const B=C(new M(12,1.1,4.5),P.cabinetMat(e),!0);B.position.set(0,-.56,a+2.25),this.group.add(B);const U=C(new M(12,.12,.12),P.brassMat(e));U.position.set(0,0,a+4.45),this.group.add(U);const $=C(new M(12,.06,.06),z(e.secondaryNeon,1));$.position.set(0,.06,a+4.5),this.group.add($);const te=C(new M(12,.5,g),P.cabinetMat(e),!0);te.position.set(0,6.7,p),this.group.add(te);const j=C(new M(12,.07,.07),z(e.primaryNeon,1));j.position.set(0,6.96,a+.1),this.group.add(j);for(const k of[-1,1]){const N=C(new M(.09,.09,i+.5),P.brassMat(e));N.position.set(k*(t/2+.04),.05,p),this.group.add(N)}const J=C(new M(t+.2,3.6,.18),new V({color:e.pusherHousingColor,roughness:.65,metalness:.5}));J.position.set(0,1.8,s-.08),this.group.add(J);const re=C(new M(t-.2,.06,.06),z(e.secondaryNeon,1));re.position.set(0,3.65,s+.01),this.group.add(re);const se=C(new M(t+.1,.07,.07),z(e.secondaryNeon,1.4));se.position.set(0,.07,a),this.group.add(se);const ie=C(new M(t+.1,.07,.07),z(e.primaryNeon,1.4));ie.position.set(0,.07,s+.04),this.group.add(ie);for(const k of[-1,1]){const N=C(new M(.07,.07,i),z(e.primaryNeon,1.2));N.position.set(k*t/2,.07,(s+a)/2),this.group.add(N)}const ue=h.OPEN_ZONE_START-s,S=s+ue/2;for(const k of[-1,1]){const N=C(new M(.055,3.4,.055),z(e.tertiaryNeon,.9));N.position.set(k*(t/2),1.7,S),this.group.add(N)}const R=new K(new M(100,.2,100),new V({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.25,roughness:.95,metalness:0}));R.position.set(0,-.65,0),this.group.add(R)}buildCabinetDetails(e){const t=h.FIELD_DEPTH/2,i=-12/2,s=1.1,a=7.2,n=13.5,l=h.FIELD_WIDTH/2+.75,c=-.25,u=1.3,g=i-1.15;for(const L of[-1,1]){for(let H=0;H<2;H++){const F=H===0?-.26:.16,B=a*.6,U=L*(l+F),$=c+n/2+.07,te=C(new q(.05,.05,B,8),P.brassMat(e));te.position.set(U,B/2+.3,$),this.group.add(te);const j=4;for(let J=0;J<=j;J++){const re=.3+J*(B/j),se=C(new q(.09,.09,.07,10),P.brassMat(e));se.position.set(U,re,$),this.group.add(se)}}const _=C(new M(.48,.1,.1),P.brassMat(e));_.position.set(L*l,a*.6+.3+.05,c+n/2+.07),this.group.add(_)}for(const L of[-1,1]){const _=L*(l-s/2-.025),H=C(new q(.24,.24,.06,18),P.brassMat(e));H.rotation.z=Math.PI/2,H.position.set(_,a*.52,c+.8),this.group.add(H);const F=C(new q(.18,.18,.03,18),z(e.secondaryNeon,.55));F.rotation.z=Math.PI/2,F.position.set(_-L*.035,a*.52,c+.8),this.group.add(F);const B=C(new q(.16,.16,.05,14),P.brassMat(e));B.rotation.z=Math.PI/2,B.position.set(_,a*.28,c-1.2),this.group.add(B);const U=C(new q(.11,.11,.025,14),z(e.primaryNeon,.45));U.rotation.z=Math.PI/2,U.position.set(_-L*.03,a*.28,c-1.2),this.group.add(U)}const d=3.2,p=g+u/2+.05,m=C(new Ht(.82,.1,10,28),P.brassMat(e));m.position.set(0,d,p),this.group.add(m);const b=C(new q(.74,.74,.04,28),new V({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));b.rotation.x=Math.PI/2,b.position.set(0,d,p),this.group.add(b);for(let L=0;L<4;L++){const _=L/4*Math.PI*2+Math.PI/4,H=C(new q(.045,.045,.06,8),P.brassMat(e));H.rotation.x=Math.PI/2,H.position.set(Math.cos(_)*.88,d+Math.sin(_)*.88,p+.03),this.group.add(H)}const f=a*.82,y=h.FIELD_WIDTH+1.3,x=C(new q(.07,.07,y,10),P.brassMat(e));x.rotation.z=Math.PI/2,x.position.set(0,f,t+.45),this.group.add(x);for(const L of[-1,1]){const _=C(new q(.12,.12,.12,10),P.brassMat(e));_.rotation.z=Math.PI/2,_.position.set(L*(y/2+.06),f,t+.45),this.group.add(_)}const w=t+4.45,T=C(new M(1.3,.16,.05),new V({color:e.insetColor,roughness:.9,metalness:.1}));T.position.set(0,-.08,w),this.group.add(T);const I=C(new M(1.5,.3,.04),P.brassMat(e));I.position.set(0,-.08,w-.01),this.group.add(I);const E=C(new M(.9,.045,.06),new V({color:0,roughness:1,metalness:0}));E.position.set(0,-.06,w+.01),this.group.add(E)}addSideGuardMeshes(e){const s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(h.FIELD_WIDTH/2+.1),c=new M(.2,2,s),u=Re.createMesh(c,4500223,!1,!1);u.position.set(l,2/2,a),e.add(u),this.sideGuardMeshes.push(u)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class Es{constructor(e,t,i,s){r(this,"physicsWorld");r(this,"physicsSync");r(this,"collisionHandler");r(this,"pusher");r(this,"medalSpawner");r(this,"itemSpawner");r(this,"dropZone");r(this,"gimmickManager");r(this,"fieldMesh");r(this,"time",0);r(this,"getMedalQuotaMultiplier",()=>1);r(this,"sideGuardActive",!1);r(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new ss,this.physicsSync=new is,this.collisionHandler=new as,this.pusher=new ns,this.medalSpawner=new ps,this.itemSpawner=new Ts,this.dropZone=new ms,this.gimmickManager=new fs,this.fieldMesh=new P(s)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){me.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),A.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=ge(t);s&&(this.quotaManager.addItem(s.quotaValue),A.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(h.FIELD_WIDTH/2,.05,h.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,l=h.OPEN_ZONE_START- -12/2,c=-12/2+l/2,u=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),g=this.physicsWorld.createRigidBody(u);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),g);const d=e.RigidBodyDesc.fixed().setTranslation(h.FIELD_WIDTH/2+n/2,a/2,c),p=this.physicsWorld.createRigidBody(d);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),p);const m=8,b=.5,f=e.RigidBodyDesc.fixed().setTranslation(0,m/2,-12/2-b/2),y=this.physicsWorld.createRigidBody(f);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(h.FIELD_WIDTH/2+b,m/2,b/2),y)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new xs(e*1e3+t).pickRandom(h.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+h.PUSHER_DEPTH-h.PUSHER_RANGE,t=h.FIELD_DEPTH/2-h.MEDAL_RADIUS,i=h.FIELD_WIDTH/2-h.MEDAL_RADIUS;for(let d=0;d<h.INITIAL_FIELD_MEDALS;d++){const p=(Math.random()*2-1)*i,m=e+Math.random()*(t-e),b=h.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(p,b,m,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+h.MEDAL_RADIUS,n=e-h.MEDAL_RADIUS-s,l=6,c=Math.ceil(h.INITIAL_PUSHER_MEDALS/l),u=i*2/(l-1),g=n/Math.max(c-1,1);for(let d=0;d<h.INITIAL_PUSHER_MEDALS;d++){const p=d%l,m=Math.floor(d/l),b=-i+p*u+(Math.random()-.5)*.15,f=s+m*g+(Math.random()-.5)*.15,y=h.PUSHER_HEIGHT+h.MEDAL_THICKNESS/2+.8+m*.25;this.medalSpawner.spawn(b,y,f,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=h.FIELD_DEPTH/2-.5,s=2,n=-(12+(-t+1)/2*7);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:6,z:n})}update(e){this.time+=e;const t=4,i=Math.min(e,1/15);this.physicsWorld.setTimestep(i/t),this.collisionHandler.processEvents(this.physicsWorld,t),this.medalSpawner.cleanupFallen(h.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const s=this.pusher.update(e);this.fieldMesh.updatePusher(s),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(h.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(l,t/2,a),u=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),u),this.sideGuardBodies.push(u)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class Ss{constructor(){r(this,"current",0);r(this,"target",0);r(this,"phase",1);r(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),A.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),A.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*h.STAGES_PER_PHASE+t;return Math.ceil(h.BASE_QUOTA*Math.pow(h.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,A.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&A.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,A.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&A.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class vs{constructor(e){r(this,"phase",1);r(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===h.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(v.PLAYING)}clearCurrentStage(){A.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(v.STAGE_CLEAR),this.stage===h.STAGES_PER_PHASE&&A.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<h.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(v.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function ws(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Cs{constructor(){r(this,"items",[])}addItem(e){const t={instanceId:ws(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return ge(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=ge(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class Ms{constructor(){r(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});A.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),A.on("item:collected",()=>{this.data.totalItemsCollected++}),A.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class _s{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var G=(o=>(o.Gold="Gold",o.Alchemy="Alchemy",o.Throw="Throw",o.Guard="Guard",o))(G||{}),D=(o=>(o.Common="Common",o.Rare="Rare",o.Epic="Epic",o))(D||{});const at=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:G.Gold,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:G.Gold,rarity:D.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:G.Gold,rarity:D.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:G.Gold,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:G.Gold,rarity:D.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:G.Alchemy,rarity:D.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:G.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:G.Alchemy,rarity:D.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:G.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:G.Alchemy,rarity:D.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:G.Throw,rarity:D.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:G.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:G.Throw,rarity:D.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:G.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:G.Throw,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:G.Guard,rarity:D.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:G.Guard,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:G.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Ve(o){return at.find(e=>e.id===o)}class Is{constructor(){r(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),A.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Ve(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Ve(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const We={[D.Common]:60,[D.Rare]:30,[D.Epic]:10};class As{pickChoices(e,t,i){const s=new Le(i),a=new Set(t.map(u=>u.definitionId)),n=at.filter(u=>!a.has(u.id));if(n.length===0)return[];const l=[],c=new Set;for(let u=0;u<e&&l.length<n.length;u++){const g=Object.keys(We),d=g.map(f=>We[f]),p=s.weightedPick(g,d),m=n.filter(f=>f.rarity===p&&!c.has(f.id));if(m.length===0){const f=n.filter(x=>!c.has(x.id));if(f.length===0)break;const y=f[Math.floor(s.next()*f.length)];l.push(y),c.add(y.id);continue}const b=m[Math.floor(s.next()*m.length)];l.push(b),c.add(b.id)}return l}}const ke=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function $e(o){return ke.find(e=>e.id===o)}class Ps{constructor(){r(this,"shopMoney");r(this,"medals");r(this,"sellMultiplier",1);r(this,"ownedActiveItems",new Map);this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*h.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=ke.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let Ye=!1;function Rs(){if(Ye)return;Ye=!0;const o=document.createElement("style");o.textContent=`
    @keyframes titlePulseCyber {
      0%, 100% { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd70066; }
      50% { text-shadow: 0 0 35px #ffd700, 0 0 70px #ffd70099, 0 0 100px #ffd70033; }
    }
    @keyframes titlePulseSteam {
      0%, 100% { text-shadow: 0 0 20px #c8831a, 0 0 40px #c8831a66; }
      50% { text-shadow: 0 0 35px #c8831a, 0 0 70px #c8831a99, 0 0 100px #c8831a33; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `,document.head.appendChild(o)}class Ls{constructor(e){r(this,"el");r(this,"titleEl");r(this,"onStartCallbacks",[]);r(this,"onSettingsCallbacks",[]);r(this,"hideTimer",null);Rs(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h1"),this.titleEl.style.cssText=`
      font-size: 4rem;
      color: var(--t-primary);
      letter-spacing: 0.3em;
      margin-bottom: 0.5rem;
      animation: titlePulseSteam 3s ease-in-out infinite;
    `,this.titleEl.textContent="YukiMedal";const t=document.createElement("p");t.style.cssText=`
      font-size: 1rem;
      color: var(--t-text-dim);
      margin-bottom: 3rem;
      letter-spacing: 0.1em;
    `,t.textContent="Roguelike Medal Pusher";const i=document.createElement("button");i.style.cssText=`
      font-size: 1.3rem;
      padding: 14px 48px;
      background: linear-gradient(90deg, transparent, var(--t-primary-faint), transparent);
      background-size: 200% auto;
      border: 2px solid var(--t-primary);
      color: var(--t-primary);
      cursor: pointer;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      transition: all 0.2s;
      border-radius: 4px;
      animation: shimmer 2.5s linear infinite;
    `,i.textContent="START",i.addEventListener("mouseenter",()=>{i.style.backgroundImage="none",i.style.backgroundColor="rgba(200,131,26,0.2)"}),i.addEventListener("mouseleave",()=>{i.style.backgroundImage="linear-gradient(90deg, transparent, var(--t-primary-faint), transparent)",i.style.backgroundColor=""}),i.addEventListener("click",()=>{this.onStartCallbacks.forEach(n=>n())});const s=document.createElement("button");s.style.cssText=`
      font-size: 0.9rem;
      padding: 10px 32px;
      background: transparent;
      border: 1px solid var(--t-text-dim);
      color: var(--t-text-dim);
      cursor: pointer;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: all 0.2s;
      border-radius: 4px;
      margin-top: 12px;
    `,s.textContent="SETTINGS",s.addEventListener("mouseenter",()=>{s.style.borderColor="var(--t-primary)",s.style.color="var(--t-primary)"}),s.addEventListener("mouseleave",()=>{s.style.borderColor="var(--t-text-dim)",s.style.color="var(--t-text-dim)"}),s.addEventListener("click",()=>{this.onSettingsCallbacks.forEach(n=>n())});const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.65rem;
      color: var(--t-text-dim);
      opacity: 0.5;
      letter-spacing: 0.05em;
    `,a.textContent="v0.1.0",this.el.appendChild(this.titleEl),this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}applyTheme(e){const t=e==="steampunk"?"titlePulseSteam":"titlePulseCyber";this.titleEl.style.animation=`${t} 3s ease-in-out infinite`}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class ks{constructor(e){r(this,"el");r(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: 1.2rem;
      color: var(--t-primary);
      text-shadow: 0 0 8px var(--t-shadow-glow);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      transition: transform 0.25s ease, color 0.25s ease;
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Qe=!1;function Ds(){if(Qe)return;Qe=!0;const o=document.createElement("style");o.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(o)}class Hs{constructor(e){r(this,"container");r(this,"bar");r(this,"label");r(this,"reached",!1);Ds(),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
    `,this.label=document.createElement("div"),this.label.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); margin-bottom: 6px;",this.label.textContent="QUOTA: 0 / 30";const t=document.createElement("div");t.style.cssText=`
      width: 100%;
      height: 12px;
      background: var(--t-track-bg);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    `,this.bar=document.createElement("div"),this.bar.style.cssText=`
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end));
      border-radius: 6px;
      transition: width 0.3s ease;
      position: relative;
    `;const i=document.createElement("div");i.style.cssText=`
      position: absolute;
      top: 1px;
      right: 0;
      width: 30%;
      height: 4px;
      background: rgba(255,255,255,0.25);
      border-radius: 2px;
      pointer-events: none;
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Bs{constructor(e){r(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 0.9rem;
      color: var(--t-text-dim);
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: right;
    `,e.appendChild(this.el)}update(e,t){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const s=document.createTextNode("Phase ");this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${t} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let qe=!1;function Gs(){if(qe)return;qe=!0;const o=document.createElement("style");o.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
  `,document.head.appendChild(o)}class Ns{constructor(e){r(this,"el");r(this,"medalCounter");r(this,"quotaBar");r(this,"phaseIndicator");r(this,"throwHint");r(this,"inventoryPanel");r(this,"activeItemPanel");r(this,"countdownEl");r(this,"onUseActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new ks(this.el),this.quotaBar=new Hs(this.el),this.phaseIndicator=new Bs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.85rem;
      color: var(--t-text-dim);
      text-align: center;
    `,this.throwHint.textContent="Tap / Click to throw medal",this.el.appendChild(this.throwHint),this.inventoryPanel=document.createElement("div"),this.inventoryPanel.style.cssText=`
      position: absolute; bottom: 60px; right: 16px;
      max-width: 200px; pointer-events: none;
    `,this.el.appendChild(this.inventoryPanel),this.activeItemPanel=document.createElement("div"),this.activeItemPanel.style.cssText=`
      position: absolute; bottom: 60px; left: 16px;
      max-width: 220px; pointer-events: all;
    `,this.el.appendChild(this.activeItemPanel),this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
    `,this.countdownEl.innerHTML=`
      <div class="cd-number" style="font-size: 6rem; font-weight: bold; color: #ff4444;
        text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; line-height: 1;">10</div>
      <div style="font-size: 1rem; color: #ff8888; letter-spacing: 0.2em; margin-top: 8px;">MEDAL EMPTY</div>
    `,this.el.appendChild(this.countdownEl),e.appendChild(this.el),Gs()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="var(--t-primary)"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%) scale(1.5);
      font-size: ${i};
      font-weight: bold;
      color: ${t};
      text-shadow: 0 0 8px ${t};
      pointer-events: none;
      animation: squashIn 0.12s ease forwards;
    `,a.textContent=e,this.el.appendChild(a),setTimeout(()=>{a.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>a.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=ge(i.definitionId);if(!s)continue;const a=document.createElement("div");a.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid var(--t-track-bg);
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: var(--t-text-bright);
      `,a.textContent=s.name,this.inventoryPanel.appendChild(a)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),a=i.remainingMs??0,n=a>0,l=n?` (${Math.ceil(a/1e3)}s)`:"";s.style.cssText=`
        display: block;
        width: 100%;
        margin-bottom: 6px;
        padding: 6px 10px;
        background: ${n?`${i.color}33`:"rgba(0,0,0,0.6)"};
        border: 2px solid ${i.color};
        color: ${i.color};
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 6px;
        text-align: left;
        pointer-events: all;
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${l}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Ze=!1;function Os(){if(Ze)return;Ze=!0;const o=document.createElement("style");o.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(o)}class Us{constructor(e){r(this,"el");r(this,"onContinueCallbacks",[]);r(this,"onSkipCallbacks",[]);r(this,"titleEl");r(this,"infoEl");r(this,"continueBtn");r(this,"shopBtn");r(this,"hideTimer",null);Os(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 16px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h2"),this.titleEl.style.cssText="font-size: 2rem; color: var(--t-success); margin-bottom: 8px;",this.infoEl=document.createElement("p"),this.infoEl.style.cssText="color: var(--t-text-dim); font-size: 0.9rem;";const t=document.createElement("div");t.style.cssText="display: flex; gap: 16px; margin-top: 16px;",this.continueBtn=this.createButton("NEXT STAGE →","var(--t-tertiary)",()=>{this.onContinueCallbacks.forEach(i=>i())}),this.shopBtn=this.createButton("GO TO SHOP (next phase)","#ff8800",()=>{this.onSkipCallbacks.forEach(i=>i())}),t.appendChild(this.continueBtn),t.appendChild(this.shopBtn),this.el.appendChild(this.titleEl),this.el.appendChild(this.infoEl),this.el.appendChild(t),e.appendChild(this.el)}createButton(e,t,i){const s=document.createElement("button");return s.style.cssText=`
      font-size: 1rem;
      padding: 12px 32px;
      background: transparent;
      border: 2px solid ${t};
      color: ${t};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="var(--t-primary)",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="var(--t-success)",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Ke=!1;function Fs(){if(Ke)return;Ke=!0;const o=document.createElement("style");o.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(o)}class zs{constructor(e){r(this,"el");r(this,"onRetryCallbacks",[]);r(this,"hideTimer",null);Fs(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      gap: 12px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText=`
      font-size: 2.5rem;
      color: #ff4444;
      margin-bottom: 8px;
      animation: fadeInUp 0.4s ease forwards;
    `,t.textContent="GAME OVER";const i=e.isNewBest?document.createElement("div"):null;i&&(i.style.cssText=`
        font-size: 1.1rem;
        color: var(--t-primary);
        margin-bottom: 8px;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: 0.1s;
        opacity: 0;
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((l,c)=>{const u=document.createElement("div");u.style.cssText=`
        color: var(--t-text-dim);
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,u.textContent=l,a.appendChild(u)});const n=document.createElement("button");n.style.cssText=`
      font-size: 1.1rem;
      padding: 12px 40px;
      background: transparent;
      border: 2px solid #ff4444;
      color: #ff4444;
      cursor: pointer;
      letter-spacing: 0.15em;
      border-radius: 4px;
      transition: background 0.2s;
      animation: fadeInUp 0.4s ease forwards;
      animation-delay: ${.15+s.length*.1}s;
      opacity: 0;
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(l=>l())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const Vs=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Ws{constructor(e){r(this,"el");r(this,"onSelectCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay);
      pointer-events: all;
      gap: 24px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText="font-size: 1.8rem; color: #aa44ff; margin-bottom: 8px;",t.textContent="CHOOSE A SKILL";const i=document.createElement("p");i.style.cssText="color: var(--t-text-dim); font-size: 0.85rem; margin-bottom: 16px;",i.textContent="Select one permanent skill";const s=document.createElement("div");s.style.cssText="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;";for(const a of e)s.appendChild(this.createCard(a));this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e){const i={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"}[e.tag]??"#aaaacc",s=document.createElement("div");s.style.cssText=`
      width: 200px;
      padding: 20px;
      ${Vs}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: var(--t-text-bright); font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const l=document.createElement("div");return l.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); line-height: 1.4;",l.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(l),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const Xe=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class $s{constructor(e){r(this,"el");r(this,"moneyEl");r(this,"inventoryEl");r(this,"onBuyMedalsCallbacks",[]);r(this,"onSellCallbacks",[]);r(this,"onContinueCallbacks",[]);r(this,"onBuyActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      padding: 32px;
      overflow-y: auto;
      font-size: 0.9rem;
      opacity: 0;
      transition: opacity 280ms ease;
    `;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;";const i=document.createElement("h2");i.style.cssText="font-size: 1.8rem; color: var(--t-primary);",i.textContent="SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="color: var(--t-primary); font-size: 1.1rem;";const s=document.createElement("button");s.style.cssText=`
      padding: 10px 28px;
      background: transparent;
      border: 2px solid var(--t-success);
      color: var(--t-success);
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="rgba(0,255,136,0.13)"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const l=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const y of l){const x=e>=y.price,w=document.createElement("button");w.style.cssText=`
        padding: 12px 18px;
        background: transparent;
        border: 2px solid ${x?"var(--t-primary)":"#555"};
        color: ${x?"var(--t-primary)":"#555"};
        cursor: ${x?"pointer":"default"};
        font-size: 0.85rem;
        border-radius: 6px;
        transition: background 0.2s, transform 0.15s;
        min-width: 120px;
        text-align: center;
      `,w.innerHTML=`<strong>${y.label}</strong><br>${y.price} G`,x&&(w.addEventListener("mouseenter",()=>{w.style.background="rgba(200,131,26,0.13)",w.style.transform="translateY(-2px)"}),w.addEventListener("mouseleave",()=>{w.style.background="transparent",w.style.transform="translateY(0)"}),w.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(T=>T(y.count))})),n.appendChild(w)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const u=document.createElement("div");u.style.cssText="margin-bottom: 28px;";const g=document.createElement("h3");g.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",g.textContent="ACTIVE ITEMS (buy to use during game)",u.appendChild(g);const d=document.createElement("div");d.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const p=new Map(i.map(y=>[y.id,y.count]));for(const y of ke){const x=e>=y.price,w=p.get(y.id)??0,T=document.createElement("div");T.style.cssText=`
        padding: 14px;
        ${Xe}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${x?y.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const I=document.createElement("div");I.style.cssText=`color: ${y.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,I.textContent=y.name;const E=document.createElement("div");E.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",E.textContent=y.description;const L=document.createElement("div");L.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",L.textContent=`Owned: ${w}`;const _=document.createElement("button");_.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${x?y.color:"#555"};
        color: ${x?y.color:"#555"};
        cursor: ${x?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,_.textContent=`Buy ${y.price} G`,x&&(_.addEventListener("mouseenter",()=>_.style.background=`${y.color}22`),_.addEventListener("mouseleave",()=>_.style.background="transparent"),T.addEventListener("mouseenter",()=>{T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.transform="translateY(0)",T.style.boxShadow=""}),_.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(H=>H(y.id))})),T.appendChild(I),T.appendChild(E),T.appendChild(L),T.appendChild(_),d.appendChild(T)}u.appendChild(d),this.inventoryEl.appendChild(u);const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(m);const b=document.createElement("div"),f=document.createElement("h3");if(f.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",f.textContent="YOUR ITEMS (click to sell)",b.appendChild(f),t.length===0){const y=document.createElement("p");y.style.cssText="color: var(--t-text-dim); opacity: 0.5;",y.textContent="No items collected yet.",b.appendChild(y)}else{const y=document.createElement("div");y.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const x of t){const w=ge(x.definitionId);if(!w)continue;const T=document.createElement("div");T.style.cssText=`
          width: 160px;
          padding: 14px;
          ${Xe}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,T.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;">${w.name}</div>
          <div style="color:var(--t-text-dim);font-size:0.75rem;">${w.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;margin-top:8px;">Sell: ${w.sellPrice} G</div>
        `,T.addEventListener("mouseenter",()=>{T.style.borderColor="var(--t-primary)",T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.borderColor="var(--t-track-bg)",T.style.transform="translateY(0)",T.style.boxShadow=""}),T.addEventListener("click",()=>{this.onSellCallbacks.forEach(I=>I(x.instanceId))}),y.appendChild(T)}b.appendChild(y)}this.inventoryEl.appendChild(b)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const Ys={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.85)",bgOverlayDark:"rgba(10,5,20,0.92)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.55,bloomThreshold:.82,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.8,fillColor:4210943,fillIntensity:.7,warmPointColor:16765056,warmPointIntensity:2,coolPointColor:4482815,coolPointIntensity:1.4}},nt={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.85)",bgOverlayDark:"rgba(18,10,2,0.92)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.8,bloomThreshold:.76,bloomRadius:.55,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:2.2,fillColor:10510384,fillIntensity:.9,warmPointColor:16748592,warmPointIntensity:2.8,coolPointColor:9455640,coolPointIntensity:1}},rt={cyber:Ys,steampunk:nt};let je=!1;function Qs(){if(je)return;je=!0;const o=document.createElement("style");o.textContent=`
    .settings-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: var(--t-track-bg);
      outline: none;
      accent-color: var(--t-primary);
    }
    .settings-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--t-primary);
      cursor: pointer;
    }
    .settings-slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--t-primary);
      cursor: pointer;
      border: none;
    }
  `,document.head.appendChild(o)}class qs{constructor(e){r(this,"el");r(this,"onVolumeChangeCallbacks",[]);r(this,"onThemeChangeCallbacks",[]);r(this,"onCloseCallbacks",[]);r(this,"hideTimer",null);r(this,"themeBtns",new Map);Qs(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--t-bg-overlay-dark);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
      z-index: 100;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="",this.themeBtns.clear(),this.buildContent(e),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}buildContent(e){const t=document.createElement("div");t.style.cssText=`
      background: var(--t-panel-bg);
      backdrop-filter: blur(16px);
      border: 1px solid var(--t-border-faint);
      box-shadow: 0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px 48px;
      min-width: 420px;
      max-width: 520px;
      width: 90%;
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",t.appendChild(i);const s=document.createElement("div");s.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",s.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const b of n){const f=document.createElement("div");f.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const y=document.createElement("div");y.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",y.textContent=b.label;const x=document.createElement("input");x.type="range",x.min="0",x.max="1",x.step="0.05",x.value=String(b.value),x.className="settings-slider",x.style.cssText="flex: 1;";const w=document.createElement("div");w.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",w.textContent=`${Math.round(b.value*100)}%`,x.addEventListener("input",()=>{const T=parseFloat(x.value);w.textContent=`${Math.round(T*100)}%`,this.onVolumeChangeCallbacks.forEach(I=>I(b.type,T))}),f.appendChild(y),f.appendChild(x),f.appendChild(w),s.appendChild(f)}t.appendChild(s);const l=document.createElement("hr");l.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(l);const c=document.createElement("div");c.style.cssText="margin-bottom: 32px;";const u=document.createElement("div");u.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",u.textContent="THEME",c.appendChild(u);const g=document.createElement("div");g.style.cssText="display: flex; gap: 12px;";const d=["cyber","steampunk"];for(const b of d){const f=b===e.theme,y=document.createElement("button");y.style.cssText=`
        flex: 1;
        padding: 12px 16px;
        background: ${f?"var(--t-primary)":"transparent"};
        border: 2px solid var(--t-primary);
        color: ${f?"var(--t-bg-overlay-dark)":"var(--t-primary)"};
        cursor: pointer;
        font-size: 0.85rem;
        border-radius: 8px;
        letter-spacing: 0.1em;
        transition: all 0.2s;
        font-weight: ${f?"bold":"normal"};
      `,y.textContent=rt[b].displayName,y.addEventListener("click",()=>{this.selectTheme(b),this.onThemeChangeCallbacks.forEach(x=>x(b))}),this.themeBtns.set(b,y),g.appendChild(y)}c.appendChild(g),t.appendChild(c);const p=document.createElement("hr");p.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(p);const m=document.createElement("button");m.style.cssText=`
      width: 100%;
      padding: 12px;
      background: transparent;
      border: 2px solid var(--t-border-faint);
      color: var(--t-text-dim);
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 8px;
      letter-spacing: 0.15em;
      transition: all 0.2s;
    `,m.textContent="CLOSE",m.addEventListener("mouseenter",()=>{m.style.borderColor="var(--t-primary)",m.style.color="var(--t-primary)"}),m.addEventListener("mouseleave",()=>{m.style.borderColor="var(--t-border-faint)",m.style.color="var(--t-text-dim)"}),m.addEventListener("click",()=>{this.onCloseCallbacks.forEach(b=>b())}),t.appendChild(m),this.el.appendChild(t)}selectTheme(e){this.themeBtns.forEach((t,i)=>{const s=i===e;t.style.background=s?"var(--t-primary)":"transparent",t.style.color=s?"var(--t-bg-overlay-dark)":"var(--t-primary)",t.style.fontWeight=s?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}class Zs{constructor(e){r(this,"titleScreen");r(this,"gameScreen");r(this,"stageResultScreen");r(this,"resultScreen");r(this,"skillSelectScreen");r(this,"shopScreen");r(this,"settingsScreen");this.titleScreen=new Ls(e),this.gameScreen=new Ns(e),this.stageResultScreen=new Us(e),this.resultScreen=new zs(e),this.skillSelectScreen=new Ws(e),this.shopScreen=new $s(e),this.settingsScreen=new qs(e),A.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case v.TITLE:this.titleScreen.show();break;case v.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case v.STAGE_CLEAR:break;case v.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,l){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),l&&this.gameScreen.updateActiveItems(l)}}class Ks{constructor(e){r(this,"throwCallbacks",[]);r(this,"enabled",!1);r(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(s=>s(t,i))});r(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(a=>a(i,s))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const Z=class Z{constructor(){r(this,"ctx",null);r(this,"masterGain",null);r(this,"sfxGain",null);r(this,"bgmGain",null);r(this,"bgmPlaying",!1);r(this,"bgmNextTime",0);r(this,"bgmSchedulerTimer",null);r(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),t=this.getSfxGain(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let u=0;u<i;u++)a[u]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),l.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(l),l.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getSfxGain();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playSkillSelected(){const e=this.getCtx(),t=this.getSfxGain();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*(1-c/a.length);const n=e.createBufferSource();n.buffer=s;const l=e.createGain();l.gain.value=.35,n.connect(l),l.connect(t),n.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getBgmGain(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=Z.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=Z.BASS_FREQS,n=Math.floor(s/2)%a.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",a[n],i,Z.BEAT*1.8,.12);const l=Z.MELODY;let c=s%8,u=0;for(const[f,y]of l){if(c>=u&&c<u+y){f>0&&this._scheduleNote(e,t,"square",f,i,Z.BEAT*y*.85,.1);break}u+=y}const g=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),d=g.getChannelData(0);for(let f=0;f<d.length;f++)d[f]=(Math.random()*2-1)*(1-f/d.length);const p=e.createBufferSource();p.buffer=g;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=8e3;const b=e.createGain();b.gain.value=.04,p.connect(m),m.connect(b),b.connect(t),p.start(i)}_playNote(e,t,i,s,a,n,l){const c=e.createOscillator();c.type=i,c.frequency.value=s;const u=e.createGain();u.gain.setValueAtTime(l,a),u.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(u),u.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,l){this._playNote(e,t,i,s,a,n,l)}};r(Z,"BPM",110),r(Z,"BEAT",60/Z.BPM),r(Z,"BASS_FREQS",[110,98,82.41,110]),r(Z,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let _e=Z;const Je="yukimedal_settings",pe={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"steampunk"},ae=class ae{constructor(){r(this,"_data");this._data=this._load()}static getInstance(){return ae._instance||(ae._instance=new ae),ae._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(Je);if(e){const t=JSON.parse(e);return{masterVolume:typeof t.masterVolume=="number"?t.masterVolume:pe.masterVolume,bgmVolume:typeof t.bgmVolume=="number"?t.bgmVolume:pe.bgmVolume,sfxVolume:typeof t.sfxVolume=="number"?t.sfxVolume:pe.sfxVolume,theme:t.theme==="cyber"||t.theme==="steampunk"?t.theme:pe.theme}}}catch{}return{...pe}}_save(){try{localStorage.setItem(Je,JSON.stringify(this._data))}catch{}}};r(ae,"_instance",null);let Ie=ae;const ne=class ne{constructor(){r(this,"_currentName","steampunk");r(this,"_currentTheme",nt);r(this,"_callbacks",[]);r(this,"_styleEl",null)}static getInstance(){return ne._instance||(ne._instance=new ne),ne._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const t=rt[e];if(!t)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=t.ui;this._styleEl.textContent=`:root {
  --t-bg-overlay:     ${i.bgOverlay};
  --t-bg-overlay-dark: ${i.bgOverlayDark};
  --t-primary:        ${i.primary};
  --t-primary-faint:  ${i.primaryFaint};
  --t-secondary:      ${i.secondary};
  --t-tertiary:       ${i.tertiary};
  --t-success:        ${i.success};
  --t-text-dim:       ${i.textDim};
  --t-text-bright:    ${i.textBright};
  --t-border-faint:   ${i.borderFaint};
  --t-panel-bg:       ${i.panelBg};
  --t-track-bg:       ${i.trackBg};
  --t-bar-start:      ${i.barStart};
  --t-bar-end:        ${i.barEnd};
  --t-shadow-glow:    ${i.shadowGlow};
}`,this._currentName=e,this._currentTheme=t,this._callbacks.forEach(s=>s(t))}onChange(e){this._callbacks.push(e)}};r(ne,"_instance",null);let Ae=ne;async function Xs(){const o=Ie.getInstance(),e=Ae.getInstance();e.applyTheme(o.theme);const t=new Nt,i=new Ot,s=new Ft,a=new Ms,n=new _s,l=document.getElementById("app"),c=document.getElementById("ui-root"),u=new jt(l),g=new Jt,d=new es(u),p=new ts(u.scene);u.setCamera(g.camera);const m=e.currentTheme;u.applySceneTheme(m.scene),d.applyTheme(m.lights),p.applyTheme(m.scene);const b=new Ss,f=new vs(t),y=new Cs,x=new Is,w=new As,T=new Ps,I=new Es(u,b,y,m.scene);I.setMedalQuotaMultiplierFn(()=>x.quotaPerMedalMultiplier);const E=new Zs(c),L=new Ks(u.renderer.domElement);E.titleScreen.applyTheme(o.theme);const _=new _e;_.setMasterVolume(o.masterVolume),_.setBgmVolume(o.bgmVolume),_.setSfxVolume(o.sfxVolume),e.onChange(S=>{u.applySceneTheme(S.scene),d.applyTheme(S.lights),p.applyTheme(S.scene),E.titleScreen.applyTheme(S.name),I.physicsWorld.initialized&&I.rebuildFieldMesh(S.scene)}),E.titleScreen.onSettings(()=>{E.settingsScreen.show(o.snapshot)}),E.settingsScreen.onClose(()=>{E.settingsScreen.hide()}),E.settingsScreen.onVolumeChange((S,R)=>{S==="master"?(o.setMasterVolume(R),_.setMasterVolume(R)):S==="bgm"?(o.setBgmVolume(R),_.setBgmVolume(R)):(o.setSfxVolume(R),_.setSfxVolume(R))}),E.settingsScreen.onThemeChange(S=>{o.setTheme(S),e.applyTheme(S)});let H=0,F=!1,B=0,U=0,$=0;E.titleScreen.onStart(()=>{te()}),E.stageResultScreen.onContinue(()=>{E.stageResultScreen.hide(),f.advanceStage(),j()}),E.stageResultScreen.onSkip(()=>{E.stageResultScreen.hide(),f.advancePhase(),J()}),E.shopScreen.onBuyMedals(S=>{const R=S*h.MEDAL_BUY_PRICE;T.buyMedals(S)?E.shopScreen.show(T.money,y.getAll(),T.getOwnedActiveItems()):console.log(`Not enough shop money (need ${R} G, have ${T.money} G)`)}),E.shopScreen.onSell(S=>{const R=T.sellItem(S,y);a.addShopMoney(R),E.shopScreen.show(T.money,y.getAll(),T.getOwnedActiveItems())}),E.shopScreen.onBuyActive(S=>{T.buyActiveItem(S)&&E.shopScreen.show(T.money,y.getAll(),T.getOwnedActiveItems())}),E.shopScreen.onContinue(()=>{E.shopScreen.hide(),re()}),E.skillSelectScreen.onSelect(S=>{x.addSkill(S,f.currentPhase),T.setSellMultiplier(x.itemSellMultiplier),E.skillSelectScreen.hide(),t.transition(v.STAGE_START),j()}),E.resultScreen.onRetry(()=>{E.resultScreen.hide(),t.transition(v.TITLE),E.titleScreen.show()}),E.gameScreen.onUseActive(S=>{if(!t.is(v.PLAYING)||!T.useActiveItem(S))return;const R=$e(S);if(!R)return;const k=Date.now()+R.durationMs;S==="side_guard"?($=k,I.addSideGuardWalls(),I.fieldMesh.addSideGuardMeshes(I.fieldMesh.group)):S==="medal_fever"&&(U=k)}),L.onThrow((S,R)=>{if(!t.is(v.PLAYING))return;const k=S*(h.FIELD_WIDTH/2+.5),N=x.medalThrowCount;let W=0;for(let Y=0;Y<N&&T.spendMedal();Y++){const oe=(Y-Math.floor(N/2))*.6;I.throwMedal(k+oe,R),W++}W>0&&A.emit("medal:thrown",{count:W})}),A.on("quota:reached",()=>{t.is(v.PLAYING)&&(L.disable(),setTimeout(()=>{const S=x.onClearBonusMedals;S>0&&T.addMedals(S),f.clearCurrentStage();const R=f.isLastStageOfPhase;E.stageResultScreen.show(f.currentPhase,f.currentStage,R,b.currentValue,b.targetValue)},500))}),A.on("medal:collected",({count:S})=>{t.is(v.PLAYING)&&(E.gameScreen.showFloatingText(`+${S}`),T.addMedals(S))}),A.on("medal:thrown",()=>_.playThrow()),A.on("medal:collected",()=>_.playMedalCollected()),A.on("quota:reached",()=>_.playQuotaReached()),A.on("stage:cleared",()=>_.playStageCleared()),A.on("game:over",()=>_.playGameOver()),A.on("skill:selected",()=>_.playSkillSelected()),A.on("medal:collected",()=>g.shake(.04,.08)),A.on("quota:reached",()=>g.shake(.15,.3)),A.on("stage:cleared",()=>g.shake(.28,.5)),A.on("game:over",()=>g.shake(.5,.8)),A.on("state:changed",({to:S})=>{S===v.PLAYING?_.startBGM():_.stopBGM()}),i.addUpdateFn(S=>{if(t.is(v.PLAYING)){const R=Date.now();$>0&&R>$&&($=0,I.removeSideGuardWalls(),I.fieldMesh.removeSideGuardMeshes(I.fieldMesh.group)),U>0&&R>U&&(U=0);const k=U>Date.now()?2:1;I.setMedalQuotaMultiplierFn(()=>x.quotaPerMedalMultiplier*k),I.update(S);const N=T.getOwnedActiveItems().map(W=>{const Y=$e(W.id),oe=W.id==="side_guard"?Math.max(0,$-Date.now()):W.id==="medal_fever"?Math.max(0,U-Date.now()):0;return{...W,name:Y.name,color:Y.color,remainingMs:oe}});if(E.updateGameHUD(T.currentMedals,b.currentValue,b.targetValue,f.currentPhase,f.currentStage,y.getAll(),N),!F&&T.currentMedals<=0&&!b.isReached&&(F=!0,B=10,L.disable()),F&&B>0){const W=Math.ceil(B);B-=S;const Y=Math.ceil(B);Y!==W&&Y>0&&_.playCountdownTick(),B>0?E.gameScreen.showCountdown(B):(E.gameScreen.hideCountdown(),se())}}p.update(S),g.update(S),u.render(g.camera)});function te(){s.incrementRuns(),T.reset(),y.clear(),x.reset(),a.reset(),f.reset(),H=0,F=!1,B=0,U=0,$=0,t.transition(v.STAGE_START),j()}async function j(){const S=f.currentPhase,R=f.currentStage;F=!1,B=0,E.gameScreen.hideCountdown(),b.startStage(S,R);try{I.physicsWorld.initialized?I.endStage():(ue(!0),await I.init(),ue(!1))}catch(k){console.error("Field init failed:",k),ue(!1);return}I.startStage(S,R),f.startCurrentStage(),L.enable()}function J(){I.endStage(),t.transition(v.SHOP),E.shopScreen.show(T.money,y.getAll(),T.getOwnedActiveItems())}function re(){t.transition(v.SKILL_SELECT);const S=w.pickChoices(h.SKILL_CHOICES,x.getOwnedSkills(),Date.now());E.skillSelectScreen.show(S)}function se(){if(H>0){H--,B=0,E.gameScreen.hideCountdown(),L.enable(),F=!1;return}I.endStage();const S=n.calculate(a.snapshot,s);s.updateBest(S.phase,S.stage),t.transition(v.GAME_OVER),t.transition(v.RESULT),E.resultScreen.show(S)}const ie=document.createElement("div");ie.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,ie.textContent="LOADING...",c.appendChild(ie);function ue(S){ie.style.display=S?"flex":"none"}A.on("skill:selected",()=>{H=Math.max(H,x.gameOverShields)}),i.start(),t.transition(v.TITLE),E.titleScreen.show(),console.log("YukiMedal initialized")}Xs().catch(console.error);
