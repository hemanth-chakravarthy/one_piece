import React from "react";

const crew = [
  {
    id: "01",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/luffy.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvbHVmZnkuanBlZyIsImlhdCI6MTc2MDU0MTIwMSwiZXhwIjoyMzkxMjYxMjAxfQ.qgGiEMUMCC_HU_hc5Rz4LCTJgG5TBspZ_7pfC8EutbU",
    name: "Monkey D. Luffy",
    role: "Captain – The man aiming to be King of the Pirates",
    quoteJP: "Ore wa kaizoku-ou ni naru otoko da!",
    quoteEN: "I'm the man who will become the Pirate King!",
  },
  {
    id: "02",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/zoro.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2Uvem9yby5qcGVnIiwiaWF0IjoxNzYwNTQxMjgwLCJleHAiOjIzOTEyNjEyODB9.DK7YJD6nuuacpndsrMBpWTQmmpXgVbbEcc8TPk1lHdo",
    name: "Roronoa Zoro",
    role: "Swordsman – The right hand of Luffy",
    quoteJP: "Ore wa nido to makenē kara!",
    quoteEN: "I will never lose again!",
  },
  {
    id: "03",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/nami.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvbmFtaS5qcGVnIiwiaWF0IjoxNzYwNTQxMjE2LCJleHAiOjIzOTEyNjEyMTZ9.g1jtqsHx-PJgZ8u7lX7B5dY7hg5NzPNAxVYKIdxzylw",
    name: "Nami",
    role: "Navigator – The cat burglar and weather expert",
     quoteJP: "Tasukete…!",
    quoteEN: "Help me...!",
  },
  {
    id: "04",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/ussop.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvdXNzb3AuanBlZyIsImlhdCI6MTc2MDU0MTIzNywiZXhwIjoyMzkxMjYxMjM3fQ.3wh18RyvQO-K4RGudXIlgwSsWktQOaFfHjfdPcTZRlY",
    name: "Usopp",
    role: "Sniper – The sharpshooter and storyteller",
    quoteJP: "Ore wa umi no yūkan naru senshi ni narun da!",
    quoteEN: "I'm going to be a brave warrior of the sea!",
  },
  {
    id: "05",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/sanji.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2Uvc2FuamkuanBlZyIsImlhdCI6MTc2MDU0MTI1MSwiZXhwIjoyMzkxMjYxMjUxfQ.FPIpKdSbw9oJTQz7sOUshlYCe_SrBZnXZDZSG9ws43Q",
    name: "Vinsmoke Sanji",
    role: "Cook – The gentleman of the seas",
     quoteJP: "Onna no namida wa ryōri no aji wo kaeru n da.",
    quoteEN: "A woman's tears can change the flavor of any dish.",
    
  },
  {
    id: "06",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/Chopper.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvQ2hvcHBlci5qcGVnIiwiaWF0IjoxNzYwNTQxMTA3LCJleHAiOjIzOTEyNjExMDd9.hU2gOkQfExEq9jbXJ4etEnWurNCeY-Fd5WOwklRwfig",
    name: "Tony Tony Chopper",
    role: "Doctor – The blue-nosed reindeer",
    quoteJP: "Ore wa isha da!",
    quoteEN: "I'm a doctor!",
  },
  {
    id: "07",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/robin.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2Uvcm9iaW4uanBlZyIsImlhdCI6MTc2MDU0MTI2NiwiZXhwIjoyMzkxMjYxMjY2fQ.Chd5i19CNvPXjos2gyBywaNmf1PIzZZUKArAHk7z1fI",
    name: "Nico Robin",
    role: "Archaeologist – The scholar of Ohara",
    quoteJP: "Ikita i…!",
    quoteEN: "I want to live!",
  },
  {
    id: "08",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/franky.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvZnJhbmt5LmpwZWciLCJpYXQiOjE3NjA1NDExMzQsImV4cCI6MjM5MTI2MTEzNH0.tthe2nZTasHno2pjDYMxl_TEIupv1hiYA_De5Lot8mA",
    name: "Franky",
    role: "Shipwright – The cyborg who built the Thousand Sunny",
    quoteJP: "Sūpā～～!!",
    quoteEN: "SUUUPER!!",
  },
  {
    id: "09",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/brook.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvYnJvb2suanBlZyIsImlhdCI6MTc2MDU0MTA4MiwiZXhwIjoyMzkxMjYxMDgyfQ.bVI9pW32MvHNlt8fEP0BUj7tlFAUirIv4RtOvwTnaoU",
    name: "Brook",
    role: "Musician – The soul king of the crew",
    quoteJP: "Yohohohoho! Kami wo kuremasen ka?",
    quoteEN: "Yohohohoho! May I have some hair?",
  },
  {
    id: "10",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/jimebi.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvamltZWJpLmpwZWciLCJpYXQiOjE3NjA1NDExNTcsImV4cCI6MjM5MTI2MTE1N30.ms_fUPYrfH_ogLDSJ2_iMiXgazyiP3f5ipFswgYvBNY",
    name: "Jinbe",
    role: "Helmsman – The knight of the sea",
    quoteJP: "Nakama wo shinjiro, sore ga kaizoku da.",
    quoteEN: "Believe in your crew — that’s what it means to be a pirate.",
  },
  {
    id: "11",
    img: "https://cbvjddpdeuypcsvzcahh.supabase.co/storage/v1/object/sign/action%20mode%20one%20piece/loki.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNTA4ZDA2My0wMzhkLTRkN2QtOTIxOC04MmRhMWZiMGRlODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpb24gbW9kZSBvbmUgcGllY2UvbG9raS5qcGVnIiwiaWF0IjoxNzYwNTQxMTgwLCJleHAiOjIzOTEyNjExODB9.cBaKVHqDmCl08LW877-44R2-tO06y77UjXcaRCmHRIQ",
    name: "Loki",
    role: "'Accursed Prince' of Elbaf",
    quoteJP: "Konton koso ga shin no jiyū da.",
    quoteEN: "Chaos is true freedom.",
  },
];

export default function ShadowsSection() {
  return (
    <div id="page3">
      <h1>Straw Hat Pirates Crew</h1>
      {crew.map((member) => (
        <div key={member.id} className="elem">
          <h4>{member.id}</h4>
          <img src={member.img} alt={member.name} />
          <div className="elem-part2">
            <h1>{member.name}</h1>
            <h5>{member.role}</h5>
            
            <p className="quote">
              <i>{member.quoteJP}</i> <br /> "{member.quoteEN}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
