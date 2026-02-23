var qe=Object.defineProperty;var Ye=(r,e,t)=>e in r?qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>Ye(r,typeof e!="symbol"?e+"":e,t);import{M as V,O as Ze,B as Fe,F as xe,S as j,U as ue,V as U,W as ce,H as de,N as Ke,C as je,a as te,b as $,A as Xe,c as Je,R as et,d as tt,e as st,L as it,f as nt,g as at,h as ze,i as ot,j as rt,k as lt,l as ct,m as dt,P as ht,n as ut,o as We,p as pt,D as ve,q as Ce,r as mt,s as ft,t as gt,G as yt,u as Et,v as Ve,w as Tt,I as St,x as W,y as bt,z as re,E as x}from"./three-CMChFoeq.js";import{O as le}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();var y=(r=>(r.INIT="INIT",r.TITLE="TITLE",r.STAGE_START="STAGE_START",r.PLAYING="PLAYING",r.STAGE_CLEAR="STAGE_CLEAR",r.SKIP_PROMPT="SKIP_PROMPT",r.GAME_OVER="GAME_OVER",r.SHOP="SHOP",r.SKILL_SELECT="SKILL_SELECT",r.RESULT="RESULT",r))(y||{});class wt{constructor(){o(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const v=new wt,Mt=[{from:y.INIT,to:y.TITLE},{from:y.TITLE,to:y.STAGE_START},{from:y.STAGE_START,to:y.PLAYING},{from:y.PLAYING,to:y.STAGE_CLEAR},{from:y.PLAYING,to:y.GAME_OVER},{from:y.STAGE_CLEAR,to:y.STAGE_START},{from:y.STAGE_CLEAR,to:y.SKIP_PROMPT},{from:y.STAGE_CLEAR,to:y.SHOP},{from:y.SKIP_PROMPT,to:y.SHOP},{from:y.SKIP_PROMPT,to:y.STAGE_START},{from:y.SHOP,to:y.SKILL_SELECT},{from:y.SKILL_SELECT,to:y.STAGE_START},{from:y.GAME_OVER,to:y.RESULT},{from:y.RESULT,to:y.TITLE}];class xt{constructor(){o(this,"current",y.INIT)}get state(){return this.current}canTransition(e){return Mt.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,v.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class vt{constructor(){o(this,"updateFns",[]);o(this,"rafId",null);o(this,"lastTime",0);o(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const n of this.updateFns)n(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const _e="yukimedal_save",Ct="yukimedal_best",pe={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class _t{constructor(){o(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(_e);return e?{...pe,...JSON.parse(e)}:{...pe}}catch{return{...pe}}}save(){try{localStorage.setItem(_e,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Ct,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const $e={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class J{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const At=new Ze(-1,1,1,-1,0,1);class It extends Fe{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}}const Rt=new It;class ge{constructor(e){this._mesh=new V(Rt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,At)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pt extends J{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof j?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ue.clone(e.uniforms),this.material=new j({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ge(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ae extends J{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),n.buffers.stencil.setClear(l),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}}class Lt extends J{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Dt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new U);this._width=i.width,this._height=i.height,t=new ce(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:de}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pt($e),this.copyPass.material.blending=Ke,this.clock=new je}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,n=this.passes.length;s<n;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ae!==void 0&&(a instanceof Ae?i=!0:a instanceof Lt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new U);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kt extends J{constructor(e,t,i=null,s=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Ht={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class X extends J{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new U(e.x,e.y):new U(256,256),this.clearColor=new te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ce(n,a,{type:de}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const S=new ce(n,a,{type:de});S.texture.name="UnrealBloomPass.h"+m,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const E=new ce(n,a,{type:de});E.texture.name="UnrealBloomPass.v"+m,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),n=Math.round(n/2),a=Math.round(a/2)}const l=Ht;this.highPassUniforms=ue.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new j({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new U(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=$e;this.copyUniforms=ue.clone(f.uniforms),this.blendMaterial=new j({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Xe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new te,this.oldClearAlpha=1,this.basic=new Je,this.fsQuad=new ge(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,s),this.renderTargetsVertical[n].setSize(i,s),this.separableBlurMaterials[n].uniforms.invSize.value=new U(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=X.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=X.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new j({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new U(.5,.5)},direction:{value:new U(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new j({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}X.BlurDirectionX=new U(1,0);X.BlurDirectionY=new U(0,1);const Ot={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Bt extends J{constructor(){super();const e=Ot;this.uniforms=ue.clone(e.uniforms),this.material=new et({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ge(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===it?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===at?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ze?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ot?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gt{constructor(e){o(this,"scene");o(this,"renderer");o(this,"composer");o(this,"renderPass");o(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new lt,this.scene.background=new te(1710638),this.scene.fog=new ct(1710638,20,60),this.renderer=new dt({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ht,this.renderer.toneMapping=ze,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=ut,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new We(60,t/i,.1,200);this.renderPass=new kt(this.scene,s);const n=new X(new U(t,i),.75,.4,.82),a=new Bt;this.composer=new Dt(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(n),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const d={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class Nt{constructor(){o(this,"camera");o(this,"target",new $(0,0,-1));o(this,"basePosition",new $(0,7,16));o(this,"shakeOffset",new $);o(this,"shakeIntensity",0);o(this,"shakeDecay",0);o(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new We(d.CAMERA_FOV,window.innerWidth/window.innerHeight,d.CAMERA_NEAR,d.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class Ut{constructor(e){o(this,"ambient");o(this,"dirLight");o(this,"fillLight");o(this,"warmPoint");o(this,"coolPoint");this.ambient=new pt(4210784,.6),this.dirLight=new ve(16777215,1.2),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new ve(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new Ce(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new Ce(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint)}}class Ft{constructor(e){o(this,"stars");o(this,"grid");const i=new Float32Array(6e3),s=60;for(let l=0;l<2e3;l++){const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),f=Math.cbrt(Math.random())*s;i[l*3]=f*Math.sin(h)*Math.cos(c),i[l*3+1]=f*Math.sin(h)*Math.sin(c),i[l*3+2]=f*Math.cos(h)}const n=new Fe;n.setAttribute("position",new mt(i,3));const a=new ft({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0});this.stars=new gt(n,a),e.add(this.stars),this.grid=new yt(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class zt{constructor(){o(this,"world");o(this,"_initialized",!1)}async init(){await le.init(),this.world=new le.World({x:0,y:d.GRAVITY,z:0}),this._initialized=!0}get rapier(){return le}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new le.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class Wt{constructor(){o(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),n=t.rotation();i.position.set(s.x,s.y,s.z),i.quaternion.set(n.x,n.y,n.z,n.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class Vt{constructor(){o(this,"handles",new Map);o(this,"dropZoneHandles",new Set);o(this,"eventQueue");o(this,"medalCollectedCallback");o(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e){e.stepWithEvents(this.eventQueue),this.eventQueue.drainCollisionEvents((t,i,s)=>{var c,h;if(!s)return;const n=this.handles.get(t),a=this.handles.get(i);if(n==="drop_zone"&&(a==="medal"||a==="item")||a==="drop_zone"&&(n==="medal"||n==="item")){const f=n==="drop_zone"?i:t,m=n==="drop_zone"?a:n;m==="medal"?(c=this.medalCollectedCallback)==null||c.call(this,f):m==="item"&&((h=this.itemCollectedCallback)==null||h.call(this,f))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class $t{constructor(){o(this,"body");o(this,"time",0);o(this,"zBase");o(this,"initialized",!1);this.zBase=-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicPositionBased().setTranslation(0,d.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/2,d.PUSHER_DEPTH/2);e.createCollider(s,this.body),this.initialized=!0}update(e){this.time+=e;const t=d.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*d.PUSHER_RANGE;if(this.initialized){const n=this.zBase+s;this.body.setNextKinematicTranslation({x:0,y:d.PUSHER_HEIGHT/2,z:n})}return s}get currentZOffset(){const e=d.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*d.PUSHER_RANGE}get restZ(){return this.zBase}}function Qt(r){return[r>>16&255,r>>8&255,r&255]}function Ie(r,e,t,i){return`rgb(${Math.min(255,r+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Re(r,e,t,i){return`rgb(${Math.max(0,r-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function qt(r,e,t){return`rgb(${r},${e},${t})`}class he{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Et(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),n=128/2,a=128/2,l=128/2-1,[c,h,f]=Qt(e),m=qt(c,h,f),S=Ie(c,h,f,65),E=Ie(c,h,f,30),w=Re(c,h,f,55),g=Re(c,h,f,80),p=s.createRadialGradient(n-18,a-18,4,n,a,l);p.addColorStop(0,S),p.addColorStop(.45,E),p.addColorStop(.8,m),p.addColorStop(1,w),s.fillStyle=p,s.beginPath(),s.arc(n,a,l,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=5,s.beginPath(),s.arc(n,a,l-5,0,Math.PI*2),s.stroke();const u=s.createRadialGradient(n,a,0,n,a,38);u.addColorStop(0,E),u.addColorStop(.7,m),u.addColorStop(1,w),s.fillStyle=u,s.beginPath(),s.arc(n,a,38,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=1.5,s.stroke(),s.strokeStyle=S,s.lineWidth=2.5,s.lineCap="round";for(let D=0;D<6;D++){const k=D*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(n+Math.cos(k)*7,a+Math.sin(k)*7),s.lineTo(n+Math.cos(k)*28,a+Math.sin(k)*28),s.stroke()}const M=s.createRadialGradient(n-2,a-2,0,n,a,8);M.addColorStop(0,S),M.addColorStop(1,m),s.fillStyle=M,s.beginPath(),s.arc(n,a,8,0,Math.PI*2),s.fill();const T=s.createRadialGradient(n-26,a-26,0,n-26,a-26,50);return T.addColorStop(0,"rgba(255,255,255,0.5)"),T.addColorStop(.4,"rgba(255,255,255,0.12)"),T.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=T,s.beginPath(),s.arc(n,a,l-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(){return this.get("field",()=>{const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d");i.fillStyle="#2a2a4e",i.fillRect(0,0,256,256);const s=i.getImageData(0,0,256,256),n=s.data;for(let a=0;a<n.length;a+=4){const l=(Math.random()-.5)*18;n[a]=Math.max(0,Math.min(255,n[a]+l)),n[a+1]=Math.max(0,Math.min(255,n[a+1]+l)),n[a+2]=Math.max(0,Math.min(255,n[a+2]+l))}i.putImageData(s,0,0),i.strokeStyle="rgba(100,100,180,0.13)",i.lineWidth=1;for(let a=0;a<=256;a+=32)i.beginPath(),i.moveTo(a,0),i.lineTo(a,256),i.stroke();for(let a=0;a<=256;a+=32)i.beginPath(),i.moveTo(0,a),i.lineTo(256,a),i.stroke();return t})}static getPusherTexture(){return this.get("pusher",()=>{const i=document.createElement("canvas");i.width=256,i.height=128;const s=i.getContext("2d");s.fillStyle="#3a3a6e",s.fillRect(0,0,256,128);for(let l=0;l<128;l++){const c=.015+Math.random()*.055;s.strokeStyle=`rgba(180,180,230,${c})`,s.lineWidth=1,s.beginPath(),s.moveTo(0,l+.5),s.lineTo(256,l+.5),s.stroke()}s.fillStyle="rgba(200,200,255,0.35)";for(let l=24;l<256;l+=48)s.beginPath(),s.arc(l,8,3,0,Math.PI*2),s.fill();const n=s.createLinearGradient(0,0,0,16);n.addColorStop(0,"rgba(220,220,255,0.55)"),n.addColorStop(1,"rgba(220,220,255,0)"),s.fillStyle=n,s.fillRect(0,0,256,16);const a=s.createLinearGradient(0,112,0,128);return a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,20,0.5)"),s.fillStyle=a,s.fillRect(0,112,256,16),i})}static getWallTexture(){return this.get("wall",()=>{const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d");i.fillStyle="#1a1a3e",i.fillRect(0,0,256,256);for(let a=0;a<256;a+=48){const l=i.createLinearGradient(0,a,0,a+6);l.addColorStop(0,"rgba(0,0,0,0.4)"),l.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=l,i.fillRect(0,a,256,6);const c=i.createLinearGradient(0,a-4,0,a);c.addColorStop(0,"rgba(100,100,200,0)"),c.addColorStop(1,"rgba(100,100,200,0.2)"),i.fillStyle=c,i.fillRect(0,a-4,256,4)}const s=i.getImageData(0,0,256,256),n=s.data;for(let a=0;a<n.length;a+=4){const l=(Math.random()-.5)*10;n[a]=Math.max(0,Math.min(255,n[a]+l)),n[a+1]=Math.max(0,Math.min(255,n[a+1]+l)),n[a+2]=Math.max(0,Math.min(255,n[a+2]+l))}return i.putImageData(s,0,0),t})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}o(he,"cache",new Map);const Yt=new Ve(d.MEDAL_RADIUS,d.MEDAL_RADIUS,d.MEDAL_THICKNESS,24),Zt=new Ve(d.MEDAL_RADIUS_LARGE,d.MEDAL_RADIUS_LARGE,d.MEDAL_THICKNESS,24),Kt={normal:16766720,double:13691135,large:15245312},jt={normal:1,double:2,large:1};function Xt(r){const e=r*100;return e<d.MEDAL_PROB_NORMAL?"normal":e<d.MEDAL_PROB_DOUBLE?"double":"large"}function Jt(r){return r==="large"?Zt:Yt}class ye{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Tt({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const n=this.getMaterial(t).clone(),a=new V(e,n);return a.castShadow=i,a.receiveShadow=s,a}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}o(ye,"materialCache",new Map);class es{constructor(){o(this,"medals",new Map);o(this,"pendingRemoval",new Set);o(this,"spawnCounter",0)}spawn(e,t,i,s,n,a,l,c,h){if(this.medals.size>=d.MAX_MEDALS_ON_FIELD)return;const f=s.rapier,m=h??Xt(Math.random()),S=m==="large"?d.MEDAL_RADIUS_LARGE:d.MEDAL_RADIUS,E=jt[m],w=f.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(.5).setAngularDamping(.8),g=s.createRigidBody(w);c&&g.setLinvel(c,!0);const p=f.ColliderDesc.cylinder(d.MEDAL_THICKNESS/2,S).setRestitution(.3).setFriction(.6).setDensity(d.MEDAL_MASS).setActiveEvents(f.ActiveEvents.COLLISION_EVENTS),u=s.createCollider(p,g);a.registerHandle(u.handle,"medal");const M=ye.createMesh(Jt(m),Kt[m],!0,!1);M.position.set(e,t,i),l.add(M),n.register(g,M),this.medals.set(u.handle,{body:g,collider:u,mesh:M,type:m,quotaValue:E}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let n=0;for(const a of this.pendingRemoval){const l=this.medals.get(a);l&&(t.unregister(l.body),i.unregisterHandle(a),s.remove(l.mesh),e.removeRigidBody(l.body),l.mesh.material.dispose(),this.medals.delete(a),n++)}return this.pendingRemoval.clear(),n}cleanupFallen(e,t,i,s,n){let a=0;for(const[l,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),a++);return a}get count(){return this.medals.size}clear(e,t,i,s){for(const[n,a]of this.medals)t.unregister(a.body),i.unregisterHandle(n),s.remove(a.mesh),e.removeRigidBody(a.body),a.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class ts{constructor(){o(this,"body");o(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=i.RigidBodyDesc.fixed().setTranslation(0,-2,d.FIELD_DEPTH/2+1);this.body=e.createRigidBody(s);const n=i.ColliderDesc.cuboid(d.FIELD_WIDTH/2+1,1,2).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(n,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class ss{constructor(){o(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var L=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r.Legendary="Legendary",r))(L||{});const is={[L.Common]:8947848,[L.Rare]:4474111,[L.Epic]:11141375,[L.Legendary]:16746496},ns=new St(.4,0);class as{constructor(e){o(this,"mesh");o(this,"animationOffset");const t=is[e],i=new W({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new V(ns,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Ee{constructor(e=Date.now()){o(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((n,a)=>n+a,0);let s=this.next()*i;for(let n=0;n<e.length;n++)if(s-=t[n],s<=0)return e[n];return e[e.length-1]}}class os{constructor(){o(this,"items",new Map);o(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,n,a){const l=new Ee(a);for(const c of e){const h=l.nextFloat(-3,d.FIELD_WIDTH/2-1),f=l.nextFloat(-12/4,d.FIELD_DEPTH/4);this.spawnSingle(c,h,2,f,t,i,s,n)}}spawnSingle(e,t,i,s,n,a,l,c){const h=n.rapier,f=h.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),m=n.createRigidBody(f),S=h.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(h.ActiveEvents.COLLISION_EVENTS),E=n.createCollider(S,m);l.registerHandle(E.handle,"item");const w=new as(e.rarity);w.setPosition(t,i,s),c.add(w.mesh),a.register(m,w.mesh),this.items.set(E.handle,{body:m,collider:E,mesh:w,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const n of this.pendingRemoval){const a=this.items.get(n);a&&(t.unregister(a.body),i.unregisterHandle(n),s.remove(a.mesh.mesh),e.removeRigidBody(a.body),a.mesh.dispose(),this.items.delete(n))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[n,a]of this.items)t.unregister(a.body),i.unregisterHandle(n),s.remove(a.mesh.mesh),e.removeRigidBody(a.body),a.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const me=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:L.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:L.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:L.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:L.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:L.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:L.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:L.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:L.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:L.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:L.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function se(r){return me.find(e=>e.id===r)}const Pe={[L.Common]:60,[L.Rare]:30,[L.Epic]:8,[L.Legendary]:2};class rs{constructor(e){o(this,"rng");this.rng=new Ee(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),n=me.filter(l=>l.rarity===s);if(n.length===0){t.push(me[0]);continue}const a=Math.floor(this.rng.next()*n.length);t.push(n[a])}return t}pickRarity(){const e=Object.keys(Pe),t=e.map(i=>Pe[i]);return this.rng.weightedPick(e,t)}}function ee(){return new W({color:1184298,roughness:.72,metalness:.42})}function z(){return new W({color:9474232,roughness:.15,metalness:.92})}function N(r,e=1){return new W({color:r,emissive:r,emissiveIntensity:e,roughness:.5,metalness:.3})}function C(r,e,t=!1){const i=new V(r,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}class ls{constructor(){o(this,"group");o(this,"pusherMesh");o(this,"fieldSurface");o(this,"wallMeshes",[]);o(this,"sideGuardMeshes",[]);o(this,"pusherZBase",-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE);this.group=new bt;const e=he.getFieldTexture();e.wrapS=e.wrapT=re,e.repeat.set(d.FIELD_WIDTH/2,d.FIELD_DEPTH/2);const t=new W({map:e,color:16777215,roughness:.92,metalness:0}),i=new x(d.FIELD_WIDTH,d.FIELD_HEIGHT,d.FIELD_DEPTH);this.fieldSurface=new V(i,t),this.fieldSurface.receiveShadow=!0,this.fieldSurface.position.y=-.1/2,this.group.add(this.fieldSurface);const s=he.getPusherTexture();s.wrapS=s.wrapT=re,s.repeat.set(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/1);const n=new W({map:s,color:16777215,roughness:.35,metalness:.65}),a=new x(d.PUSHER_WIDTH,d.PUSHER_HEIGHT,d.PUSHER_DEPTH);this.pusherMesh=new V(a,n),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,d.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh),this.addPusherDetails(),this.createWalls(),this.buildCabinet()}addPusherDetails(){const e=d.PUSHER_WIDTH,t=d.PUSHER_HEIGHT,i=d.PUSHER_DEPTH,s=C(new x(e+.06,.14,.14),z());s.position.set(0,-t/2+.07,i/2),this.pusherMesh.add(s);const n=C(new x(e,.07,i),z());n.position.set(0,t/2+.035,0),this.pusherMesh.add(n);const a=C(new x(e-.2,.06,.06),N(65484,1.2));a.position.set(0,t/2+.06,i/2-.05),this.pusherMesh.add(a);for(const l of[-1,1]){const c=C(new x(.1,t,.1),z());c.position.set(l*(e/2-.05),0,i/2),this.pusherMesh.add(c)}}createWalls(){const i=he.getWallTexture();i.wrapS=i.wrapT=re;const s=()=>{const u=i.clone();return u.wrapS=u.wrapT=re,u.needsUpdate=!0,new W({map:u,color:16777215,roughness:.8,metalness:.15})},n=d.OPEN_ZONE_START- -12/2,a=-12/2+n/2,l=s();l.map.repeat.set(n/2,3.5/2);const c=new x(.3,3.5,n),h=new V(c,l);h.position.set(-8/2-.3/2,3.5/2,a),this.group.add(h),this.wallMeshes.push(h);const f=s();f.map.repeat.set(n/2,3.5/2);const m=new x(.3,3.5,n),S=new V(m,f);S.position.set(d.FIELD_WIDTH/2+.3/2,3.5/2,a),this.group.add(S),this.wallMeshes.push(S);const E=s(),w=d.FIELD_WIDTH+.3*2;E.map.repeat.set(w/2,3.5/2);const g=new x(w,3.5,.3),p=new V(g,E);p.position.set(0,3.5/2,-12/2-.3/2),this.group.add(p),this.wallMeshes.push(p)}buildCabinet(){const e=d.FIELD_WIDTH,t=d.FIELD_DEPTH,i=-t/2,s=t/2,n=C(new x(12,1,17),ee(),!0);n.position.set(0,-.52,-.5),this.group.add(n);const a=C(new x(12,.1,.1),z());a.position.set(0,0,s+2.55),this.group.add(a);const l=1.1,c=7.2,h=13.5,f=e/2+.75,m=-.25;for(const _ of[-1,1]){const I=C(new x(l,c,h),ee(),!0);I.position.set(_*f,c/2-.5,m),this.group.add(I);const K=C(new x(l+.08,.14,h+.08),z());K.position.set(_*f,c-.5+.07,m),this.group.add(K);const Se=C(new x(l+.08,.1,h+.08),z());Se.position.set(_*f,-.02,m),this.group.add(Se);const be=C(new x(.06,c*.75,h*.7),new W({color:657950,roughness:.9,metalness:.1}));be.position.set(_*(f-(l/2+.01)),c/2-.5,m),this.group.add(be);const we=C(new x(.055,c*.8,.055),N(16766720,1.1));we.position.set(_*(f-l/2-.05),c/2-.5,m),this.group.add(we);const Me=C(new x(.05,c*.6,.05),N(43775,.9));Me.position.set(_*(f-l/2-.05),c/2-.5,s+.3),this.group.add(Me)}const S=10.5,E=1.3,w=i-1.15,g=C(new x(12,S,E),ee(),!0);g.position.set(0,S/2-.5,w),this.group.add(g);const p=C(new x(12.1,.15,E+.1),z());p.position.set(0,S-.5+.07,w),this.group.add(p);const u=3.8,M=9.8,T=new W({color:2080,emissive:4160,emissiveIntensity:.9,roughness:.3,metalness:.5}),D=C(new x(M,u,.08),T);D.position.set(0,S-.5-u/2-.3,w+E/2+.04),this.group.add(D);const k=C(new x(M+.24,u+.24,.06),z());k.position.set(0,S-.5-u/2-.3,w+E/2),this.group.add(k);const O=S-.5-u/2-.3,H=[22015,43775,22015,43775];for(let _=0;_<4;_++){const I=C(new x(M-.4,.05,.07),N(H[_],.8));I.position.set(0,O-u/2+.5+_*.75,w+E/2+.06),this.group.add(I)}const G=C(new x(12,.07,.07),N(52479,1.2));G.position.set(0,S-.5+.18,w+E/2),this.group.add(G);const ie=C(new x(12,.07,.07),N(16755200,.9));ie.position.set(0,3.7,w+E/2),this.group.add(ie);const q=C(new x(12,1.1,4.5),ee(),!0);q.position.set(0,-.56,s+2.25),this.group.add(q);const ne=C(new x(12,.12,.12),z());ne.position.set(0,0,s+4.45),this.group.add(ne);const ae=C(new x(12,.06,.06),N(65450,1));ae.position.set(0,.06,s+4.5),this.group.add(ae);const oe=C(new x(12,.5,h),ee(),!0);oe.position.set(0,6.7,m),this.group.add(oe);const Q=C(new x(12,.07,.07),N(16766720,1));Q.position.set(0,6.96,s+.1),this.group.add(Q);for(const _ of[-1,1]){const I=C(new x(.09,.09,t+.5),z());I.position.set(_*(e/2+.04),.05,m),this.group.add(I)}const Y=C(new x(e+.2,3.6,.18),new W({color:1973818,roughness:.65,metalness:.5}));Y.position.set(0,1.8,i-.08),this.group.add(Y);const b=C(new x(e-.2,.06,.06),N(65450,1));b.position.set(0,3.65,i+.01),this.group.add(b);const P=C(new x(e+.1,.06,.06),N(65450,1));P.position.set(0,.06,s),this.group.add(P);const F=d.OPEN_ZONE_START-i,Z=i+F/2;for(const _ of[-1,1]){const I=C(new x(.055,3.4,.055),N(4482815,.9));I.position.set(_*(e/2),1.7,Z),this.group.add(I)}}addSideGuardMeshes(e){const s=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,n=d.OPEN_ZONE_START+s/2;for(const a of[-1,1]){const l=a*(d.FIELD_WIDTH/2+.1),c=new x(.2,2,s),h=ye.createMesh(c,4500223,!1,!1);h.position.set(l,2/2,n),e.add(h),this.sideGuardMeshes.push(h)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class cs{constructor(e,t,i){o(this,"physicsWorld");o(this,"physicsSync");o(this,"collisionHandler");o(this,"pusher");o(this,"medalSpawner");o(this,"itemSpawner");o(this,"dropZone");o(this,"gimmickManager");o(this,"fieldMesh");o(this,"time",0);o(this,"getMedalQuotaMultiplier",()=>1);o(this,"sideGuardActive",!1);o(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new zt,this.physicsSync=new Wt,this.collisionHandler=new Vt,this.pusher=new $t,this.medalSpawner=new es,this.itemSpawner=new os,this.dropZone=new ts,this.gimmickManager=new ss,this.fieldMesh=new ls}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),v.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=se(t);s&&(this.quotaManager.addItem(s.quotaValue),v.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(d.FIELD_WIDTH/2,.05,d.FIELD_DEPTH/2).setFriction(.6).setRestitution(.2);this.physicsWorld.createCollider(s,i);const n=3.5,a=.2,l=d.OPEN_ZONE_START- -12/2,c=-12/2+l/2,h=e.RigidBodyDesc.fixed().setTranslation(-8/2-a/2,n/2,c),f=this.physicsWorld.createRigidBody(h);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(a/2,n/2,l/2),f);const m=e.RigidBodyDesc.fixed().setTranslation(d.FIELD_WIDTH/2+a/2,n/2,c),S=this.physicsWorld.createRigidBody(m);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(a/2,n/2,l/2),S);const E=e.RigidBodyDesc.fixed().setTranslation(0,n/2,-12/2-a/2),w=this.physicsWorld.createRigidBody(E);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(d.FIELD_WIDTH/2+a,n/2,a/2),w)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new rs(e*1e3+t).pickRandom(d.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+d.PUSHER_DEPTH-d.PUSHER_RANGE,t=d.FIELD_DEPTH/2-d.MEDAL_RADIUS,i=d.FIELD_WIDTH/2-d.MEDAL_RADIUS;for(let a=0;a<d.INITIAL_FIELD_MEDALS;a++){const l=(Math.random()*2-1)*i,c=e+Math.random()*(t-e),h=d.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+d.MEDAL_RADIUS,n=e-d.MEDAL_RADIUS;for(let a=0;a<d.INITIAL_PUSHER_MEDALS;a++){const l=(Math.random()*2-1)*i,c=s+Math.random()*(n-s),h=d.PUSHER_HEIGHT+.5+Math.random()*1.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=d.FIELD_DEPTH/2-.5,s=1.5,a=-(11+(-t+1)/2*8);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:5,z:a})}update(e){this.time+=e,this.collisionHandler.processEvents(this.physicsWorld),this.medalSpawner.cleanupFallen(d.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,n=d.OPEN_ZONE_START+s/2;for(const a of[-1,1]){const l=a*(d.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(l,t/2,n),h=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),h),this.sideGuardBodies.push(h)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class ds{constructor(){o(this,"current",0);o(this,"target",0);o(this,"phase",1);o(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),v.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),v.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*d.STAGES_PER_PHASE+t;return Math.ceil(d.BASE_QUOTA*Math.pow(d.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,v.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&v.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,v.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&v.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class hs{constructor(e){o(this,"phase",1);o(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===d.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(y.PLAYING)}clearCurrentStage(){v.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(y.STAGE_CLEAR),this.stage===d.STAGES_PER_PHASE&&v.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<d.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(y.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function us(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class ps{constructor(){o(this,"items",[])}addItem(e){const t={instanceId:us(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return se(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=se(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class ms{constructor(){o(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});v.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),v.on("item:collected",()=>{this.data.totalItemsCollected++}),v.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class fs{calculate(e,t){const i=t.bestPhase*3+t.bestStage,n=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:n,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var R=(r=>(r.Gold="Gold",r.Alchemy="Alchemy",r.Throw="Throw",r.Guard="Guard",r))(R||{}),A=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r))(A||{});const Qe=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:R.Gold,rarity:A.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:R.Gold,rarity:A.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:R.Gold,rarity:A.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:R.Gold,rarity:A.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:R.Gold,rarity:A.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:R.Alchemy,rarity:A.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:R.Alchemy,rarity:A.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:R.Alchemy,rarity:A.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:R.Alchemy,rarity:A.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:R.Alchemy,rarity:A.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:R.Throw,rarity:A.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:R.Throw,rarity:A.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:R.Throw,rarity:A.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:R.Throw,rarity:A.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:R.Throw,rarity:A.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:R.Guard,rarity:A.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:R.Guard,rarity:A.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:R.Guard,rarity:A.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:R.Guard,rarity:A.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:R.Guard,rarity:A.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Le(r){return Qe.find(e=>e.id===r)}class gs{constructor(){o(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),v.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Le(i.definitionId);if(s)for(const n of s.effects)n.type===e&&(t*=n.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Le(i.definitionId);if(s)for(const n of s.effects)n.type===e&&(t+=n.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const De={[A.Common]:60,[A.Rare]:30,[A.Epic]:10};class ys{pickChoices(e,t,i){const s=new Ee(i),n=new Set(t.map(h=>h.definitionId)),a=Qe.filter(h=>!n.has(h.id));if(a.length===0)return[];const l=[],c=new Set;for(let h=0;h<e&&l.length<a.length;h++){const f=Object.keys(De),m=f.map(g=>De[g]),S=s.weightedPick(f,m),E=a.filter(g=>g.rarity===S&&!c.has(g.id));if(E.length===0){const g=a.filter(u=>!c.has(u.id));if(g.length===0)break;const p=g[Math.floor(s.next()*g.length)];l.push(p),c.add(p.id);continue}const w=E[Math.floor(s.next()*E.length)];l.push(w),c.add(w.id)}return l}}const Te=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function ke(r){return Te.find(e=>e.id===r)}class Es{constructor(){o(this,"shopMoney");o(this,"medals");o(this,"sellMultiplier",1);o(this,"ownedActiveItems",new Map);this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*d.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=Te.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let He=!1;function Ts(){if(He)return;He=!0;const r=document.createElement("style");r.textContent=`
    @keyframes titlePulse {
      0%, 100% { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd70066; }
      50% { text-shadow: 0 0 35px #ffd700, 0 0 70px #ffd70099, 0 0 100px #ffd70033; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `,document.head.appendChild(r)}class Ss{constructor(e){o(this,"el");o(this,"onStartCallbacks",[]);o(this,"hideTimer",null);Ts(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 10, 30, 0.72);
      pointer-events: all;
      opacity: 0;
      transition: opacity 280ms ease;
    `;const t=document.createElement("h1");t.style.cssText=`
      font-size: 4rem;
      color: #ffd700;
      letter-spacing: 0.3em;
      margin-bottom: 0.5rem;
      animation: titlePulse 3s ease-in-out infinite;
    `,t.textContent="YukiMedal";const i=document.createElement("p");i.style.cssText=`
      font-size: 1rem;
      color: #6666aa;
      margin-bottom: 3rem;
      letter-spacing: 0.1em;
    `,i.textContent="Roguelike Medal Pusher";const s=document.createElement("button");s.style.cssText=`
      font-size: 1.3rem;
      padding: 14px 48px;
      background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent);
      background-size: 200% auto;
      border: 2px solid #ffd700;
      color: #ffd700;
      cursor: pointer;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      transition: all 0.2s;
      border-radius: 4px;
      animation: shimmer 2.5s linear infinite;
    `,s.textContent="START",s.addEventListener("mouseenter",()=>{s.style.background="#ffd70033",s.style.backgroundSize="200% auto"}),s.addEventListener("mouseleave",()=>{s.style.background="linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",s.style.backgroundSize="200% auto"}),s.addEventListener("click",()=>{this.onStartCallbacks.forEach(a=>a())});const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.65rem;
      color: #444466;
      letter-spacing: 0.05em;
    `,n.textContent="v0.1.0",this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(n),e.appendChild(this.el)}onStart(e){this.onStartCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class bs{constructor(e){o(this,"el");o(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: 1.2rem;
      color: #ffd700;
      text-shadow: 0 0 8px #ffd700aa;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.13);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      transition: transform 0.25s ease, color 0.25s ease;
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="#ffd700",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Oe=!1;function ws(){if(Oe)return;Oe=!0;const r=document.createElement("style");r.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(r)}class Ms{constructor(e){o(this,"container");o(this,"bar");o(this,"label");o(this,"reached",!1);ws(),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.13);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
    `,this.label=document.createElement("div"),this.label.style.cssText="font-size: 0.8rem; color: #aaaacc; margin-bottom: 6px;",this.label.textContent="QUOTA: 0 / 30";const t=document.createElement("div");t.style.cssText=`
      width: 100%;
      height: 12px;
      background: #333355;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    `,this.bar=document.createElement("div"),this.bar.style.cssText=`
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #4444ff, #00ffaa);
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
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, #00ff88, #ffd700)",this.bar.style.boxShadow="0 0 14px #00ff88aa",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, #4444ff, #00ffaa)",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class xs{constructor(e){o(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 0.9rem;
      color: #aaaacc;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(12px);
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.13);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: right;
    `,e.appendChild(this.el)}update(e,t){this.el.innerHTML=`Phase <span style="color:#ffd700;font-weight:bold">${e}</span><br>Stage ${t} / 3`}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Be=!1;function vs(){if(Be)return;Be=!0;const r=document.createElement("style");r.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
  `,document.head.appendChild(r)}class Cs{constructor(e){o(this,"el");o(this,"medalCounter");o(this,"quotaBar");o(this,"phaseIndicator");o(this,"throwHint");o(this,"inventoryPanel");o(this,"activeItemPanel");o(this,"countdownEl");o(this,"onUseActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new bs(this.el),this.quotaBar=new Ms(this.el),this.phaseIndicator=new xs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.85rem;
      color: #666688;
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
    `,this.el.appendChild(this.countdownEl),e.appendChild(this.el),vs()}update(e,t,i,s,n){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,n)}showFloatingText(e,t="#ffd700"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const n=document.createElement("div");n.style.cssText=`
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
    `,n.textContent=e,this.el.appendChild(n),setTimeout(()=>{n.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>n.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=se(i.definitionId);if(!s)continue;const n=document.createElement("div");n.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid #333355;
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: #ffffff;
      `,n.textContent=s.name,this.inventoryPanel.appendChild(n)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),n=i.remainingMs??0,a=n>0,l=a?` (${Math.ceil(n/1e3)}s)`:"";s.style.cssText=`
        display: block;
        width: 100%;
        margin-bottom: 6px;
        padding: 6px 10px;
        background: ${a?`${i.color}33`:"rgba(0,0,0,0.6)"};
        border: 2px solid ${i.color};
        color: ${i.color};
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 6px;
        text-align: left;
        pointer-events: all;
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${l}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Ge=!1;function _s(){if(Ge)return;Ge=!0;const r=document.createElement("style");r.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class As{constructor(e){o(this,"el");o(this,"onContinueCallbacks",[]);o(this,"onSkipCallbacks",[]);o(this,"titleEl");o(this,"infoEl");o(this,"continueBtn");o(this,"shopBtn");o(this,"hideTimer",null);_s(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 10, 30, 0.85);
      pointer-events: all;
      gap: 16px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h2"),this.titleEl.style.cssText="font-size: 2rem; color: #00ff88; margin-bottom: 8px;",this.infoEl=document.createElement("p"),this.infoEl.style.cssText="color: #aaaacc; font-size: 0.9rem;";const t=document.createElement("div");t.style.cssText="display: flex; gap: 16px; margin-top: 16px;",this.continueBtn=this.createButton("NEXT STAGE →","#4444ff",()=>{this.onContinueCallbacks.forEach(i=>i())}),this.shopBtn=this.createButton("GO TO SHOP (next phase)","#ff8800",()=>{this.onSkipCallbacks.forEach(i=>i())}),t.appendChild(this.continueBtn),t.appendChild(this.shopBtn),this.el.appendChild(this.titleEl),this.el.appendChild(this.infoEl),this.el.appendChild(t),e.appendChild(this.el)}createButton(e,t,i){const s=document.createElement("button");return s.style.cssText=`
      font-size: 1rem;
      padding: 12px 32px;
      background: transparent;
      border: 2px solid ${t};
      color: ${t};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,n){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="#ffd700",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="#00ff88",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${n}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Ne=!1;function Is(){if(Ne)return;Ne=!0;const r=document.createElement("style");r.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class Rs{constructor(e){o(this,"el");o(this,"onRetryCallbacks",[]);o(this,"hideTimer",null);Is(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 5, 20, 0.92);
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
        color: #ffd700;
        margin-bottom: 8px;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: 0.1s;
        opacity: 0;
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],n=document.createElement("div");n.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((l,c)=>{const h=document.createElement("div");h.style.cssText=`
        color: #aaaacc;
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,h.textContent=l,n.appendChild(h)});const a=document.createElement("button");a.style.cssText=`
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
    `,a.textContent="TRY AGAIN",a.addEventListener("mouseenter",()=>a.style.background="#ff444422"),a.addEventListener("mouseleave",()=>a.style.background="transparent"),a.addEventListener("click",()=>this.onRetryCallbacks.forEach(l=>l())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(n),this.el.appendChild(a),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const Ps=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Ls{constructor(e){o(this,"el");o(this,"onSelectCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 10, 30, 0.9);
      pointer-events: all;
      gap: 24px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText="font-size: 1.8rem; color: #aa44ff; margin-bottom: 8px;",t.textContent="CHOOSE A SKILL";const i=document.createElement("p");i.style.cssText="color: #666688; font-size: 0.85rem; margin-bottom: 16px;",i.textContent="Select one permanent skill";const s=document.createElement("div");s.style.cssText="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;";for(const n of e)s.appendChild(this.createCard(n));this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e){const i={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"}[e.tag]??"#aaaacc",s=document.createElement("div");s.style.cssText=`
      width: 200px;
      padding: 20px;
      ${Ps}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const n=document.createElement("div");n.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,n.textContent=`[${e.tag}] · ${e.rarity}`;const a=document.createElement("div");a.style.cssText="font-size: 1rem; color: #ffffff; font-weight: bold; margin-bottom: 8px;",a.textContent=e.name;const l=document.createElement("div");return l.style.cssText="font-size: 0.8rem; color: #aaaacc; line-height: 1.4;",l.textContent=e.description,s.appendChild(n),s.appendChild(a),s.appendChild(l),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const Ue=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Ds{constructor(e){o(this,"el");o(this,"moneyEl");o(this,"inventoryEl");o(this,"onBuyMedalsCallbacks",[]);o(this,"onSellCallbacks",[]);o(this,"onContinueCallbacks",[]);o(this,"onBuyActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      background: rgba(10, 10, 30, 0.92);
      pointer-events: all;
      padding: 32px;
      overflow-y: auto;
      font-size: 0.9rem;
      opacity: 0;
      transition: opacity 280ms ease;
    `;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;";const i=document.createElement("h2");i.style.cssText="font-size: 1.8rem; color: #ffd700;",i.textContent="SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="color: #ffd700; font-size: 1.1rem;";const s=document.createElement("button");s.style.cssText=`
      padding: 10px 28px;
      background: transparent;
      border: 2px solid #00ff88;
      color: #00ff88;
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="#00ff8822"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(n=>n())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const n=document.createElement("h3");n.style.cssText="color: #ffd700; margin-bottom: 12px; border-bottom: 1px solid rgba(255,215,0,0.15); padding-bottom: 8px;",n.textContent="BUY MEDALS",s.appendChild(n);const a=document.createElement("div");a.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const l=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const p of l){const u=e>=p.price,M=document.createElement("button");M.style.cssText=`
        padding: 12px 18px;
        background: transparent;
        border: 2px solid ${u?"#ffd700":"#555"};
        color: ${u?"#ffd700":"#555"};
        cursor: ${u?"pointer":"default"};
        font-size: 0.85rem;
        border-radius: 6px;
        transition: background 0.2s, transform 0.15s;
        min-width: 120px;
        text-align: center;
      `,M.innerHTML=`<strong>${p.label}</strong><br>${p.price} G`,u&&(M.addEventListener("mouseenter",()=>{M.style.background="#ffd70022",M.style.transform="translateY(-2px)"}),M.addEventListener("mouseleave",()=>{M.style.background="transparent",M.style.transform="translateY(0)"}),M.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(T=>T(p.count))})),a.appendChild(M)}s.appendChild(a),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border-color: rgba(255,215,0,0.15); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const h=document.createElement("div");h.style.cssText="margin-bottom: 28px;";const f=document.createElement("h3");f.style.cssText="color: #44aaff; margin-bottom: 12px; border-bottom: 1px solid rgba(68,170,255,0.15); padding-bottom: 8px;",f.textContent="ACTIVE ITEMS (buy to use during game)",h.appendChild(f);const m=document.createElement("div");m.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const S=new Map(i.map(p=>[p.id,p.count]));for(const p of Te){const u=e>=p.price,M=S.get(p.id)??0,T=document.createElement("div");T.style.cssText=`
        padding: 14px;
        ${Ue}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${u?p.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const D=document.createElement("div");D.style.cssText=`color: ${p.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,D.textContent=p.name;const k=document.createElement("div");k.style.cssText="color: #aaa; font-size: 0.75rem; margin-bottom: 8px;",k.textContent=p.description;const O=document.createElement("div");O.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",O.textContent=`Owned: ${M}`;const H=document.createElement("button");H.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${u?p.color:"#555"};
        color: ${u?p.color:"#555"};
        cursor: ${u?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,H.textContent=`Buy ${p.price} G`,u&&(H.addEventListener("mouseenter",()=>H.style.background=`${p.color}22`),H.addEventListener("mouseleave",()=>H.style.background="transparent"),T.addEventListener("mouseenter",()=>{T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.transform="translateY(0)",T.style.boxShadow=""}),H.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(G=>G(p.id))})),T.appendChild(D),T.appendChild(k),T.appendChild(O),T.appendChild(H),m.appendChild(T)}h.appendChild(m),this.inventoryEl.appendChild(h);const E=document.createElement("hr");E.style.cssText="border-color: rgba(255,255,255,0.1); margin: 8px 0 20px;",this.inventoryEl.appendChild(E);const w=document.createElement("div"),g=document.createElement("h3");if(g.style.cssText="color: #aaaacc; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;",g.textContent="YOUR ITEMS (click to sell)",w.appendChild(g),t.length===0){const p=document.createElement("p");p.style.cssText="color: #555577;",p.textContent="No items collected yet.",w.appendChild(p)}else{const p=document.createElement("div");p.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const u of t){const M=se(u.definitionId);if(!M)continue;const T=document.createElement("div");T.style.cssText=`
          width: 160px;
          padding: 14px;
          ${Ue}
          background: rgba(0,0,0,0.5);
          border: 1px solid #333355;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,T.innerHTML=`
          <div style="color:#ffffff;font-size:0.9rem;margin-bottom:4px;">${M.name}</div>
          <div style="color:#888;font-size:0.75rem;">${M.rarity}</div>
          <div style="color:#ffd700;font-size:0.85rem;margin-top:8px;">Sell: ${M.sellPrice} G</div>
        `,T.addEventListener("mouseenter",()=>{T.style.borderColor="#ffd700",T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.borderColor="#333355",T.style.transform="translateY(0)",T.style.boxShadow=""}),T.addEventListener("click",()=>{this.onSellCallbacks.forEach(D=>D(u.instanceId))}),p.appendChild(T)}w.appendChild(p)}this.inventoryEl.appendChild(w)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}class ks{constructor(e){o(this,"titleScreen");o(this,"gameScreen");o(this,"stageResultScreen");o(this,"resultScreen");o(this,"skillSelectScreen");o(this,"shopScreen");this.titleScreen=new Ss(e),this.gameScreen=new Cs(e),this.stageResultScreen=new As(e),this.resultScreen=new Rs(e),this.skillSelectScreen=new Ls(e),this.shopScreen=new Ds(e),v.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case y.TITLE:this.titleScreen.show();break;case y.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case y.STAGE_CLEAR:break;case y.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,n,a,l){this.gameScreen.update(e,t,i,s,n),a&&this.gameScreen.updateInventory(a),l&&this.gameScreen.updateActiveItems(l)}}class Hs{constructor(e){o(this,"throwCallbacks",[]);o(this,"enabled",!1);o(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(s=>s(t,i))});o(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(n=>n(i,s))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const B=class B{constructor(){o(this,"ctx",null);o(this,"masterGain",null);o(this,"bgmPlaying",!1);o(this,"bgmNextTime",0);o(this,"bgmSchedulerTimer",null);o(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getMaster(){return this.getCtx(),this.masterGain}playThrow(){const e=this.getCtx(),t=this.getMaster(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),n=s.getChannelData(0);for(let h=0;h<i;h++)n[h]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=s;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),l.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),a.connect(l),l.connect(c),c.connect(t),a.start(),a.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getMaster(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getMaster();[523.25,659.25,783.99,1046.5].forEach((s,n)=>{this._playNote(e,t,"sine",s,e.currentTime+n*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getMaster();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,n,a])=>{this._playNote(e,t,"square",s,e.currentTime+n,a,.2)})}playGameOver(){const e=this.getCtx(),t=this.getMaster();[440,349.23,293.66,220].forEach((s,n)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+n*.22,.3,.18)})}playSkillSelected(){const e=this.getCtx(),t=this.getMaster();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getMaster(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),n=s.getChannelData(0);for(let c=0;c<i;c++)n[c]=(Math.random()*2-1)*(1-c/i);const a=e.createBufferSource();a.buffer=s;const l=e.createGain();l.gain.value=.35,a.connect(l),l.connect(t),a.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getMaster(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=B.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,n=B.BASS_FREQS,a=Math.floor(s/2)%n.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",n[a],i,B.BEAT*1.8,.12);const l=B.MELODY;let c=s%8,h=0;for(const[g,p]of l){if(c>=h&&c<h+p){g>0&&this._scheduleNote(e,t,"square",g,i,B.BEAT*p*.85,.1);break}h+=p}const f=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),m=f.getChannelData(0);for(let g=0;g<m.length;g++)m[g]=(Math.random()*2-1)*(1-g/m.length);const S=e.createBufferSource();S.buffer=f;const E=e.createBiquadFilter();E.type="highpass",E.frequency.value=8e3;const w=e.createGain();w.gain.value=.04,S.connect(E),E.connect(w),w.connect(t),S.start(i)}_playNote(e,t,i,s,n,a,l){const c=e.createOscillator();c.type=i,c.frequency.value=s;const h=e.createGain();h.gain.setValueAtTime(l,n),h.gain.exponentialRampToValueAtTime(.001,n+a),c.connect(h),h.connect(t),c.start(n),c.stop(n+a)}_scheduleNote(e,t,i,s,n,a,l){this._playNote(e,t,i,s,n,a,l)}};o(B,"BPM",110),o(B,"BEAT",60/B.BPM),o(B,"BASS_FREQS",[110,98,82.41,110]),o(B,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let fe=B;async function Os(){const r=new xt,e=new vt,t=new _t,i=new ms,s=new fs,n=document.getElementById("app"),a=document.getElementById("ui-root"),l=new Gt(n),c=new Nt;new Ut(l);const h=new Ft(l.scene);l.setCamera(c.camera);const f=new ds,m=new hs(r),S=new ps,E=new gs,w=new ys,g=new Es,p=new cs(l,f,S);p.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier);const u=new ks(a),M=new Hs(l.renderer.domElement),T=new fe;let D=0,k=!1,O=0,H=0,G=0;u.titleScreen.onStart(()=>{ie()}),u.stageResultScreen.onContinue(()=>{u.stageResultScreen.hide(),m.advanceStage(),q()}),u.stageResultScreen.onSkip(()=>{u.stageResultScreen.hide(),m.advancePhase(),ne()}),u.shopScreen.onBuyMedals(b=>{const P=b*d.MEDAL_BUY_PRICE;g.buyMedals(b)?u.shopScreen.show(g.money,S.getAll(),g.getOwnedActiveItems()):console.log(`Not enough shop money (need ${P} G, have ${g.money} G)`)}),u.shopScreen.onSell(b=>{const P=g.sellItem(b,S);i.addShopMoney(P),u.shopScreen.show(g.money,S.getAll(),g.getOwnedActiveItems())}),u.shopScreen.onBuyActive(b=>{g.buyActiveItem(b)&&u.shopScreen.show(g.money,S.getAll(),g.getOwnedActiveItems())}),u.shopScreen.onContinue(()=>{u.shopScreen.hide(),ae()}),u.skillSelectScreen.onSelect(b=>{E.addSkill(b,m.currentPhase),g.setSellMultiplier(E.itemSellMultiplier),u.skillSelectScreen.hide(),r.transition(y.STAGE_START),q()}),u.resultScreen.onRetry(()=>{u.resultScreen.hide(),r.transition(y.TITLE),u.titleScreen.show()}),u.gameScreen.onUseActive(b=>{if(!r.is(y.PLAYING)||!g.useActiveItem(b))return;const P=ke(b);if(!P)return;const F=Date.now()+P.durationMs;b==="side_guard"?(G=F,p.addSideGuardWalls(),p.fieldMesh.addSideGuardMeshes(p.fieldMesh.group)):b==="medal_fever"&&(H=F)}),M.onThrow((b,P)=>{if(!r.is(y.PLAYING))return;const F=b*(d.FIELD_WIDTH/2-.5),Z=E.medalThrowCount;let _=0;for(let I=0;I<Z&&g.spendMedal();I++){const K=(I-Math.floor(Z/2))*.6;p.throwMedal(F+K,P),_++}_>0&&v.emit("medal:thrown",{count:_})}),v.on("quota:reached",()=>{r.is(y.PLAYING)&&(M.disable(),setTimeout(()=>{const b=E.onClearBonusMedals;b>0&&g.addMedals(b),m.clearCurrentStage();const P=m.isLastStageOfPhase;u.stageResultScreen.show(m.currentPhase,m.currentStage,P,f.currentValue,f.targetValue)},500))}),v.on("medal:collected",({count:b})=>{r.is(y.PLAYING)&&u.gameScreen.showFloatingText(`+${b}`)}),v.on("medal:thrown",()=>T.playThrow()),v.on("medal:collected",()=>T.playMedalCollected()),v.on("quota:reached",()=>T.playQuotaReached()),v.on("stage:cleared",()=>T.playStageCleared()),v.on("game:over",()=>T.playGameOver()),v.on("skill:selected",()=>T.playSkillSelected()),v.on("medal:collected",()=>c.shake(.04,.08)),v.on("quota:reached",()=>c.shake(.15,.3)),v.on("stage:cleared",()=>c.shake(.28,.5)),v.on("game:over",()=>c.shake(.5,.8)),v.on("state:changed",({to:b})=>{b===y.PLAYING?T.startBGM():T.stopBGM()}),e.addUpdateFn(b=>{if(r.is(y.PLAYING)){const P=Date.now();G>0&&P>G&&(G=0,p.removeSideGuardWalls(),p.fieldMesh.removeSideGuardMeshes(p.fieldMesh.group)),H>0&&P>H&&(H=0);const F=H>Date.now()?2:1;p.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier*F),p.update(b);const Z=g.getOwnedActiveItems().map(_=>{const I=ke(_.id),K=_.id==="side_guard"?Math.max(0,G-Date.now()):_.id==="medal_fever"?Math.max(0,H-Date.now()):0;return{..._,name:I.name,color:I.color,remainingMs:K}});if(u.updateGameHUD(g.currentMedals,f.currentValue,f.targetValue,m.currentPhase,m.currentStage,S.getAll(),Z),!k&&g.currentMedals<=0&&!f.isReached&&(k=!0,O=10,M.disable()),k&&O>0){const _=Math.ceil(O);O-=b;const I=Math.ceil(O);I!==_&&I>0&&T.playCountdownTick(),O>0?u.gameScreen.showCountdown(O):(u.gameScreen.hideCountdown(),oe())}}h.update(b),c.update(b),l.render(c.camera)});function ie(){t.incrementRuns(),g.reset(),S.clear(),E.reset(),i.reset(),m.reset(),D=0,k=!1,O=0,H=0,G=0,r.transition(y.STAGE_START),q()}async function q(){const b=m.currentPhase,P=m.currentStage;k=!1,O=0,u.gameScreen.hideCountdown(),f.startStage(b,P);try{p.physicsWorld.initialized?p.endStage():(Y(!0),await p.init(),Y(!1))}catch(F){console.error("Field init failed:",F),Y(!1);return}p.startStage(b,P),m.startCurrentStage(),M.enable()}function ne(){p.endStage(),r.transition(y.SHOP),u.shopScreen.show(g.money,S.getAll(),g.getOwnedActiveItems())}function ae(){r.transition(y.SKILL_SELECT);const b=w.pickChoices(d.SKILL_CHOICES,E.getOwnedSkills(),Date.now());u.skillSelectScreen.show(b)}function oe(){if(D>0){D--,O=0,u.gameScreen.hideCountdown(),M.enable(),k=!1;return}p.endStage();const b=s.calculate(i.snapshot,t);t.updateBest(b.phase,b.stage),r.transition(y.GAME_OVER),r.transition(y.RESULT),u.resultScreen.show(b)}const Q=document.createElement("div");Q.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: rgba(10,10,30,0.8); color: #ffd700;
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,Q.textContent="LOADING...",a.appendChild(Q);function Y(b){Q.style.display=b?"flex":"none"}v.on("skill:selected",()=>{D=Math.max(D,E.gameOverShields)}),e.start(),r.transition(y.TITLE),u.titleScreen.show(),console.log("YukiMedal initialized")}Os().catch(console.error);
