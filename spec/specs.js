describe('wordReplace', function() {
  it("should replace a target word with the replacement word", function() {
    expect(wordReplace("hello world", "world", "universe")).to.equal("hello universe");
  });

  it("should replace every instance of target word with replacement word", function() {
    expect(wordReplace("hello hello world", "hello", "HEY")).to.equal("HEY HEY world");
  });

  it("should take punctuation into consideration when replacing target word", function() {
    expect(wordReplace("hello,!@$#. hello. !@#$%^&* world.", "hello", "HEY")).to.equal("HEY HEY world");
  });
});
