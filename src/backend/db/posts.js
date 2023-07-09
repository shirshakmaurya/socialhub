import {
  formatRandomCommentDate,
  formatRandomPostDate,
} from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hey Everyone!",
    pic: "",
    username: "adarshbalika",
    postedBy: {
      _id: "1",
      firstName: "Adarsh",
      lastName: "Balika",
      username: "adarshbalika",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        {
          _id: "2",
          firstName: "Harry",
          lastName: "Potter",
          username: "harrypotter",
          profile_pic:
            "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "Hi!",
        postId: "1",
        user: {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        replies: [],
        createdAt: formatRandomCommentDate(),
        updatedAt: formatRandomCommentDate(),
      },
      {
        _id: "2",
        content: "Hi",
        postId: "1",
        user: {
          _id: "2",
          firstName: "Harry",
          lastName: "Potter",
          username: "harrypotter",
          profile_pic:
            "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
        },
        replies: [],
        createdAt: formatRandomCommentDate(),
        updatedAt: formatRandomCommentDate(),
      },
    ],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "I’ll be in my bedroom, making no noise and pretending I’m not there.",
    pic: "https://i.ytimg.com/vi/thFmIUPxNY4/hqdefault.jpg",
    username: "harrypotter",
    postedBy: {
      _id: "2",
      firstName: "Harry",
      lastName: "Potter",
      username: "harrypotter",
      profile_pic:
        "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
    },
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        {
          _id: "1",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
        },
        {
          _id: "4",
          firstName: "Hermione",
          lastName: "Granger",
          username: "granger",
          profile_pic:
            "https://i.insider.com/60772a1742061500181757bc?width=700",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "Hey",
        postId: "2",
        user: {
          _id: "1",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
        },
        replies: [],
        createdAt: formatRandomCommentDate(),
        updatedAt: formatRandomCommentDate(),
      },
    ],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content:
      "When in doubt, go to the library.",
    pic: "https://images.ctfassets.net/usf1vwtuqyxm/uabNekzJQRgdB8d74jbkC/97de9bdfd94ae25cc1c29b4055d0dd26/HP-F4-goblet-of-fire-harry-ron-hermione-library-golden-egg-web-landscape?w=1200&fit=fill&f=top",
    username: "ronweasley",
    postedBy: {
      _id: "3",
      firstName: "Ron",
      lastName: "Weasley",
      username: "ronweasley",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
    },
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "2",
          firstName: "Harry",
          lastName: "Potter",
          username: "harrypotter",
          profile_pic:
            "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
        },
        {
          _id: "1",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
        },
        {
          _id: "4",
          firstName: "Hermione",
          lastName: "Granger",
          username: "granger",
          profile_pic:
            "https://i.insider.com/60772a1742061500181757bc?width=700",
        },
        {
          _id: "5",
          firstName: "Rubeus",
          lastName: "Hagrid",
          username: "hagrid",
          profile_pic:
            "https://assets.telegraphindia.com/telegraph/2022/Oct/1665822868_robbie-coltrane-cms-4-1.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
    pic: "",
    username: "granger",
    postedBy: {
      _id: "4",
      firstName: "Hermione",
      lastName: "Granger",
      username: "granger",
      profile_pic: "https://i.insider.com/60772a1742061500181757bc?width=700",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        {
          _id: "2",
          firstName: "Harry",
          lastName: "Potter",
          username: "harrypotter",
          profile_pic:
            "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "Hi",
        postId: "4",
        user: {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        replies: [
        ],
        createdAt: formatRandomCommentDate(),
        updatedAt: formatRandomCommentDate(),
      },
    ],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "The best of us sometimes eat our words.",
    pic: "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG",
    username: "albus",
    postedBy: {
      _id: "6",
      firstName: "Albus",
      lastName: "Dumbledore",
      username: "albus",
      profile_pic:
        "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "5",
          firstName: "Rubeus",
          lastName: "Hagrid",
          username: "hagrid",
          profile_pic:
            "https://assets.telegraphindia.com/telegraph/2022/Oct/1665822868_robbie-coltrane-cms-4-1.jpg",
        },
        {
          _id: "2",
          firstName: "Harry",
          lastName: "Potter",
          username: "harrypotter",
          profile_pic:
            "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "Mischief Managed!",
    pic: "",
    username: "harrypotter",
    postedBy: {
      _id: "2",
      firstName: "Harry",
      lastName: "Potter",
      username: "harrypotter",
      profile_pic:
        "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Ron",
          lastName: "Weasley",
          username: "ronweasley",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
        },
        {
          _id: "1",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profile_pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "Fear of a name only increases fear of the thing itself.",
    pic: "",
    username: "granger",
    postedBy: {
      _id: "4",
      firstName: "Hermione",
      lastName: "Granger",
      username: "granger",
      profile_pic: "https://i.insider.com/60772a1742061500181757bc?width=700",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "Learning FullStack",
    pic: "",
    username: "adarshbalika",
    postedBy: {
      _id: "1",
      firstName: "Adarsh",
      lastName: "Balika",
      username: "adarshbalika",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDln-yqZVXyNMyoN_I5-N_C9Jir-cV_de-peChMRBkctNR_1MtYZUaN_OuDecv8eGEG2Q&usqp=CAU",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "They were starving him, Mum! There were bars on his window!",
    pic: "",
    username: "ronweasley",
    postedBy: {
      _id: "3",
      firstName: "Ron",
      lastName: "Weasley",
      username: "ronweasley",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALdQb3Jm6HLa04sA-warNlUQesnI253kxNQ&usqp=CAU",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "Yer a wizard Harry.",
    pic: "",
    username: "hagrid",
    postedBy: {
      _id: "5",
      firstName: "Rubeus",
      lastName: "Hagrid",
      username: "hagrid",
      profile_pic:
        "https://assets.telegraphindia.com/telegraph/2022/Oct/1665822868_robbie-coltrane-cms-4-1.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "That wand’s more trouble than it’s worth. And quite honestly, I’ve had enough trouble for a lifetime",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvwxtUyRa4T6I8QKAl96jPMPMEzbPLjGykg&usqp=CAU",
    username: "harrypotter",
    postedBy: {
      _id: "2",
      firstName: "Harry",
      lastName: "Potter",
      username: "harrypotter",
      profile_pic:
        "https://howtodrawforkids.com/wp-content/uploads/2021/11/Harry-Potter-drawing-tutorial.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content: "I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with.",
    pic: "https://static.toiimg.com/thumb/msid-94872235,width-1280,resizemode-4/94872235.jpg",
    username: "hagrid",
    postedBy: {
      _id: "5",
      firstName: "Rubeus",
      lastName: "Hagrid",
      username: "hagrid",
      profile_pic:
        "https://assets.telegraphindia.com/telegraph/2022/Oct/1665822868_robbie-coltrane-cms-4-1.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
  {
    _id: uuid(),
    content:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
    pic: "",
    username: "albus",
    postedBy: {
      _id: "6",
      firstName: "Albus",
      lastName: "Dumbledore",
      username: "albus",
      profile_pic:
        "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatRandomPostDate(),
    updatedAt: formatRandomPostDate(),
  },
];
