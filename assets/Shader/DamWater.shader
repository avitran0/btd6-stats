//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "DamWater" {
Properties {
_WaterDepth ("WaterDepth", Color) = (0.0509804,0.6313726,0.372549,1)
_WaterDark ("WaterDark", Color) = (0.02352941,0.2235294,0.3686275,1)
_WaterLight ("WaterLight", Color) = (0.3848789,0.8038303,0.8773585,0)
_HightLight ("HightLight", Float) = 0
_OverAllColor ("OverAllColor", Color) = (0.3848789,0.8038303,0.8773585,0)
_DamWaterTex ("DamWaterTex", 2D) = "white" { }
_NoiseScale ("NoiseScale", Vector) = (0,0,0,0)
_NoiseContrast ("NoiseContrast", Range(0, 1)) = 0
_NoiseBrightness ("NoiseBrightness", Range(0, 6)) = 0
_SparkScale ("SparkScale", Float) = 0
_SparkContrast ("SparkContrast", Range(0, 1)) = 0
_SparkBrightness ("SparkBrightness", Range(0, 6)) = 0
_CausticScale ("CausticScale", Range(0, 30)) = 0
_CausticSpeed ("CausticSpeed", Vector) = (0.01,0.025,0,0)
_CausticIntensity ("CausticIntensity", Range(0, 0.5)) = 0.03
[Toggle] _VertexAnimation ("VertexAnimation", Float) = 1
_VertexIntensity ("VertexIntensity", Float) = 0
_texcoord ("", 2D) = "white" { }
__dirty ("", Float) = 1
}
SubShader {
 Tags { "IGNOREPROJECTOR" = "true" "IsEmissive" = "true" "QUEUE" = "Geometry+0" "RenderType" = "Opaque" }
 Pass {
  Name "FORWARD"
  Tags { "IGNOREPROJECTOR" = "true" "IsEmissive" = "true" "LIGHTMODE" = "FORWARDBASE" "QUEUE" = "Geometry+0" "RenderType" = "Opaque" "SHADOWSUPPORT" = "true" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  GpuProgramID 13175
Program "vp" {
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "SHADOWS_SCREEN" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" "SHADOWS_SCREEN" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "SHADOWS_SCREEN" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" "SHADOWS_SCREEN" }
"// shader disassembly not supported on DXBC"
}
}
}
 Pass {
  Name "ShadowCaster"
  Tags { "IGNOREPROJECTOR" = "true" "IsEmissive" = "true" "LIGHTMODE" = "SHADOWCASTER" "QUEUE" = "Geometry+0" "RenderType" = "Opaque" "SHADOWSUPPORT" = "true" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  GpuProgramID 84193
Program "vp" {
SubProgram "d3d11 " {
Keywords { "SHADOWS_DEPTH" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SHADOWS_CUBE" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
Keywords { "SHADOWS_DEPTH" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SHADOWS_CUBE" }
"// shader disassembly not supported on DXBC"
}
}
}
}
Fallback "Diffuse"
}