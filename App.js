import React from 'react';
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Textarea,
  Form,
} from 'native-base';
import { AppFontLoader } from './utils/AppFontLoader';
  render() {
    return (
      <AppFontLoader>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Textarea</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Form>
              <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </Form>
          </Content>
        </Container>
      </AppFontLoader>
    );
  }
}
