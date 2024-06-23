const treks = [
  {
    id: 1,
    name: "Kalsubai Peak Trek",
    description:
      "Kalsubai, also known as the 'Everest of Maharashtra,' is the highest peak in the Western Ghats, standing tall at 5,400 feet (1,646 meters). It is located in the Ahmednagar district of Maharashtra, within the Kalsubai Harishchandragad Wildlife Sanctuary.",
    cultural_significance: {
      story:
        "The Kalsubai Peak holds cultural significance, with a small temple dedicated to the local deity, Kalsubai, located at the summit. According to legend, Kalsubai was a young woman who fled from her village to escape her oppressive duties, and she is believed to have reached this peak, where she passed away. The temple at the top serves as a reminder of her story and attracts many devotees, especially during the Navratri festival.",
    },
    trek_details: {
      distance_km: 6.5,
      difficulty_level: "moderate",
      time_to_ascend_hours: 3.5,
      time_to_descend_hours: 2.5,
      trail_description:
        "The trail is well-maintained and offers a mix of steep ascents and flat sections, making it suitable for both beginners and experienced trekkers.",
      night_trek: {
        description:
          "A recent fascination among trekkers is undertaking a night trek to Kalsubai to witness the amazing sunrise from the peak. Starting the trek around midnight, you navigate the trail under the starry sky, experiencing the serene night environment of the Western Ghats. This adds an exciting element to the adventure as you climb in the cool, quiet night, guided by torches and the occasional glow of the moon.",
      },
    },
    attractions: {
      view: "Once you reach the top, you'll be rewarded with spectacular views of the surrounding valleys and villages. On a clear day, you can even catch a glimpse of the famous Bhandardara Lake.",
    },
  },
  {
    id: 2,
    name: "Ratangad Trek",
    description:
      "At an altitude of 4,255 feet, Ratangad Peak is known for its majestic views and historical significance. It is believed to be one of the oldest forts in Maharashtra, dating back to the 12th century.",
    routes: [
      {
        start_point: "Ratanwadi",
        distance_km: 6,
        time_to_ascend_hours: 3.5,
        time_to_descend_hours: 2.5,
      },
      {
        start_point: "Samrad",
        distance_km: 6,
        time_to_ascend_hours: 3.5,
        time_to_descend_hours: 2.5,
      },
    ],
    difficulty_level: "moderate",
    trail_description:
      "With rocky patches where you have to be careful because of sharp rocky edges, steep ascents, and narrow pathways, the trek offers a perfect opportunity to test your physical and mental strength.",
    attractions: {
      view: "From the top of Ratangad Peak, you can witness the stunning views of the surrounding mountains and valleys. The panoramic view of the Sahyadri range is a treat for the eyes and a perfect spot for capturing memorable pictures. You can also catch a glimpse of the nearby forts like Harishchandragad, Kalsubai, and Alang-Madan-Kulang.",
      historical_significance:
        "The fort is believed to have been ruled by various dynasties such as the Marathas, the Mughals, and the British. It is also known for its striking natural rock cavity called 'Nedhe' or 'Eye of the Needle' which is located near the summit of Ratangad Peak.",
    },
  },
  {
    id: 3,
    name: "Harishchandragad Trek",
    description:
      "Harishchandragad is a famous trekking destination in the Ahmednagar district of Maharashtra. Part of the Kalsubai-Harishchandragad Wildlife Sanctuary, this trek is known for its stunning natural beauty, historical temples, and spiritual experience. At an altitude of 4,670 feet, Harishchandragad offers a rich blend of scenic beauty and historical significance.",
    routes: [
      {
        start_point: "Khireshwar",
        difficulty_level: "moderate",
      },
      {
        start_point: "Nalichi Vaat",
        difficulty_level: "difficult",
      },
      {
        start_point: "Pachnai",
        difficulty_level: "easy",
        time_to_ascend_hours: 2.5,
      },
    ],
    attractions: {
      kokankada: {
        description:
          "Kokankada is not just a cliff; it's an experience. This massive, semi-circular rock wall rises to about 3,500 feet and is famous for its stunning sunsets and spectacular views. During the monsoon, the edge of Kokankada becomes a curtain of mist, and on clear days, you can see far into the Konkan plains. The real magic happens with the 'Indravajra' phenomenon, where the cliffs sometimes create a rainbow halo around the sun, a sight that feels like witnessing a celestial spectacle.",
      },
      harishchandreshwar_temple: {
        description:
          "One of the most significant landmarks on the fort is the ancient Harishchandreshwar Temple. This beautiful Shiva temple, dating back to the 9th century, showcases the architectural skill of the Yadava dynasty, who carved it out of a single huge rock. The temple’s intricately carved pillars and rock-cut sanctum are mesmerizing.",
      },
      kedareshwar_cave: {
        description:
          "To the right of the Harishchandreshwar temple, you'll find the Kedareshwar Cave, housing a massive Shivalinga surrounded by waist-deep water. The cave is partially submerged, adding to its mystique. There are four pillars around the Shivalinga, of which only one remains intact. Myth has it that these pillars represent the four yugas (epochs): The Satyuga, Tretayuga, Dwaparyuga, and the current Kaliyuga. It is believed that the world will end when the last pillar collapses. It's a place where history and mythology blend seamlessly, creating an aura of mystery and reverence.",
      },
      pandav_caves: {
        description:
          "These ancient rock-cut caves are said to have been inhabited by the Pandavas during their exile, adding another layer of mythological allure to Harishchandragad. The caves offer a cool refuge from the sun and provide a glimpse into the simple life of those who might have lived there centuries ago. They are also an excellent spot for camping, offering both shelter and a touch of ancient history.",
      },
      taramati_peak: {
        description:
          "Taramati Peak, the highest point on Harishchandragad at an elevation of 4,695 feet, offers breathtaking panoramic views of the surrounding landscape. The climb to the top takes approximately 1 to 1.5 hours, covering a distance of 2 to 3 kilometers from Kokankada. The trail is moderately challenging and involves navigating rocky paths, some steep sections, and dense vegetation. However, the reward is a stunning 360-degree view of the Sahyadri ranges, the Konkan plains, and neighboring forts like Naneghat and Jivdhan.",
      },
    },
  },
];

export default treks;

export const productData = {
  id: "1000",
  code: "f230fh0g3",
  name: "Bamboo Watch",
  description: "Product Description",
  image: "bamboo-watch.jpg",
  price: 65,
  category: "Accessories",
  quantity: 24,
  inventoryStatus: "INSTOCK",
  rating: 5,
};
