
import React from 'react';

export const COLORS = {
  primary: '#C76B1C',
  primaryHover: '#A95512',
  background: '#F5F1EB',
  backgroundDark: '#121212',
  surface: '#FFFFFF',
  surfaceDark: '#1E1E1E',
  secondarySurface: '#EBE7E1',
  textPrimary: '#1C1C1C',
  textMuted: '#6B6B6B',
  border: '#E2D8CC',
  accentGreen: '#E8F0E5',
  accentBrown: '#3D2B1F',
};

export const IMAGES = {
  // Priyank's real photo
  priyank: '/Images/621153402_17939229756110187_6110222625327738115_n.jpg',
  priyankConsultation: '/Images/621153402_17939229756110187_6110222625327738115_n.jpg',
  priyankTeaching: '/Images/621153402_17939229756110187_6110222625327738115_n.jpg',
  dashboardPreview: '/Images/Gemini_Generated_Image_4ese0r4ese0r4ese (1).webp',
  // Client avatars for consultation page
  clientAvatar1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJaC3R_CCYT7rSIS5kC38vDtCvABZGaCE2yCCn7wi7QlE77Wkq2ZWMyBIBvqi-kJ72KR_4fISNfhNSkSi7OIJlZlaWTk4CgvEyAf7jbuLUXjAD5mQXgPmoVjyBPfhEnfsJ1PjICLW4C_KRTh3MsTsQCz5jTub_Lk6V7TGN9ukTH3Bw65GdcRTHgKVIGyNN6knSUcu1zXXBr0fcJIMqwW5h6r14dFsUFziIs_2290iM4YOw5i8cgh3mTFdwzOCL7zsMzKbZueDJ-po',
  clientAvatar2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDo4LpuWz71s-tRsGbGgIVlcVMvA4tMNEzvM2n-0ldXXotI8wojfUe_iXrZp1hLTHEBC14zijXAsaJINEZESwcwYnFMSqOIJB4OBuR_pGKWFCMGE-3gOFqtDKSm0SumJmiJpGh6d-SL_2pbzluSBdDKIBH7ijVJDclvAfnnObE4LRtMtPqWqwMlRSJA-_R-WossmvkzzmO4S8aJp7mjlGR8_KREiFmBRHGAsPcV7IeZ2rVYs0Ao1vn8kz78yL_wOga8LEbWHCR7Tg',
  clientAvatar3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhX03s5XY5ri2yhLP1WNFdqYAnFzAUjBfcMNLcFqtMFVRgaSZLp0N-oslEGINSroSzbaSneJezLsf-CEhOEdyHHrxV3I9hKmRSgWBJaw1k8ERBuqKdp30UX66aeSn7OEwASxFiCXUPdJ4NC8Esdp1kx4SqgQxwKAguHdRF9Pb_VWH-aDv85CIl3HrNvLZtI6j8hjlX2yeo4ocpZEp2jpB0_P2XF2Ax1ljNI4xF2ip--Q25Uk89XgcAgYI2zXBKP1vLvl8FPunPRjI',
};

