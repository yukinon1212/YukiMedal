var Ze=Object.defineProperty;var Ke=(r,e,t)=>e in r?Ze(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>Ke(r,typeof e!="symbol"?e+"":e,t);import{M as Q,O as je,B as We,F as Ce,S as X,U as pe,V,W as de,H as he,N as Xe,C as Je,a as se,b as q,A as et,c as tt,R as st,d as it,e as nt,L as at,f as ot,g as rt,h as Ve,i as lt,j as ct,k as dt,l as ht,m as ut,P as pt,n as mt,o as $e,p as ft,D as _e,q as Ae,r as gt,s as yt,t as Et,G as Tt,u as St,v as Qe,w as bt,I as wt,x as W,y as Mt,z as le,E as M}from"./three-CMChFoeq.js";import{O as ce}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var y=(r=>(r.INIT="INIT",r.TITLE="TITLE",r.STAGE_START="STAGE_START",r.PLAYING="PLAYING",r.STAGE_CLEAR="STAGE_CLEAR",r.SKIP_PROMPT="SKIP_PROMPT",r.GAME_OVER="GAME_OVER",r.SHOP="SHOP",r.SKILL_SELECT="SKILL_SELECT",r.RESULT="RESULT",r))(y||{});class xt{constructor(){o(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const s=this.listeners.get(e);return s.add(t),()=>s.delete(t)}once(e,t){const s=this.on(e,i=>{t(i),s()})}emit(e,t){const s=this.listeners.get(e);if(s)for(const i of s)i(t)}off(e,t){var s;(s=this.listeners.get(e))==null||s.delete(t)}clear(){this.listeners.clear()}}const C=new xt,vt=[{from:y.INIT,to:y.TITLE},{from:y.TITLE,to:y.STAGE_START},{from:y.STAGE_START,to:y.PLAYING},{from:y.PLAYING,to:y.STAGE_CLEAR},{from:y.PLAYING,to:y.GAME_OVER},{from:y.STAGE_CLEAR,to:y.STAGE_START},{from:y.STAGE_CLEAR,to:y.SKIP_PROMPT},{from:y.STAGE_CLEAR,to:y.SHOP},{from:y.SKIP_PROMPT,to:y.SHOP},{from:y.SKIP_PROMPT,to:y.STAGE_START},{from:y.SHOP,to:y.SKILL_SELECT},{from:y.SKILL_SELECT,to:y.STAGE_START},{from:y.GAME_OVER,to:y.RESULT},{from:y.RESULT,to:y.TITLE}];class Ct{constructor(){o(this,"current",y.INIT)}get state(){return this.current}canTransition(e){return vt.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,C.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class _t{constructor(){o(this,"updateFns",[]);o(this,"rafId",null);o(this,"lastTime",0);o(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const s=(t-this.lastTime)/1e3;this.lastTime=t;const i=Math.min(s,this.maxDelta);for(const n of this.updateFns)n(i)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const Ie="yukimedal_save",At="yukimedal_best",me={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class It{constructor(){o(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(Ie);return e?{...me,...JSON.parse(e)}:{...me}}catch{return{...me}}}save(){try{localStorage.setItem(Ie,JSON.stringify(this.data))}catch{}}updateBest(e,t){const s=e*3+t,i=this.data.bestPhase*3+this.data.bestStage;s>i&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(At,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const qe={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ee{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rt=new je(-1,1,1,-1,0,1);class Pt extends We{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const Lt=new Pt;class ye{constructor(e){this._mesh=new Q(Lt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dt extends ee{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof X?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pe.clone(e.uniforms),this.material=new X({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ye(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Re extends ee{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const i=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),n.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),n.buffers.stencil.setClear(l),n.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(i.EQUAL,1,4294967295),n.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),n.buffers.stencil.setLocked(!0)}}class kt extends ee{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ht{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new V);this._width=s.width,this._height=s.height,t=new de(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:he}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dt(qe),this.copyPass.material.blending=Xe,this.clock=new Je}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let i=0,n=this.passes.length;i<n;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),a.needsSwap){if(s){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Re!==void 0&&(a instanceof Re?s=!0:a instanceof kt&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ot extends ee{constructor(e,t,s=null,i=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=i,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,s){const i=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Bt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class J extends ee{constructor(e,t,s,i){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=i,this.resolution=e!==void 0?new V(e.x,e.y):new V(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new de(n,a,{type:he}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const S=new de(n,a,{type:he});S.texture.name="UnrealBloomPass.h"+m,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const E=new de(n,a,{type:he});E.texture.name="UnrealBloomPass.v"+m,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),n=Math.round(n/2),a=Math.round(a/2)}const l=Bt;this.highPassUniforms=pe.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new X({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new V(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=qe;this.copyUniforms=pe.clone(g.uniforms),this.blendMaterial=new X({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:et,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new tt,this.fsQuad=new ye(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(s,i);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(s,i),this.renderTargetsVertical[n].setSize(s,i),this.separableBlurMaterials[n].uniforms.invSize.value=new V(1/s,1/i),s=Math.round(s/2),i=Math.round(i/2)}render(e,t,s,i,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=J.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=J.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new X({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new X({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}J.BlurDirectionX=new V(1,0);J.BlurDirectionY=new V(0,1);const Gt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Nt extends ee{constructor(){super();const e=Gt;this.uniforms=pe.clone(e.uniforms),this.material=new st({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ye(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===at?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ot?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ve?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ct&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ut{constructor(e){o(this,"scene");o(this,"renderer");o(this,"composer");o(this,"renderPass");o(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new dt,this.scene.background=new se(1710638),this.scene.fog=new ht(1710638,20,60),this.renderer=new ut({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pt,this.renderer.toneMapping=Ve,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=mt,e.appendChild(this.renderer.domElement);const t=window.innerWidth,s=window.innerHeight,i=new $e(60,t/s,.1,200);this.renderPass=new Ot(this.scene,i);const n=new J(new V(t,s),.75,.4,.82),a=new Nt;this.composer=new Ht(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(n),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const d={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class Ft{constructor(){o(this,"camera");o(this,"target",new q(0,0,-1));o(this,"basePosition",new q(0,7,16));o(this,"shakeOffset",new q);o(this,"shakeIntensity",0);o(this,"shakeDecay",0);o(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new $e(d.CAMERA_FOV,window.innerWidth/window.innerHeight,d.CAMERA_NEAR,d.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class zt{constructor(e){o(this,"ambient");o(this,"dirLight");o(this,"fillLight");o(this,"warmPoint");o(this,"coolPoint");this.ambient=new ft(4210784,.6),this.dirLight=new _e(16777215,1.2),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new _e(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new Ae(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new Ae(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint)}}class Wt{constructor(e){o(this,"stars");o(this,"grid");const s=new Float32Array(6e3),i=60;for(let l=0;l<2e3;l++){const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),g=Math.cbrt(Math.random())*i;s[l*3]=g*Math.sin(h)*Math.cos(c),s[l*3+1]=g*Math.sin(h)*Math.sin(c),s[l*3+2]=g*Math.cos(h)}const n=new We;n.setAttribute("position",new gt(s,3));const a=new yt({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0});this.stars=new Et(n,a),e.add(this.stars),this.grid=new Tt(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class Vt{constructor(){o(this,"world");o(this,"_initialized",!1)}async init(){await ce.init(),this.world=new ce.World({x:0,y:d.GRAVITY,z:0}),this._initialized=!0}get rapier(){return ce}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new ce.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class $t{constructor(){o(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const s=this.bodyToMesh.get(t.handle);if(!s)return;const i=t.translation(),n=t.rotation();s.position.set(i.x,i.y,i.z),s.quaternion.set(n.x,n.y,n.z,n.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class Qt{constructor(){o(this,"handles",new Map);o(this,"dropZoneHandles",new Set);o(this,"eventQueue");o(this,"medalCollectedCallback");o(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e){e.stepWithEvents(this.eventQueue),this.eventQueue.drainCollisionEvents((t,s,i)=>{var c,h;if(!i)return;const n=this.handles.get(t),a=this.handles.get(s);if(n==="drop_zone"&&(a==="medal"||a==="item")||a==="drop_zone"&&(n==="medal"||n==="item")){const g=n==="drop_zone"?s:t,m=n==="drop_zone"?a:n;m==="medal"?(c=this.medalCollectedCallback)==null||c.call(this,g):m==="item"&&((h=this.itemCollectedCallback)==null||h.call(this,g))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class qt{constructor(){o(this,"body");o(this,"time",0);o(this,"zBase");o(this,"initialized",!1);this.zBase=-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,s=t.RigidBodyDesc.kinematicPositionBased().setTranslation(0,d.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(s);const i=t.ColliderDesc.cuboid(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/2,d.PUSHER_DEPTH/2);e.createCollider(i,this.body),this.initialized=!0}update(e){this.time+=e;const t=d.PUSHER_PERIOD_MS/1e3,s=this.time%t/t,i=(1-Math.cos(s*Math.PI*2))/2*d.PUSHER_RANGE;if(this.initialized){const n=this.zBase+i;this.body.setNextKinematicTranslation({x:0,y:d.PUSHER_HEIGHT/2,z:n})}return i}get currentZOffset(){const e=d.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*d.PUSHER_RANGE}get restZ(){return this.zBase}}function Yt(r){return[r>>16&255,r>>8&255,r&255]}function Pe(r,e,t,s){return`rgb(${Math.min(255,r+s)},${Math.min(255,e+s)},${Math.min(255,t+s)})`}function Le(r,e,t,s){return`rgb(${Math.max(0,r-s)},${Math.max(0,e-s)},${Math.max(0,t-s)})`}function Zt(r,e,t){return`rgb(${r},${e},${t})`}class ue{static get(e,t){if(!this.cache.has(e)){const s=t(),i=new St(s);this.cache.set(e,i)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const s=document.createElement("canvas");s.width=s.height=128;const i=s.getContext("2d"),n=128/2,a=128/2,l=128/2-1,[c,h,g]=Yt(e),m=Zt(c,h,g),S=Pe(c,h,g,65),E=Pe(c,h,g,30),w=Le(c,h,g,55),f=Le(c,h,g,80),u=i.createRadialGradient(n-18,a-18,4,n,a,l);u.addColorStop(0,S),u.addColorStop(.45,E),u.addColorStop(.8,m),u.addColorStop(1,w),i.fillStyle=u,i.beginPath(),i.arc(n,a,l,0,Math.PI*2),i.fill(),i.strokeStyle=f,i.lineWidth=5,i.beginPath(),i.arc(n,a,l-5,0,Math.PI*2),i.stroke();const p=i.createRadialGradient(n,a,0,n,a,38);p.addColorStop(0,E),p.addColorStop(.7,m),p.addColorStop(1,w),i.fillStyle=p,i.beginPath(),i.arc(n,a,38,0,Math.PI*2),i.fill(),i.strokeStyle=f,i.lineWidth=1.5,i.stroke(),i.strokeStyle=S,i.lineWidth=2.5,i.lineCap="round";for(let L=0;L<6;L++){const D=L*Math.PI/3-Math.PI/6;i.beginPath(),i.moveTo(n+Math.cos(D)*7,a+Math.sin(D)*7),i.lineTo(n+Math.cos(D)*28,a+Math.sin(D)*28),i.stroke()}const x=i.createRadialGradient(n-2,a-2,0,n,a,8);x.addColorStop(0,S),x.addColorStop(1,m),i.fillStyle=x,i.beginPath(),i.arc(n,a,8,0,Math.PI*2),i.fill();const T=i.createRadialGradient(n-26,a-26,0,n-26,a-26,50);return T.addColorStop(0,"rgba(255,255,255,0.5)"),T.addColorStop(.4,"rgba(255,255,255,0.12)"),T.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=T,i.beginPath(),i.arc(n,a,l-2,0,Math.PI*2),i.fill(),s})}static getFieldTexture(){return this.get("field",()=>{const t=document.createElement("canvas");t.width=t.height=256;const s=t.getContext("2d");s.fillStyle="#2a2a4e",s.fillRect(0,0,256,256);const i=s.getImageData(0,0,256,256),n=i.data;for(let a=0;a<n.length;a+=4){const l=(Math.random()-.5)*18;n[a]=Math.max(0,Math.min(255,n[a]+l)),n[a+1]=Math.max(0,Math.min(255,n[a+1]+l)),n[a+2]=Math.max(0,Math.min(255,n[a+2]+l))}s.putImageData(i,0,0),s.strokeStyle="rgba(100,100,180,0.13)",s.lineWidth=1;for(let a=0;a<=256;a+=32)s.beginPath(),s.moveTo(a,0),s.lineTo(a,256),s.stroke();for(let a=0;a<=256;a+=32)s.beginPath(),s.moveTo(0,a),s.lineTo(256,a),s.stroke();return t})}static getPusherTexture(){return this.get("pusher",()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const i=s.getContext("2d");i.fillStyle="#3a3a6e",i.fillRect(0,0,256,128);for(let l=0;l<128;l++){const c=.015+Math.random()*.055;i.strokeStyle=`rgba(180,180,230,${c})`,i.lineWidth=1,i.beginPath(),i.moveTo(0,l+.5),i.lineTo(256,l+.5),i.stroke()}i.fillStyle="rgba(200,200,255,0.35)";for(let l=24;l<256;l+=48)i.beginPath(),i.arc(l,8,3,0,Math.PI*2),i.fill();const n=i.createLinearGradient(0,0,0,16);n.addColorStop(0,"rgba(220,220,255,0.55)"),n.addColorStop(1,"rgba(220,220,255,0)"),i.fillStyle=n,i.fillRect(0,0,256,16);const a=i.createLinearGradient(0,112,0,128);return a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,20,0.5)"),i.fillStyle=a,i.fillRect(0,112,256,16),s})}static getWallTexture(){return this.get("wall",()=>{const t=document.createElement("canvas");t.width=t.height=256;const s=t.getContext("2d");s.fillStyle="#1a1a3e",s.fillRect(0,0,256,256);for(let a=0;a<256;a+=48){const l=s.createLinearGradient(0,a,0,a+6);l.addColorStop(0,"rgba(0,0,0,0.4)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(0,a,256,6);const c=s.createLinearGradient(0,a-4,0,a);c.addColorStop(0,"rgba(100,100,200,0)"),c.addColorStop(1,"rgba(100,100,200,0.2)"),s.fillStyle=c,s.fillRect(0,a-4,256,4)}const i=s.getImageData(0,0,256,256),n=i.data;for(let a=0;a<n.length;a+=4){const l=(Math.random()-.5)*10;n[a]=Math.max(0,Math.min(255,n[a]+l)),n[a+1]=Math.max(0,Math.min(255,n[a+1]+l)),n[a+2]=Math.max(0,Math.min(255,n[a+2]+l))}return s.putImageData(i,0,0),t})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}o(ue,"cache",new Map);const Kt=new Qe(d.MEDAL_RADIUS,d.MEDAL_RADIUS,d.MEDAL_THICKNESS,24),jt=new Qe(d.MEDAL_RADIUS_LARGE,d.MEDAL_RADIUS_LARGE,d.MEDAL_THICKNESS,24),Xt={normal:16766720,double:13691135,large:15245312},Jt={normal:1,double:2,large:1};function es(r){const e=r*100;return e<d.MEDAL_PROB_NORMAL?"normal":e<d.MEDAL_PROB_DOUBLE?"double":"large"}function ts(r){return r==="large"?jt:Kt}class Ee{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const s=new bt({color:e,flatShading:!0});return this.materialCache.set(t,s),s}static createMesh(e,t,s=!0,i=!1){const n=this.getMaterial(t).clone(),a=new Q(e,n);return a.castShadow=s,a.receiveShadow=i,a}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}o(Ee,"materialCache",new Map);class ss{constructor(){o(this,"medals",new Map);o(this,"pendingRemoval",new Set);o(this,"spawnCounter",0)}spawn(e,t,s,i,n,a,l,c,h){if(this.medals.size>=d.MAX_MEDALS_ON_FIELD)return;const g=i.rapier,m=h??es(Math.random()),S=m==="large"?d.MEDAL_RADIUS_LARGE:d.MEDAL_RADIUS,E=Jt[m],w=g.RigidBodyDesc.dynamic().setTranslation(e,t,s).setLinearDamping(1.5).setAngularDamping(3).setCcdEnabled(!0),f=i.createRigidBody(w);c&&f.setLinvel(c,!0);const u=g.ColliderDesc.cylinder(d.MEDAL_THICKNESS/2,S).setRestitution(.05).setFriction(.7).setDensity(d.MEDAL_MASS).setActiveEvents(g.ActiveEvents.COLLISION_EVENTS),p=i.createCollider(u,f);a.registerHandle(p.handle,"medal");const x=Ee.createMesh(ts(m),Xt[m],!0,!1);x.position.set(e,t,s),l.add(x),n.register(f,x),this.medals.set(p.handle,{body:f,collider:p,mesh:x,type:m,quotaValue:E}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,s,i){let n=0;for(const a of this.pendingRemoval){const l=this.medals.get(a);l&&(t.unregister(l.body),s.unregisterHandle(a),i.remove(l.mesh),e.removeRigidBody(l.body),l.mesh.material.dispose(),this.medals.delete(a),n++)}return this.pendingRemoval.clear(),n}cleanupFallen(e,t,s,i,n){let a=0;for(const[l,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),a++);return a}get count(){return this.medals.size}clear(e,t,s,i){for(const[n,a]of this.medals)t.unregister(a.body),s.unregisterHandle(n),i.remove(a.mesh),e.removeRigidBody(a.body),a.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class is{constructor(){o(this,"body");o(this,"collider")}async initPhysics(e,t){const s=e.rapier,i=s.RigidBodyDesc.fixed().setTranslation(0,-2,d.FIELD_DEPTH/2+1);this.body=e.createRigidBody(i);const n=s.ColliderDesc.cuboid(d.FIELD_WIDTH/2+1,1,2).setActiveEvents(s.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(n,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class ns{constructor(){o(this,"time",0)}setupStage(e,t,s,i){this.clear(i)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var P=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r.Legendary="Legendary",r))(P||{});const as={[P.Common]:8947848,[P.Rare]:4474111,[P.Epic]:11141375,[P.Legendary]:16746496},os=new wt(.4,0);class rs{constructor(e){o(this,"mesh");o(this,"animationOffset");const t=as[e],s=new W({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new Q(os,s),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,s){this.mesh.position.set(e,t,s)}dispose(){this.mesh.material.dispose()}}class Te{constructor(e=Date.now()){o(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let s=t.length-1;s>0;s--){const i=Math.floor(this.next()*(s+1));[t[s],t[i]]=[t[i],t[s]]}return t}weightedPick(e,t){const s=t.reduce((n,a)=>n+a,0);let i=this.next()*s;for(let n=0;n<e.length;n++)if(i-=t[n],i<=0)return e[n];return e[e.length-1]}}class ls{constructor(){o(this,"items",new Map);o(this,"pendingRemoval",new Set)}spawnItems(e,t,s,i,n,a){const l=new Te(a);for(const c of e){const h=l.nextFloat(-3,d.FIELD_WIDTH/2-1),g=l.nextFloat(-12/4,d.FIELD_DEPTH/4);this.spawnSingle(c,h,2,g,t,s,i,n)}}spawnSingle(e,t,s,i,n,a,l,c){const h=n.rapier,g=h.RigidBodyDesc.dynamic().setTranslation(t,s,i).setLinearDamping(.7).setAngularDamping(.8),m=n.createRigidBody(g),S=h.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(h.ActiveEvents.COLLISION_EVENTS),E=n.createCollider(S,m);l.registerHandle(E.handle,"item");const w=new rs(e.rarity);w.setPosition(t,s,i),c.add(w.mesh),a.register(m,w.mesh),this.items.set(E.handle,{body:m,collider:E,mesh:w,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,s,i){for(const n of this.pendingRemoval){const a=this.items.get(n);a&&(t.unregister(a.body),s.unregisterHandle(n),i.remove(a.mesh.mesh),e.removeRigidBody(a.body),a.mesh.dispose(),this.items.delete(n))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,s,i){for(const[n,a]of this.items)t.unregister(a.body),s.unregisterHandle(n),i.remove(a.mesh.mesh),e.removeRigidBody(a.body),a.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const fe=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:P.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:P.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:P.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:P.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:P.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:P.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:P.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:P.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:P.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:P.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function ie(r){return fe.find(e=>e.id===r)}const De={[P.Common]:60,[P.Rare]:30,[P.Epic]:8,[P.Legendary]:2};class cs{constructor(e){o(this,"rng");this.rng=new Te(e)}pickRandom(e){const t=[];for(let s=0;s<e;s++){const i=this.pickRarity(),n=fe.filter(l=>l.rarity===i);if(n.length===0){t.push(fe[0]);continue}const a=Math.floor(this.rng.next()*n.length);t.push(n[a])}return t}pickRarity(){const e=Object.keys(De),t=e.map(s=>De[s]);return this.rng.weightedPick(e,t)}}function te(){return new W({color:1184298,roughness:.72,metalness:.42})}function $(){return new W({color:9474232,roughness:.15,metalness:.92})}function B(r,e=1){return new W({color:r,emissive:r,emissiveIntensity:e,roughness:.5,metalness:.3})}function v(r,e,t=!1){const s=new Q(r,e);return t&&(s.castShadow=!0,s.receiveShadow=!0),s}class ds{constructor(){o(this,"group");o(this,"pusherMesh");o(this,"fieldSurface");o(this,"wallMeshes",[]);o(this,"sideGuardMeshes",[]);o(this,"pusherZBase",-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE);this.group=new Mt;const e=ue.getFieldTexture();e.wrapS=e.wrapT=le,e.repeat.set(d.FIELD_WIDTH/2,d.FIELD_DEPTH/2);const t=new W({map:e,color:16777215,roughness:.92,metalness:0}),s=new M(d.FIELD_WIDTH,d.FIELD_HEIGHT,d.FIELD_DEPTH);this.fieldSurface=new Q(s,t),this.fieldSurface.receiveShadow=!0,this.fieldSurface.position.y=-.1/2,this.group.add(this.fieldSurface);const i=ue.getPusherTexture();i.wrapS=i.wrapT=le,i.repeat.set(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/1);const n=new W({map:i,color:16777215,roughness:.35,metalness:.65}),a=new M(d.PUSHER_WIDTH,d.PUSHER_HEIGHT,d.PUSHER_DEPTH);this.pusherMesh=new Q(a,n),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,d.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh),this.addPusherDetails(),this.createWalls(),this.buildCabinet()}addPusherDetails(){const e=d.PUSHER_WIDTH,t=d.PUSHER_HEIGHT,s=d.PUSHER_DEPTH,i=v(new M(e+.06,.14,.14),$());i.position.set(0,-t/2+.07,s/2),this.pusherMesh.add(i);const n=v(new M(e,.07,s),$());n.position.set(0,t/2+.035,0),this.pusherMesh.add(n);const a=v(new M(e-.2,.06,.06),B(65484,1.2));a.position.set(0,t/2+.06,s/2-.05),this.pusherMesh.add(a);for(const l of[-1,1]){const c=v(new M(.1,t,.1),$());c.position.set(l*(e/2-.05),0,s/2),this.pusherMesh.add(c)}}createWalls(){const s=ue.getWallTexture();s.wrapS=s.wrapT=le;const i=()=>{const p=s.clone();return p.wrapS=p.wrapT=le,p.needsUpdate=!0,new W({map:p,color:16777215,roughness:.8,metalness:.15})},n=d.OPEN_ZONE_START- -12/2,a=-12/2+n/2,l=i();l.map.repeat.set(n/2,3.5/2);const c=new M(.3,3.5,n),h=new Q(c,l);h.position.set(-8/2-.3/2,3.5/2,a),this.group.add(h),this.wallMeshes.push(h);const g=i();g.map.repeat.set(n/2,3.5/2);const m=new M(.3,3.5,n),S=new Q(m,g);S.position.set(d.FIELD_WIDTH/2+.3/2,3.5/2,a),this.group.add(S),this.wallMeshes.push(S);const E=i(),w=d.FIELD_WIDTH+.3*2;E.map.repeat.set(w/2,3.5/2);const f=new M(w,3.5,.3),u=new Q(f,E);u.position.set(0,3.5/2,-12/2-.3/2),this.group.add(u),this.wallMeshes.push(u)}buildCabinet(){const e=d.FIELD_WIDTH,t=d.FIELD_DEPTH,s=-t/2,i=t/2,n=v(new M(12,1,17),te(),!0);n.position.set(0,-.52,-.5),this.group.add(n);const a=v(new M(12,.1,.1),$());a.position.set(0,0,i+2.55),this.group.add(a);const l=1.1,c=7.2,h=13.5,g=e/2+.75,m=-.25;for(const A of[-1,1]){const O=v(new M(l,c,h),te(),!0);O.position.set(A*g,c/2-.5,m),this.group.add(O);const be=v(new M(l+.08,.14,h+.08),$());be.position.set(A*g,c-.5+.07,m),this.group.add(be);const we=v(new M(l+.08,.1,h+.08),$());we.position.set(A*g,-.02,m),this.group.add(we);const Me=v(new M(.06,c*.75,h*.7),new W({color:657950,roughness:.9,metalness:.1}));Me.position.set(A*(g-(l/2+.01)),c/2-.5,m),this.group.add(Me);const xe=v(new M(.055,c*.8,.055),B(16766720,1.1));xe.position.set(A*(g-l/2-.05),c/2-.5,m),this.group.add(xe);const ve=v(new M(.05,c*.6,.05),B(43775,.9));ve.position.set(A*(g-l/2-.05),c/2-.5,i+.3),this.group.add(ve)}const S=10.5,E=1.3,w=s-1.15,f=v(new M(12,S,E),te(),!0);f.position.set(0,S/2-.5,w),this.group.add(f);const u=v(new M(12.1,.15,E+.1),$());u.position.set(0,S-.5+.07,w),this.group.add(u);const p=3.8,x=9.8,T=new W({color:2080,emissive:4160,emissiveIntensity:.9,roughness:.3,metalness:.5}),L=v(new M(x,p,.08),T);L.position.set(0,S-.5-p/2-.3,w+E/2+.04),this.group.add(L);const D=v(new M(x+.24,p+.24,.06),$());D.position.set(0,S-.5-p/2-.3,w+E/2),this.group.add(D);const H=S-.5-p/2-.3,k=[22015,43775,22015,43775];for(let A=0;A<4;A++){const O=v(new M(x-.4,.05,.07),B(k[A],.8));O.position.set(0,H-p/2+.5+A*.75,w+E/2+.06),this.group.add(O)}const F=v(new M(12,.07,.07),B(52479,1.2));F.position.set(0,S-.5+.18,w+E/2),this.group.add(F);const ne=v(new M(12,.07,.07),B(16755200,.9));ne.position.set(0,3.7,w+E/2),this.group.add(ne);const Z=v(new M(12,1.1,4.5),te(),!0);Z.position.set(0,-.56,i+2.25),this.group.add(Z);const ae=v(new M(12,.12,.12),$());ae.position.set(0,0,i+4.45),this.group.add(ae);const oe=v(new M(12,.06,.06),B(65450,1));oe.position.set(0,.06,i+4.5),this.group.add(oe);const re=v(new M(12,.5,h),te(),!0);re.position.set(0,6.7,m),this.group.add(re);const Y=v(new M(12,.07,.07),B(16766720,1));Y.position.set(0,6.96,i+.1),this.group.add(Y);for(const A of[-1,1]){const O=v(new M(.09,.09,t+.5),$());O.position.set(A*(e/2+.04),.05,m),this.group.add(O)}const K=v(new M(e+.2,3.6,.18),new W({color:1973818,roughness:.65,metalness:.5}));K.position.set(0,1.8,s-.08),this.group.add(K);const b=v(new M(e-.2,.06,.06),B(65450,1));b.position.set(0,3.65,s+.01),this.group.add(b);const R=v(new M(e+.1,.07,.07),B(65484,1.4));R.position.set(0,.07,i),this.group.add(R);const z=v(new M(e+.1,.07,.07),B(16766720,1.4));z.position.set(0,.07,s+.04),this.group.add(z);for(const A of[-1,1]){const O=v(new M(.07,.07,t),B(16766720,1.2));O.position.set(A*e/2,.07,(s+i)/2),this.group.add(O)}const j=d.OPEN_ZONE_START-s,G=s+j/2;for(const A of[-1,1]){const O=v(new M(.055,3.4,.055),B(4482815,.9));O.position.set(A*(e/2),1.7,G),this.group.add(O)}const N=new Q(new M(100,.2,100),new W({color:263182,roughness:.95,metalness:0}));N.position.set(0,-.65,0),this.group.add(N)}addSideGuardMeshes(e){const i=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,n=d.OPEN_ZONE_START+i/2;for(const a of[-1,1]){const l=a*(d.FIELD_WIDTH/2+.1),c=new M(.2,2,i),h=Ee.createMesh(c,4500223,!1,!1);h.position.set(l,2/2,n),e.add(h),this.sideGuardMeshes.push(h)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class hs{constructor(e,t,s){o(this,"physicsWorld");o(this,"physicsSync");o(this,"collisionHandler");o(this,"pusher");o(this,"medalSpawner");o(this,"itemSpawner");o(this,"dropZone");o(this,"gimmickManager");o(this,"fieldMesh");o(this,"time",0);o(this,"getMedalQuotaMultiplier",()=>1);o(this,"sideGuardActive",!1);o(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=s,this.physicsWorld=new Vt,this.physicsSync=new $t,this.collisionHandler=new Qt,this.pusher=new qt,this.medalSpawner=new ss,this.itemSpawner=new ls,this.dropZone=new is,this.gimmickManager=new ns,this.fieldMesh=new ds}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const s=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,s),C.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const s=this.inventory.addItem(t),i=ie(t);i&&(this.quotaManager.addItem(i.quotaValue),C.emit("item:collected",{itemId:t,instanceId:s.instanceId,quotaValue:i.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),s=this.physicsWorld.createRigidBody(t),i=e.ColliderDesc.cuboid(d.FIELD_WIDTH/2,.05,d.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(i,s);const n=3.5,a=.2,l=d.OPEN_ZONE_START- -12/2,c=-12/2+l/2,h=e.RigidBodyDesc.fixed().setTranslation(-8/2-a/2,n/2,c),g=this.physicsWorld.createRigidBody(h);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(a/2,n/2,l/2),g);const m=e.RigidBodyDesc.fixed().setTranslation(d.FIELD_WIDTH/2+a/2,n/2,c),S=this.physicsWorld.createRigidBody(m);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(a/2,n/2,l/2),S);const E=8,w=.5,f=e.RigidBodyDesc.fixed().setTranslation(0,E/2,-12/2-w/2),u=this.physicsWorld.createRigidBody(f);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(d.FIELD_WIDTH/2+w,E/2,w/2),u)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const i=new cs(e*1e3+t).pickRandom(d.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+d.PUSHER_DEPTH-d.PUSHER_RANGE,t=d.FIELD_DEPTH/2-d.MEDAL_RADIUS,s=d.FIELD_WIDTH/2-d.MEDAL_RADIUS;for(let a=0;a<d.INITIAL_FIELD_MEDALS;a++){const l=(Math.random()*2-1)*s,c=e+Math.random()*(t-e),h=d.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const i=-12/2+d.MEDAL_RADIUS,n=e-d.MEDAL_RADIUS;for(let a=0;a<d.INITIAL_PUSHER_MEDALS;a++){const l=(Math.random()*2-1)*s,c=i+Math.random()*(n-i),h=d.PUSHER_HEIGHT+.5+Math.random()*1.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const s=d.FIELD_DEPTH/2-.5,i=1.5,a=-(8+(-t+1)/2*5);this.medalSpawner.spawn(e,i,s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:4,z:a})}update(e){this.time+=e,this.collisionHandler.processEvents(this.physicsWorld),this.medalSpawner.cleanupFallen(d.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,s=.2,i=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,n=d.OPEN_ZONE_START+i/2;for(const a of[-1,1]){const l=a*(d.FIELD_WIDTH/2+s/2),c=e.RigidBodyDesc.fixed().setTranslation(l,t/2,n),h=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(s/2,t/2,i/2),h),this.sideGuardBodies.push(h)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class us{constructor(){o(this,"current",0);o(this,"target",0);o(this,"phase",1);o(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),C.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),C.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const s=(e-1)*d.STAGES_PER_PHASE+t;return Math.ceil(d.BASE_QUOTA*Math.pow(d.QUOTA_MULTIPLIER,s-1))}addMedals(e,t=1){this.current+=e*t,C.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&C.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,C.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&C.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class ps{constructor(e){o(this,"phase",1);o(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===d.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(y.PLAYING)}clearCurrentStage(){C.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(y.STAGE_CLEAR),this.stage===d.STAGES_PER_PHASE&&C.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<d.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(y.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function ms(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class fs{constructor(){o(this,"items",[])}addItem(e){const t={instanceId:ms(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(s=>s.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(s=>s.instanceId===e);if(t)return ie(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const s=ie(t.definitionId);return e+((s==null?void 0:s.sellPrice)??0)},0)}}class gs{constructor(){o(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});C.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),C.on("item:collected",()=>{this.data.totalItemsCollected++}),C.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class ys{calculate(e,t){const s=t.bestPhase*3+t.bestStage,n=e.phase*3+e.stage>s;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:n,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var I=(r=>(r.Gold="Gold",r.Alchemy="Alchemy",r.Throw="Throw",r.Guard="Guard",r))(I||{}),_=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r))(_||{});const Ye=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:I.Gold,rarity:_.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:I.Gold,rarity:_.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:I.Gold,rarity:_.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:I.Gold,rarity:_.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:I.Gold,rarity:_.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:I.Alchemy,rarity:_.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:I.Alchemy,rarity:_.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:I.Alchemy,rarity:_.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:I.Alchemy,rarity:_.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:I.Alchemy,rarity:_.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:I.Throw,rarity:_.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:I.Throw,rarity:_.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:I.Throw,rarity:_.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:I.Throw,rarity:_.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:I.Throw,rarity:_.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:I.Guard,rarity:_.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:I.Guard,rarity:_.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:I.Guard,rarity:_.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:I.Guard,rarity:_.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:I.Guard,rarity:_.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function ke(r){return Ye.find(e=>e.id===r)}class Es{constructor(){o(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),C.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const s of this.owned){const i=ke(s.definitionId);if(i)for(const n of i.effects)n.type===e&&(t*=n.value)}return t}getEffectSum(e){let t=0;for(const s of this.owned){const i=ke(s.definitionId);if(i)for(const n of i.effects)n.type===e&&(t+=n.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const He={[_.Common]:60,[_.Rare]:30,[_.Epic]:10};class Ts{pickChoices(e,t,s){const i=new Te(s),n=new Set(t.map(h=>h.definitionId)),a=Ye.filter(h=>!n.has(h.id));if(a.length===0)return[];const l=[],c=new Set;for(let h=0;h<e&&l.length<a.length;h++){const g=Object.keys(He),m=g.map(f=>He[f]),S=i.weightedPick(g,m),E=a.filter(f=>f.rarity===S&&!c.has(f.id));if(E.length===0){const f=a.filter(p=>!c.has(p.id));if(f.length===0)break;const u=f[Math.floor(i.next()*f.length)];l.push(u),c.add(u.id);continue}const w=E[Math.floor(i.next()*E.length)];l.push(w),c.add(w.id)}return l}}const Se=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function Oe(r){return Se.find(e=>e.id===r)}class Ss{constructor(){o(this,"shopMoney");o(this,"medals");o(this,"sellMultiplier",1);o(this,"ownedActiveItems",new Map);this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const s=t.getDefinition(e);if(!s)return 0;const i=Math.floor(s.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=i,i}buyMedals(e){const t=e*d.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=Se.find(s=>s.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let Be=!1;function bs(){if(Be)return;Be=!0;const r=document.createElement("style");r.textContent=`
    @keyframes titlePulse {
      0%, 100% { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd70066; }
      50% { text-shadow: 0 0 35px #ffd700, 0 0 70px #ffd70099, 0 0 100px #ffd70033; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `,document.head.appendChild(r)}class ws{constructor(e){o(this,"el");o(this,"onStartCallbacks",[]);o(this,"hideTimer",null);bs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,t.textContent="YukiMedal";const s=document.createElement("p");s.style.cssText=`
      font-size: 1rem;
      color: #6666aa;
      margin-bottom: 3rem;
      letter-spacing: 0.1em;
    `,s.textContent="Roguelike Medal Pusher";const i=document.createElement("button");i.style.cssText=`
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
    `,i.textContent="START",i.addEventListener("mouseenter",()=>{i.style.background="#ffd70033",i.style.backgroundSize="200% auto"}),i.addEventListener("mouseleave",()=>{i.style.background="linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",i.style.backgroundSize="200% auto"}),i.addEventListener("click",()=>{this.onStartCallbacks.forEach(a=>a())});const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.65rem;
      color: #444466;
      letter-spacing: 0.05em;
    `,n.textContent="v0.1.0",this.el.appendChild(t),this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(n),e.appendChild(this.el)}onStart(e){this.onStartCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class Ms{constructor(e){o(this,"el");o(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,s=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(s?this.el.style.color="#ff4444":this.el.style.color="#ffd700",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Ge=!1;function xs(){if(Ge)return;Ge=!0;const r=document.createElement("style");r.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(r)}class vs{constructor(e){o(this,"container");o(this,"bar");o(this,"label");o(this,"reached",!1);xs(),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `;const s=document.createElement("div");s.style.cssText=`
      position: absolute;
      top: 1px;
      right: 0;
      width: 30%;
      height: 4px;
      background: rgba(255,255,255,0.25);
      border-radius: 2px;
      pointer-events: none;
    `,this.bar.appendChild(s),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const s=Math.min(e/t,1)*100;this.bar.style.width=`${s}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, #00ff88, #ffd700)",this.bar.style.boxShadow="0 0 14px #00ff88aa",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, #4444ff, #00ffaa)",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Cs{constructor(e){o(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e,t){this.el.innerHTML=`Phase <span style="color:#ffd700;font-weight:bold">${e}</span><br>Stage ${t} / 3`}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let Ne=!1;function _s(){if(Ne)return;Ne=!0;const r=document.createElement("style");r.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
  `,document.head.appendChild(r)}class As{constructor(e){o(this,"el");o(this,"medalCounter");o(this,"quotaBar");o(this,"phaseIndicator");o(this,"throwHint");o(this,"inventoryPanel");o(this,"activeItemPanel");o(this,"countdownEl");o(this,"onUseActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Ms(this.el),this.quotaBar=new vs(this.el),this.phaseIndicator=new Cs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
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
    `,this.el.appendChild(this.countdownEl),e.appendChild(this.el),_s()}update(e,t,s,i,n){this.medalCounter.update(e),this.quotaBar.update(t,s),this.phaseIndicator.update(i,n)}showFloatingText(e,t="#ffd700"){let s="2rem";const i=parseInt(e.replace("+",""),10);isNaN(i)||(i>=5?s="2.6rem":i>=2?s="2.2rem":s="1.6rem");const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%) scale(1.5);
      font-size: ${s};
      font-weight: bold;
      color: ${t};
      text-shadow: 0 0 8px ${t};
      pointer-events: none;
      animation: squashIn 0.12s ease forwards;
    `,n.textContent=e,this.el.appendChild(n),setTimeout(()=>{n.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>n.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const s of e){const i=ie(s.definitionId);if(!i)continue;const n=document.createElement("div");n.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid #333355;
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: #ffffff;
      `,n.textContent=i.name,this.inventoryPanel.appendChild(n)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const s of e){const i=document.createElement("button"),n=s.remainingMs??0,a=n>0,l=a?` (${Math.ceil(n/1e3)}s)`:"";i.style.cssText=`
        display: block;
        width: 100%;
        margin-bottom: 6px;
        padding: 6px 10px;
        background: ${a?`${s.color}33`:"rgba(0,0,0,0.6)"};
        border: 2px solid ${s.color};
        color: ${s.color};
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 6px;
        text-align: left;
        pointer-events: all;
      `,i.innerHTML=`<strong>${s.name}</strong> x${s.count}${l}`,i.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(s.id))}),this.activeItemPanel.appendChild(i)}}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Ue=!1;function Is(){if(Ue)return;Ue=!0;const r=document.createElement("style");r.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class Rs{constructor(e){o(this,"el");o(this,"onContinueCallbacks",[]);o(this,"onSkipCallbacks",[]);o(this,"titleEl");o(this,"infoEl");o(this,"continueBtn");o(this,"shopBtn");o(this,"hideTimer",null);Is(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,this.titleEl=document.createElement("h2"),this.titleEl.style.cssText="font-size: 2rem; color: #00ff88; margin-bottom: 8px;",this.infoEl=document.createElement("p"),this.infoEl.style.cssText="color: #aaaacc; font-size: 0.9rem;";const t=document.createElement("div");t.style.cssText="display: flex; gap: 16px; margin-top: 16px;",this.continueBtn=this.createButton("NEXT STAGE →","#4444ff",()=>{this.onContinueCallbacks.forEach(s=>s())}),this.shopBtn=this.createButton("GO TO SHOP (next phase)","#ff8800",()=>{this.onSkipCallbacks.forEach(s=>s())}),t.appendChild(this.continueBtn),t.appendChild(this.shopBtn),this.el.appendChild(this.titleEl),this.el.appendChild(this.infoEl),this.el.appendChild(t),e.appendChild(this.el)}createButton(e,t,s){const i=document.createElement("button");return i.style.cssText=`
      font-size: 1rem;
      padding: 12px 32px;
      background: transparent;
      border: 2px solid ${t};
      color: ${t};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transition: background 0.2s;
    `,i.textContent=e,i.addEventListener("mouseenter",()=>i.style.background=`${t}22`),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",s),i}show(e,t,s,i,n){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),s?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="#ffd700",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="#00ff88",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(i)} / ${n}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Fe=!1;function Ps(){if(Fe)return;Fe=!0;const r=document.createElement("style");r.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class Ls{constructor(e){o(this,"el");o(this,"onRetryCallbacks",[]);o(this,"hideTimer",null);Ps(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,t.textContent="GAME OVER";const s=e.isNewBest?document.createElement("div"):null;s&&(s.style.cssText=`
        font-size: 1.1rem;
        color: #ffd700;
        margin-bottom: 8px;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: 0.1s;
        opacity: 0;
      `,s.textContent="★ NEW BEST! ★");const i=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],n=document.createElement("div");n.style.cssText="margin: 8px 0 24px; text-align: center;",i.forEach((l,c)=>{const h=document.createElement("div");h.style.cssText=`
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
      animation-delay: ${.15+i.length*.1}s;
      opacity: 0;
    `,a.textContent="TRY AGAIN",a.addEventListener("mouseenter",()=>a.style.background="#ff444422"),a.addEventListener("mouseleave",()=>a.style.background="transparent"),a.addEventListener("click",()=>this.onRetryCallbacks.forEach(l=>l())),this.el.appendChild(t),s&&this.el.appendChild(s),this.el.appendChild(n),this.el.appendChild(a),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const Ds=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class ks{constructor(e){o(this,"el");o(this,"onSelectCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText="font-size: 1.8rem; color: #aa44ff; margin-bottom: 8px;",t.textContent="CHOOSE A SKILL";const s=document.createElement("p");s.style.cssText="color: #666688; font-size: 0.85rem; margin-bottom: 16px;",s.textContent="Select one permanent skill";const i=document.createElement("div");i.style.cssText="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;";for(const n of e)i.appendChild(this.createCard(n));this.el.appendChild(t),this.el.appendChild(s),this.el.appendChild(i),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e){const s={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"}[e.tag]??"#aaaacc",i=document.createElement("div");i.style.cssText=`
      width: 200px;
      padding: 20px;
      ${Ds}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${s}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const n=document.createElement("div");n.style.cssText=`font-size: 0.7rem; color: ${s}; margin-bottom: 8px; letter-spacing: 0.1em;`,n.textContent=`[${e.tag}] · ${e.rarity}`;const a=document.createElement("div");a.style.cssText="font-size: 1rem; color: #ffffff; font-weight: bold; margin-bottom: 8px;",a.textContent=e.name;const l=document.createElement("div");return l.style.cssText="font-size: 0.8rem; color: #aaaacc; line-height: 1.4;",l.textContent=e.description,i.appendChild(n),i.appendChild(a),i.appendChild(l),i.addEventListener("mouseenter",()=>{i.style.borderColor=s,i.style.background=`${s}11`,i.style.transform="translateY(-2px)",i.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${s}22`}),i.addEventListener("mouseleave",()=>{i.style.borderColor=`${s}44`,i.style.background="rgba(0,0,0,0.6)",i.style.transform="translateY(0)",i.style.boxShadow=""}),i.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),i}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const ze=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Hs{constructor(e){o(this,"el");o(this,"moneyEl");o(this,"inventoryEl");o(this,"onBuyMedalsCallbacks",[]);o(this,"onSellCallbacks",[]);o(this,"onContinueCallbacks",[]);o(this,"onBuyActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;";const s=document.createElement("h2");s.style.cssText="font-size: 1.8rem; color: #ffd700;",s.textContent="SHOP",this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="color: #ffd700; font-size: 1.1rem;";const i=document.createElement("button");i.style.cssText=`
      padding: 10px 28px;
      background: transparent;
      border: 2px solid #00ff88;
      color: #00ff88;
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: background 0.2s;
    `,i.textContent="START NEXT PHASE →",i.addEventListener("mouseenter",()=>i.style.background="#00ff8822"),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",()=>this.onContinueCallbacks.forEach(n=>n())),t.appendChild(s),t.appendChild(this.moneyEl),t.appendChild(i),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,s=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,s),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,s){this.inventoryEl.innerHTML="";const i=document.createElement("div");i.style.cssText="margin-bottom: 28px;";const n=document.createElement("h3");n.style.cssText="color: #ffd700; margin-bottom: 12px; border-bottom: 1px solid rgba(255,215,0,0.15); padding-bottom: 8px;",n.textContent="BUY MEDALS",i.appendChild(n);const a=document.createElement("div");a.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const l=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const u of l){const p=e>=u.price,x=document.createElement("button");x.style.cssText=`
        padding: 12px 18px;
        background: transparent;
        border: 2px solid ${p?"#ffd700":"#555"};
        color: ${p?"#ffd700":"#555"};
        cursor: ${p?"pointer":"default"};
        font-size: 0.85rem;
        border-radius: 6px;
        transition: background 0.2s, transform 0.15s;
        min-width: 120px;
        text-align: center;
      `,x.innerHTML=`<strong>${u.label}</strong><br>${u.price} G`,p&&(x.addEventListener("mouseenter",()=>{x.style.background="#ffd70022",x.style.transform="translateY(-2px)"}),x.addEventListener("mouseleave",()=>{x.style.background="transparent",x.style.transform="translateY(0)"}),x.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(T=>T(u.count))})),a.appendChild(x)}i.appendChild(a),this.inventoryEl.appendChild(i);const c=document.createElement("hr");c.style.cssText="border-color: rgba(255,215,0,0.15); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const h=document.createElement("div");h.style.cssText="margin-bottom: 28px;";const g=document.createElement("h3");g.style.cssText="color: #44aaff; margin-bottom: 12px; border-bottom: 1px solid rgba(68,170,255,0.15); padding-bottom: 8px;",g.textContent="ACTIVE ITEMS (buy to use during game)",h.appendChild(g);const m=document.createElement("div");m.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const S=new Map(s.map(u=>[u.id,u.count]));for(const u of Se){const p=e>=u.price,x=S.get(u.id)??0,T=document.createElement("div");T.style.cssText=`
        padding: 14px;
        ${ze}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${p?u.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const L=document.createElement("div");L.style.cssText=`color: ${u.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,L.textContent=u.name;const D=document.createElement("div");D.style.cssText="color: #aaa; font-size: 0.75rem; margin-bottom: 8px;",D.textContent=u.description;const H=document.createElement("div");H.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",H.textContent=`Owned: ${x}`;const k=document.createElement("button");k.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${p?u.color:"#555"};
        color: ${p?u.color:"#555"};
        cursor: ${p?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,k.textContent=`Buy ${u.price} G`,p&&(k.addEventListener("mouseenter",()=>k.style.background=`${u.color}22`),k.addEventListener("mouseleave",()=>k.style.background="transparent"),T.addEventListener("mouseenter",()=>{T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.transform="translateY(0)",T.style.boxShadow=""}),k.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(F=>F(u.id))})),T.appendChild(L),T.appendChild(D),T.appendChild(H),T.appendChild(k),m.appendChild(T)}h.appendChild(m),this.inventoryEl.appendChild(h);const E=document.createElement("hr");E.style.cssText="border-color: rgba(255,255,255,0.1); margin: 8px 0 20px;",this.inventoryEl.appendChild(E);const w=document.createElement("div"),f=document.createElement("h3");if(f.style.cssText="color: #aaaacc; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;",f.textContent="YOUR ITEMS (click to sell)",w.appendChild(f),t.length===0){const u=document.createElement("p");u.style.cssText="color: #555577;",u.textContent="No items collected yet.",w.appendChild(u)}else{const u=document.createElement("div");u.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const p of t){const x=ie(p.definitionId);if(!x)continue;const T=document.createElement("div");T.style.cssText=`
          width: 160px;
          padding: 14px;
          ${ze}
          background: rgba(0,0,0,0.5);
          border: 1px solid #333355;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,T.innerHTML=`
          <div style="color:#ffffff;font-size:0.9rem;margin-bottom:4px;">${x.name}</div>
          <div style="color:#888;font-size:0.75rem;">${x.rarity}</div>
          <div style="color:#ffd700;font-size:0.85rem;margin-top:8px;">Sell: ${x.sellPrice} G</div>
        `,T.addEventListener("mouseenter",()=>{T.style.borderColor="#ffd700",T.style.transform="translateY(-2px)",T.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),T.addEventListener("mouseleave",()=>{T.style.borderColor="#333355",T.style.transform="translateY(0)",T.style.boxShadow=""}),T.addEventListener("click",()=>{this.onSellCallbacks.forEach(L=>L(p.instanceId))}),u.appendChild(T)}w.appendChild(u)}this.inventoryEl.appendChild(w)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}class Os{constructor(e){o(this,"titleScreen");o(this,"gameScreen");o(this,"stageResultScreen");o(this,"resultScreen");o(this,"skillSelectScreen");o(this,"shopScreen");this.titleScreen=new ws(e),this.gameScreen=new As(e),this.stageResultScreen=new Rs(e),this.resultScreen=new Ls(e),this.skillSelectScreen=new ks(e),this.shopScreen=new Hs(e),C.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case y.TITLE:this.titleScreen.show();break;case y.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case y.STAGE_CLEAR:break;case y.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,s,i,n,a,l){this.gameScreen.update(e,t,s,i,n),a&&this.gameScreen.updateInventory(a),l&&this.gameScreen.updateActiveItems(l)}}class Bs{constructor(e){o(this,"throwCallbacks",[]);o(this,"enabled",!1);o(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,s=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(i=>i(t,s))});o(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const s=t.clientX/window.innerWidth*2-1,i=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(n=>n(s,i))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const U=class U{constructor(){o(this,"ctx",null);o(this,"masterGain",null);o(this,"bgmPlaying",!1);o(this,"bgmNextTime",0);o(this,"bgmSchedulerTimer",null);o(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getMaster(){return this.getCtx(),this.masterGain}playThrow(){const e=this.getCtx(),t=this.getMaster(),s=e.sampleRate*.12,i=e.createBuffer(1,s,e.sampleRate),n=i.getChannelData(0);for(let h=0;h<s;h++)n[h]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=i;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),l.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),a.connect(l),l.connect(c),c.connect(t),a.start(),a.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getMaster(),s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(880,e.currentTime),s.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const i=e.createGain();i.gain.setValueAtTime(.3,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),s.connect(i),i.connect(t),s.start(),s.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getMaster();[523.25,659.25,783.99,1046.5].forEach((i,n)=>{this._playNote(e,t,"sine",i,e.currentTime+n*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getMaster();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([i,n,a])=>{this._playNote(e,t,"square",i,e.currentTime+n,a,.2)})}playGameOver(){const e=this.getCtx(),t=this.getMaster();[440,349.23,293.66,220].forEach((i,n)=>{this._playNote(e,t,"sawtooth",i,e.currentTime+n*.22,.3,.18)})}playSkillSelected(){const e=this.getCtx(),t=this.getMaster();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getMaster(),s=Math.floor(e.sampleRate*.02),i=e.createBuffer(1,s,e.sampleRate),n=i.getChannelData(0);for(let c=0;c<s;c++)n[c]=(Math.random()*2-1)*(1-c/s);const a=e.createBufferSource();a.buffer=i;const l=e.createGain();l.gain.value=.35,a.connect(l),l.connect(t),a.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getMaster(),s=.3,i=100;for(;this.bgmNextTime<e.currentTime+s;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=U.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),i)}_scheduleBGMBeat(e,t,s){const i=this.bgmBeatIndex,n=U.BASS_FREQS,a=Math.floor(i/2)%n.length;i%2===0&&this._scheduleNote(e,t,"sawtooth",n[a],s,U.BEAT*1.8,.12);const l=U.MELODY;let c=i%8,h=0;for(const[f,u]of l){if(c>=h&&c<h+u){f>0&&this._scheduleNote(e,t,"square",f,s,U.BEAT*u*.85,.1);break}h+=u}const g=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),m=g.getChannelData(0);for(let f=0;f<m.length;f++)m[f]=(Math.random()*2-1)*(1-f/m.length);const S=e.createBufferSource();S.buffer=g;const E=e.createBiquadFilter();E.type="highpass",E.frequency.value=8e3;const w=e.createGain();w.gain.value=.04,S.connect(E),E.connect(w),w.connect(t),S.start(s)}_playNote(e,t,s,i,n,a,l){const c=e.createOscillator();c.type=s,c.frequency.value=i;const h=e.createGain();h.gain.setValueAtTime(l,n),h.gain.exponentialRampToValueAtTime(.001,n+a),c.connect(h),h.connect(t),c.start(n),c.stop(n+a)}_scheduleNote(e,t,s,i,n,a,l){this._playNote(e,t,s,i,n,a,l)}};o(U,"BPM",110),o(U,"BEAT",60/U.BPM),o(U,"BASS_FREQS",[110,98,82.41,110]),o(U,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let ge=U;async function Gs(){const r=new Ct,e=new _t,t=new It,s=new gs,i=new ys,n=document.getElementById("app"),a=document.getElementById("ui-root"),l=new Ut(n),c=new Ft;new zt(l);const h=new Wt(l.scene);l.setCamera(c.camera);const g=new us,m=new ps(r),S=new fs,E=new Es,w=new Ts,f=new Ss,u=new hs(l,g,S);u.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier);const p=new Os(a),x=new Bs(l.renderer.domElement),T=new ge;let L=0,D=!1,H=0,k=0,F=0;p.titleScreen.onStart(()=>{ne()}),p.stageResultScreen.onContinue(()=>{p.stageResultScreen.hide(),m.advanceStage(),Z()}),p.stageResultScreen.onSkip(()=>{p.stageResultScreen.hide(),m.advancePhase(),ae()}),p.shopScreen.onBuyMedals(b=>{const R=b*d.MEDAL_BUY_PRICE;f.buyMedals(b)?p.shopScreen.show(f.money,S.getAll(),f.getOwnedActiveItems()):console.log(`Not enough shop money (need ${R} G, have ${f.money} G)`)}),p.shopScreen.onSell(b=>{const R=f.sellItem(b,S);s.addShopMoney(R),p.shopScreen.show(f.money,S.getAll(),f.getOwnedActiveItems())}),p.shopScreen.onBuyActive(b=>{f.buyActiveItem(b)&&p.shopScreen.show(f.money,S.getAll(),f.getOwnedActiveItems())}),p.shopScreen.onContinue(()=>{p.shopScreen.hide(),oe()}),p.skillSelectScreen.onSelect(b=>{E.addSkill(b,m.currentPhase),f.setSellMultiplier(E.itemSellMultiplier),p.skillSelectScreen.hide(),r.transition(y.STAGE_START),Z()}),p.resultScreen.onRetry(()=>{p.resultScreen.hide(),r.transition(y.TITLE),p.titleScreen.show()}),p.gameScreen.onUseActive(b=>{if(!r.is(y.PLAYING)||!f.useActiveItem(b))return;const R=Oe(b);if(!R)return;const z=Date.now()+R.durationMs;b==="side_guard"?(F=z,u.addSideGuardWalls(),u.fieldMesh.addSideGuardMeshes(u.fieldMesh.group)):b==="medal_fever"&&(k=z)}),x.onThrow((b,R)=>{if(!r.is(y.PLAYING))return;const z=b*(d.FIELD_WIDTH/2-.5),j=E.medalThrowCount;let G=0;for(let N=0;N<j&&f.spendMedal();N++){const A=(N-Math.floor(j/2))*.6;u.throwMedal(z+A,R),G++}G>0&&C.emit("medal:thrown",{count:G})}),C.on("quota:reached",()=>{r.is(y.PLAYING)&&(x.disable(),setTimeout(()=>{const b=E.onClearBonusMedals;b>0&&f.addMedals(b),m.clearCurrentStage();const R=m.isLastStageOfPhase;p.stageResultScreen.show(m.currentPhase,m.currentStage,R,g.currentValue,g.targetValue)},500))}),C.on("medal:collected",({count:b})=>{r.is(y.PLAYING)&&p.gameScreen.showFloatingText(`+${b}`)}),C.on("medal:thrown",()=>T.playThrow()),C.on("medal:collected",()=>T.playMedalCollected()),C.on("quota:reached",()=>T.playQuotaReached()),C.on("stage:cleared",()=>T.playStageCleared()),C.on("game:over",()=>T.playGameOver()),C.on("skill:selected",()=>T.playSkillSelected()),C.on("medal:collected",()=>c.shake(.04,.08)),C.on("quota:reached",()=>c.shake(.15,.3)),C.on("stage:cleared",()=>c.shake(.28,.5)),C.on("game:over",()=>c.shake(.5,.8)),C.on("state:changed",({to:b})=>{b===y.PLAYING?T.startBGM():T.stopBGM()}),e.addUpdateFn(b=>{if(r.is(y.PLAYING)){const R=Date.now();F>0&&R>F&&(F=0,u.removeSideGuardWalls(),u.fieldMesh.removeSideGuardMeshes(u.fieldMesh.group)),k>0&&R>k&&(k=0);const z=k>Date.now()?2:1;u.setMedalQuotaMultiplierFn(()=>E.quotaPerMedalMultiplier*z),u.update(b);const j=f.getOwnedActiveItems().map(G=>{const N=Oe(G.id),A=G.id==="side_guard"?Math.max(0,F-Date.now()):G.id==="medal_fever"?Math.max(0,k-Date.now()):0;return{...G,name:N.name,color:N.color,remainingMs:A}});if(p.updateGameHUD(f.currentMedals,g.currentValue,g.targetValue,m.currentPhase,m.currentStage,S.getAll(),j),!D&&f.currentMedals<=0&&!g.isReached&&(D=!0,H=10,x.disable()),D&&H>0){const G=Math.ceil(H);H-=b;const N=Math.ceil(H);N!==G&&N>0&&T.playCountdownTick(),H>0?p.gameScreen.showCountdown(H):(p.gameScreen.hideCountdown(),re())}}h.update(b),c.update(b),l.render(c.camera)});function ne(){t.incrementRuns(),f.reset(),S.clear(),E.reset(),s.reset(),m.reset(),L=0,D=!1,H=0,k=0,F=0,r.transition(y.STAGE_START),Z()}async function Z(){const b=m.currentPhase,R=m.currentStage;D=!1,H=0,p.gameScreen.hideCountdown(),g.startStage(b,R);try{u.physicsWorld.initialized?u.endStage():(K(!0),await u.init(),K(!1))}catch(z){console.error("Field init failed:",z),K(!1);return}u.startStage(b,R),m.startCurrentStage(),x.enable()}function ae(){u.endStage(),r.transition(y.SHOP),p.shopScreen.show(f.money,S.getAll(),f.getOwnedActiveItems())}function oe(){r.transition(y.SKILL_SELECT);const b=w.pickChoices(d.SKILL_CHOICES,E.getOwnedSkills(),Date.now());p.skillSelectScreen.show(b)}function re(){if(L>0){L--,H=0,p.gameScreen.hideCountdown(),x.enable(),D=!1;return}u.endStage();const b=i.calculate(s.snapshot,t);t.updateBest(b.phase,b.stage),r.transition(y.GAME_OVER),r.transition(y.RESULT),p.resultScreen.show(b)}const Y=document.createElement("div");Y.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: rgba(10,10,30,0.8); color: #ffd700;
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,Y.textContent="LOADING...",a.appendChild(Y);function K(b){Y.style.display=b?"flex":"none"}C.on("skill:selected",()=>{L=Math.max(L,E.gameOverShields)}),e.start(),r.transition(y.TITLE),p.titleScreen.show(),console.log("YukiMedal initialized")}Gs().catch(console.error);
