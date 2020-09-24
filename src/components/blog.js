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
        content:"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum.\n\nVous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin.\n\nCe qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable.Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
        date:"23th june 2020"
    },
    {
        id:2,
        img:"https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&hash=UVpx7hn%2Fdz%2FQj6xAZ5bxdfdDPUU%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nmgkVjBEk5KeUoAGz60oISIPETTGjWyW1-8_hGCOqBICLGuOmwyxJBkN56VphKav_XnC_RQ",
        title: "Second Post",
        description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer.",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id eros tincidunt, imperdiet libero a, pharetra urna. Aenean lobortis rutrum diam, vehicula placerat ante molestie vitae. Proin eu pellentesque augue. Mauris tellus odio, finibus eu nisi id, placerat scelerisque lacus. Nullam bibendum nulla non justo mattis, tempor ultricies odio facilisis. Nam nec metus in sem tempus tempus. In et metus eget tellus consequat blandit blandit eu felis. Vestibulum at neque vitae tellus gravida sollicitudin eu ut quam. Nulla facilisi. Aliquam sed lacus eget ex congue dictum nec in arcu. Integer eleifend tortor blandit pharetra maximus. Aliquam varius tellus eu dolor laoreet euismod. Praesent non nisi iaculis, accumsan neque sed, hendrerit nisl. Nulla facilisi. Fusce porttitor leo non ipsum laoreet, in sagittis risus venenatis. Aenean ultricies erat at dolor dictum dapibus.\n\nIn sed lacus non nisi malesuada congue. Sed eu justo non nisl rutrum fringilla id sed odio. Duis finibus tortor mattis consectetur consequat. Nam ac ullamcorper urna. Nulla commodo molestie velit. Vestibulum risus metus, euismod a euismod et, pharetra vel lacus. Donec sodales, diam eu feugiat vehicula, risus purus facilisis nibh, id rhoncus metus lectus non ante. Cras accumsan tellus nec tortor volutpat egestas. Pellentesque ex orci, accumsan in pharetra id, vestibulum in metus. In hac habitasse platea dictumst. Nulla sollicitudin neque placerat imperdiet faucibus. Suspendisse eget gravida ligula, ut vulputate quam. Nunc ut dignissim diam, non dictum leo. Duis consectetur pulvinar odio quis placerat. Phasellus vel commodo tellus, ac pulvinar nisi.\n\nNam sit amet lorem risus. Mauris quis pharetra sapien. Praesent pulvinar lacus eget quam finibus, vitae venenatis purus mollis. Nunc sed ullamcorper felis, non posuere risus. Nulla et nulla id mi tempus tincidunt. Ut nec porta purus. Sed eu felis pretium, eleifend arcu eu, suscipit libero. Morbi eget libero id libero sollicitudin egestas et nec eros. Fusce dui turpis, pharetra eu eros et, pulvinar malesuada eros. Maecenas pulvinar blandit libero, nec finibus tellus gravida in. Ut sit amet nunc eleifend, vestibulum nulla ut, placerat dui. Nullam bibendum accumsan aliquam. Aliquam semper mattis lorem, eu luctus odio ultricies a. Nam dapibus nisi eu dignissim rutrum.\n\nDonec maximus purus sed urna condimentum pulvinar. Vestibulum lobortis, mi a consectetur condimentum, risus nunc tempus urna, ut commodo elit tortor a felis. Sed fringilla enim ex, a tristique mauris tempus sed. Nam tempus porttitor magna nec finibus. Nam quis ex in sem porttitor scelerisque at sit amet augue. Ut varius nunc sed nulla rutrum finibus. Integer mauris ex, pulvinar quis hendrerit volutpat, lacinia mollis risus. Sed at cursus sem, sed viverra eros.\n\n",
        date:"24th june 2020"
    },
    {
        id:3,
        img:"https://i.ytimg.com/vi/0l5Rez7MHiI/maxresdefault.jpg",
        title: "Third Post",
        description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        content:"3",
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
                        <Link to={`./blog/${p.id}`} post={p}> 
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