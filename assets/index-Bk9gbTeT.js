var rt=Object.defineProperty;var ot=(o,e,t)=>e in o?rt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>ot(o,typeof e!="symbol"?e+"":e,t);import{M as W,O as lt,B as je,F as Le,S as ie,U as xe,V as $,W as ye,H as be,N as ct,C as dt,a as ce,b as K,A as ht,c as ut,R as mt,d as pt,e as ft,L as gt,f as yt,g as bt,h as Je,i as xt,j as Tt,k as Et,l as vt,m as St,P as Ct,n as wt,o as et,p as Mt,D as ke,q as De,r as _t,s as At,t as It,G as He,u as Rt,v as tt,w as Pt,I as Lt,x as V,y as kt,z as fe,E as w}from"./three-CMChFoeq.js";import{O as ge}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var E=(o=>(o.INIT="INIT",o.TITLE="TITLE",o.STAGE_START="STAGE_START",o.PLAYING="PLAYING",o.STAGE_CLEAR="STAGE_CLEAR",o.SKIP_PROMPT="SKIP_PROMPT",o.GAME_OVER="GAME_OVER",o.SHOP="SHOP",o.SKILL_SELECT="SKILL_SELECT",o.RESULT="RESULT",o))(E||{});class Dt{constructor(){r(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const A=new Dt,Ht=[{from:E.INIT,to:E.TITLE},{from:E.TITLE,to:E.STAGE_START},{from:E.STAGE_START,to:E.PLAYING},{from:E.PLAYING,to:E.STAGE_CLEAR},{from:E.PLAYING,to:E.GAME_OVER},{from:E.STAGE_CLEAR,to:E.STAGE_START},{from:E.STAGE_CLEAR,to:E.SKIP_PROMPT},{from:E.STAGE_CLEAR,to:E.SHOP},{from:E.SKIP_PROMPT,to:E.SHOP},{from:E.SKIP_PROMPT,to:E.STAGE_START},{from:E.SHOP,to:E.SKILL_SELECT},{from:E.SKILL_SELECT,to:E.STAGE_START},{from:E.GAME_OVER,to:E.RESULT},{from:E.RESULT,to:E.TITLE}];class Bt{constructor(){r(this,"current",E.INIT)}get state(){return this.current}canTransition(e){return Ht.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,A.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Gt{constructor(){r(this,"updateFns",[]);r(this,"rafId",null);r(this,"lastTime",0);r(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const Be="yukimedal_save",Nt="yukimedal_best",Te={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Ot{constructor(){r(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(Be);return e?{...Te,...JSON.parse(e)}:{...Te}}catch{return{...Te}}}save(){try{localStorage.setItem(Be,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Nt,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const st={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ne{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ut=new lt(-1,1,1,-1,0,1);class Ft extends je{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const zt=new Ft;class Me{constructor(e){this._mesh=new W(zt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ut)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vt extends ne{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ie?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xe.clone(e.uniforms),this.material=new ie({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Me(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ge extends ne{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,l;this.inverse?(n=0,l=1):(n=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Wt extends ne{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $t{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $);this._width=i.width,this._height=i.height,t=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:be}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vt(st),this.copyPass.material.blending=ct,this.clock=new dt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ge!==void 0&&(n instanceof Ge?i=!0:n instanceof Wt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qt extends ne{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const Qt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ae extends ne{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(a,n,{type:be}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const C=new ye(a,n,{type:be});C.texture.name="UnrealBloomPass.h"+m,C.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(C);const b=new ye(a,n,{type:be});b.texture.name="UnrealBloomPass.v"+m,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),a=Math.round(a/2),n=Math.round(n/2)}const l=Qt;this.highPassUniforms=xe.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ie({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new $(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=st;this.copyUniforms=xe.clone(u.uniforms),this.blendMaterial=new ie({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new ut,this.fsQuad=new Me(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new $(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=ae.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ae.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ie({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ie({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ae.BlurDirectionX=new $(1,0);ae.BlurDirectionY=new $(0,1);const Yt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zt extends ne{constructor(){super();const e=Yt;this.uniforms=xe.clone(e.uniforms),this.material=new mt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Me(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Je?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kt{constructor(e){r(this,"scene");r(this,"renderer");r(this,"composer");r(this,"renderPass");r(this,"bloomPass");r(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new Et,this.scene.background=new ce(1710638),this.scene.fog=new vt(1710638,20,60),this.renderer=new St({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ct,this.renderer.toneMapping=Je,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=wt,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new et(60,t/i,.1,200);this.renderPass=new qt(this.scene,s),this.bloomPass=new ae(new $(t,i),.75,.4,.82);const a=new Zt;this.composer=new $t(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const h={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class Xt{constructor(){r(this,"camera");r(this,"target",new K(0,0,-1));r(this,"basePosition",new K(0,7,16));r(this,"shakeOffset",new K);r(this,"shakeIntensity",0);r(this,"shakeDecay",0);r(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new et(h.CAMERA_FOV,window.innerWidth/window.innerHeight,h.CAMERA_NEAR,h.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class jt{constructor(e){r(this,"ambient");r(this,"dirLight");r(this,"fillLight");r(this,"warmPoint");r(this,"coolPoint");this.ambient=new Mt(4210784,.6),this.dirLight=new ke(16777215,1.2),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new ke(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new De(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new De(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}}class Jt{constructor(e){r(this,"stars");r(this,"starMat");r(this,"grid");r(this,"scene");this.scene=e;const t=2e3,i=new Float32Array(t*3),s=60;for(let n=0;n<t;n++){const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),d=Math.cbrt(Math.random())*s;i[n*3]=d*Math.sin(c)*Math.cos(l),i[n*3+1]=d*Math.sin(c)*Math.sin(l),i[n*3+2]=d*Math.cos(c)}const a=new je;a.setAttribute("position",new _t(i,3)),this.starMat=new At({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0}),this.stars=new It(a,this.starMat),e.add(this.stars),this.grid=new He(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new He(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-4,this.scene.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class es{constructor(){r(this,"world");r(this,"_initialized",!1)}async init(){await ge.init(),this.world=new ge.World({x:0,y:h.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=4,this._initialized=!0}get rapier(){return ge}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new ge.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class ts{constructor(){r(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation();i.position.set(s.x,s.y,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class ss{constructor(){r(this,"handles",new Map);r(this,"dropZoneHandles",new Set);r(this,"eventQueue");r(this,"medalCollectedCallback");r(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e){e.stepWithEvents(this.eventQueue),this.eventQueue.drainCollisionEvents((t,i,s)=>{var c,d;if(!s)return;const a=this.handles.get(t),n=this.handles.get(i);if(a==="drop_zone"&&(n==="medal"||n==="item")||n==="drop_zone"&&(a==="medal"||a==="item")){const u=a==="drop_zone"?i:t,m=a==="drop_zone"?n:a;m==="medal"?(c=this.medalCollectedCallback)==null||c.call(this,u):m==="item"&&((d=this.itemCollectedCallback)==null||d.call(this,u))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class is{constructor(){r(this,"body");r(this,"time",0);r(this,"zBase");r(this,"initialized",!1);this.zBase=-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,h.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/2,h.PUSHER_DEPTH/2);e.createCollider(s,this.body),this.initialized=!0}update(e){this.time+=e;const t=h.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*h.PUSHER_RANGE;if(this.initialized){const a=Math.PI*h.PUSHER_RANGE/t*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/t&&this.body.setTranslation({x:0,y:h.PUSHER_HEIGHT/2,z:this.zBase},!0)}return s}get currentZOffset(){const e=h.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*h.PUSHER_RANGE}get restZ(){return this.zBase}}function as(o){return[o>>16&255,o>>8&255,o&255]}function Ee(o){const e=o.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function Ne(o,e,t,i){return`rgb(${Math.min(255,o+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Oe(o,e,t,i){return`rgb(${Math.max(0,o-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function ns(o,e,t){return`rgb(${o},${e},${t})`}function j(o,e,t,i,s){return`rgba(${Math.min(255,o+i)},${Math.min(255,e+i)},${Math.min(255,t+i)},${s})`}class le{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Rt(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,l=128/2-1,[c,d,u]=as(e),m=ns(c,d,u),C=Ne(c,d,u,65),b=Ne(c,d,u,30),y=Oe(c,d,u,55),f=Oe(c,d,u,80),p=s.createRadialGradient(a-18,n-18,4,a,n,l);p.addColorStop(0,C),p.addColorStop(.45,b),p.addColorStop(.8,m),p.addColorStop(1,y),s.fillStyle=p,s.beginPath(),s.arc(a,n,l,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=5,s.beginPath(),s.arc(a,n,l-5,0,Math.PI*2),s.stroke();const x=s.createRadialGradient(a,n,0,a,n,38);x.addColorStop(0,b),x.addColorStop(.7,m),x.addColorStop(1,y),s.fillStyle=x,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=1.5,s.stroke(),s.strokeStyle=C,s.lineWidth=2.5,s.lineCap="round";for(let M=0;M<6;M++){const v=M*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(v)*7,n+Math.sin(v)*7),s.lineTo(a+Math.cos(v)*28,n+Math.sin(v)*28),s.stroke()}const S=s.createRadialGradient(a-2,n-2,0,a,n,8);S.addColorStop(0,C),S.addColorStop(1,m),s.fillStyle=S,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const g=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return g.addColorStop(0,"rgba(255,255,255,0.5)"),g.addColorStop(.4,"rgba(255,255,255,0.12)"),g.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=g,s.beginPath(),s.arc(a,n,l-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,l]=Ee(e);s.fillStyle=e,s.fillRect(0,0,256,256);const c=s.getImageData(0,0,256,256),d=c.data;for(let u=0;u<d.length;u+=4){const m=(Math.random()-.5)*18;d[u]=Math.max(0,Math.min(255,d[u]+m)),d[u+1]=Math.max(0,Math.min(255,d[u+1]+m)),d[u+2]=Math.max(0,Math.min(255,d[u+2]+m))}s.putImageData(c,0,0),s.strokeStyle=j(a,n,l,80,.13),s.lineWidth=1;for(let u=0;u<=256;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,256),s.stroke();for(let u=0;u<=256;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(256,u),s.stroke();return i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d"),[n,l,c]=Ee(e);a.fillStyle=e,a.fillRect(0,0,256,128);for(let m=0;m<128;m++){const C=.015+Math.random()*.055;a.strokeStyle=j(n,l,c,100,C),a.lineWidth=1,a.beginPath(),a.moveTo(0,m+.5),a.lineTo(256,m+.5),a.stroke()}a.fillStyle=j(n,l,c,120,.35);for(let m=24;m<256;m+=48)a.beginPath(),a.arc(m,8,3,0,Math.PI*2),a.fill();const d=a.createLinearGradient(0,0,0,16);d.addColorStop(0,j(n,l,c,150,.55)),d.addColorStop(1,j(n,l,c,150,0)),a.fillStyle=d,a.fillRect(0,0,256,16);const u=a.createLinearGradient(0,112,0,128);return u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,20,0.5)"),a.fillStyle=u,a.fillRect(0,112,256,16),s})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,l]=Ee(e);s.fillStyle=e,s.fillRect(0,0,256,256);for(let u=0;u<256;u+=48){const m=s.createLinearGradient(0,u,0,u+6);m.addColorStop(0,"rgba(0,0,0,0.4)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(0,u,256,6);const C=s.createLinearGradient(0,u-4,0,u);C.addColorStop(0,j(a,n,l,80,0)),C.addColorStop(1,j(a,n,l,80,.2)),s.fillStyle=C,s.fillRect(0,u-4,256,4)}const c=s.getImageData(0,0,256,256),d=c.data;for(let u=0;u<d.length;u+=4){const m=(Math.random()-.5)*10;d[u]=Math.max(0,Math.min(255,d[u]+m)),d[u+1]=Math.max(0,Math.min(255,d[u+1]+m)),d[u+2]=Math.max(0,Math.min(255,d[u+2]+m))}return s.putImageData(c,0,0),i})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}r(le,"cache",new Map);const rs=new tt(h.MEDAL_RADIUS,h.MEDAL_RADIUS,h.MEDAL_THICKNESS,24),os=new tt(h.MEDAL_RADIUS_LARGE,h.MEDAL_RADIUS_LARGE,h.MEDAL_THICKNESS,24),ls={normal:16766720,double:13691135,large:15245312},cs={normal:1,double:2,large:1};function ds(o){const e=o*100;return e<h.MEDAL_PROB_NORMAL?"normal":e<h.MEDAL_PROB_DOUBLE?"double":"large"}function hs(o){return o==="large"?os:rs}class _e{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Pt({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new W(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}r(_e,"materialCache",new Map);class us{constructor(){r(this,"medals",new Map);r(this,"pendingRemoval",new Set);r(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,l,c,d){if(this.medals.size>=h.MAX_MEDALS_ON_FIELD)return;const u=s.rapier,m=d??ds(Math.random()),C=m==="large"?h.MEDAL_RADIUS_LARGE:h.MEDAL_RADIUS,b=cs[m],y=u.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(1.5).setAngularDamping(3).setCcdEnabled(!0),f=s.createRigidBody(y);c&&f.setLinvel(c,!0);const p=u.ColliderDesc.cylinder(h.MEDAL_THICKNESS/2,C).setRestitution(.05).setFriction(.7).setDensity(h.MEDAL_MASS).setActiveEvents(u.ActiveEvents.COLLISION_EVENTS),x=s.createCollider(p,f);n.registerHandle(x.handle,"medal");const S=_e.createMesh(hs(m),ls[m],!0,!1);S.position.set(e,t,i),l.add(S),a.register(f,S),this.medals.set(x.handle,{body:f,collider:x,mesh:S,type:m,quotaValue:b}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const l=this.medals.get(n);l&&(t.unregister(l.body),i.unregisterHandle(n),s.remove(l.mesh),e.removeRigidBody(l.body),l.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a){let n=0;for(const[l,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),n++);return n}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class ms{constructor(){r(this,"body");r(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=i.RigidBodyDesc.fixed().setTranslation(0,-2,h.FIELD_DEPTH/2+1);this.body=e.createRigidBody(s);const a=i.ColliderDesc.cuboid(h.FIELD_WIDTH/2+1,1,2).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(a,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class ps{constructor(){r(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var H=(o=>(o.Common="Common",o.Rare="Rare",o.Epic="Epic",o.Legendary="Legendary",o))(H||{});const fs={[H.Common]:8947848,[H.Rare]:4474111,[H.Epic]:11141375,[H.Legendary]:16746496},gs=new Lt(.4,0);class ys{constructor(e){r(this,"mesh");r(this,"animationOffset");const t=fs[e],i=new V({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new W(gs,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Ae{constructor(e=Date.now()){r(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class bs{constructor(){r(this,"items",new Map);r(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const l=new Ae(n);for(const c of e){const d=l.nextFloat(-3,h.FIELD_WIDTH/2-1),u=l.nextFloat(-12/4,h.FIELD_DEPTH/4);this.spawnSingle(c,d,2,u,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,l,c){const d=a.rapier,u=d.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),m=a.createRigidBody(u),C=d.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(d.ActiveEvents.COLLISION_EVENTS),b=a.createCollider(C,m);l.registerHandle(b.handle,"item");const y=new ys(e.rarity);y.setPosition(t,i,s),c.add(y.mesh),n.register(m,y.mesh),this.items.set(b.handle,{body:m,collider:b,mesh:y,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const ve=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:H.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:H.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:H.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:H.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:H.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:H.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:H.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:H.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:H.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:H.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function de(o){return ve.find(e=>e.id===o)}const Ue={[H.Common]:60,[H.Rare]:30,[H.Epic]:8,[H.Legendary]:2};class xs{constructor(e){r(this,"rng");this.rng=new Ae(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=ve.filter(l=>l.rarity===s);if(a.length===0){t.push(ve[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(Ue),t=e.map(i=>Ue[i]);return this.rng.weightedPick(e,t)}}function _(o,e,t=!1){const i=new W(o,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}function O(o,e=1){return new V({color:o,emissive:o,emissiveIntensity:e,roughness:.5,metalness:.3})}class B{constructor(e){r(this,"group");r(this,"pusherMesh",null);r(this,"wallMeshes",[]);r(this,"sideGuardMeshes",[]);r(this,"pusherZBase",-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE);this.group=new kt,this.rebuild(e)}rebuild(e){this.group.traverse(t=>{if(t!==this.group&&t instanceof W){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e)}static cabinetMat(e){return new V({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new V({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const t=le.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=fe,t.repeat.set(h.FIELD_WIDTH/2,h.FIELD_DEPTH/2);const i=new V({map:t,color:16777215,roughness:.92,metalness:0}),s=new w(h.FIELD_WIDTH,h.FIELD_HEIGHT,h.FIELD_DEPTH),a=new W(s,i);a.receiveShadow=!0,a.position.y=-.1/2,this.group.add(a)}buildPusher(e){const t=le.getPusherTexture(e.pusherTexBase);t.wrapS=t.wrapT=fe,t.repeat.set(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/1);const i=new V({map:t,color:16777215,roughness:.35,metalness:.65}),s=new w(h.PUSHER_WIDTH,h.PUSHER_HEIGHT,h.PUSHER_DEPTH);this.pusherMesh=new W(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,h.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const t=h.PUSHER_WIDTH,i=h.PUSHER_HEIGHT,s=h.PUSHER_DEPTH,a=_(new w(t+.06,.14,.14),B.brassMat(e));a.position.set(0,-i/2+.07,s/2),this.pusherMesh.add(a);const n=_(new w(t,.07,s),B.brassMat(e));n.position.set(0,i/2+.035,0),this.pusherMesh.add(n);const l=_(new w(t-.2,.06,.06),O(e.secondaryNeon,1.2));l.position.set(0,i/2+.06,s/2-.05),this.pusherMesh.add(l);for(const c of[-1,1]){const d=_(new w(.1,i,.1),B.brassMat(e));d.position.set(c*(t/2-.05),0,s/2),this.pusherMesh.add(d)}}createWalls(e){const s=le.getWallTexture(e.wallTexBase);s.wrapS=s.wrapT=fe;const a=()=>{const S=s.clone();return S.wrapS=S.wrapT=fe,S.needsUpdate=!0,new V({map:S,color:16777215,roughness:.8,metalness:.15})},n=h.OPEN_ZONE_START- -12/2,l=-12/2+n/2,c=a();c.map.repeat.set(n/2,3.5/2);const d=new w(.3,3.5,n),u=new W(d,c);u.position.set(-8/2-.3/2,3.5/2,l),this.group.add(u),this.wallMeshes.push(u);const m=a();m.map.repeat.set(n/2,3.5/2);const C=new w(.3,3.5,n),b=new W(C,m);b.position.set(h.FIELD_WIDTH/2+.3/2,3.5/2,l),this.group.add(b),this.wallMeshes.push(b);const y=a(),f=h.FIELD_WIDTH+.3*2;y.map.repeat.set(f/2,3.5/2);const p=new w(f,3.5,.3),x=new W(p,y);x.position.set(0,3.5/2,-12/2-.3/2),this.group.add(x),this.wallMeshes.push(x)}buildCabinet(e){const t=h.FIELD_WIDTH,i=h.FIELD_DEPTH,s=-i/2,a=i/2,n=_(new w(12,1,17),B.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const l=_(new w(12,.1,.1),B.brassMat(e));l.position.set(0,0,a+2.55),this.group.add(l);const c=1.1,d=7.2,u=13.5,m=t/2+.75,C=-.25;for(const P of[-1,1]){const D=_(new w(c,d,u),B.cabinetMat(e),!0);D.position.set(P*m,d/2-.5,C),this.group.add(D);const N=_(new w(c+.08,.14,u+.08),B.brassMat(e));N.position.set(P*m,d-.5+.07,C),this.group.add(N);const F=_(new w(c+.08,.1,u+.08),B.brassMat(e));F.position.set(P*m,-.02,C),this.group.add(F);const se=_(new w(.06,d*.75,u*.7),new V({color:e.insetColor,roughness:.9,metalness:.1}));se.position.set(P*(m-(c/2+.01)),d/2-.5,C),this.group.add(se);const Re=_(new w(.055,d*.8,.055),O(e.primaryNeon,1.1));Re.position.set(P*(m-c/2-.05),d/2-.5,C),this.group.add(Re);const Pe=_(new w(.05,d*.6,.05),O(e.tertiaryNeon,.9));Pe.position.set(P*(m-c/2-.05),d/2-.5,a+.3),this.group.add(Pe)}const b=10.5,y=1.3,f=s-1.15,p=_(new w(12,b,y),B.cabinetMat(e),!0);p.position.set(0,b/2-.5,f),this.group.add(p);const x=_(new w(12.1,.15,y+.1),B.brassMat(e));x.position.set(0,b-.5+.07,f),this.group.add(x);const S=3.8,g=9.8,M=new V({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.9,roughness:.3,metalness:.5}),v=_(new w(g,S,.08),M);v.position.set(0,b-.5-S/2-.3,f+y/2+.04),this.group.add(v);const U=_(new w(g+.24,S+.24,.06),B.brassMat(e));U.position.set(0,b-.5-S/2-.3,f+y/2),this.group.add(U);const I=b-.5-S/2-.3;for(let P=0;P<4;P++){const D=_(new w(g-.4,.05,.07),O(e.tertiaryNeon,.8));D.position.set(0,I-S/2+.5+P*.75,f+y/2+.06),this.group.add(D)}const q=_(new w(12,.07,.07),O(e.tertiaryNeon,1.2));q.position.set(0,b-.5+.18,f+y/2),this.group.add(q);const Y=_(new w(12,.07,.07),O(e.primaryNeon,.9));Y.position.set(0,3.7,f+y/2),this.group.add(Y);const G=_(new w(12,1.1,4.5),B.cabinetMat(e),!0);G.position.set(0,-.56,a+2.25),this.group.add(G);const Q=_(new w(12,.12,.12),B.brassMat(e));Q.position.set(0,0,a+4.45),this.group.add(Q);const Z=_(new w(12,.06,.06),O(e.secondaryNeon,1));Z.position.set(0,.06,a+4.5),this.group.add(Z);const he=_(new w(12,.5,u),B.cabinetMat(e),!0);he.position.set(0,6.7,C),this.group.add(he);const te=_(new w(12,.07,.07),O(e.primaryNeon,1));te.position.set(0,6.96,a+.1),this.group.add(te);for(const P of[-1,1]){const D=_(new w(.09,.09,i+.5),B.brassMat(e));D.position.set(P*(t/2+.04),.05,C),this.group.add(D)}const ue=_(new w(t+.2,3.6,.18),new V({color:e.pusherHousingColor,roughness:.65,metalness:.5}));ue.position.set(0,1.8,s-.08),this.group.add(ue);const me=_(new w(t-.2,.06,.06),O(e.secondaryNeon,1));me.position.set(0,3.65,s+.01),this.group.add(me);const pe=_(new w(t+.1,.07,.07),O(e.secondaryNeon,1.4));pe.position.set(0,.07,a),this.group.add(pe);const X=_(new w(t+.1,.07,.07),O(e.primaryNeon,1.4));X.position.set(0,.07,s+.04),this.group.add(X);for(const P of[-1,1]){const D=_(new w(.07,.07,i),O(e.primaryNeon,1.2));D.position.set(P*t/2,.07,(s+a)/2),this.group.add(D)}const re=h.OPEN_ZONE_START-s,T=s+re/2;for(const P of[-1,1]){const D=_(new w(.055,3.4,.055),O(e.tertiaryNeon,.9));D.position.set(P*(t/2),1.7,T),this.group.add(D)}const R=new W(new w(100,.2,100),new V({color:e.groundColor,roughness:.95,metalness:0}));R.position.set(0,-.65,0),this.group.add(R)}addSideGuardMeshes(e){const s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(h.FIELD_WIDTH/2+.1),c=new w(.2,2,s),d=_e.createMesh(c,4500223,!1,!1);d.position.set(l,2/2,a),e.add(d),this.sideGuardMeshes.push(d)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class Ts{constructor(e,t,i,s){r(this,"physicsWorld");r(this,"physicsSync");r(this,"collisionHandler");r(this,"pusher");r(this,"medalSpawner");r(this,"itemSpawner");r(this,"dropZone");r(this,"gimmickManager");r(this,"fieldMesh");r(this,"time",0);r(this,"getMedalQuotaMultiplier",()=>1);r(this,"sideGuardActive",!1);r(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new es,this.physicsSync=new ts,this.collisionHandler=new ss,this.pusher=new is,this.medalSpawner=new us,this.itemSpawner=new bs,this.dropZone=new ms,this.gimmickManager=new ps,this.fieldMesh=new B(s)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){le.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),A.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=de(t);s&&(this.quotaManager.addItem(s.quotaValue),A.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(h.FIELD_WIDTH/2,.05,h.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,l=h.OPEN_ZONE_START- -12/2,c=-12/2+l/2,d=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),u=this.physicsWorld.createRigidBody(d);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),u);const m=e.RigidBodyDesc.fixed().setTranslation(h.FIELD_WIDTH/2+n/2,a/2,c),C=this.physicsWorld.createRigidBody(m);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),C);const b=8,y=.5,f=e.RigidBodyDesc.fixed().setTranslation(0,b/2,-12/2-y/2),p=this.physicsWorld.createRigidBody(f);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(h.FIELD_WIDTH/2+y,b/2,y/2),p)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new xs(e*1e3+t).pickRandom(h.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+h.PUSHER_DEPTH-h.PUSHER_RANGE,t=h.FIELD_DEPTH/2-h.MEDAL_RADIUS,i=h.FIELD_WIDTH/2-h.MEDAL_RADIUS;for(let n=0;n<h.INITIAL_FIELD_MEDALS;n++){const l=(Math.random()*2-1)*i,c=e+Math.random()*(t-e),d=h.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(l,d,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+h.MEDAL_RADIUS,a=e-h.MEDAL_RADIUS;for(let n=0;n<h.INITIAL_PUSHER_MEDALS;n++){const l=(Math.random()*2-1)*i,c=s+Math.random()*(a-s),d=h.PUSHER_HEIGHT+.5+Math.random()*1.5;this.medalSpawner.spawn(l,d,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=h.FIELD_DEPTH/2-.5,s=1.5,n=-(8+(-t+1)/2*5);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:4,z:n})}update(e){this.time+=e,this.collisionHandler.processEvents(this.physicsWorld),this.medalSpawner.cleanupFallen(h.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(h.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(l,t/2,a),d=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),d),this.sideGuardBodies.push(d)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class Es{constructor(){r(this,"current",0);r(this,"target",0);r(this,"phase",1);r(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),A.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),A.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*h.STAGES_PER_PHASE+t;return Math.ceil(h.BASE_QUOTA*Math.pow(h.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,A.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&A.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,A.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&A.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class vs{constructor(e){r(this,"phase",1);r(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===h.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(E.PLAYING)}clearCurrentStage(){A.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(E.STAGE_CLEAR),this.stage===h.STAGES_PER_PHASE&&A.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<h.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(E.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Ss(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Cs{constructor(){r(this,"items",[])}addItem(e){const t={instanceId:Ss(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return de(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=de(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class ws{constructor(){r(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});A.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),A.on("item:collected",()=>{this.data.totalItemsCollected++}),A.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Ms{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var k=(o=>(o.Gold="Gold",o.Alchemy="Alchemy",o.Throw="Throw",o.Guard="Guard",o))(k||{}),L=(o=>(o.Common="Common",o.Rare="Rare",o.Epic="Epic",o))(L||{});const it=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:k.Gold,rarity:L.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:k.Gold,rarity:L.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:k.Gold,rarity:L.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:k.Gold,rarity:L.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:k.Gold,rarity:L.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:k.Alchemy,rarity:L.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:k.Alchemy,rarity:L.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:k.Alchemy,rarity:L.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:k.Alchemy,rarity:L.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:k.Alchemy,rarity:L.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:k.Throw,rarity:L.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:k.Throw,rarity:L.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:k.Throw,rarity:L.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:k.Throw,rarity:L.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:k.Throw,rarity:L.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:k.Guard,rarity:L.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:k.Guard,rarity:L.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:k.Guard,rarity:L.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:k.Guard,rarity:L.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:k.Guard,rarity:L.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Fe(o){return it.find(e=>e.id===o)}class _s{constructor(){r(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),A.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Fe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Fe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const ze={[L.Common]:60,[L.Rare]:30,[L.Epic]:10};class As{pickChoices(e,t,i){const s=new Ae(i),a=new Set(t.map(d=>d.definitionId)),n=it.filter(d=>!a.has(d.id));if(n.length===0)return[];const l=[],c=new Set;for(let d=0;d<e&&l.length<n.length;d++){const u=Object.keys(ze),m=u.map(f=>ze[f]),C=s.weightedPick(u,m),b=n.filter(f=>f.rarity===C&&!c.has(f.id));if(b.length===0){const f=n.filter(x=>!c.has(x.id));if(f.length===0)break;const p=f[Math.floor(s.next()*f.length)];l.push(p),c.add(p.id);continue}const y=b[Math.floor(s.next()*b.length)];l.push(y),c.add(y.id)}return l}}const Ie=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function Ve(o){return Ie.find(e=>e.id===o)}class Is{constructor(){r(this,"shopMoney");r(this,"medals");r(this,"sellMultiplier",1);r(this,"ownedActiveItems",new Map);this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*h.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=Ie.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let We=!1;function Rs(){if(We)return;We=!0;const o=document.createElement("style");o.textContent=`
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
  `,document.head.appendChild(o)}class Ps{constructor(e){r(this,"el");r(this,"titleEl");r(this,"onStartCallbacks",[]);r(this,"onSettingsCallbacks",[]);r(this,"hideTimer",null);Rs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,a.textContent="v0.1.0",this.el.appendChild(this.titleEl),this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}applyTheme(e){const t=e==="steampunk"?"titlePulseSteam":"titlePulseCyber";this.titleEl.style.animation=`${t} 3s ease-in-out infinite`}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class Ls{constructor(e){r(this,"el");r(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let $e=!1;function ks(){if($e)return;$e=!0;const o=document.createElement("style");o.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(o)}class Ds{constructor(e){r(this,"container");r(this,"bar");r(this,"label");r(this,"reached",!1);ks(),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Hs{constructor(e){r(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e,t){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const s=document.createTextNode("Phase ");this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${t} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let qe=!1;function Bs(){if(qe)return;qe=!0;const o=document.createElement("style");o.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
  `,document.head.appendChild(o)}class Gs{constructor(e){r(this,"el");r(this,"medalCounter");r(this,"quotaBar");r(this,"phaseIndicator");r(this,"throwHint");r(this,"inventoryPanel");r(this,"activeItemPanel");r(this,"countdownEl");r(this,"onUseActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Ls(this.el),this.quotaBar=new Ds(this.el),this.phaseIndicator=new Hs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
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
    `,this.el.appendChild(this.countdownEl),e.appendChild(this.el),Bs()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="var(--t-primary)"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
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
    `,a.textContent=e,this.el.appendChild(a),setTimeout(()=>{a.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>a.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=de(i.definitionId);if(!s)continue;const a=document.createElement("div");a.style.cssText=`
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
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${l}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let Qe=!1;function Ns(){if(Qe)return;Qe=!0;const o=document.createElement("style");o.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(o)}class Os{constructor(e){r(this,"el");r(this,"onContinueCallbacks",[]);r(this,"onSkipCallbacks",[]);r(this,"titleEl");r(this,"infoEl");r(this,"continueBtn");r(this,"shopBtn");r(this,"hideTimer",null);Ns(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="var(--t-primary)",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="var(--t-success)",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let Ye=!1;function Us(){if(Ye)return;Ye=!0;const o=document.createElement("style");o.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(o)}class Fs{constructor(e){r(this,"el");r(this,"onRetryCallbacks",[]);r(this,"hideTimer",null);Us(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((l,c)=>{const d=document.createElement("div");d.style.cssText=`
        color: var(--t-text-dim);
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,d.textContent=l,a.appendChild(d)});const n=document.createElement("button");n.style.cssText=`
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
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(l=>l())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const zs=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Vs{constructor(e){r(this,"el");r(this,"onSelectCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
      ${zs}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: var(--t-text-bright); font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const l=document.createElement("div");return l.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); line-height: 1.4;",l.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(l),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const Ze=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class Ws{constructor(e){r(this,"el");r(this,"moneyEl");r(this,"inventoryEl");r(this,"onBuyMedalsCallbacks",[]);r(this,"onSellCallbacks",[]);r(this,"onContinueCallbacks",[]);r(this,"onBuyActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="rgba(0,255,136,0.13)"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const l=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const p of l){const x=e>=p.price,S=document.createElement("button");S.style.cssText=`
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
      `,S.innerHTML=`<strong>${p.label}</strong><br>${p.price} G`,x&&(S.addEventListener("mouseenter",()=>{S.style.background="rgba(200,131,26,0.13)",S.style.transform="translateY(-2px)"}),S.addEventListener("mouseleave",()=>{S.style.background="transparent",S.style.transform="translateY(0)"}),S.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(g=>g(p.count))})),n.appendChild(S)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const d=document.createElement("div");d.style.cssText="margin-bottom: 28px;";const u=document.createElement("h3");u.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",u.textContent="ACTIVE ITEMS (buy to use during game)",d.appendChild(u);const m=document.createElement("div");m.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const C=new Map(i.map(p=>[p.id,p.count]));for(const p of Ie){const x=e>=p.price,S=C.get(p.id)??0,g=document.createElement("div");g.style.cssText=`
        padding: 14px;
        ${Ze}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${x?p.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const M=document.createElement("div");M.style.cssText=`color: ${p.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,M.textContent=p.name;const v=document.createElement("div");v.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",v.textContent=p.description;const U=document.createElement("div");U.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",U.textContent=`Owned: ${S}`;const I=document.createElement("button");I.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${x?p.color:"#555"};
        color: ${x?p.color:"#555"};
        cursor: ${x?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,I.textContent=`Buy ${p.price} G`,x&&(I.addEventListener("mouseenter",()=>I.style.background=`${p.color}22`),I.addEventListener("mouseleave",()=>I.style.background="transparent"),g.addEventListener("mouseenter",()=>{g.style.transform="translateY(-2px)",g.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),g.addEventListener("mouseleave",()=>{g.style.transform="translateY(0)",g.style.boxShadow=""}),I.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(q=>q(p.id))})),g.appendChild(M),g.appendChild(v),g.appendChild(U),g.appendChild(I),m.appendChild(g)}d.appendChild(m),this.inventoryEl.appendChild(d);const b=document.createElement("hr");b.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(b);const y=document.createElement("div"),f=document.createElement("h3");if(f.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",f.textContent="YOUR ITEMS (click to sell)",y.appendChild(f),t.length===0){const p=document.createElement("p");p.style.cssText="color: var(--t-text-dim); opacity: 0.5;",p.textContent="No items collected yet.",y.appendChild(p)}else{const p=document.createElement("div");p.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const x of t){const S=de(x.definitionId);if(!S)continue;const g=document.createElement("div");g.style.cssText=`
          width: 160px;
          padding: 14px;
          ${Ze}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,g.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;">${S.name}</div>
          <div style="color:var(--t-text-dim);font-size:0.75rem;">${S.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;margin-top:8px;">Sell: ${S.sellPrice} G</div>
        `,g.addEventListener("mouseenter",()=>{g.style.borderColor="var(--t-primary)",g.style.transform="translateY(-2px)",g.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),g.addEventListener("mouseleave",()=>{g.style.borderColor="var(--t-track-bg)",g.style.transform="translateY(0)",g.style.boxShadow=""}),g.addEventListener("click",()=>{this.onSellCallbacks.forEach(M=>M(x.instanceId))}),p.appendChild(g)}y.appendChild(p)}this.inventoryEl.appendChild(y)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const $s={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.85)",bgOverlayDark:"rgba(10,5,20,0.92)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1710638,fogColor:1710638,cabinetColor:1184298,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:263182,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:1973818,bloomStrength:.75,bloomThreshold:.82,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:4210784,ambientIntensity:.6,fillColor:4210943,fillIntensity:.3,warmPointColor:16765056,warmPointIntensity:1.8,coolPointColor:4482815,coolPointIntensity:1.2}},at={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(20,10,4,0.85)",bgOverlayDark:"rgba(16,8,2,0.92)",primary:"#c8831a",primaryFaint:"rgba(200,131,26,0.3)",secondary:"#d4a227",tertiary:"#b05a1a",success:"#c8831a",textDim:"#b09060",textBright:"#f0ddb0",borderFaint:"rgba(200,131,26,0.25)",panelBg:"rgba(200,131,26,0.07)",trackBg:"#2a1808",barStart:"#804010",barEnd:"#c8831a",shadowGlow:"rgba(200,131,26,0.67)"},scene:{background:1707781,fogColor:1707781,cabinetColor:1970696,brassColor:10516528,brassRoughness:.4,brassMetalness:.75,insetColor:985604,screenBase:1050624,screenEmissive:3151104,groundColor:656898,primaryNeon:13140762,secondaryNeon:13935143,tertiaryNeon:11557402,starColor:13934656,gridColorA:4006920,gridColorB:1970180,pusherHousingColor:1970696,bloomStrength:.95,bloomThreshold:.78,bloomRadius:.5,fieldTexBase:"#221508",pusherTexBase:"#2a1a08",wallTexBase:"#1a1008"},lights:{ambientColor:6307872,ambientIntensity:.7,fillColor:8405024,fillIntensity:.35,warmPointColor:16746528,warmPointIntensity:2,coolPointColor:8405008,coolPointIntensity:.8}},nt={cyber:$s,steampunk:at};let Ke=!1;function qs(){if(Ke)return;Ke=!0;const o=document.createElement("style");o.textContent=`
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
  `,document.head.appendChild(o)}class Qs{constructor(e){r(this,"el");r(this,"onVolumeChangeCallbacks",[]);r(this,"onThemeChangeCallbacks",[]);r(this,"onCloseCallbacks",[]);r(this,"hideTimer",null);r(this,"themeBtns",new Map);qs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",t.appendChild(i);const s=document.createElement("div");s.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",s.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const y of n){const f=document.createElement("div");f.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const p=document.createElement("div");p.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",p.textContent=y.label;const x=document.createElement("input");x.type="range",x.min="0",x.max="1",x.step="0.05",x.value=String(y.value),x.className="settings-slider",x.style.cssText="flex: 1;";const S=document.createElement("div");S.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",S.textContent=`${Math.round(y.value*100)}%`,x.addEventListener("input",()=>{const g=parseFloat(x.value);S.textContent=`${Math.round(g*100)}%`,this.onVolumeChangeCallbacks.forEach(M=>M(y.type,g))}),f.appendChild(p),f.appendChild(x),f.appendChild(S),s.appendChild(f)}t.appendChild(s);const l=document.createElement("hr");l.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(l);const c=document.createElement("div");c.style.cssText="margin-bottom: 32px;";const d=document.createElement("div");d.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",d.textContent="THEME",c.appendChild(d);const u=document.createElement("div");u.style.cssText="display: flex; gap: 12px;";const m=["cyber","steampunk"];for(const y of m){const f=y===e.theme,p=document.createElement("button");p.style.cssText=`
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
      `,p.textContent=nt[y].displayName,p.addEventListener("click",()=>{this.selectTheme(y),this.onThemeChangeCallbacks.forEach(x=>x(y))}),this.themeBtns.set(y,p),u.appendChild(p)}c.appendChild(u),t.appendChild(c);const C=document.createElement("hr");C.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(C);const b=document.createElement("button");b.style.cssText=`
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
    `,b.textContent="CLOSE",b.addEventListener("mouseenter",()=>{b.style.borderColor="var(--t-primary)",b.style.color="var(--t-primary)"}),b.addEventListener("mouseleave",()=>{b.style.borderColor="var(--t-border-faint)",b.style.color="var(--t-text-dim)"}),b.addEventListener("click",()=>{this.onCloseCallbacks.forEach(y=>y())}),t.appendChild(b),this.el.appendChild(t)}selectTheme(e){this.themeBtns.forEach((t,i)=>{const s=i===e;t.style.background=s?"var(--t-primary)":"transparent",t.style.color=s?"var(--t-bg-overlay-dark)":"var(--t-primary)",t.style.fontWeight=s?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}class Ys{constructor(e){r(this,"titleScreen");r(this,"gameScreen");r(this,"stageResultScreen");r(this,"resultScreen");r(this,"skillSelectScreen");r(this,"shopScreen");r(this,"settingsScreen");this.titleScreen=new Ps(e),this.gameScreen=new Gs(e),this.stageResultScreen=new Os(e),this.resultScreen=new Fs(e),this.skillSelectScreen=new Vs(e),this.shopScreen=new Ws(e),this.settingsScreen=new Qs(e),A.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case E.TITLE:this.titleScreen.show();break;case E.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case E.STAGE_CLEAR:break;case E.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,l){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),l&&this.gameScreen.updateActiveItems(l)}}class Zs{constructor(e){r(this,"throwCallbacks",[]);r(this,"enabled",!1);r(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(s=>s(t,i))});r(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(a=>a(i,s))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const z=class z{constructor(){r(this,"ctx",null);r(this,"masterGain",null);r(this,"sfxGain",null);r(this,"bgmGain",null);r(this,"bgmPlaying",!1);r(this,"bgmNextTime",0);r(this,"bgmSchedulerTimer",null);r(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),t=this.getSfxGain(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let d=0;d<i;d++)a[d]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),l.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(l),l.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getSfxGain();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playSkillSelected(){const e=this.getCtx(),t=this.getSfxGain();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*(1-c/a.length);const n=e.createBufferSource();n.buffer=s;const l=e.createGain();l.gain.value=.35,n.connect(l),l.connect(t),n.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getBgmGain(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=z.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=z.BASS_FREQS,n=Math.floor(s/2)%a.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",a[n],i,z.BEAT*1.8,.12);const l=z.MELODY;let c=s%8,d=0;for(const[f,p]of l){if(c>=d&&c<d+p){f>0&&this._scheduleNote(e,t,"square",f,i,z.BEAT*p*.85,.1);break}d+=p}const u=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),m=u.getChannelData(0);for(let f=0;f<m.length;f++)m[f]=(Math.random()*2-1)*(1-f/m.length);const C=e.createBufferSource();C.buffer=u;const b=e.createBiquadFilter();b.type="highpass",b.frequency.value=8e3;const y=e.createGain();y.gain.value=.04,C.connect(b),b.connect(y),y.connect(t),C.start(i)}_playNote(e,t,i,s,a,n,l){const c=e.createOscillator();c.type=i,c.frequency.value=s;const d=e.createGain();d.gain.setValueAtTime(l,a),d.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(d),d.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,l){this._playNote(e,t,i,s,a,n,l)}};r(z,"BPM",110),r(z,"BEAT",60/z.BPM),r(z,"BASS_FREQS",[110,98,82.41,110]),r(z,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let Se=z;const Xe="yukimedal_settings",oe={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"steampunk"},J=class J{constructor(){r(this,"_data");this._data=this._load()}static getInstance(){return J._instance||(J._instance=new J),J._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(Xe);if(e){const t=JSON.parse(e);return{masterVolume:typeof t.masterVolume=="number"?t.masterVolume:oe.masterVolume,bgmVolume:typeof t.bgmVolume=="number"?t.bgmVolume:oe.bgmVolume,sfxVolume:typeof t.sfxVolume=="number"?t.sfxVolume:oe.sfxVolume,theme:t.theme==="cyber"||t.theme==="steampunk"?t.theme:oe.theme}}}catch{}return{...oe}}_save(){try{localStorage.setItem(Xe,JSON.stringify(this._data))}catch{}}};r(J,"_instance",null);let Ce=J;const ee=class ee{constructor(){r(this,"_currentName","steampunk");r(this,"_currentTheme",at);r(this,"_callbacks",[]);r(this,"_styleEl",null)}static getInstance(){return ee._instance||(ee._instance=new ee),ee._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const t=nt[e];if(!t)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=t.ui;this._styleEl.textContent=`:root {
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
}`,this._currentName=e,this._currentTheme=t,this._callbacks.forEach(s=>s(t))}onChange(e){this._callbacks.push(e)}};r(ee,"_instance",null);let we=ee;async function Ks(){const o=Ce.getInstance(),e=we.getInstance();e.applyTheme(o.theme);const t=new Bt,i=new Gt,s=new Ot,a=new ws,n=new Ms,l=document.getElementById("app"),c=document.getElementById("ui-root"),d=new Kt(l),u=new Xt,m=new jt(d),C=new Jt(d.scene);d.setCamera(u.camera);const b=e.currentTheme;d.applySceneTheme(b.scene),m.applyTheme(b.lights),C.applyTheme(b.scene);const y=new Es,f=new vs(t),p=new Cs,x=new _s,S=new As,g=new Is,M=new Ts(d,y,p,b.scene);M.setMedalQuotaMultiplierFn(()=>x.quotaPerMedalMultiplier);const v=new Ys(c),U=new Zs(d.renderer.domElement);v.titleScreen.applyTheme(o.theme);const I=new Se;I.setMasterVolume(o.masterVolume),I.setBgmVolume(o.bgmVolume),I.setSfxVolume(o.sfxVolume),e.onChange(T=>{d.applySceneTheme(T.scene),m.applyTheme(T.lights),C.applyTheme(T.scene),v.titleScreen.applyTheme(T.name),M.physicsWorld.initialized&&M.rebuildFieldMesh(T.scene)}),v.titleScreen.onSettings(()=>{v.settingsScreen.show(o.snapshot)}),v.settingsScreen.onClose(()=>{v.settingsScreen.hide()}),v.settingsScreen.onVolumeChange((T,R)=>{T==="master"?(o.setMasterVolume(R),I.setMasterVolume(R)):T==="bgm"?(o.setBgmVolume(R),I.setBgmVolume(R)):(o.setSfxVolume(R),I.setSfxVolume(R))}),v.settingsScreen.onThemeChange(T=>{o.setTheme(T),e.applyTheme(T)});let q=0,Y=!1,G=0,Q=0,Z=0;v.titleScreen.onStart(()=>{he()}),v.stageResultScreen.onContinue(()=>{v.stageResultScreen.hide(),f.advanceStage(),te()}),v.stageResultScreen.onSkip(()=>{v.stageResultScreen.hide(),f.advancePhase(),ue()}),v.shopScreen.onBuyMedals(T=>{const R=T*h.MEDAL_BUY_PRICE;g.buyMedals(T)?v.shopScreen.show(g.money,p.getAll(),g.getOwnedActiveItems()):console.log(`Not enough shop money (need ${R} G, have ${g.money} G)`)}),v.shopScreen.onSell(T=>{const R=g.sellItem(T,p);a.addShopMoney(R),v.shopScreen.show(g.money,p.getAll(),g.getOwnedActiveItems())}),v.shopScreen.onBuyActive(T=>{g.buyActiveItem(T)&&v.shopScreen.show(g.money,p.getAll(),g.getOwnedActiveItems())}),v.shopScreen.onContinue(()=>{v.shopScreen.hide(),me()}),v.skillSelectScreen.onSelect(T=>{x.addSkill(T,f.currentPhase),g.setSellMultiplier(x.itemSellMultiplier),v.skillSelectScreen.hide(),t.transition(E.STAGE_START),te()}),v.resultScreen.onRetry(()=>{v.resultScreen.hide(),t.transition(E.TITLE),v.titleScreen.show()}),v.gameScreen.onUseActive(T=>{if(!t.is(E.PLAYING)||!g.useActiveItem(T))return;const R=Ve(T);if(!R)return;const P=Date.now()+R.durationMs;T==="side_guard"?(Z=P,M.addSideGuardWalls(),M.fieldMesh.addSideGuardMeshes(M.fieldMesh.group)):T==="medal_fever"&&(Q=P)}),U.onThrow((T,R)=>{if(!t.is(E.PLAYING))return;const P=T*(h.FIELD_WIDTH/2-.5),D=x.medalThrowCount;let N=0;for(let F=0;F<D&&g.spendMedal();F++){const se=(F-Math.floor(D/2))*.6;M.throwMedal(P+se,R),N++}N>0&&A.emit("medal:thrown",{count:N})}),A.on("quota:reached",()=>{t.is(E.PLAYING)&&(U.disable(),setTimeout(()=>{const T=x.onClearBonusMedals;T>0&&g.addMedals(T),f.clearCurrentStage();const R=f.isLastStageOfPhase;v.stageResultScreen.show(f.currentPhase,f.currentStage,R,y.currentValue,y.targetValue)},500))}),A.on("medal:collected",({count:T})=>{t.is(E.PLAYING)&&v.gameScreen.showFloatingText(`+${T}`)}),A.on("medal:thrown",()=>I.playThrow()),A.on("medal:collected",()=>I.playMedalCollected()),A.on("quota:reached",()=>I.playQuotaReached()),A.on("stage:cleared",()=>I.playStageCleared()),A.on("game:over",()=>I.playGameOver()),A.on("skill:selected",()=>I.playSkillSelected()),A.on("medal:collected",()=>u.shake(.04,.08)),A.on("quota:reached",()=>u.shake(.15,.3)),A.on("stage:cleared",()=>u.shake(.28,.5)),A.on("game:over",()=>u.shake(.5,.8)),A.on("state:changed",({to:T})=>{T===E.PLAYING?I.startBGM():I.stopBGM()}),i.addUpdateFn(T=>{if(t.is(E.PLAYING)){const R=Date.now();Z>0&&R>Z&&(Z=0,M.removeSideGuardWalls(),M.fieldMesh.removeSideGuardMeshes(M.fieldMesh.group)),Q>0&&R>Q&&(Q=0);const P=Q>Date.now()?2:1;M.setMedalQuotaMultiplierFn(()=>x.quotaPerMedalMultiplier*P),M.update(T);const D=g.getOwnedActiveItems().map(N=>{const F=Ve(N.id),se=N.id==="side_guard"?Math.max(0,Z-Date.now()):N.id==="medal_fever"?Math.max(0,Q-Date.now()):0;return{...N,name:F.name,color:F.color,remainingMs:se}});if(v.updateGameHUD(g.currentMedals,y.currentValue,y.targetValue,f.currentPhase,f.currentStage,p.getAll(),D),!Y&&g.currentMedals<=0&&!y.isReached&&(Y=!0,G=10,U.disable()),Y&&G>0){const N=Math.ceil(G);G-=T;const F=Math.ceil(G);F!==N&&F>0&&I.playCountdownTick(),G>0?v.gameScreen.showCountdown(G):(v.gameScreen.hideCountdown(),pe())}}C.update(T),u.update(T),d.render(u.camera)});function he(){s.incrementRuns(),g.reset(),p.clear(),x.reset(),a.reset(),f.reset(),q=0,Y=!1,G=0,Q=0,Z=0,t.transition(E.STAGE_START),te()}async function te(){const T=f.currentPhase,R=f.currentStage;Y=!1,G=0,v.gameScreen.hideCountdown(),y.startStage(T,R);try{M.physicsWorld.initialized?M.endStage():(re(!0),await M.init(),re(!1))}catch(P){console.error("Field init failed:",P),re(!1);return}M.startStage(T,R),f.startCurrentStage(),U.enable()}function ue(){M.endStage(),t.transition(E.SHOP),v.shopScreen.show(g.money,p.getAll(),g.getOwnedActiveItems())}function me(){t.transition(E.SKILL_SELECT);const T=S.pickChoices(h.SKILL_CHOICES,x.getOwnedSkills(),Date.now());v.skillSelectScreen.show(T)}function pe(){if(q>0){q--,G=0,v.gameScreen.hideCountdown(),U.enable(),Y=!1;return}M.endStage();const T=n.calculate(a.snapshot,s);s.updateBest(T.phase,T.stage),t.transition(E.GAME_OVER),t.transition(E.RESULT),v.resultScreen.show(T)}const X=document.createElement("div");X.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,X.textContent="LOADING...",c.appendChild(X);function re(T){X.style.display=T?"flex":"none"}A.on("skill:selected",()=>{q=Math.max(q,x.gameOverShields)}),i.start(),t.transition(E.TITLE),v.titleScreen.show(),console.log("YukiMedal initialized")}Ks().catch(console.error);
