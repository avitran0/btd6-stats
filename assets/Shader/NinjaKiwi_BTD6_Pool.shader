//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Pool" {
Properties {
_DepthLight ("DepthLight", Color) = (0.325,0.807,0.971,0.725)
_DepthDark ("DepthDark", Color) = (0.086,0.407,1,0.749)
_DepthMaxDist ("DepthMaxDist", Float) = 1
_NoiseTex ("NoiseTex", 2D) = "white" { }
_NoiseCutoff ("NoiseCutoff", Range(0, 1)) = 0.5
_NoiseScroll ("NoiseScroll", Vector) = (0.03,0.03,0,0)
_FoamDist ("FoamDist", Float) = 0.4
_FoamColor ("FoamColor", Color) = (1,1,1,1)
_DistortionTex ("DistortionTex", 2D) = "white" { }
_DistortionAmount ("DistortionAmount", Range(0, 1)) = 0.3
_DepthContrast ("DepthContrast", Float) = 5
_DepthRange ("DepthRange", Float) = 10
_Tint ("Tint", Color) = (1,1,1,0)
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  LOD 100
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 53492
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
}
}
}