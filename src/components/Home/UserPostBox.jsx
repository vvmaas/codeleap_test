import styled from "styled-components"
import { useState } from "react"

import { BiEdit } from "react-icons/bi"
import { MdDeleteForever } from "react-icons/md"

import timeSince from "../../utils/timeSince"

import PopUpBox from "../PopUpBox/PopUpBox"
import DeleteContent from "../PopUpBox/DeleteContent"
import EditContent from "../PopUpBox/EditContent"
import { Container } from "./CreatePostBox"
import { Wrapper, Header, Info, Content } from "./PostBox"

export default function UserPostBox({id, username, created_at, title, content}) {
    const [display, setDisplay] = useState('flex');
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    return (
        <>
            <Container display={display}>
                <Wrapper>
                    <Header>
                        <h4>{editedTitle ? editedTitle : title}</h4>
                        <Icons>
                            <MdDeleteForever cursor="pointer" onClick={() => setDeleting(true)}/>
                            <BiEdit cursor="pointer" onClick={() => setEditing(true)}/>
                        </Icons>
                    </Header>
                    <Info>
                        <p>@{username}</p>
                        <p>{timeSince(new Date(created_at))} ago</p>
                    </Info>
                    <Content>
                        {editedContent ? editedContent : content}
                    </Content>
                </Wrapper>
            </Container>
                <PopUpBox display={editing}>
                    <EditContent id={id} title={title} setEditedTitle={setEditedTitle} content={content} setEditedContent={setEditedContent} setEditing={setEditing}/>
                </PopUpBox>
                <PopUpBox display={deleting}>
                    <DeleteContent id={id} setDisplay={setDisplay} setDeleting={setDeleting}/>
                </PopUpBox>
        </>
    )
}

const Icons = styled.div`
    color: white;
    font-size: 30px;
    width: 7%;
    min-width: 80px;
    margin-right: 24px;
    display: flex;
    justify-content: space-between;
`