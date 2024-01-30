

import {
    Avatar, Card, CardActions, CardContent,
    CardHeader, CardMedia, IconButton, Typography
} from '@mui/material';
import { MoreVert, Favorite } from '@mui/icons-material';

export default function Post({ post }) {
    const { title, content, author, likeCount, attachment, updatedAt } = post;
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{author[0]}</Avatar>}
                title={author}
                // subheader={moment(updatedAt).format('HH:MM MMDD,YYYY')}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia image={attachment} title={title} />
            <CardContent>
                <Typography
                    variant='h5'
                    color='textPrimary'
                >
                    {title}
                </Typography>
                <Typography
                    variant='body2'
                    component='p'
                    color='textSecondary'
                >
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Favorite />
                    <Typography
                        component='span'
                        color='textSecondary'
                    >
                        {likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}
