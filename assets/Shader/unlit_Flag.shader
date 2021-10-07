//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "unlit/Flag" {
Properties {
_MainTex ("Texture", 2D) = "white" { }
_Frequency ("Frequency", Float) = 1
_Amplitude ("Amplitude", Float) = 1
_Speed ("Speed", Float) = 1
_Stiffness ("Stiffness", Float) = 1
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  LOD 100
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 36246
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