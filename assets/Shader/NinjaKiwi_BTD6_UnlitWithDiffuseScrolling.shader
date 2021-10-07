//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/UnlitWithDiffuseScrolling" {
Properties {
_MainTex ("Diffuse", 2D) = "white" { }
}
SubShader {
 Pass {
  GpuProgramID 43479
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