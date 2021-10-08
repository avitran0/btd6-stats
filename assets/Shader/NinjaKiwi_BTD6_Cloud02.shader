//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Cloud02" {
Properties {
_ScrollSpeed ("ScrollSpeed", Float) = 1
_NoiseScale ("NoiseScale", Float) = 0.1
_NoiseScale1 ("NoiseScale1", Float) = 1
_NoiseScale2 ("NoiseScale2", Float) = 0.5
_Color0 ("Color 0", Color) = (0,0,0,0)
_Color1 ("Color 1", Color) = (1,1,1,0)
_CloudBrightness ("CloudBrightness", Float) = 30
_CloudNoise ("CloudNoise", 2D) = "white" { }
_Cut ("Cut", Range(0, 1)) = 0.04
_StepMax ("StepMax", Range(0.7, 1)) = 0
_StepOffset ("StepOffset", Range(0, 1)) = 0
_Noise06 ("Noise06", 2D) = "white" { }
}
SubShader {
 LOD 100
 Tags { "QUEUE" = "Transparent" "RenderType" = "Transparent" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  GpuProgramID 50564
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
Fallback "Mobile/Unlit"
}