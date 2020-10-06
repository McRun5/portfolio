import React from 'react'
import { FirstTitle, BlogPosts, Post, Image, PostInfo, PostTitle, PostDate, PostDescription } from '../styled/blg'
import { ThemeContext } from "../ThemeContext";
import { Link } from 'react-router-dom';
import Footer from './footer';
import Nav from './nav'


export const Posts = [
    {
        id:1,
        img:"https://create-react-app.dev/img/logo.svg",
        title: "First Post",
        description:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.",
        content:[
            {
                type:"paragraph",
                data:"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum."
            },
            {
                type:"paragraph",
                data:"Vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin."
            },
            {
                type:"paragraph",
                data:"Ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable.Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour."
            },
            {
                type:"image",
                data:"https://create-react-app.dev/img/logo.svg"
            }
        ],
        date:"23th june 2020",
    },
    {
        id:2,
        img:"https://create-react-app.dev/img/logo.svg",
        title: "Second Post",
        description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer.",
        content:[
            {
                type:"paragraph",
                data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id eros tincidunt, imperdiet libero a, pharetra urna. Aenean lobortis rutrum diam, vehicula placerat ante molestie vitae. Proin eu pellentesque augue. Mauris tellus odio, finibus eu nisi id, placerat scelerisque lacus. Nullam bibendum nulla non justo mattis, tempor ultricies odio facilisis. Nam nec metus in sem tempus tempus. In et metus eget tellus consequat blandit blandit eu felis. Vestibulum at neque vitae tellus gravida sollicitudin eu ut quam. Nulla facilisi. Aliquam sed lacus eget ex congue dictum nec in arcu. Integer eleifend tortor blandit pharetra maximus. Aliquam varius tellus eu dolor laoreet euismod. Praesent non nisi iaculis, accumsan neque sed, hendrerit nisl. Nulla facilisi. Fusce porttitor leo non ipsum laoreet, in sagittis risus venenatis. Aenean ultricies erat at dolor dictum dapibus."
            },
            {
                type:"paragraph",
                data:"In sed lacus non nisi malesuada congue. Sed eu justo non nisl rutrum fringilla id sed odio. Duis finibus tortor mattis consectetur consequat. Nam ac ullamcorper urna. Nulla commodo molestie velit. Vestibulum risus metus, euismod a euismod et, pharetra vel lacus. Donec sodales, diam eu feugiat vehicula, risus purus facilisis nibh, id rhoncus metus lectus non ante. Cras accumsan tellus nec tortor volutpat egestas. Pellentesque ex orci, accumsan in pharetra id, vestibulum in metus. In hac habitasse platea dictumst. Nulla sollicitudin neque placerat imperdiet faucibus. Suspendisse eget gravida ligula, ut vulputate quam. Nunc ut dignissim diam, non dictum leo. Duis consectetur pulvinar odio quis placerat. Phasellus vel commodo tellus, ac pulvinar nisi."
            },
            {
                type:"paragraph",
                data:"Ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable.Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour."
            },
            {
                type:"image",
                data:"https://create-react-app.dev/img/logo.svg"
            }
        ],
        date:"24th june 2020"
    },
    {
        id:3,
        img:"https://i.ytimg.com/vi/0l5Rez7MHiI/maxresdefault.jpg",
        title: "Third Post",
        description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        content:[
            {
                type:"paragraph",
                data:"3"
            }
        ],
        date:"27th june 2020"
    },
]


const Blog = () => {

    const [ theme ] = React.useContext(ThemeContext);
    return (
        <>
            <Nav /> 
            <FirstTitle>Blog</FirstTitle>
            <BlogPosts>
                {
                    Posts.map(p => (
                        <Link to={`./blog/${p.title.replace(' ', '-')}`} post={p}> 
                            <Post currentTheme={theme}>
                                <Image src={p.img}></Image>
                                <PostInfo>
                                    <PostTitle>{p.title}</PostTitle>
                                    <PostDescription>{p.description}</PostDescription>
                                    <PostDate>{p.date}</PostDate>
                                </PostInfo>
                            </Post>
                        </Link>
                    ))
                }
            </BlogPosts>
            <Footer />
        </>
    )
}

export default Blog;