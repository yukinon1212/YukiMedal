var Ne=Object.defineProperty;var Ue=(r,e,t)=>e in r?Ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>Ue(r,typeof e!="symbol"?e+"":e,t);import{M as k,O as Fe,B as Ie,F as ue,S as W,U as te,V as H,W as X,H as J,N as ze,C as We,a as Q,b as F,A as Ve,c as $e,R as Qe,d as qe,e as Ye,L as Ze,f as Ke,g as je,h as Re,i as Xe,j as Je,k as et,l as tt,m as st,P as it,n as at,o as Pe,p as nt,D as pe,q as me,r as ot,s as rt,t as lt,G as ct,u as dt,v as Le,w as ht,I as ut,x as z,y as pt,z as K,E as G}from"./three-CMChFoeq.js";import{O as j}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var g=(r=>(r.INIT="INIT",r.TITLE="TITLE",r.STAGE_START="STAGE_START",r.PLAYING="PLAYING",r.STAGE_CLEAR="STAGE_CLEAR",r.SKIP_PROMPT="SKIP_PROMPT",r.GAME_OVER="GAME_OVER",r.SHOP="SHOP",r.SKILL_SELECT="SKILL_SELECT",r.RESULT="RESULT",r))(g||{});class mt{constructor(){o(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const x=new mt,ft=[{from:g.INIT,to:g.TITLE},{from:g.TITLE,to:g.STAGE_START},{from:g.STAGE_START,to:g.PLAYING},{from:g.PLAYING,to:g.STAGE_CLEAR},{from:g.PLAYING,to:g.GAME_OVER},{from:g.STAGE_CLEAR,to:g.STAGE_START},{from:g.STAGE_CLEAR,to:g.SKIP_PROMPT},{from:g.STAGE_CLEAR,to:g.SHOP},{from:g.SKIP_PROMPT,to:g.SHOP},{from:g.SKIP_PROMPT,to:g.STAGE_START},{from:g.SHOP,to:g.SKILL_SELECT},{from:g.SKILL_SELECT,to:g.STAGE_START},{from:g.GAME_OVER,to:g.RESULT},{from:g.RESULT,to:g.TITLE}];class gt{constructor(){o(this,"current",g.INIT)}get state(){return this.current}canTransition(e){return ft.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,x.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class yt{constructor(){o(this,"updateFns",[]);o(this,"rafId",null);o(this,"lastTime",0);o(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const fe="yukimedal_save",Et="yukimedal_best",ne={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class St{constructor(){o(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(fe);return e?{...ne,...JSON.parse(e)}:{...ne}}catch{return{...ne}}}save(){try{localStorage.setItem(fe,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Et,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const De={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ${constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bt=new Fe(-1,1,1,-1,0,1);class Tt extends Ie{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const Mt=new Tt;class le{constructor(e){this._mesh=new k(Mt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xt extends ${constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof W?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=te.clone(e.uniforms),this.material=new W({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new le(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ge extends ${constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,l;this.inverse?(n=0,l=1):(n=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class wt extends ${constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new H);this._width=i.width,this._height=i.height,t=new X(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:J}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xt(De),this.copyPass.material.blending=ze,this.clock=new We}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ge!==void 0&&(n instanceof ge?i=!0:n instanceof wt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ct extends ${constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Q}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const _t={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class V extends ${constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new H(e.x,e.y):new H(256,256),this.clearColor=new Q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new X(a,n,{type:J}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const T=new X(a,n,{type:J});T.texture.name="UnrealBloomPass.h"+m,T.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(T);const S=new X(a,n,{type:J});S.texture.name="UnrealBloomPass.v"+m,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),a=Math.round(a/2),n=Math.round(n/2)}const l=_t;this.highPassUniforms=te.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new H(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const y=De;this.copyUniforms=te.clone(y.uniforms),this.blendMaterial=new W({uniforms:this.copyUniforms,vertexShader:y.vertexShader,fragmentShader:y.fragmentShader,blending:Ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Q,this.oldClearAlpha=1,this.basic=new $e,this.fsQuad=new le(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new H(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=V.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=V.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new W({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}V.BlurDirectionX=new H(1,0);V.BlurDirectionY=new H(0,1);const At={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class It extends ${constructor(){super();const e=At;this.uniforms=te.clone(e.uniforms),this.material=new Qe({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new le(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ze?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ke?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===je?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Re?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xe?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Je&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rt{constructor(e){o(this,"scene");o(this,"renderer");o(this,"composer");o(this,"renderPass");o(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new et,this.scene.background=new Q(1710638),this.scene.fog=new tt(1710638,20,60),this.renderer=new st({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=it,this.renderer.toneMapping=Re,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=at,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new Pe(60,t/i,.1,200);this.renderPass=new Ct(this.scene,s);const a=new V(new H(t,i),.75,.4,.82),n=new It;this.composer=new vt(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(a),this.composer.addPass(n),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const d={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:60,MEDAL_PROB_DOUBLE:85,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class Pt{constructor(){o(this,"camera");o(this,"target",new F(0,0,-1));o(this,"basePosition",new F(0,7,16));o(this,"shakeOffset",new F);o(this,"shakeIntensity",0);o(this,"shakeDecay",0);o(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new Pe(d.CAMERA_FOV,window.innerWidth/window.innerHeight,d.CAMERA_NEAR,d.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class Lt{constructor(e){o(this,"ambient");o(this,"dirLight");o(this,"fillLight");o(this,"warmPoint");o(this,"coolPoint");this.ambient=new nt(4210784,.6),this.dirLight=new pe(16777215,1.2),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new pe(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new me(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new me(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint)}}class Dt{constructor(e){o(this,"stars");o(this,"grid");const i=new Float32Array(6e3),s=60;for(let l=0;l<2e3;l++){const c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),y=Math.cbrt(Math.random())*s;i[l*3]=y*Math.sin(h)*Math.cos(c),i[l*3+1]=y*Math.sin(h)*Math.sin(c),i[l*3+2]=y*Math.cos(h)}const a=new Ie;a.setAttribute("position",new ot(i,3));const n=new rt({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0});this.stars=new lt(a,n),e.add(this.stars),this.grid=new ct(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class kt{constructor(){o(this,"world");o(this,"_initialized",!1)}async init(){await j.init(),this.world=new j.World({x:0,y:d.GRAVITY,z:0}),this._initialized=!0}get rapier(){return j}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new j.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class Ht{constructor(){o(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation();i.position.set(s.x,s.y,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class Ot{constructor(){o(this,"handles",new Map);o(this,"dropZoneHandles",new Set);o(this,"eventQueue");o(this,"medalCollectedCallback");o(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e){e.stepWithEvents(this.eventQueue),this.eventQueue.drainCollisionEvents((t,i,s)=>{var c,h;if(!s)return;const a=this.handles.get(t),n=this.handles.get(i);if(a==="drop_zone"&&(n==="medal"||n==="item")||n==="drop_zone"&&(a==="medal"||a==="item")){const y=a==="drop_zone"?i:t,m=a==="drop_zone"?n:a;m==="medal"?(c=this.medalCollectedCallback)==null||c.call(this,y):m==="item"&&((h=this.itemCollectedCallback)==null||h.call(this,y))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class Bt{constructor(){o(this,"body");o(this,"time",0);o(this,"zBase");o(this,"initialized",!1);this.zBase=-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicPositionBased().setTranslation(0,d.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/2,d.PUSHER_DEPTH/2);e.createCollider(s,this.body),this.initialized=!0}update(e){this.time+=e;const t=d.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*d.PUSHER_RANGE;if(this.initialized){const a=this.zBase+s;this.body.setNextKinematicTranslation({x:0,y:d.PUSHER_HEIGHT/2,z:a})}return s}get currentZOffset(){const e=d.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*d.PUSHER_RANGE}get restZ(){return this.zBase}}function Gt(r){return[r>>16&255,r>>8&255,r&255]}function ye(r,e,t,i){return`rgb(${Math.min(255,r+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Ee(r,e,t,i){return`rgb(${Math.max(0,r-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function Nt(r,e,t){return`rgb(${r},${e},${t})`}class ee{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new dt(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,l=128/2-1,[c,h,y]=Gt(e),m=Nt(c,h,y),T=ye(c,h,y,65),S=ye(c,h,y,30),w=Ee(c,h,y,55),f=Ee(c,h,y,80),u=s.createRadialGradient(a-18,n-18,4,a,n,l);u.addColorStop(0,T),u.addColorStop(.45,S),u.addColorStop(.8,m),u.addColorStop(1,w),s.fillStyle=u,s.beginPath(),s.arc(a,n,l,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=5,s.beginPath(),s.arc(a,n,l-5,0,Math.PI*2),s.stroke();const p=s.createRadialGradient(a,n,0,a,n,38);p.addColorStop(0,S),p.addColorStop(.7,m),p.addColorStop(1,w),s.fillStyle=p,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=f,s.lineWidth=1.5,s.stroke(),s.strokeStyle=T,s.lineWidth=2.5,s.lineCap="round";for(let R=0;R<6;R++){const P=R*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(P)*7,n+Math.sin(P)*7),s.lineTo(a+Math.cos(P)*28,n+Math.sin(P)*28),s.stroke()}const M=s.createRadialGradient(a-2,n-2,0,a,n,8);M.addColorStop(0,T),M.addColorStop(1,m),s.fillStyle=M,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const E=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.4,"rgba(255,255,255,0.12)"),E.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=E,s.beginPath(),s.arc(a,n,l-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(){return this.get("field",()=>{const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d");i.fillStyle="#2a2a4e",i.fillRect(0,0,256,256);const s=i.getImageData(0,0,256,256),a=s.data;for(let n=0;n<a.length;n+=4){const l=(Math.random()-.5)*18;a[n]=Math.max(0,Math.min(255,a[n]+l)),a[n+1]=Math.max(0,Math.min(255,a[n+1]+l)),a[n+2]=Math.max(0,Math.min(255,a[n+2]+l))}i.putImageData(s,0,0),i.strokeStyle="rgba(100,100,180,0.13)",i.lineWidth=1;for(let n=0;n<=256;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n,256),i.stroke();for(let n=0;n<=256;n+=32)i.beginPath(),i.moveTo(0,n),i.lineTo(256,n),i.stroke();return t})}static getPusherTexture(){return this.get("pusher",()=>{const i=document.createElement("canvas");i.width=256,i.height=128;const s=i.getContext("2d");s.fillStyle="#3a3a6e",s.fillRect(0,0,256,128);for(let l=0;l<128;l++){const c=.015+Math.random()*.055;s.strokeStyle=`rgba(180,180,230,${c})`,s.lineWidth=1,s.beginPath(),s.moveTo(0,l+.5),s.lineTo(256,l+.5),s.stroke()}s.fillStyle="rgba(200,200,255,0.35)";for(let l=24;l<256;l+=48)s.beginPath(),s.arc(l,8,3,0,Math.PI*2),s.fill();const a=s.createLinearGradient(0,0,0,16);a.addColorStop(0,"rgba(220,220,255,0.55)"),a.addColorStop(1,"rgba(220,220,255,0)"),s.fillStyle=a,s.fillRect(0,0,256,16);const n=s.createLinearGradient(0,112,0,128);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,20,0.5)"),s.fillStyle=n,s.fillRect(0,112,256,16),i})}static getWallTexture(){return this.get("wall",()=>{const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d");i.fillStyle="#1a1a3e",i.fillRect(0,0,256,256);for(let n=0;n<256;n+=48){const l=i.createLinearGradient(0,n,0,n+6);l.addColorStop(0,"rgba(0,0,0,0.4)"),l.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=l,i.fillRect(0,n,256,6);const c=i.createLinearGradient(0,n-4,0,n);c.addColorStop(0,"rgba(100,100,200,0)"),c.addColorStop(1,"rgba(100,100,200,0.2)"),i.fillStyle=c,i.fillRect(0,n-4,256,4)}const s=i.getImageData(0,0,256,256),a=s.data;for(let n=0;n<a.length;n+=4){const l=(Math.random()-.5)*10;a[n]=Math.max(0,Math.min(255,a[n]+l)),a[n+1]=Math.max(0,Math.min(255,a[n+1]+l)),a[n+2]=Math.max(0,Math.min(255,a[n+2]+l))}return i.putImageData(s,0,0),t})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}o(ee,"cache",new Map);const Ut=new Le(d.MEDAL_RADIUS,d.MEDAL_RADIUS,d.MEDAL_THICKNESS,24),Ft=new Le(d.MEDAL_RADIUS_LARGE,d.MEDAL_RADIUS_LARGE,d.MEDAL_THICKNESS,24),zt={normal:16766720,double:13691135,large:15245312},Wt={normal:1,double:2,large:1};function Vt(r){const e=r*100;return e<d.MEDAL_PROB_NORMAL?"normal":e<d.MEDAL_PROB_DOUBLE?"double":"large"}function $t(r){return r==="large"?Ft:Ut}class ce{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new ht({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new k(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}o(ce,"materialCache",new Map);class Qt{constructor(){o(this,"medals",new Map);o(this,"pendingRemoval",new Set);o(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,l,c,h){if(this.medals.size>=d.MAX_MEDALS_ON_FIELD)return;const y=s.rapier,m=h??Vt(Math.random()),T=m==="large"?d.MEDAL_RADIUS_LARGE:d.MEDAL_RADIUS,S=Wt[m],w=y.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(.5).setAngularDamping(.8),f=s.createRigidBody(w);c&&f.setLinvel(c,!0);const u=y.ColliderDesc.cylinder(d.MEDAL_THICKNESS/2,T).setRestitution(.3).setFriction(.6).setDensity(d.MEDAL_MASS).setActiveEvents(y.ActiveEvents.COLLISION_EVENTS),p=s.createCollider(u,f);n.registerHandle(p.handle,"medal");const M=ce.createMesh($t(m),zt[m],!0,!1);M.position.set(e,t,i),l.add(M),a.register(f,M),this.medals.set(p.handle,{body:f,collider:p,mesh:M,type:m,quotaValue:S}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const l=this.medals.get(n);l&&(t.unregister(l.body),i.unregisterHandle(n),s.remove(l.mesh),e.removeRigidBody(l.body),l.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a){let n=0;for(const[l,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(l)&&(this.pendingRemoval.add(l),n++);return n}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class qt{constructor(){o(this,"body");o(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=i.RigidBodyDesc.fixed().setTranslation(0,-2,d.FIELD_DEPTH/2+1);this.body=e.createRigidBody(s);const a=i.ColliderDesc.cuboid(d.FIELD_WIDTH/2+1,1,2).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(a,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class Yt{constructor(){o(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var _=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r.Legendary="Legendary",r))(_||{});const Zt={[_.Common]:8947848,[_.Rare]:4474111,[_.Epic]:11141375,[_.Legendary]:16746496},Kt=new ut(.4,0);class jt{constructor(e){o(this,"mesh");o(this,"animationOffset");const t=Zt[e],i=new z({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new k(Kt,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class de{constructor(e=Date.now()){o(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class Xt{constructor(){o(this,"items",new Map);o(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const l=new de(n);for(const c of e){const h=l.nextFloat(-3,d.FIELD_WIDTH/2-1),y=l.nextFloat(-12/4,d.FIELD_DEPTH/4);this.spawnSingle(c,h,2,y,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,l,c){const h=a.rapier,y=h.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),m=a.createRigidBody(y),T=h.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(h.ActiveEvents.COLLISION_EVENTS),S=a.createCollider(T,m);l.registerHandle(S.handle,"item");const w=new jt(e.rarity);w.setPosition(t,i,s),c.add(w.mesh),n.register(m,w.mesh),this.items.set(S.handle,{body:m,collider:S,mesh:w,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const oe=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:_.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:_.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:_.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:_.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:_.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:_.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:_.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:_.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:_.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:_.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function q(r){return oe.find(e=>e.id===r)}const Se={[_.Common]:60,[_.Rare]:30,[_.Epic]:8,[_.Legendary]:2};class Jt{constructor(e){o(this,"rng");this.rng=new de(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=oe.filter(l=>l.rarity===s);if(a.length===0){t.push(oe[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(Se),t=e.map(i=>Se[i]);return this.rng.weightedPick(e,t)}}class es{constructor(){o(this,"group");o(this,"pusherMesh");o(this,"fieldSurface");o(this,"wallMeshes",[]);o(this,"sideGuardMeshes",[]);o(this,"pusherZBase",-12/2+d.PUSHER_DEPTH/2-d.PUSHER_RANGE);this.group=new pt;const e=ee.getFieldTexture();e.wrapS=e.wrapT=K,e.repeat.set(d.FIELD_WIDTH/2,d.FIELD_DEPTH/2);const t=new z({map:e,color:16777215,roughness:.92,metalness:0}),i=new G(d.FIELD_WIDTH,d.FIELD_HEIGHT,d.FIELD_DEPTH);this.fieldSurface=new k(i,t),this.fieldSurface.receiveShadow=!0,this.fieldSurface.position.y=-.1/2,this.group.add(this.fieldSurface);const s=ee.getPusherTexture();s.wrapS=s.wrapT=K,s.repeat.set(d.PUSHER_WIDTH/2,d.PUSHER_HEIGHT/1);const a=new z({map:s,color:16777215,roughness:.45,metalness:.5}),n=new G(d.PUSHER_WIDTH,d.PUSHER_HEIGHT,d.PUSHER_DEPTH);this.pusherMesh=new k(n,a),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,d.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh),this.createWalls(),this.addNeonEdges()}addNeonEdges(){const e=new G(8.1,.04,.04),t=new z({color:65450,emissive:65450,emissiveIntensity:1}),i=new k(e,t);i.position.set(0,.02,d.FIELD_DEPTH/2),this.group.add(i);const s=new G(.04,3.5,6.5),a=new z({color:4482815,emissive:4482815,emissiveIntensity:1}),n=new k(s,a);n.position.set(-8/2,1.75,-12/2+6.5/2),this.group.add(n);const l=new G(.04,3.5,6.5),c=new z({color:4482815,emissive:4482815,emissiveIntensity:1}),h=new k(l,c);h.position.set(d.FIELD_WIDTH/2,1.75,-12/2+6.5/2),this.group.add(h)}createWalls(){const i=ee.getWallTexture();i.wrapS=i.wrapT=K;const s=()=>{const p=i.clone();return p.wrapS=p.wrapT=K,p.needsUpdate=!0,new z({map:p,color:16777215,roughness:.8,metalness:.15})},a=d.OPEN_ZONE_START- -12/2,n=-12/2+a/2,l=s();l.map.repeat.set(a/2,3.5/2);const c=new G(.3,3.5,a),h=new k(c,l);h.position.set(-8/2-.3/2,3.5/2,n),this.group.add(h),this.wallMeshes.push(h);const y=s();y.map.repeat.set(a/2,3.5/2);const m=new G(.3,3.5,a),T=new k(m,y);T.position.set(d.FIELD_WIDTH/2+.3/2,3.5/2,n),this.group.add(T),this.wallMeshes.push(T);const S=s(),w=d.FIELD_WIDTH+.3*2;S.map.repeat.set(w/2,3.5/2);const f=new G(w,3.5,.3),u=new k(f,S);u.position.set(0,3.5/2,-12/2-.3/2),this.group.add(u),this.wallMeshes.push(u)}addSideGuardMeshes(e){const s=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,a=d.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(d.FIELD_WIDTH/2+.1),c=new G(.2,2,s),h=ce.createMesh(c,4500223,!1,!1);h.position.set(l,2/2,a),e.add(h),this.sideGuardMeshes.push(h)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class ts{constructor(e,t,i){o(this,"physicsWorld");o(this,"physicsSync");o(this,"collisionHandler");o(this,"pusher");o(this,"medalSpawner");o(this,"itemSpawner");o(this,"dropZone");o(this,"gimmickManager");o(this,"fieldMesh");o(this,"time",0);o(this,"getMedalQuotaMultiplier",()=>1);o(this,"sideGuardActive",!1);o(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new kt,this.physicsSync=new Ht,this.collisionHandler=new Ot,this.pusher=new Bt,this.medalSpawner=new Qt,this.itemSpawner=new Xt,this.dropZone=new qt,this.gimmickManager=new Yt,this.fieldMesh=new es}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),x.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=q(t);s&&(this.quotaManager.addItem(s.quotaValue),x.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(d.FIELD_WIDTH/2,.05,d.FIELD_DEPTH/2).setFriction(.6).setRestitution(.2);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,l=d.OPEN_ZONE_START- -12/2,c=-12/2+l/2,h=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),y=this.physicsWorld.createRigidBody(h);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),y);const m=e.RigidBodyDesc.fixed().setTranslation(d.FIELD_WIDTH/2+n/2,a/2,c),T=this.physicsWorld.createRigidBody(m);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,l/2),T);const S=e.RigidBodyDesc.fixed().setTranslation(0,a/2,-12/2-n/2),w=this.physicsWorld.createRigidBody(S);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(d.FIELD_WIDTH/2+n,a/2,n/2),w)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new Jt(e*1e3+t).pickRandom(d.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+d.PUSHER_DEPTH-d.PUSHER_RANGE,t=d.FIELD_DEPTH/2-d.MEDAL_RADIUS,i=d.FIELD_WIDTH/2-d.MEDAL_RADIUS;for(let n=0;n<d.INITIAL_FIELD_MEDALS;n++){const l=(Math.random()*2-1)*i,c=e+Math.random()*(t-e),h=d.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+d.MEDAL_RADIUS,a=e-d.MEDAL_RADIUS;for(let n=0;n<d.INITIAL_PUSHER_MEDALS;n++){const l=(Math.random()*2-1)*i,c=s+Math.random()*(a-s),h=d.PUSHER_HEIGHT+.5+Math.random()*1.5;this.medalSpawner.spawn(l,h,c,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=d.FIELD_DEPTH/2-.5,s=1.5,n=-(11+(-t+1)/2*8);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:5,z:n})}update(e){this.time+=e,this.collisionHandler.processEvents(this.physicsWorld),this.medalSpawner.cleanupFallen(d.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const t=this.pusher.update(e);this.fieldMesh.updatePusher(t),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=d.FIELD_DEPTH/2-d.OPEN_ZONE_START,a=d.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const l=n*(d.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(l,t/2,a),h=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),h),this.sideGuardBodies.push(h)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class ss{constructor(){o(this,"current",0);o(this,"target",0);o(this,"phase",1);o(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),x.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),x.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*d.STAGES_PER_PHASE+t;return Math.ceil(d.BASE_QUOTA*Math.pow(d.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,x.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&x.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,x.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&x.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class is{constructor(e){o(this,"phase",1);o(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===d.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(g.PLAYING)}clearCurrentStage(){x.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(g.STAGE_CLEAR),this.stage===d.STAGES_PER_PHASE&&x.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<d.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(g.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function as(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class ns{constructor(){o(this,"items",[])}addItem(e){const t={instanceId:as(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return q(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=q(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class os{constructor(){o(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});x.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),x.on("item:collected",()=>{this.data.totalItemsCollected++}),x.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class rs{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var C=(r=>(r.Gold="Gold",r.Alchemy="Alchemy",r.Throw="Throw",r.Guard="Guard",r))(C||{}),v=(r=>(r.Common="Common",r.Rare="Rare",r.Epic="Epic",r))(v||{});const ke=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:C.Gold,rarity:v.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:C.Gold,rarity:v.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:C.Gold,rarity:v.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:C.Gold,rarity:v.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:C.Gold,rarity:v.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:C.Alchemy,rarity:v.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:C.Alchemy,rarity:v.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:C.Alchemy,rarity:v.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:C.Alchemy,rarity:v.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:C.Alchemy,rarity:v.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:C.Throw,rarity:v.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:C.Throw,rarity:v.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:C.Throw,rarity:v.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:C.Throw,rarity:v.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:C.Throw,rarity:v.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:C.Guard,rarity:v.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:C.Guard,rarity:v.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:C.Guard,rarity:v.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:C.Guard,rarity:v.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:C.Guard,rarity:v.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function be(r){return ke.find(e=>e.id===r)}class ls{constructor(){o(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),x.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=be(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=be(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const Te={[v.Common]:60,[v.Rare]:30,[v.Epic]:10};class cs{pickChoices(e,t,i){const s=new de(i),a=new Set(t.map(h=>h.definitionId)),n=ke.filter(h=>!a.has(h.id));if(n.length===0)return[];const l=[],c=new Set;for(let h=0;h<e&&l.length<n.length;h++){const y=Object.keys(Te),m=y.map(f=>Te[f]),T=s.weightedPick(y,m),S=n.filter(f=>f.rarity===T&&!c.has(f.id));if(S.length===0){const f=n.filter(p=>!c.has(p.id));if(f.length===0)break;const u=f[Math.floor(s.next()*f.length)];l.push(u),c.add(u.id);continue}const w=S[Math.floor(s.next()*S.length)];l.push(w),c.add(w.id)}return l}}const he=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"}];function Me(r){return he.find(e=>e.id===r)}class ds{constructor(){o(this,"shopMoney");o(this,"medals");o(this,"sellMultiplier",1);o(this,"ownedActiveItems",new Map);this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*d.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=he.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=d.INITIAL_SHOP_MONEY,this.medals=d.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let xe=!1;function hs(){if(xe)return;xe=!0;const r=document.createElement("style");r.textContent=`
    @keyframes titlePulse {
      0%, 100% { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd70066; }
      50% { text-shadow: 0 0 35px #ffd700, 0 0 70px #ffd70099, 0 0 100px #ffd70033; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `,document.head.appendChild(r)}class us{constructor(e){o(this,"el");o(this,"onStartCallbacks",[]);hs(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
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
    `,s.textContent="START",s.addEventListener("mouseenter",()=>{s.style.background="#ffd70033",s.style.backgroundSize="200% auto"}),s.addEventListener("mouseleave",()=>{s.style.background="linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",s.style.backgroundSize="200% auto"}),s.addEventListener("click",()=>{this.onStartCallbacks.forEach(n=>n())});const a=document.createElement("div");a.style.cssText=`
      position: absolute;
      bottom: 12px;
      right: 16px;
      font-size: 0.65rem;
      color: #444466;
      letter-spacing: 0.05em;
    `,a.textContent="v0.1.0",this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el),this.hide()}onStart(e){this.onStartCallbacks.push(e)}show(){this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}}class ps{constructor(e){o(this,"el");o(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="#ffd700",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let we=!1;function ms(){if(we)return;we=!0;const r=document.createElement("style");r.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(r)}class fs{constructor(e){o(this,"container");o(this,"bar");o(this,"label");o(this,"reached",!1);ms(),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, #00ff88, #ffd700)",this.bar.style.boxShadow="0 0 14px #00ff88aa",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, #4444ff, #00ffaa)",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class gs{constructor(e){o(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e,t){this.el.innerHTML=`Phase <span style="color:#ffd700;font-weight:bold">${e}</span><br>Stage ${t} / 3`}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let ve=!1;function ys(){if(ve)return;ve=!0;const r=document.createElement("style");r.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
  `,document.head.appendChild(r)}class Es{constructor(e){o(this,"el");o(this,"medalCounter");o(this,"quotaBar");o(this,"phaseIndicator");o(this,"throwHint");o(this,"inventoryPanel");o(this,"activeItemPanel");o(this,"countdownEl");o(this,"onUseActiveCallbacks",[]);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new ps(this.el),this.quotaBar=new fs(this.el),this.phaseIndicator=new gs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
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
    `,this.el.appendChild(this.countdownEl),e.appendChild(this.el),this.hide(),ys()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="#ffd700"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
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
    `,a.textContent=e,this.el.appendChild(a),setTimeout(()=>{a.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>a.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=q(i.definitionId);if(!s)continue;const a=document.createElement("div");a.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid #333355;
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: #ffffff;
      `,a.textContent=s.name,this.inventoryPanel.appendChild(a)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: #aaaacc; font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),a=i.remainingMs??0,n=a>0,l=n?` (${Math.ceil(a/1e3)}s)`:"";s.style.cssText=`
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
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${l}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}onUseActive(e){this.onUseActiveCallbacks.push(e)}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}}let Ce=!1;function Ss(){if(Ce)return;Ce=!0;const r=document.createElement("style");r.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class bs{constructor(e){o(this,"el");o(this,"onContinueCallbacks",[]);o(this,"onSkipCallbacks",[]);o(this,"titleEl");o(this,"infoEl");o(this,"continueBtn");o(this,"shopBtn");Ss(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 10, 30, 0.85);
      pointer-events: all;
      gap: 16px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.titleEl=document.createElement("h2"),this.titleEl.style.cssText="font-size: 2rem; color: #00ff88; margin-bottom: 8px;",this.infoEl=document.createElement("p"),this.infoEl.style.cssText="color: #aaaacc; font-size: 0.9rem;";const t=document.createElement("div");t.style.cssText="display: flex; gap: 16px; margin-top: 16px;",this.continueBtn=this.createButton("NEXT STAGE →","#4444ff",()=>{this.onContinueCallbacks.forEach(i=>i())}),this.shopBtn=this.createButton("GO TO SHOP (next phase)","#ff8800",()=>{this.onSkipCallbacks.forEach(i=>i())}),t.appendChild(this.continueBtn),t.appendChild(this.shopBtn),this.el.appendChild(this.titleEl),this.el.appendChild(this.infoEl),this.el.appendChild(t),e.appendChild(this.el),this.hide()}createButton(e,t,i){const s=document.createElement("button");return s.style.cssText=`
      font-size: 1rem;
      padding: 12px 32px;
      background: transparent;
      border: 2px solid ${t};
      color: ${t};
      cursor: pointer;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transition: background 0.2s;
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="#ffd700",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="#00ff88",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let _e=!1;function Ts(){if(_e)return;_e=!0;const r=document.createElement("style");r.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(r)}class Ms{constructor(e){o(this,"el");o(this,"onRetryCallbacks",[]);Ts(),this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 5, 20, 0.92);
      pointer-events: all;
      gap: 12px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el),this.hide()}show(e){this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText=`
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
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((l,c)=>{const h=document.createElement("div");h.style.cssText=`
        color: #aaaacc;
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,h.textContent=l,a.appendChild(h)});const n=document.createElement("button");n.style.cssText=`
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
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(l=>l())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const xs=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class ws{constructor(e){o(this,"el");o(this,"onSelectCallbacks",[]);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(10, 10, 30, 0.9);
      pointer-events: all;
      gap: 24px;
      opacity: 0;
      transition: opacity 280ms ease;
    `,e.appendChild(this.el),this.hide()}show(e){this.el.innerHTML="";const t=document.createElement("h2");t.style.cssText="font-size: 1.8rem; color: #aa44ff; margin-bottom: 8px;",t.textContent="CHOOSE A SKILL";const i=document.createElement("p");i.style.cssText="color: #666688; font-size: 0.85rem; margin-bottom: 16px;",i.textContent="Select one permanent skill";const s=document.createElement("div");s.style.cssText="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;";for(const a of e)s.appendChild(this.createCard(a));this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}createCard(e){const i={Gold:"#ffd700",Alchemy:"#00ff88",Throw:"#ff8800",Guard:"#4488ff"}[e.tag]??"#aaaacc",s=document.createElement("div");s.style.cssText=`
      width: 200px;
      padding: 20px;
      ${xs}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: #ffffff; font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const l=document.createElement("div");return l.style.cssText="font-size: 0.8rem; color: #aaaacc; line-height: 1.4;",l.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(l),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const Ae=`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class vs{constructor(e){o(this,"el");o(this,"moneyEl");o(this,"inventoryEl");o(this,"onBuyMedalsCallbacks",[]);o(this,"onSellCallbacks",[]);o(this,"onContinueCallbacks",[]);o(this,"onBuyActiveCallbacks",[]);this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
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
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="#00ff8822"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el),this.hide()}show(e,t,i=[]){this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: #ffd700; margin-bottom: 12px; border-bottom: 1px solid rgba(255,215,0,0.15); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const l=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const u of l){const p=e>=u.price,M=document.createElement("button");M.style.cssText=`
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
      `,M.innerHTML=`<strong>${u.label}</strong><br>${u.price} G`,p&&(M.addEventListener("mouseenter",()=>{M.style.background="#ffd70022",M.style.transform="translateY(-2px)"}),M.addEventListener("mouseleave",()=>{M.style.background="transparent",M.style.transform="translateY(0)"}),M.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(E=>E(u.count))})),n.appendChild(M)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border-color: rgba(255,215,0,0.15); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const h=document.createElement("div");h.style.cssText="margin-bottom: 28px;";const y=document.createElement("h3");y.style.cssText="color: #44aaff; margin-bottom: 12px; border-bottom: 1px solid rgba(68,170,255,0.15); padding-bottom: 8px;",y.textContent="ACTIVE ITEMS (buy to use during game)",h.appendChild(y);const m=document.createElement("div");m.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const T=new Map(i.map(u=>[u.id,u.count]));for(const u of he){const p=e>=u.price,M=T.get(u.id)??0,E=document.createElement("div");E.style.cssText=`
        padding: 14px;
        ${Ae}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${p?u.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const R=document.createElement("div");R.style.cssText=`color: ${u.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,R.textContent=u.name;const P=document.createElement("div");P.style.cssText="color: #aaa; font-size: 0.75rem; margin-bottom: 8px;",P.textContent=u.description;const L=document.createElement("div");L.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",L.textContent=`Owned: ${M}`;const A=document.createElement("button");A.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${p?u.color:"#555"};
        color: ${p?u.color:"#555"};
        cursor: ${p?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,A.textContent=`Buy ${u.price} G`,p&&(A.addEventListener("mouseenter",()=>A.style.background=`${u.color}22`),A.addEventListener("mouseleave",()=>A.style.background="transparent"),E.addEventListener("mouseenter",()=>{E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.transform="translateY(0)",E.style.boxShadow=""}),A.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(N=>N(u.id))})),E.appendChild(R),E.appendChild(P),E.appendChild(L),E.appendChild(A),m.appendChild(E)}h.appendChild(m),this.inventoryEl.appendChild(h);const S=document.createElement("hr");S.style.cssText="border-color: rgba(255,255,255,0.1); margin: 8px 0 20px;",this.inventoryEl.appendChild(S);const w=document.createElement("div"),f=document.createElement("h3");if(f.style.cssText="color: #aaaacc; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;",f.textContent="YOUR ITEMS (click to sell)",w.appendChild(f),t.length===0){const u=document.createElement("p");u.style.cssText="color: #555577;",u.textContent="No items collected yet.",w.appendChild(u)}else{const u=document.createElement("div");u.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const p of t){const M=q(p.definitionId);if(!M)continue;const E=document.createElement("div");E.style.cssText=`
          width: 160px;
          padding: 14px;
          ${Ae}
          background: rgba(0,0,0,0.5);
          border: 1px solid #333355;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,E.innerHTML=`
          <div style="color:#ffffff;font-size:0.9rem;margin-bottom:4px;">${M.name}</div>
          <div style="color:#888;font-size:0.75rem;">${M.rarity}</div>
          <div style="color:#ffd700;font-size:0.85rem;margin-top:8px;">Sell: ${M.sellPrice} G</div>
        `,E.addEventListener("mouseenter",()=>{E.style.borderColor="#ffd700",E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.borderColor="#333355",E.style.transform="translateY(0)",E.style.boxShadow=""}),E.addEventListener("click",()=>{this.onSellCallbacks.forEach(R=>R(p.instanceId))}),u.appendChild(E)}w.appendChild(u)}this.inventoryEl.appendChild(w)}hide(){this.el.style.opacity="0",setTimeout(()=>{this.el.style.display="none"},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}class Cs{constructor(e){o(this,"titleScreen");o(this,"gameScreen");o(this,"stageResultScreen");o(this,"resultScreen");o(this,"skillSelectScreen");o(this,"shopScreen");this.titleScreen=new us(e),this.gameScreen=new Es(e),this.stageResultScreen=new bs(e),this.resultScreen=new Ms(e),this.skillSelectScreen=new ws(e),this.shopScreen=new vs(e),x.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case g.TITLE:this.titleScreen.show();break;case g.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case g.STAGE_CLEAR:break;case g.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,l){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),l&&this.gameScreen.updateActiveItems(l)}}class _s{constructor(e){o(this,"throwCallbacks",[]);o(this,"enabled",!1);o(this,"onClick",e=>{if(!this.enabled)return;const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(s=>s(t,i))});o(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this.throwCallbacks.forEach(a=>a(i,s))});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1})}enable(){this.enabled=!0}disable(){this.enabled=!1}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}dispose(){this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch)}}const D=class D{constructor(){o(this,"ctx",null);o(this,"masterGain",null);o(this,"bgmPlaying",!1);o(this,"bgmNextTime",0);o(this,"bgmSchedulerTimer",null);o(this,"bgmBeatIndex",0)}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getMaster(){return this.getCtx(),this.masterGain}playThrow(){const e=this.getCtx(),t=this.getMaster(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let h=0;h<i;h++)a[h]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),l.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(l),l.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getMaster(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getMaster();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getMaster();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getMaster();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playSkillSelected(){const e=this.getCtx(),t=this.getMaster();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getMaster(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*(1-c/i);const n=e.createBufferSource();n.buffer=s;const l=e.createGain();l.gain.value=.35,n.connect(l),l.connect(t),n.start()}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;const e=this.getCtx();this.bgmNextTime=e.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getMaster(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=D.BEAT,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=D.BASS_FREQS,n=Math.floor(s/2)%a.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",a[n],i,D.BEAT*1.8,.12);const l=D.MELODY;let c=s%8,h=0;for(const[f,u]of l){if(c>=h&&c<h+u){f>0&&this._scheduleNote(e,t,"square",f,i,D.BEAT*u*.85,.1);break}h+=u}const y=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),m=y.getChannelData(0);for(let f=0;f<m.length;f++)m[f]=(Math.random()*2-1)*(1-f/m.length);const T=e.createBufferSource();T.buffer=y;const S=e.createBiquadFilter();S.type="highpass",S.frequency.value=8e3;const w=e.createGain();w.gain.value=.04,T.connect(S),S.connect(w),w.connect(t),T.start(i)}_playNote(e,t,i,s,a,n,l){const c=e.createOscillator();c.type=i,c.frequency.value=s;const h=e.createGain();h.gain.setValueAtTime(l,a),h.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(h),h.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,l){this._playNote(e,t,i,s,a,n,l)}};o(D,"BPM",110),o(D,"BEAT",60/D.BPM),o(D,"BASS_FREQS",[110,98,82.41,110]),o(D,"MELODY",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]);let re=D;async function As(){const r=new gt,e=new yt,t=new St,i=new os,s=new rs,a=document.getElementById("app"),n=document.getElementById("ui-root"),l=new Rt(a),c=new Pt;new Lt(l);const h=new Dt(l.scene);l.setCamera(c.camera);const y=new ss,m=new is(r),T=new ns,S=new ls,w=new cs,f=new ds,u=new ts(l,y,T);u.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier);const p=new Cs(n),M=new _s(l.renderer.domElement),E=new re;let R=0,P=!1,L=0,A=0,N=0;p.titleScreen.onStart(()=>{He()}),p.stageResultScreen.onContinue(()=>{p.stageResultScreen.hide(),m.advanceStage(),se()}),p.stageResultScreen.onSkip(()=>{p.stageResultScreen.hide(),m.advancePhase(),Oe()}),p.shopScreen.onBuyMedals(b=>{const I=b*d.MEDAL_BUY_PRICE;f.buyMedals(b)?p.shopScreen.show(f.money,T.getAll(),f.getOwnedActiveItems()):console.log(`Not enough shop money (need ${I} G, have ${f.money} G)`)}),p.shopScreen.onSell(b=>{const I=f.sellItem(b,T);i.addShopMoney(I),p.shopScreen.show(f.money,T.getAll(),f.getOwnedActiveItems())}),p.shopScreen.onBuyActive(b=>{f.buyActiveItem(b)&&p.shopScreen.show(f.money,T.getAll(),f.getOwnedActiveItems())}),p.shopScreen.onContinue(()=>{p.shopScreen.hide(),Be()}),p.skillSelectScreen.onSelect(b=>{S.addSkill(b,m.currentPhase),f.setSellMultiplier(S.itemSellMultiplier),p.skillSelectScreen.hide(),r.transition(g.STAGE_START),se()}),p.resultScreen.onRetry(()=>{p.resultScreen.hide(),r.transition(g.TITLE),p.titleScreen.show()}),p.gameScreen.onUseActive(b=>{if(!r.is(g.PLAYING)||!f.useActiveItem(b))return;const I=Me(b);if(!I)return;const U=Date.now()+I.durationMs;b==="side_guard"?(N=U,u.addSideGuardWalls(),u.fieldMesh.addSideGuardMeshes(u.fieldMesh.group)):b==="medal_fever"&&(A=U)}),M.onThrow((b,I)=>{if(!r.is(g.PLAYING))return;const U=b*(d.FIELD_WIDTH/2-.5),Z=S.medalThrowCount;let O=0;for(let B=0;B<Z&&f.spendMedal();B++){const ae=(B-Math.floor(Z/2))*.6;u.throwMedal(U+ae,I),O++}O>0&&x.emit("medal:thrown",{count:O})}),x.on("quota:reached",()=>{r.is(g.PLAYING)&&(M.disable(),setTimeout(()=>{const b=S.onClearBonusMedals;b>0&&f.addMedals(b),m.clearCurrentStage();const I=m.isLastStageOfPhase;p.stageResultScreen.show(m.currentPhase,m.currentStage,I,y.currentValue,y.targetValue)},500))}),x.on("medal:collected",({count:b})=>{r.is(g.PLAYING)&&p.gameScreen.showFloatingText(`+${b}`)}),x.on("medal:thrown",()=>E.playThrow()),x.on("medal:collected",()=>E.playMedalCollected()),x.on("quota:reached",()=>E.playQuotaReached()),x.on("stage:cleared",()=>E.playStageCleared()),x.on("game:over",()=>E.playGameOver()),x.on("skill:selected",()=>E.playSkillSelected()),x.on("medal:collected",()=>c.shake(.04,.08)),x.on("quota:reached",()=>c.shake(.15,.3)),x.on("stage:cleared",()=>c.shake(.28,.5)),x.on("game:over",()=>c.shake(.5,.8)),x.on("state:changed",({to:b})=>{b===g.PLAYING?E.startBGM():E.stopBGM()}),e.addUpdateFn(b=>{if(r.is(g.PLAYING)){const I=Date.now();N>0&&I>N&&(N=0,u.removeSideGuardWalls(),u.fieldMesh.removeSideGuardMeshes(u.fieldMesh.group)),A>0&&I>A&&(A=0);const U=A>Date.now()?2:1;u.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier*U),u.update(b);const Z=f.getOwnedActiveItems().map(O=>{const B=Me(O.id),ae=O.id==="side_guard"?Math.max(0,N-Date.now()):O.id==="medal_fever"?Math.max(0,A-Date.now()):0;return{...O,name:B.name,color:B.color,remainingMs:ae}});if(p.updateGameHUD(f.currentMedals,y.currentValue,y.targetValue,m.currentPhase,m.currentStage,T.getAll(),Z),!P&&f.currentMedals<=0&&!y.isReached&&(P=!0,L=10,M.disable()),P&&L>0){const O=Math.ceil(L);L-=b;const B=Math.ceil(L);B!==O&&B>0&&E.playCountdownTick(),L>0?p.gameScreen.showCountdown(L):(p.gameScreen.hideCountdown(),Ge())}}h.update(b),c.update(b),l.render(c.camera)});function He(){t.incrementRuns(),f.reset(),T.clear(),S.reset(),i.reset(),m.reset(),R=0,P=!1,L=0,A=0,N=0,r.transition(g.STAGE_START),se()}async function se(){const b=m.currentPhase,I=m.currentStage;P=!1,L=0,p.gameScreen.hideCountdown(),y.startStage(b,I);try{u.physicsWorld.initialized?u.endStage():(ie(!0),await u.init(),ie(!1))}catch(U){console.error("Field init failed:",U),ie(!1);return}u.startStage(b,I),m.startCurrentStage(),M.enable()}function Oe(){u.endStage(),r.transition(g.SHOP),p.shopScreen.show(f.money,T.getAll(),f.getOwnedActiveItems())}function Be(){r.transition(g.SKILL_SELECT);const b=w.pickChoices(d.SKILL_CHOICES,S.getOwnedSkills(),Date.now());p.skillSelectScreen.show(b)}function Ge(){if(R>0){R--,L=0,p.gameScreen.hideCountdown(),M.enable(),P=!1;return}u.endStage();const b=s.calculate(i.snapshot,t);t.updateBest(b.phase,b.stage),r.transition(g.GAME_OVER),r.transition(g.RESULT),p.resultScreen.show(b)}const Y=document.createElement("div");Y.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: rgba(10,10,30,0.8); color: #ffd700;
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,Y.textContent="LOADING...",n.appendChild(Y);function ie(b){Y.style.display=b?"flex":"none"}x.on("skill:selected",()=>{R=Math.max(R,S.gameOverShields)}),e.start(),r.transition(g.TITLE),p.titleScreen.show(),console.log("YukiMedal initialized")}As().catch(console.error);
