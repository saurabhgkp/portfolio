const Light = ({
    position,
    color,
    intensity,
    orbitalOffset = 0,
    orbitalSpeed = 1
}) => {
    const ref = useRef();
    useFrame(() => {
        let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
        ref.current.position.set(
            position[0],
            Math.sin(date) * 4 + position[2]
        );
    });
    const texture = useTexture("lightbulb.png");
    return (
        <group position={position} ref={ref}>
            <sprite>
                <spriteMaterial
                    attach="material"
                    map={texture}
                    transparent
                    opacity={0.7}
                    color={color}
                />
            </sprite>
            <pointLight color={color} intensity={intensity} decay={2} distance={20} />
        </group>
    );
};
