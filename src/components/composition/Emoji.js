
export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render() {
        let text = "I am the Emoji Component";
        return <div>{text}</div>
     }
 }
