//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Outline" {
Properties {
_OutlineColor ("Outline Color", Color) = (0,0,0,1)
_MainTex ("Base (RGB)", 2D) = "white" { }
}
SubShader {
 Pass {
  Name "OUTLINE"
  Stencil {
   Ref 1
   Comp GEqual
   Pass Keep
   Fail Keep
   ZFail Keep
  }
  GpuProgramID 31165
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "BAKED_MESHES" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "BAKED_MESHES" }
"// shader disassembly not supported on DXBC"
}
}
}
 Pass {
  Name "OUTLINECLEAR"
  Stencil {
   Comp Never
   Pass Keep
   Fail Replace
   ZFail Keep
  }
  GpuProgramID 68045
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
Fallback "Mobile/Diffuse"
}