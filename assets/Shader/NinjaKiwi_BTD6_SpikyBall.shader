//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/SpikyBall" {
Properties {
_OutlineColor ("Outline Color", Color) = (0,0,0,1)
_InnerColor ("Inner Color", Color) = (0,0,0,1)
_InnerIntensity ("InnerIntensity", Range(0, 5)) = 2
_OuterColor ("Outer Color", Color) = (0,0,0,1)
_MainTex ("Base (RGB)", 2D) = "white" { }
}
SubShader {
 Tags { "QUEUE" = "Geometry" "RenderType" = "Outline" }
 Pass {
  Tags { "QUEUE" = "Geometry" "RenderType" = "Outline" }
  Stencil {
   Ref 2
   Comp Always
   Pass Replace
   Fail Keep
   ZFail Keep
  }
  GpuProgramID 24359
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
 UsePass "NinjaKiwi/BTD6/Outline/OUTLINE"
}
}