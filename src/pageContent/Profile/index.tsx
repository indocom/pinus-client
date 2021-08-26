import Text from "src/components/Text";


const ProfileContent: React.FC<Record<string, never>> = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6">
        {/* Default spans 1 only */}
        <div className="col-start-2 row-start-2 col-span-4">
          <Text variant="header">Hello, World</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolorum omnis, modi error eos commodi, quae
            perspiciatis numquam tempora eligendi alias inventore nesciunt totam
            ex asperiores temporibus sint! Numquam, quia!
          </Text>
        </div>

        {/* Default spans 1 only */}
        <div className="col-start-7 row-start-4 col-span-4 justify-end">
          <div>
            <Text variant="header">Hello, World</Text>
          </div>
          <div>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dolorum omnis, modi error eos commodi, quae
              perspiciatis numquam tempora eligendi alias inventore nesciunt totam
              ex asperiores temporibus sint! Numquam, quia!
            </Text>
          </div>
        </div>
        {/* <div className="content-end">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div> */}
      </div>
    </>
  );
};

export default ProfileContent;
