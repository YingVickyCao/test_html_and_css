class StyleSheet {
    static create(styles) {
        return styles;
    }
}

const styles = StyleSheet.create({
    a: 1,
    b: 2
});

export function test_static_func() {
    console.log('styles', styles); // {a: 1, b: 2}
}
