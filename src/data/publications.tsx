export const publications: PubType[] = [
  {
    abbr: "GLA-CLIP",
    title:
      "Looking Beyond the Window: Global-Local Aligned CLIP for Training-free Open-Vocabulary Semantic Segmentation",
    authorNames: [
      "ByeongCheol Lee",
      "Hyun Seok Seong",
      "Sangeek Hyun",
      "Gilhan Park",
      "WonJun Moon",
      "Jae-Pil Heo",
    ],
    venue: ["Computer Vision and Pattern Recognition (CVPR), 2026"],
  },
  {
    abbr: "MSC",
    title: "Mitigating Semantic Collapse in Partially Relevant Video Retrieval",
    authorNames: [
      "WonJun Moon",
      "MinSeok Jung",
      "Gilhan Park",
      "Tae-Young Kim",
      "Cheol-Ho Cho",
      "Woojin Jun",
      "Jae-Pil Heo",
    ],
    equalContrib: ["WonJun Moon", "MinSeok Jung"],
    venue: [
      "Proceedings of the 39th Conference on Neural Information Processing Systems (NeurIPS 2025)",
    ],
    githubLink: "https://github.com/admins97/MSC_PRVR",
    pdfLink: "https://arxiv.org/abs/2510.27432",
    posterLink: "https://neurips.cc/media/PosterPDFs/NeurIPS%202025/117567.png?t=1763979308.852314",
  },
  {
    abbr: "MBS",
    title: "Mitigating Background Shift in Class-Incremental Semantic Segmentation",
    authorNames: ["Gilhan Park", "WonJun Moon", "SuBeen Lee", "Tae-Young Kim", "Jae-Pil Heo"],
    venue: [
      "Proceedings of Conference on 2024 IEEE European Conference on Computer Vision (ECCV), Milano, Italy",
    ],
    githubLink: "https://github.com/RoadoneP/ECCV2024_MBS",
    pdfLink: "https://arxiv.org/abs/2407.11859",
    posterLink: "https://eccv.ecva.net/media/PosterPDFs/ECCV%202024/791.png?t=1726756650.7522964",
    videoDemoLink: "https://www.youtube.com/watch?v=YQhbYOsedsA&t=135s",
  },
  {
    abbr: "GAN",
    title: "Improving Classification Results on Medical Dataset Augmentation using GAN",
    authorNames: ["Gilhan Park", "Jaehwan Lee", "Ikgyu Lee", "Jisoo Kim", "Jae-Pil Heo"],
    venue: ["Proceedings of Korea Software Congress, 2022, (KSC 2022)"],
    pdfLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=ko&user=c6T-CjIAAAAJ&citation_for_view=c6T-CjIAAAAJ:2osOgNQ5qMEC",
  },
  {
    abbr: "CloudParking",
    title: "Edge Computing Based Cloud Parking Management System",
    authorNames: ["Gilhan Park", "Heedong Kim", "Serin Yoon", "Jaehwan Lee", "Soyeon Jeong"],
    venue: ["Proceedings of the Korea Information Processing Society Conference. KIPS, 2021"],
    pdfLink: "https://koreascience.kr/article/CFKO202133649075982.page",
    githubLink: "https://github.com/RoadoneP/Korean_license_plate_recognition",
  },
];

const domesticVenuePattern =
  /Korea Software Congress|Korea Information Processing Society|KIPS/i;

export const visiblePublications = publications.filter(
  pub => !pub.venue.some(venue => domesticVenuePattern.test(venue)),
);
