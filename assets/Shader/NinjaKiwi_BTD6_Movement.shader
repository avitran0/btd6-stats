//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Movement" {
Properties {
_TextureSample0 ("Texture Sample 0", 2D) = "white" { }
_MoveSpeed ("MoveSpeed", Float) = 1
_WPOMoveSpeed ("WPOMoveSpeed", Float) = 1
_UpIntensity ("UpIntensity", Float) = 15
_Noise ("Noise", 2D) = "white" { }
_WPOScale ("WPOScale", Float) = 0.1
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "LIGHTMODE" = "FORWARDBASE" "RenderType" = "Opaque" }
  GpuProgramID 17637
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
CustomEditor "ASEMaterialInspector"
}