//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/UnlitWithDiffuse" {
Properties {
_MainTex ("Diffuse", 2D) = "white" { }
_Color ("Tint", Color) = (1,1,1,1)
}
SubShader {
 Pass {
  Name "DEFAULT"
  GpuProgramID 39103
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