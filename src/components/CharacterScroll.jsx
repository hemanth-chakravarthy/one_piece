import React from "react";

const characters1 = [
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/baochan.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvYmFvY2hhbi5qcGVnIiwiaWF0IjoxNzYwNTQwMDAyLCJleHAiOjIzOTEyNjAwMDJ9.lujqY9q9mhT1mazZoA5LNnTeQ5b04h_F5zPx8gczFsk",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/sabo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2Uvc2Fiby5qcGVnIiwiaWF0IjoxNzYwNTM5OTQxLCJleHAiOjIzOTEyNTk5NDF9.FwT7bydmDwiRd36ohXXFswdZwAaDFDzuY-VpxqR-Bmc",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/ace.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvYWNlLmpwZWciLCJpYXQiOjE3NjA1Mzk4ODAsImV4cCI6MjM5MTI1OTg4MH0.BWF5DC4FKrVq7JWlzd9heKnPq5LrdxVmfDuPOcTcE0M",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/nika.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvbmlrYS5qcGVnIiwiaWF0IjoxNzYwNTM5ODEyLCJleHAiOjIzOTEyNTk4MTJ9.xWcs3zpDWZeSzazOv_kLB85fvY--jTGGs7Cych7E1tE",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/zoro.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2Uvem9yby5qcGVnIiwiaWF0IjoxNzYwNTM5NjU0LCJleHAiOjIzOTEyNTk2NTR9.BVTQKclqQRp8f7qlSnILlRE2canZmOgTMzz7yMQPeQ4",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/chopper.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvY2hvcHBlci5qcGVnIiwiaWF0IjoxNzYwNTM5MzI2LCJleHAiOjIzOTEyNTkzMjZ9.E3Am4ZhNkaKufXBbUNPD0fgTjqHYLYm0Btq1gzBVIac",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/jimbei%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvamltYmVpICgxKS5qcGVnIiwiaWF0IjoxNzYwNTM5NTU4LCJleHAiOjIzOTEyNTk1NTh9.vCDMTBKAD_ugzWNHAqKsGY1eKB0RBYo-k0WgHR0Vj8U",
];

const characters2 = [
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/brook.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvYnJvb2suanBlZyIsImlhdCI6MTc2MDUzOTI4MiwiZXhwIjoyMzkxMjU5MjgyfQ.TUhi7Mio05QzbGA4zKD8puWAd4ga8NqvkjJiTH-fNl0",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/franky.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvZnJhbmt5LmpwZWciLCJpYXQiOjE3NjA1MzkzNTUsImV4cCI6MjM5MTI1OTM1NX0.dZWjWAMYlFSpyQCPYuKLRTjzT9vkbMAEznRPg4tYuro",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/luffy.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvbHVmZnkuanBlZyIsImlhdCI6MTc2MDUzOTQxMywiZXhwIjoyMzkxMjU5NDEzfQ.QD2zCmxqEQaMXSnQoZXZqGyBo1nnTbYnqb6hzgRyu30",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/nami.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvbmFtaS5qcGVnIiwiaWF0IjoxNzYwNTM5NDg5LCJleHAiOjIzOTEyNTk0ODl9.CDDroGHlQXW0MKp9UEJYnjfNL3GDafoYyz16Mu2A07I",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/robin.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2Uvcm9iaW4uanBlZyIsImlhdCI6MTc2MDUzOTUwNCwiZXhwIjoyMzkxMjU5NTA0fQ.p4DfIdfB6btVgonvmO1fcrV09AKvmkFrxIBwBHdSkrE",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/sanji.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2Uvc2FuamkuanBlZyIsImlhdCI6MTc2MDUzOTYxOCwiZXhwIjoyMzkxMjU5NjE4fQ.o37HWB4aAmAabwzqj3RX0GGKiG1_xH_fIAXXk9ROliI",
  "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/one%20piece/usopp.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUgcGllY2UvdXNvcHAuanBlZyIsImlhdCI6MTc2MDUzOTYzNywiZXhwIjoyMzkxMjU5NjM3fQ.ZtM2cdlUQ5hhj5eZuR-vy5TuKIED8TfJ2_oAlgXam0E",
];

export default function CharacterScroll() {
  return (
    <div id="scroll">
      <div id="container">
        {characters1.map((url, i) => (
          <img key={i} src={url} alt="character" />
        ))}
      </div>
      <div id="container">
        {characters2.map((url, i) => (
          <img key={i} src={url} alt="character" />
        ))}
      </div>
    </div>
  );
}
