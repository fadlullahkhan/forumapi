const CreatedThread = require('../CreatedThread');

describe('a CreatedThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      id: 'thread-1234567890',
      title: 'thread title',
    };

    // Action & Assert
    expect(() => new CreatedThread(payload)).toThrowError(
      'CREATED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      title: true,
      body: 'some text',
      time: 18091998,
      owner: {},
    };

    // Action & Assert
    expect(() => new CreatedThread(payload)).toThrowError(
      'CREATED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create createdThread object correctly', () => {
    // Arrange
    const payload = {
      id: 'thread-1234567890',
      title: 'thread title',
      body: 'thread body',
      time: '18091998',
      owner: 'user-1234567890',
    };

    // Action
    const createdThread = new CreatedThread(payload);

    // Assert
    expect(createdThread.id).toEqual(payload.id);
    expect(createdThread.title).toEqual(payload.title);
    expect(createdThread.body).toEqual(payload.body);
    expect(createdThread.time).toEqual(payload.time);
    expect(createdThread.owner).toEqual(payload.owner);
  });
});
