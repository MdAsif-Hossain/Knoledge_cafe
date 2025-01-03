
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
    const {title,cover} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of title ${title}`} />
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;