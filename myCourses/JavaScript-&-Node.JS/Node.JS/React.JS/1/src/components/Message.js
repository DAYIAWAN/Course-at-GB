function Message({title, text}) {
    return (
        <div className="message">
            <p className="message__title">{title}</p>
            <p className="message__text">{text}</p>
        </div>
    )
}

export default Message;