// Trusted-by logo image URLs from Stitch
export const LOGO_IMAGES = {
  zapier: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgmmQLvbcqTsBRBCE2dp0OvurdwxGok5HHN3U9aCep-2RwJJJ3NjeayBzq7pJymYRKtOCkkgtucay-9wEdPDYdFmlfqhg_mkAIHUzsDLDXnEmfXHWy-OnEZSjB0_9NNtUEOR7Vh3T1C0yc1Fgh0J2d3lQ6BDLiEMa4kmGdmS366tx14oIT64YNaz6IT6IT1SpL3nd652F4bl4YoEyok_gapSajhPsWgbBHmI00JibIzMAjK6rnjP91fkBCGANfkee4KS4wtvIrl98',
  linkedin: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnP6o34GIxcMLLEcOmoQAQtLpXv9NBHPxb60dxZIk0iTK68FdGryRbNnaa9YFydO54j5vzmEUOxqpUGN5zz-wCuVXDYYEVp7ho-QGLFnCpBTf9VnijCg-U5kSQf5ndol80GtuOo0NmBWzoI8zI_V1SpXaq4ubDUdoXC1NgNhYel-hc4iwnvrq3b4R31rU8CQEQOjTiPeDcih2-ALO6cLAL32vdXYccFYoao69xn9FiZ-Eocuv5An1rfvrCOkkMxq6I9egY1ZsTIE',
  notion: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNrLDADnFaCNCQ9-ssrDoH5ApNFqOyEvzK3_SSfJpecsJsl0IArfE4SKmKN8UcY3s7YDkIJK_DOrg5SRE7Uwy5x6bsF4r8fIN82AEW03esNkkahrAn2N4y4WW2XJNfesPs6aVkWH129Vks4FZFV9_7Sfg9EZG2oRX6HicOQnyIZOOwQ5fCAScaGK3p5hl_JwOiI-cCW7iiWFnX5s8k3vLEXUehOWIhYmzjNsnFhIYDTmBMh9OuVJ4xWuEgmSayYHVFg1JMOLE5Pck',
  github: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1TYOab1iFhR1EdrUlms3ROBegdYnC5JfQQGHyfS-zV4uFsPNDoelS0dWwvC-EOKgzmdcFxBKuzhqBexcdpFso8Q8Wl5ZCezaAfYNV0fsz2ju4TPq7_3tBFwJ2AcqwrMUDDQPHmhraQFc7sVjYej7DJ_xapEyF-AfNPWgdJk6RYpIjmYbYKhrjy86L5V2QYg2Kn_kDe9Voj1aO85ICSnhbFB30UXOe2aVKqp4DGnRXtdzbsYDRkvElsn7PJ68N4BxV0MwJz7U_DrQ',
  airtable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUHolDAGkJMuAmdH_rutVj5H8nJ7mCnRbzGfedFn9bN7cs_ATpknYqkpYm6kdL7Rc8_811-PBwKTzRD-pXqu93n72KQoLYHtFM_I5CRF20iGyhG3yxm1eUNKYq5hxQ49NttEslH3Fl-UoLpH3MU7g4kMlFVU1U5suXi8eQuo4Lksqpbjya2QdltyyhwK1Gmf_a7of__zQJOXE62H7CKJ1uxbTiQUClIs2be8FaxFZSoNaOqDlYsdDfxD06X-lXBEcYLHyhY8fGX5c',
};

// Floating tool icon images for Academy section
export const TOOL_ICONS = {
  zapier: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt4QCq_YthvCYeklO4cAmNzQZyJMkysXLsBI-vTJSXkuk-Fuay6jnmlbRwzHc0SYsdmXMDegj8BWl6pRBdej8VejSuQAb4zNibGvDuV0nNGtSwDiGumAke4GpVB9eFkGNtVh5VytHM5LsinS1YA5ci6gSp2khoJmVmoYXUYoccbpOlK_y3KouBdjiwN4G-F88Ge3F0n0-nmPfbvIcLnt3QO6g0feoBcm1LAAt626CvpUdAeCxXNd1ttO-FgbCMe3cWnsnQl-iMZBk',
  notion: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_ER0MMDhWZINCaXQT-ak71OuYC96DkkX9_Bq-MthAzyDWPfqWofL1r03i4DyphWGY_KX-Wq36E-x_xqpJGU5FKKycJfR4HSRysnP9Tenk9RoUbK_MhUWOrTkiE0TDWdRo9sc9u2grsj0tou40EAEdfpioLwrG_P40_Y83cLo-F39pGacP_dUW1lz6fdlCMHLrKoFAmyOr07US2wuvUnFyiJQJZpFy48m6PxVQyCQqeRJQ52VwfTp_k-VD9D5sPttpnMidKJQQzY',
  airtable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHg4Avacymr08zMozsE0-b11ZK172KU-jYclyRdZJ5FAK9igrb9n0m33YAg47K2hZP-X6Abttl4X5QxneqLn05Agf17otb2pOj2mCm5E5UmN6Y-4B08F4Xt-DsdluvhaUijT08nyL5t3BRY5D1pbMI2gi7nRNireIazV9rqxhD8niCe4-7fKbCgsFZJX7-Bpu1JHH8kcds6fJv9KMndJVTNe_JQVSY7syYhk545XzHuSzYTXgrLqnk-6gqBGD2TsfmvmUN7zArWUw',
};

export const LOGOS = ['Zapier', 'LinkedIn', 'Notion', 'GitHub', 'Airtable'];
