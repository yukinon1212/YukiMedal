var bt=Object.defineProperty;var xt=(l,e,t)=>e in l?bt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var o=(l,e,t)=>xt(l,typeof e!="symbol"?e+"":e,t);import{M as z,O as Et,B as dt,F as Ve,S as he,U as Ae,V as J,W as Me,H as Ce,N as vt,C as Tt,a as pe,b as ee,A as St,c as De,R as wt,d as Mt,e as Ct,L as _t,f as At,g as It,h as pt,i as Pt,j as Rt,k as Lt,l as kt,m as Dt,P as Ht,n as Bt,o as ut,p as Ot,D as $e,q as Se,r as Nt,s as Gt,t as Ft,G as Ye,u as Ut,v as X,w as _e,I as zt,x as $,y as Wt,z as ge,E as _,T as Vt,J as $t,K as qe,Q as Qe}from"./three-_RpRzb1S.js";import{O as we}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var w=(l=>(l.INIT="INIT",l.TITLE="TITLE",l.STAGE_START="STAGE_START",l.PLAYING="PLAYING",l.STAGE_CLEAR="STAGE_CLEAR",l.SKIP_PROMPT="SKIP_PROMPT",l.GAME_OVER="GAME_OVER",l.SHOP="SHOP",l.SKILL_SELECT="SKILL_SELECT",l.RESULT="RESULT",l))(w||{});class Yt{constructor(){o(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const I=new Yt,qt=[{from:w.INIT,to:w.TITLE},{from:w.TITLE,to:w.STAGE_START},{from:w.STAGE_START,to:w.PLAYING},{from:w.PLAYING,to:w.STAGE_CLEAR},{from:w.PLAYING,to:w.GAME_OVER},{from:w.STAGE_CLEAR,to:w.STAGE_START},{from:w.STAGE_CLEAR,to:w.SKIP_PROMPT},{from:w.STAGE_CLEAR,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.STAGE_START},{from:w.SHOP,to:w.SKILL_SELECT},{from:w.SKILL_SELECT,to:w.STAGE_START},{from:w.GAME_OVER,to:w.RESULT},{from:w.RESULT,to:w.TITLE}];class Qt{constructor(){o(this,"current",w.INIT)}get state(){return this.current}canTransition(e){return qt.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,I.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class jt{constructor(){o(this,"updateFns",[]);o(this,"rafId",null);o(this,"lastTime",0);o(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const je="yukimedal_save",Zt="yukimedal_best",Pe={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Kt{constructor(){o(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(je);return e?{...Pe,...JSON.parse(e)}:{...Pe}}catch{return{...Pe}}}save(){try{localStorage.setItem(je,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(Zt,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const mt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class me{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xt=new Et(-1,1,1,-1,0,1);class Jt extends dt{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}const es=new Jt;class Ge{constructor(e){this._mesh=new z(es,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ts extends me{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof he?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ae.clone(e.uniforms),this.material=new he({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ge(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ze extends me{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,r;this.inverse?(n=0,r=1):(n=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class ss extends me{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class is{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new J);this._width=i.width,this._height=i.height,t=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ce}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ts(mt),this.copyPass.material.blending=vt,this.clock=new Tt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const r=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Ze!==void 0&&(n instanceof Ze?i=!0:n instanceof ss&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class as extends me{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const ns={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ue extends me{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(a,n,{type:Ce}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const u=new Me(a,n,{type:Ce});u.texture.name="UnrealBloomPass.h"+p,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new Me(a,n,{type:Ce});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),n=Math.round(n/2)}const r=ns;this.highPassUniforms=Ae.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new J(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1),new ee(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=mt;this.copyUniforms=Ae.clone(f.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:St,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new Ge(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new J(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[c].uniforms.direction.value=ue.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ue.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new he({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new he({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ue.BlurDirectionX=new J(1,0);ue.BlurDirectionY=new J(0,1);const os={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rs extends me{constructor(){super();const e=os;this.uniforms=Ae.clone(e.uniforms),this.material=new wt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ge(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_t?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===At?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===It?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ls{constructor(e){o(this,"scene");o(this,"renderer");o(this,"composer");o(this,"renderPass");o(this,"bloomPass");o(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new Lt,this.scene.background=new pe(1710638),this.scene.fog=new kt(1710638,20,60),this.renderer=new Dt({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ht,this.renderer.toneMapping=pt,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=Bt,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new ut(60,t/i,.1,200);this.renderPass=new as(this.scene,s),this.bloomPass=new ue(new J(t,i),.75,.4,.82);const a=new rs;this.composer=new is(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const h={INITIAL_MEDALS:50,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:30,QUOTA_MULTIPLIER:1.6,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:4e3,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_RADIUS_TRIPLE:.55,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:40,INITIAL_PUSHER_MEDALS:20,MEDAL_PROB_NORMAL:58,MEDAL_PROB_DOUBLE:78,MEDAL_PROB_TRIPLE:88,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,JACKPOT_THRESHOLD:45,JACKPOT_MEDAL_REWARD:25,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-6};class cs{constructor(){o(this,"camera");o(this,"target",new ee(0,0,-1));o(this,"basePosition",new ee(0,7,16));o(this,"shakeOffset",new ee);o(this,"shakeIntensity",0);o(this,"shakeDecay",0);o(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new ut(h.CAMERA_FOV,window.innerWidth/window.innerHeight,h.CAMERA_NEAR,h.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class hs{constructor(e){o(this,"ambient");o(this,"dirLight");o(this,"fillLight");o(this,"warmPoint");o(this,"coolPoint");o(this,"sideLeft");o(this,"sideRight");this.ambient=new Ot(4210784,.6),this.dirLight=new $e(16777215,1.8),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new $e(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new Se(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new Se(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),this.sideLeft=new Se(16773344,1,22),this.sideLeft.position.set(-9,4,2),this.sideRight=new Se(16773344,1,22),this.sideRight.position.set(9,4,2),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}}class ds{constructor(e){o(this,"stars");o(this,"starMat");o(this,"grid");o(this,"scene");this.scene=e;const t=2e3,i=new Float32Array(t*3),s=60;for(let n=0;n<t;n++){const r=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),d=Math.cbrt(Math.random())*s;i[n*3]=d*Math.sin(c)*Math.cos(r),i[n*3+1]=d*Math.sin(c)*Math.sin(r),i[n*3+2]=d*Math.cos(c)}const a=new dt;a.setAttribute("position",new Nt(i,3)),this.starMat=new Gt({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0}),this.stars=new Ft(a,this.starMat),e.add(this.stars),this.grid=new Ye(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new Ye(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-4,this.scene.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class ps{constructor(){o(this,"world");o(this,"_initialized",!1)}async init(){await we.init(),this.world=new we.World({x:0,y:h.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return we}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new we.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class us{constructor(){o(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation(),n=i.userData.physicsYOffset??0;i.position.set(s.x,s.y+n,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class ms{constructor(){o(this,"handles",new Map);o(this,"dropZoneHandles",new Set);o(this,"eventQueue");o(this,"medalCollectedCallback");o(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,t=1){for(let i=0;i<t;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,s,a)=>{var d,f;if(!a)return;const n=this.handles.get(i),r=this.handles.get(s);if(n==="drop_zone"&&(r==="medal"||r==="item")||r==="drop_zone"&&(n==="medal"||n==="item")){const p=n==="drop_zone"?s:i,u=n==="drop_zone"?r:n;u==="medal"?(d=this.medalCollectedCallback)==null||d.call(this,p):u==="item"&&((f=this.itemCollectedCallback)==null||f.call(this,p))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class fs{constructor(){o(this,"body");o(this,"time",0);o(this,"zBase");o(this,"initialized",!1);o(this,"speedMultiplier",1);this.zBase=-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,h.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/2,h.PUSHER_DEPTH/2);e.createCollider(s,this.body);const a=.4,n=a/Math.SQRT2,r=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,n,n).setTranslation(0,h.PUSHER_HEIGHT/2-a/2,h.PUSHER_DEPTH/2-a/2).setRotation({x:Math.sin(Math.PI/8),y:0,z:0,w:Math.cos(Math.PI/8)});e.createCollider(r,this.body),this.initialized=!0}update(e){this.time+=e*this.speedMultiplier;const t=h.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*h.PUSHER_RANGE;if(this.initialized){const a=Math.PI*h.PUSHER_RANGE/t*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/t&&this.body.setTranslation({x:0,y:h.PUSHER_HEIGHT/2,z:this.zBase},!0)}return s}get currentZOffset(){const e=h.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*h.PUSHER_RANGE}get restZ(){return this.zBase}}function gs(l){return[l>>16&255,l>>8&255,l&255]}function Re(l){const e=l.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function ce(l,e,t,i){return`rgb(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Le(l,e,t,i){return`rgb(${Math.max(0,l-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function Ke(l,e,t){return`rgb(${l},${e},${t})`}function j(l,e,t,i,s){return`rgba(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)},${s})`}class de{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Ut(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,r=128/2-1,[c,d,f]=gs(e),p=Ke(c,d,f),u=ce(c,d,f,65),m=ce(c,d,f,30),x=Le(c,d,f,55),g=Le(c,d,f,80),y=s.createRadialGradient(a-18,n-18,4,a,n,r);y.addColorStop(0,u),y.addColorStop(.45,m),y.addColorStop(.8,p),y.addColorStop(1,x),s.fillStyle=y,s.beginPath(),s.arc(a,n,r,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=5,s.beginPath(),s.arc(a,n,r-5,0,Math.PI*2),s.stroke();const S=s.createRadialGradient(a,n,0,a,n,38);S.addColorStop(0,m),S.addColorStop(.7,p),S.addColorStop(1,x),s.fillStyle=S,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=1.5,s.stroke(),s.strokeStyle=u,s.lineWidth=2.5,s.lineCap="round";for(let T=0;T<6;T++){const b=T*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(b)*7,n+Math.sin(b)*7),s.lineTo(a+Math.cos(b)*28,n+Math.sin(b)*28),s.stroke()}const A=s.createRadialGradient(a-2,n-2,0,a,n,8);A.addColorStop(0,u),A.addColorStop(1,p),s.fillStyle=A,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const E=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.4,"rgba(255,255,255,0.12)"),E.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=E,s.beginPath(),s.arc(a,n,r-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,r]=Re(e),c=a>r+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c){for(let u=0;u<22;u++){const m=256*u/22,x=u%3===0,g=x?.55:.45;s.strokeStyle=x?`rgba(${Math.max(0,a-22)},${Math.max(0,n-16)},${Math.max(0,r-8)},${g})`:`rgba(${Math.min(255,a+22)},${Math.min(255,n+16)},${Math.min(255,r+8)},${g})`,s.lineWidth=2+Math.random()*4,s.beginPath();for(let y=0;y<=256;y+=4){const S=m+Math.sin(y*.035+u)*2.5+(Math.random()-.5)*.8;y===0?s.moveTo(y,S):s.lineTo(y,S)}s.stroke()}s.strokeStyle=j(a,n,r,40,.12),s.lineWidth=.5;for(let u=0;u<256;u+=6)s.beginPath(),s.moveTo(0,u+.5),s.lineTo(256,u+.5),s.stroke()}else{s.strokeStyle=j(a,n,r,80,.14),s.lineWidth=1;for(let p=0;p<=256;p+=32)s.beginPath(),s.moveTo(p,0),s.lineTo(p,256),s.stroke();for(let p=0;p<=256;p+=32)s.beginPath(),s.moveTo(0,p),s.lineTo(256,p),s.stroke()}const d=s.getImageData(0,0,256,256),f=d.data;for(let p=0;p<f.length;p+=4){const u=(Math.random()-.5)*(c?14:18);f[p]=Math.max(0,Math.min(255,f[p]+u)),f[p+1]=Math.max(0,Math.min(255,f[p+1]+u)),f[p+2]=Math.max(0,Math.min(255,f[p+2]+u))}return s.putImageData(d,0,0),i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d"),[n,r,c]=Re(e),d=n>c+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),d){a.strokeStyle=j(n,r,c,90,.38),a.lineWidth=.8;const u=14;for(let m=-128;m<384;m+=u)a.beginPath(),a.moveTo(m,0),a.lineTo(m+128,128),a.stroke();for(let m=0;m<512;m+=u)a.beginPath(),a.moveTo(m,0),a.lineTo(m-128,128),a.stroke();a.fillStyle=ce(n,r,c,90);for(let m=0;m<2;m++){const x=10+m*108;for(let g=20;g<256;g+=36)a.fillStyle=ce(n,r,c,80),a.beginPath(),a.arc(g,x,4.5,0,Math.PI*2),a.fill(),a.fillStyle=j(n,r,c,150,.7),a.beginPath(),a.arc(g-1,x-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(g+1,x+1,3,.5,Math.PI*2),a.fill()}}else{for(let u=0;u<128;u++){const m=.015+Math.random()*.055;a.strokeStyle=j(n,r,c,100,m),a.lineWidth=1,a.beginPath(),a.moveTo(0,u+.5),a.lineTo(256,u+.5),a.stroke()}a.fillStyle=j(n,r,c,120,.35);for(let u=24;u<256;u+=48)a.beginPath(),a.arc(u,8,3,0,Math.PI*2),a.fill()}const f=a.createLinearGradient(0,0,0,18);f.addColorStop(0,j(n,r,c,150,.6)),f.addColorStop(1,j(n,r,c,150,0)),a.fillStyle=f,a.fillRect(0,0,256,18);const p=a.createLinearGradient(0,114,0,128);return p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=p,a.fillRect(0,114,256,14),s})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,r]=Re(e),c=a>r+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c)for(let u=0;u<256;u+=40){const m=s.createLinearGradient(0,u,0,u+40);m.addColorStop(0,ce(a,n,r,18)),m.addColorStop(.5,Ke(a,n,r)),m.addColorStop(1,Le(a,n,r,12)),s.fillStyle=m,s.fillRect(0,u,256,40),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=2,s.beginPath(),s.moveTo(0,u+40-1),s.lineTo(256,u+40-1),s.stroke(),s.strokeStyle=j(a,n,r,70,.45),s.lineWidth=1,s.beginPath(),s.moveTo(0,u+1),s.lineTo(256,u+1),s.stroke();for(let x=24;x<256;x+=48){const g=u+40-7;s.fillStyle=ce(a,n,r,55),s.beginPath(),s.arc(x,g,4,0,Math.PI*2),s.fill(),s.fillStyle=j(a,n,r,130,.6),s.beginPath(),s.arc(x-1,g-1,1.5,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(x+1,g+1,2.5,.4,Math.PI*2),s.fill()}}else for(let p=0;p<256;p+=48){const u=s.createLinearGradient(0,p,0,p+6);u.addColorStop(0,"rgba(0,0,0,0.4)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(0,p,256,6);const m=s.createLinearGradient(0,p-4,0,p);m.addColorStop(0,j(a,n,r,80,0)),m.addColorStop(1,j(a,n,r,80,.2)),s.fillStyle=m,s.fillRect(0,p-4,256,4)}const d=s.getImageData(0,0,256,256),f=d.data;for(let p=0;p<f.length;p+=4){const u=(Math.random()-.5)*(c?8:10);f[p]=Math.max(0,Math.min(255,f[p]+u)),f[p+1]=Math.max(0,Math.min(255,f[p+1]+u)),f[p+2]=Math.max(0,Math.min(255,f[p+2]+u))}return s.putImageData(d,0,0),i})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}o(de,"cache",new Map);const ys=new X(h.MEDAL_RADIUS,h.MEDAL_RADIUS,h.MEDAL_THICKNESS,24),bs=new X(h.MEDAL_RADIUS_LARGE,h.MEDAL_RADIUS_LARGE,h.MEDAL_THICKNESS,24),xs=new X(h.MEDAL_RADIUS_TRIPLE,h.MEDAL_RADIUS_TRIPLE,h.MEDAL_THICKNESS*1.3,24),Es={normal:16766720,double:13691135,large:15245312,triple:16719968},vs={normal:1,double:2,large:1,triple:3};function Ts(l){const e=l*100;return e<h.MEDAL_PROB_NORMAL?"normal":e<h.MEDAL_PROB_DOUBLE?"double":e<h.MEDAL_PROB_TRIPLE?"triple":"large"}function Ss(l){return l==="large"?bs:l==="triple"?xs:ys}class Fe{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new _e({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new z(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}o(Fe,"materialCache",new Map);class ws{constructor(){o(this,"medals",new Map);o(this,"pendingRemoval",new Set);o(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,r,c,d){if(this.medals.size>=h.MAX_MEDALS_ON_FIELD)return;const f=s.rapier,p=d??Ts(Math.random()),u=p==="large"?h.MEDAL_RADIUS_LARGE:p==="triple"?h.MEDAL_RADIUS_TRIPLE:h.MEDAL_RADIUS,m=vs[p],x=f.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(1.5).setAngularDamping(5).setCcdEnabled(!0),g=s.createRigidBody(x);g.setEnabledRotations(!0,!1,!0,!0),c&&g.setLinvel(c,!0);const y=f.ColliderDesc.cylinder(h.MEDAL_THICKNESS/2,u).setRestitution(.05).setFriction(.7).setDensity(h.MEDAL_MASS).setActiveEvents(f.ActiveEvents.COLLISION_EVENTS),S=s.createCollider(y,g);n.registerHandle(S.handle,"medal");const A=Fe.createMesh(Ss(p),Es[p],!0,!1);A.userData.physicsYOffset=.03,A.position.set(e,t,i),r.add(A),a.register(g,A),this.medals.set(S.handle,{body:g,collider:S,mesh:A,type:p,quotaValue:m}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const r=this.medals.get(n);r&&(t.unregister(r.body),i.unregisterHandle(n),s.remove(r.mesh),e.removeRigidBody(r.body),r.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a){let n=0;for(const[r,c]of this.medals)c.body.translation().y<e&&!this.pendingRemoval.has(r)&&(this.pendingRemoval.add(r),n++);return n}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class Ms{constructor(){o(this,"body");o(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=h.OPEN_ZONE_START,a=h.FIELD_DEPTH/2+15,n=(s+a)/2,r=(a-s)/2,c=i.RigidBodyDesc.fixed().setTranslation(0,-2,n);this.body=e.createRigidBody(c);const d=i.ColliderDesc.cuboid(h.FIELD_WIDTH/2+1,1.5,r).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(d,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class Cs{constructor(){o(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var F=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l.Legendary="Legendary",l))(F||{});const _s={[F.Common]:8947848,[F.Rare]:4474111,[F.Epic]:11141375,[F.Legendary]:16746496},As=new zt(.4,0);class Is{constructor(e){o(this,"mesh");o(this,"animationOffset");const t=_s[e],i=new $({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new z(As,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Ue{constructor(e=Date.now()){o(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class Ps{constructor(){o(this,"items",new Map);o(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const r=new Ue(n);for(const c of e){const d=r.nextFloat(-3,h.FIELD_WIDTH/2-1),f=r.nextFloat(-12/4,h.FIELD_DEPTH/4);this.spawnSingle(c,d,2,f,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,r,c){const d=a.rapier,f=d.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),p=a.createRigidBody(f),u=d.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(d.ActiveEvents.COLLISION_EVENTS),m=a.createCollider(u,p);r.registerHandle(m.handle,"item");const x=new Is(e.rarity);x.setPosition(t,i,s),c.add(x.mesh),n.register(p,x.mesh),this.items.set(m.handle,{body:p,collider:m,mesh:x,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const He=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:F.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:F.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:F.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:F.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:F.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:F.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:F.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:F.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:F.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:F.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function be(l){return He.find(e=>e.id===l)}const Xe={[F.Common]:60,[F.Rare]:30,[F.Epic]:8,[F.Legendary]:2};class Rs{constructor(e){o(this,"rng");this.rng=new Ue(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=He.filter(r=>r.rarity===s);if(a.length===0){t.push(He[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(Xe),t=e.map(i=>Xe[i]);return this.rng.weightedPick(e,t)}}function M(l,e,t=!1){const i=new z(l,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}function U(l,e=1){return new $({color:l,emissive:l,emissiveIntensity:e,roughness:.5,metalness:.3})}class k{constructor(e){o(this,"group");o(this,"pusherMesh",null);o(this,"wallMeshes",[]);o(this,"sideGuardMeshes",[]);o(this,"pusherZBase",-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE);this.group=new Wt,this.rebuild(e)}rebuild(e){this.group.traverse(t=>{if(t!==this.group&&t instanceof z){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new $({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new $({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const t=de.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=ge,t.repeat.set(h.FIELD_WIDTH/2,h.FIELD_DEPTH/2);const i=new $({map:t,color:16777215,roughness:.92,metalness:0}),s=new _(h.FIELD_WIDTH,h.FIELD_HEIGHT,h.FIELD_DEPTH),a=new z(s,i);a.receiveShadow=!0,a.position.y=-.1/2,this.group.add(a)}buildPusher(e){const t=de.getPusherTexture(e.pusherTexBase);t.wrapS=t.wrapT=ge,t.repeat.set(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/1);const i=new $({map:t,color:16777215,roughness:.35,metalness:.65}),s=new _(h.PUSHER_WIDTH,h.PUSHER_HEIGHT,h.PUSHER_DEPTH);this.pusherMesh=new z(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,h.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const t=h.PUSHER_WIDTH,i=h.PUSHER_HEIGHT,s=h.PUSHER_DEPTH,a=M(new _(t+.06,.14,.14),k.brassMat(e));a.position.set(0,-i/2+.07,s/2),this.pusherMesh.add(a);const n=.4,r=M(new _(t+.06,n,n),k.brassMat(e));r.rotation.x=Math.PI/4,r.position.set(0,i/2-n/2,s/2),this.pusherMesh.add(r);for(const c of[-1,1]){const d=M(new _(.1,i,.1),k.brassMat(e));d.position.set(c*(t/2-.05),0,s/2),this.pusherMesh.add(d)}}createWalls(e){const s=de.getWallTexture(e.wallTexBase);s.wrapS=s.wrapT=ge;const a=()=>{const A=s.clone();return A.wrapS=A.wrapT=ge,A.needsUpdate=!0,new $({map:A,color:16777215,roughness:.8,metalness:.15})},n=h.OPEN_ZONE_START- -12/2,r=-12/2+n/2,c=a();c.map.repeat.set(n/2,3.5/2);const d=new _(.3,3.5,n),f=new z(d,c);f.position.set(-8/2-.3/2,3.5/2,r),this.group.add(f),this.wallMeshes.push(f);const p=a();p.map.repeat.set(n/2,3.5/2);const u=new _(.3,3.5,n),m=new z(u,p);m.position.set(h.FIELD_WIDTH/2+.3/2,3.5/2,r),this.group.add(m),this.wallMeshes.push(m);const x=a(),g=h.FIELD_WIDTH+.3*2;x.map.repeat.set(g/2,3.5/2);const y=new _(g,3.5,.3),S=new z(y,x);S.position.set(0,3.5/2,-12/2-.3/2),this.group.add(S),this.wallMeshes.push(S)}buildCabinet(e){const t=h.FIELD_WIDTH,i=h.FIELD_DEPTH,s=-i/2,a=i/2,n=M(new _(12,1,17),k.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const r=M(new _(12,.1,.1),k.brassMat(e));r.position.set(0,0,a+2.55),this.group.add(r);const c=1.1,d=7.2,f=13.5,p=t/2+.75,u=-.25;for(const C of[-1,1]){const L=M(new _(c,d,f),k.cabinetMat(e),!0);L.position.set(C*p,d/2-.5,u),this.group.add(L);const K=M(new _(c+.08,.14,f+.08),k.brassMat(e));K.position.set(C*p,d-.5+.07,u),this.group.add(K);const V=M(new _(c+.08,.1,f+.08),k.brassMat(e));V.position.set(C*p,-.02,u),this.group.add(V);const Y=M(new _(.06,d*.75,f*.7),new $({color:e.insetColor,roughness:.9,metalness:.1}));Y.position.set(C*(p-(c/2+.01)),d/2-.5,u),this.group.add(Y);const le=M(new _(.055,d*.8,.055),U(e.primaryNeon,1.1));le.position.set(C*(p-c/2-.05),d/2-.5,u),this.group.add(le);const We=M(new _(.05,d*.6,.05),U(e.tertiaryNeon,.9));We.position.set(C*(p-c/2-.05),d/2-.5,a+.3),this.group.add(We)}const m=10.5,x=1.3,g=s-1.15,y=de.getWallTexture(e.wallTexBase).clone();y.wrapS=y.wrapT=ge,y.repeat.set(6,5),y.needsUpdate=!0;const S=new $({map:y,color:16777215,roughness:.75,metalness:.18}),A=M(new _(12,m,x),S,!0);A.position.set(0,m/2-.5,g),this.group.add(A);const E=M(new _(12.1,.15,x+.1),k.brassMat(e));E.position.set(0,m-.5+.07,g),this.group.add(E);const T=3.8,b=9.8,H=new $({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.9,roughness:.3,metalness:.5}),R=M(new _(b,T,.08),H);R.position.set(0,m-.5-T/2-.3,g+x/2+.04),this.group.add(R);const O=M(new _(b+.24,T+.24,.06),k.brassMat(e));O.position.set(0,m-.5-T/2-.3,g+x/2),this.group.add(O);const Z=m-.5-T/2-.3;for(let C=0;C<4;C++){const L=M(new _(b-.4,.05,.07),U(e.tertiaryNeon,.8));L.position.set(0,Z-T/2+.5+C*.75,g+x/2+.06),this.group.add(L)}const P=M(new _(12,.07,.07),U(e.tertiaryNeon,1.2));P.position.set(0,m-.5+.18,g+x/2),this.group.add(P);const N=M(new _(12,.07,.07),U(e.primaryNeon,.9));N.position.set(0,3.7,g+x/2),this.group.add(N);const q=M(new _(12,1.1,4.5),k.cabinetMat(e),!0);q.position.set(0,-.56,a+2.25),this.group.add(q);const W=M(new _(12,.12,.12),k.brassMat(e));W.position.set(0,0,a+4.45),this.group.add(W);const Q=M(new _(12,.06,.06),U(e.secondaryNeon,1));Q.position.set(0,.06,a+4.5),this.group.add(Q);const te=M(new _(12,.5,f),k.cabinetMat(e),!0);te.position.set(0,6.7,u),this.group.add(te);const xe=M(new _(12,.07,.07),U(e.primaryNeon,1));xe.position.set(0,6.96,a+.1),this.group.add(xe);for(const C of[-1,1]){const L=M(new _(.09,.09,i+.5),k.brassMat(e));L.position.set(C*(t/2+.04),.05,u),this.group.add(L)}const oe=M(new _(t+.2,3.6,.18),new $({color:e.pusherHousingColor,roughness:.65,metalness:.5}));oe.position.set(0,1.8,s-.08),this.group.add(oe);const Ee=M(new _(t-.2,.06,.06),U(e.secondaryNeon,1));Ee.position.set(0,3.65,s+.01),this.group.add(Ee);const ve=M(new _(t+.1,.07,.07),U(e.secondaryNeon,1.4));ve.position.set(0,.07,a),this.group.add(ve);const Te=M(new _(t+.1,.07,.07),U(e.primaryNeon,1.4));Te.position.set(0,.07,s+.04),this.group.add(Te);for(const C of[-1,1]){const L=M(new _(.07,.07,i),U(e.primaryNeon,1.2));L.position.set(C*t/2,.07,(s+a)/2),this.group.add(L)}const re=h.OPEN_ZONE_START-s,fe=s+re/2;for(const C of[-1,1]){const L=M(new _(.055,3.4,.055),U(e.tertiaryNeon,.9));L.position.set(C*(t/2),1.7,fe),this.group.add(L)}const v=new z(new _(100,.2,100),new $({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.25,roughness:.95,metalness:0}));v.position.set(0,-.65,0),this.group.add(v)}buildCabinetDetails(e){const t=h.FIELD_DEPTH/2,i=-12/2,s=1.1,a=7.2,n=13.5,r=h.FIELD_WIDTH/2+.75,c=-.25,d=1.3,f=i-1.15;for(const E of[-1,1]){for(let b=0;b<2;b++){const H=b===0?-.26:.16,R=a*.6,O=E*(r+H),Z=c+n/2+.07,P=M(new X(.05,.05,R,8),k.brassMat(e));P.position.set(O,R/2+.3,Z),this.group.add(P);const N=4;for(let q=0;q<=N;q++){const W=.3+q*(R/N),Q=M(new X(.09,.09,.07,10),k.brassMat(e));Q.position.set(O,W,Z),this.group.add(Q)}}const T=M(new _(.48,.1,.1),k.brassMat(e));T.position.set(E*r,a*.6+.3+.05,c+n/2+.07),this.group.add(T)}for(const E of[-1,1]){const T=E*(r-s/2-.025),b=M(new X(.24,.24,.06,18),k.brassMat(e));b.rotation.z=Math.PI/2,b.position.set(T,a*.52,c+.8),this.group.add(b);const H=M(new X(.18,.18,.03,18),U(e.secondaryNeon,.55));H.rotation.z=Math.PI/2,H.position.set(T-E*.035,a*.52,c+.8),this.group.add(H);const R=M(new X(.16,.16,.05,14),k.brassMat(e));R.rotation.z=Math.PI/2,R.position.set(T,a*.28,c-1.2),this.group.add(R);const O=M(new X(.11,.11,.025,14),U(e.primaryNeon,.45));O.rotation.z=Math.PI/2,O.position.set(T-E*.03,a*.28,c-1.2),this.group.add(O)}const p=3.2,u=f+d/2+.05,m=M(new Vt(.82,.1,10,28),k.brassMat(e));m.position.set(0,p,u),this.group.add(m);const x=M(new X(.74,.74,.04,28),new $({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));x.rotation.x=Math.PI/2,x.position.set(0,p,u),this.group.add(x);for(let E=0;E<4;E++){const T=E/4*Math.PI*2+Math.PI/4,b=M(new X(.045,.045,.06,8),k.brassMat(e));b.rotation.x=Math.PI/2,b.position.set(Math.cos(T)*.88,p+Math.sin(T)*.88,u+.03),this.group.add(b)}{const b=h.FIELD_WIDTH+.2,H=b+.34*2,R=t+.34/2,O=M(new _(H,.34,.34),k.brassMat(e));O.position.set(0,4.6+.34/2,R),this.group.add(O);for(const P of[-1,1]){const N=M(new _(.34,4.9399999999999995,.34),k.brassMat(e));N.position.set(P*(b/2+.34/2),(4.6+.34)/2,R),this.group.add(N)}const Z=M(new _(b,.055,.055),U(e.primaryNeon,1.4));Z.position.set(0,4.6-.04,R),this.group.add(Z);for(const P of[-1,1]){const N=M(new _(.055,4.6,.055),U(e.secondaryNeon,1.1));N.position.set(P*(b/2-.04),4.6/2,R),this.group.add(N)}for(const P of[-1,1]){const N=M(new _(.44000000000000006,.44000000000000006,.44000000000000006),k.brassMat(e));N.position.set(P*(b/2+.34/2),4.6+.34/2,R),this.group.add(N)}}{const E=s+.12,T=.12,b=n+.12;for(const H of[-1,1])for(const R of[.33,.66]){const O=M(new _(E,T,b),k.brassMat(e));O.position.set(H*r,R*a-.5,c),this.group.add(O)}}const g=t+4.45,y=M(new _(1.3,.16,.05),new $({color:e.insetColor,roughness:.9,metalness:.1}));y.position.set(0,-.08,g),this.group.add(y);const S=M(new _(1.5,.3,.04),k.brassMat(e));S.position.set(0,-.08,g-.01),this.group.add(S);const A=M(new _(.9,.045,.06),new $({color:0,roughness:1,metalness:0}));A.position.set(0,-.06,g+.01),this.group.add(A)}addSideGuardMeshes(e){const s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const r=n*(h.FIELD_WIDTH/2+.1),c=new _(.2,2,s),d=Fe.createMesh(c,4500223,!1,!1);d.position.set(r,2/2,a),e.add(d),this.sideGuardMeshes.push(d)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class Ls{constructor(e,t,i,s){o(this,"physicsWorld");o(this,"physicsSync");o(this,"collisionHandler");o(this,"pusher");o(this,"medalSpawner");o(this,"itemSpawner");o(this,"dropZone");o(this,"gimmickManager");o(this,"fieldMesh");o(this,"time",0);o(this,"getMedalQuotaMultiplier",()=>1);o(this,"sideGuardActive",!1);o(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new ps,this.physicsSync=new us,this.collisionHandler=new ms,this.pusher=new fs,this.medalSpawner=new ws,this.itemSpawner=new Ps,this.dropZone=new Ms,this.gimmickManager=new Cs,this.fieldMesh=new k(s)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){de.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),I.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=be(t);s&&(this.quotaManager.addItem(s.quotaValue),I.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(h.FIELD_WIDTH/2,.05,h.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,r=h.OPEN_ZONE_START- -12/2,c=-12/2+r/2,d=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),f=this.physicsWorld.createRigidBody(d);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,r/2),f);const p=e.RigidBodyDesc.fixed().setTranslation(h.FIELD_WIDTH/2+n/2,a/2,c),u=this.physicsWorld.createRigidBody(p);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,r/2),u);const m=8,x=.5,g=e.RigidBodyDesc.fixed().setTranslation(0,m/2,-12/2-x/2),y=this.physicsWorld.createRigidBody(g);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(h.FIELD_WIDTH/2+x,m/2,x/2),y)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new Rs(e*1e3+t).pickRandom(h.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+h.PUSHER_DEPTH-h.PUSHER_RANGE,t=h.FIELD_DEPTH/2-h.MEDAL_RADIUS,i=h.FIELD_WIDTH/2-h.MEDAL_RADIUS;for(let p=0;p<h.INITIAL_FIELD_MEDALS;p++){const u=(Math.random()*2-1)*i,m=e+Math.random()*(t-e),x=h.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(u,x,m,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+h.MEDAL_RADIUS,n=e-h.MEDAL_RADIUS-s,r=6,c=Math.ceil(h.INITIAL_PUSHER_MEDALS/r),d=i*2/(r-1),f=n/Math.max(c-1,1);for(let p=0;p<h.INITIAL_PUSHER_MEDALS;p++){const u=p%r,m=Math.floor(p/r),x=-i+u*d+(Math.random()-.5)*.15,g=s+m*f+(Math.random()-.5)*.15,y=h.PUSHER_HEIGHT+h.MEDAL_THICKNESS/2+.8+m*.25;this.medalSpawner.spawn(x,y,g,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=h.FIELD_DEPTH/2-.5,s=2,n=-(12+(-t+1)/2*7);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:6,z:n})}update(e){this.time+=e;const t=4,i=Math.min(e,1/15);this.physicsWorld.setTimestep(i/t),this.collisionHandler.processEvents(this.physicsWorld,t),this.medalSpawner.cleanupFallen(h.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const s=this.pusher.update(e);this.fieldMesh.updatePusher(s),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const r=n*(h.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(r,t/2,a),d=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),d),this.sideGuardBodies.push(d)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class ks{constructor(){o(this,"current",0);o(this,"target",0);o(this,"phase",1);o(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),I.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),I.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*h.STAGES_PER_PHASE+t;return Math.ceil(h.BASE_QUOTA*Math.pow(h.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class Ds{constructor(e){o(this,"phase",1);o(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===h.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(w.PLAYING)}clearCurrentStage(){I.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(w.STAGE_CLEAR),this.stage===h.STAGES_PER_PHASE&&I.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<h.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(w.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Hs(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Bs{constructor(){o(this,"items",[])}addItem(e){const t={instanceId:Hs(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return be(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=be(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class Os{constructor(){o(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});I.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),I.on("item:collected",()=>{this.data.totalItemsCollected++}),I.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Ns{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var B=(l=>(l.Gold="Gold",l.Alchemy="Alchemy",l.Throw="Throw",l.Guard="Guard",l))(B||{}),D=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l))(D||{});const ft=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:B.Gold,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:B.Gold,rarity:D.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:B.Gold,rarity:D.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:B.Gold,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:B.Gold,rarity:D.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:B.Alchemy,rarity:D.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:B.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:B.Alchemy,rarity:D.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:B.Alchemy,rarity:D.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:B.Alchemy,rarity:D.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:B.Throw,rarity:D.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:B.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:B.Throw,rarity:D.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:B.Throw,rarity:D.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:B.Throw,rarity:D.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:B.Guard,rarity:D.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:B.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:B.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:B.Guard,rarity:D.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:B.Guard,rarity:D.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Je(l){return ft.find(e=>e.id===l)}class Gs{constructor(){o(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),I.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Je(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Je(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const et={[D.Common]:60,[D.Rare]:30,[D.Epic]:10};class Fs{pickChoices(e,t,i){const s=new Ue(i),a=new Set(t.map(d=>d.definitionId)),n=ft.filter(d=>!a.has(d.id));if(n.length===0)return[];const r=[],c=new Set;for(let d=0;d<e&&r.length<n.length;d++){const f=Object.keys(et),p=f.map(g=>et[g]),u=s.weightedPick(f,p),m=n.filter(g=>g.rarity===u&&!c.has(g.id));if(m.length===0){const g=n.filter(S=>!c.has(S.id));if(g.length===0)break;const y=g[Math.floor(s.next()*g.length)];r.push(y),c.add(y.id);continue}const x=m[Math.floor(s.next()*m.length)];r.push(x),c.add(x.id)}return r}}const ze=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"},{id:"medal_shower",name:"メダルシャワー",description:"即座に20枚のメダルが降ってくる",price:250,durationMs:0,color:"#ff60a0"}];function tt(l){return ze.find(e=>e.id===l)}class Us{constructor(){o(this,"shopMoney");o(this,"medals");o(this,"sellMultiplier",1);o(this,"ownedActiveItems",new Map);this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*h.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=ze.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let st=!1;function zs(){if(st)return;st=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class Ws{constructor(e){o(this,"el");o(this,"titleEl");o(this,"onStartCallbacks",[]);o(this,"onSettingsCallbacks",[]);o(this,"hideTimer",null);zs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,a.textContent="v0.1.0",this.el.appendChild(this.titleEl),this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}applyTheme(e){const t=e==="steampunk"?"titlePulseSteam":"titlePulseCyber";this.titleEl.style.animation=`${t} 3s ease-in-out infinite`}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class Vs{constructor(e){o(this,"el");o(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let it=!1;function $s(){if(it)return;it=!0;const l=document.createElement("style");l.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(l)}class Ys{constructor(e){o(this,"container");o(this,"bar");o(this,"label");o(this,"reached",!1);$s(),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class qs{constructor(e){o(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e,t){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const s=document.createTextNode("Phase ");this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${t} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let at=!1;function Qs(){if(at)return;at=!0;const l=document.createElement("style");l.textContent=`
    @keyframes floatUp {
      0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.8); }
    }
    @keyframes squashIn {
      0% { transform: translateX(-50%) scale(1.5); }
      100% { transform: translateX(-50%) scale(1); }
    }
    @keyframes feverPulse {
      0%,100% { opacity: 1; text-shadow: 0 0 18px var(--t-primary), 0 0 40px var(--t-primary); }
      50% { opacity: 0.8; text-shadow: 0 0 30px var(--t-primary), 0 0 60px var(--t-primary), 0 0 80px var(--t-secondary); }
    }
    @keyframes feverBg {
      0%,100% { border-color: var(--t-primary); box-shadow: inset 0 0 32px rgba(255,215,0,0.15), 0 0 32px rgba(255,215,0,0.3); }
      50% { border-color: var(--t-secondary); box-shadow: inset 0 0 48px rgba(0,232,255,0.18), 0 0 48px rgba(0,232,255,0.35); }
    }
    @keyframes edgeGlow {
      0%,100% { opacity: 0.7; }
      50% { opacity: 1.0; }
    }
    @keyframes comboIn {
      0% { transform: translateX(-50%) scale(1.6); opacity:0; }
      60% { transform: translateX(-50%) scale(0.95); opacity:1; }
      100% { transform: translateX(-50%) scale(1); opacity:1; }
    }
    @keyframes feverBarShrink {
      from { width: 100%; }
      to   { width: 0%; }
    }
    @keyframes flashOverlay {
      0% { opacity: 0.55; }
      100% { opacity: 0; }
    }
  `,document.head.appendChild(l)}class js{constructor(e){o(this,"el");o(this,"medalCounter");o(this,"quotaBar");o(this,"phaseIndicator");o(this,"throwHint");o(this,"inventoryPanel");o(this,"activeItemPanel");o(this,"countdownEl");o(this,"feverBannerEl");o(this,"comboEl");o(this,"edgeGlowEl");o(this,"onUseActiveCallbacks",[]);o(this,"hideTimer",null);o(this,"jackpotHudEl");o(this,"jackpotBarEl");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Vs(this.el),this.quotaBar=new Ys(this.el),this.phaseIndicator=new qs(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
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
    `,this.el.appendChild(this.countdownEl),this.edgeGlowEl=document.createElement("div"),this.edgeGlowEl.style.cssText=`
      position: absolute; inset: 0;
      border: 4px solid var(--t-primary);
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
      animation: edgeGlow 0.8s ease-in-out infinite;
      box-shadow: inset 0 0 40px rgba(255,215,0,0.12), 0 0 40px rgba(255,215,0,0.25);
    `,this.el.appendChild(this.edgeGlowEl),this.feverBannerEl=document.createElement("div"),this.feverBannerEl.style.cssText=`
      position: absolute; top: 56px; left: 50%; transform: translateX(-50%);
      display: none; flex-direction: column; align-items: center;
      pointer-events: none; z-index: 10;
    `,this.feverBannerEl.innerHTML=`
      <div style="
        font-size: 2.6rem; font-weight: 900; letter-spacing: 0.25em;
        color: var(--t-primary);
        animation: feverPulse 0.7s ease-in-out infinite;
        text-transform: uppercase;
      ">FEVER!</div>
      <div style="
        width: 200px; height: 5px; background: rgba(255,255,255,0.15);
        border-radius: 3px; margin-top: 6px; overflow: hidden;
      ">
        <div class="fever-timer-bar" style="
          height: 100%; background: var(--t-primary);
          border-radius: 3px;
        "></div>
      </div>
    `,this.el.appendChild(this.feverBannerEl),this.comboEl=document.createElement("div"),this.comboEl.style.cssText=`
      position: absolute; bottom: 28%; left: 50%;
      transform: translateX(-50%);
      display: none; pointer-events: none; z-index: 10;
      font-size: 2rem; font-weight: bold;
      color: var(--t-secondary);
      text-shadow: 0 0 12px var(--t-secondary);
      letter-spacing: 0.1em;
    `,this.el.appendChild(this.comboEl),this.jackpotHudEl=document.createElement("div"),this.jackpotHudEl.style.cssText=`
      position: absolute;
      top: 86px;
      right: 16px;
      width: 130px;
      background: var(--t-panel-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--t-border-faint);
      border-radius: 10px;
      padding: 6px 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      pointer-events: none;
      display: none;
    `,this.jackpotHudEl.innerHTML=`
      <div style="font-size:0.6rem;color:var(--t-text-dim);letter-spacing:0.12em;margin-bottom:4px;">JACKPOT</div>
      <div style="width:100%;height:6px;background:var(--t-track-bg);border-radius:3px;overflow:hidden;">
        <div class="jp-bar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--t-secondary),var(--t-primary));border-radius:3px;transition:width 0.3s ease;"></div>
      </div>
      <div class="jp-label" style="font-size:0.65rem;color:var(--t-text-dim);text-align:right;margin-top:3px;">0 / 45</div>
    `,this.jackpotBarEl=this.jackpotHudEl.querySelector(".jp-bar"),this.el.appendChild(this.jackpotHudEl),e.appendChild(this.el),Qs()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="var(--t-primary)"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
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
    `,a.textContent=e,this.el.appendChild(a),setTimeout(()=>{a.style.animation="floatUp 1.2s ease-out forwards"},120),setTimeout(()=>a.remove(),1320)}updateInventory(e){if(this.inventoryPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Items",this.inventoryPanel.appendChild(t);for(const i of e){const s=be(i.definitionId);if(!s)continue;const a=document.createElement("div");a.style.cssText=`
        background: rgba(0,0,0,0.6);
        border: 1px solid var(--t-track-bg);
        border-radius: 4px;
        padding: 4px 8px;
        margin-bottom: 4px;
        font-size: 0.75rem;
        color: var(--t-text-bright);
      `,a.textContent=s.name,this.inventoryPanel.appendChild(a)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),a=i.remainingMs??0,n=a>0,r=n?` (${Math.ceil(a/1e3)}s)`:"";s.style.cssText=`
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
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${r}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}showFever(e){this.edgeGlowEl.style.opacity="1",this.feverBannerEl.style.display="flex";const t=this.feverBannerEl.querySelector(".fever-timer-bar");t&&(t.style.animation="none",t.style.width="100%",t.offsetWidth,t.style.animation=`feverBarShrink ${e}ms linear forwards`),this.flashScreen("rgba(255,215,0,0.22)")}hideFever(){this.edgeGlowEl.style.opacity="0",this.feverBannerEl.style.display="none",this.flashScreen("rgba(100,100,200,0.18)")}showCombo(e){if(e<2){this.comboEl.style.display="none";return}this.comboEl.style.display="block",this.comboEl.textContent=`COMBO ×${e}`,this.comboEl.style.animation="none",this.comboEl.offsetWidth,this.comboEl.style.animation="comboIn 0.25s ease forwards";const t=Math.min(e*20,200);this.comboEl.style.filter=`hue-rotate(${t}deg)`}hideCombo(){this.comboEl.style.display="none"}flashScreen(e){const t=document.createElement("div");t.style.cssText=`
      position: absolute; inset: 0; background: ${e};
      pointer-events: none; border-radius: 4px;
      animation: flashOverlay 0.5s ease-out forwards;
    `,this.el.appendChild(t),setTimeout(()=>t.remove(),500)}onUseActive(e){this.onUseActiveCallbacks.push(e)}updateJackpot(e,t){this.jackpotHudEl.style.display="block";const i=Math.min(e/t,1)*100;this.jackpotBarEl.style.width=`${i}%`;const s=this.jackpotHudEl.querySelector(".jp-label");s&&(s.textContent=`${Math.floor(e)} / ${t}`),i>=80?(this.jackpotHudEl.style.boxShadow="0 0 16px var(--t-primary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-primary)"):(this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)")}resetJackpot(e){this.jackpotBarEl.style.width="0%";const t=this.jackpotHudEl.querySelector(".jp-label");t&&(t.textContent=`0 / ${e}`),this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)"}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let nt=!1;function Zs(){if(nt)return;nt=!0;const l=document.createElement("style");l.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Ks{constructor(e){o(this,"el");o(this,"onContinueCallbacks",[]);o(this,"onSkipCallbacks",[]);o(this,"titleEl");o(this,"infoEl");o(this,"continueBtn");o(this,"shopBtn");o(this,"hideTimer",null);Zs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="var(--t-primary)",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="var(--t-success)",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let ot=!1;function Xs(){if(ot)return;ot=!0;const l=document.createElement("style");l.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Js{constructor(e){o(this,"el");o(this,"onRetryCallbacks",[]);o(this,"hideTimer",null);Xs(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((r,c)=>{const d=document.createElement("div");d.style.cssText=`
        color: var(--t-text-dim);
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,d.textContent=r,a.appendChild(d)});const n=document.createElement("button");n.style.cssText=`
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
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(r=>r())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const ei=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class ti{constructor(e){o(this,"el");o(this,"onSelectCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
      ${ei}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: var(--t-text-bright); font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const r=document.createElement("div");return r.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); line-height: 1.4;",r.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(r),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const rt=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class si{constructor(e){o(this,"el");o(this,"moneyEl");o(this,"inventoryEl");o(this,"onBuyMedalsCallbacks",[]);o(this,"onSellCallbacks",[]);o(this,"onContinueCallbacks",[]);o(this,"onBuyActiveCallbacks",[]);o(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="rgba(0,255,136,0.13)"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const r=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const y of r){const S=e>=y.price,A=document.createElement("button");A.style.cssText=`
        padding: 12px 18px;
        background: transparent;
        border: 2px solid ${S?"var(--t-primary)":"#555"};
        color: ${S?"var(--t-primary)":"#555"};
        cursor: ${S?"pointer":"default"};
        font-size: 0.85rem;
        border-radius: 6px;
        transition: background 0.2s, transform 0.15s;
        min-width: 120px;
        text-align: center;
      `,A.innerHTML=`<strong>${y.label}</strong><br>${y.price} G`,S&&(A.addEventListener("mouseenter",()=>{A.style.background="rgba(200,131,26,0.13)",A.style.transform="translateY(-2px)"}),A.addEventListener("mouseleave",()=>{A.style.background="transparent",A.style.transform="translateY(0)"}),A.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(E=>E(y.count))})),n.appendChild(A)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const d=document.createElement("div");d.style.cssText="margin-bottom: 28px;";const f=document.createElement("h3");f.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",f.textContent="ACTIVE ITEMS (buy to use during game)",d.appendChild(f);const p=document.createElement("div");p.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const u=new Map(i.map(y=>[y.id,y.count]));for(const y of ze){const S=e>=y.price,A=u.get(y.id)??0,E=document.createElement("div");E.style.cssText=`
        padding: 14px;
        ${rt}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${S?y.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const T=document.createElement("div");T.style.cssText=`color: ${y.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,T.textContent=y.name;const b=document.createElement("div");b.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",b.textContent=y.description;const H=document.createElement("div");H.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",H.textContent=`Owned: ${A}`;const R=document.createElement("button");R.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${S?y.color:"#555"};
        color: ${S?y.color:"#555"};
        cursor: ${S?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,R.textContent=`Buy ${y.price} G`,S&&(R.addEventListener("mouseenter",()=>R.style.background=`${y.color}22`),R.addEventListener("mouseleave",()=>R.style.background="transparent"),E.addEventListener("mouseenter",()=>{E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.transform="translateY(0)",E.style.boxShadow=""}),R.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(O=>O(y.id))})),E.appendChild(T),E.appendChild(b),E.appendChild(H),E.appendChild(R),p.appendChild(E)}d.appendChild(p),this.inventoryEl.appendChild(d);const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(m);const x=document.createElement("div"),g=document.createElement("h3");if(g.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",g.textContent="YOUR ITEMS (click to sell)",x.appendChild(g),t.length===0){const y=document.createElement("p");y.style.cssText="color: var(--t-text-dim); opacity: 0.5;",y.textContent="No items collected yet.",x.appendChild(y)}else{const y=document.createElement("div");y.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const S of t){const A=be(S.definitionId);if(!A)continue;const E=document.createElement("div");E.style.cssText=`
          width: 160px;
          padding: 14px;
          ${rt}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,E.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;">${A.name}</div>
          <div style="color:var(--t-text-dim);font-size:0.75rem;">${A.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;margin-top:8px;">Sell: ${A.sellPrice} G</div>
        `,E.addEventListener("mouseenter",()=>{E.style.borderColor="var(--t-primary)",E.style.transform="translateY(-2px)",E.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),E.addEventListener("mouseleave",()=>{E.style.borderColor="var(--t-track-bg)",E.style.transform="translateY(0)",E.style.boxShadow=""}),E.addEventListener("click",()=>{this.onSellCallbacks.forEach(T=>T(S.instanceId))}),y.appendChild(E)}x.appendChild(y)}this.inventoryEl.appendChild(x)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const ii={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.85)",bgOverlayDark:"rgba(10,5,20,0.92)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.55,bloomThreshold:.82,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.8,fillColor:4210943,fillIntensity:.7,warmPointColor:16765056,warmPointIntensity:2,coolPointColor:4482815,coolPointIntensity:1.4}},gt={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.85)",bgOverlayDark:"rgba(18,10,2,0.92)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.8,bloomThreshold:.76,bloomRadius:.55,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:2.2,fillColor:10510384,fillIntensity:.9,warmPointColor:16748592,warmPointIntensity:2.8,coolPointColor:9455640,coolPointIntensity:1}},ai={name:"royal",displayName:"ROYAL CASINO",ui:{bgOverlay:"rgba(8,4,24,0.88)",bgOverlayDark:"rgba(5,2,16,0.95)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.28)",secondary:"#00e8ff",tertiary:"#ff28a0",success:"#40ff90",textDim:"#b090d0",textBright:"#fff8e0",borderFaint:"rgba(255,215,0,0.22)",panelBg:"rgba(255,215,0,0.06)",trackBg:"#1a083a",barStart:"#8040ff",barEnd:"#ffd700",shadowGlow:"rgba(255,215,0,0.78)"},scene:{background:1181244,fogColor:1181244,cabinetColor:1969720,brassColor:13934608,brassRoughness:.08,brassMetalness:.98,insetColor:656416,screenBase:524320,screenEmissive:3805344,groundColor:2757712,primaryNeon:16766720,secondaryNeon:59647,tertiaryNeon:16722080,starColor:16769152,gridColorA:2624080,gridColorB:1312048,pusherHousingColor:1706032,bloomStrength:1.1,bloomThreshold:.62,bloomRadius:.5,fieldTexBase:"#12082a",pusherTexBase:"#1a0c34",wallTexBase:"#0e0620"},lights:{ambientColor:7352480,ambientIntensity:2,fillColor:5251264,fillIntensity:.85,warmPointColor:16765056,warmPointIntensity:3.2,coolPointColor:6295807,coolPointIntensity:2}},yt={cyber:ii,steampunk:gt,royal:ai};let lt=!1;function ni(){if(lt)return;lt=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class oi{constructor(e){o(this,"el");o(this,"onVolumeChangeCallbacks",[]);o(this,"onThemeChangeCallbacks",[]);o(this,"onCloseCallbacks",[]);o(this,"hideTimer",null);o(this,"themeBtns",new Map);ni(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",t.appendChild(i);const s=document.createElement("div");s.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",s.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const x of n){const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const y=document.createElement("div");y.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",y.textContent=x.label;const S=document.createElement("input");S.type="range",S.min="0",S.max="1",S.step="0.05",S.value=String(x.value),S.className="settings-slider",S.style.cssText="flex: 1;";const A=document.createElement("div");A.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",A.textContent=`${Math.round(x.value*100)}%`,S.addEventListener("input",()=>{const E=parseFloat(S.value);A.textContent=`${Math.round(E*100)}%`,this.onVolumeChangeCallbacks.forEach(T=>T(x.type,E))}),g.appendChild(y),g.appendChild(S),g.appendChild(A),s.appendChild(g)}t.appendChild(s);const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(r);const c=document.createElement("div");c.style.cssText="margin-bottom: 32px;";const d=document.createElement("div");d.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",d.textContent="THEME",c.appendChild(d);const f=document.createElement("div");f.style.cssText="display: flex; gap: 10px; flex-wrap: wrap;";const p=["royal","cyber","steampunk"];for(const x of p){const g=x===e.theme,y=document.createElement("button");y.style.cssText=`
        flex: 1;
        padding: 12px 16px;
        background: ${g?"var(--t-primary)":"transparent"};
        border: 2px solid var(--t-primary);
        color: ${g?"var(--t-bg-overlay-dark)":"var(--t-primary)"};
        cursor: pointer;
        font-size: 0.85rem;
        border-radius: 8px;
        letter-spacing: 0.1em;
        transition: all 0.2s;
        font-weight: ${g?"bold":"normal"};
      `,y.textContent=yt[x].displayName,y.addEventListener("click",()=>{this.selectTheme(x),this.onThemeChangeCallbacks.forEach(S=>S(x))}),this.themeBtns.set(x,y),f.appendChild(y)}c.appendChild(f),t.appendChild(c);const u=document.createElement("hr");u.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(u);const m=document.createElement("button");m.style.cssText=`
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
    `,m.textContent="CLOSE",m.addEventListener("mouseenter",()=>{m.style.borderColor="var(--t-primary)",m.style.color="var(--t-primary)"}),m.addEventListener("mouseleave",()=>{m.style.borderColor="var(--t-border-faint)",m.style.color="var(--t-text-dim)"}),m.addEventListener("click",()=>{this.onCloseCallbacks.forEach(x=>x())}),t.appendChild(m),this.el.appendChild(t)}selectTheme(e){this.themeBtns.forEach((t,i)=>{const s=i===e;t.style.background=s?"var(--t-primary)":"transparent",t.style.color=s?"var(--t-bg-overlay-dark)":"var(--t-primary)",t.style.fontWeight=s?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}const G=["🥇","⭐","💎","🎰"];let ct=!1;function ri(){if(ct)return;ct=!0;const l=document.createElement("style");l.textContent=`
    @keyframes chanceIn {
      0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes reelFlash {
      0%,100% { background: rgba(0,0,0,0.4); }
      50% { background: rgba(255,215,0,0.15); }
    }
    @keyframes chanceResultPop {
      0% { transform: scale(0.5); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
  `,document.head.appendChild(l)}class li{constructor(e){o(this,"el");o(this,"reelEls",[]);o(this,"reelWrapperEls",[]);o(this,"resultEl");o(this,"hideTimer",null);ri(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      z-index: 200;
    `;const t=document.createElement("div");t.style.cssText=`
      font-size: 2rem;
      font-weight: 900;
      color: var(--t-primary);
      letter-spacing: 0.3em;
      margin-bottom: 28px;
      text-shadow: 0 0 24px var(--t-primary), 0 0 48px var(--t-primary);
      animation: chanceIn 0.4s ease forwards;
    `,t.textContent="✦ CHANCE TIME! ✦",this.el.appendChild(t);const i=document.createElement("div");i.style.cssText=`
      display: flex;
      gap: 12px;
      background: rgba(0,0,0,0.7);
      border: 2px solid var(--t-primary);
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 0 40px var(--t-primary), inset 0 0 24px rgba(0,0,0,0.6);
    `;for(let a=0;a<3;a++){const n=document.createElement("div");n.style.cssText=`
        width: 88px;
        height: 88px;
        overflow: hidden;
        border-radius: 10px;
        background: rgba(0,0,0,0.4);
        border: 1px solid var(--t-border-faint);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        position: relative;
        transition: box-shadow 0.3s ease;
      `,this.reelWrapperEls.push(n);const r=document.createElement("div");r.style.cssText="text-align: center; line-height: 1; user-select: none;",r.textContent=G[0],this.reelEls.push(r),n.appendChild(r),i.appendChild(n)}this.el.appendChild(i);const s=document.createElement("div");s.style.cssText=`
      margin-top: 14px;
      font-size: 0.75rem;
      color: var(--t-text-dim);
      letter-spacing: 0.15em;
    `,s.textContent="3 MATCH: +40 medals  |  2 MATCH: +15 medals",this.el.appendChild(s),this.resultEl=document.createElement("div"),this.resultEl.style.cssText=`
      font-size: 1.6rem;
      font-weight: bold;
      margin-top: 24px;
      min-height: 2.2rem;
      text-align: center;
      color: var(--t-primary);
      letter-spacing: 0.1em;
    `,this.el.appendChild(this.resultEl),e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.resultEl.textContent="",this.resultEl.style.animation="",this.reelWrapperEls.forEach(s=>{s.style.boxShadow="",s.style.animation=""}),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"});const t=Math.random()*100;let i;if(t<15){const s=G[Math.floor(Math.random()*G.length)];i={type:"triple",medals:40,symbols:[s,s,s]}}else if(t<50){const s=G[Math.floor(Math.random()*G.length)];let a=G[Math.floor(Math.random()*G.length)];for(;a===s;)a=G[Math.floor(Math.random()*G.length)];i={type:"double",medals:15,symbols:[s,s,a]}}else{let s,a,n;do s=G[Math.floor(Math.random()*G.length)],a=G[Math.floor(Math.random()*G.length)],n=G[Math.floor(Math.random()*G.length)];while(s===a||a===n||s===n);i={type:"miss",medals:0,symbols:[s,a,n]}}this._spinReels(i,e)}_spinReels(e,t){this.reelEls.forEach(s=>{s.textContent=G[Math.floor(Math.random()*G.length)]});const i=(s,a,n)=>new Promise(r=>{const c=this.reelEls[s],d=setInterval(()=>{c.textContent=G[Math.floor(Math.random()*G.length)]},75);setTimeout(()=>{clearInterval(d),c.textContent=a,this.reelWrapperEls[s].style.boxShadow="0 0 16px var(--t-primary)",this.reelWrapperEls[s].style.animation="reelFlash 0.4s ease",r()},n)});i(0,e.symbols[0],1e3).then(()=>i(1,e.symbols[1],500)).then(()=>i(2,e.symbols[2],500)).then(()=>{let s="",a="var(--t-text-dim)";e.type==="triple"?(s=`🎉 JACKPOT!  +${e.medals} MEDALS!`,a="var(--t-primary)",this.reelWrapperEls.forEach(n=>{n.style.boxShadow="0 0 28px var(--t-primary), inset 0 0 12px rgba(255,215,0,0.2)"})):e.type==="double"?(s=`✓ MATCH!  +${e.medals} MEDALS!`,a="var(--t-success)"):(s="MISS...  Try again next time!",a="var(--t-text-dim)"),this.resultEl.textContent=s,this.resultEl.style.color=a,this.resultEl.style.animation="none",this.resultEl.offsetWidth,this.resultEl.style.animation="chanceResultPop 0.4s ease forwards",setTimeout(()=>{this.hide(),t(e)},1800)})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class ci{constructor(e){o(this,"titleScreen");o(this,"gameScreen");o(this,"stageResultScreen");o(this,"resultScreen");o(this,"skillSelectScreen");o(this,"shopScreen");o(this,"settingsScreen");o(this,"chanceScreen");this.titleScreen=new Ws(e),this.gameScreen=new js(e),this.stageResultScreen=new Ks(e),this.resultScreen=new Js(e),this.skillSelectScreen=new ti(e),this.shopScreen=new si(e),this.settingsScreen=new oi(e),this.chanceScreen=new li(e),I.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case w.TITLE:this.titleScreen.show();break;case w.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case w.STAGE_CLEAR:break;case w.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,r){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),r&&this.gameScreen.updateActiveItems(r)}}const hi=300,di=380;class pi{constructor(e){o(this,"throwCallbacks",[]);o(this,"enabled",!1);o(this,"holdTimer",null);o(this,"autoInterval",null);o(this,"autoActive",!1);o(this,"ignoreNextClick",!1);o(this,"lastNX",0);o(this,"lastNY",0);o(this,"onClick",e=>{if(!this.enabled)return;if(this.ignoreNextClick){this.ignoreNextClick=!1;return}const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this._fire(t,i)});o(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this._fire(i,s)});o(this,"onPointerDown",e=>{!this.enabled||e.button!==0||(this.lastNX=e.clientX/window.innerWidth*2-1,this.lastNY=e.clientY/window.innerHeight*2-1,this.holdTimer=setTimeout(()=>{this.autoActive=!0,this.autoInterval=setInterval(()=>{if(!this.enabled){this._stopAutoThrow();return}this._fire(this.lastNX,this.lastNY)},di)},hi))});o(this,"onPointerUp",e=>{this.autoActive&&(this.ignoreNextClick=!0),this._stopAutoThrow()});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1}),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp)}enable(){this.enabled=!0}disable(){this.enabled=!1,this._stopAutoThrow()}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}_fire(e,t){this.throwCallbacks.forEach(i=>i(e,t))}_stopAutoThrow(){this.holdTimer!==null&&(clearTimeout(this.holdTimer),this.holdTimer=null),this.autoInterval!==null&&(clearInterval(this.autoInterval),this.autoInterval=null),this.autoActive=!1}dispose(){this._stopAutoThrow(),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp)}}const ie=class ie{constructor(){o(this,"ctx",null);o(this,"masterGain",null);o(this,"sfxGain",null);o(this,"bgmGain",null);o(this,"bgmPlaying",!1);o(this,"bgmNextTime",0);o(this,"bgmSchedulerTimer",null);o(this,"bgmBeatIndex",0);o(this,"bgmBPM",110)}get bgmBeat(){return 60/this.bgmBPM}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),t=this.getSfxGain(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let d=0;d<i;d++)a[d]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(800,e.currentTime),r.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),r.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(r),r.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getSfxGain();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playFeverStart(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5,1318.5].forEach((s,a)=>{this._playNote(e,t,"square",s,e.currentTime+a*.055,.18,.28)}),this._playNote(e,t,"sawtooth",110,e.currentTime,.35,.25)}playFeverEnd(){const e=this.getCtx(),t=this.getSfxGain();[880,659.25,523.25,392].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.09,.25,.18)})}playCombo(e){const t=this.getCtx(),i=this.getSfxGain(),s=440*Math.pow(1.12,Math.min(e-2,8));this._playNote(t,i,"triangle",s,t.currentTime,.12,.22),this._playNote(t,i,"triangle",s*1.5,t.currentTime+.06,.1,.15)}playSkillSelected(){const e=this.getCtx(),t=this.getSfxGain();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*(1-c/a.length);const n=e.createBufferSource();n.buffer=s;const r=e.createGain();r.gain.value=.35,n.connect(r),r.connect(t),n.start()}playJackpotFanfare(){const e=this.getCtx(),t=this.getSfxGain(),i=[261.63,329.63,392,523.25,659.25,783.99,1046.5];i.forEach((a,n)=>{this._playNote(e,t,"square",a,e.currentTime+n*.04,.18,.25)});const s=e.currentTime+i.length*.04+.05;this._playNote(e,t,"sine",1046.5,s,.7,.3),this._playNote(e,t,"sine",1318.5,s,.7,.22),this._playNote(e,t,"sine",1567.98,s,.7,.16),this._playNote(e,t,"sawtooth",110,e.currentTime,.45,.28)}startBGM(e=!1){this.bgmPlaying&&this.stopBGM(),this.bgmBPM=e?145:110,this.bgmPlaying=!0;const t=this.getCtx();this.bgmNextTime=t.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getBgmGain(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=this.bgmBeat,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=this.bgmBPM>120?ie.MELODY_FEVER:ie.MELODY_NORMAL,n=ie.BASS_FREQS,r=Math.floor(s/2)%n.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",n[r],i,this.bgmBeat*1.8,.12);let c=s%8,d=0;for(const[g,y]of a){if(c>=d&&c<d+y){g>0&&this._scheduleNote(e,t,"square",g,i,this.bgmBeat*y*.85,.1);break}d+=y}const f=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),p=f.getChannelData(0);for(let g=0;g<p.length;g++)p[g]=(Math.random()*2-1)*(1-g/p.length);const u=e.createBufferSource();u.buffer=f;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=8e3;const x=e.createGain();x.gain.value=.04,u.connect(m),m.connect(x),x.connect(t),u.start(i)}_playNote(e,t,i,s,a,n,r){const c=e.createOscillator();c.type=i,c.frequency.value=s;const d=e.createGain();d.gain.setValueAtTime(r,a),d.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(d),d.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,r){this._playNote(e,t,i,s,a,n,r)}};o(ie,"BASS_FREQS",[110,98,82.41,110]),o(ie,"MELODY_NORMAL",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]),o(ie,"MELODY_FEVER",[[392,.5],[523.25,.5],[659.25,.5],[783.99,.5],[659.25,.5],[523.25,.5],[392,.5],[523.25,.5]]);let Be=ie;const ht="yukimedal_settings",ye={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"royal"},ae=class ae{constructor(){o(this,"_data");this._data=this._load()}static getInstance(){return ae._instance||(ae._instance=new ae),ae._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(ht);if(e){const t=JSON.parse(e);return{masterVolume:typeof t.masterVolume=="number"?t.masterVolume:ye.masterVolume,bgmVolume:typeof t.bgmVolume=="number"?t.bgmVolume:ye.bgmVolume,sfxVolume:typeof t.sfxVolume=="number"?t.sfxVolume:ye.sfxVolume,theme:["cyber","steampunk","royal"].includes(t.theme)?t.theme:ye.theme}}}catch{}return{...ye}}_save(){try{localStorage.setItem(ht,JSON.stringify(this._data))}catch{}}};o(ae,"_instance",null);let Oe=ae;const ne=class ne{constructor(){o(this,"_currentName","steampunk");o(this,"_currentTheme",gt);o(this,"_callbacks",[]);o(this,"_styleEl",null)}static getInstance(){return ne._instance||(ne._instance=new ne),ne._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const t=yt[e];if(!t)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=t.ui;this._styleEl.textContent=`:root {
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
}`,this._currentName=e,this._currentTheme=t,this._callbacks.forEach(s=>s(t))}onChange(e){this._callbacks.push(e)}};o(ne,"_instance",null);let Ne=ne;const se=class se{constructor(){o(this,"comboCount",0);o(this,"lastCollectMs",0);o(this,"feverEndMs",0);o(this,"_wasInFever",!1)}onMedalCollected(e){const t=Date.now();t-this.lastCollectMs<se.COMBO_WINDOW_MS?this.comboCount+=e:this.comboCount=e,this.lastCollectMs=t,I.emit("combo:updated",{count:this.comboCount}),this.comboCount>=se.COMBO_TO_FEVER&&!this.isFever&&this._triggerFever()}update(){const e=this.isFever;this._wasInFever&&!e&&(this._wasInFever=!1,this.comboCount=0,I.emit("fever:ended",void 0)),this._wasInFever=e}get isFever(){return Date.now()<this.feverEndMs}get feverRemainingMs(){return Math.max(0,this.feverEndMs-Date.now())}get comboCountValue(){return this.comboCount}reset(){this.comboCount=0,this.lastCollectMs=0,this.feverEndMs=0,this._wasInFever=!1}_triggerFever(){this.feverEndMs=Date.now()+se.FEVER_DURATION_MS,this.comboCount=0,this._wasInFever=!0,I.emit("fever:started",void 0)}};o(se,"COMBO_WINDOW_MS",5e3),o(se,"COMBO_TO_FEVER",6),o(se,"FEVER_DURATION_MS",1e4),o(se,"FEVER_SPEED_MULT",1.6);let Ie=se;const ke=new $t(.04,4,4);class ui{constructor(e){o(this,"particles",[]);o(this,"flashRings",[]);o(this,"scene");this.scene=e}spawnFlashRing(e,t,i,s){const a=new qe(.1,.35,16),n=new De({color:s,transparent:!0,opacity:.9,side:Qe}),r=new z(a,n);r.position.set(e,t,i),r.rotation.x=-Math.PI/2,this.scene.add(r),this.flashRings.push({mesh:r,life:0,maxLife:.25})}spawnMedalCollect(e,t,i){this.spawnFlashRing(e,t,i,16766720);const s=12;for(let a=0;a<s;a++){const n=new _e({color:16766720,flatShading:!0,transparent:!0}),r=new z(ke,n);r.position.set(e,t,i);const c=a/s*Math.PI*2,d=1.5+Math.random()*3,f=new ee(Math.cos(c)*d*.5,2+Math.random()*3,Math.sin(c)*d*.5);this.scene.add(r),this.particles.push({mesh:r,velocity:f,life:0,maxLife:.6+Math.random()*.4})}}spawnItemCollect(e,t,i,s){this.spawnFlashRing(e,t,i,s);const a=20;for(let n=0;n<a;n++){const r=new _e({color:s,flatShading:!0,transparent:!0,emissive:s,emissiveIntensity:.8}),c=new z(ke,r);c.position.set(e,t,i);const d=n/a*Math.PI*2,f=2+Math.random()*2.5,p=new ee(Math.cos(d)*f,3+Math.random()*2,Math.sin(d)*f);this.scene.add(c),this.particles.push({mesh:c,velocity:p,life:0,maxLife:1.2+Math.random()*.4})}}spawnJackpot(e,t,i){this.spawnFlashRing(e,t,i,16766720);const s=new qe(.3,.8,32),a=new De({color:16777215,transparent:!0,opacity:.85,side:Qe}),n=new z(s,a);n.position.set(e,t,i),n.rotation.x=-Math.PI/2,this.scene.add(n),this.flashRings.push({mesh:n,life:0,maxLife:.4});const r=30;for(let c=0;c<r;c++){const d=c/r*360,f=new pe(`hsl(${d}, 100%, 60%)`),p=new _e({color:f,flatShading:!0,transparent:!0,emissive:f,emissiveIntensity:.8}),u=new z(ke,p);u.position.set(e,t,i);const m=c/r*Math.PI*2+Math.random()*.3,x=3.5+Math.random()*4.5,g=new ee(Math.cos(m)*x,4+Math.random()*5,Math.sin(m)*x);this.scene.add(u),this.particles.push({mesh:u,velocity:g,life:0,maxLife:1.6+Math.random()*.6})}}update(e){const i=[];for(const a of this.particles){a.life+=e;const n=a.life/a.maxLife;a.velocity.y+=-9.8*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.z+=e*3,a.mesh.material.opacity=1-n,n>=1&&i.push(a)}for(const a of i)this.scene.remove(a.mesh),a.mesh.material.dispose(),this.particles.splice(this.particles.indexOf(a),1);const s=[];for(const a of this.flashRings){a.life+=e;const n=a.life/a.maxLife,r=1+n*2;a.mesh.scale.set(r,r,r),a.mesh.material.opacity=.9*(1-n),n>=1&&s.push(a)}for(const a of s)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.flashRings.splice(this.flashRings.indexOf(a),1)}clear(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles=[];for(const e of this.flashRings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.flashRings=[]}}class mi{constructor(){o(this,"counter",0);o(this,"jackpotCount",0)}onQuotaAdded(e){this.counter+=e,I.emit("jackpot:progress",{current:this.counter,target:h.JACKPOT_THRESHOLD}),this.counter>=h.JACKPOT_THRESHOLD&&(this.counter-=h.JACKPOT_THRESHOLD,this.jackpotCount++,I.emit("jackpot:triggered",{count:this.jackpotCount}))}reset(){this.counter=0,this.jackpotCount=0}get progress(){return Math.min(1,this.counter/h.JACKPOT_THRESHOLD)}get current(){return this.counter}get target(){return h.JACKPOT_THRESHOLD}}async function fi(){const l=Oe.getInstance(),e=Ne.getInstance();e.applyTheme(l.theme);const t=new Qt,i=new jt,s=new Kt,a=new Os,n=new Ns,r=document.getElementById("app"),c=document.getElementById("ui-root"),d=new ls(r),f=new cs,p=new hs(d),u=new ds(d.scene);d.setCamera(f.camera);const m=e.currentTheme;d.applySceneTheme(m.scene),p.applyTheme(m.lights),u.applyTheme(m.scene);const x=new ks,g=new Ds(t),y=new Bs,S=new Gs,A=new Fs,E=new Us,T=new Ls(d,x,y,m.scene);T.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier);const b=new ci(c),H=new pi(d.renderer.domElement);b.titleScreen.applyTheme(l.theme);const R=new Ie,O=new ui(d.scene),Z=new mi,P=new Be;P.setMasterVolume(l.masterVolume),P.setBgmVolume(l.bgmVolume),P.setSfxVolume(l.sfxVolume),e.onChange(v=>{d.applySceneTheme(v.scene),p.applyTheme(v.lights),u.applyTheme(v.scene),b.titleScreen.applyTheme(v.name),T.physicsWorld.initialized&&T.rebuildFieldMesh(v.scene)}),b.titleScreen.onSettings(()=>{b.settingsScreen.show(l.snapshot)}),b.settingsScreen.onClose(()=>{b.settingsScreen.hide()}),b.settingsScreen.onVolumeChange((v,C)=>{v==="master"?(l.setMasterVolume(C),P.setMasterVolume(C)):v==="bgm"?(l.setBgmVolume(C),P.setBgmVolume(C)):(l.setSfxVolume(C),P.setSfxVolume(C))}),b.settingsScreen.onThemeChange(v=>{l.setTheme(v),e.applyTheme(v)});let N=0,q=!1,W=0,Q=0,te=0;b.titleScreen.onStart(()=>{xe()}),b.stageResultScreen.onContinue(()=>{b.stageResultScreen.hide(),g.advanceStage(),oe()}),b.stageResultScreen.onSkip(()=>{b.stageResultScreen.hide(),g.advancePhase(),Ee()}),b.shopScreen.onBuyMedals(v=>{const C=v*h.MEDAL_BUY_PRICE;E.buyMedals(v)?b.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems()):console.log(`Not enough shop money (need ${C} G, have ${E.money} G)`)}),b.shopScreen.onSell(v=>{const C=E.sellItem(v,y);a.addShopMoney(C),b.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}),b.shopScreen.onBuyActive(v=>{E.buyActiveItem(v)&&b.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}),b.shopScreen.onContinue(()=>{b.shopScreen.hide(),ve()}),b.skillSelectScreen.onSelect(v=>{S.addSkill(v,g.currentPhase),E.setSellMultiplier(S.itemSellMultiplier),b.skillSelectScreen.hide(),t.transition(w.STAGE_START),oe()}),b.resultScreen.onRetry(()=>{b.resultScreen.hide(),t.transition(w.TITLE),b.titleScreen.show()}),b.gameScreen.onUseActive(v=>{if(!t.is(w.PLAYING)||!E.useActiveItem(v))return;const C=tt(v);if(!C)return;const L=Date.now()+C.durationMs;if(v==="side_guard")te=L,T.addSideGuardWalls(),T.fieldMesh.addSideGuardMeshes(T.fieldMesh.group);else if(v==="medal_fever")Q=L;else if(v==="medal_shower"){for(let K=0;K<20;K++)setTimeout(()=>{if(!t.is(w.PLAYING))return;const V=(Math.random()*2-1)*(h.FIELD_WIDTH/2-.5),Y=(Math.random()-.5)*(h.FIELD_DEPTH/2);T.medalSpawner.spawn(V,5,Y,T.physicsWorld,T.physicsSync,T.collisionHandler,d)},K*150);f.shake(.12,.3)}}),H.onThrow((v,C)=>{if(!t.is(w.PLAYING))return;const L=v*(h.FIELD_WIDTH/2+.5),K=S.medalThrowCount;let V=0;for(let Y=0;Y<K&&E.spendMedal();Y++){const le=(Y-Math.floor(K/2))*.6;T.throwMedal(L+le,C),V++}V>0&&I.emit("medal:thrown",{count:V})}),I.on("quota:reached",()=>{t.is(w.PLAYING)&&(H.disable(),setTimeout(()=>{const v=S.onClearBonusMedals;v>0&&E.addMedals(v),g.clearCurrentStage(),b.chanceScreen.show(C=>{C.medals>0&&(E.addMedals(C.medals),b.gameScreen.showFloatingText(`+${C.medals}`,"var(--t-primary)"));const L=g.isLastStageOfPhase;b.stageResultScreen.show(g.currentPhase,g.currentStage,L,x.currentValue,x.targetValue)})},500))}),I.on("medal:collected",({count:v})=>{t.is(w.PLAYING)&&(b.gameScreen.showFloatingText(`+${v}`,v>=2?"var(--t-secondary)":"var(--t-primary)"),E.addMedals(v),R.onMedalCollected(v),Z.onQuotaAdded(v))}),I.on("jackpot:progress",({current:v,target:C})=>{t.is(w.PLAYING)&&b.gameScreen.updateJackpot(v,C)}),I.on("jackpot:triggered",()=>{if(!t.is(w.PLAYING))return;E.addMedals(h.JACKPOT_MEDAL_REWARD),b.gameScreen.showFloatingText(`JACKPOT! +${h.JACKPOT_MEDAL_REWARD}`,"var(--t-primary)"),P.playJackpotFanfare(),f.shake(.35,.6),O.spawnJackpot(0,2,-2),b.gameScreen.resetJackpot(h.JACKPOT_THRESHOLD)}),I.on("fever:started",()=>{T.pusher.speedMultiplier=Ie.FEVER_SPEED_MULT,b.gameScreen.showFever(1e4),P.playFeverStart(),P.startBGM(!0),f.shake(.2,.4);for(let v=0;v<12;v++)setTimeout(()=>{if(!t.is(w.PLAYING))return;const C=(Math.random()*2-1)*(h.FIELD_WIDTH/2-.5),L=(Math.random()*2-1)*(h.FIELD_DEPTH/4);T.medalSpawner.spawn(C,4.5,L,T.physicsWorld,T.physicsSync,T.collisionHandler,d)},v*250)}),I.on("fever:ended",()=>{T.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),P.playFeverEnd(),P.startBGM(!1)}),I.on("combo:updated",({count:v})=>{t.is(w.PLAYING)&&v>=2&&(b.gameScreen.showCombo(v),P.playCombo(v))}),I.on("medal:thrown",()=>P.playThrow()),I.on("medal:collected",()=>P.playMedalCollected()),I.on("quota:reached",()=>P.playQuotaReached()),I.on("stage:cleared",()=>P.playStageCleared()),I.on("game:over",()=>P.playGameOver()),I.on("skill:selected",()=>P.playSkillSelected()),I.on("medal:collected",()=>f.shake(.04,.08)),I.on("quota:reached",()=>f.shake(.15,.3)),I.on("stage:cleared",()=>f.shake(.28,.5)),I.on("game:over",()=>f.shake(.5,.8)),I.on("state:changed",({to:v})=>{v===w.PLAYING?P.startBGM(!1):P.stopBGM()}),i.addUpdateFn(v=>{if(t.is(w.PLAYING)){const C=Date.now();te>0&&C>te&&(te=0,T.removeSideGuardWalls(),T.fieldMesh.removeSideGuardMeshes(T.fieldMesh.group)),Q>0&&C>Q&&(Q=0);const L=Q>Date.now()?2:1;T.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier*L),T.update(v);const K=E.getOwnedActiveItems().map(V=>{const Y=tt(V.id),le=V.id==="side_guard"?Math.max(0,te-Date.now()):V.id==="medal_fever"?Math.max(0,Q-Date.now()):0;return{...V,name:Y.name,color:Y.color,remainingMs:le}});if(b.updateGameHUD(E.currentMedals,x.currentValue,x.targetValue,g.currentPhase,g.currentStage,y.getAll(),K),!q&&E.currentMedals<=0&&!x.isReached&&(q=!0,W=10,H.disable()),q&&W>0){const V=Math.ceil(W);W-=v;const Y=Math.ceil(W);Y!==V&&Y>0&&P.playCountdownTick(),W>0?b.gameScreen.showCountdown(W):(b.gameScreen.hideCountdown(),Te())}}R.update(),O.update(v),u.update(v),f.update(v),d.render(f.camera)});function xe(){s.incrementRuns(),E.reset(),y.clear(),S.reset(),a.reset(),g.reset(),N=0,q=!1,W=0,Q=0,te=0,R.reset(),Z.reset(),T.pusher.speedMultiplier=1,t.transition(w.STAGE_START),oe()}async function oe(){const v=g.currentPhase,C=g.currentStage;q=!1,W=0,b.gameScreen.hideCountdown(),R.reset(),Z.reset(),T.pusher.speedMultiplier=1,b.gameScreen.hideFever(),b.gameScreen.hideCombo(),b.gameScreen.resetJackpot(h.JACKPOT_THRESHOLD),x.startStage(v,C);try{T.physicsWorld.initialized?T.endStage():(fe(!0),await T.init(),fe(!1))}catch(L){console.error("Field init failed:",L),fe(!1);return}T.startStage(v,C),g.startCurrentStage(),H.enable()}function Ee(){T.endStage(),t.transition(w.SHOP),b.shopScreen.show(E.money,y.getAll(),E.getOwnedActiveItems())}function ve(){t.transition(w.SKILL_SELECT);const v=A.pickChoices(h.SKILL_CHOICES,S.getOwnedSkills(),Date.now());b.skillSelectScreen.show(v)}function Te(){if(N>0){N--,W=0,b.gameScreen.hideCountdown(),H.enable(),q=!1;return}T.endStage();const v=n.calculate(a.snapshot,s);s.updateBest(v.phase,v.stage),t.transition(w.GAME_OVER),t.transition(w.RESULT),b.resultScreen.show(v)}const re=document.createElement("div");re.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,re.textContent="LOADING...",c.appendChild(re);function fe(v){re.style.display=v?"flex":"none"}I.on("skill:selected",()=>{N=Math.max(N,S.gameOverShields)}),i.start(),t.transition(w.TITLE),b.titleScreen.show(),console.log("YukiMedal initialized")}fi().catch(console.error);
