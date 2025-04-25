import {
    Card,
    CardMedia,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export type Product = {
    brand: string;
    href: string;
    title: string;
    newPrice: string;
    usedPrice: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const rakutenBaseURL = "https://fr.shopping.rakuten.com";

    if (!product.title || !product.brand || !product.image || !product.href || !product.newPrice) return null;

    return (
        <Card
            component="a"
            href={rakutenBaseURL + product.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                maxWidth: 343,
                minHeight: 152,
                boxShadow: 'none',
                border: '1px solid #D3D3D3',
                display: "block",
                textDecoration: "none",
                borderRadius: 2,
                cursor: "pointer",
                transition: "border-color 0.3s",
                '&:hover': {
                    borderColor: '#333',
                }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    py: 2,
                    px: 0,
                    gap: 2,
                    alignItems: isMobile ? "center" : "flex-start",
                }}
            >
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                        width: 120,
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 1,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography fontSize={12} color="#696969">
                            {product.brand}
                        </Typography>
                        <Typography
                            fontSize={14}
                            color="#333"
                            fontWeight="bold"
                            sx={{
                                transition: 'color 0.2s',
                                '&:hover': {
                                    color: '#1976d2',
                                },
                            }}
                        >
                            {product.title}
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Box display="flex" alignItems="baseline" gap={1}>
                            <Typography fontSize={20} fontWeight="bold" color="#BF0000">
                                {product.newPrice}
                            </Typography>
                            <Typography fontSize={14} color="#BF0000" fontWeight="bold">
                                Neuf
                            </Typography>
                        </Box>
                        {product.usedPrice && (
                            <Box display="flex" alignItems="baseline" gap={1}>
                                <Typography fontSize={14} color="#333">
                                    Occasion dès
                                </Typography>
                                <Typography fontSize={20} color="#333" fontWeight="bold">
                                    {product.usedPrice}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}
