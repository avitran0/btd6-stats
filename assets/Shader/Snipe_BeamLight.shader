//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "Snipe/BeamLight" {
Properties {
_Color1 ("Color1", Color) = (0.9150943,0.5309622,0.09927912,0)
_Color1Power ("Color1Power", Range(0, 8.5)) = 3.62
_Color2 ("Color2", Color) = (1,0.02042086,0,0)
_BeamPower ("BeamPower", Range(0, 5)) = 3.8
_Speed ("Speed", Vector) = (0,-4,0,0)
_BeamNoiseY ("BeamNoiseY", Range(0, 0.01)) = 0.0668
_BeamNoiseX ("BeamNoiseX", Range(0, 0.1)) = 0.0668
_MainTex ("_MainTex", 2D) = "white" { }
_sinSpeed ("sinSpeed", Float) = 14
_EdgeClip ("EdgeClip", Range(0, 0.2)) = 0.0853
}
SubShader {
 LOD 100
 Tags { "QUEUE" = "Transparent" "RenderType" = "Transparent" }
 Pass {
  Name "Unlit"
  LOD 100
  Tags { "LIGHTMODE" = "FORWARDBASE" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ZWrite Off
  GpuProgramID 46466
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