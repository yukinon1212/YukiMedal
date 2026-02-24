var yt=Object.defineProperty;var bt=(l,e,t)=>e in l?yt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var r=(l,e,t)=>bt(l,typeof e!="symbol"?e+"":e,t);import{M as F,O as xt,B as ht,F as ze,S as ce,U as Ce,V as K,W as Se,H as we,N as Et,C as vt,a as de,b as X,A as Tt,c as ke,R as St,d as wt,e as Mt,L as Ct,f as _t,g as It,h as dt,i as At,j as Rt,k as Pt,l as Lt,m as kt,P as Dt,n as Ht,o as pt,p as Bt,D as We,q as ve,r as Ot,s as Gt,t as Nt,G as Ve,u as Ft,v as Z,w as Me,I as Ut,x as W,y as zt,z as me,E as A,T as Wt,J as Vt,K as $e,Q as Ye}from"./three-_RpRzb1S.js";import{O as Te}from"./rapier-DpxwuBBO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var w=(l=>(l.INIT="INIT",l.TITLE="TITLE",l.STAGE_START="STAGE_START",l.PLAYING="PLAYING",l.STAGE_CLEAR="STAGE_CLEAR",l.SKIP_PROMPT="SKIP_PROMPT",l.GAME_OVER="GAME_OVER",l.SHOP="SHOP",l.SKILL_SELECT="SKILL_SELECT",l.RESULT="RESULT",l))(w||{});class $t{constructor(){r(this,"listeners",new Map)}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>i.delete(t)}once(e,t){const i=this.on(e,s=>{t(s),i()})}emit(e,t){const i=this.listeners.get(e);if(i)for(const s of i)s(t)}off(e,t){var i;(i=this.listeners.get(e))==null||i.delete(t)}clear(){this.listeners.clear()}}const I=new $t,Yt=[{from:w.INIT,to:w.TITLE},{from:w.TITLE,to:w.STAGE_START},{from:w.STAGE_START,to:w.PLAYING},{from:w.PLAYING,to:w.STAGE_CLEAR},{from:w.PLAYING,to:w.GAME_OVER},{from:w.STAGE_CLEAR,to:w.STAGE_START},{from:w.STAGE_CLEAR,to:w.SKIP_PROMPT},{from:w.STAGE_CLEAR,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.SHOP},{from:w.SKIP_PROMPT,to:w.STAGE_START},{from:w.SHOP,to:w.SKILL_SELECT},{from:w.SKILL_SELECT,to:w.STAGE_START},{from:w.GAME_OVER,to:w.RESULT},{from:w.RESULT,to:w.TITLE}];class qt{constructor(){r(this,"current",w.INIT)}get state(){return this.current}canTransition(e){return Yt.some(t=>(Array.isArray(t.from)?t.from:[t.from]).includes(this.current)&&t.to===e)}transition(e){if(!this.canTransition(e))throw new Error(`Invalid state transition: ${this.current} → ${e}`);const t=this.current;this.current=e,I.emit("state:changed",{from:t,to:e})}is(e){return this.current===e}isAny(...e){return e.includes(this.current)}}class Qt{constructor(){r(this,"updateFns",[]);r(this,"rafId",null);r(this,"lastTime",0);r(this,"maxDelta",1/20)}addUpdateFn(e){this.updateFns.push(e)}removeUpdateFn(e){const t=this.updateFns.indexOf(e);t!==-1&&this.updateFns.splice(t,1)}start(){if(this.rafId!==null)return;this.lastTime=performance.now();const e=t=>{this.rafId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t;const s=Math.min(i,this.maxDelta);for(const a of this.updateFns)a(s)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}get isRunning(){return this.rafId!==null}}const qe="yukimedal_save",jt="yukimedal_best",Ae={bestPhase:0,bestStage:0,totalRuns:0,lastPlayedAt:0};class Zt{constructor(){r(this,"data");this.data=this.load()}load(){try{const e=localStorage.getItem(qe);return e?{...Ae,...JSON.parse(e)}:{...Ae}}catch{return{...Ae}}}save(){try{localStorage.setItem(qe,JSON.stringify(this.data))}catch{}}updateBest(e,t){const i=e*3+t,s=this.data.bestPhase*3+this.data.bestStage;i>s&&(this.data.bestPhase=e,this.data.bestStage=t,localStorage.setItem(jt,JSON.stringify({phase:e,stage:t}))),this.data.lastPlayedAt=Date.now(),this.save()}incrementRuns(){this.data.totalRuns++,this.save()}get bestPhase(){return this.data.bestPhase}get bestStage(){return this.data.bestStage}get totalRuns(){return this.data.totalRuns}}const ut={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ue{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kt=new xt(-1,1,1,-1,0,1);class Xt extends ht{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const Jt=new Xt;class Ge{constructor(e){this._mesh=new F(Jt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class es extends ue{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ce?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ce.clone(e.uniforms),this.material=new ce({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ge(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qe extends ue{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,o;this.inverse?(n=0,o=1):(n=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,n,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class ts extends ue{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ss{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new K);this._width=i.width,this._height=i.height,t=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:we}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(ut),this.copyPass.material.blending=Et,this.clock=new vt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const n=this.passes[s];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qe!==void 0&&(n instanceof Qe?i=!0:n instanceof ts&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class is extends ue{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=s}}const as={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pe extends ue{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(a,n,{type:we}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Se(a,n,{type:we});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new Se(a,n,{type:we});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),n=Math.round(n/2)}const o=as;this.highPassUniforms=Ce.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new K(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=ut;this.copyUniforms=Ce.clone(f.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Tt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new Ge(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new K(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=pe.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=pe.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ce({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}pe.BlurDirectionX=new K(1,0);pe.BlurDirectionY=new K(0,1);const ns={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rs extends ue{constructor(){super();const e=ns;this.uniforms=Ce.clone(e.uniforms),this.material=new St({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ge(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ct?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_t?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===It?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===At?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class os{constructor(e){r(this,"scene");r(this,"renderer");r(this,"composer");r(this,"renderPass");r(this,"bloomPass");r(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)});this.scene=new Pt,this.scene.background=new de(1710638),this.scene.fog=new Lt(1710638,20,60),this.renderer=new kt({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dt,this.renderer.toneMapping=dt,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=Ht,e.appendChild(this.renderer.domElement);const t=window.innerWidth,i=window.innerHeight,s=new pt(60,t/i,.1,200);this.renderPass=new is(this.scene,s),this.bloomPass=new pe(new K(t,i),.75,.4,.82);const a=new rs;this.composer=new ss(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a),window.addEventListener("resize",this.onResize)}setCamera(e){this.renderPass.camera=e}applySceneTheme(e){this.scene.background.set(e.background),this.scene.fog&&this.scene.fog.color.set(e.fogColor),this.bloomPass.strength=e.bloomStrength,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius}render(e){this.renderPass.camera=e,this.composer.render()}add(...e){this.scene.add(...e)}remove(...e){this.scene.remove(...e)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}const h={INITIAL_MEDALS:80,INITIAL_SHOP_MONEY:0,MEDAL_BUY_PRICE:5,BASE_QUOTA:20,QUOTA_MULTIPLIER:1.35,STAGES_PER_PHASE:3,FIELD_WIDTH:8,FIELD_DEPTH:12,FIELD_HEIGHT:.1,PUSHER_WIDTH:8,PUSHER_DEPTH:6.5,PUSHER_HEIGHT:1.2,PUSHER_RANGE:2.5,PUSHER_PERIOD_MS:3500,MEDAL_RADIUS:.5,MEDAL_RADIUS_LARGE:.75,MEDAL_RADIUS_TRIPLE:.55,MEDAL_THICKNESS:.05,MEDAL_MASS:1,MAX_MEDALS_ON_FIELD:200,INITIAL_FIELD_MEDALS:55,INITIAL_PUSHER_MEDALS:25,MEDAL_PROB_NORMAL:58,MEDAL_PROB_DOUBLE:78,MEDAL_PROB_TRIPLE:88,ITEMS_PER_STAGE:3,SKILL_CHOICES:3,GRAVITY:-9.81,CAMERA_FOV:45,CAMERA_NEAR:.1,CAMERA_FAR:100,JACKPOT_THRESHOLD:30,JACKPOT_MEDAL_REWARD:25,OPEN_ZONE_START:.5,MEDAL_CLEANUP_Y:-8};class ls{constructor(){r(this,"camera");r(this,"target",new X(0,0,-1));r(this,"basePosition",new X(0,7,16));r(this,"shakeOffset",new X);r(this,"shakeIntensity",0);r(this,"shakeDecay",0);r(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});this.camera=new pt(h.CAMERA_FOV,window.innerWidth/window.innerHeight,h.CAMERA_NEAR,h.CAMERA_FAR),this.setFrontView(),window.addEventListener("resize",this.onResize)}setFrontView(){this.basePosition.set(0,7,16),this.camera.position.copy(this.basePosition),this.camera.lookAt(this.target)}shake(e,t){this.shakeIntensity=e,this.shakeDecay=t>0?-Math.log(.01)/t:0}update(e){this.shakeIntensity>.001?(this.shakeOffset.set((Math.random()*2-1)*this.shakeIntensity,(Math.random()*2-1)*this.shakeIntensity,0),this.camera.position.copy(this.basePosition).add(this.shakeOffset),this.shakeIntensity*=Math.exp(-this.shakeDecay*e)):(this.shakeIntensity=0,this.camera.position.copy(this.basePosition)),this.camera.lookAt(this.target)}lookAt(e){this.target.copy(e),this.camera.lookAt(this.target)}dispose(){window.removeEventListener("resize",this.onResize)}}class cs{constructor(e){r(this,"ambient");r(this,"dirLight");r(this,"fillLight");r(this,"warmPoint");r(this,"coolPoint");r(this,"sideLeft");r(this,"sideRight");this.ambient=new Bt(4210784,.6),this.dirLight=new We(16777215,1.8),this.dirLight.position.set(5,10,5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.fillLight=new We(4210943,.3),this.fillLight.position.set(-5,5,-5),this.warmPoint=new ve(16765056,1.8,25),this.warmPoint.position.set(0,6,8),this.coolPoint=new ve(4482815,1.2,20),this.coolPoint.position.set(0,4,-8),this.sideLeft=new ve(16773344,1,22),this.sideLeft.position.set(-9,4,2),this.sideRight=new ve(16773344,1,22),this.sideRight.position.set(9,4,2),e.add(this.ambient,this.dirLight,this.fillLight,this.warmPoint,this.coolPoint,this.sideLeft,this.sideRight)}applyTheme(e){this.ambient.color.set(e.ambientColor),this.ambient.intensity=e.ambientIntensity,this.fillLight.color.set(e.fillColor),this.fillLight.intensity=e.fillIntensity,this.warmPoint.color.set(e.warmPointColor),this.warmPoint.intensity=e.warmPointIntensity,this.coolPoint.color.set(e.coolPointColor),this.coolPoint.intensity=e.coolPointIntensity}}class hs{constructor(e){r(this,"stars");r(this,"starMat");r(this,"grid");r(this,"scene");this.scene=e;const t=2e3,i=new Float32Array(t*3),s=60;for(let n=0;n<t;n++){const o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),p=Math.cbrt(Math.random())*s;i[n*3]=p*Math.sin(c)*Math.cos(o),i[n*3+1]=p*Math.sin(c)*Math.sin(o),i[n*3+2]=p*Math.cos(c)}const a=new ht;a.setAttribute("position",new Ot(i,3)),this.starMat=new Gt({size:.07,color:8952319,transparent:!0,opacity:.65,sizeAttenuation:!0}),this.stars=new Nt(a,this.starMat),e.add(this.stars),this.grid=new Ve(80,40,1714782,924218),this.grid.position.y=-4,e.add(this.grid)}applyTheme(e){this.starMat.color.set(e.starColor),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose(),this.grid=new Ve(80,40,e.gridColorA,e.gridColorB),this.grid.position.y=-4,this.scene.add(this.grid)}update(e){this.stars.rotation.y+=.008*e}}class ds{constructor(){r(this,"world");r(this,"_initialized",!1)}async init(){await Te.init(),this.world=new Te.World({x:0,y:h.GRAVITY,z:0});const e=this.world.integrationParameters;e.numSolverIterations=16,e.numAdditionalFrictionIterations=8,e.numInternalPgsIterations=2,e.maxCcdSubsteps=8,this._initialized=!0}get rapier(){return Te}get instance(){if(!this._initialized)throw new Error("PhysicsWorld not initialized");return this.world}get initialized(){return this._initialized}step(){this.world.step()}createRigidBody(e){return this.world.createRigidBody(e)}createCollider(e,t){return this.world.createCollider(e,t)}removeRigidBody(e){this.world.removeRigidBody(e)}getEventQueue(){return new Te.EventQueue(!0)}stepWithEvents(e){this.world.step(e)}forEachActiveRigidBody(e){this.world.forEachActiveRigidBody(e)}setTimestep(e){this._initialized&&(this.world.integrationParameters.dt=e)}dispose(){this._initialized&&(this.world.free(),this._initialized=!1)}}class ps{constructor(){r(this,"bodyToMesh",new Map)}register(e,t){this.bodyToMesh.set(e.handle,t)}unregister(e){this.bodyToMesh.delete(e.handle)}sync(e){e.forEachActiveRigidBody(t=>{const i=this.bodyToMesh.get(t.handle);if(!i)return;const s=t.translation(),a=t.rotation(),n=i.userData.physicsYOffset??0;i.position.set(s.x,s.y+n,s.z),i.quaternion.set(a.x,a.y,a.z,a.w)})}clear(){this.bodyToMesh.clear()}get count(){return this.bodyToMesh.size}}class us{constructor(){r(this,"handles",new Map);r(this,"dropZoneHandles",new Set);r(this,"eventQueue");r(this,"medalCollectedCallback");r(this,"itemCollectedCallback")}init(e){this.eventQueue=e.getEventQueue()}registerHandle(e,t){this.handles.set(e,t),t==="drop_zone"&&this.dropZoneHandles.add(e)}unregisterHandle(e){this.handles.delete(e),this.dropZoneHandles.delete(e)}onMedalCollected(e){this.medalCollectedCallback=e}onItemCollected(e){this.itemCollectedCallback=e}processEvents(e,t=1){for(let i=0;i<t;i++)e.stepWithEvents(this.eventQueue);this.eventQueue.drainCollisionEvents((i,s,a)=>{var p,f;if(!a)return;const n=this.handles.get(i),o=this.handles.get(s);if(n==="drop_zone"&&(o==="medal"||o==="item")||o==="drop_zone"&&(n==="medal"||n==="item")){const d=n==="drop_zone"?s:i,u=n==="drop_zone"?o:n;u==="medal"?(p=this.medalCollectedCallback)==null||p.call(this,d):u==="item"&&((f=this.itemCollectedCallback)==null||f.call(this,d))}})}getTag(e){return this.handles.get(e)}clear(){this.handles.clear(),this.dropZoneHandles.clear(),this.medalCollectedCallback=void 0,this.itemCollectedCallback=void 0}}class ms{constructor(){r(this,"body");r(this,"time",0);r(this,"zBase");r(this,"initialized",!1);r(this,"speedMultiplier",1);this.zBase=-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE}async initPhysics(e){const t=e.rapier,i=t.RigidBodyDesc.kinematicVelocityBased().setTranslation(0,h.PUSHER_HEIGHT/2,this.zBase);this.body=e.createRigidBody(i);const s=t.ColliderDesc.cuboid(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/2,h.PUSHER_DEPTH/2);e.createCollider(s,this.body),this.initialized=!0}update(e){this.time+=e*this.speedMultiplier;const t=h.PUSHER_PERIOD_MS/1e3,i=this.time%t/t,s=(1-Math.cos(i*Math.PI*2))/2*h.PUSHER_RANGE;if(this.initialized){const a=Math.PI*h.PUSHER_RANGE/t*Math.sin(i*Math.PI*2);this.body.setLinvel({x:0,y:0,z:a},!0),i<e/t&&this.body.setTranslation({x:0,y:h.PUSHER_HEIGHT/2,z:this.zBase},!0)}return s}get currentZOffset(){const e=h.PUSHER_PERIOD_MS/1e3,t=this.time%e/e;return(1-Math.cos(t*Math.PI*2))/2*h.PUSHER_RANGE}get restZ(){return this.zBase}}function fs(l){return[l>>16&255,l>>8&255,l&255]}function Re(l){const e=l.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function le(l,e,t,i){return`rgb(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)})`}function Pe(l,e,t,i){return`rgb(${Math.max(0,l-i)},${Math.max(0,e-i)},${Math.max(0,t-i)})`}function je(l,e,t){return`rgb(${l},${e},${t})`}function q(l,e,t,i,s){return`rgba(${Math.min(255,l+i)},${Math.min(255,e+i)},${Math.min(255,t+i)},${s})`}class he{static get(e,t){if(!this.cache.has(e)){const i=t(),s=new Ft(i);this.cache.set(e,s)}return this.cache.get(e)}static getMedalTexture(e){return this.get(`medal_${e.toString(16)}`,()=>{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=128/2,n=128/2,o=128/2-1,[c,p,f]=fs(e),d=je(c,p,f),u=le(c,p,f,65),m=le(c,p,f,30),b=Pe(c,p,f,55),g=Pe(c,p,f,80),y=s.createRadialGradient(a-18,n-18,4,a,n,o);y.addColorStop(0,u),y.addColorStop(.45,m),y.addColorStop(.8,d),y.addColorStop(1,b),s.fillStyle=y,s.beginPath(),s.arc(a,n,o,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=5,s.beginPath(),s.arc(a,n,o-5,0,Math.PI*2),s.stroke();const S=s.createRadialGradient(a,n,0,a,n,38);S.addColorStop(0,m),S.addColorStop(.7,d),S.addColorStop(1,b),s.fillStyle=S,s.beginPath(),s.arc(a,n,38,0,Math.PI*2),s.fill(),s.strokeStyle=g,s.lineWidth=1.5,s.stroke(),s.strokeStyle=u,s.lineWidth=2.5,s.lineCap="round";for(let T=0;T<6;T++){const E=T*Math.PI/3-Math.PI/6;s.beginPath(),s.moveTo(a+Math.cos(E)*7,n+Math.sin(E)*7),s.lineTo(a+Math.cos(E)*28,n+Math.sin(E)*28),s.stroke()}const M=s.createRadialGradient(a-2,n-2,0,a,n,8);M.addColorStop(0,u),M.addColorStop(1,d),s.fillStyle=M,s.beginPath(),s.arc(a,n,8,0,Math.PI*2),s.fill();const v=s.createRadialGradient(a-26,n-26,0,a-26,n-26,50);return v.addColorStop(0,"rgba(255,255,255,0.5)"),v.addColorStop(.4,"rgba(255,255,255,0.12)"),v.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=v,s.beginPath(),s.arc(a,n,o-2,0,Math.PI*2),s.fill(),i})}static getFieldTexture(e="#2a2a4e"){return this.get(`field_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,o]=Re(e),c=a>o+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c){for(let u=0;u<22;u++){const m=256*u/22,b=u%3===0,g=b?.55:.45;s.strokeStyle=b?`rgba(${Math.max(0,a-22)},${Math.max(0,n-16)},${Math.max(0,o-8)},${g})`:`rgba(${Math.min(255,a+22)},${Math.min(255,n+16)},${Math.min(255,o+8)},${g})`,s.lineWidth=2+Math.random()*4,s.beginPath();for(let y=0;y<=256;y+=4){const S=m+Math.sin(y*.035+u)*2.5+(Math.random()-.5)*.8;y===0?s.moveTo(y,S):s.lineTo(y,S)}s.stroke()}s.strokeStyle=q(a,n,o,40,.12),s.lineWidth=.5;for(let u=0;u<256;u+=6)s.beginPath(),s.moveTo(0,u+.5),s.lineTo(256,u+.5),s.stroke()}else{s.strokeStyle=q(a,n,o,80,.14),s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,256),s.stroke();for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(256,d),s.stroke()}const p=s.getImageData(0,0,256,256),f=p.data;for(let d=0;d<f.length;d+=4){const u=(Math.random()-.5)*(c?14:18);f[d]=Math.max(0,Math.min(255,f[d]+u)),f[d+1]=Math.max(0,Math.min(255,f[d+1]+u)),f[d+2]=Math.max(0,Math.min(255,f[d+2]+u))}return s.putImageData(p,0,0),i})}static getPusherTexture(e="#3a3a6e"){return this.get(`pusher_${e}`,()=>{const s=document.createElement("canvas");s.width=256,s.height=128;const a=s.getContext("2d"),[n,o,c]=Re(e),p=n>c+20;if(a.fillStyle=e,a.fillRect(0,0,256,128),p){a.strokeStyle=q(n,o,c,90,.38),a.lineWidth=.8;const u=14;for(let m=-128;m<384;m+=u)a.beginPath(),a.moveTo(m,0),a.lineTo(m+128,128),a.stroke();for(let m=0;m<512;m+=u)a.beginPath(),a.moveTo(m,0),a.lineTo(m-128,128),a.stroke();a.fillStyle=le(n,o,c,90);for(let m=0;m<2;m++){const b=10+m*108;for(let g=20;g<256;g+=36)a.fillStyle=le(n,o,c,80),a.beginPath(),a.arc(g,b,4.5,0,Math.PI*2),a.fill(),a.fillStyle=q(n,o,c,150,.7),a.beginPath(),a.arc(g-1,b-1,2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(0,0,0,0.45)",a.beginPath(),a.arc(g+1,b+1,3,.5,Math.PI*2),a.fill()}}else{for(let u=0;u<128;u++){const m=.015+Math.random()*.055;a.strokeStyle=q(n,o,c,100,m),a.lineWidth=1,a.beginPath(),a.moveTo(0,u+.5),a.lineTo(256,u+.5),a.stroke()}a.fillStyle=q(n,o,c,120,.35);for(let u=24;u<256;u+=48)a.beginPath(),a.arc(u,8,3,0,Math.PI*2),a.fill()}const f=a.createLinearGradient(0,0,0,18);f.addColorStop(0,q(n,o,c,150,.6)),f.addColorStop(1,q(n,o,c,150,0)),a.fillStyle=f,a.fillRect(0,0,256,18);const d=a.createLinearGradient(0,114,0,128);return d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=d,a.fillRect(0,114,256,14),s})}static getWallTexture(e="#1a1a3e"){return this.get(`wall_${e}`,()=>{const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d"),[a,n,o]=Re(e),c=a>o+20;if(s.fillStyle=e,s.fillRect(0,0,256,256),c)for(let u=0;u<256;u+=40){const m=s.createLinearGradient(0,u,0,u+40);m.addColorStop(0,le(a,n,o,18)),m.addColorStop(.5,je(a,n,o)),m.addColorStop(1,Pe(a,n,o,12)),s.fillStyle=m,s.fillRect(0,u,256,40),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=2,s.beginPath(),s.moveTo(0,u+40-1),s.lineTo(256,u+40-1),s.stroke(),s.strokeStyle=q(a,n,o,70,.45),s.lineWidth=1,s.beginPath(),s.moveTo(0,u+1),s.lineTo(256,u+1),s.stroke();for(let b=24;b<256;b+=48){const g=u+40-7;s.fillStyle=le(a,n,o,55),s.beginPath(),s.arc(b,g,4,0,Math.PI*2),s.fill(),s.fillStyle=q(a,n,o,130,.6),s.beginPath(),s.arc(b-1,g-1,1.5,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(b+1,g+1,2.5,.4,Math.PI*2),s.fill()}}else for(let d=0;d<256;d+=48){const u=s.createLinearGradient(0,d,0,d+6);u.addColorStop(0,"rgba(0,0,0,0.4)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(0,d,256,6);const m=s.createLinearGradient(0,d-4,0,d);m.addColorStop(0,q(a,n,o,80,0)),m.addColorStop(1,q(a,n,o,80,.2)),s.fillStyle=m,s.fillRect(0,d-4,256,4)}const p=s.getImageData(0,0,256,256),f=p.data;for(let d=0;d<f.length;d+=4){const u=(Math.random()-.5)*(c?8:10);f[d]=Math.max(0,Math.min(255,f[d]+u)),f[d+1]=Math.max(0,Math.min(255,f[d+1]+u)),f[d+2]=Math.max(0,Math.min(255,f[d+2]+u))}return s.putImageData(p,0,0),i})}static disposeAll(){this.cache.forEach(e=>e.dispose()),this.cache.clear()}}r(he,"cache",new Map);const gs=new Z(h.MEDAL_RADIUS,h.MEDAL_RADIUS,h.MEDAL_THICKNESS,24),ys=new Z(h.MEDAL_RADIUS_LARGE,h.MEDAL_RADIUS_LARGE,h.MEDAL_THICKNESS,24),bs=new Z(h.MEDAL_RADIUS_TRIPLE,h.MEDAL_RADIUS_TRIPLE,h.MEDAL_THICKNESS*1.3,24),xs={normal:16766720,double:13691135,large:15245312,triple:16719968},Es={normal:1,double:2,large:1,triple:3};function vs(l){const e=l*100;return e<h.MEDAL_PROB_NORMAL?"normal":e<h.MEDAL_PROB_DOUBLE?"double":e<h.MEDAL_PROB_TRIPLE?"triple":"large"}function Ts(l){return l==="large"?ys:l==="triple"?bs:gs}class Ne{static getMaterial(e){const t=e.toString(16);if(this.materialCache.has(t))return this.materialCache.get(t);const i=new Me({color:e,flatShading:!0});return this.materialCache.set(t,i),i}static createMesh(e,t,i=!0,s=!1){const a=this.getMaterial(t).clone(),n=new F(e,a);return n.castShadow=i,n.receiveShadow=s,n}static disposeAll(){this.materialCache.forEach(e=>e.dispose()),this.materialCache.clear()}}r(Ne,"materialCache",new Map);class Ss{constructor(){r(this,"medals",new Map);r(this,"pendingRemoval",new Set);r(this,"spawnCounter",0)}spawn(e,t,i,s,a,n,o,c,p){if(this.medals.size>=h.MAX_MEDALS_ON_FIELD)return;const f=s.rapier,d=p??vs(Math.random()),u=d==="large"?h.MEDAL_RADIUS_LARGE:d==="triple"?h.MEDAL_RADIUS_TRIPLE:h.MEDAL_RADIUS,m=Es[d],b=f.RigidBodyDesc.dynamic().setTranslation(e,t,i).setLinearDamping(1.5).setAngularDamping(5).setCcdEnabled(!0),g=s.createRigidBody(b);g.setEnabledRotations(!0,!1,!0,!0),c&&g.setLinvel(c,!0);const y=f.ColliderDesc.cylinder(h.MEDAL_THICKNESS/2,u).setRestitution(.05).setFriction(.7).setDensity(h.MEDAL_MASS).setActiveEvents(f.ActiveEvents.COLLISION_EVENTS),S=s.createCollider(y,g);n.registerHandle(S.handle,"medal");const M=Ne.createMesh(Ts(d),xs[d],!0,!1);M.userData.physicsYOffset=.03,M.position.set(e,t,i),o.add(M),a.register(g,M),this.medals.set(S.handle,{body:g,collider:S,mesh:M,type:d,quotaValue:m}),this.spawnCounter++}getQuotaValue(e){var t;return((t=this.medals.get(e))==null?void 0:t.quotaValue)??1}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){let a=0;for(const n of this.pendingRemoval){const o=this.medals.get(n);o&&(t.unregister(o.body),i.unregisterHandle(n),s.remove(o.mesh),e.removeRigidBody(o.body),o.mesh.material.dispose(),this.medals.delete(n),a++)}return this.pendingRemoval.clear(),a}cleanupFallen(e,t,i,s,a,n){let o=0;for(const[c,p]of this.medals)p.body.translation().y<e&&!this.pendingRemoval.has(c)&&(this.pendingRemoval.add(c),n==null||n(c),o++);return o}get count(){return this.medals.size}clear(e,t,i,s){for(const[a,n]of this.medals)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh),e.removeRigidBody(n.body),n.mesh.material.dispose();this.medals.clear(),this.pendingRemoval.clear()}}class ws{constructor(){r(this,"body");r(this,"collider")}async initPhysics(e,t){const i=e.rapier,s=h.OPEN_ZONE_START,a=h.FIELD_DEPTH/2+15,n=(s+a)/2,o=(a-s)/2,c=i.RigidBodyDesc.fixed().setTranslation(0,-2,n);this.body=e.createRigidBody(c);const p=i.ColliderDesc.cuboid(h.FIELD_WIDTH/2+1,1.5,o).setActiveEvents(i.ActiveEvents.COLLISION_EVENTS).setSensor(!0);this.collider=e.createCollider(p,this.body),t.registerHandle(this.collider.handle,"drop_zone")}}class Ms{constructor(){r(this,"time",0)}setupStage(e,t,i,s){this.clear(s)}getBonusMultiplierAt(e,t){return 1}update(e){this.time+=e}clear(e){this.time=0}}var O=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l.Legendary="Legendary",l))(O||{});const Cs={[O.Common]:8947848,[O.Rare]:4474111,[O.Epic]:11141375,[O.Legendary]:16746496},_s=new Ut(.4,0);class Is{constructor(e){r(this,"mesh");r(this,"animationOffset");const t=Cs[e],i=new W({color:t,emissive:t,emissiveIntensity:.45,metalness:.2,roughness:.55,flatShading:!0});this.mesh=new F(_s,i),this.mesh.castShadow=!0,this.animationOffset=Math.random()*Math.PI*2}update(e){this.mesh.position.y+=Math.sin(e*2+this.animationOffset)*.002,this.mesh.rotation.y+=.02}setPosition(e,t,i){this.mesh.position.set(e,t,i)}dispose(){this.mesh.material.dispose()}}class Fe{constructor(e=Date.now()){r(this,"seed");this.seed=e}next(){this.seed|=0,this.seed=this.seed+1831565813|0;let e=Math.imul(this.seed^this.seed>>>15,1|this.seed);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}nextFloat(e,t){return this.next()*(t-e)+e}shuffle(e){const t=[...e];for(let i=t.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}weightedPick(e,t){const i=t.reduce((a,n)=>a+n,0);let s=this.next()*i;for(let a=0;a<e.length;a++)if(s-=t[a],s<=0)return e[a];return e[e.length-1]}}class As{constructor(){r(this,"items",new Map);r(this,"pendingRemoval",new Set)}spawnItems(e,t,i,s,a,n){const o=new Fe(n);for(const c of e){const p=o.nextFloat(-3,h.FIELD_WIDTH/2-1),f=o.nextFloat(-12/4,h.FIELD_DEPTH/4);this.spawnSingle(c,p,2,f,t,i,s,a)}}spawnSingle(e,t,i,s,a,n,o,c){const p=a.rapier,f=p.RigidBodyDesc.dynamic().setTranslation(t,i,s).setLinearDamping(.7).setAngularDamping(.8),d=a.createRigidBody(f),u=p.ColliderDesc.ball(.4).setRestitution(.4).setFriction(.5).setDensity(2).setActiveEvents(p.ActiveEvents.COLLISION_EVENTS),m=a.createCollider(u,d);o.registerHandle(m.handle,"item");const b=new Is(e.rarity);b.setPosition(t,i,s),c.add(b.mesh),n.register(d,b.mesh),this.items.set(m.handle,{body:d,collider:m,mesh:b,definitionId:e.id})}getDefinitionId(e){var t;return(t=this.items.get(e))==null?void 0:t.definitionId}markForRemoval(e){this.pendingRemoval.add(e)}flushRemovals(e,t,i,s){for(const a of this.pendingRemoval){const n=this.items.get(a);n&&(t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose(),this.items.delete(a))}this.pendingRemoval.clear()}update(e){for(const t of this.items.values())t.mesh.update(e)}clear(e,t,i,s){for(const[a,n]of this.items)t.unregister(n.body),i.unregisterHandle(a),s.remove(n.mesh.mesh),e.removeRigidBody(n.body),n.mesh.dispose();this.items.clear(),this.pendingRemoval.clear()}}const De=[{id:"rusty_gear",name:"さびたギア",quotaValue:5,sellPrice:3,rarity:O.Common,description:"古びたギア。それなりの価値はある。"},{id:"chipped_crystal",name:"欠けた水晶",quotaValue:8,sellPrice:5,rarity:O.Common,description:"割れた水晶の破片。かすかに輝いている。"},{id:"silver_coin",name:"銀貨",quotaValue:12,sellPrice:8,rarity:O.Common,description:"磨けば光る銀の硬貨。"},{id:"strange_mushroom",name:"怪しいキノコ",quotaValue:10,sellPrice:6,rarity:O.Common,description:"食べたら何かが起きそうな不思議なキノコ。"},{id:"ancient_compass",name:"古羅針盤",quotaValue:20,sellPrice:15,rarity:O.Rare,description:"方角を示す古い羅針盤。コレクターに人気。"},{id:"glowing_orb",name:"発光する球体",quotaValue:25,sellPrice:18,rarity:O.Rare,description:"ぼんやりと光を放つ不思議な球体。"},{id:"clockwork_bird",name:"ぜんまい仕掛けの鳥",quotaValue:30,sellPrice:22,rarity:O.Rare,description:"ネジを巻くと動き出す精巧な機械鳥。"},{id:"philosophers_stone",name:"賢者の石（模造品）",quotaValue:50,sellPrice:40,rarity:O.Epic,description:"本物かどうかは不明。でも高く売れる。"},{id:"dragon_scale",name:"ドラゴンの鱗",quotaValue:60,sellPrice:50,rarity:O.Epic,description:"龍から採れた鱗。強靭で美しい。"},{id:"starfall_fragment",name:"星落の欠片",quotaValue:100,sellPrice:80,rarity:O.Legendary,description:"流れ星が落とした神秘の欠片。伝説級のお宝。"}];function ge(l){return De.find(e=>e.id===l)}const Ze={[O.Common]:60,[O.Rare]:30,[O.Epic]:8,[O.Legendary]:2};class Rs{constructor(e){r(this,"rng");this.rng=new Fe(e)}pickRandom(e){const t=[];for(let i=0;i<e;i++){const s=this.pickRarity(),a=De.filter(o=>o.rarity===s);if(a.length===0){t.push(De[0]);continue}const n=Math.floor(this.rng.next()*a.length);t.push(a[n])}return t}pickRarity(){const e=Object.keys(Ze),t=e.map(i=>Ze[i]);return this.rng.weightedPick(e,t)}}function _(l,e,t=!1){const i=new F(l,e);return t&&(i.castShadow=!0,i.receiveShadow=!0),i}function Ke(l,e=1){return new W({color:l,emissive:l,emissiveIntensity:e,roughness:.5,metalness:.3})}class R{constructor(e){r(this,"group");r(this,"pusherMesh",null);r(this,"wallMeshes",[]);r(this,"sideGuardMeshes",[]);r(this,"pusherZBase",-12/2+h.PUSHER_DEPTH/2-h.PUSHER_RANGE);this.group=new zt,this.rebuild(e)}rebuild(e){this.group.traverse(t=>{if(t!==this.group&&t instanceof F){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),this.group.clear(),this.wallMeshes=[],this.sideGuardMeshes=[],this.buildFieldSurface(e),this.buildPusher(e),this.addPusherDetails(e),this.createWalls(e),this.buildCabinet(e),this.buildCabinetDetails(e)}static cabinetMat(e){return new W({color:e.cabinetColor,roughness:.72,metalness:.42})}static brassMat(e){return new W({color:e.brassColor,roughness:e.brassRoughness,metalness:e.brassMetalness})}buildFieldSurface(e){const t=he.getFieldTexture(e.fieldTexBase);t.wrapS=t.wrapT=me,t.repeat.set(h.FIELD_WIDTH/2,h.FIELD_DEPTH/2);const i=new W({map:t,color:16777215,roughness:.92,metalness:0}),s=new A(h.FIELD_WIDTH,h.FIELD_HEIGHT,h.FIELD_DEPTH),a=new F(s,i);a.receiveShadow=!0,a.position.y=-.1/2,this.group.add(a)}buildPusher(e){const t=he.getPusherTexture(e.pusherTexBase);t.wrapS=t.wrapT=me,t.repeat.set(h.PUSHER_WIDTH/2,h.PUSHER_HEIGHT/1);const i=new W({map:t,color:16777215,roughness:.35,metalness:.65}),s=new A(h.PUSHER_WIDTH,h.PUSHER_HEIGHT,h.PUSHER_DEPTH);this.pusherMesh=new F(s,i),this.pusherMesh.castShadow=!0,this.pusherMesh.position.set(0,h.PUSHER_HEIGHT/2,this.pusherZBase),this.group.add(this.pusherMesh)}addPusherDetails(e){const t=h.PUSHER_WIDTH,i=h.PUSHER_HEIGHT,s=h.PUSHER_DEPTH,a=_(new A(t+.06,.14,.14),R.brassMat(e));a.position.set(0,-i/2+.07,s/2),this.pusherMesh.add(a);const n=_(new A(t+.06,.06,.06),R.brassMat(e));n.position.set(0,i/2,s/2),this.pusherMesh.add(n);for(const o of[-1,1]){const c=_(new A(.1,i,.1),R.brassMat(e));c.position.set(o*(t/2-.05),0,s/2),this.pusherMesh.add(c)}}createWalls(e){const s=he.getWallTexture(e.wallTexBase);s.wrapS=s.wrapT=me;const a=()=>{const M=s.clone();return M.wrapS=M.wrapT=me,M.needsUpdate=!0,new W({map:M,color:16777215,roughness:.8,metalness:.15})},n=h.OPEN_ZONE_START- -12/2,o=-12/2+n/2,c=a();c.map.repeat.set(n/2,3.5/2);const p=new A(.3,3.5,n),f=new F(p,c);f.position.set(-8/2-.3/2,3.5/2,o),this.group.add(f),this.wallMeshes.push(f);const d=a();d.map.repeat.set(n/2,3.5/2);const u=new A(.3,3.5,n),m=new F(u,d);m.position.set(h.FIELD_WIDTH/2+.3/2,3.5/2,o),this.group.add(m),this.wallMeshes.push(m);const b=a(),g=h.FIELD_WIDTH+.3*2;b.map.repeat.set(g/2,3.5/2);const y=new A(g,3.5,.3),S=new F(y,b);S.position.set(0,3.5/2,-12/2-.3/2),this.group.add(S),this.wallMeshes.push(S)}buildCabinet(e){const t=h.FIELD_WIDTH,i=h.FIELD_DEPTH,s=-i/2,a=i/2,n=_(new A(12,1,17),R.cabinetMat(e),!0);n.position.set(0,-.52,-.5),this.group.add(n);const o=_(new A(12,.1,.1),R.brassMat(e));o.position.set(0,0,a+2.55),this.group.add(o);const c=1.1,p=7.2,f=13.5,d=t/2+.75,u=-.25;for(const x of[-1,1]){const C=_(new A(c,p,f),R.cabinetMat(e),!0);C.position.set(x*d,p/2-.5,u),this.group.add(C);const N=_(new A(c+.08,.14,f+.08),R.brassMat(e));N.position.set(x*d,p-.5+.07,u),this.group.add(N);const j=_(new A(c+.08,.1,f+.08),R.brassMat(e));j.position.set(x*d,-.02,u),this.group.add(j);const z=_(new A(.06,p*.75,f*.7),new W({color:e.insetColor,roughness:.9,metalness:.1}));z.position.set(x*(d-(c/2+.01)),p/2-.5,u),this.group.add(z);const V=_(new A(.06,p*.8,.06),R.brassMat(e));V.position.set(x*(d-c/2-.04),p/2-.5,u),this.group.add(V)}const m=10.5,b=1.3,g=s-1.15,y=he.getWallTexture(e.wallTexBase).clone();y.wrapS=y.wrapT=me,y.repeat.set(6,5),y.needsUpdate=!0;const S=new W({map:y,color:16777215,roughness:.75,metalness:.18}),M=_(new A(12,m,b),S,!0);M.position.set(0,m/2-.5,g),this.group.add(M);const v=_(new A(12.1,.15,b+.1),R.brassMat(e));v.position.set(0,m-.5+.07,g),this.group.add(v);const T=3.8,E=9.8,H=new W({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.9,roughness:.3,metalness:.5}),L=_(new A(E,T,.08),H);L.position.set(0,m-.5-T/2-.3,g+b/2+.04),this.group.add(L);const G=_(new A(E+.24,T+.24,.06),R.brassMat(e));G.position.set(0,m-.5-T/2-.3,g+b/2),this.group.add(G);const J=_(new A(12.1,.08,.08),R.brassMat(e));J.position.set(0,m-.5+.18,g+b/2),this.group.add(J);const P=_(new A(12.1,.08,.08),R.brassMat(e));P.position.set(0,3.7,g+b/2),this.group.add(P);const Q=_(new A(12,1.1,4.5),R.cabinetMat(e),!0);Q.position.set(0,-.56,a+2.25),this.group.add(Q);const $=_(new A(12,.12,.12),R.brassMat(e));$.position.set(0,0,a+4.45),this.group.add($);const U=_(new A(12,.1,.08),R.brassMat(e));U.position.set(0,.06,a+4.5),this.group.add(U);const Y=_(new A(12,.5,f),R.cabinetMat(e),!0);Y.position.set(0,6.7,u),this.group.add(Y);const ee=_(new A(12,.1,.1),R.brassMat(e));ee.position.set(0,6.96,a+.1),this.group.add(ee);for(const x of[-1,1]){const C=_(new A(.09,.09,i+.5),R.brassMat(e));C.position.set(x*(t/2+.04),.05,u),this.group.add(C)}const ye=_(new A(t+.2,3.6,.18),new W({color:e.pusherHousingColor,roughness:.65,metalness:.5}));ye.position.set(0,1.8,s-.08),this.group.add(ye);const ne=_(new A(t-.2,.08,.08),R.brassMat(e));ne.position.set(0,3.65,s+.01),this.group.add(ne);const be=_(new A(t+.1,.07,.07),R.brassMat(e));be.position.set(0,.06,a),this.group.add(be);const xe=_(new A(t+.1,.07,.07),R.brassMat(e));xe.position.set(0,.06,s+.04),this.group.add(xe);for(const x of[-1,1]){const C=_(new A(.07,.07,i),R.brassMat(e));C.position.set(x*t/2,.06,(s+a)/2),this.group.add(C)}const Ee=h.OPEN_ZONE_START-s,re=s+Ee/2;for(const x of[-1,1]){const C=_(new A(.08,.08,Ee),R.brassMat(e));C.position.set(x*(t/2),3.55,re),this.group.add(C)}const oe=new F(new A(100,.2,100),new W({color:e.groundColor,emissive:e.groundColor,emissiveIntensity:.25,roughness:.95,metalness:0}));oe.position.set(0,-.65,0),this.group.add(oe)}buildCabinetDetails(e){const t=h.FIELD_DEPTH/2,i=-12/2,s=1.1,a=7.2,n=13.5,o=h.FIELD_WIDTH/2+.75,c=-.25,p=1.3,f=i-1.15;for(const v of[-1,1]){for(let E=0;E<2;E++){const H=E===0?-.26:.16,L=a*.6,G=v*(o+H),J=c+n/2+.07,P=_(new Z(.05,.05,L,8),R.brassMat(e));P.position.set(G,L/2+.3,J),this.group.add(P);const Q=4;for(let $=0;$<=Q;$++){const U=.3+$*(L/Q),Y=_(new Z(.09,.09,.07,10),R.brassMat(e));Y.position.set(G,U,J),this.group.add(Y)}}const T=_(new A(.48,.1,.1),R.brassMat(e));T.position.set(v*o,a*.6+.3+.05,c+n/2+.07),this.group.add(T)}for(const v of[-1,1]){const T=v*(o-s/2-.025),E=_(new Z(.24,.24,.06,18),R.brassMat(e));E.rotation.z=Math.PI/2,E.position.set(T,a*.52,c+.8),this.group.add(E);const H=_(new Z(.18,.18,.03,18),Ke(e.secondaryNeon,.55));H.rotation.z=Math.PI/2,H.position.set(T-v*.035,a*.52,c+.8),this.group.add(H);const L=_(new Z(.16,.16,.05,14),R.brassMat(e));L.rotation.z=Math.PI/2,L.position.set(T,a*.28,c-1.2),this.group.add(L);const G=_(new Z(.11,.11,.025,14),Ke(e.primaryNeon,.45));G.rotation.z=Math.PI/2,G.position.set(T-v*.03,a*.28,c-1.2),this.group.add(G)}const d=3.2,u=f+p/2+.05,m=_(new Wt(.82,.1,10,28),R.brassMat(e));m.position.set(0,d,u),this.group.add(m);const b=_(new Z(.74,.74,.04,28),new W({color:e.screenBase,emissive:e.screenEmissive,emissiveIntensity:.55,transparent:!0,opacity:.82,roughness:.05,metalness:0}));b.rotation.x=Math.PI/2,b.position.set(0,d,u),this.group.add(b);for(let v=0;v<4;v++){const T=v/4*Math.PI*2+Math.PI/4,E=_(new Z(.045,.045,.06,8),R.brassMat(e));E.rotation.x=Math.PI/2,E.position.set(Math.cos(T)*.88,d+Math.sin(T)*.88,u+.03),this.group.add(E)}{const v=s+.12,T=.12,E=n+.12;for(const H of[-1,1])for(const L of[.33,.66]){const G=_(new A(v,T,E),R.brassMat(e));G.position.set(H*o,L*a-.5,c),this.group.add(G)}}const g=t+4.45,y=_(new A(1.3,.16,.05),new W({color:e.insetColor,roughness:.9,metalness:.1}));y.position.set(0,-.08,g),this.group.add(y);const S=_(new A(1.5,.3,.04),R.brassMat(e));S.position.set(0,-.08,g-.01),this.group.add(S);const M=_(new A(.9,.045,.06),new W({color:0,roughness:1,metalness:0}));M.position.set(0,-.06,g+.01),this.group.add(M)}addSideGuardMeshes(e){const s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const o=n*(h.FIELD_WIDTH/2+.1),c=new A(.2,2,s),p=Ne.createMesh(c,4500223,!1,!1);p.position.set(o,2/2,a),e.add(p),this.sideGuardMeshes.push(p)}}removeSideGuardMeshes(e){for(const t of this.sideGuardMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.sideGuardMeshes=[]}updatePusher(e){this.pusherMesh.position.z=this.pusherZBase+e}}class Ps{constructor(e,t,i,s){r(this,"physicsWorld");r(this,"physicsSync");r(this,"collisionHandler");r(this,"pusher");r(this,"medalSpawner");r(this,"itemSpawner");r(this,"dropZone");r(this,"gimmickManager");r(this,"fieldMesh");r(this,"time",0);r(this,"getMedalQuotaMultiplier",()=>1);r(this,"sideGuardActive",!1);r(this,"sideGuardBodies",[]);this.sceneManager=e,this.quotaManager=t,this.inventory=i,this.physicsWorld=new ds,this.physicsSync=new ps,this.collisionHandler=new us,this.pusher=new ms,this.medalSpawner=new Ss,this.itemSpawner=new As,this.dropZone=new ws,this.gimmickManager=new Ms,this.fieldMesh=new R(s)}setMedalQuotaMultiplierFn(e){this.getMedalQuotaMultiplier=e}rebuildFieldMesh(e){he.disposeAll(),this.fieldMesh.rebuild(e)}async init(){await this.physicsWorld.init(),this.collisionHandler.init(this.physicsWorld),await this.buildFieldPhysics(),await this.pusher.initPhysics(this.physicsWorld),await this.dropZone.initPhysics(this.physicsWorld,this.collisionHandler),this.collisionHandler.onMedalCollected(e=>{const t=this.medalSpawner.getQuotaValue(e);this.medalSpawner.markForRemoval(e);const i=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(t,i),I.emit("medal:collected",{count:t})}),this.collisionHandler.onItemCollected(e=>{const t=this.itemSpawner.getDefinitionId(e);if(!t)return;this.itemSpawner.markForRemoval(e);const i=this.inventory.addItem(t),s=ge(t);s&&(this.quotaManager.addItem(s.quotaValue),I.emit("item:collected",{itemId:t,instanceId:i.instanceId,quotaValue:s.quotaValue}))}),this.sceneManager.add(this.fieldMesh.group)}async buildFieldPhysics(){const e=this.physicsWorld.rapier,t=e.RigidBodyDesc.fixed().setTranslation(0,-.05,0),i=this.physicsWorld.createRigidBody(t),s=e.ColliderDesc.cuboid(h.FIELD_WIDTH/2,.05,h.FIELD_DEPTH/2).setFriction(.6).setRestitution(.05);this.physicsWorld.createCollider(s,i);const a=3.5,n=.2,o=h.OPEN_ZONE_START- -12/2,c=-12/2+o/2,p=e.RigidBodyDesc.fixed().setTranslation(-8/2-n/2,a/2,c),f=this.physicsWorld.createRigidBody(p);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,o/2),f);const d=e.RigidBodyDesc.fixed().setTranslation(h.FIELD_WIDTH/2+n/2,a/2,c),u=this.physicsWorld.createRigidBody(d);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(n/2,a/2,o/2),u);const m=8,b=.5,g=e.RigidBodyDesc.fixed().setTranslation(0,m/2,-12/2-b/2),y=this.physicsWorld.createRigidBody(g);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(h.FIELD_WIDTH/2+b,m/2,b/2),y)}startStage(e,t){this.spawnInitialMedals(),this.gimmickManager.setupStage(e,t,this.physicsWorld,this.sceneManager);const s=new Rs(e*1e3+t).pickRandom(h.ITEMS_PER_STAGE);this.itemSpawner.spawnItems(s,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,e*1e3+t+7)}spawnInitialMedals(){const e=-6+h.PUSHER_DEPTH-h.PUSHER_RANGE,t=h.FIELD_DEPTH/2-h.MEDAL_RADIUS,i=h.FIELD_WIDTH/2-h.MEDAL_RADIUS;for(let d=0;d<h.INITIAL_FIELD_MEDALS;d++){const u=(Math.random()*2-1)*i,m=e+Math.random()*(t-e),b=h.MEDAL_THICKNESS/2+Math.random()*.5;this.medalSpawner.spawn(u,b,m,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}const s=-12/2+h.MEDAL_RADIUS,n=e-h.MEDAL_RADIUS-s,o=6,c=Math.ceil(h.INITIAL_PUSHER_MEDALS/o),p=i*2/(o-1),f=n/Math.max(c-1,1);for(let d=0;d<h.INITIAL_PUSHER_MEDALS;d++){const u=d%o,m=Math.floor(d/o),b=-i+u*p+(Math.random()-.5)*.15,g=s+m*f+(Math.random()-.5)*.15,y=h.PUSHER_HEIGHT+h.MEDAL_THICKNESS/2+.8+m*.25;this.medalSpawner.spawn(b,y,g,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,void 0,"normal")}}throwMedal(e,t){const i=h.FIELD_DEPTH/2-.5,s=2,n=-(12+(-t+1)/2*7);this.medalSpawner.spawn(e,s,i,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,{x:0,y:6,z:n})}update(e){this.time+=e;const t=4,i=Math.min(e,1/15);this.physicsWorld.setTimestep(i/t),this.collisionHandler.processEvents(this.physicsWorld,t),this.medalSpawner.cleanupFallen(h.MEDAL_CLEANUP_Y,this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager,a=>{const n=this.medalSpawner.getQuotaValue(a),o=this.getMedalQuotaMultiplier();this.quotaManager.addMedals(n,o),I.emit("medal:collected",{count:n})}),this.medalSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.flushRemovals(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.physicsSync.sync(this.physicsWorld);const s=this.pusher.update(e);this.fieldMesh.updatePusher(s),this.gimmickManager.update(e),this.itemSpawner.update(this.time)}endStage(){this.gimmickManager.clear(this.sceneManager),this.medalSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager),this.itemSpawner.clear(this.physicsWorld,this.physicsSync,this.collisionHandler,this.sceneManager)}addSideGuardWalls(){if(this.sideGuardActive||!this.physicsWorld.initialized)return;this.sideGuardActive=!0;const e=this.physicsWorld.rapier,t=2,i=.2,s=h.FIELD_DEPTH/2-h.OPEN_ZONE_START,a=h.OPEN_ZONE_START+s/2;for(const n of[-1,1]){const o=n*(h.FIELD_WIDTH/2+i/2),c=e.RigidBodyDesc.fixed().setTranslation(o,t/2,a),p=this.physicsWorld.createRigidBody(c);this.physicsWorld.createCollider(e.ColliderDesc.cuboid(i/2,t/2,s/2),p),this.sideGuardBodies.push(p)}}removeSideGuardWalls(){for(const e of this.sideGuardBodies)this.physicsWorld.removeRigidBody(e);this.sideGuardBodies=[],this.sideGuardActive=!1}get isSideGuardActive(){return this.sideGuardActive}dispose(){this.sceneManager.remove(this.fieldMesh.group),this.physicsWorld.dispose()}}class Ls{constructor(){r(this,"current",0);r(this,"target",0);r(this,"phase",1);r(this,"stage",1)}startStage(e,t){this.phase=e,this.stage=t,this.current=0,this.target=this.calcTarget(e,t),I.emit("stage:started",{phase:e,stage:t,quotaTarget:this.target}),I.emit("quota:updated",{current:this.current,target:this.target})}calcTarget(e,t){const i=(e-1)*h.STAGES_PER_PHASE+t;return Math.ceil(h.BASE_QUOTA*Math.pow(h.QUOTA_MULTIPLIER,i-1))}addMedals(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}addItem(e,t=1){this.current+=e*t,I.emit("quota:updated",{current:this.current,target:this.target}),this.current>=this.target&&I.emit("quota:reached",{phase:this.phase,stage:this.stage})}get currentValue(){return this.current}get targetValue(){return this.target}get isReached(){return this.current>=this.target}get progress(){return Math.min(this.current/this.target,1)}}class ks{constructor(e){r(this,"phase",1);r(this,"stage",1);this.fsm=e}get currentPhase(){return this.phase}get currentStage(){return this.stage}get isLastStageOfPhase(){return this.stage===h.STAGES_PER_PHASE}startCurrentStage(){this.fsm.transition(w.PLAYING)}clearCurrentStage(){I.emit("stage:cleared",{phase:this.phase,stage:this.stage}),this.fsm.transition(w.STAGE_CLEAR),this.stage===h.STAGES_PER_PHASE&&I.emit("phase:cleared",{phase:this.phase})}advanceStage(){this.stage<h.STAGES_PER_PHASE&&this.stage++,this.fsm.transition(w.STAGE_START)}advancePhase(){this.phase++,this.stage=1}reset(){this.phase=1,this.stage=1}}function Ds(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}class Hs{constructor(){r(this,"items",[])}addItem(e){const t={instanceId:Ds(),definitionId:e,collectedAt:Date.now()};return this.items.push(t),t}removeItem(e){const t=this.items.findIndex(i=>i.instanceId===e);return t===-1?!1:(this.items.splice(t,1),!0)}getAll(){return[...this.items]}getDefinition(e){const t=this.items.find(i=>i.instanceId===e);if(t)return ge(t.definitionId)}get count(){return this.items.length}clear(){this.items=[]}totalSellPrice(){return this.items.reduce((e,t)=>{const i=ge(t.definitionId);return e+((i==null?void 0:i.sellPrice)??0)},0)}}class Bs{constructor(){r(this,"data",{phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0});I.on("medal:collected",({count:e})=>{this.data.totalMedalsCollected+=e}),I.on("item:collected",()=>{this.data.totalItemsCollected++}),I.on("stage:cleared",({phase:e,stage:t})=>{this.data.phase=e,this.data.stage=t})}addShopMoney(e){this.data.shopMoneyEarned+=e}get snapshot(){return{...this.data}}reset(){this.data={phase:1,stage:1,totalMedalsCollected:0,totalItemsCollected:0,shopMoneyEarned:0}}}class Os{calculate(e,t){const i=t.bestPhase*3+t.bestStage,a=e.phase*3+e.stage>i;return t.updateBest(e.phase,e.stage),t.incrementRuns(),{phase:e.phase,stage:e.stage,totalMedalsCollected:e.totalMedalsCollected,totalItemsCollected:e.totalItemsCollected,isNewBest:a,bestPhase:t.bestPhase,bestStage:t.bestStage}}}var D=(l=>(l.Gold="Gold",l.Alchemy="Alchemy",l.Throw="Throw",l.Guard="Guard",l))(D||{}),k=(l=>(l.Common="Common",l.Rare="Rare",l.Epic="Epic",l))(k||{});const mt=[{id:"gold_touch",name:"黄金の手",description:"メダル1枚あたりのノルマ加算値が+20%",tag:D.Gold,rarity:k.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.2}]},{id:"lucky_fall",name:"幸運の落下",description:"メダル1枚あたりのノルマ加算値が+50%",tag:D.Gold,rarity:k.Rare,effects:[{type:"QUOTA_PER_MEDAL",value:1.5}]},{id:"golden_shower",name:"黄金雨",description:"メダル1枚あたりのノルマ加算値が+100%",tag:D.Gold,rarity:k.Epic,effects:[{type:"QUOTA_PER_MEDAL",value:2}]},{id:"coin_magnet",name:"コインマグネット",description:"ステージクリア時にボーナスメダル+5枚",tag:D.Gold,rarity:k.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:5}]},{id:"fortune_wheel",name:"幸運の輪",description:"ステージクリア時にボーナスメダル+15枚",tag:D.Gold,rarity:k.Rare,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:15}]},{id:"appraiser",name:"鑑定士",description:"アイテムのノルマ加算値が1.5倍",tag:D.Alchemy,rarity:k.Common,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]},{id:"master_appraiser",name:"大鑑定士",description:"アイテムのノルマ加算値が2.5倍",tag:D.Alchemy,rarity:k.Rare,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:2.5}]},{id:"transmutation",name:"錬成",description:"アイテムの売却価格が1.5倍",tag:D.Alchemy,rarity:k.Common,effects:[{type:"ITEM_SELL_MULTIPLIER",value:1.5}]},{id:"great_transmutation",name:"大錬成",description:"アイテムの売却価格が2倍",tag:D.Alchemy,rarity:k.Rare,effects:[{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"philosopher",name:"賢者",description:"アイテムのノルマ加算値3倍+売却価格2倍",tag:D.Alchemy,rarity:k.Epic,effects:[{type:"ITEM_QUOTA_MULTIPLIER",value:3},{type:"ITEM_SELL_MULTIPLIER",value:2}]},{id:"double_throw",name:"ダブル投擲",description:"一度に投入するメダルが2枚になる",tag:D.Throw,rarity:k.Common,effects:[{type:"MEDAL_THROW_COUNT",value:2}]},{id:"triple_throw",name:"トリプル投擲",description:"一度に投入するメダルが3枚になる",tag:D.Throw,rarity:k.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:3}]},{id:"barrage",name:"弾幕",description:"一度に投入するメダルが5枚になる",tag:D.Throw,rarity:k.Epic,effects:[{type:"MEDAL_THROW_COUNT",value:5}]},{id:"quick_draw",name:"クイックドロー",description:"一度に投入するメダルが2枚+クリアボーナス+3枚",tag:D.Throw,rarity:k.Rare,effects:[{type:"MEDAL_THROW_COUNT",value:2},{type:"ON_CLEAR_BONUS_MEDAL",value:3}]},{id:"focused_aim",name:"集中狙い",description:"メダル1枚あたりのノルマ加算+30%",tag:D.Throw,rarity:k.Common,effects:[{type:"QUOTA_PER_MEDAL",value:1.3}]},{id:"safety_net",name:"セーフティネット",description:"ゲームオーバーを一度だけ無効化する",tag:D.Guard,rarity:k.Rare,effects:[{type:"GAME_OVER_SHIELD",value:1}]},{id:"double_safety",name:"ダブルセーフティ",description:"ゲームオーバーを二度まで無効化する",tag:D.Guard,rarity:k.Epic,effects:[{type:"GAME_OVER_SHIELD",value:2}]},{id:"guardian_angel",name:"守護天使",description:"ゲームオーバー無効+クリアボーナスメダル+8枚",tag:D.Guard,rarity:k.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ON_CLEAR_BONUS_MEDAL",value:8}]},{id:"resilience",name:"回復力",description:"クリアボーナスメダル+10枚",tag:D.Guard,rarity:k.Common,effects:[{type:"ON_CLEAR_BONUS_MEDAL",value:10}]},{id:"fortress",name:"要塞",description:"ゲームオーバー無効+アイテムノルマ加算+50%",tag:D.Guard,rarity:k.Epic,effects:[{type:"GAME_OVER_SHIELD",value:1},{type:"ITEM_QUOTA_MULTIPLIER",value:1.5}]}];function Xe(l){return mt.find(e=>e.id===l)}class Gs{constructor(){r(this,"owned",[])}addSkill(e,t){this.owned.push({definitionId:e,acquiredAt:t}),I.emit("skill:selected",{skillId:e})}getOwnedSkills(){return[...this.owned]}getEffectMultiplier(e){let t=1;for(const i of this.owned){const s=Xe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t*=a.value)}return t}getEffectSum(e){let t=0;for(const i of this.owned){const s=Xe(i.definitionId);if(s)for(const a of s.effects)a.type===e&&(t+=a.value)}return t}get medalThrowCount(){const e=this.getEffectSum("MEDAL_THROW_COUNT");return e>0?e:1}get gameOverShields(){return this.getEffectSum("GAME_OVER_SHIELD")}get quotaPerMedalMultiplier(){return this.getEffectMultiplier("QUOTA_PER_MEDAL")}get itemQuotaMultiplier(){return this.getEffectMultiplier("ITEM_QUOTA_MULTIPLIER")}get itemSellMultiplier(){return this.getEffectMultiplier("ITEM_SELL_MULTIPLIER")}get onClearBonusMedals(){return this.getEffectSum("ON_CLEAR_BONUS_MEDAL")}consumeShield(){return!1}reset(){this.owned=[]}}const Je={[k.Common]:60,[k.Rare]:30,[k.Epic]:10};class Ns{pickChoices(e,t,i){const s=new Fe(i),a=new Set(t.map(p=>p.definitionId)),n=mt.filter(p=>!a.has(p.id));if(n.length===0)return[];const o=[],c=new Set;for(let p=0;p<e&&o.length<n.length;p++){const f=Object.keys(Je),d=f.map(g=>Je[g]),u=s.weightedPick(f,d),m=n.filter(g=>g.rarity===u&&!c.has(g.id));if(m.length===0){const g=n.filter(S=>!c.has(S.id));if(g.length===0)break;const y=g[Math.floor(s.next()*g.length)];o.push(y),c.add(y.id);continue}const b=m[Math.floor(s.next()*m.length)];o.push(b),c.add(b.id)}return o}}const Ue=[{id:"side_guard",name:"サイドガード",description:"30秒間サイドの壁を復活",price:300,durationMs:3e4,color:"#44aaff"},{id:"medal_fever",name:"メダルフィーバー",description:"30秒間メダルのノルマ2倍",price:200,durationMs:3e4,color:"#ffaa00"},{id:"medal_shower",name:"メダルシャワー",description:"即座に20枚のメダルが降ってくる",price:250,durationMs:0,color:"#ff60a0"}];function et(l){return Ue.find(e=>e.id===l)}class Fs{constructor(){r(this,"shopMoney");r(this,"medals");r(this,"sellMultiplier",1);r(this,"ownedActiveItems",new Map);this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS}setSellMultiplier(e){this.sellMultiplier=e}get money(){return this.shopMoney}get currentMedals(){return this.medals}setMedals(e){this.medals=e}addMoney(e){this.shopMoney+=e}spendMedal(){return this.medals<=0?!1:(this.medals--,!0)}addMedals(e){this.medals+=e}sellItem(e,t){const i=t.getDefinition(e);if(!i)return 0;const s=Math.floor(i.sellPrice*this.sellMultiplier);return t.removeItem(e),this.shopMoney+=s,s}buyMedals(e){const t=e*h.MEDAL_BUY_PRICE;return this.shopMoney<t?!1:(this.shopMoney-=t,this.medals+=e,!0)}buyActiveItem(e){const t=Ue.find(i=>i.id===e);return!t||this.shopMoney<t.price?!1:(this.shopMoney-=t.price,this.ownedActiveItems.set(e,(this.ownedActiveItems.get(e)??0)+1),!0)}useActiveItem(e){const t=this.ownedActiveItems.get(e)??0;return t<=0?!1:(t===1?this.ownedActiveItems.delete(e):this.ownedActiveItems.set(e,t-1),!0)}getOwnedActiveItems(){return Array.from(this.ownedActiveItems.entries()).map(([e,t])=>({id:e,count:t}))}reset(){this.shopMoney=h.INITIAL_SHOP_MONEY,this.medals=h.INITIAL_MEDALS,this.sellMultiplier=1,this.ownedActiveItems.clear()}}let tt=!1;function Us(){if(tt)return;tt=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class zs{constructor(e){r(this,"el");r(this,"titleEl");r(this,"onStartCallbacks",[]);r(this,"onSettingsCallbacks",[]);r(this,"hideTimer",null);Us(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,a.textContent="v0.1.0",this.el.appendChild(this.titleEl),this.el.appendChild(t),this.el.appendChild(i),this.el.appendChild(s),this.el.appendChild(a),e.appendChild(this.el)}applyTheme(e){const t=e==="steampunk"?"titlePulseSteam":"titlePulseCyber";this.titleEl.style.animation=`${t} 3s ease-in-out infinite`}onStart(e){this.onStartCallbacks.push(e)}onSettings(e){this.onSettingsCallbacks.push(e)}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class Ws{constructor(e){r(this,"el");r(this,"prevMedals",-1);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e){const t=e!==this.prevMedals,i=this.prevMedals>0&&e===0;this.prevMedals=e,this.el.textContent=`🪙 ${e}`,t&&(i?this.el.style.color="#ff4444":this.el.style.color="var(--t-primary)",this.el.style.transform="scale(1.25)",setTimeout(()=>{this.el.style.transform="scale(1)"},250))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let st=!1;function Vs(){if(st)return;st=!0;const l=document.createElement("style");l.textContent=`
    @keyframes barPulse {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.03); }
    }
  `,document.head.appendChild(l)}class $s{constructor(e){r(this,"container");r(this,"bar");r(this,"label");r(this,"reached",!1);Vs(),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.bar.appendChild(i),t.appendChild(this.bar),this.container.appendChild(this.label),this.container.appendChild(t),e.appendChild(this.container)}update(e,t){const i=Math.min(e/t,1)*100;this.bar.style.width=`${i}%`,this.label.textContent=`QUOTA: ${Math.floor(e)} / ${t}`,e>=t&&!this.reached?(this.reached=!0,this.bar.style.background="linear-gradient(90deg, var(--t-success), var(--t-primary))",this.bar.style.boxShadow="0 0 14px var(--t-shadow-glow)",this.bar.style.animation="barPulse 0.6s ease infinite"):e<t&&this.reached&&(this.reached=!1,this.bar.style.background="linear-gradient(90deg, var(--t-bar-start), var(--t-bar-end))",this.bar.style.boxShadow="",this.bar.style.animation="")}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Ys{constructor(e){r(this,"el");this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,e.appendChild(this.el)}update(e,t){const i=document.createElement("span");i.style.cssText="color: var(--t-primary); font-weight: bold;",i.textContent=String(e),this.el.innerHTML="";const s=document.createTextNode("Phase ");this.el.appendChild(s),this.el.appendChild(i),this.el.appendChild(document.createElement("br")),this.el.appendChild(document.createTextNode(`Stage ${t} / 3`))}show(){this.el.style.display="block"}hide(){this.el.style.display="none"}}let it=!1;function qs(){if(it)return;it=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class Qs{constructor(e){r(this,"el");r(this,"medalCounter");r(this,"quotaBar");r(this,"phaseIndicator");r(this,"throwHint");r(this,"inventoryPanel");r(this,"activeItemPanel");r(this,"countdownEl");r(this,"feverBannerEl");r(this,"comboEl");r(this,"edgeGlowEl");r(this,"onUseActiveCallbacks",[]);r(this,"hideTimer",null);r(this,"jackpotHudEl");r(this,"jackpotBarEl");this.el=document.createElement("div"),this.el.style.cssText=`
      position: absolute;
      inset: 0;
      display: none;
      pointer-events: none;
      opacity: 0;
      transition: opacity 280ms ease;
    `,this.medalCounter=new Ws(this.el),this.quotaBar=new $s(this.el),this.phaseIndicator=new Ys(this.el),this.throwHint=document.createElement("div"),this.throwHint.style.cssText=`
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
    `,this.jackpotBarEl=this.jackpotHudEl.querySelector(".jp-bar"),this.el.appendChild(this.jackpotHudEl),e.appendChild(this.el),qs()}update(e,t,i,s,a){this.medalCounter.update(e),this.quotaBar.update(t,i),this.phaseIndicator.update(s,a)}showFloatingText(e,t="var(--t-primary)"){let i="2rem";const s=parseInt(e.replace("+",""),10);isNaN(s)||(s>=5?i="2.6rem":s>=2?i="2.2rem":i="1.6rem");const a=document.createElement("div");a.style.cssText=`
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
      `,a.textContent=s.name,this.inventoryPanel.appendChild(a)}}updateActiveItems(e){if(this.activeItemPanel.innerHTML="",e.length===0)return;const t=document.createElement("div");t.style.cssText="color: var(--t-text-dim); font-size: 0.7rem; margin-bottom: 4px; text-transform: uppercase;",t.textContent="Active Items",this.activeItemPanel.appendChild(t);for(const i of e){const s=document.createElement("button"),a=i.remainingMs??0,n=a>0,o=n?` (${Math.ceil(a/1e3)}s)`:"";s.style.cssText=`
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
      `,s.innerHTML=`<strong>${i.name}</strong> x${i.count}${o}`,s.addEventListener("click",()=>{this.onUseActiveCallbacks.forEach(c=>c(i.id))}),this.activeItemPanel.appendChild(s)}}showFever(e){this.edgeGlowEl.style.opacity="1",this.feverBannerEl.style.display="flex";const t=this.feverBannerEl.querySelector(".fever-timer-bar");t&&(t.style.animation="none",t.style.width="100%",t.offsetWidth,t.style.animation=`feverBarShrink ${e}ms linear forwards`),this.flashScreen("rgba(255,215,0,0.22)")}hideFever(){this.edgeGlowEl.style.opacity="0",this.feverBannerEl.style.display="none",this.flashScreen("rgba(100,100,200,0.18)")}showCombo(e){if(e<2){this.comboEl.style.display="none";return}this.comboEl.style.display="block",this.comboEl.textContent=`COMBO ×${e}`,this.comboEl.style.animation="none",this.comboEl.offsetWidth,this.comboEl.style.animation="comboIn 0.25s ease forwards";const t=Math.min(e*20,200);this.comboEl.style.filter=`hue-rotate(${t}deg)`}hideCombo(){this.comboEl.style.display="none"}flashScreen(e){const t=document.createElement("div");t.style.cssText=`
      position: absolute; inset: 0; background: ${e};
      pointer-events: none; border-radius: 4px;
      animation: flashOverlay 0.5s ease-out forwards;
    `,this.el.appendChild(t),setTimeout(()=>t.remove(),500)}onUseActive(e){this.onUseActiveCallbacks.push(e)}updateJackpot(e,t){this.jackpotHudEl.style.display="block";const i=Math.min(e/t,1)*100;this.jackpotBarEl.style.width=`${i}%`;const s=this.jackpotHudEl.querySelector(".jp-label");s&&(s.textContent=`${Math.floor(e)} / ${t}`),i>=80?(this.jackpotHudEl.style.boxShadow="0 0 16px var(--t-primary), 0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-primary)"):(this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)")}resetJackpot(e){this.jackpotBarEl.style.width="0%";const t=this.jackpotHudEl.querySelector(".jp-label");t&&(t.textContent=`0 / ${e}`),this.jackpotHudEl.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",this.jackpotHudEl.style.borderColor="var(--t-border-faint)"}showCountdown(e){const t=this.countdownEl.querySelector(".cd-number");t&&(t.textContent=String(Math.ceil(e))),this.countdownEl.style.display="block"}hideCountdown(){this.countdownEl.style.display="none"}show(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}let at=!1;function js(){if(at)return;at=!0;const l=document.createElement("style");l.textContent=`
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Zs{constructor(e){r(this,"el");r(this,"onContinueCallbacks",[]);r(this,"onSkipCallbacks",[]);r(this,"titleEl");r(this,"infoEl");r(this,"continueBtn");r(this,"shopBtn");r(this,"hideTimer",null);js(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent=e,s.addEventListener("mouseenter",()=>s.style.background=`${t}22`),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",i),s}show(e,t,i,s,a){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),i?(this.titleEl.textContent="PHASE CLEAR!",this.titleEl.style.color="var(--t-primary)",this.continueBtn.style.display="none",this.shopBtn.textContent="GO TO SHOP →"):(this.titleEl.textContent="STAGE CLEAR!",this.titleEl.style.color="var(--t-success)",this.continueBtn.style.display="",this.shopBtn.textContent="GO TO SHOP (skip to next phase)"),this.infoEl.textContent=`Phase ${e} - Stage ${t} | ${Math.floor(s)} / ${a}`,this.titleEl.style.animation="none",this.titleEl.offsetWidth,this.titleEl.style.animation="slideDown 0.4s ease forwards",this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onContinue(e){this.onContinueCallbacks.push(e)}onSkip(e){this.onSkipCallbacks.push(e)}}let nt=!1;function Ks(){if(nt)return;nt=!0;const l=document.createElement("style");l.textContent=`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(l)}class Xs{constructor(e){r(this,"el");r(this,"onRetryCallbacks",[]);r(this,"hideTimer",null);Ks(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      `,i.textContent="★ NEW BEST! ★");const s=[`Reached: Phase ${e.phase} - Stage ${e.stage}`,`Medals Collected: ${e.totalMedalsCollected}`,`Items Collected: ${e.totalItemsCollected}`,`Best: Phase ${e.bestPhase} - Stage ${e.bestStage}`],a=document.createElement("div");a.style.cssText="margin: 8px 0 24px; text-align: center;",s.forEach((o,c)=>{const p=document.createElement("div");p.style.cssText=`
        color: var(--t-text-dim);
        font-size: 0.95rem;
        line-height: 1.8;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: ${.15+c*.1}s;
        opacity: 0;
      `,p.textContent=o,a.appendChild(p)});const n=document.createElement("button");n.style.cssText=`
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
    `,n.textContent="TRY AGAIN",n.addEventListener("mouseenter",()=>n.style.background="#ff444422"),n.addEventListener("mouseleave",()=>n.style.background="transparent"),n.addEventListener("click",()=>this.onRetryCallbacks.forEach(o=>o())),this.el.appendChild(t),i&&this.el.appendChild(i),this.el.appendChild(a),this.el.appendChild(n),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onRetry(e){this.onRetryCallbacks.push(e)}}const Js=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class ei{constructor(e){r(this,"el");r(this,"onSelectCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
      ${Js}
      background: rgba(0,0,0,0.6);
      border: 2px solid ${i}44;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const a=document.createElement("div");a.style.cssText=`font-size: 0.7rem; color: ${i}; margin-bottom: 8px; letter-spacing: 0.1em;`,a.textContent=`[${e.tag}] · ${e.rarity}`;const n=document.createElement("div");n.style.cssText="font-size: 1rem; color: var(--t-text-bright); font-weight: bold; margin-bottom: 8px;",n.textContent=e.name;const o=document.createElement("div");return o.style.cssText="font-size: 0.8rem; color: var(--t-text-dim); line-height: 1.4;",o.textContent=e.description,s.appendChild(a),s.appendChild(n),s.appendChild(o),s.addEventListener("mouseenter",()=>{s.style.borderColor=i,s.style.background=`${i}11`,s.style.transform="translateY(-2px)",s.style.boxShadow=`0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${i}22`}),s.addEventListener("mouseleave",()=>{s.style.borderColor=`${i}44`,s.style.background="rgba(0,0,0,0.6)",s.style.transform="translateY(0)",s.style.boxShadow=""}),s.addEventListener("click",()=>{this.onSelectCallbacks.forEach(c=>c(e.id))}),s}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onSelect(e){this.onSelectCallbacks.push(e)}}const rt=`
  background: var(--t-panel-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--t-border-faint);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 12px;
`;class ti{constructor(e){r(this,"el");r(this,"moneyEl");r(this,"inventoryEl");r(this,"onBuyMedalsCallbacks",[]);r(this,"onSellCallbacks",[]);r(this,"onContinueCallbacks",[]);r(this,"onBuyActiveCallbacks",[]);r(this,"hideTimer",null);this.el=document.createElement("div"),this.el.style.cssText=`
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
    `,s.textContent="START NEXT PHASE →",s.addEventListener("mouseenter",()=>s.style.background="rgba(0,255,136,0.13)"),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",()=>this.onContinueCallbacks.forEach(a=>a())),t.appendChild(i),t.appendChild(this.moneyEl),t.appendChild(s),this.inventoryEl=document.createElement("div"),this.inventoryEl.style.cssText="margin-top: 16px;",this.el.appendChild(t),this.el.appendChild(this.inventoryEl),e.appendChild(this.el)}show(e,t,i=[]){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.moneyEl.textContent=`Shop Money: ${e} G`,this.renderContent(e,t,i),this.el.style.opacity="0",this.el.style.display="block",requestAnimationFrame(()=>{this.el.style.opacity="1"})}renderContent(e,t,i){this.inventoryEl.innerHTML="";const s=document.createElement("div");s.style.cssText="margin-bottom: 28px;";const a=document.createElement("h3");a.style.cssText="color: var(--t-primary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",a.textContent="BUY MEDALS",s.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const o=[{count:10,price:50,label:"10 medals"},{count:30,price:130,label:"30 medals"},{count:100,price:400,label:"100 medals"}];for(const y of o){const S=e>=y.price,M=document.createElement("button");M.style.cssText=`
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
      `,M.innerHTML=`<strong>${y.label}</strong><br>${y.price} G`,S&&(M.addEventListener("mouseenter",()=>{M.style.background="rgba(200,131,26,0.13)",M.style.transform="translateY(-2px)"}),M.addEventListener("mouseleave",()=>{M.style.background="transparent",M.style.transform="translateY(0)"}),M.addEventListener("click",()=>{this.onBuyMedalsCallbacks.forEach(v=>v(y.count))})),n.appendChild(M)}s.appendChild(n),this.inventoryEl.appendChild(s);const c=document.createElement("hr");c.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(c);const p=document.createElement("div");p.style.cssText="margin-bottom: 28px;";const f=document.createElement("h3");f.style.cssText="color: var(--t-tertiary); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",f.textContent="ACTIVE ITEMS (buy to use during game)",p.appendChild(f);const d=document.createElement("div");d.style.cssText="display: flex; gap: 12px; flex-wrap: wrap;";const u=new Map(i.map(y=>[y.id,y.count]));for(const y of Ue){const S=e>=y.price,M=u.get(y.id)??0,v=document.createElement("div");v.style.cssText=`
        padding: 14px;
        ${rt}
        background: rgba(0,0,0,0.5);
        border: 2px solid ${S?y.color:"#555"};
        min-width: 160px;
        transition: transform 0.15s, box-shadow 0.15s;
      `;const T=document.createElement("div");T.style.cssText=`color: ${y.color}; font-size: 0.95rem; font-weight: bold; margin-bottom: 4px;`,T.textContent=y.name;const E=document.createElement("div");E.style.cssText="color: var(--t-text-dim); font-size: 0.75rem; margin-bottom: 8px;",E.textContent=y.description;const H=document.createElement("div");H.style.cssText="color: #88cc88; font-size: 0.75rem; margin-bottom: 8px;",H.textContent=`Owned: ${M}`;const L=document.createElement("button");L.style.cssText=`
        padding: 6px 14px;
        background: transparent;
        border: 1px solid ${S?y.color:"#555"};
        color: ${S?y.color:"#555"};
        cursor: ${S?"pointer":"default"};
        font-size: 0.8rem;
        border-radius: 4px;
        transition: background 0.2s;
      `,L.textContent=`Buy ${y.price} G`,S&&(L.addEventListener("mouseenter",()=>L.style.background=`${y.color}22`),L.addEventListener("mouseleave",()=>L.style.background="transparent"),v.addEventListener("mouseenter",()=>{v.style.transform="translateY(-2px)",v.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),v.addEventListener("mouseleave",()=>{v.style.transform="translateY(0)",v.style.boxShadow=""}),L.addEventListener("click",()=>{this.onBuyActiveCallbacks.forEach(G=>G(y.id))})),v.appendChild(T),v.appendChild(E),v.appendChild(H),v.appendChild(L),d.appendChild(v)}p.appendChild(d),this.inventoryEl.appendChild(p);const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin: 8px 0 20px;",this.inventoryEl.appendChild(m);const b=document.createElement("div"),g=document.createElement("h3");if(g.style.cssText="color: var(--t-text-dim); margin-bottom: 12px; border-bottom: 1px solid var(--t-border-faint); padding-bottom: 8px;",g.textContent="YOUR ITEMS (click to sell)",b.appendChild(g),t.length===0){const y=document.createElement("p");y.style.cssText="color: var(--t-text-dim); opacity: 0.5;",y.textContent="No items collected yet.",b.appendChild(y)}else{const y=document.createElement("div");y.style.cssText="display: flex; flex-wrap: wrap; gap: 12px;";for(const S of t){const M=ge(S.definitionId);if(!M)continue;const v=document.createElement("div");v.style.cssText=`
          width: 160px;
          padding: 14px;
          ${rt}
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--t-track-bg);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
        `,v.innerHTML=`
          <div style="color:var(--t-text-bright);font-size:0.9rem;margin-bottom:4px;">${M.name}</div>
          <div style="color:var(--t-text-dim);font-size:0.75rem;">${M.rarity}</div>
          <div style="color:var(--t-primary);font-size:0.85rem;margin-top:8px;">Sell: ${M.sellPrice} G</div>
        `,v.addEventListener("mouseenter",()=>{v.style.borderColor="var(--t-primary)",v.style.transform="translateY(-2px)",v.style.boxShadow="0 8px 32px rgba(0,0,0,0.5)"}),v.addEventListener("mouseleave",()=>{v.style.borderColor="var(--t-track-bg)",v.style.transform="translateY(0)",v.style.boxShadow=""}),v.addEventListener("click",()=>{this.onSellCallbacks.forEach(T=>T(S.instanceId))}),y.appendChild(v)}b.appendChild(y)}this.inventoryEl.appendChild(b)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onBuyMedals(e){this.onBuyMedalsCallbacks.push(e)}onSell(e){this.onSellCallbacks.push(e)}onContinue(e){this.onContinueCallbacks.push(e)}onBuyActive(e){this.onBuyActiveCallbacks.push(e)}}const si={name:"cyber",displayName:"CYBER NEON",ui:{bgOverlay:"rgba(10,10,30,0.85)",bgOverlayDark:"rgba(10,5,20,0.92)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.3)",secondary:"#00ffcc",tertiary:"#00aaff",success:"#00ff88",textDim:"#aaaacc",textBright:"#ffffff",borderFaint:"rgba(255,255,255,0.13)",panelBg:"rgba(255,255,255,0.05)",trackBg:"#333355",barStart:"#4444ff",barEnd:"#00ffaa",shadowGlow:"rgba(255,215,0,0.67)"},scene:{background:1979506,fogColor:1979506,cabinetColor:2236734,brassColor:9474232,brassRoughness:.15,brassMetalness:.92,insetColor:657950,screenBase:2080,screenEmissive:4160,groundColor:2437216,primaryNeon:16766720,secondaryNeon:65484,tertiaryNeon:4482815,starColor:8952319,gridColorA:1714782,gridColorB:924218,pusherHousingColor:2631754,bloomStrength:.55,bloomThreshold:.82,bloomRadius:.4,fieldTexBase:"#2a2a4e",pusherTexBase:"#3a3a6e",wallTexBase:"#1a1a3e"},lights:{ambientColor:5793960,ambientIntensity:1.8,fillColor:4210943,fillIntensity:.7,warmPointColor:16765056,warmPointIntensity:2,coolPointColor:4482815,coolPointIntensity:1.4}},ft={name:"steampunk",displayName:"STEAMPUNK",ui:{bgOverlay:"rgba(24,14,4,0.85)",bgOverlayDark:"rgba(18,10,2,0.92)",primary:"#ff9820",primaryFaint:"rgba(255,152,32,0.35)",secondary:"#ffb830",tertiary:"#d46820",success:"#ffb020",textDim:"#c8a870",textBright:"#ffeec0",borderFaint:"rgba(255,152,32,0.30)",panelBg:"rgba(255,152,32,0.08)",trackBg:"#3a2010",barStart:"#a05010",barEnd:"#ff9820",shadowGlow:"rgba(255,152,32,0.75)"},scene:{background:4859924,fogColor:4859924,cabinetColor:3941906,brassColor:12619840,brassRoughness:.35,brassMetalness:.78,insetColor:1182724,screenBase:1575936,screenEmissive:5251072,groundColor:3940368,primaryNeon:16750624,secondaryNeon:16758832,tertiaryNeon:13920288,starColor:16760896,gridColorA:6962196,gridColorB:3809288,pusherHousingColor:3678228,bloomStrength:.8,bloomThreshold:.76,bloomRadius:.55,fieldTexBase:"#2e1e0c",pusherTexBase:"#3a2210",wallTexBase:"#261608"},lights:{ambientColor:10514480,ambientIntensity:2.2,fillColor:10510384,fillIntensity:.9,warmPointColor:16748592,warmPointIntensity:2.8,coolPointColor:9455640,coolPointIntensity:1}},ii={name:"royal",displayName:"ROYAL CASINO",ui:{bgOverlay:"rgba(8,4,24,0.88)",bgOverlayDark:"rgba(5,2,16,0.95)",primary:"#ffd700",primaryFaint:"rgba(255,215,0,0.28)",secondary:"#00e8ff",tertiary:"#ff28a0",success:"#40ff90",textDim:"#b090d0",textBright:"#fff8e0",borderFaint:"rgba(255,215,0,0.22)",panelBg:"rgba(255,215,0,0.06)",trackBg:"#1a083a",barStart:"#8040ff",barEnd:"#ffd700",shadowGlow:"rgba(255,215,0,0.78)"},scene:{background:1181244,fogColor:1181244,cabinetColor:1969720,brassColor:13934608,brassRoughness:.08,brassMetalness:.98,insetColor:656416,screenBase:524320,screenEmissive:3805344,groundColor:2757712,primaryNeon:16766720,secondaryNeon:59647,tertiaryNeon:16722080,starColor:16769152,gridColorA:2624080,gridColorB:1312048,pusherHousingColor:1706032,bloomStrength:1.1,bloomThreshold:.62,bloomRadius:.5,fieldTexBase:"#12082a",pusherTexBase:"#1a0c34",wallTexBase:"#0e0620"},lights:{ambientColor:7352480,ambientIntensity:2,fillColor:5251264,fillIntensity:.85,warmPointColor:16765056,warmPointIntensity:3.2,coolPointColor:6295807,coolPointIntensity:2}},gt={cyber:si,steampunk:ft,royal:ii};let ot=!1;function ai(){if(ot)return;ot=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class ni{constructor(e){r(this,"el");r(this,"onVolumeChangeCallbacks",[]);r(this,"onThemeChangeCallbacks",[]);r(this,"onCloseCallbacks",[]);r(this,"hideTimer",null);r(this,"themeBtns",new Map);ai(),this.el=document.createElement("div"),this.el.style.cssText=`
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
    `;const i=document.createElement("h2");i.style.cssText="font-size: 1.6rem; color: var(--t-primary); margin-bottom: 32px; letter-spacing: 0.2em; text-align: center;",i.textContent="SETTINGS",t.appendChild(i);const s=document.createElement("div");s.style.cssText="margin-bottom: 32px;";const a=document.createElement("div");a.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",a.textContent="VOLUME",s.appendChild(a);const n=[{label:"Master",type:"master",value:e.masterVolume},{label:"BGM",type:"bgm",value:e.bgmVolume},{label:"SFX",type:"sfx",value:e.sfxVolume}];for(const b of n){const g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;";const y=document.createElement("div");y.style.cssText="font-size: 0.85rem; color: var(--t-text-bright); width: 52px; flex-shrink: 0;",y.textContent=b.label;const S=document.createElement("input");S.type="range",S.min="0",S.max="1",S.step="0.05",S.value=String(b.value),S.className="settings-slider",S.style.cssText="flex: 1;";const M=document.createElement("div");M.style.cssText="font-size: 0.8rem; color: var(--t-primary); width: 36px; text-align: right; flex-shrink: 0;",M.textContent=`${Math.round(b.value*100)}%`,S.addEventListener("input",()=>{const v=parseFloat(S.value);M.textContent=`${Math.round(v*100)}%`,this.onVolumeChangeCallbacks.forEach(T=>T(b.type,v))}),g.appendChild(y),g.appendChild(S),g.appendChild(M),s.appendChild(g)}t.appendChild(s);const o=document.createElement("hr");o.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(o);const c=document.createElement("div");c.style.cssText="margin-bottom: 32px;";const p=document.createElement("div");p.style.cssText="font-size: 0.75rem; color: var(--t-text-dim); letter-spacing: 0.15em; margin-bottom: 16px; text-transform: uppercase;",p.textContent="THEME",c.appendChild(p);const f=document.createElement("div");f.style.cssText="display: flex; gap: 10px; flex-wrap: wrap;";const d=["royal","cyber","steampunk"];for(const b of d){const g=b===e.theme,y=document.createElement("button");y.style.cssText=`
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
      `,y.textContent=gt[b].displayName,y.addEventListener("click",()=>{this.selectTheme(b),this.onThemeChangeCallbacks.forEach(S=>S(b))}),this.themeBtns.set(b,y),f.appendChild(y)}c.appendChild(f),t.appendChild(c);const u=document.createElement("hr");u.style.cssText="border: none; border-top: 1px solid var(--t-border-faint); margin-bottom: 24px;",t.appendChild(u);const m=document.createElement("button");m.style.cssText=`
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
    `,m.textContent="CLOSE",m.addEventListener("mouseenter",()=>{m.style.borderColor="var(--t-primary)",m.style.color="var(--t-primary)"}),m.addEventListener("mouseleave",()=>{m.style.borderColor="var(--t-border-faint)",m.style.color="var(--t-text-dim)"}),m.addEventListener("click",()=>{this.onCloseCallbacks.forEach(b=>b())}),t.appendChild(m),this.el.appendChild(t)}selectTheme(e){this.themeBtns.forEach((t,i)=>{const s=i===e;t.style.background=s?"var(--t-primary)":"transparent",t.style.color=s?"var(--t-bg-overlay-dark)":"var(--t-primary)",t.style.fontWeight=s?"bold":"normal"})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}onVolumeChange(e){this.onVolumeChangeCallbacks.push(e)}onThemeChange(e){this.onThemeChangeCallbacks.push(e)}onClose(e){this.onCloseCallbacks.push(e)}}const B=["🥇","⭐","💎","🎰"];let lt=!1;function ri(){if(lt)return;lt=!0;const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l)}class oi{constructor(e){r(this,"el");r(this,"reelEls",[]);r(this,"reelWrapperEls",[]);r(this,"resultEl");r(this,"hideTimer",null);ri(),this.el=document.createElement("div"),this.el.style.cssText=`
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
      `,this.reelWrapperEls.push(n);const o=document.createElement("div");o.style.cssText="text-align: center; line-height: 1; user-select: none;",o.textContent=B[0],this.reelEls.push(o),n.appendChild(o),i.appendChild(n)}this.el.appendChild(i);const s=document.createElement("div");s.style.cssText=`
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
    `,this.el.appendChild(this.resultEl),e.appendChild(this.el)}show(e){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.resultEl.textContent="",this.resultEl.style.animation="",this.reelWrapperEls.forEach(s=>{s.style.boxShadow="",s.style.animation=""}),this.el.style.opacity="0",this.el.style.display="flex",requestAnimationFrame(()=>{this.el.style.opacity="1"});const t=Math.random()*100;let i;if(t<15){const s=B[Math.floor(Math.random()*B.length)];i={type:"triple",medals:40,symbols:[s,s,s]}}else if(t<50){const s=B[Math.floor(Math.random()*B.length)];let a=B[Math.floor(Math.random()*B.length)];for(;a===s;)a=B[Math.floor(Math.random()*B.length)];i={type:"double",medals:15,symbols:[s,s,a]}}else{let s,a,n;do s=B[Math.floor(Math.random()*B.length)],a=B[Math.floor(Math.random()*B.length)],n=B[Math.floor(Math.random()*B.length)];while(s===a||a===n||s===n);i={type:"miss",medals:0,symbols:[s,a,n]}}this._spinReels(i,e)}_spinReels(e,t){this.reelEls.forEach(s=>{s.textContent=B[Math.floor(Math.random()*B.length)]});const i=(s,a,n)=>new Promise(o=>{const c=this.reelEls[s],p=setInterval(()=>{c.textContent=B[Math.floor(Math.random()*B.length)]},75);setTimeout(()=>{clearInterval(p),c.textContent=a,this.reelWrapperEls[s].style.boxShadow="0 0 16px var(--t-primary)",this.reelWrapperEls[s].style.animation="reelFlash 0.4s ease",o()},n)});i(0,e.symbols[0],1e3).then(()=>i(1,e.symbols[1],500)).then(()=>i(2,e.symbols[2],500)).then(()=>{let s="",a="var(--t-text-dim)";e.type==="triple"?(s=`🎉 JACKPOT!  +${e.medals} MEDALS!`,a="var(--t-primary)",this.reelWrapperEls.forEach(n=>{n.style.boxShadow="0 0 28px var(--t-primary), inset 0 0 12px rgba(255,215,0,0.2)"})):e.type==="double"?(s=`✓ MATCH!  +${e.medals} MEDALS!`,a="var(--t-success)"):(s="MISS...  Try again next time!",a="var(--t-text-dim)"),this.resultEl.textContent=s,this.resultEl.style.color=a,this.resultEl.style.animation="none",this.resultEl.offsetWidth,this.resultEl.style.animation="chanceResultPop 0.4s ease forwards",setTimeout(()=>{this.hide(),t(e)},1800)})}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.el.style.opacity="0",this.hideTimer=setTimeout(()=>{this.el.style.display="none",this.hideTimer=null},280)}}class li{constructor(e){r(this,"titleScreen");r(this,"gameScreen");r(this,"stageResultScreen");r(this,"resultScreen");r(this,"skillSelectScreen");r(this,"shopScreen");r(this,"settingsScreen");r(this,"chanceScreen");this.titleScreen=new zs(e),this.gameScreen=new Qs(e),this.stageResultScreen=new Zs(e),this.resultScreen=new Xs(e),this.skillSelectScreen=new ei(e),this.shopScreen=new ti(e),this.settingsScreen=new ni(e),this.chanceScreen=new oi(e),I.on("state:changed",({to:t})=>{this.handleStateChange(t)})}handleStateChange(e){switch(this.gameScreen.hide(),this.stageResultScreen.hide(),this.skillSelectScreen.hide(),this.shopScreen.hide(),e){case w.TITLE:this.titleScreen.show();break;case w.PLAYING:this.titleScreen.hide(),this.gameScreen.show();break;case w.STAGE_CLEAR:break;case w.RESULT:this.gameScreen.hide();break}}updateGameHUD(e,t,i,s,a,n,o){this.gameScreen.update(e,t,i,s,a),n&&this.gameScreen.updateInventory(n),o&&this.gameScreen.updateActiveItems(o)}}const ci=300,hi=380;class di{constructor(e){r(this,"throwCallbacks",[]);r(this,"enabled",!1);r(this,"holdTimer",null);r(this,"autoInterval",null);r(this,"autoActive",!1);r(this,"ignoreNextClick",!1);r(this,"lastNX",0);r(this,"lastNY",0);r(this,"onClick",e=>{if(!this.enabled)return;if(this.ignoreNextClick){this.ignoreNextClick=!1;return}const t=e.clientX/window.innerWidth*2-1,i=e.clientY/window.innerHeight*2-1;this._fire(t,i)});r(this,"onTouch",e=>{if(!this.enabled)return;e.preventDefault();const t=e.changedTouches[0];if(!t)return;const i=t.clientX/window.innerWidth*2-1,s=t.clientY/window.innerHeight*2-1;this._fire(i,s)});r(this,"onPointerDown",e=>{!this.enabled||e.button!==0||(this.lastNX=e.clientX/window.innerWidth*2-1,this.lastNY=e.clientY/window.innerHeight*2-1,this.holdTimer=setTimeout(()=>{this.autoActive=!0,this.autoInterval=setInterval(()=>{if(!this.enabled){this._stopAutoThrow();return}this._fire(this.lastNX,this.lastNY)},hi)},ci))});r(this,"onPointerUp",e=>{this.autoActive&&(this.ignoreNextClick=!0),this._stopAutoThrow()});this.canvas=e,e.addEventListener("click",this.onClick),e.addEventListener("touchend",this.onTouch,{passive:!1}),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp)}enable(){this.enabled=!0}disable(){this.enabled=!1,this._stopAutoThrow()}onThrow(e){return this.throwCallbacks.push(e),()=>{const t=this.throwCallbacks.indexOf(e);t!==-1&&this.throwCallbacks.splice(t,1)}}_fire(e,t){this.throwCallbacks.forEach(i=>i(e,t))}_stopAutoThrow(){this.holdTimer!==null&&(clearTimeout(this.holdTimer),this.holdTimer=null),this.autoInterval!==null&&(clearInterval(this.autoInterval),this.autoInterval=null),this.autoActive=!1}dispose(){this._stopAutoThrow(),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("touchend",this.onTouch),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp)}}const se=class se{constructor(){r(this,"ctx",null);r(this,"masterGain",null);r(this,"sfxGain",null);r(this,"bgmGain",null);r(this,"bgmPlaying",!1);r(this,"bgmNextTime",0);r(this,"bgmSchedulerTimer",null);r(this,"bgmBeatIndex",0);r(this,"bgmBPM",110)}get bgmBeat(){return 60/this.bgmBPM}getCtx(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.8,this.bgmGain.connect(this.masterGain)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}getSfxGain(){return this.getCtx(),this.sfxGain}getBgmGain(){return this.getCtx(),this.bgmGain}setMasterVolume(e){this.getCtx(),this.masterGain&&(this.masterGain.gain.value=Math.max(0,Math.min(1,e)))}setBgmVolume(e){this.getCtx(),this.bgmGain&&(this.bgmGain.gain.value=Math.max(0,Math.min(1,e)))}setSfxVolume(e){this.getCtx(),this.sfxGain&&(this.sfxGain.gain.value=Math.max(0,Math.min(1,e)))}playThrow(){const e=this.getCtx(),t=this.getSfxGain(),i=e.sampleRate*.12,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let p=0;p<i;p++)a[p]=Math.random()*2-1;const n=e.createBufferSource();n.buffer=s;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(800,e.currentTime),o.frequency.linearRampToValueAtTime(2400,e.currentTime+.1),o.Q.value=1.5;const c=e.createGain();c.gain.setValueAtTime(.4,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),n.connect(o),o.connect(c),c.connect(t),n.start(),n.stop(e.currentTime+.12)}playMedalCollected(){const e=this.getCtx(),t=this.getSfxGain(),i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.linearRampToValueAtTime(1320,e.currentTime+.15);const s=e.createGain();s.gain.setValueAtTime(.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3),i.connect(s),s.connect(t),i.start(),i.stop(e.currentTime+.3)}playQuotaReached(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.08,.25,.25)})}playStageCleared(){const e=this.getCtx(),t=this.getSfxGain();[[523.25,0,.15],[783.99,.15,.15],[1318.5,.3,.35]].forEach(([s,a,n])=>{this._playNote(e,t,"square",s,e.currentTime+a,n,.2)})}playGameOver(){const e=this.getCtx(),t=this.getSfxGain();[440,349.23,293.66,220].forEach((s,a)=>{this._playNote(e,t,"sawtooth",s,e.currentTime+a*.22,.3,.18)})}playFeverStart(){const e=this.getCtx(),t=this.getSfxGain();[523.25,659.25,783.99,1046.5,1318.5].forEach((s,a)=>{this._playNote(e,t,"square",s,e.currentTime+a*.055,.18,.28)}),this._playNote(e,t,"sawtooth",110,e.currentTime,.35,.25)}playFeverEnd(){const e=this.getCtx(),t=this.getSfxGain();[880,659.25,523.25,392].forEach((s,a)=>{this._playNote(e,t,"sine",s,e.currentTime+a*.09,.25,.18)})}playCombo(e){const t=this.getCtx(),i=this.getSfxGain(),s=440*Math.pow(1.12,Math.min(e-2,8));this._playNote(t,i,"triangle",s,t.currentTime,.12,.22),this._playNote(t,i,"triangle",s*1.5,t.currentTime+.06,.1,.15)}playSkillSelected(){const e=this.getCtx(),t=this.getSfxGain();this._playNote(e,t,"sine",600,e.currentTime,.2,.25)}playCountdownTick(){const e=this.getCtx(),t=this.getSfxGain(),i=Math.floor(e.sampleRate*.02),s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*(1-c/a.length);const n=e.createBufferSource();n.buffer=s;const o=e.createGain();o.gain.value=.35,n.connect(o),o.connect(t),n.start()}playJackpotFanfare(){const e=this.getCtx(),t=this.getSfxGain(),i=[261.63,329.63,392,523.25,659.25,783.99,1046.5];i.forEach((a,n)=>{this._playNote(e,t,"square",a,e.currentTime+n*.04,.18,.25)});const s=e.currentTime+i.length*.04+.05;this._playNote(e,t,"sine",1046.5,s,.7,.3),this._playNote(e,t,"sine",1318.5,s,.7,.22),this._playNote(e,t,"sine",1567.98,s,.7,.16),this._playNote(e,t,"sawtooth",110,e.currentTime,.45,.28)}startBGM(e=!1){this.bgmPlaying&&this.stopBGM(),this.bgmBPM=e?145:110,this.bgmPlaying=!0;const t=this.getCtx();this.bgmNextTime=t.currentTime+.1,this.bgmBeatIndex=0,this._scheduleBGM()}stopBGM(){this.bgmPlaying&&(this.bgmPlaying=!1,this.bgmSchedulerTimer!==null&&(clearTimeout(this.bgmSchedulerTimer),this.bgmSchedulerTimer=null))}_scheduleBGM(){if(!this.bgmPlaying||!this.ctx)return;const e=this.ctx,t=this.getBgmGain(),i=.3,s=100;for(;this.bgmNextTime<e.currentTime+i;)this._scheduleBGMBeat(e,t,this.bgmNextTime),this.bgmNextTime+=this.bgmBeat,this.bgmBeatIndex++;this.bgmSchedulerTimer=setTimeout(()=>this._scheduleBGM(),s)}_scheduleBGMBeat(e,t,i){const s=this.bgmBeatIndex,a=this.bgmBPM>120?se.MELODY_FEVER:se.MELODY_NORMAL,n=se.BASS_FREQS,o=Math.floor(s/2)%n.length;s%2===0&&this._scheduleNote(e,t,"sawtooth",n[o],i,this.bgmBeat*1.8,.12);let c=s%8,p=0;for(const[g,y]of a){if(c>=p&&c<p+y){g>0&&this._scheduleNote(e,t,"square",g,i,this.bgmBeat*y*.85,.1);break}p+=y}const f=e.createBuffer(1,Math.floor(e.sampleRate*.03),e.sampleRate),d=f.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=(Math.random()*2-1)*(1-g/d.length);const u=e.createBufferSource();u.buffer=f;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=8e3;const b=e.createGain();b.gain.value=.04,u.connect(m),m.connect(b),b.connect(t),u.start(i)}_playNote(e,t,i,s,a,n,o){const c=e.createOscillator();c.type=i,c.frequency.value=s;const p=e.createGain();p.gain.setValueAtTime(o,a),p.gain.exponentialRampToValueAtTime(.001,a+n),c.connect(p),p.connect(t),c.start(a),c.stop(a+n)}_scheduleNote(e,t,i,s,a,n,o){this._playNote(e,t,i,s,a,n,o)}};r(se,"BASS_FREQS",[110,98,82.41,110]),r(se,"MELODY_NORMAL",[[220,1],[261.63,1],[293.66,1],[329.63,1],[0,.5],[392,.5],[329.63,1],[261.63,2]]),r(se,"MELODY_FEVER",[[392,.5],[523.25,.5],[659.25,.5],[783.99,.5],[659.25,.5],[523.25,.5],[392,.5],[523.25,.5]]);let He=se;const ct="yukimedal_settings",fe={masterVolume:.7,bgmVolume:.8,sfxVolume:1,theme:"royal"},ie=class ie{constructor(){r(this,"_data");this._data=this._load()}static getInstance(){return ie._instance||(ie._instance=new ie),ie._instance}get masterVolume(){return this._data.masterVolume}get bgmVolume(){return this._data.bgmVolume}get sfxVolume(){return this._data.sfxVolume}get theme(){return this._data.theme}get snapshot(){return{...this._data}}setMasterVolume(e){this._data.masterVolume=Math.max(0,Math.min(1,e)),this._save()}setBgmVolume(e){this._data.bgmVolume=Math.max(0,Math.min(1,e)),this._save()}setSfxVolume(e){this._data.sfxVolume=Math.max(0,Math.min(1,e)),this._save()}setTheme(e){this._data.theme=e,this._save()}_load(){try{const e=localStorage.getItem(ct);if(e){const t=JSON.parse(e);return{masterVolume:typeof t.masterVolume=="number"?t.masterVolume:fe.masterVolume,bgmVolume:typeof t.bgmVolume=="number"?t.bgmVolume:fe.bgmVolume,sfxVolume:typeof t.sfxVolume=="number"?t.sfxVolume:fe.sfxVolume,theme:["cyber","steampunk","royal"].includes(t.theme)?t.theme:fe.theme}}}catch{}return{...fe}}_save(){try{localStorage.setItem(ct,JSON.stringify(this._data))}catch{}}};r(ie,"_instance",null);let Be=ie;const ae=class ae{constructor(){r(this,"_currentName","steampunk");r(this,"_currentTheme",ft);r(this,"_callbacks",[]);r(this,"_styleEl",null)}static getInstance(){return ae._instance||(ae._instance=new ae),ae._instance}get currentName(){return this._currentName}get currentTheme(){return this._currentTheme}applyTheme(e){const t=gt[e];if(!t)return;this._styleEl||(this._styleEl=document.getElementById("theme-vars"),this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.id="theme-vars",document.head.appendChild(this._styleEl)));const i=t.ui;this._styleEl.textContent=`:root {
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
}`,this._currentName=e,this._currentTheme=t,this._callbacks.forEach(s=>s(t))}onChange(e){this._callbacks.push(e)}};r(ae,"_instance",null);let Oe=ae;const te=class te{constructor(){r(this,"comboCount",0);r(this,"lastCollectMs",0);r(this,"feverEndMs",0);r(this,"_wasInFever",!1)}onMedalCollected(e){const t=Date.now();t-this.lastCollectMs<te.COMBO_WINDOW_MS?this.comboCount+=e:this.comboCount=e,this.lastCollectMs=t,I.emit("combo:updated",{count:this.comboCount}),this.comboCount>=te.COMBO_TO_FEVER&&!this.isFever&&this._triggerFever()}update(){const e=this.isFever;this._wasInFever&&!e&&(this._wasInFever=!1,this.comboCount=0,I.emit("fever:ended",void 0)),this._wasInFever=e}get isFever(){return Date.now()<this.feverEndMs}get feverRemainingMs(){return Math.max(0,this.feverEndMs-Date.now())}get comboCountValue(){return this.comboCount}reset(){this.comboCount=0,this.lastCollectMs=0,this.feverEndMs=0,this._wasInFever=!1}_triggerFever(){this.feverEndMs=Date.now()+te.FEVER_DURATION_MS,this.comboCount=0,this._wasInFever=!0,I.emit("fever:started",void 0)}};r(te,"COMBO_WINDOW_MS",5e3),r(te,"COMBO_TO_FEVER",6),r(te,"FEVER_DURATION_MS",1e4),r(te,"FEVER_SPEED_MULT",1.6);let _e=te;const Le=new Vt(.04,4,4);class pi{constructor(e){r(this,"particles",[]);r(this,"flashRings",[]);r(this,"scene");this.scene=e}spawnFlashRing(e,t,i,s){const a=new $e(.1,.35,16),n=new ke({color:s,transparent:!0,opacity:.9,side:Ye}),o=new F(a,n);o.position.set(e,t,i),o.rotation.x=-Math.PI/2,this.scene.add(o),this.flashRings.push({mesh:o,life:0,maxLife:.25})}spawnMedalCollect(e,t,i){this.spawnFlashRing(e,t,i,16766720);const s=12;for(let a=0;a<s;a++){const n=new Me({color:16766720,flatShading:!0,transparent:!0}),o=new F(Le,n);o.position.set(e,t,i);const c=a/s*Math.PI*2,p=1.5+Math.random()*3,f=new X(Math.cos(c)*p*.5,2+Math.random()*3,Math.sin(c)*p*.5);this.scene.add(o),this.particles.push({mesh:o,velocity:f,life:0,maxLife:.6+Math.random()*.4})}}spawnItemCollect(e,t,i,s){this.spawnFlashRing(e,t,i,s);const a=20;for(let n=0;n<a;n++){const o=new Me({color:s,flatShading:!0,transparent:!0,emissive:s,emissiveIntensity:.8}),c=new F(Le,o);c.position.set(e,t,i);const p=n/a*Math.PI*2,f=2+Math.random()*2.5,d=new X(Math.cos(p)*f,3+Math.random()*2,Math.sin(p)*f);this.scene.add(c),this.particles.push({mesh:c,velocity:d,life:0,maxLife:1.2+Math.random()*.4})}}spawnJackpot(e,t,i){this.spawnFlashRing(e,t,i,16766720);const s=new $e(.3,.8,32),a=new ke({color:16777215,transparent:!0,opacity:.85,side:Ye}),n=new F(s,a);n.position.set(e,t,i),n.rotation.x=-Math.PI/2,this.scene.add(n),this.flashRings.push({mesh:n,life:0,maxLife:.4});const o=30;for(let c=0;c<o;c++){const p=c/o*360,f=new de(`hsl(${p}, 100%, 60%)`),d=new Me({color:f,flatShading:!0,transparent:!0,emissive:f,emissiveIntensity:.8}),u=new F(Le,d);u.position.set(e,t,i);const m=c/o*Math.PI*2+Math.random()*.3,b=3.5+Math.random()*4.5,g=new X(Math.cos(m)*b,4+Math.random()*5,Math.sin(m)*b);this.scene.add(u),this.particles.push({mesh:u,velocity:g,life:0,maxLife:1.6+Math.random()*.6})}}update(e){const i=[];for(const a of this.particles){a.life+=e;const n=a.life/a.maxLife;a.velocity.y+=-9.8*e,a.mesh.position.addScaledVector(a.velocity,e),a.mesh.rotation.x+=e*5,a.mesh.rotation.z+=e*3,a.mesh.material.opacity=1-n,n>=1&&i.push(a)}for(const a of i)this.scene.remove(a.mesh),a.mesh.material.dispose(),this.particles.splice(this.particles.indexOf(a),1);const s=[];for(const a of this.flashRings){a.life+=e;const n=a.life/a.maxLife,o=1+n*2;a.mesh.scale.set(o,o,o),a.mesh.material.opacity=.9*(1-n),n>=1&&s.push(a)}for(const a of s)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.flashRings.splice(this.flashRings.indexOf(a),1)}clear(){for(const e of this.particles)this.scene.remove(e.mesh),e.mesh.material.dispose();this.particles=[];for(const e of this.flashRings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.flashRings=[]}}class ui{constructor(){r(this,"counter",0);r(this,"jackpotCount",0)}onQuotaAdded(e){this.counter+=e,I.emit("jackpot:progress",{current:this.counter,target:h.JACKPOT_THRESHOLD}),this.counter>=h.JACKPOT_THRESHOLD&&(this.counter-=h.JACKPOT_THRESHOLD,this.jackpotCount++,I.emit("jackpot:triggered",{count:this.jackpotCount}))}reset(){this.counter=0,this.jackpotCount=0}get progress(){return Math.min(1,this.counter/h.JACKPOT_THRESHOLD)}get current(){return this.counter}get target(){return h.JACKPOT_THRESHOLD}}async function mi(){const l=Be.getInstance(),e=Oe.getInstance();e.applyTheme(l.theme);const t=new qt,i=new Qt,s=new Zt,a=new Bs,n=new Os,o=document.getElementById("app"),c=document.getElementById("ui-root"),p=new os(o),f=new ls,d=new cs(p),u=new hs(p.scene);p.setCamera(f.camera);const m=e.currentTheme;p.applySceneTheme(m.scene),d.applyTheme(m.lights),u.applyTheme(m.scene);const b=new Ls,g=new ks(t),y=new Hs,S=new Gs,M=new Ns,v=new Fs,T=new Ps(p,b,y,m.scene);T.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier);const E=new li(c),H=new di(p.renderer.domElement);E.titleScreen.applyTheme(l.theme);const L=new _e,G=new pi(p.scene),J=new ui,P=new He;P.setMasterVolume(l.masterVolume),P.setBgmVolume(l.bgmVolume),P.setSfxVolume(l.sfxVolume),e.onChange(x=>{p.applySceneTheme(x.scene),d.applyTheme(x.lights),u.applyTheme(x.scene),E.titleScreen.applyTheme(x.name),T.physicsWorld.initialized&&T.rebuildFieldMesh(x.scene)}),E.titleScreen.onSettings(()=>{E.settingsScreen.show(l.snapshot)}),E.settingsScreen.onClose(()=>{E.settingsScreen.hide()}),E.settingsScreen.onVolumeChange((x,C)=>{x==="master"?(l.setMasterVolume(C),P.setMasterVolume(C)):x==="bgm"?(l.setBgmVolume(C),P.setBgmVolume(C)):(l.setSfxVolume(C),P.setSfxVolume(C))}),E.settingsScreen.onThemeChange(x=>{l.setTheme(x),e.applyTheme(x)});let Q=0,$=!1,U=0,Y=0,ee=0;E.titleScreen.onStart(()=>{ye()}),E.stageResultScreen.onContinue(()=>{E.stageResultScreen.hide(),g.advanceStage(),ne()}),E.stageResultScreen.onSkip(()=>{E.stageResultScreen.hide(),g.advancePhase(),be()}),E.shopScreen.onBuyMedals(x=>{const C=x*h.MEDAL_BUY_PRICE;v.buyMedals(x)?E.shopScreen.show(v.money,y.getAll(),v.getOwnedActiveItems()):console.log(`Not enough shop money (need ${C} G, have ${v.money} G)`)}),E.shopScreen.onSell(x=>{const C=v.sellItem(x,y);a.addShopMoney(C),E.shopScreen.show(v.money,y.getAll(),v.getOwnedActiveItems())}),E.shopScreen.onBuyActive(x=>{v.buyActiveItem(x)&&E.shopScreen.show(v.money,y.getAll(),v.getOwnedActiveItems())}),E.shopScreen.onContinue(()=>{E.shopScreen.hide(),xe()}),E.skillSelectScreen.onSelect(x=>{S.addSkill(x,g.currentPhase),v.setSellMultiplier(S.itemSellMultiplier),E.skillSelectScreen.hide(),t.transition(w.STAGE_START),ne()}),E.resultScreen.onRetry(()=>{E.resultScreen.hide(),t.transition(w.TITLE),E.titleScreen.show()}),E.gameScreen.onUseActive(x=>{if(!t.is(w.PLAYING)||!v.useActiveItem(x))return;const C=et(x);if(!C)return;const N=Date.now()+C.durationMs;if(x==="side_guard")ee=N,T.addSideGuardWalls(),T.fieldMesh.addSideGuardMeshes(T.fieldMesh.group);else if(x==="medal_fever")Y=N;else if(x==="medal_shower"){for(let j=0;j<20;j++)setTimeout(()=>{if(!t.is(w.PLAYING))return;const z=(Math.random()*2-1)*(h.FIELD_WIDTH/2-.5),V=(Math.random()-.5)*(h.FIELD_DEPTH/2);T.medalSpawner.spawn(z,5,V,T.physicsWorld,T.physicsSync,T.collisionHandler,p)},j*150);f.shake(.12,.3)}}),H.onThrow((x,C)=>{if(!t.is(w.PLAYING))return;const N=x*(h.FIELD_WIDTH/2+.5),j=S.medalThrowCount;let z=0;for(let V=0;V<j&&v.spendMedal();V++){const Ie=(V-Math.floor(j/2))*.6;T.throwMedal(N+Ie,C),z++}z>0&&I.emit("medal:thrown",{count:z})}),I.on("quota:reached",()=>{t.is(w.PLAYING)&&(H.disable(),setTimeout(()=>{const x=S.onClearBonusMedals;x>0&&v.addMedals(x),g.clearCurrentStage(),E.chanceScreen.show(C=>{C.medals>0&&(v.addMedals(C.medals),E.gameScreen.showFloatingText(`+${C.medals}`,"var(--t-primary)"));const N=g.isLastStageOfPhase;E.stageResultScreen.show(g.currentPhase,g.currentStage,N,b.currentValue,b.targetValue)})},500))}),I.on("medal:collected",({count:x})=>{t.is(w.PLAYING)&&(E.gameScreen.showFloatingText(`+${x}`,x>=2?"var(--t-secondary)":"var(--t-primary)"),v.addMedals(x),L.onMedalCollected(x),J.onQuotaAdded(x))}),I.on("jackpot:progress",({current:x,target:C})=>{t.is(w.PLAYING)&&E.gameScreen.updateJackpot(x,C)}),I.on("jackpot:triggered",()=>{if(!t.is(w.PLAYING))return;v.addMedals(h.JACKPOT_MEDAL_REWARD),E.gameScreen.showFloatingText(`JACKPOT! +${h.JACKPOT_MEDAL_REWARD}`,"var(--t-primary)"),P.playJackpotFanfare(),f.shake(.35,.6),G.spawnJackpot(0,2,-2),E.gameScreen.resetJackpot(h.JACKPOT_THRESHOLD)}),I.on("fever:started",()=>{T.pusher.speedMultiplier=_e.FEVER_SPEED_MULT,E.gameScreen.showFever(1e4),P.playFeverStart(),P.startBGM(!0),f.shake(.2,.4);for(let x=0;x<12;x++)setTimeout(()=>{if(!t.is(w.PLAYING))return;const C=(Math.random()*2-1)*(h.FIELD_WIDTH/2-.5),N=(Math.random()*2-1)*(h.FIELD_DEPTH/4);T.medalSpawner.spawn(C,4.5,N,T.physicsWorld,T.physicsSync,T.collisionHandler,p)},x*250)}),I.on("fever:ended",()=>{T.pusher.speedMultiplier=1,E.gameScreen.hideFever(),E.gameScreen.hideCombo(),P.playFeverEnd(),P.startBGM(!1)}),I.on("combo:updated",({count:x})=>{t.is(w.PLAYING)&&x>=2&&(E.gameScreen.showCombo(x),P.playCombo(x))}),I.on("medal:thrown",()=>P.playThrow()),I.on("medal:collected",()=>P.playMedalCollected()),I.on("quota:reached",()=>P.playQuotaReached()),I.on("stage:cleared",()=>P.playStageCleared()),I.on("game:over",()=>P.playGameOver()),I.on("skill:selected",()=>P.playSkillSelected()),I.on("medal:collected",()=>f.shake(.04,.08)),I.on("quota:reached",()=>f.shake(.15,.3)),I.on("stage:cleared",()=>f.shake(.28,.5)),I.on("game:over",()=>f.shake(.5,.8)),I.on("state:changed",({to:x})=>{x===w.PLAYING?P.startBGM(!1):P.stopBGM()}),i.addUpdateFn(x=>{if(t.is(w.PLAYING)){const C=Date.now();ee>0&&C>ee&&(ee=0,T.removeSideGuardWalls(),T.fieldMesh.removeSideGuardMeshes(T.fieldMesh.group)),Y>0&&C>Y&&(Y=0);const N=Y>Date.now()?2:1;T.setMedalQuotaMultiplierFn(()=>S.quotaPerMedalMultiplier*N),T.update(x);const j=v.getOwnedActiveItems().map(z=>{const V=et(z.id),Ie=z.id==="side_guard"?Math.max(0,ee-Date.now()):z.id==="medal_fever"?Math.max(0,Y-Date.now()):0;return{...z,name:V.name,color:V.color,remainingMs:Ie}});if(E.updateGameHUD(v.currentMedals,b.currentValue,b.targetValue,g.currentPhase,g.currentStage,y.getAll(),j),!$&&v.currentMedals<=0&&!b.isReached&&($=!0,U=10,H.disable()),$&&U>0){const z=Math.ceil(U);U-=x;const V=Math.ceil(U);V!==z&&V>0&&P.playCountdownTick(),U>0?E.gameScreen.showCountdown(U):(E.gameScreen.hideCountdown(),Ee())}}L.update(),G.update(x),u.update(x),f.update(x),p.render(f.camera)});function ye(){s.incrementRuns(),v.reset(),y.clear(),S.reset(),a.reset(),g.reset(),Q=0,$=!1,U=0,Y=0,ee=0,L.reset(),J.reset(),T.pusher.speedMultiplier=1,t.transition(w.STAGE_START),ne()}async function ne(){const x=g.currentPhase,C=g.currentStage;$=!1,U=0,E.gameScreen.hideCountdown(),L.reset(),J.reset(),T.pusher.speedMultiplier=1,E.gameScreen.hideFever(),E.gameScreen.hideCombo(),E.gameScreen.resetJackpot(h.JACKPOT_THRESHOLD),b.startStage(x,C);try{T.physicsWorld.initialized?T.endStage():(oe(!0),await T.init(),oe(!1))}catch(N){console.error("Field init failed:",N),oe(!1);return}T.startStage(x,C),g.startCurrentStage(),H.enable()}function be(){T.endStage(),t.transition(w.SHOP),E.shopScreen.show(v.money,y.getAll(),v.getOwnedActiveItems())}function xe(){t.transition(w.SKILL_SELECT);const x=M.pickChoices(h.SKILL_CHOICES,S.getOwnedSkills(),Date.now());E.skillSelectScreen.show(x)}function Ee(){if(Q>0){Q--,U=0,E.gameScreen.hideCountdown(),H.enable(),$=!1;return}T.endStage();const x=n.calculate(a.snapshot,s);s.updateBest(x.phase,x.stage),t.transition(w.GAME_OVER),t.transition(w.RESULT),E.resultScreen.show(x)}const re=document.createElement("div");re.style.cssText=`
    position: absolute; inset: 0; display: none;
    align-items: center; justify-content: center;
    background: var(--t-bg-overlay-dark); color: var(--t-primary);
    font-size: 1.2rem; letter-spacing: 0.2em;
  `,re.textContent="LOADING...",c.appendChild(re);function oe(x){re.style.display=x?"flex":"none"}I.on("skill:selected",()=>{Q=Math.max(Q,S.gameOverShields)}),i.start(),t.transition(w.TITLE),E.titleScreen.show(),console.log("YukiMedal initialized")}mi().catch(console.error);
